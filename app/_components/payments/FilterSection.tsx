"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Fragment } from "react";
import { updateSearchParams } from "./utils";
import { FilterSectionProps } from "./types";

interface ExtendedFilterSectionProps extends FilterSectionProps {
  className?: string;
}

export default function FilterSection({
  title,
  options,
  param,
  multiple = true,
  colors = {},
  className = "",
}: ExtendedFilterSectionProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleButtonClick(value: string) {
    const updatedParams = updateSearchParams(
      searchParams,
      param,
      value,
      multiple
    );

    const selectedValues = updatedParams.getAll(param);

    // Pokud jsou vybrány všechny možnosti, nastavíme "All"
    if (selectedValues.length === options.length) {
      updatedParams.delete(param);
    }

    router.push(`${window.location.pathname}?${updatedParams.toString()}`);
  }

  function handleAllClick() {
    const currentParams = new URLSearchParams(searchParams.toString());
    currentParams.delete(param); // Odznačí všechny možnosti
    router.push(`${window.location.pathname}?${currentParams.toString()}`);
  }

  const selectedValues = searchParams.getAll(param);
  const isAllSelected = selectedValues.length === 0; // Je-li nic nevybráno, je vybrán "All"

  return (
    <div className={className}>
      {/* Tlačítko "All" */}
      <div className="flex flex-wrap gap-1 px-2 py-2 rounded bg-white">
        <button
          onClick={handleAllClick}
          className={`px-2 py-1 rounded text-sm focus:outline-none focus:ring-0 ${
            isAllSelected
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-700 hover:bg-gray-300 hover:text-black"
          } transition-colors`}
        >
          All {title}
        </button>

        {/* Ostatní tlačítka s možnostmi */}
        {options.map((option, index) => (
          <Fragment key={option}>
            {index > 0 && <span className="self-center text-gray-400">|</span>}
            <button
              onClick={() => handleButtonClick(option)}
              className={`px-1 py-1 rounded text-sm focus:outline-none focus:ring-0 ${
                selectedValues.includes(option)
                  ? `${colors[option] || "bg-blue-600"} text-gray-100`
                  : "bg-white text-gray-700 hover:bg-gray-300 hover:text-black"
              } transition-colors`}
            >
              {option.replace(/_/g, " ")}
            </button>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
