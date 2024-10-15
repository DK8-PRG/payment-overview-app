import { Payment, PaymentOverviewPageProps } from "./types";

export function filterPayments(
  payments: Payment[],
  searchParams: PaymentOverviewPageProps["searchParams"]
): Payment[] {
  let filteredPayments = [...payments];

  if (searchParams.currency) {
    filteredPayments = filteredPayments.filter((payment) =>
      searchParams.currency!.includes(payment.currency)
    );
  }

  if (searchParams.paymentType) {
    filteredPayments = filteredPayments.filter((payment) =>
      searchParams.paymentType!.includes(payment.paymentType)
    );
  }

  if (searchParams.status) {
    filteredPayments = filteredPayments.filter((payment) =>
      searchParams.status!.includes(payment.status)
    );
  }

  return filteredPayments;
}

export function sortPayments(
  payments: Payment[],
  searchParams: PaymentOverviewPageProps["searchParams"]
): Payment[] {
  if (searchParams.orderBy && searchParams.direction) {
    return payments.sort((a, b) => {
      const aValue = a[searchParams.orderBy as keyof Payment] ?? "";
      const bValue = b[searchParams.orderBy as keyof Payment] ?? "";
      return searchParams.direction === "asc"
        ? aValue > bValue
          ? 1
          : -1
        : aValue < bValue
        ? 1
        : -1;
    });
  }
  return payments;
}

export function updateSearchParams(
  searchParams: URLSearchParams,
  param: string,
  value: string,
  multiple: boolean
): URLSearchParams {
  const currentParams = new URLSearchParams(searchParams.toString());
  const selectedValues = currentParams.getAll(param);

  if (multiple) {
    if (selectedValues.includes(value)) {
      const updatedValues = selectedValues.filter((val) => val !== value);
      currentParams.delete(param);
      updatedValues.forEach((val) => currentParams.append(param, val));
    } else {
      currentParams.append(param, value);
    }
    if (currentParams.getAll(param).length === 0) {
      currentParams.delete(param);
    }
  } else {
    currentParams.set(param, value);
  }

  return currentParams;
}
