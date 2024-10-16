import { STATUS_COLORS } from "../payments/types";

interface PaymentStatusProps {
  status: string;
  className?: string;
}

export default function PaymentStatus({
  status,
  className,
}: PaymentStatusProps) {
  return (
    <div
      className={`px-3 py-1 rounded-full text-xs text-white ${STATUS_COLORS[status]} ${className}`}
    >
      {status}
    </div>
  );
}
