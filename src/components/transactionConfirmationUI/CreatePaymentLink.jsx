import { 
    Box, 
    Divider, 
    Text, 
    Flex, 
    VStack, 
    Button, 
    IconButton, 
    Input, 
    Textarea, 
    Select,
    useBreakpointValue,
    Container,
    Stack
  } from "@chakra-ui/react";
  import { ArrowBackIcon } from "@chakra-ui/icons";
  import { FaCloudUploadAlt } from "react-icons/fa";
  
  const CreatePaymentLink = () => {
    // Responsive settings based on screen size
    const direction = useBreakpointValue({ base: "column", lg: "row" });
    const formWidth = useBreakpointValue({ base: "100%", md: "90%", lg: "525px" });
    const uploadWidth = useBreakpointValue({ base: "100%", md: "90%", lg: "649px" });
    const uploadHeight = useBreakpointValue({ base: "300px", md: "350px", lg: "444px" });
    const containerPadding = useBreakpointValue({ base: "3", md: "6" });
    const spacing = useBreakpointValue({ base: "4", md: "55" });
    const headerFontSize = useBreakpointValue({ base: "20px", md: "24px" });
    const headerMargin = useBreakpointValue({ base: "50px", md: "70px" });
    const formMargin = useBreakpointValue({ base: "20px", md: "40px" });
    const uploadMargin = useBreakpointValue({ base: "20px", md: "40px", lg: "200px" });
    const buttonSize = useBreakpointValue({ base: "md", md: "md" });
  
    return (
      <Box w="100%" minH="100vh" bg="gray.100" color="gray.600" position="relative" overflowX="hidden">
        {/* Header section */}
        <Box w="100%" position="relative">
          <Flex align="center" h="63px" px={containerPadding}>
            <IconButton 
              icon={<ArrowBackIcon boxSize={6} />} 
              aria-label="Back" 
              variant="ghost" 
              position={{ base: "relative", md: "absolute" }} 
              left={{ base: "0", md: "6" }} 
            />
            <Text 
              fontSize={headerFontSize} 
              fontWeight="500" 
              color="#333333" 
              ml={{ base: "4", md: headerMargin }}
              textAlign={{ base: "left", md: "left" }}
            >
              Create payment link
            </Text>
          </Flex>
          <Divider borderColor="#DDDDDD" borderWidth="1px" w="100%" />
        </Box>
  
        {/* Main content */}
        <Container maxW="container.xl" p={0}>
          <Stack 
            direction={direction} 
            spacing={spacing} 
            p={containerPadding} 
            justify="center" 
            align={{ base: "center", lg: "flex-start" }}
          >
            {/* Form Section */}
            <Box 
              w={formWidth} 
              p={{ base: 4, md: 8 }} 
              bg="white" 
              borderRadius="lg" 
              boxShadow="md" 
              mt={formMargin}
            >
              <VStack spacing={6} align="stretch">
                {/* Name Input */}
                <Box>
                  <Text fontSize="16px" fontWeight="400">Name</Text>
                  <Input placeholder="Enter name" borderColor="#DDDDDD" borderRadius="8px" />
                </Box>
  
                {/* Description Textarea */}
                <Box>
                  <Text fontSize="16px" fontWeight="400">Description</Text>
                  <Textarea 
                    placeholder="Enter description" 
                    borderColor="#D9D9D9" 
                    borderRadius="8px" 
                    rows={6} 
                  />
                  <Text fontSize="12px" color="#919191" textAlign="right">0 / 280</Text>
                </Box>
  
                {/* Amount Selection */}
                <Box>
                  <Text fontSize="16px" fontWeight="400">Amount</Text>
                  <Flex gap={2}>
                    <Select 
                      w={{ base: "40%", md: "128px" }} 
                      borderColor="#D9D9D9" 
                      borderRadius="8px"
                    >
                      <option value="NGN">NGN</option>
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="GBP">GBP</option>
                    </Select>
                    <Input 
                      placeholder="0.00" 
                      borderColor="#D9D9D9" 
                      borderRadius="8px" 
                      w={{ base: "60%", md: "auto" }}
                    />
                  </Flex>
                  <Text fontSize="12px" color="#919191">
                    You can leave empty to allow customers enter desired amount
                  </Text>
                </Box>
  
                {/* Payment Notification */}
                <Box>
                  <Text fontSize="14px" fontWeight="400">
                    Where should we send your payment notification
                  </Text>
                  <Text fontSize="16px" fontWeight="400" mt={2}>Phone number</Text>
                  <Flex gap={2}>
                    <Select 
                      w={{ base: "40%", md: "130px" }} 
                      borderColor="#D9D9D9" 
                      borderRadius="8px"
                    >
                      <option value="+234">+234</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                    </Select>
                    <Input 
                      placeholder="000 000 0000" 
                      borderColor="#D9D9D9" 
                      borderRadius="8px" 
                      w={{ base: "60%", md: "auto" }}
                    />
                  </Flex>
                </Box>
  
                {/* Email Address */}
                <Box>
                  <Text fontSize="16px" fontWeight="400">Email address</Text>
                  <Input placeholder="example@gmail.com" borderColor="#DDDDDD" borderRadius="8px" />
                </Box>
  
                <Divider />
  
                {/* Buttons */}
                <Flex 
                  gap={4} 
                  justify="center" 
                  direction={{ base: "column", sm: "row" }}
                  w="100%"
                >
                  <Button 
                    bg="#2E5C38" 
                    color="white" 
                    _hover={{ bg: "green.700" }} 
                    borderRadius="8px"
                    size={buttonSize}
                    w={{ base: "100%", sm: "auto" }}
                  >
                    Create link
                  </Button>
                  <Button 
                    variant="outline" 
                    borderColor="#333333" 
                    color="#333333" 
                    borderRadius="8px"
                    size={buttonSize}
                    w={{ base: "100%", sm: "auto" }}
                  >
                    Cancel
                  </Button>
                </Flex>
              </VStack>
            </Box>
  
            {/* Image Upload Section */}
            <Box
              w={uploadWidth}
              h={uploadHeight}
              bg="rgba(221, 221, 221, 0.8)"
              borderRadius="md"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              p={4}
              mt={uploadMargin}
              cursor="pointer"
              _hover={{ bg: "rgba(221, 221, 221, 0.9)" }}
              transition="background 0.3s"
            >
              {/* Upload Icon */}
              <FaCloudUploadAlt 
                size={useBreakpointValue({ base: 60, md: 88 })} 
                color="#CCCCCC" 
              />
  
              {/* Upload Instruction */}
              <Text
                w={{ base: "90%", md: "288px" }}
                textAlign="center"
                color="#67B5FE"
                fontSize="16px"
                fontWeight="500"
                lineHeight="22.4px"
                mt={4}
              >
                Drag your image from your computer here or click to upload
              </Text>
  
              {/* Additional Info */}
              <Text
                w={{ base: "90%", md: "429px" }}
                textAlign="center"
                color="#505050"
                fontSize="12px"
                fontWeight="400"
                lineHeight="20px"
                mt={3}
              >
                This image will be displayed on social platforms where the link is shared
              </Text>
            </Box>
          </Stack>
        </Container>
      </Box>
    );
  };
  
  export default CreatePaymentLink;