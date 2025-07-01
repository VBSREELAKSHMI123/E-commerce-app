'use client';
import React from "react";
import SearchPage from "@/coreComponents/SearchPage";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  return <SearchPage query={query || ""} />;
};

export default Page;
