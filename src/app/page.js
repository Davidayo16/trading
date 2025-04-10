// src/app/page.js
"use client";

import { useState } from "react";
import Header from "@/components/Header";
import StatsBar from "@/components/StatsBar";
import TopPerformers from "@/components/TopPerformers";
import TradingTable from "@/components/TradingTable";
import Pagination from "@/components/Pagination";

export default function Home() {
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main className="min-h-screen pb-8">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <StatsBar />
        <TopPerformers />
        <div className="mt-8">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <div className="relative bg-gray-900 rounded-md p-2 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <input
                type="text"
                placeholder="Symbol (BTC, ETH, etc.)"
                className="bg-transparent border-none outline-none text-sm pl-2 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-2 ml-auto">
              <div className="flex items-center gap-1">
                <span className="text-sm text-gray-400">Categories</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>

              <div className="flex items-center gap-1">
                <span className="text-sm text-gray-400">Protocols</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>

              <button className="text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex border-b border-gray-800">
            {["All", "Favorites", "Top Gainers", "Top Losers"].map((tab) => (
              <button
                key={tab}
                className={`py-2 px-4 text-sm ${
                  activeTab === tab.toLowerCase().replace(/\s+/g, "-")
                    ? "border-b-2 border-rage-purple text-white"
                    : "text-gray-400"
                }`}
                onClick={() =>
                  setActiveTab(tab.toLowerCase().replace(/\s+/g, "-"))
                }
              >
                {tab}
              </button>
            ))}
          </div>

          <TradingTable />

          <Pagination
            currentPage={currentPage}
            totalPages={5}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </main>
  );
}
