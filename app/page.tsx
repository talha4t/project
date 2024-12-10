"use client";

import { useState, useEffect } from "react";
import { SearchFilters } from "@/components/ui/search-filters";
import { CompanyTable } from "@/components/ui/company-table";
import { Pagination } from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { fetchCompanies, fetchFilters } from "@/lib/api";
import { SearchParams } from "@/types/company";

export default function Home() {
  const [companies, setCompanies] = useState([]);
  const [filters, setFilters] = useState({
    availableGroups: [],
    availableActiveOptions: [],
    availablePageSizes: [],
  });
  const [totalItems, setTotalItems] = useState(0);
  const [searchParams, setSearchParams] = useState<SearchParams>({
    searchGroupId: 0,
    searchCompanyName: null,
    searchVatNumber: null,
    searchActiveId: 0,
    page: 1,
    pageSize: 25,
  });

  useEffect(() => {
    const loadData = async () => {
      try {
        const [companiesData, filtersData] = await Promise.all([
          fetchCompanies(searchParams),
          fetchFilters(),
        ]);
        setCompanies(companiesData.data.data);
        setTotalItems(companiesData.data.recordsTotal);
        setFilters(filtersData.data);
      } catch (error) {
        console.error("Error loading data:", error);
      }
    };

    loadData();
  }, [searchParams]);

  const totalPages = Math.ceil(totalItems / searchParams.pageSize);

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">List of companies</h1>
          <Button className="gap-2 bg-blue-500 text-white hover:bg-blue-600 focus:ring focus:ring-blue-300">
            <Plus className="h-4 w-4" />
            Add new
          </Button>
        </div>

        <SearchFilters
          groups={filters.availableGroups}
          activeOptions={filters.availableActiveOptions}
          searchParams={searchParams}
          onSearch={setSearchParams}
        />

        <div className="bg-white rounded-lg shadow">
          <CompanyTable companies={companies} />
          <div className="p-4 border-t">
            <Pagination
              currentPage={searchParams.page}
              totalPages={totalPages}
              pageSize={searchParams.pageSize}
              totalItems={totalItems}
              onPageChange={(page) =>
                setSearchParams({ ...searchParams, page })
              }
              onPageSizeChange={(pageSize) =>
                setSearchParams({ ...searchParams, pageSize, page: 1 })
              }
              availablePageSizes={filters.availablePageSizes}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
