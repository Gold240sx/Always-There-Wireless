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

// check if city is defined or not.
const hasCityInPhysicalAddress = (incomingData: incomingDataProps): boolean => {
	return (
		incomingData.address?.physical &&
		incomingData.address.physical.city !== undefined
	)
}

// handleData function focused on submitting formatted data to Firebase
const handleData = (
	formattedData: dataWithAddressProps | dataNoAddressProps
) => {
	try {
		createDocument({
			collectionName: "applicants",
			data: formattedData,
		})
	} catch (err) {
		console.error("Error creating firebase data:", err)
	}
}

// Format data with a physical address
const formatDataWithPhysical = (
	incomingData: incomingDataProps
): dataWithAddressProps => {
	const { firstName, lastName, user, address } = incomingData
	const fullName = `${firstName} ${lastName}`
	const newDataWithPhysical: dataWithAddressProps = {
		...incomingData,
		status: "submitted",
		name: fullName,
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

// Format data without a physical address
const formatDataWithoutPhysical = (
	incomingData: incomingDataProps
): dataNoAddressProps => {
	const { firstName, lastName, address } = incomingData
	const fullName = `${firstName} ${lastName}`

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

// Prepare data for Firebase
const prepareDataForFirebase = (incomingData: incomingDataProps) => {
	if (incomingData.address?.physical) {
		return formatDataWithPhysical(incomingData)
	} else {
		return formatDataWithoutPhysical(incomingData)
	}
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
		let user
		if (incomingData.userAccount === "true") {
			console.log("Creating user account...")
			user = await handleCreateAccount(incomingData)

			if (!user) {
				console.log("No user was created")
			}
		}

		const formattedData = prepareDataForFirebase(incomingData)

		if (hasCityInPhysicalAddress(incomingData)) {
			console.log("Secondary address present, submitting dataWithAddress")
		} else {
			console.log(
				"No secondary address or city, submitting dataNoAddress"
			)
		}

		createDocument({
			collectionName: "applicants",
			data: formattedData,
		})

		handleEmail(formattedData)
		handleData(formattedData)
	} catch (err) {
		console.error("Error creating a new account:", err)
	}
}

export { formSubmission }

////////////////////////////////////////////////////////////////////////////////// types

// incomingDataProps
type incomingDataProps = Inputs & {
	user?: any
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
			physical?: {
				// Make 'physical' optional to match the structure
				addressLn1?: string
				city?: string
				state?: string
				zip?: string
			}
		}
	}

type incomingDataPropsWithPassword = incomingDataProps & {
	password: string
}
// type appDataWithUserDataProps = incomingDataProps & {
// 	user: any
// }
