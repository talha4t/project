"use client";

import { Group, ActiveOption, SearchParams } from "@/types/company";
import { Select } from "./select";
import { Input } from "./input";
import { Button } from "./button";
import { Search, X } from "lucide-react";

interface SearchFiltersProps {
  groups: Group[];
  activeOptions: ActiveOption[];
  searchParams: SearchParams;
  onSearch: (params: SearchParams) => void;
}

export function SearchFilters({
  groups,
  activeOptions,
  searchParams,
  onSearch,
}: SearchFiltersProps) {
  const handleSearch = () => {
    onSearch(searchParams);
  };

  const handleClear = () => {
    onSearch({
      searchGroupId: 0,
      searchCompanyName: null,
      searchVatNumber: null,
      searchActiveId: 0,
      page: 1,
      pageSize: 25,
    });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <Input
        placeholder="Company name"
        value={searchParams.searchCompanyName || ""}
        onChange={(e) =>
          onSearch({ ...searchParams, searchCompanyName: e.target.value })
        }
      />
      <Select
        value={searchParams.searchGroupId.toString()}
        onValueChange={(value) =>
          onSearch({ ...searchParams, searchGroupId: parseInt(value) })
        }
      >
        {groups.map((group) => (
          <option key={group.value} value={group.value}>
            {group.text}
          </option>
        ))}
      </Select>
      <Input
        placeholder="VAT number"
        value={searchParams.searchVatNumber || ""}
        onChange={(e) =>
          onSearch({ ...searchParams, searchVatNumber: e.target.value })
        }
      />
      <Select
        value={searchParams.searchActiveId.toString()}
        onValueChange={(value) =>
          onSearch({ ...searchParams, searchActiveId: parseInt(value) })
        }
      >
        {activeOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </Select>
      <div className="col-span-1 md:col-span-4 flex gap-2 justify-end">
        <Button
          onClick={handleSearch}
          className="gap-2 bg-blue-500 text-white hover:bg-blue-600 focus:ring focus:ring-blue-300"
        >
          <Search className="h-4 w-4" />
          Search
        </Button>
        <Button variant="outline" onClick={handleClear} className="gap-2">
          <X className="h-4 w-4" />
          Clear
        </Button>
      </div>
    </div>
  );
}
