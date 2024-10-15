# Payments Overview Application

[Live Demo](https://payment-overview-app.vercel.app)

This is a simple web application built with React and Next.js that provides an overview of payments, including details for individual transactions. The application allows users to view payments, filter by various criteria (date, amount, payment type, currency, and status), and navigate to detailed views for each payment.

## Features

- **Payments List**: Displays a list of payments with the following information:
  - Payment Date
  - Amount
  - Currency (USD, EUR, CZK, HUF)
  - Payment Type (BANK_TRANSFER, APPLE_PAY, GOOGLE_PAY, CARD_ONLINE)
  - Payment Status (PENDING, SUCCESS, CANCELED)
- **Payment Details**: Displays additional details for each payment, such as recipient and a formatted note.

- **Filtering & Sorting**: Supports filtering by payment type, currency, and status, and sorting by date and amount.

## Installation

1. Clone the repository:

```bash
   git clone https://github.com/your-username/payments-overview-app.git
```

2. Navigate into the project directory:

```bash
   cd payments-overview-app
```

3. Install dependencies:

```bash
   npm install
```

4. Start the development server:

```bash
npm run dev
```

Technology Stack

- Next.js for server-side rendering and API handling
- React for building the UI components
- TypeScript for type safety
- Tailwind CSS for styling
