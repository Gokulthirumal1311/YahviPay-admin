import React from "react";
import ReusableComponent from "./ReusableComponent";
import { RefreshCw } from "lucide-react";
const devices=[
  {
    DownloadID: "D1748519507715319813",
    CreatedDate: "29/05/2025, 17:21:47",
    StartDate: "28/05/2025, 05:30:00",
    EndDate: "29/05/2025, 05:29:59",
    Status:'IN_PROGRESS',
    Link: <RefreshCw className="animate-spin text-yellow-400 w-5 h-5" />,
  },
  {
    DownloadID: "D1748519507715319814",
    CreatedDate: "25/05/2025, 17:21:47",
    StartDate: "24/05/2025, 05:30:00",
    EndDate: "25/05/2025, 05:29:59",
    Status:'IN_PROGRESS',
    Link: <RefreshCw className="animate-spin text-yellow-400 w-5 h-5" />,
  },
];
export default function DownloadReport() {
  const columns = ["DownloadID", "CreatedDate", "StartDate", "EndDate","Status","Link"];
  const actions = [];

  return (
    <ReusableComponent
      title="Download Report"
      columns={columns}
      data={devices}
      actions={actions}
    />
  );
}
