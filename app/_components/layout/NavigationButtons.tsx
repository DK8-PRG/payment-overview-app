"use client";
import Link from "next/link";

interface ButtonProps {
  label?: string;
}

const buttonBaseClasses =
  "inline-block text-white px-4 py-2 text-lg mx-1 text-center rounded";

const TryAgainButton = ({ label = "Try again" }: ButtonProps) => (
  <button
    className={`${buttonBaseClasses} bg-red-500 hover:bg-red-700`}
    onClick={() => window.location.reload()}
  >
    {label}
  </button>
);

const HomeButton = ({ label = "Home" }: ButtonProps) => {
  return (
    <Link href="/">
      <div className={`${buttonBaseClasses} bg-blue-500 hover:bg-blue-700`}>
        {label}
      </div>
    </Link>
  );
};

const BackButton = ({ label = "Go back" }: ButtonProps) => {
  return (
    <button
      className={`${buttonBaseClasses} text-gray-900 hover:bg-gray-300`}
      onClick={() => window.history.back()}
    >
      {label}
    </button>
  );
};

export { HomeButton, BackButton, TryAgainButton };
