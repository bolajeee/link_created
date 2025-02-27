import React, { useState } from "react";
import {
  Box,
  VStack,
  Text,
  Input,
  Button,
  Flex,
  Image,
  Select,
  Grid,
  Divider,
  IconButton,
} from "@chakra-ui/react";
import { CheckCircle, X } from "lucide-react";
import countries from "./countries";

import FlutterwaveLogo from "./makePaymentAssets/flutterwave_logo.png";
import MonifyLogo from "./makePaymentAssets/monnify_logo.png";
import PaypalLogo from "./makePaymentAssets/paypal_logo.png";
import QuicktellerLogo from "./makePaymentAssets/quickteller_logo.png";
import Check from "./makePaymentAssets/check.png";

const MakePaymentPage = ({ onClose }) => {
  // State to track the selected payment method
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  // Handler when a payment option is clicked
  const handlePaymentMethodSelect = (method) => {
    setSelectedPaymentMethod(method);
  };

   const paymentMethods = [
     { src: FlutterwaveLogo, name: "Flutterwave" },
     { src: PaypalLogo, name: "PayPal" },
     { src: QuicktellerLogo, name: "Quickteller" },
     { src: MonifyLogo, name: "Monify" },
   ];

  return (
    <Box w="100vw" h="100vh" bg="gray.50">
      {/* Header */}
      <Flex
        w="full"
        h="40px"
        bg="white"
        borderBottom="1px"
        borderColor="gray.200"
        px={4}
        align="center"
        justify="space-between"
      >
        {/* Close button */}
        <IconButton
          size={20}
          icon={<X size={20} />}
          zIndex={2}
          rounded="full"
          bg="white"
          color="black"
          _hover={{ bg: "gray.100" }}
          onClick={onClose}
          aria-label="Close modal"
          border="3px solid black"
        />
        <Text
          fontSize="sm"
          color="gray.700"
          ml="10px"
          flex="1"
          textAlign="left"
        >
          Make payment
        </Text>
      </Flex>

      {/* Main Content */}
      <Flex justify="center" pt={8}>
        <Box
          w="full"
          maxW="md"
          mx={4}
          border="2px"
          borderColor="blue.400"
          borderRadius="md"
          bg="white"
          overflow="hidden"
        >
          {/* Payment Form Header */}
          <Flex
            justify="space-between"
            p={4}
            borderBottom="1px"
            borderColor="gray.200"
            color="gray.700"
          >
            <Text>PEDMONIE</Text>
            <Text>NGN1,000</Text>
          </Flex>

          {/* Payment Form */}
          <VStack spacing={4} p={4} color="gray.700">
            <Box w="full">
              <Text mb={1} fontSize="sm">
                Name
              </Text>
              <Input placeholder="Enter your name" size="md" bg="gray.50" />
            </Box>

            <Box w="full">
              <Text mb={1} fontSize="sm">
                Email Address
              </Text>
              <Input placeholder="Enter email" size="md" bg="gray.50" />
            </Box>

            <Box w="full">
              <Text mb={1} fontSize="sm">
                Amount
              </Text>
              <Grid templateColumns="repeat(4, 1fr)" gap={2}>
                <Select defaultValue="NGN" size="sm" bg="gray.50">
                  {countries.map((country) => (
                    <option key={country.code} value={country.currency}>
                      {country.currency}{" "}
                      <Image
                        src={country.flag}
                        alt={country.name}
                        width="16px"
                        height="12px"
                      />
                    </option>
                  ))}
                </Select>
                <Input placeholder="0.00" size="sm" bg="gray.50" />
                <Select defaultValue="NG" size="sm" bg="gray.50">
                  <option value="NG">NG</option>
                </Select>
                <Input placeholder="0.00" size="sm" bg="gray.50" />
              </Grid>
            </Box>

            <Text fontSize="sm" color="gray.600" textAlign="center" pt={4}>
              Click on any of the payment options below to begin the process
            </Text>

            {/* Payment Options */}
            <Grid templateColumns="repeat(4, 1fr)" gap={4} w="full" pt={2}>
              {paymentMethods.map((method) => (
                <Button
                  key={method.name}
                  p={4}
                  border="2px"
                  borderColor={
                    selectedPaymentMethod === method.name
                      ? "green.400"
                      : "gray.200"
                  }
                  borderRadius="md"
                  cursor="pointer"
                  position="relative"
                  onClick={() => handlePaymentMethodSelect(method)}
                >
                  <Image src={method.src} alt={method.name} />

                  {/* Checkmark Icon */}
                  {selectedPaymentMethod === method.name && (
                    <Box
                      position="absolute"
                      top="2px"
                      right="2px"
                      color="green.500"
                    >
                      <CheckCircle size={20} />
                    </Box>
                  )}
                </Button>
              ))}
            </Grid>

            <Button
              w="full"
              bg="gray.400"
              _hover={{ bg: "green.300" }}
              size="lg"
              mt={4}
            >
              Pay NGN 25,000
            </Button>

            <Divider />
          </VStack>
        </Box>
      </Flex>
      {/* Footer */}
      <Flex
        justify="center"
        align="center"
        py="10px"
        px="30px"
        my="20px"
        gap={2}
        border="1px solid green"
        width="fit-content"
        mx="auto"
        rounded="md"
        color="green.300"
      >
        <Text fontSize="sm">SECURED BY PEDMONIE</Text>
      </Flex>
    </Box>
  );
};

export default MakePaymentPage;
