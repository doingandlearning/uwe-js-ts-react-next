import type { GetServerSideProps, NextPage } from "next"
import Head from "next/head"
import { ParsedUrlQuery } from 'querystring'

const UserPage: NextPage<{ username: string }> = ({ username }) => {
	return <div>	<Head>
		<title>User Page</title>
	</Head>
		<p>
			User {username}!
		</p>
	</div>
}

interface IParams extends ParsedUrlQuery {
	userId: string
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { userId } = context.params as IParams

	return {
		props: {
			username: userId
		}
	}
}

export default UserPage;
