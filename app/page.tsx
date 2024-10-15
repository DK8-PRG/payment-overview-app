import Link from "next/link";

export default function HomePage() {
  return (
    <div className=" flex items-center justify-center">
      <div className="text-center max-w-2xl p-6 bg-white shadow-lg rounded-lg transform transition-shadow duration-300 hover:shadow-xl">
        <h1 className="text-4xl font-bold text-gray-800 m-8">
          Welcome to Payment Overview
        </h1>
        <p className="text-base text-gray-600 mb-4 text-start">
          This application is a task for a React/Next.js Developer Candidate. It
          provides an overview of payments, allowing users to filter, sort, and
          view detailed information about individual payments. Explore the
          functionalities by viewing the payment overview page.
        </p>
        <p className="text-base text-gray-600 mb-8 text-start">
          For task details and requirements, visit the following link:
          <br />
          <a
            href="https://github.com/akcentacz/fe-interview-payments"
            className="text-blue-600 hover:underline transition-transform duration-300 hover:scale-105"
          >
            GitHub Task Description
          </a>
          .
        </p>
        <Link href="/payments">
          <button className="bg-blue-600 text-white font-medium py-2 px-4 rounded transition-colors duration-300 hover:bg-blue-700 hover:scale-105">
            See Payments
          </button>
        </Link>
      </div>
    </div>
  );
}
