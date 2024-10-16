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

  payments = filterPayments(payments, searchParams);
  payments = sortPayments(payments, searchParams);

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
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8">
        Payments Overview
      </h1>

      <div className="flex flex-wrap gap-4 mb-4 justify-self-stretch bg-white p-4 rounded-lg shadow-md">
        <FilterSection
          title="Payment Type"
          options={filterOptions.paymentType}
          param="paymentType"
          multiple={true}
          className="border border-gray-200 p-2 rounded"
        />
        <FilterSection
          title="Currency"
          options={filterOptions.currency}
          param="currency"
          multiple={false}
          className="border border-gray-200 p-2 rounded"
        />
        <Sort className="border border-gray-200 p-2 rounded" />
        <FilterSection
          title="Status"
          options={filterOptions.status}
          param="status"
          multiple={false}
          colors={STATUS_COLORS}
          className="border border-gray-200 p-2 rounded"
        />
        <PageSizeSelector
          pageSize={pageSize}
          className="border border-gray-200 p-2 rounded"
        />
        <Paginations
          currentPage={page}
          totalPages={totalPages}
          className="border border-gray-200 p-2 rounded"
        />
      </div>

      <Suspense fallback={<Spinner />}>
        <PaymentList payments={paginatedPayments} />
      </Suspense>
      <div className="flex flex-col sm:flex-row justify-between items-center mt-2 bg-white p-4 rounded-lg shadow-md">
        <p className="text-sm text-gray-700 mb-4 sm:mb-0">
          Showing {startItem} to {endItem} of {count} results
        </p>
        <Paginations currentPage={page} totalPages={totalPages} />
      </div>
    </div>
  );
}
