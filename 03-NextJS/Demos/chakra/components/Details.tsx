import { VStack, Heading, Text, SimpleGrid, GridItem, FormLabel, Input, Select, Checkbox, Button, useBreakpointValue } from "@chakra-ui/react"

function Details() {

	const colSpan = useBreakpointValue({ base: 2, md: 1 })

	return <VStack
		width="full"
		h="full"
		p={10}
		spacing={10}
		alignItems="flex-start"
	>
		<VStack alignItems="flex-start" spacing={3}>
			<Heading size="2xl">Your details</Heading>
			<Text size="md">If you already have an account, click here to log in.</Text>
		</VStack>
		<SimpleGrid width="full" columns={2} columnGap={3} rowGap={6}>
			<GridItem colSpan={colSpan}>
				<FormLabel>First Name</FormLabel>
				<Input variant="filled" placeholder="John" />
			</GridItem>
			<GridItem colSpan={colSpan}>
				<FormLabel>Last Name</FormLabel>
				<Input variant="filled" placeholder="Doe" />
			</GridItem>
			<GridItem colSpan={2}>
				<FormLabel>Address</FormLabel>
				<Input variant="filled" placeholder="Blvd. Broken Dreams 21" />
			</GridItem>
			<GridItem colSpan={colSpan}>
				<FormLabel>City</FormLabel>
				<Input variant="filled" placeholder="City" />
			</GridItem>
			<GridItem colSpan={colSpan}>
				<FormLabel>Country</FormLabel>
				<Select variant="filled">
					<option value="usa">United States of America</option>
					<option value="uk">United Kingdom</option>
					<option value="hungary">Hungary</option>
					<option value="france">France</option>
				</Select>
			</GridItem>
			<GridItem colSpan={2}>
				<Checkbox defaultChecked>Ship to the billing address.</Checkbox>
			</GridItem>
			<GridItem colSpan={2}>
				<Button size="lg" w="full" variant="primary">Place order</Button>
			</GridItem>
		</SimpleGrid>
	</VStack >
}

export default Details