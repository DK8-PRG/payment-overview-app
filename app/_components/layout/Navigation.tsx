import Link from "next/link";

function Navigation() {
  return (
    <nav className="z-10 text-base">
      <ul className="flex gap-1 items-center">
        <li>
          <Link
            href="/payments"
            className="px-4 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-300"
          >
            Payments
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
