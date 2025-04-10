// src/components/TradingTable.js
import { useState } from "react";
import { tradingPairs, formatPrice, formatChange } from "@/lib/mockData";

export default function TradingTable() {
  const [favorites, setFavorites] = useState(
    new Set(["BTC-HyperLiquid", "ETH-HyperLiquid"])
  );

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  return (
    <div className="mt-4 overflow-x-auto w-full">
      {/* Header Row */}
      <div className="table-row table-header">
        <div>Fav</div>
        <div>Protocol</div>
        <div>Market</div>
        <div>Price</div>
        <div>Market Cap</div>
        <div>24h Volume</div>
        <div>5m Change</div>
        <div>1h Change</div>
        <div>24h Change</div>
        <div>1Y Funding</div>
        <div>-2% Depth</div>
        <div>+2% Depth</div>
        <div>Shorts OI</div>
        <div>Longs OI</div>
      </div>

      {/* Data Rows */}
      <div className="mt-2 space-y-1">
        {tradingPairs.map((pair) => (
          <div key={pair.id} className="table-row items-center text-sm">
            <div>
              <button onClick={() => toggleFavorite(pair.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill={favorites.has(pair.id) ? "currentColor" : "none"}
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-yellow-400 mx-auto"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              </button>
            </div>
            <div className="flex  items-center gap-4">
              <div className="w-5 h-5 bg-gray-700 rounded flex items-center justify-center text-xs flex-shrink-0">
                {pair.protocol.charAt(0)}
              </div>
              <span>{pair.protocol}</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center text-xs flex-shrink-0">
                {pair.market.charAt(0)}
              </div>
              <span>{pair.market}</span>
            </div>
            <div>{formatPrice(pair.price)}</div>
            <div>{pair.marketCap}</div>
            <div>{pair.volume24h}</div>
            <div
              className={pair.change5m >= 0 ? "text-positive" : "text-negative"}
            >
              {pair.change5m >= 0 ? "+" : ""}
              {pair.change5m}%
            </div>
            <div
              className={pair.change1h >= 0 ? "text-positive" : "text-negative"}
            >
              {pair.change1h >= 0 ? "+" : ""}
              {pair.change1h}%
            </div>
            <div
              className={
                pair.change24h >= 0 ? "text-positive" : "text-negative"
              }
            >
              {pair.change24h >= 0 ? "+" : ""}
              {pair.change24h}%
            </div>
            <div>{pair.Funding1Y}%</div>
            <div>{pair["-2% Depth"]}M</div>
            <div>{pair["+2% Depth"]}M</div>
            <div>{pair.ShortsOI}M</div>
            <div>{pair.LongOI}M</div>
          </div>
        ))}
      </div>
    </div>
  );
}
