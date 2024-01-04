"use client"
import React from "react"
import SignupForm from "@forms/SignupForm"
import SupportForm from "@forms/supportForm2"
import NewMultiStep from "@forms/newForms/newMultiStepForm"

import JobAppForm from "@forms/JobApply"

interface PopupModalProps {
	toggleMainForm: () => void
	formOpen?: boolean
	form: "SignupForm" | "SupportForm" | "JobApplication" | ""
	subCategory?: string
}

interface FormComponents {
	SignupForm: React.ComponentType<any>
	SupportForm: React.ComponentType<any>
	JobApplication: React.ComponentType<any>
	NewApplicationForm: React.ComponentType<any>
}
const forms: FormComponents = {
	SignupForm: SignupForm,
	SupportForm: SupportForm,
	JobApplication: JobAppForm,
	NewApplicationForm: NewMultiStep,
}

const PopupModal = ({
	toggleMainForm,
	formOpen,
	form,
	subCategory,
}: PopupModalProps) => {
	if (form !== "") {
		const SelectedForm = forms[form]

		return (
			<div
				className={` ${
					formOpen && ""
				} scrollbar-hide min-w-[300px] overflow-y-scroll right-5 left-5 sm:right-10 bg-white rounded-xl fixed z-10 max-h-screen top-20 bottom-10 bottom-30 sm:left-10 top-30 p-0 `}>
				<button
					className="fixed z-50 w-10 h-10 border rounded-md bg-zinc-50 hover:text-bold hover:border-black hover:border-2 top-[104px] right-11 sm:right-16"
					onClick={toggleMainForm}>
					X
				</button>
				<SelectedForm
					subCategory={subCategory}
					toggleMainForm={toggleMainForm}
				/>
			</div>
		)
	}
}

export default PopupModal
