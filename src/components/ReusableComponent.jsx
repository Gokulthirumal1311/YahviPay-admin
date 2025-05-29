import React from "react";

export default function ReusableComponent({ title, columns, data, actions }) {
  return (
    <div className="bg-white">
      <section className="container px-4 mx-auto">
        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="flex items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
            </div>
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3.5 text-sm font-semibold text-left text-gray-800">
                        S.No
                      </th>
                      {columns.map((col) => (
                        <th
                          key={col}
                          className="px-4 py-3.5 text-sm font-semibold text-left text-gray-800"
                        >
                          {col.charAt(0).toUpperCase() + col.slice(1)}
                        </th>
                      ))}
                      {actions.length > 0 && (
                        <th className="px-4 py-3.5 text-sm font-semibold text-left text-gray-800">
                          Actions
                        </th>
                      )}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {data.length > 0 ? (
                      data.map((item, index) => (
                        <tr key={index}>
                          <td className="px-4 py-4 text-sm text-gray-700">
                            {index + 1}
                          </td>
                          {columns.map((col) => (
                            <td
                              key={col}
                              className="px-4 py-4 text-sm text-gray-700"
                            >
                              {col === "status" ? (
                                <span
                                  className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${
                                    item[col] === "WORKING"
                                      ? "text-green-800 bg-green-100"
                                      : "text-red-800 bg-red-100"
                                  }`}
                                >
                                  {item[col]}
                                </span>
                              ) : (
                                item[col]
                              )}
                            </td>
                          ))}
                          {actions.length > 0 && (
                            <td className="px-4 py-4 text-sm">
                              <div className="flex space-x-2">
                                {actions.map((action) => (
                                  <button
                                    key={action}
                                    className="px-3 py-1 text-sm text-white bg-red-600 rounded hover:bg-red-700"
                                  >
                                    {action}
                                  </button>
                                ))}
                              </div>
                            </td>
                          )}
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan={
                            columns.length + (actions.length > 0 ? 2 : 1)
                          }
                          className="px-4 py-4 text-center text-gray-500 bg-gray-50"
                        >
                          No Data
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
    </div>
  );
}
