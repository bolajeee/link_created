import React, { useState } from "react";
import {
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Select,
    Button,
    Text,
    Input,
    IconButton,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Badge,
    Flex,
    HStack,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/react";
import { SearchIcon, ChevronDownIcon, ChevronLeft, ChevronRight, MoreVertical } from "lucide-react";

const transactions = [
    { id: "456789356", date: "Sep 9, 2024, 04:30pm", from: "Darrell Steward", type: "Transfer", amount: 5670, status: "Pending" },
    { id: "456789356", date: "Sep 8, 2024, 03:13pm", from: "Arlene McCoy", type: "Transfer", amount: 15000, status: "Completed" },
    { id: "456789356", date: "Sep 7, 2024, 1:00pm", from: "Bessie Cooper", type: "Card", amount: -3456, status: "Cancelled" },
    { id: "456789356", date: "Sep 6, 2024, 07:00am", from: "kikikarishma@email.com", type: "Income", amount: 30000, status: "Pending" },
    { id: "456789356", date: "Sep 8, 2024, 03:13pm", from: "Wise - 5466xxxx", type: "Savings", amount: 8000, status: "Completed" },
    { id: "456789356", date: "Sep 9, 2024, 04:30pm", from: "Darrell Steward", type: "Transfer", amount: 5670, status: "Pending" },
    { id: "456789356", date: "Sep 8, 2024, 03:13pm", from: "Arlene McCoy", type: "Transfer", amount: 15000, status: "Completed" },
    { id: "456789356", date: "Sep 7, 2024, 1:00pm", from: "Bessie Cooper", type: "Card", amount: -3456, status: "Cancelled" },
    { id: "456789356", date: "Sep 6, 2024, 07:00am", from: "kikikarishma@email.com", type: "Income", amount: 30000, status: "Pending" },

];

const TransactionHistory = () => {
    const [sortBy, setSortBy] = useState("Newest");
    const [currentPage, setCurrentPage] = useState(1);
    const [activeTab, setActiveTab] = useState("All");
    const [activeNavTab, setActiveNavTab] = useState("Transaction History");
    const [statusFilter, setStatusFilter] = useState("All");
    const itemsPerPage = 5;

    const filteredTransactions = transactions.filter((txn) => {
        if (activeTab === "Money In") return txn.amount > 0;
        if (activeTab === "Money Out") return txn.amount < 0;
        return true;
    });

    const totalEntries = filteredTransactions.length; // Use the length of filteredTransactions
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredTransactions.slice(indexOfFirstItem, indexOfFirstItem + itemsPerPage);
    const totalPages = Math.ceil(totalEntries / itemsPerPage); // Calculate totalPages based on totalEntries
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Generate pagination buttons dynamically
    const renderPaginationButtons = () => {
        const buttons = [];
        const maxButtonsToShow = 5; // Maximum number of page buttons to show

        // Always show first page
        buttons.push(
            <Button
                key={1}
                size="sm"
                variant={currentPage === 1 ? "solid" : "outline"}
                colorScheme={currentPage === 1 ? "blue" : "gray"}
                mx={1}
                onClick={() => handlePageChange(1)}
            >
                1
            </Button>
        );

        // Calculate range of pages to show
        let startPage = Math.max(2, currentPage - Math.floor(maxButtonsToShow / 2));
        let endPage = Math.min(totalPages - 1, startPage + maxButtonsToShow - 3);

        // Adjust start if we're near the end
        if (endPage === totalPages - 1) {
            startPage = Math.max(2, endPage - (maxButtonsToShow - 3));
        }

        // Add ellipsis after first page if needed
        if (startPage > 2) {
            buttons.push(<Text key="ellipsis-1" mx={1}>...</Text>);
        }

        // Add middle pages
        for (let i = startPage; i <= endPage; i++) {
            buttons.push(
                <Button
                    key={i}
                    size="sm"
                    variant={currentPage === i ? "solid" : "outline"}
                    colorScheme={currentPage === i ? "blue" : "gray"}
                    mx={1}
                    onClick={() => handlePageChange(i)}
                >
                    {i}
                </Button>
            );
        }

        // Add ellipsis before last page if needed
        if (endPage < totalPages - 1) {
            buttons.push(<Text key="ellipsis-2" mx={1}>...</Text>);
        }

        // Always show last page if it exists and is not the first page
        if (totalPages > 1) {
            buttons.push(
                <Button
                    key={totalPages}
                    size="sm"
                    variant={currentPage === totalPages ? "solid" : "outline"}
                    colorScheme={currentPage === totalPages ? "blue" : "gray"}
                    mx={1}
                    onClick={() => handlePageChange(totalPages)}
                >
                    {totalPages}
                </Button>
            );
        }

        return buttons;
    };

    // Status color mapping
    const getStatusColor = (status) => {
        switch (status) {
            case "Completed": return "green";
            case "Pending": return "yellow";
            case "Cancelled": return "red";
            default: return "gray";
        }
    };

    return (
        <Box p={5} bg="white" borderRadius="lg" shadow="sm" w="full">
            {/* Header Section */}
            <Flex justify="space-between" align="center" mb={4}>
                <Text fontSize="xl" fontWeight="medium">Transaction</Text>
                <Flex align="center" gap={2}>
                    <Flex align="center" border="1px solid #E2E8F0" borderRadius="md" px={2}>
                        <SearchIcon size={16} color="#718096" />
                        <Input placeholder="Search" w="200px" border="none" _focusVisible={{ outline: "none" }} ml={2} />
                    </Flex>
                    <Select
                        w="150px"
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        borderRadius="md"
                        rightIcon={<ChevronDownIcon size={16} />}
                    >
                        <option value="Newest">Newest</option>
                        <option value="Oldest">Oldest</option>
                    </Select>
                </Flex>
            </Flex>

            <Box border="1px solid #E2E8F0" borderRadius="lg" w="full">
                {/* Main Navigation Tabs */}
                <Tabs variant="unstyled" p={2}>
                    <TabList borderBottom="1px solid #E2E8F0" px={28}>
                        {['Profile', 'Transaction History'].map((tab) => (
                            <Tab
                                key={tab}
                                fontWeight="medium"
                                color="gray.500"
                                mx={4}
                                pb={2}
                                _selected={{
                                    color: "black",
                                    borderBottom: "3px solid #F0BC2B",
                                    fontWeight: "semibold"
                                }}
                                onClick={() => setActiveNavTab(tab)}
                            >
                                {tab === activeNavTab ? (
                                    <Box position="relative">
                                        {tab}
                                    </Box>
                                ) : tab}
                            </Tab>
                        ))}
                    </TabList>
                </Tabs>

                {/* Transaction Filtering Tabs */}
                <Flex justify="space-between" align="center" px={4} py={2}>
                    <HStack spacing={6}>
                        {['All', 'Money In', 'Money Out'].map((tab) => (
                            <Box
                                key={tab}
                                position="relative"
                                cursor="pointer"
                                fontWeight={activeTab === tab ? "medium" : "normal"}
                                color={activeTab === tab ? "black" : "gray.500"}
                                pb={2}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                                {activeTab === tab && (
                                    <Box
                                        position="absolute"
                                        bottom="-2px"
                                        left="0"
                                        right="0"
                                        height="2px"
                                        bg="purple.500"
                                        borderRadius="2px"
                                    />
                                )}
                            </Box>
                        ))}
                    </HStack>
                    <Flex align="center" gap={2}>
                        <Text fontSize="sm" color="gray.500">Status:</Text>
                        <Select
                            size="sm"
                            borderRadius="md"
                            w="100px"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                        >
                            <option value="All">All</option>
                            <option value="Completed">Completed</option>
                            <option value="Pending">Pending</option>
                            <option value="Cancelled">Cancelled</option>
                        </Select>
                    </Flex>
                </Flex>

                {/* Responsive Table/Grid */}
                <Box px={4}>
                    {/* Desktop View */}
                    <TableContainer display={{ base: "none", md: "block" }}>
                        <Table variant="simple">
                            <Thead>
                                <Tr>
                                    <Th>Ref ID</Th>
                                    <Th>Transaction Date</Th>
                                    <Th>From</Th>
                                    <Th>Type</Th>
                                    <Th isNumeric>Amount</Th>
                                    <Th>Status</Th>
                                    <Th>Actions</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {currentItems.map((txn, index) => (
                                    <Tr key={index}>
                                        <Td>{txn.id}</Td>
                                        <Td>{txn.date}</Td>
                                        <Td>{txn.from}</Td>
                                        <Td>{txn.type}</Td>
                                        <Td isNumeric color={txn.amount < 0 ? "red.500" : "green.500"}>
                                            {txn.amount < 0 ? "-" : "+"}${Math.abs(txn.amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                        </Td>
                                        <Td>
                                            <Text color={`${getStatusColor(txn.status)}.500`}>
                                                {txn.status}
                                            </Text>
                                        </Td>
                                        <Td>
                                            <IconButton
                                                aria-label="More options"
                                                icon={<MoreVertical size={16} />}
                                                variant="ghost"
                                                size="sm"
                                            />
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </TableContainer>

                    {/* Mobile View */}
                    <Box display={{ base: "block", md: "none" }}>
                        {currentItems.map((txn, index) => (
                            <Box
                                key={index}
                                py={3}
                                borderBottom="1px solid"
                                borderColor="gray.200"
                            >
                                <Flex justify="space-between">
                                    <Box>
                                        <Text fontWeight="medium">{txn.from}</Text>
                                        <Text fontSize="sm" color="gray.500">{txn.type}</Text>
                                        <Text fontSize="sm" color="gray.500">{txn.date}</Text>
                                    </Box>
                                    <Box textAlign="right">
                                        <Text fontWeight="medium" color={txn.amount < 0 ? "red.500" : "green.500"}>
                                            {txn.amount < 0 ? "-" : "+"}${Math.abs(txn.amount).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                                        </Text>
                                        <Text fontSize="sm" color={`${getStatusColor(txn.status)}.500`}>
                                            {txn.status}
                                        </Text>
                                    </Box>
                                </Flex>
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* Pagination */}
                <Flex justify="space-between" align="center" p={4}>
                    <Text fontSize="sm" color="gray.500">
                        Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, totalEntries)} of {totalEntries} entries
                    </Text>
                    <Flex align="center">
                        <IconButton
                            icon={<ChevronLeft size={16} />}
                            variant="outline"
                            size="sm"
                            mr={2}
                            isDisabled={currentPage === 1}
                            onClick={() => handlePageChange(currentPage - 1)}
                            aria-label="Previous page"
                        />
                        {renderPaginationButtons()}
                        <IconButton
                            icon={<ChevronRight size={16} />}
                            variant="outline"
                            size="sm"
                            ml={2}
                            isDisabled={currentPage === totalPages}
                            onClick={() => handlePageChange(currentPage + 1)}
                            aria-label="Next page"
                        />
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
};

export default TransactionHistory;