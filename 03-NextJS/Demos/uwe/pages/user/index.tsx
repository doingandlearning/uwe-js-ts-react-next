import type { GetServerSideProps, NextPage } from "next"

const UserPage: NextPage<{ username: string }> = ({ username }) => {
	return <div>User {username}!</div>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { name } = context.query

	return {
		props: {
			username: name
		}
	}
}

export default UserPage;
