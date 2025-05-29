import React from "react";

export const MarketingAgentSelect = () => {
  return (
    <div className="flex items-center space-x-3">
      <label htmlFor="agentId" className="text-base font-medium text-gray-700">
        Marketing Agent-Id :
      </label>
      <select
        id="agentId"
        className="border border-gray-300 rounded px-3 py-1 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="MKTG111012">MKTG111012</option>
        <option value="MKTG111013">MKTG111013</option>
        <option value="MKTG111014">MKTG111014</option>
        <option value="MKTG111012">MKTG111005</option>
        <option value="MKTG111012">MKTG111006</option>

      </select>
    </div>
  );
};
