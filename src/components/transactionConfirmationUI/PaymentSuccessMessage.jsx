import React from "react";
import { 
  Box, 
  VStack, 
  Text, 
  Button, 
  Flex, 
  IconButton,
  useBreakpointValue,
  Container
} from "@chakra-ui/react";
import { X } from "lucide-react";
import successImage from "./successMessageAssets/success.jpg";

const PaymentSuccessMessage = ({ onClose }) => {
  // Responsive values
  const closeButtonPosition = useBreakpointValue({ 
    base: { right: "120px", top: "200px" }, 
    md: { right: "calc(50% - 200px)", top: "160px" } 
  });
  const closeButtonSize = useBreakpointValue({ base: 12, md: 20 });
  const containerWidth = useBreakpointValue({ base: "95%", md: "md" });
  const imageSize = useBreakpointValue({ base: "100px", md: "150px" });
  const buttonWidth = useBreakpointValue({ base: "100%", md: "200px" });

  return (
    <Box 
      w="100%" 
      minH="100vh" 
      bg="white" 
      overflow="hidden" 
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      p={4}
    >
    

      <Container maxW={containerWidth} p={0}>

          {/* Close button */}
      <IconButton
        size={closeButtonSize}
        icon={<X size={closeButtonSize} />}
        position="absolute"
        zIndex={2}
        rounded="full"
        bg="white"
        color="black"
        _hover={{ bg: "gray.100" }}
        onClick={onClose}
        aria-label="Close modal"
        border="2px solid black"
        {...closeButtonPosition}
      />

        <Flex 
          direction="column" 
          align="center" 
          justify="center" 
          w="100%"
        >
          <Box 
            w="100%" 
            maxW="md" 
            bg="white"
            borderRadius="xl"
            boxShadow="md"
            p={{ base: 4, md: 6 }}
          >
            <VStack
              spacing={6}
              align="center"
              w="100%"
            >
              {/* Success Image */}
              <Box 
                w={imageSize} 
                h={imageSize} 
                borderRadius="full" 
                overflow="hidden"
              >
                <img
                  src={successImage}
                  alt="Success illustration"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>

              <VStack spacing={3} textAlign="center" w="100%">
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  fontWeight="600"
                  color="#333"
                  lineHeight="1.2"
                >
                  Payment link created!
                </Text>
                <Text 
                  fontSize={{ base: "xs", md: "sm" }} 
                  color="#666" 
                  maxW="sm" 
                  lineHeight="1.5"
                  px={2}
                >
                  Your payment link has been created successfully. You can now
                  share it as a direct link or copy to your customers for easy
                  payments.
                </Text>
              </VStack>

              <Button
                w={buttonWidth}
                bg="#2E5C38"
                color="white"
                _hover={{ bg: "#244a2d" }}
                py={{ base: 4, md: 6 }}
                fontSize={{ base: "xs", md: "sm" }}
                fontWeight="500"
                mt={2}
              >
                Get Payment Link
              </Button>
            </VStack>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default PaymentSuccessMessage;