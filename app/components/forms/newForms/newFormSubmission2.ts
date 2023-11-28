import { type Inputs } from "./newMultiStepForm"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth, ref, storage, uploadString } from "@app/firebase/firebaseInit"
import { doc, setDoc, db, createDocument } from "@app/firebase/storeFunctions"
import { SendApplicationEmail } from "../FormSupport"

// get initials function
function getInitials(firstName: string, lastName: string): string {
	const firstInitial = firstName.charAt(0).toUpperCase()
	const lastInitial = lastName.charAt(0).toUpperCase()
	return `${firstInitial}${lastInitial}`
}

// upload the formatted Data
const handleData = (incomingData: incomingDataProps) => {
	const { firstName, lastName, user, address } = incomingData
	const fullName = firstName + " " + lastName

	const formatData = (includePhysical: boolean) => {
		const newData: dataWithAddressProps | dataNoAddressProps = {
			...incomingData,
			status: "submitted",
			name: fullName,
			address: {
				document: {
					...address.document,
					state: address.document.state.label,
				},
				physical?: {
					...address.document,
					state: address.document.state.label,
				}
			},
		}

		if (includePhysical) {
			newData.address.physical = {
				...address,
				document: {
					...address.document,
					state: address.document.state.label,
				},
				physical: {
					...address.document,
					state: address.document.state.label,
				},
			}
		}

		delete newData.password // Remove password for security

		return newData
	}

	try {
		if (address?.physical) {
			const dataWithPhysical = formatData(true)
			createDocument({
				collectionName: "applicants",
				data: dataWithPhysical,
			})
		} else {
			const dataWithoutPhysical = formatData(false)
			createDocument({
				collectionName: "applicants",
				data: dataWithoutPhysical,
			})
		}
	} catch (err) {
		console.error("Error creating firebase data:", err)
	}
}

// Function to format data with a physical address
const formatDataWithPhysical = (
	incomingData: incomingDataProps,
	userId?: string
): dataWithAddressProps => {
	const { firstName, lastName, user, address } = incomingData
	const fullName = firstName + " " + lastName

	const newDataWithPhysical: dataWithAddressProps = {
		...incomingData,
		status: "submitted",
		name: fullName,
		userId: userId || "",
		address: {
			document: {
				...address.document,
				state: address.document.state.label,
			},
			physical: {
				...address,
				document: {
					...address.document,
					state: address.document.state.label,
				},
			},
		},
	}
	delete newDataWithPhysical.password // Remove password for security

	return newDataWithPhysical
}

// Function to format data without a physical address
const formatDataWithoutPhysical = (
	incomingData: incomingDataProps
): dataNoAddressProps => {
	const { firstName, lastName, user, address } = incomingData
	const fullName = firstName + " " + lastName

	const newDataWithoutPhysical: dataNoAddressProps = {
		...incomingData,
		status: "submitted",
		name: fullName,
		address: {
			document: {
				...address.document,
				state: address.document.state.label,
			},
		},
	}
	delete newDataWithoutPhysical.password // Remove password for security

	return newDataWithoutPhysical
}

// handle accountCreation
const handleCreateAccount = async (
	incomingData: incomingDataPropsWithPassword
) => {
	const { email, password, firstName, lastName } = incomingData
	const initials = getInitials(firstName, lastName)
	console.log("creating account...")
	try {
		// create the user in Firebase  Auth
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			email,
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
		await setDoc(userDocRef, userDocData)
		console.log("users account created successfully.")
		return user
	} catch (err) {
		console.log("account creation error: ", err)
		return { err }
	}
}

// handle email
const handleEmail = async (emailData: emailDataProps) => {
	console.log(emailData)
	await SendApplicationEmail({
		// @ts-expect-error something about the email type issue
		formData: newData as emailDataProps,
	}).catch((err) => console.log("email catch error: ", err))
	return
}

// Main handle function
const newFormSubmission = async (incomingData: incomingDataProps) => {
	try {
		if (incomingData.userAccount === "true") {
			console.log("Creating user account...")
			const user = handleCreateAccount(incomingData)

			if (user) {
				const appDataWithUserData: appDataWithUserDataProps = {
					...incomingData,
					user,
				}

				let formattedData

				if (appDataWithUserData.address?.physical?.city !== undefined) {
					console.log(
						"Secondary address present, submitting dataWithAddress"
					)
					formattedData = formatDataWithPhysical(
						appDataWithUserData,
						user.uid
					)
				} else {
					console.log(
						"No secondary address, submitting dataNoAddress"
					)
					formattedData = formatDataWithoutPhysical(
						appDataWithUserData,
						user.uid
					)
				}

				handleEmail(incomingData)
				handleData(formattedData)
			} else {
				console.log("No user was created")
			}
		}
		if (incomingData.userAccount === "false") {
			console.log("User account not needed")
			const formattedData = formatDataWithoutPhysical(incomingData)
			handleEmail(incomingData)
			handleData(formattedData) // Handle data without address
		}
	} catch (err) {
		console.error("Error creating a new account:", err)
	}
}

export { newFormSubmission }

////////////////////////////////////////////////////////////////////////////////// types

// incomingDataProps
type incomingDataProps = Inputs & {
	user?: any
}
// type incomingDataProps = {
// 	email: string
// 	address: {
// 		physical: {
// 			addressLn1: string
// 			city: string
// 			state: {
// 				label: string
// 				value: string
// 			}
// 			zip: string
// 		}
// 		document: {
// 			addressLn1: string
// 			city: string
// 			state: {
// 				label: string
// 				value: string
// 			}
// 			zip: string
// 		}
// 	}
// }

// emailDataProps

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

type incomingDataPropsWithPassword = incomingDataProps & {
	password: string
}
type appDataWithUserDataProps = incomingDataProps & {
	user: any
}
