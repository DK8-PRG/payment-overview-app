import { Payment } from "@/app/_components/payments/types";
import { getPaymentById, getPayments } from "@/app/_lib/fetchData";
import PaymentDetails from "@/app/_components/payments/PaymentDetails";
export async function generateMetadata({
  params,
}: {
  params: { paymentId: string };
}) {
  const { paymentId } = params;
  return { title: `payment #${paymentId}` };
}

export default async function PaymentDetailPage({
  params,
}: {
  params: { paymentId: string };
}) {
  const { paymentId } = params;

  const paymentDetails = await getPaymentById(paymentId);
  const payments: Payment[] = await getPayments();
  const payment = payments.find((p: Payment) => p.paymentId === paymentId);

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Payment Detail</h1>

      {payment ? (
        <PaymentDetails payment={payment} paymentDetails={paymentDetails} />
      ) : (
        <p>Payment not found</p>
      )}
    </div>
  );
}
