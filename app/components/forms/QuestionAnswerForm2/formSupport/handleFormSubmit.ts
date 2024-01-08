// import React from 'react'

const handleFormSubmit = ({ reset, data, onSubmit}: any) => {
	const formattedData = formatFormData(data)
	onSubmit()
	console.log(formattedData)
	reset({
		question: "",
		answer: "",
	})
}

const formatFormData = (data: any) => {
	const newData = { ...data }

	return newData
}

export default handleFormSubmit