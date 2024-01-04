// "use server"
import { EmailTemplate } from "@app/emailTemplates/emailTemplate"
import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend: any = new Resend(process.env.NEXT_RESEND_API_KEY)

export async function POST(request: Request) {
	const { firstName, email } = await request.json()
	const bodyData = { firstName: "bert", email: "ernie" }
	try {
		const data = await resend.emails.send({
			from: "Always There Wireless <info@alwaystherewireless.com>",
			to: "ohioacppts@gmail.com",
			subject: "More advanced Email: Testing from button!!!",
			react: EmailTemplate({ firstName, email }),
			text: `Body Data: "firstName: ${bodyData.firstName}, email: ${bodyData.email}`,
		})
		console.log(data)
		return NextResponse.json({ status: "ok" })
	} catch (error) {
		return NextResponse.json({ error })
	}
}
