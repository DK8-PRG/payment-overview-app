interface PaymentAmountProps {
  amount: number;
  currency: string;
  className?: string;
}

function PaymentAmount({ amount, currency, className }: PaymentAmountProps) {
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);

  return <div className={className}>{formattedAmount}</div>;
}

export default PaymentAmount;
