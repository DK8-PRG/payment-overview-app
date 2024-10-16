import { formatDistanceToNow, format } from "date-fns";

interface PaymentDateProps {
  timestamp: number;
  className?: string;
}

function PaymentDate({ timestamp, className }: PaymentDateProps) {
  const paymentDate = new Date(timestamp * 1000);
  const formatedDate = formatDistanceToNow(paymentDate, { addSuffix: true });
  const fullFormattedDate = format(paymentDate, "dd.MM.yyyy");
  return (
    <div className={className}>
      <div className="text-sm font-medium">{formatedDate}</div>
      <div className="text-xs text-gray-500">{fullFormattedDate}</div>
    </div>
  );
}

export default PaymentDate;
