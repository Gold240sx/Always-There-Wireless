import * as z from "zod"
import { QAFormSchema } from "./QnASchema"

const DropDownObject = z.object({
	value: z.string().or(z.unknown()),
	label: z.string().or(z.unknown()).or(z.undefined()),
})

type FormValues = z.infer<typeof QAFormSchema>
type DropdownValue = z.infer<typeof DropDownObject>

export { type DropdownValue, type FormValues }
