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
      <div className="grid grid-cols-3 grid-rows-2 sm:grid-cols-[0.6fr_2fr_2fr_1.6fr_1.6fr_2fr_8rem] sm:grid-rows-1 gap-4 sm:gap-6 items-center p-4 border-b border-gray-200 hover:bg-gray-50 text-center">
        {/* Payment ID bude skryté na mobilních zařízeních a viditelné na větších */}
        <div className="hidden sm:block">{paymentId}</div>
        <PaymentDate timestamp={timestamp} className="col-span-1 row-span-1 " />
        <PaymentTime timestamp={timestamp} className="col-span-1 row-span-1 " />
        <PaymentAmount
          amount={amount}
          currency={currency}
          className="col-span-1 row-span-1 order-3 sm:order-none"
        />
        <div className="col-span-1 row-span-1 order-2 sm:order-none">
          {currency}
        </div>
        <PaymentStatus status={status} className="col-span-1 row-span-1" />
        <div className="col-span-1 row-span-1">{formattedPaymentType}</div>
      </div>
    </Link>
  );
}
