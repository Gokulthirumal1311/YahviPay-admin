import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";




export default function AgentTable({ filteredAgent }) {

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

    const handleStoreAgentIdInLocalStorage = (agentId) => {
        localStorage.setItem('agentId', JSON.stringify({ agentId: agentId }))
    }

    const handleStoreLeadIdInLocalStorage = (leadId) => {
        localStorage.setItem('leadId', JSON.stringify({ leadId: leadId }))
    }

    return (
        <div className="flex flex-col">
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
                                    className="px-4 py-3.5 text-sm font-medium text-center rtl:text-right text-gray-700"
                                >
                                    <span>Type</span>
                                </th>
                                <th
                                    scope="col"
                                    className="px-4 py-3.5 text-sm font-medium text-center rtl:text-right text-gray-700"
                                >
                                    <span>Agent Name</span>
                                </th>
                                <th
                                    scope="col"
                                    className="px-4 py-3.5 text-sm font-medium text-center rtl:text-right text-gray-700"
                                >
                                    <span>Phone Number</span>
                                </th>
                                <th
                                    scope="col"
                                    className="px-4 py-3.5 text-sm font-medium text-center rtl:text-right text-gray-700"
                                >
                                    <span>Assigned Lead</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredAgent.map((agent) => (
                                <tr key={agent.agentID} className="">
                                    <td className="px-4 py-4 text-md font-semibold text-blue-700 whitespace-nowrap text-center tracking-wider">
                                        <span className='text-blue-600 hover:text-blue-700 hover:underline transition-all duration-200 space-x-1 group'>
                                            <Link className="inline-flex items-center justify-center" to={'/AgentsDetails'} onClick={() => handleStoreAgentIdInLocalStorage(agent.agentID)}>
                                                {agent.agentID}
                                                <ExternalLink className="ml-1 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </Link>
                                        </span>
                                    </td>
                                    <td className="px-4 py-4 text-sm font-semibold text-gray-700 whitespace-nowrap text-center">
                                        <div className={`inline-flex items-center px-3 py-1 rounded-md gap-x-2 ${color(agent.agentType)}`}>
                                            <span className={`w-2 h-2 rounded-full ${dotColor(agent.agentType)}`}></span>
                                            <h2 className="text-md font-normal">
                                                {agent.agentType.charAt(0).toUpperCase() + agent.agentType.slice(1)}
                                            </h2>
                                        </div>
                                    </td>
                                    <td className="px-4 py-4 text-md text-gray-950 whitespace-nowrap tracking-wider font-semibold text-center">{agent.agentName}</td>
                                    <td className="px-4 py-4 text-md text-gray-950 whitespace-nowrap tracking-wider font-semibold text-center">{agent.agentPhone}</td>
                                    <td className="px-4 py-4 text-md text-blue-700 whitespace-nowrap tracking-wider font-semibold text-center">
                                        <span className='text-blue-600 hover:text-blue-700 hover:underline transition-all duration-200 space-x-1 group'>
                                            <Link className="inline-flex items-center justify-center" to={'/LeadsDetails'} onClick={() => handleStoreLeadIdInLocalStorage(agent.assignedLead)}>
                                                {agent.assignedLead}
                                                <ExternalLink className="ml-1 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </Link>
                                        </span>
                                    </td>
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
    );
}


