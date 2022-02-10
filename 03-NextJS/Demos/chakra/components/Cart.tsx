import {
	VStack,
	Heading,
	Text,
	Button,
	HStack,
	AspectRatio,
	Stack,
	Image,
	Divider,
	useColorMode,
	useColorModeValue
} from "@chakra-ui/react"

function Cart() {
	const { toggleColorMode } = useColorMode()

	const bgColor = useColorModeValue("gray.50", "whiteAlpha.50")
	const secondaryText = useColorModeValue("gray.600", "gray.400")

	return <VStack
		width="full"
		h="full"
		p={10}
		spacing={10}
		alignItems="flex-start"
		bg={bgColor}
	>
		<VStack alignItems="flex-start" spacing={3}>
			<Heading size="2xl">Your cart</Heading>
			<Text size="md">If price is too hard on your eyes, <Button onClick={toggleColorMode} variant='link'>
				try changing the theme.
			</Button>
			</Text>
		</VStack>
		<HStack spacing={6} alignItems="center" w="full">
			<AspectRatio ratio={1} w={24}>
				<Image src="/images/skateboard.jpg" alt="Skateboard" />
			</AspectRatio>
			<Stack
				spacing={0}
				w="full"
				direction="row"
				justifyContent="space-between"
				alignItems="center"
			>
				<VStack w="full" spacing={0} alignItems="flex-start">
					<Heading size="md">Penny board</Heading>
					<Text color={secondaryText}>PNYCOMP27541</Text>
				</VStack>
				<Heading size="sm" textAlign="end">
					$119.00
				</Heading>
			</Stack>
		</HStack>
		<VStack spacing={4} alignItems="stretch" w="full">
			<HStack justifyContent="space-between">
				<Text color={secondaryText}>Subtotal</Text>
				<Heading size="sm">$119.00</Heading>
			</HStack>
			<HStack justifyContent="space-between">
				<Text color={secondaryText}>Shipping</Text>
				<Heading size="sm">$19.99</Heading>
			</HStack>
			<HStack justifyContent="space-between">
				<Text color={secondaryText}>Taxes (estimated)</Text>
				<Heading size="sm">$23.80</Heading>
			</HStack>
		</VStack>
		<Divider />
		<HStack justifyContent="space-between" w="full">
			<Text color={secondaryText}>Total</Text>
			<Heading size="lg">$162.79</Heading>
		</HStack>
	</VStack>
}

export default Cart color = { secondaryText }