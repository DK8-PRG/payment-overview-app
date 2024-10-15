"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useCallback } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Paginations({
  currentPage,
  totalPages,
}: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = useCallback(
    (newPage: number) => {
      const currentParams = new URLSearchParams(searchParams.toString());
      currentParams.set("page", newPage.toString());
      router.push(`${window.location.pathname}?${currentParams.toString()}`);
    },
    [router, searchParams]
  );

  useEffect(() => {
    if (currentPage > totalPages) {
      handlePageChange(1);
    }
  }, [currentPage, totalPages, handlePageChange]);

  return (
    <div className="flex items-center gap-2 px-2 py-2 rounded bg-white">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-2 py-1 rounded text-sm bg-white text-gray-700 border border-gray-300 disabled:opacity-50"
      >
        Previous
      </button>
      <div className="flex items-center space-x-1 text-sm">
        <span>{currentPage}</span>
        <span>/</span>
        <span>{totalPages}</span>
      </div>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-2 py-1 rounded text-sm bg-white text-gray-700 border border-gray-300 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
