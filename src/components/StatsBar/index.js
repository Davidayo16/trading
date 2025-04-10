// src/components/StatsBar.js
import { statsData, formatLargeNumber } from "@/lib/mockData";

export default function StatsBar() {
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-card rounded-lg p-4">
        <div className="text-sm text-gray-400 mb-1">Total Open Interest</div>
        <div className="flex items-center gap-2">
          <div className="text-xl font-bold">
            {formatLargeNumber(statsData.totalOpenInterest.value)}
          </div>
          <div className="px-1.5 py-0.5 rounded bg-opacity-20 bg-green-500 text-white text-xs">
            +{statsData.totalOpenInterest.change}%
          </div>
        </div>
      </div>

      <div className="bg-card rounded-lg p-4">
        <div className="text-sm text-gray-400 mb-1">Volume 24h</div>
        <div className="flex items-center gap-2">
          <div className="text-xl font-bold">
            {formatLargeNumber(statsData.volume24h.value)}
          </div>
          <div className="px-1.5 py-0.5 rounded bg-opacity-20 bg-red-500 text-white text-xs">
            -{statsData.volume24h.change}%
          </div>
        </div>
      </div>
    </div>
  );
}
