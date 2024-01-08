import { z } from "zod"
import { getYear } from "date-fns"

const date = new Date()
const currentYear = getYear(date)
// const currentYear = format(date, "yy")
// const currentMonth = getMonth(date)
// const currentDay = getDate(date)

// ShowDetails Partial
const ShowDetailsSchema = z.object({
	showTitle: z.string().min(1, { message: "Please enter a valid Title" }),
	showDate: z.object({
		MM: z.number().int().min(1).max(12).or(z.undefined()),
		DD: z.number().int().min(1).max(31).or(z.undefined()),
		YYYY: z.number().min(2000).max(currentYear).or(z.undefined()),
	}),
	channel: z.string().min(1, { message: "Please enter the show title" }),
	speaker: z.string().min(1, { message: "Please input the guest speaker / rabbi" }),
	description: z.string().min(1, { message: "Please enter the show title" }).optional().or(z.undefined()),
	showCategories: z.array(z.string()).optional().or(z.undefined()),
})
// Questions partial
const QuestionsSchema = z.object({
	QnA: z.array(
		z.object({
			question: z.string().min(1, { message: "Please enter a valid Question" }),
			questionTimeStamp: z.string().min(1, { message: "Please enter a valid Question" }).min(5, { message: "Time Stamp required" }).url({ message: "Invalid URL" }).optional().or(z.undefined()),
			questionTimePeriod: z.string().optional(),
			questionExtRefs: z.array(
				z.object({
					extRef: z.string().optional(),
					extRefLink: z.string().optional(),
				})
			).optional().or(z.undefined()),
			questionBibleRefs: z.array(
				z.object({
					book: z.string().min(1, { message: "Please select a book" }),
					chapters: z.array(
						z.object({
							chapter: z.number().optional().or(z.undefined()),
							verses: z.array(
								z.object({
									verse: z.number().optional().or(z.undefined()),
									span: z.boolean(),
									verseTo: z.number().optional().or(z.undefined()),
								})
							).optional().or(z.undefined()),
						})
					),
				})
			).optional().or(z.undefined()),
			questionCategories: z.array(z.string()).or(z.undefined()).optional(),
		})
	),
})
// Points partial
const PointsSchema = z.array(
	z.object({
		point: z.string().optional(),
		pointTimeStamp: z.string().min(1, { message: "Please enter a valid Point" }).min(5, { message: "Time Stamp required" }).url({ message: "Invalid timestamp URL" }).optional().or(z.undefined()),
		pointTimePeriod: z.string().optional(),
		pointBibleRefs : z.array(
			z.object({
				book: z.string(),
				chapters: z.array(
					z.object({
						chapter: z.number().optional().or(z.undefined()),
						verses: z.array(
							z.object({
								verse: z.number().or(z.undefined()),
								span: z.boolean(),
								verseTo: z.number().or(z.undefined()),
							})
						),
					})
				),
			})
		).optional(),
		pointExtRefs: z.array(
			z.object({
				extRef: z.string().optional(),
				extRefLink: z.string().optional().or(z.undefined()),
			})
		).or(z.undefined()).optional(),
		pointCategories: z.array(z.string()).or(z.undefined()).optional(),
	})
)


// complete form Schema
const QnAFormSchema = z.object({
	ShowDetailsSchema,
	QuestionsSchema,
	PointsSchema,
})

const DropDownObject = z.object({
	value: z.string().or(z.unknown()),
	label: z.string().or(z.unknown()),
})

export { QnAFormSchema, ShowDetailsSchema, QuestionsSchema, PointsSchema, DropDownObject }