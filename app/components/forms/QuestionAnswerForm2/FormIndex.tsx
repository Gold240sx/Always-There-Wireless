"use client"
import { useState } from "react"
import Swal from "sweetalert2"
import * as z from "zod"
import { useForm, FormProvider } from "react-hook-form"
import { Button } from "flowbite-react"
import { getMonth, getDate, getYear } from "date-fns" // date-fns-tz alternative for local time Zoned time

const date = new Date()
// const currentYear = format(date, "yy")
const currentYear = getYear(date)
const currentMonth = getMonth(date)
const currentDay = getDate(date)

// Tabs
import { QnAFormSchema } from "./formSupport/formSchema"
import ShowDetails from "./ShowDetails"
import Questions from "./Questions"
import Points from "./Points"

type QnAFormSchemaType = z.infer<typeof QnAFormSchema>

interface FormIndexProps {
	children?: React.ReactNode
	index: any
	tabValue: any
}

export const FormIndex = (props: FormIndexProps) => {
	const { children, tabValue, index, ...other } = props

	return (
		<div
			role="tabpanel"
			hidden={tabValue !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			className="w-full"
			{...other}>
			{tabValue === index && <div className=" w-full">{children}</div>}
		</div>
	)
}

export default function TabGroup() {
	const [isLoading, setIsLoading] = useState(false)
	const [store, setStore] = useState(
		QnAFormSchema.safeParse({
			showTitle: "",
			showDate: {
				DD: currentDay,
				MM: currentMonth,
				YYYY: currentYear,
			},
			channel: "",
			speaker: "",
			description: "",
			showCategories: [],
			QnA: [
				{
					question: "",
					questionTimestamp: undefined,
					questionTimePeriod: "",
					questionExtRefs: [
						{
							extRef: "",
							extRefLink: "",
						},
					],
					questionBibleRefs: [
						{
							book: "",
							chapters: [
								{
									chapter: undefined,
									verses: [
										{
											verse: undefined,
											span: false,
											verseTo: undefined,
										},
									],
								},
							],
						},
					],
					questionCategories: [""],
				},
			],
			points: [
				{
					point: "",
					pointTimestamp: undefined,
					pointTimePeriod: "",
					pointBibleRefs: [
						{
							book: "",
							chapters: [
								{
									chapter: undefined,
									verses: [
										{
											verse: undefined,
											span: false,
											verseTo: undefined,
										},
									],
								},
							],
						},
					],
					pointExtRefs: [
						{
							extRef: undefined,
							extRefLink: undefined,
						},
					],
					pointCategories: [undefined],
				},
			],
		})
	)

	const [tabValue, setTabValue] = useState(0)

	const methods = useForm({
		mode: "onBlur",
		defaultValues: {
			"showDate.MM": currentMonth + 1,
			"showDate.DD": currentDay,
			"showDate.YYYY": currentYear,
			channel: "Tenach Talk",
			questions: [],
		},
	})

	const handleChange = (newValue: number) => {
		setTabValue(newValue)
	}

	const onSubmit = (data: QnAFormSchemaType) => {
		console.log("submitted")
		const validatedData = QnAFormSchema.safeParse(data)
		if (!validatedData.success) {
			// handle validation errors
			console.log(
				"invalid data error 1/3: ",
				validatedData.error.issues
					.map((issue) => issue.message)
					.join(", ")
			)
			console.error("invalid data error 2/3: ", validatedData.error)
			console.log("invalid data 2/3: ", data)
			return
		}

		// setStore(validatedData.data as SetStateAction<SafeParseSuccess<QnAFormSchemaType>>)
		setStore(validatedData.data)
		Swal.fire({
			title: "Success",
			text: "Show Data has been submitted!",
			icon: "success",
			confirmButtonText: "Cool",
		})

		//  reset all form fields within the store
		// setStore(QnAFormSchema.safeParse({
		// 	showTitle: "",
		// 	showDate: {
		// 		MM: currentMonth,
		// 		DD: currentDay,
		// 		YY: currentYear,
		// 	},
		// 	channel: "",
		// 	speaker: "",
		// 	description: "",
		// 	showCategories: [],
		// 	QnA: [
		// 		{
		// 			question: "",
		// 			questionTimestamp: undefined,
		// 			questionTimePeriod: "",
		// 			questionExtRefs: [{
		// 				extRef: "",
		// 				extRefLink: "",
		// 			}],
		// 			questionBibleRefs: [{
		// 				book: "",
		// 				chapters: [
		// 					{
		// 						chapter: undefined,
		// 						verses: [
		// 							{
		// 								verse: undefined,
		// 								span: false,
		// 								verseTo: undefined,
		// 							},
		// 						],
		// 					},
		// 				],
		// 			}],
		// 			questionCategories: [""]
		// 		}
		// 	],
		// 	points: [
		// 		{
		// 			point: "",
		// 			pointTimestamp: undefined,
		// 			pointTimePeriod: "",
		// 			pointBibleRefs: [{
		// 				book: "",
		// 				chapters: [
		// 					{
		// 						chapter: undefined,
		// 						verses: [
		// 							{
		// 								verse: undefined,
		// 								span: false,
		// 								verseTo: undefined,
		// 							},
		// 						],
		// 					},
		// 				],
		// 			}],
		// 			pointExtRefs: [{
		// 				extRef: undefined,
		// 				extRefLink: undefined,
		// 			}],
		// 			pointCategories: [undefined]
		// 		}],
		// }))

		console.log("store reset")
	}

	return (
		<div className=" bg-white/50 shadow-2xl shadow-black/5 rounded-2xl p-3 flex flex-col items-center h-full w-full md:w-[580px]">
			<div className="mx-auto items-center justify-center mt-2 mb-6 w-full overflow-hidden  rounded-full px-4 text-gray-400 dark:border-black/20">
				<div
					id="selector"
					className=" grid grid-cols-3 mx-auto w-full overflow-hidden rounded-full  mb-5 border border-black/10 bg-gray-50/50 shadow-inner shadow-black/10 outline-2 dark:bg-black/20">
					<button
						className={`px-4 py-2.5 ${
							tabValue === 0
								? " bg-gradient-radial from-white to-transparent text-cyan-500  dark:from-sky-900 dark:via-sky-900  dark:to-sky-900/60 dark:hover:bg-sky-900/40 md:shadow-2xl md:shadow-black/60"
								: "hover:bg-gradient-radial from-sky-300/10 to-transparent"
						}  min-w-fit cursor-pointer whitespace-nowrap focus:outline-none md:rounded-l-xl`}
						onClick={() => handleChange(0)}>
						Show Details
					</button>
					<button
						className={`px-4 py-2.5 ${
							tabValue === 1
								? " bg-gradient-radial from-white to-transparent text-cyan-500 dark:from-sky-900 dark:via-sky-900  dark:to-sky-900/60 dark:hover:bg-sky-900/40 md:shadow-2xl md:shadow-black/60"
								: "hover:bg-gradient-radial from-sky-300/10 to-transparent"
						}  min-w-fit cursor-pointer whitespace-nowrap focus:outline-none`}
						onClick={() => handleChange(1)}>
						Questions
					</button>
					<button
						className={`px-4 py-2.5 ${
							tabValue === 2
								? " bg-gradient-radial from-white to-transparent text-cyan-500  dark:from-sky-900 dark:via-sky-900  dark:to-sky-900/60 dark:hover:bg-sky-900/40 md:shadow-2xl md:shadow-black/60"
								: "hover:bg-gradient-radial from-sky-300/10 to-transparent"
						}  min-w-fit cursor-pointer whitespace-nowrap focus:outline-none md:rounded-r-xl`}
						onClick={() => handleChange(2)}>
						Points
					</button>
				</div>
				<div className="mx-auto max-w-[80%] px-2 text-center text-sm text-gray-400">
					{tabValue === 0 && (
						<div className="mt-2 sr-only">Submit Show Details</div>
					)}
					{tabValue === 1 && (
						<div className="mt-2 sr-only">Provide Questions</div>
					)}
					{tabValue === 2 && (
						<div className="mt-2 sr-only">
							Add any additional Points
						</div>
					)}{" "}
				</div>
			</div>
			<FormProvider {...methods}>
				<form
					onSubmit={methods.handleSubmit((data) =>
						onSubmit({ data, setIsLoading })
					)}
					className=" justify-between w-full items-center flex flex-col h-full">
					<FormIndex tabValue={tabValue} index={0}>
						<ShowDetails onSubmit={onSubmit} store={store} />
					</FormIndex>
					<FormIndex tabValue={tabValue} index={1}>
						<Questions onSubmit={onSubmit} store={store} />
					</FormIndex>
					<FormIndex tabValue={tabValue} index={2}>
						<Points onSubmit={onSubmit} store={store} />
					</FormIndex>
					<Button
						type="submit"
						disabled={isLoading}
						className="bg-white text-zinc-600 shadow-lg shadow-black/5">
						Submit
					</Button>
				</form>
			</FormProvider>
		</div>
	)
}
