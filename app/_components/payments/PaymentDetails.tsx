import { BackButton } from "../layout/NavigationButtons";
import PaymentStatus from "../paymentTable/PaymentStatus";
import { Payment } from "./types";

interface PaymentDetailsProps {
  payment: Payment;
  paymentDetails: {
    recipient: string;
    note: string;
  };
}

export default function PaymentDetails({
  payment,
  paymentDetails,
}: PaymentDetailsProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-xl mx-auto">
      <div className="flex flex-row justify-between mb-6 items-center">
        <h2 className="text-3xl font-semibold  text-start ">
          Payment #{payment.paymentId}
        </h2>
        <BackButton label="&#x2190; Back" />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <p className="font-medium text-gray-600">Amount:</p>
          <p className="text-lg font-semibold">{payment.amount}</p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <p className="font-medium text-gray-600">Status:</p>
          <PaymentStatus status={payment.status} />
        </div>

        <div>
          <p className="font-medium text-gray-600">Currency:</p>
          <p className="text-lg">{payment.currency}</p>
        </div>

        <div>
          <p className="font-medium text-gray-600">Payment Type:</p>
          <p className="text-lg">{payment.paymentType.replace(/_/g, " ")}</p>
        </div>
        <div>
          <p className="font-medium text-gray-600">Date:</p>
          <p className="text-lg">
            {new Date(payment.timestamp * 1000).toLocaleDateString()}
          </p>
        </div>
        <div>
          <p className="font-medium text-gray-600">Time:</p>
          <p className="text-lg">
            {new Date(payment.timestamp * 1000).toLocaleTimeString()}
          </p>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-xl font-semibold mb-4">Additional Details</h3>
        <div className="mb-4">
          <p className="font-medium text-gray-600">Recipient:</p>
          <p className="text-lg">{paymentDetails.recipient}</p>
        </div>
        <div>
          <p className="font-medium text-gray-600 mb-2">Note:</p>
          <div
            className="bg-gray-100 p-4 rounded-md text-gray-700"
            dangerouslySetInnerHTML={{ __html: paymentDetails.note }}
          />
        </div>
      </div>
    </div>
  );
}
