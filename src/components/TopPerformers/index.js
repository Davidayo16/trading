// src/components/TopPerformers.js
import { topGainers, topLosers, formatPrice } from "@/lib/mockData";

export default function TopPerformers() {
  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h2 className="text-lg font-medium mb-3">Top Gainers</h2>
        <div className="space-y-2">
          {topGainers.map((coin) => (
            <div
              key={coin.symbol}
              className="flex items-center justify-between bg-card rounded-lg p-3"
            >
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center text-xs">
                  {coin.symbol.charAt(0)}
                </div>
                <span>{coin.symbol}</span>
              </div>
              <div className="text-right">
                <div>{formatPrice(coin.price)}</div>
                <div className="text-positive text-sm">+{coin.change}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-medium mb-3">Top Losers</h2>
        <div className="space-y-2">
          {topLosers.map((coin) => (
            <div
              key={coin.symbol}
              className="flex items-center justify-between bg-card rounded-lg p-3"
            >
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 bg-gray-700 rounded-full flex items-center justify-center text-xs">
                  {coin.symbol.charAt(0)}
                </div>
                <span>{coin.symbol}</span>
              </div>
              <div className="text-right">
                <div>{formatPrice(coin.price)}</div>
                <div className="text-negative text-sm">{coin.change}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
