import React, { useState } from "react";
// import { AgentandAreaCards } from "./AgentandAreaCards";


const initialAgents = [
    {
        agentID: "MKTG111008",
        agentName: "User008",
        agentPhone: "9876543210",
        assignedArea: "Pallavaram",
    },
    {
        agentID: "MKTG111009",
        agentName: "User009",
        agentPhone: "9876543211",
        assignedArea: "Velachery",
    },
];

export const AgentsAreas = ({}) => {

  const [agents, setAgents] = useState(initialAgents);
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [areaName, setAreaName] = useState("");

  const handleCloseModal = () => {

    setSelectedAgent(null);
    setAreaName("");
  };


  const handleSaveArea = (newAreaName) => {
    if (!selectedAgent) return;
    setSelectedAgent(null);
    setAreaName("");
  };


  return (
    <div className="">
      <section className="container">
        <div className="flex flex-col mt-6">
          <div className="overflow-x-auto ">
            <div className="inline-block min-w-full align-middle ">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3.5 text-sm font-normal text-center text-gray-800 tracking-wider">Agent ID</th>
                      <th className="px-4 py-3.5 text-sm font-normal text-center text-gray-800 tracking-wider">Assigned Agent</th>
                      <th className="px-4 py-3.5 text-sm font-normal text-center text-gray-800 tracking-wider">Phone Number</th>
                      <th className="px-4 py-3.5 text-sm font-normal text-center text-gray-800 tracking-wider">Assigned Area</th>
                      <th className="px-4 py-3.5 text-sm font-normal text-center text-gray-800 tracking-wider">Edit Area</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {agents.map((agent) => (
                      <tr key={agent.agentID}>
                        <td className="px-4 py-4 text-md text-gray-700 font-semibold tracking-widest text-center">{agent.agentID}</td>
                        <td className="px-4 py-4 text-md text-gray-700 font-semibold tracking-widest text-center">{agent.agentName}</td>
                        <td className="px-4 py-4 text-md text-gray-700 font-semibold tracking-widest text-center">{agent.agentPhone}</td>
                        <td className="px-4 py-4 text-md text-gray-700 font-semibold tracking-widest text-center">{agent.assignedArea || "-"}</td>
                        <td className="px-4 py-4 text-md text-gray-700 font-semibold text-center">
                          <button
                            onClick={() => openAddModal(agent)}
                            className="transition-all bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded text-sm"
                          >
                            Add / Update
                          </button>
                          <button
                            onClick={() => openRemoveModal(agent)}
                            disabled={!agent.assignedArea}
                            className={`ml-3 px-2 py-1 rounded text-sm text-white ${
                              agent.assignedArea ? "transition-all bg-red-600 hover:bg-red-700" : "bg-gray-300 cursor-not-allowed"
                            }`}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    ))}
                    {agents.length === 0 && (
                      <tr>
                        <td colSpan="5" className="px-4 py-4 text-center text-gray-500">
                          No agents found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* {showModal && (
        <AgentandAreaCards
          onClose={handleCloseModal}
          onSave={handleSaveArea}
          mode={modalMode}
          areaName={areaName}
          setAreaName={setAreaName}
        />
      )} */}
    </div>
  );
};
