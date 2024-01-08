import * as z from "zod"
import { getYear } from "date-fns"

const date = new Date()
// const currentYear = format(date, "yy")
const currentYear = getYear(date)
// const currentMonth = getMonth(date)
// const currentDay = getDate(date)

const QAFormSchema = z.object({
	showTitle: z.string().min(1, { message: "Please enter a valid Title" }),
	showDate: z
		.object({
			MM: z.number().int().min(1).max(12),
			// .transform((v) => Number(v) || 0),
			DD: z.number().int().min(1).max(31),
			// .transform((v) => Number(v) || 0),
			YY: z.number().min(1).max(currentYear),
			// .transform((v) => Number(v) || 0),
		})
		.optional(),
	BibleRefs: z.array(
		z.object({
			// bible ref
			book: z.string(),
			chapters: z
				.array(
					z.object({
						// ref
						chapter: z.number().nullable(),
						verses: z
							.array(
								z.object({
									// verse
									verse: z.number().nullable(),
									span: z.boolean().optional(),
									verseTo: z.number().nullable().optional(),
								})
							)
							.optional(),
					})
				)
				.optional(),
		})
	),
	QnA: z.array(
		z.object({
			question: z
				.string()
				.min(1, { message: "Please enter a valid Question" }),
			timeStamp: z
				.string()
				.min(5, { message: "Time Stamp required" })
				.url({ message: "Invalid URL" }),
		})
	),
})
const DropDownObject = z.object({
	value: z.string().or(z.unknown()),
	label: z.string().or(z.unknown()),
})

export { QAFormSchema, DropDownObject }
