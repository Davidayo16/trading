// src/components/ProtocolIcon.js
export default function ProtocolIcon({ protocol }) {
  // Map of protocol names to their colors
  const colorMap = {
    HyperLiquid: "bg-blue-600",
    Jupiter: "bg-purple-500",
    "GMX V2": "bg-green-600",
    dYdX: "bg-gray-600",
    Drift: "bg-cyan-700",
  };

  const backgroundColor = colorMap[protocol] || "bg-gray-700";

  return (
    <div
      className={`w-5 h-5 ${backgroundColor} rounded flex items-center justify-center text-xs text-white font-medium`}
    >
      {protocol.charAt(0)}
    </div>
  );
}
