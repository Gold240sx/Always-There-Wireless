"use client"
import * as React from "react"
import { useState, useEffect } from "react"
import {
	useFormContext,
	SubmitHandler,
	Controller,
	useWatch,
} from "react-hook-form"
import { Label, Button, TextInput, Textarea } from "flowbite-react"
import { ShowDetailsSchema, DropDownObject } from "./formSupport/formSchema"
import { ExclamationCircleIcon } from "@heroicons/react/20/solid"
import { getMonth, getDate, format, getYear } from "date-fns" // date-fns-tz alternative for local time Zoned time
import { unknown, z } from "zod"
import Select from "react-select"
import CreatableSelect from "react-select/creatable"

import { SiteParams } from "@context/library"
import { getAllSpeakers } from "./formSupport/formSupport"
import { DropdownValue } from "../QuestionAnswerForm/QnAtypes"

const date = new Date()
// const currentYear = format(date, "yy")
const currentYear = getYear(date)

type ShowDetailsProps = {
	store: z.infer<typeof ShowDetailsSchema>
	onSubmit: SubmitHandler<z.infer<typeof ShowDetailsSchema>>
	setValue: any
}

const ShowDetails: React.FC<ShowDetailsProps> = ({ onSubmit, store }) => {
	const {
		register,
		control,
		setValue,
		formState: { errors },
	} = useFormContext()
	const [channelIsOther, setChannelIsOther] = useState(false)
	const [speakerDisabled, setSpeakerDisabled] = useState(true)
	const [filteredSpeakers, setFilteredSpeakers] = useState<
		(typeof DropDownObject)[]
	>([])
	const [allSpeakers, setAllSpeakers] = useState<(typeof DropDownObject)[]>(
		[]
	)
	const { channels, categoryOptions } = SiteParams

	const styles = {
		control: (css: any, state: any) => ({
			...css,
			...(state.isDisabled && {
				pointerEvents: "auto",
				cursor: "not-allowed",
			}),
		}),
	}

	const channel = useWatch({ control, name: "channel" }) // Watch for changes in the 'channel' dropdown to update the Speakers dropdown
	useEffect(() => {
		// Find the selected channel object
		const { value } = channel
		if (value === undefined) return
		if (value === "Other") {
			setChannelIsOther(true)
			const allSpkrs = getAllSpeakers(channels.selectOptions)

			setAllSpeakers(allSpkrs as unknown as (typeof DropDownObject)[])
		} else {
			setChannelIsOther(false)
		}
		const selectedChannel = channels.selectOptions.find(
			(option) => option.value === channel.value
		)
		setValue("speaker", [])
		// // Extract speakers based on the selected channel
		if (selectedChannel && selectedChannel.speakers) {
			setFilteredSpeakers(
				selectedChannel.speakers.map((speaker: DropdownValue) => ({
					value: speaker,
					label: speaker,
				}))
			)
			setSpeakerDisabled(false)
		} else {
			setFilteredSpeakers([]) // Reset speakers if no channel is selected
		}
	}, [channel, channels.selectOptions, setValue])

	return (
		<div className=" col-span-full gap-y-4 flex flex-col px-6">
			{/* Use the register function to register inputs */}
			{/* start individual inputs */}

			{/* Date */}
			<div className="relative grid grid-cols-12 -mb-2 items-center align-middle">
				{/* Show Number */}
				<div className="col-span-6 mb-3 mr-20 ml-4">
					<div className="mt-auto">
						<div className="flex justify-between px-1">
							<Label
								htmlFor="showNo"
								value="Show Number"
								className="block text-sm font-semibold leading-6 text-gray-900"
							/>
						</div>
					</div>
					<div className="relative">
						<TextInput
							id="showNo"
							placeholder="Show Number"
							{...register("showNo")}
							className="focus:placeholder:opacity-0  placeholder:text-zinc-200"
						/>
						{/* )} */}
						{errors?.showTitle && (
							<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
								<ExclamationCircleIcon
									className="w-5 h-5 text-red-500"
									aria-hidden="true"
								/>
							</div>
						)}
					</div>
				</div>
				{/* date pick */}
				<div id="date pick" className="gap-1 pl-auto pr-0 col-span-6">
					<div className="grid grid-cols-7 gap-2 px-2">
						<div className="col-span-2 pt-3">
							<Label
								htmlFor="showDate.mm"
								value="Month"
								className="px-1 text-sm font-semibold leading-6 text-gray-900 "
							/>
							<TextInput
								id="showdate.mm"
								className=""
								onFocus={(e) => e.target.select()}
								style={{
									textAlign: "center",
									fontSize: "14px",
									// backgroundColor: "white",
								}}
								{...register("showDate.MM")}
								placeholder="MM"
								maxLength={2}
							/>
						</div>
						<div className="col-span-2 w-fit pt-3">
							<Label
								htmlFor="showDate.dd"
								value="Day"
								className="px-1 text-sm font-semibold leading-6 text-gray-900 "
							/>
							<TextInput
								id="showdate.dd"
								style={{
									textAlign: "center",
									fontSize: "14px",
									// backgroundColor: "white",
								}}
								{...register("showDate.DD")}
								placeholder="DD"
								maxLength={2}
							/>
						</div>
						<div className="col-span-3 pt-3">
							<Label
								htmlFor="showDate.yy"
								value="Year"
								className="px-1 text-sm font-semibold leading-6 text-gray-900 "
							/>
							<TextInput
								id="showdate.yy"
								style={{
									textAlign: "center",
									fontSize: "14px",
									// backgroundColor: "white",
								}}
								{...register("showDate.YYYY")}
								placeholder="YYYY"
								maxLength={4}
								min={1}
								max={currentYear.toString().slice(2)}
							/>
						</div>
					</div>
					<p className="text-center py-1 text-zinc-400">
						Video upload date
					</p>
				</div>
				{/* {errors?.showDate?.message && <p>{errors.showDate.message}</p>} */}
			</div>

			{/* Show Title */}
			<div className="mt-auto mb-3 col-span-full">
				<div className="flex justify-between px-1">
					<Label
						htmlFor="showTitle"
						value="Show Title"
						className="block text-sm font-semibold leading-6 text-gray-900"
					/>
					<span
						className="text-sm leading-6 text-gray-500"
						id="showTitle-required">
						Required
					</span>
				</div>
				{/*  */}
				<div className="relative">
					<TextInput
						id="showTitle"
						placeholder="Title of the Show"
						{...register("showTitle")}
						className="focus:placeholder:opacity-0  placeholder:text-zinc-200"
					/>
					{/* )} */}
					{errors?.showTitle && (
						<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
							<ExclamationCircleIcon
								className="w-5 h-5 text-red-500"
								aria-hidden="true"
							/>
						</div>
					)}
				</div>
			</div>

			{/* Channel */}
			<div className="col-span-full md:col-span-6 ">
				<div className="flex justify-between px-1">
					<Label
						htmlFor="channel"
						value="Channel"
						className="block text-sm font-semibold leading-6 text-gray-900"
					/>
					<span
						className="text-sm leading-6 text-gray-500"
						id="channel-required">
						Required
					</span>
				</div>
				<div className="relative">
					<Controller
						name="channel"
						control={control}
						render={({ field }: any) => (
							<Select
								{...field}
								// isMulti
								className="h-full mb-4 rounded-lg bg-[#F9FAFB]"
								options={channels.selectOptions}
								placeholder="Channel"
								isSearchable
								onChange={(selectedOption) => {
									return field.onChange(selectedOption || "")
								}}
								styles={{
									control: (baseStyles: any, state: any) => ({
										...baseStyles,
										borderColor: state.isFocused
											? "#07B6D4"
											: "#D1D5DB",
										boxShadow: state.isFocused
											? "var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) #07B6D4"
											: "",
										backgroundColor: "#F9FAFB",
										borderRadius: "0.375rem",
										paddingBlock: "2.3px",
									}),
								}}
							/>
						)}
					/>
					{errors?.channel && (
						<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
							<ExclamationCircleIcon
								className="w-5 h-5 text-red-500"
								aria-hidden="true"
							/>
						</div>
					)}
				</div>
			</div>

			{/* Speaker */}
			<div className="col-span-full md:col-span-6 ">
				<div className="flex justify-between px-1">
					<Label
						htmlFor="speaker"
						value="Rabbi / Speaker"
						className="block text-sm font-semibold leading-6 text-gray-900"
					/>
					<span
						className="text-sm leading-6 text-gray-500"
						id="speaker-required">
						Required
					</span>
				</div>
				{/*  */}
				<div className="relative">
					{channelIsOther && (
						<Controller
							name="speaker"
							control={control}
							render={({ field }: any) => (
								<CreatableSelect
									{...field}
									isMulti
									// isDisabled={speakerDisabled} // not needed because we know it's "Other"
									options={allSpeakers}
									placeholder="Speaker"
									isSearchable
									className={`${styles} ${
										!channelIsOther && "hidden"
									} h-full mb-4 rounded-lg bg-[#F9FAFB]`}
									onChange={(
										selectedOption: typeof DropDownObject
									) => {
										return field.onChange(
											selectedOption || ""
										)
									}}
									styles={{
										control: (
											baseStyles: any,
											state: any
										) => ({
											...baseStyles,
											borderColor: state.isFocused
												? "#07B6D4"
												: "#D1D5DB",
											boxShadow: state.isFocused
												? "var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) #07B6D4"
												: "",
											backgroundColor: "#F9FAFB",
											borderRadius: "0.375rem",
											paddingBlock: "2.3px",
										}),
									}}
								/>
							)}
						/>
					)}

					{/* {!channelIsOther && ( */}
					<Controller
						name="speaker"
						control={control}
						render={({ field }: any) => (
							<Select
								{...field}
								isMulti
								isDisabled={speakerDisabled}
								options={filteredSpeakers}
								placeholder="Speaker"
								isSearchable
								className={`${styles} ${
									channelIsOther && "hidden"
								} h-full mb-4 rounded-lg bg-[#F9FAFB]`}
								onChange={(selectedOption) => {
									return field.onChange(selectedOption || "")
								}}
								styles={{
									control: (baseStyles: any, state: any) => ({
										...baseStyles,
										borderColor: state.isFocused
											? "#07B6D4"
											: "#D1D5DB",
										boxShadow: state.isFocused
											? "var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) #07B6D4"
											: "",
										backgroundColor: "#F9FAFB",
										borderRadius: "0.375rem",
										paddingBlock: "2.3px",
									}),
								}}
							/>
						)}
					/>
					{/* )} */}
					{errors?.channel && (
						<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
							<ExclamationCircleIcon
								className="w-5 h-5 text-red-500"
								aria-hidden="true"
							/>
						</div>
					)}
				</div>
			</div>

			{/* Description */}
			<div className="col-span-full ">
				<div className="flex justify-between px-1">
					<Label
						htmlFor="description"
						value="Description"
						className="block text-sm font-semibold leading-6 text-gray-900"
					/>
					<span
						className="text-sm leading-6 text-gray-500"
						id="description-required">
						Required
					</span>
				</div>
				<div className="mt-1">
					<div className="relative">
						<Textarea
							id="description"
							rows={4}
							placeholder="Video Description"
							{...register("description")}
							className="focus:placeholder:opacity-0"
						/>
						{errors?.description && (
							<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
								<ExclamationCircleIcon
									className="w-5 h-5 text-red-500"
									aria-hidden="true"
								/>
							</div>
						)}
					</div>
					{errors?.description?.message && (
						<p className="pl-2 mt-2 text-sm text-red-400">
							{errors?.description.message}
						</p>
					)}
				</div>
			</div>

			{/* Show Categories */}
			<div className="col-span-full sm:col-span-5">
				<div className="relative flex flex-col gap-1 section">
					<div className="flex justify-between px-1">
						<Label
							htmlFor={`showCategories`}
							value="Show Categories"
							className="block text-sm font-semibold leading-6 text-gray-900"
						/>
						<span
							className="text-sm leading-6 text-gray-500"
							id={`showCategories-required`}>
							Required
						</span>
					</div>
					<div className="relative">
						<Controller
							name={`showCategories`}
							control={control}
							render={({ field }: any) => (
								<Select
									{...field.showCategories}
									isMulti
									className="h-full mb-4 rounded-lg bg-[#F9FAFB]"
									options={categoryOptions}
									onChange={(selectedOptions: any) => {
										const formattedOptions =
											selectedOptions.map(
												(option: any) => ({
													value: option.value,
													label: option.label,
												})
											)
										field.onChange(formattedOptions)
									}}
									placeholder="General Topic discussed on this show"
									isSearchable
									styles={{
										control: (
											baseStyles: any,
											state: any
										) => ({
											...baseStyles,
											borderColor: state.isFocused
												? "#07B6D4"
												: "#D1D5DB",
											boxShadow: state.isFocused
												? "var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) #07B6D4"
												: "",
											backgroundColor: "#F9FAFB",
											borderRadius: "0.375rem",
											paddingBlock: "2.3px",
										}),
									}}
								/>
							)}
						/>
						{errors?.showCategories && (
							<div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
								<ExclamationCircleIcon
									className="w-5 h-5 text-red-500"
									aria-hidden="true"
								/>
							</div>
						)}
					</div>
					{errors?.showCategories && (
						<p
							className="pl-2 mt-2 text-sm text-red-600/60"
							id="categories-error">
							{/* {
								errors?.QnA?.[index]
									?.categories
									?.message
							} */}
							Invalid Categories
						</p>
					)}
				</div>
			</div>
		</div>
	)
}

export default ShowDetails
