import { Payment } from "../payments/types";
import PaymentDate from "./PaymentDate";
import PaymentTime from "./PaymentTime";
import PaymentAmount from "./PaymentAmount";
import PaymentStatus from "./PaymentStatus";
import Link from "next/link";

interface PaymentRowProps {
  payment: Payment;
}

export default function PaymentRow({
  payment: { paymentId, timestamp, amount, currency, status, paymentType },
}: PaymentRowProps) {
  const formattedPaymentType = paymentType.replace(/_/g, " ");
  return (
    <Link href={`/payments/${paymentId}`}>
      <div className="grid grid-cols-[0.6fr_2fr_2fr_1.6fr_1.6fr_2fr_8rem] gap-6 items-center p-4 border-b border-gray-200 hover:bg-gray-50 text-center">
        <div>{paymentId}</div>
        <PaymentDate timestamp={timestamp} />
        <PaymentTime timestamp={timestamp} />
        <PaymentAmount amount={amount} currency={currency} />
        <div>{currency}</div>
        <PaymentStatus status={status} />
        <div>{formattedPaymentType}</div>
      </div>
    </Link>
  );
}
