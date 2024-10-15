import dynamic from "next/dynamic";
import PaymentList from "../_components/paymentTable/PaymentList";
import FilterSection from "../_components/payments/FilterSection";
import Sort from "../_components/payments/Sort";
import Paginations from "../_components/payments/Paginations";
import {
  Payment,
  PaymentOverviewPageProps,
  filterOptions,
  STATUS_COLORS,
} from "../_components/payments/types";
import { getPayments } from "../_lib/fetchData";
import { filterPayments, sortPayments } from "../_components/payments/utils";
import { Suspense } from "react";
import Spinner from "../_components/layout/Spinner";

// Dynamický import PageSizeSelector
const PageSizeSelector = dynamic(
  () => import("../_components/payments/PageSizeSelector"),
  { ssr: false }
);
export const metadata = {
  title: "Payments",
};
export default async function PaymentOverviewPage({
  searchParams,
}: PaymentOverviewPageProps) {
  let payments: Payment[] = await getPayments();

  // Filtrování a řazení plateb
  payments = filterPayments(payments, searchParams);
  payments = sortPayments(payments, searchParams);

  // Stránkování
  const page = parseInt(searchParams.page || "1");
  const pageSize = parseInt(searchParams.pageSize || "10");
  const totalPages = Math.ceil(payments.length / pageSize);
  const paginatedPayments = payments.slice(
    (page - 1) * pageSize,
    page * pageSize
  );
  const count = payments.length;
  const startItem = (page - 1) * pageSize + 1;
  const endItem = page === totalPages ? payments.length : page * pageSize;

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="flex text-3xl font-bold justify-center mb-12">
        Payments Overview
      </h1>

      {/* Filtrování - Payment Type a Currency */}
      <div className="flex justify-between mb-1">
        <FilterSection
          title="Payment Type"
          options={filterOptions.paymentType}
          param="paymentType"
          multiple={true}
        />
        <FilterSection
          title="Currency"
          options={filterOptions.currency}
          param="currency"
          multiple={false}
        />
      </div>

      {/* Status, Sort, PageSizeSelector a Pagination */}
      <div className="flex justify-between items-center mb-1">
        <FilterSection
          title="Status"
          options={filterOptions.status}
          param="status"
          multiple={false}
          colors={STATUS_COLORS}
        />
        <Sort />
        <PageSizeSelector pageSize={pageSize} />
        <Paginations currentPage={page} totalPages={totalPages} />
      </div>

      {/* Seznam plateb */}

      <Suspense fallback={<Spinner />}>
        <PaymentList payments={paginatedPayments} />
      </Suspense>
      {/* Pagination na konci stránky */}
      <div className="flex justify-end mb-8">
        <p
          className="flex items-center gap-1 py-2 text-sm bg-white text-gray-700 justify-start flex-grow px-2 rounded
      "
        >
          Showing <span>{+startItem}</span> to <span>{+endItem}</span> of
          <span> {count} </span>
          results
        </p>
        <Paginations currentPage={page} totalPages={totalPages} />
      </div>
    </div>
  );
}
