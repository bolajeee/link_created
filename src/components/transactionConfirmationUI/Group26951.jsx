import { Box, Divider, Text, Stack, CloseButton, Flex, VStack, CheckboxGroup, Image, Button } from "@chakra-ui/react";
import { CheckboxCard } from "../ui/checkbox-card";

// Import images directly
import singlePaymentImg from "../transactionConfirmationUi/paymentAssets/payment4.png";
import recurringPaymentImg from "../transactionConfirmationUi/paymentAssets/Link4.png";
import paymentLinkImg from "../transactionConfirmationUi/paymentAssets/Link5.png";

const items = [
  { value: "next", title: "Single payment", description: "Make a direct payment to clients or customers , modify the currency as needed.", imgSrc: singlePaymentImg },
  { value: "vite", title: "Reoccurring Payment", description: "For recurring payments or single payment, create a link in your preferred currency.", imgSrc: recurringPaymentImg },
  { value: "astro", title: "Create payment link", description: "Generate and Receive your link for your charity cause to be sent to merchants and clients.", imgSrc: paymentLinkImg },
];

const Group26951 = () => (
    <Box w="100vw" minH="120vh" bg="gray.100" color="gray.600" position="relative" overflowY="auto">
    <Stack minH="120vh" justify="center" align="center" mt="20px">
      
      {/* Checkbox Group 1 */}
      <CheckboxGroup defaultValue={["next"]}>
        <Flex gap="4" flexWrap="wrap" justify="center">
          {items.map((item) => (
            <Box key={item.value} w="270px" h="319px" bg="white" border="1px solid #9BE69D" borderRadius="md" p={4}
              position="relative" display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start">
              
              {/* Checkbox at top-right */}
              <Box position="absolute" top="8px" right="8px">
                <CheckboxCard value={item.value} />
              </Box>
  
              {/* Card Content with Image */}
              <VStack spacing={3} mt={10} align="center">
                <Image src={item.imgSrc} alt={item.title} w="80px" h="80px" />
                <Text fontSize="20px" fontWeight="bold">{item.title}</Text>
                <Text fontSize="14px" color="gray.600" textAlign="center">{item.description}</Text>
              </VStack>
            </Box>
          ))}
        </Flex>
      </CheckboxGroup>
  
      {/* Checkbox Group 2 */}
      <CheckboxGroup defaultValue={["next"]}>
        <Flex gap="4" flexWrap="wrap" justify="center">
          {items.map((item) => (
            <Box key={item.value} w="270px" h="319px" bg="white" border="1px solid #9BE69D" borderRadius="md" p={4}
              position="relative" display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start">
              
              {/* Checkbox at top-right */}
              <Box position="absolute" top="8px" right="8px">
                <CheckboxCard value={item.value} />
              </Box>
  
              {/* Card Content with Image */}
              <VStack spacing={3} mt={10} align="center">
                <Image src={item.imgSrc} alt={item.title} w="80px" h="80px" />
                <Text fontSize="20px" fontWeight="bold">{item.title}</Text>
                <Text fontSize="14px" color="gray.600" textAlign="center">{item.description}</Text>
              </VStack>
            </Box>
          ))}
        </Flex>
      </CheckboxGroup>
  
      {/* Checkbox Group 3 */}
      <CheckboxGroup defaultValue={["next"]}>
        <Flex gap="4" flexWrap="wrap" justify="center">
          {items.map((item) => (
            <Box key={item.value} w="270px" h="319px" bg="white" border="1px solid #9BE69D" borderRadius="md" p={4}
              position="relative" display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start">
              
              {/* Checkbox at top-right */}
              <Box position="absolute" top="8px" right="8px">
                <CheckboxCard value={item.value} />
              </Box>
  
              {/* Card Content with Image */}
              <VStack spacing={3} mt={10} align="center">
                <Image src={item.imgSrc} alt={item.title} w="80px" h="80px" />
                <Text fontSize="20px" fontWeight="bold">{item.title}</Text>
                <Text fontSize="14px" color="gray.600" textAlign="center">{item.description}</Text>
              </VStack>
            </Box>
          ))}
        </Flex>
      </CheckboxGroup>
  
    </Stack>
  </Box>
  
  
);

export default Group26951;
