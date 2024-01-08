import React from "react"
// import QuestionForm from "@/app/components/forms/questionForm"
import QuestionAnswerForm from "@components/forms/QuestionAnswerForm2/FormIndex"

const AddQuestion: React.FC = () => {
	return (
		<div className=" col-span-full pb-48 pt-16 px-10 sm:px-16 max-w-4xl mx-auto">
			<h1 className="py-4 text-6xl text-white font-semibold text-center">Video Info Upload</h1>
			<QuestionAnswerForm />
		</div>
	)
}

export default AddQuestion
