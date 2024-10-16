import { Payment } from "../payments/types";
import PaymentRow from "./PaymentRow";
import PaymentTableHeader from "./PaymentTableHeader";

interface PaymentListProps {
  payments: Payment[];
  className?: string;
}

export default function PaymentList({ payments, className }: PaymentListProps) {
  if (!payments || payments.length === 0) {
    return (
      <p className="text-center text-gray-500 font-medium text-lg my-6">
        No payments available.
      </p>
    );
  }

  return (
    <div
      className={`border border-gray-200 bg-gray-50 rounded-lg overflow-hidden ${className}`}
    >
      <div className="overflow-x-auto">
        <div className="min-w-full">
          <PaymentTableHeader />
          <div className="bg-white divide-y divide-gray-200">
            {payments.map((payment) => (
              <PaymentRow key={payment.paymentId} payment={payment} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
