import { VStack, Heading, Text, SimpleGrid, GridItem, FormLabel, Input, Select, Checkbox, Button } from "@chakra-ui/react"

function Details() {
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
		<SimpleGrid columns={2} columnGap={3} rowGap={6}>
			<GridItem colSpan={1}>
				<FormLabel>First Name</FormLabel>
				<Input placeholder="John" />
			</GridItem>
			<GridItem colSpan={1}>
				<FormLabel>Last Name</FormLabel>
				<Input placeholder="Doe" />
			</GridItem>
			<GridItem colSpan={2}>
				<FormLabel>Address</FormLabel>
				<Input placeholder="Blvd. Broken Dreams 21" />
			</GridItem>
			<GridItem colSpan={1}>
				<FormLabel>City</FormLabel>
				<Input placeholder="City" />
			</GridItem>
			<GridItem colSpan={1}>
				<FormLabel>Country</FormLabel>
				<Select>
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
				<Button size="lg" w="full">Place order</Button>
			</GridItem>
		</SimpleGrid>
	</VStack>
}

export default Details