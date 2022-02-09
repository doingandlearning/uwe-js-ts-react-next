import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import fs from "fs/promises"
import path from "path"
import Link from "next/link"

const HomePage: NextPage<ProductProps> = ({ products }) => {
	return (
		<ul>
			{products.map(item =>
				<li key={item.id}>
					<Link href={`/${item.id}`}>{item.title}</Link>
				</li>)}
		</ul>
	)
}
// const HomePage: NextPage = ({ products }: InferGetStaticPropsType<typeof getStaticProps>) => {
// 	return (
// 		<ul>
// 			{products.map(item => <li key={item.id}>{item.title}</li>)}
// 		</ul>
// 	)
// }

interface Product { id: string, description: string, title: string }
interface ProductProps { products: Product[] }

// export async function getStaticProps {}

export const getStaticProps: GetStaticProps = async (context) => {
	// Any API, DB, ... 
	const filePath = path.join(process.cwd(), "data", "dummydata.json")
	const jsonData = await fs.readFile(filePath)
	const data = JSON.parse(jsonData.toString())

	if (!data) {
		// email Tom . . . 
		return { notFound: true }
	}

	const products: Product[] = data.products

	return {
		props: {
			products
		},
		revalidate: 10,

	}
}

export default HomePage