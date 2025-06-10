import React, { useState } from "react";
import { Link } from "react-router-dom";

const stores = [
  {
    deviceId: "7299700576",
    CreatedDate: "18/04/2025, 12:51:40",
    AgentId: "MKTG111006",
    Status: "DAMAGED",
    notes: [
      {
        message: "Swapped Device",
        createdDate: "18/04/2025, 12:51:40",
        agentId: "MKTG111006",
        partId: "NIL",
        partType: "NIL",
      },
    ],
  },
  {
    deviceId: "7299700576",
    CreatedDate: "18/04/2025, 12:51:40",
    AgentId: "MKTG111006",
    Status: "DAMAGED",
    notes: [
      {
        message: "Swapped Device",
        createdDate: "18/04/2025, 12:51:40",
        agentId: "MKTG111006",
        partId: "NIL",
        partType: "NIL",
      },
    ],
  },
];

export const GetAllServices = () => {
  const [openNotes, setOpenNotes] = useState(null);

  const toggleNotes = (index) => {
    setOpenNotes(openNotes === index ? null : index);
  };

  return (
    <div className="overflow-y-auto p-4">
      {stores.map((store, index) => (
        <div
          key={index}
          className="w-full bg-gradient-to-br from-white to-indigo-50 border border-gray-200 rounded-2xl p-8 shadow-lg mb-8"
        >
          <div className="mb-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-blue-600">Device Details</h2>
            <button
              onClick={() => toggleNotes(index)}
              className="text-blue-600 text-sm font-medium"
            >
              {openNotes === index ? "Hide Notes ▲" : "Show Notes ▼"}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
            <div>
              <span className="text-sm font-medium text-gray-600 block">
                Device ID
              </span>
              <Link
                className="text-blue-600 font-semibold hover:underline"
                to={`${store.deviceId}`}
              >
                {store.deviceId}
              </Link>
            </div>

            <div>
              <span className="text-sm font-medium text-gray-600 block">
                Created Date
              </span>
              <span className="text-black">{store.CreatedDate}</span>
            </div>

            <div>
              <span className="text-sm font-medium text-gray-600 block">
                Agent ID
              </span>
              <span className="text-black">{store.AgentId}</span>
            </div>

            <div>
              <span className="text-sm font-medium text-gray-600 block">
                Status
              </span>
              <span className="text-black">{store.Status}</span>
            </div>
          </div>

  
          <div
            className={`overflow-hidden transition-all duration-500 ${
              openNotes === index ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="border border-gray-300 rounded-md overflow-hidden mt-4">
              <div className="bg-blue-50 px-4 py-3 text-center font-semibold text-blue-900">
                Notes
              </div>

              <div className="grid grid-cols-5 gap-4 text-sm font-semibold text-center border-b border-gray-200 py-2 bg-gray-50">
                <div>Message</div>
                <div>Created Date</div>
                <div>Agent ID</div>
                <div>Part ID</div>
                <div>Part Type</div>
              </div>

              {store.notes.map((note, noteIndex) => (
                <div
                  key={noteIndex}
                  className="grid grid-cols-5 gap-4 text-center border-b border-gray-100 py-2"
                >
                  <div>{note.message}</div>
                  <div>{note.createdDate}</div>
                  <div>{note.agentId}</div>
                  <div>{note.partId}</div>
                  <div>{note.partType}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
