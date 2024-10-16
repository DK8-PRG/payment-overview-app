"use client";
import { useRouter, useSearchParams } from "next/navigation";

interface PageSizeSelectorProps {
  pageSize: number;
  className?: string;
}

function PageSizeSelector({ pageSize, className = "" }: PageSizeSelectorProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handlePageSizeChange(newPageSize: number) {
    const currentParams = new URLSearchParams(searchParams.toString());
    currentParams.set("pageSize", newPageSize.toString());
    currentParams.set("page", "1");
    router.push(`${window.location.pathname}?${currentParams.toString()}`);
  }

  return (
    <div
      className={`px-2 py-2 rounded bg-white ${className} flex justify-center items-center`}
    >
      <select
        value={pageSize}
        onChange={(e) => handlePageSizeChange(parseInt(e.target.value))}
        className="px-2 py-1 rounded text-sm border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-0 transition-colors"
      >
        <option value="10">10 results / page</option>
        <option value="25">25 results / page</option>
        <option value="50">50 results / page</option>
      </select>
    </div>
  );
}

export default PageSizeSelector;
