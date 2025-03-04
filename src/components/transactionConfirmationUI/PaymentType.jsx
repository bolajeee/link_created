import {
  Box,
  Divider,
  Text,
  Stack,
  CloseButton,
  Flex,
  VStack,
  CheckboxGroup,
  Image,
  Button,
  useBreakpointValue
} from "@chakra-ui/react";
import { CheckboxCard } from "../ui/checkbox-card";

// Import images directly
import singlePaymentImg from "../transactionConfirmationUi/paymentAssets/payment4.png";
import recurringPaymentImg from "../transactionConfirmationUi/paymentAssets/Link4.png";
import paymentLinkImg from "../transactionConfirmationUi/paymentAssets/Link5.png";

const items = [
  {
    value: "next",
    title: "Single payment",
    description:
      "Make a direct payment to clients or customers, modify the currency as needed.",
    imgSrc: singlePaymentImg,
  },
  {
    value: "vite",
    title: "Recurring Payment",
    description:
      "For recurring payments or single payment, create a link in your preferred currency.",
    imgSrc: recurringPaymentImg,
  },
  {
    value: "astro",
    title: "Create payment link",
    description:
      "Generate and receive your link for your charity cause to be sent to merchants and clients.",
    imgSrc: paymentLinkImg,
  },
];

const PaymentType = () => {
  // Responsive values for different screen sizes
  const headerFontSize = useBreakpointValue({ base: "24px", md: "28px", lg: "32px" });
  const cardWidth = useBreakpointValue({ base: "100%", sm: "270px" });
  const cardHeight = useBreakpointValue({ base: "auto", sm: "319px" });
  const buttonWidth = useBreakpointValue({ base: "90%", sm: "282px" });
  const closeButtonPosition = useBreakpointValue({ base: "20px", md: "41.54px" });
  const containerPadding = useBreakpointValue({ base: "4", md: "6" });
  const cardDirection = useBreakpointValue({ base: "column", md: "row" });
  const headerMargin = useBreakpointValue({ base: "80px", md: "100px" });
  const cardSpacing = useBreakpointValue({ base: "3", md: "4" });

  return (
    <Box 
      w="100%" 
      minH="100vh" 
      bg="gray.100" 
      color="gray.600" 
      position="relative"
      px={containerPadding}
      pb={6}
      overflowX="hidden"
    >
      <Stack spacing={0} w="100%">
        {/* Close Button */}
        <Box position="absolute" left={closeButtonPosition} top="20px" zIndex="1">
          <CloseButton size="lg" />
        </Box>

        {/* Divider */}
        <Box w="100%">
          <Divider
            width="100%"
            position="relative"
            top="55px"
            borderColor="#DDDDDD"
            borderWidth="1px"
          />
        </Box>

        {/* Payment Text */}
        <Box mt={headerMargin} textAlign="center" px={2}>
          <Text
            color="#333333"
            fontSize={headerFontSize}
            fontFamily="Inter"
            fontWeight="500"
            lineHeight="1.2"
          >
            Select a payment type to continue
          </Text>
        </Box>

        {/* Checkbox Group Centered */}
        <CheckboxGroup defaultValue={["next"]}>
          <Flex 
            gap={cardSpacing} 
            flexWrap="wrap" 
            justify="center" 
            mt="30px"
            direction={cardDirection}
            w="100%"
          >
            {items.map((item) => (
              <Box
                key={item.value}
                w={cardWidth}
                h={cardHeight}
                bg="white"
                border="1px solid #9BE69D"
                borderRadius="md"
                p={4}
                mb={4}
                position="relative"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="flex-start"
                transition="transform 0.2s, box-shadow 0.2s"
                _hover={{
                  transform: "translateY(-4px)",
                  boxShadow: "md",
                }}
              >
                {/* Checkbox at top-right */}
                <Box position="absolute" top="8px" right="8px">
                  <CheckboxCard value={item.value} />
                </Box>

                {/* Card Content with Image */}
                <VStack spacing={3} mt={6} mb={2} align="center" w="100%">
                  <Image 
                    src={item.imgSrc} 
                    alt={item.title} 
                    w="80px" 
                    h="80px"
                    objectFit="contain" 
                  />
                  <Text fontSize={{ base: "18px", md: "20px" }} fontWeight="bold">
                    {item.title}
                  </Text>
                  <Text fontSize={{ base: "13px", md: "14px" }} color="gray.600" textAlign="center">
                    {item.description}
                  </Text>
                </VStack>
              </Box>
            ))}
          </Flex>
        </CheckboxGroup>

        <Flex justify="center" mt={{ base: "20px", md: "40px" }} w="100%">
          <Button
            width={buttonWidth}
            height="42px"
            px="30px"
            py="10px"
            bg="#2E5C38"
            borderRadius="8px"
            overflow="hidden"
            justifyContent="center"
            alignItems="center"
            display="flex"
            gap="10px"
            color="white"
            fontSize={{ base: "16px", md: "18px" }}
            fontFamily="Inter"
            fontWeight="500"
            textTransform="capitalize"
            _hover={{ bg: "#25662C" }}
            _active={{ bg: "#1E4429" }}
          >
            Proceed to generate link
          </Button>
        </Flex>
      </Stack>
    </Box>
  );
};

export default PaymentType;