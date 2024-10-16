"use client";
import { useRouter, useSearchParams } from "next/navigation";

interface SortProps {
  className?: string;
}

export default function Sort({ className = "" }: SortProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSortChange = (value: string) => {
    const currentParams = new URLSearchParams(searchParams.toString());
    const [orderBy, direction] = value.split("-");
    currentParams.set("orderBy", orderBy);
    currentParams.set("direction", direction);
    router.push(`${window.location.pathname}?${currentParams.toString()}`);
  };

  return (
    <>
      <div
        className={`flex px-2 py-2 rounded bg-white items-center  ${className}`}
      >
        <select
          id="sort"
          onChange={(e) => handleSortChange(e.target.value)}
          value={`${searchParams.get("orderBy") || "timestamp"}-${
            searchParams.get("direction") || "asc"
          }`}
          className="px-2 py-1 rounded text-sm border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-0 transition-colors"
        >
          <option value="timestamp-asc">Date Asc</option>
          <option value="timestamp-desc">Date Desc</option>
          <option value="amount-asc">Amount Asc</option>
          <option value="amount-desc">Amount Desc</option>
        </select>
      </div>
    </>
  );
}
