import { format, formatDistanceToNowStrict } from "date-fns";

interface PaymentTimeProps {
  timestamp: number;
  className?: string;
}

function PaymentTime({ timestamp, className }: PaymentTimeProps) {
  const paymentDate = new Date(timestamp * 1000);
  const timeDifference = formatDistanceToNowStrict(paymentDate, {
    unit: "hour",
    addSuffix: true,
  });
  const formattedTime = format(paymentDate, "HH:mm:ss");

  return (
    <div className={className}>
      <div className="text-sm font-medium">{timeDifference}</div>
      <div className="text-xs text-gray-500">{formattedTime}</div>
    </div>
  );
}

export default PaymentTime;
