/* eslint-disable */ //disabled due to required single quote usage
import React, {
	useState,
	ForwardRefExoticComponent,
	ImgHTMLAttributes,
} from "react"
import x10Image from "@images/DIALNX10G.png"
import x65Image from "@images/DIALNX65.png"
import ProductCard from "@forms/productCard"

export type ImageTypeBasic = {
	src: string | HTMLImageElement | any
	alt?: string
	width?: number
	height?: number
	style?: {
		width?: string
		height?: string
	}
	className?: string
}
type ImageProps = ImgHTMLAttributes<HTMLImageElement>
export type ImageType =
	| ForwardRefExoticComponent<
			Omit<ImageProps, "ref"> & React.RefAttributes<HTMLImageElement>
	  >
	| ImageTypeBasic

type ProductFormData = ProductData & {
	data: any
	updateFields: (fields: Partial<ProductData>) => void
	formData: any
	setFormData: any
	setValue: any
	control: any
	errors: any
	register: any
}

type ProductData = {
	DOB: string
	lastFour: string
}

type ProductFormProps = {
	errors: any
	setValue: any
	formData: any
	register: any
	updateFields: any
	pickedProduct: string
}

export type Product = {
	name: string
	nickName: string
	tagline: string
	image: ImageType
	brand: string
	price: string
	screen: string
	connectivity: string
	storage: string
	cameras: string
	os: string
}

const productData: Product[] = [
	{
		name: "DIALN X10G Tablet",
		nickName: "x10",
		tagline: '10" Tablet w/ cellular',
		image: x10Image,
		brand: "DIALN",
		price: "$199.99",
		screen: '10.1" HD+ 1280 x 800',
		connectivity: "Wifi + 4G",
		storage: "64 GB",
		cameras: "8MP + 8MP AF",
		os: "Android 13",
	},
	{
		name: "DIALN X65 Smartphone",
		nickName: "x65",
		tagline: '6.5" Smartphone',
		image: x65Image,
		brand: "DIALN",
		price: "$99.99",
		screen: '"6.52" HD+ 720 x 1600',
		connectivity: "Wifi + 4G",
		storage: "32 GB / 3 GB",
		cameras: "13.0MP",
		os: "Android 13",
	},
]

const ProductForm = ({ formData, setValue, register }: ProductFormProps) => {
	const [pickedProduct, setPickedProduct] = useState(formData.pickedProduct)
	return (
		<div className="pr-14 md:pr-0 md:px-6">
			<h2 className="text-base font-semibold leading-7 text-gray-900 col-span-full">
				Product Selection
			</h2>
			<p className="mt-1 text-sm leading-6 text-gray-600 col-span-full">
				Pick your desired product
			</p>
			<div className="flex flex-col w-full gap-6 mt-10 gap-y-8">
				{/* start individual inputs */}
				{productData.map((product) => (
					<div key={product.nickName}>
						{/* Hidden radio input */}
						<input
							type="radio"
							value={product.nickName}
							checked={pickedProduct === product.nickName}
							{...register("pickedProduct")}
							id={`radio_${product.nickName}`}
							style={{ display: "none" }}
						/>
						{/* ProductCard used for visual representation */}
						<ProductCard
							product={product}
							pickedProduct={pickedProduct}
							setValue={setValue}
							setPickedProduct={setPickedProduct}
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default ProductForm

//
