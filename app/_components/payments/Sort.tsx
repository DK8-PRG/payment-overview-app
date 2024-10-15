"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function Sort() {
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
      {/* <label htmlFor="sort" className="block font-semibold mb-2 text-sm">
        Sort by
      </label> */}
      <div className="px-2 py-2 rounded bg-white">
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
