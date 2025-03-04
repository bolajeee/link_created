import { ChakraProvider } from "@chakra-ui/react";
import CreatePaymentLink from "./components/transactionConfirmationUI/CreatePaymentLink";
import PaymentType from "./components/transactionConfirmationUI/PaymentType";
import Payment from "./components/transactionConfirmationUI/Payment";
import PaymentSuccessMessage from "./components/transactionConfirmationUI/PaymentSuccessMessage";
import PaymentLinkPage from "./components/transactionConfirmationUI/PaymentLinkPage";
import MakePaymentPage from "./components/transactionConfirmationUI/makePaymentPage";
import Group26951 from "./components/transactionConfirmationUI/Group26951";



function App() {
  return (
    <ChakraProvider>
      <Payment />
      <PaymentType />
      <Group26951 />
      <CreatePaymentLink />
      <PaymentSuccessMessage />
      <PaymentLinkPage />
      <MakePaymentPage />
    </ChakraProvider>
  );
}

export default App;
