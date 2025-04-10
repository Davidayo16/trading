// src/components/TokenIcon.js
export default function TokenIcon({ symbol, size = "small" }) {
  // Map of token symbols to their colors
  const colorMap = {
    BTC: "bg-yellow-600",
    ETH: "bg-purple-700",
    SOL: "bg-green-700",
    XRP: "bg-blue-700",
    DOGE: "bg-yellow-500",
    ADA: "bg-blue-600",
    HYPE: "bg-pink-600",
    SUI: "bg-cyan-600",
    FASTCOIN: "bg-orange-600",
    IBIA: "bg-red-600",
    TRUMP: "bg-red-700",
    VINE: "bg-green-600",
    POPCAT: "bg-pink-500",
    CATI: "bg-gray-500",
    ZLO: "bg-amber-700",
    GRASS: "bg-emerald-600",
    H2PE: "bg-indigo-600",
  };

  const backgroundColor = colorMap[symbol] || "bg-gray-700";
  const sizeClass = size === "small" ? "w-5 h-5" : "w-6 h-6";

  return (
    <div
      className={`${sizeClass} ${backgroundColor} rounded-full flex items-center justify-center text-xs text-white font-medium`}
    >
      {symbol.charAt(0)}
    </div>
  );
}
