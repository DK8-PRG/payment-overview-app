export interface Payment {
  paymentId: string;
  timestamp: number;
  amount: number;
  currency: string;
  paymentType: string;
  status: string;
  recipient?: string;
  note?: string;
}

export interface PaymentOverviewPageProps {
  searchParams: {
    currency?: string[];
    paymentType?: string[];
    status?: string[];
    orderBy?: string;
    direction?: string;
    page?: string;
    pageSize?: string;
  };
}

export interface FilterSectionProps {
  title: string;
  options: string[];
  param: string;
  multiple?: boolean;
  colors?: { [key: string]: string };
}

export interface PaymentDetails {
  paymentId: string;
  recipient: string;
  note: string;
}

// Konfigurace - konstanty pro filtry a barvy
export const STATUS_COLORS: { [key: string]: string } = {
  PENDING: "bg-yellow-400",
  SUCCESS: "bg-green-400",
  CANCELED: "bg-red-400",
};

export const filterOptions = {
  currency: ["CZK", "USD", "EUR", "HUF"],
  paymentType: ["BANK_TRANSFER", "APPLE_PAY", "GOOGLE_PAY", "CARD_ONLINE"],
  status: ["PENDING", "SUCCESS", "CANCELED"],
};

// Globální třída pro grid layout
export const gridColsClass =
  "grid grid-cols-[0.6fr_2fr_2fr_1.6fr_1.6fr_2fr_8rem] gap-6 items-center border-b border-gray-200 text-center";
