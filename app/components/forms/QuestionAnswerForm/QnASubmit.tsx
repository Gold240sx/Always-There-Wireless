// eslint-disable-file no-use-before-define 
/*eslint no-use-before-define: 2*/
// @ts-noCheck
import { FormValues } from "./QnAtypes"
import { toast } from "sonner"
import { Button } from "@components/shadcn/ui/button"


const onSubmit = ({
	data,
	setIsLoading,
	// addToast,
}: {
	data: FormValues
	setIsLoading: (isLoading: boolean) => void
}) => {
	   const jsonData = JSON.stringify(data)


	 
	setIsLoading(true)
	// await new Promise((resolve) => setTimeout(resolve, 2000))
	console.log("Form Data", data)
	//   toast("Submitted Data: ", {
    //       description: JSON.stringify(data, null, 2),
    //       action: {
    //         label: "Submitted",
    //         onClick: () => console.log("Undo"),
    //       },
    //     })

  // Use the toast function from sonner to display the JSON data

  addToast("hey, I'm a toast!")
	
	setIsLoading(false)
	// reset()
}

export { onSubmit }
