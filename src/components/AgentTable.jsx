import React, { useState } from "react";

const agents = [
    {
        agentID: "MKTG111006",
        agentName: "User006",
        agentType: "marketing",
        assignedLead: "MKTG111005",
        agentPhone: "7299700576",
    },
    {
        agentID: "MKTG111004",
        agentName: "Rajesh",
        agentType: "marketing",
        assignedLead: "MKTG111005",
        agentPhone: "8925046655",
    },
    {
        agentID: "MKTG111008",
        agentName: "User008",
        agentType: "marketing",
        assignedLead: "MKTG111005",
        agentPhone: "1234000006",
    },
    {
        agentID: "MKTG111013",
        agentName: "User013",
        agentType: "marketing",
        assignedLead: "MKTG111005",
        agentPhone: "1234567891",
    },
    {
        agentID: "MKTG111012",
        agentName: "User012",
        agentType: "loan",
        assignedLead: "MKTG111005",
        agentPhone: "8667223194",
    },
    {
        agentID: "MKTG111010",
        agentName: "User010",
        agentType: "marketing",
        assignedLead: "MKTG111005",
        agentPhone: "1234567890",
    },
];

export default function AgentTable() {

    const [selectedType, setSelectedType] = useState("");


    const filteredAgent = selectedType ? agents.filter((agent) => agent.agentType === selectedType) : agents;

    function color(type) {
        switch (type) {
            case "marketing":
                return "bg-blue-200 text-blue-500 bg-blue-100/60";
            case "loan":
                return "bg-yellow-200 text-yellow-500 bg-yellow-100/60";
            case "support":
                return "bg-green-200 text-green-500 bg-green-100/60";
            default:
                return "bg-gray-200 text-gray-500 bg-gray-100/60";
        }
    }

    function dotColor(type) {
        switch (type) {
            case "marketing":
                return "bg-blue-500 bg-blue-100/60";
            case "loan":
                return "bg-yellow-500 bg-yellow-100/60";
            case "support":
                return "bg-green-500 bg-green-100/60";
            default:
                return "bg-gray-500 bg-gray-100/60";
        }
    }

    return (
        <div className="">
            <section className="container">
                <div className="flex flex-col">
                    <div className="">
                        <div className="flex justify-between items-center mb-4">
                            <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
                                Add Agents
                            </button>

                            <select
                                value={selectedType}
                                onChange={(e) => setSelectedType(e.target.value)}
                                className="px-3 py-2 border border-gray-300 rounded-md"
                            >
                                <option value="">All Types</option>
                                <option value="marketing">Marketing</option>
                                <option value="loan">Loan</option>
                                <option value="support">Support</option>
                            </select>
                        </div>
                        <div className="inline-block min-w-full py-2 align-middle">
                            <div className="overflow-hidden border border-gray-200 dark:border-gray-400 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-400">
                                    <thead className="bg-gray-50 ">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-medium text-center rtl:text-right text-gray-700"
                                            >
                                                <span>Agent ID</span>

                                            </th>
                                            <th
                                                scope="col"
                                                className="px-20 py-3.5 text-sm font-medium text-center rtl:text-right text-gray-700"
                                            >
                                                <span>Type</span>
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-700"
                                            >
                                                <span>Agent Name</span>
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-700"
                                            >
                                                <span>Phone Number</span>                                                
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-sm font-medium text-left rtl:text-right text-gray-700"
                                            >
                                                <span>Assigned Lead</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        { filteredAgent.map((agent) => (
                                            <tr key={agent.agentID} className="">
                                                <td className="px-4 py-4 text-md font-semibold text-gray-950 whitespace-nowrap text-center tracking-wider">{agent.agentID}</td>
                                                <td className="px-12 py-4 text-sm font-semibold text-gray-700 whitespace-nowrap text-center">
                                                    <div className={`inline-flex items-center px-3 py-1 rounded-md gap-x-2 ${color(agent.agentType)}`}>
                                                        <span className={`w-2 h-2 rounded-full ${dotColor(agent.agentType)}`}></span>
                                                        <h2 className="text-md font-normal">
                                                            {agent.agentType.charAt(0).toUpperCase() + agent.agentType.slice(1)}
                                                        </h2>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-4 text-md text-gray-950 whitespace-nowrap tracking-wider font-semibold">{agent.agentName}</td>
                                                <td className="px-4 py-4 text-md text-gray-950 whitespace-nowrap tracking-wider font-semibold">{agent.agentPhone}</td>
                                                <td className="px-4 py-4 text-md text-gray-950 whitespace-nowrap tracking-wider font-semibold">{agent.assignedLead}</td>
                                            </tr>
                                        ))}
                                        {filteredAgent.length === 0 && (
                                            <tr>
                                                <td colSpan="5" className="px-4 py-4 text-center text-gray-500">No agents found</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
