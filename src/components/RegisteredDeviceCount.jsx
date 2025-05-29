import React, { useEffect, useState } from "react";

const deviceData = [
  {
    deviceId: "D001",
    agentId: "MKTG111012",
    registeredDate: "20-05-2025",
  },
  {
    deviceId: "D002",
    agentId: "MKTG111010",
    registeredDate: "22-05-2025",
  },
  {
    deviceId: "D003",
    agentId: "MKTG111013",
    registeredDate: "24-05-2025",
  },
  {
    deviceId: "D004",
    agentId: "MKTG111016",
    registeredDate: "26-05-2025",
  },
  {
    deviceId: "D005",
    agentId: "MKTG111015",
    registeredDate: "28-05-2025",
  },
];

export const RegisteredDeviceCount = () => {
  const [agentId, setAgentId] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [deviceCount, setDeviceCount] = useState(0);
  const [searched,setSearched]=useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const count = deviceData.reduce((acc, device) => {
      const [day, month, year] = device.registeredDate.split("-");
      const formattedDate = `${year}-${month}-${day}`;

      if (
        device.agentId === agentId &&
        formattedDate >= fromDate &&
        formattedDate <= toDate
      ) {
        return acc + 1;
      }
      return acc;
    }, 0);
    setDeviceCount(count);
    setSearched(true);
  };

  useEffect(() => {
    console.log(deviceCount);
  }, [deviceCount]);
  return (
    <>
      <div className="flex justify-center">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex gap-4">
            <div className="flex flex-col">
              <label className="text-sm text-gray-700 mb-1">Agent Id</label>
              <input
                type="text"
                value={agentId}
                onChange={(e) => setAgentId(e.target.value)}
                placeholder="Agent Id"
                className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-900"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-700 mb-1">From Date</label>
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-900"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-700 mb-1">To Date</label>
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-900"
              />
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="h-[38px] px-6 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>

      {searched && (
        <div className="bg-gray-100 mt-4 p-2 rounded-md">
          {deviceCount > 0 ? (
            <>
              <span className="font-bold text-blue-700">Device Count :</span>
              <span> {deviceCount}</span>
            </>
          ) : (
            <span className="text-gray-600">No Data Found</span>
          )}
        </div>
      )}
    </>
  );
};
