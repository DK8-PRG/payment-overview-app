interface PaymentAmountProps {
  amount: number;
  currency: string;
}
function PaymentAmount({ amount, currency }: PaymentAmountProps) {
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
  return <div>{formattedAmount}</div>;
}

export default PaymentAmount;
