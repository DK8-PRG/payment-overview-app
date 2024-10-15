import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <span className="text-xl font-semibold text-gray-600 uppercase hover:text-blue-600 transition-colors duration-300">
        Payments overview app
      </span>
    </Link>
  );
}

export default Logo;
