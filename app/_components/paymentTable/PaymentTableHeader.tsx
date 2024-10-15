import { gridColsClass } from "../payments/types";

export default function PaymentTableHeader() {
  return (
    <div
      className={`${gridColsClass}  bg-gray-100  text-gray-600 uppercase text-sm font-semibold p-4 `}
    >
      <div>ID</div>
      <div>Day Payment</div>
      <div>Time</div>
      <div>Amount</div>
      <div>Currency</div>
      <div>Status</div>
      <div>Payment Type</div>
    </div>
  );
}
