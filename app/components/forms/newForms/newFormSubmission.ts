/* eslint-disable */
import { type Inputs } from "./newMultiStepForm"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth, ref, storage, uploadString } from "@app/firebase/firebaseInit"
import { doc, setDoc, db, createDocument } from "@app/firebase/storeFunctions"
import { SendApplicationEmail } from "../FormSupport"

const FormattedDataFunction = ({
	data,
	output,
	userId,
}: FormattedDataFuncProps) => {
	// output = UserPhys, UserNoPhys, NoUserNoPhys, NoUserNoPhys, or email
	let formattedData
	switch (output) {
		case "UserPhys":
			formattedData = {
				...data,
				status: "submitted",
				name: `${data.firstName} ${data.lastName}`,
				userId: userId,
				address: {
					...data.address,
					document: {
						...data.address.document,
						state: data.address.document.state.label,
					},
					physical: {
						...(data.address?.physical || {}),
						state: data.address?.physical?.state?.label || "",
					},
				},
			}
			if (data.password !== undefined) {
				delete formattedData.password
			}
			break
		case "UserNoPhys":
			formattedData = {
				...data,
				status: "submitted",
				name: `${data.firstName} ${data.lastName}`,
				userId: userId,
				address: {
					document: {
						...data.address.document,
						state: data.address.document.state.label,
					},
				},
			}
			if (data.password !== undefined) {
				delete formattedData.password
			}
			break
		case "NoUserPhys":
			formattedData = {
				...data,
				status: "submitted",
				name: `${data.firstName} ${data.lastName}`,
				address: {
					document: {
						...data.address.document,
						state: data.address.document.state.label,
					},
					physical: {
						...data.address!.physical,
						state: data.address!.physical!.state!.label,
					},
				},
			}
			delete formattedData.password
			break
		case "NoUserNoPhys":
			formattedData = {
				...data,
				status: "submitted",
				name: `${data.firstName} ${data.lastName}`,
				address: {
					document: {
						...data.address?.document,
						state: data.address?.document.state.label,
					},
				},
			}
			delete formattedData.password
			break
		case "email":
			formattedData = {
				...data,
				status: "submitted",
				// name: `${data.firstName} ${data.lastName}`,
				address: {
					...data.address,
					document: {
						...data.address.document,
						state: data.address.document.state.label,
					},
					physical: {
						...(data.address?.physical || {}),
						state: data.address?.physical?.state?.label || "",
					},
				},
			}
			if (data.password !== undefined) {
				delete formattedData.password
			}
			break
	}
	console.log("formatted data", formattedData)
	return formattedData
}

const formSubmission = async (incomingData: incomingDataProps) => {
	const { email, password, firstName, lastName } = incomingData
	const initials = getInitials(firstName, lastName)

	//format data for email with userAccount
	const emailData = FormattedDataFunction({
		data: incomingData,
		output: "email",
		userId: "1",
	})
	try {
		await SendApplicationEmail({
			//@ts-expect-error
			formData: emailData,
		}).catch((err) => console.log("email catch error: ", err))
		console.log("email data: ", emailData)
	} catch (err) {
		console.log("unsuccessful email attempt", err)
	}
	// user account???
	if (incomingData.userAccount === "true") {
		// create user account
		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				//@ts-expect-error
				password
			)
			//get the user's id
			const user = userCredential.user
			const userId = user.uid
			// Generate the user's avatar
			const avatarUrl = `https://api.dicebear.com/7.x/initials/svg?seed=${initials}`

			// create the user's folder in firebase storage
			const storageRef = ref(storage, `applicants/${userId}/${userId}`)

			// Upload placeholder file if needed
			if (incomingData.userAccount) {
				const placeholderData = "Placeholder data"
				await uploadString(storageRef, placeholderData)
			}
			// create a new users section for them
			const userDocRef = doc(db, "users", userId)
			const userDocData = {
				email: email,
				role: "user",
				username: email,
				avatarUrl: avatarUrl,
				userId: userId,
			}
			// Set the user document in Firestore with the updated data
			try {
				await setDoc(userDocRef, userDocData)
			} catch (err) {
				console.log("error setting doc refs: ", err)
			}

			//format data for firebase
			// data has a physical address and a user account
			if (hasCityInPhysicalAddress(incomingData)) {
				console.log(
					"Secondary address present, submitting dataWithAddress"
				)
				const newData = FormattedDataFunction({
					data: incomingData,
					output: "UserPhys",
					userId: userId,
				})

				const appDocRef = doc(db, "applicants", userId)
				const appDocData = newData

				try {
					await setDoc(appDocRef, appDocData)
				} catch (err) {
					console.log("error setting doc refs: ", err)
				}
			}
			// data doesn't have a physical address but does have a user account
			if (!hasCityInPhysicalAddress(incomingData)) {
				console.log(
					"No secondary address or city, submitting dataNoAddress"
				)
				const newData = FormattedDataFunction({
					data: incomingData,
					output: "UserNoPhys",
					userId: userId,
				})
				const appDocRef = doc(db, "applicants", userId)
				const appDocData = newData
				console.log(
					"OUTPUTTED DATA FROM USERNOPHYS function",
					appDocData
				)

				try {
					await setDoc(appDocRef, appDocData)
				} catch (err) {
					console.log("error setting doc refs: ", err)
				}
			}
		} catch (err) {
			console.log("unsuccessful data upload attempt", err)
		}
		return
	}

	if (incomingData.userAccount === "false") {
		//format data for firebase
		// data has a physical address but no userAccount
		if (hasCityInPhysicalAddress(incomingData)) {
			console.log("Secondary address present, submitting dataWithAddress")
			let newData = FormattedDataFunction({
				data: incomingData,
				output: "NoUserPhys",
				userId: "0",
			})
			try {
				createDocument({
					collectionName: "applicants",
					data: newData,
				})
				console.log("doc uploaded successfully")
			} catch (err) {
				console.log("error uploading application", err)
			}
		}
		// data doesn't have a physical address or a userAccount
		if (!hasCityInPhysicalAddress(incomingData)) {
			console.log(
				"No secondary address or city, submitting dataNoAddress"
			)
			let newData = FormattedDataFunction({
				data: incomingData,
				output: "NoUserNoPhys",
				userId: "0",
			})
			try {
				createDocument({
					collectionName: "applicants",
					data: newData,
				})
			} catch (err) {
				console.log("error uploading application", err)
			}
		}

		//format data for email without userAccount
		let emailData = FormattedDataFunction({
			data: incomingData,
			output: "email",
			userId: "1",
		})
		try {
			await SendApplicationEmail({
				//@ts-expect-error
				formData: emailData,
			}).catch((err) => console.log("email catch error: ", err))
			console.log("email data: ", emailData)
		} catch (err) {
			console.log("unsuccessful email attempt", err)
		}
		return
	}
}
// check if city is defined or not.
const hasCityInPhysicalAddress = (
	incomingData: incomingDataProps
): boolean | undefined => {
	return (
		incomingData.address?.physical &&
		incomingData.address.physical.city !== undefined
	)
}

function getInitials(firstName: string, lastName: string) {
	const firstInitial = firstName.charAt(0).toUpperCase()
	const lastInitial = lastName.charAt(0).toUpperCase()
	return `${firstInitial}${lastInitial}`
}

export { formSubmission }

////////////////////////////////////////////////////////////////////////////////// types

type FormattedDataFuncProps = {
	data: incomingDataPropsWithPassword | incomingDataProps
	output: "UserPhys" | "UserNoPhys" | "NoUserPhys" | "NoUserNoPhys" | "email"
	userId: string
}

type incomingDataPropsWithPassword = incomingDataProps & {
	password: string
}

// incomingDataProps
type incomingDataProps = Inputs & {
	user?: any
	password?: string
}
type emailDataProps = {
	email: string
	address: {
		physical: {
			addressLn1: string
			city: string
			state: string
			zip: string
		}
		document: {
			addressLn1: string
			city: string
			state: string
			zip: string
		}
	}
}
// dataWithAddressProps
type dataWithAddressProps = Omit<incomingDataProps, "password"> &
	Omit<incomingDataProps, "address"> &
	Omit<incomingDataProps, "password"> & {
		status: "submitted"
		address: {
			document: {
				addressLn1: string
				city: string
				state: string
				zip: string
			}
			physical: {
				addressLn1: string
				city: string
				state: string
				zip: string
			}
		}
	}
//dataWithoutAddressProps
type dataNoAddressProps = Omit<incomingDataProps, "password"> &
	Omit<incomingDataProps, "address"> & {
		status: "submitted"
		address: {
			document: {
				addressLn1: string
				city: string
				state: string
				zip: string
			}
		}
	}
