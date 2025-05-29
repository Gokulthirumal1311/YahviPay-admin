import React, { useState } from "react";
import { AgentandAreaCards } from "./AgentandAreaCards";
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
export const AgentsAreas = () => {
  const [agents, setAgents] = useState(initialAgents);
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [areaName, setAreaName] = useState("");

  const openAddModal = (agent) => {
    setSelectedAgent(agent);
    setAreaName("");
    setModalMode("add");
    setShowModal(true);
  };

  const openRemoveModal = (agent) => {
    setSelectedAgent(agent);
    setAreaName(agent.assignedArea || "");
    setModalMode("remove");
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedAgent(null);
    setAreaName("");
  };

  const handleSaveArea = (newAreaName) => {
    if (!selectedAgent) return;

    setShowModal(false);
    setSelectedAgent(null);
    setAreaName("");
  };

  return (
    <div className="bg-white">
      <section className="container px-4 mx-auto">
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-800">
                        Agent ID
                      </th>
                      <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-800">
                        Assigned Agent
                      </th>
                      <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-800">
                        Phone Number
                      </th>
                      <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-800">
                        Assigned Area
                      </th>
                      <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-800">
                        Edit
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {agents.map((agent) => (
                      <tr key={agent.agentID}>
                        <td className="px-4 py-4 text-sm text-gray-700">
                          {agent.agentID}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">
                          {agent.agentName}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">
                          {agent.agentPhone}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">
                          {agent.assignedArea || "-"}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">
                          <div className="flex gap-3">
                            <div className="flex gap-3">
                           
                              <button
                                onClick={() => openAddModal(agent)}
                                className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
                              >
                                ➕ Add
                              </button>

                           
                              <button
                                onClick={() => openRemoveModal(agent)}
                                disabled={!agent.assignedArea}
                                className={`font-semibold px-5 py-2 rounded-full shadow-md transition-all duration-300 ease-in-out transform ${
                                  agent.assignedArea
                                    ? "bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white hover:shadow-lg hover:scale-105"
                                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                }`}
                              >
                                🗑️ Remove
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {agents.length === 0 && (
                      <tr>
                        <td
                          colSpan="5"
                          className="px-4 py-4 text-center text-gray-500"
                        >
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

      {showModal && (
        <AgentandAreaCards
          onClose={handleCloseModal}
          onSave={handleSaveArea}
          mode={modalMode}
          areaName={areaName}
          setAreaName={setAreaName}
        />
      )}
    </div>
  );
};
