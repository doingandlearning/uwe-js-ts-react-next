import type { NextPage, GetStaticProps, GetStaticPaths } from "next";
import fs from "fs/promises"
import path from "path"
import Error from "next/error"

const HomePage: NextPage<ProductProps> = ({ product }) => {
	// if (!product) {
	// 	<Error statusCode={404} />
	// }

	return (
		<ul>
			{JSON.stringify(product)}
		</ul>
	)
}

interface Product { id: string, description: string, title: string }
interface ProductProps { product?: Product }


export const getStaticPaths: GetStaticPaths = async () => {
	// Data fetching
	const paths = [
		{ params: { pid: "p1" } },
		{ params: { pid: "p2" } },
		{ params: { pid: "p3" } },
	]
	// map 
	return {
		paths,
		fallback: true
	}
}


export const getStaticProps: GetStaticProps = async (context) => {
	// Any API, DB, ... 
	const filePath = path.join(process.cwd(), "data", "dummydata.json")
	const jsonData = await fs.readFile(filePath)
	const data = JSON.parse(jsonData.toString())

	const product = data.products.filter((product: Product) => {
		if (!context.params) {
			return false
		}
		return product.id === context.params.pid;
	})[0]
	if (!product) {
		// email Tom . . . 
		return { notFound: true }
	}

	return {
		props: {
			product
		},
		revalidate: 600,

	}


}

export default HomePage