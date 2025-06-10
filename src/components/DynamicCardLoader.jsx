import React, { useState, useEffect } from "react";
import { SkeletonLoader } from "./SkeletonLoader";
import Loading from "./LoadingScreen";

export const DynamicCardLoader = ({ data, tableHeaderTitle, tableBodyData }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg w-full">
      <div className="flex justify-between items-center mb-6 border-b-2 border-b-gray-300 pb-4">
        <div>
          <h2 className="text-2xl font-bold text-blue-600">
            {loading ? <SkeletonLoader /> : data.type}
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {loading ? (
          <>
            <SkeletonLoader />
            <SkeletonLoader/>
          </>
        ) : (
          Object.entries(data)
            .filter(([key]) => key !== "type")
            .map(([key, value]) => (
              <div key={key}>
                <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                  {key.replace(/([A-Z])/g, " $1")}
                </label>
                <div className="border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 text-gray-600 tracking-wider">
                  {value}
                </div>
              </div>
            ))
        )}
      </div>

      
      <div className="pt-8">
        <div className="border-b-2 border-b-gray-300 pb-4 flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-blue-600">
            {loading ? <SkeletonLoader/> : "Related Transactions"}
          </h2>
        </div>

        <section className="container">
          <div className="flex flex-col mt-6">
            <div className="overflow-x-auto ">
              <div className="inline-block min-w-full align-middle ">
                <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        {tableHeaderTitle.map((item, index) => (
                          <th key={index} className="px-4 py-3.5 text-sm font-normal text-center text-gray-800 tracking-wider">
                            {loading ? <SkeletonLoader /> : item}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {loading ? (
                        <tr>
                          <td colSpan={tableHeaderTitle.length} className="p-6 text-center">
                            <SkeletonLoader />
                          </td>
                        </tr>
                      ) : (
                        tableBodyData.map((row, i) => (
                          <tr key={i}>
                            {Object.values(row).map((value, idx) => (
                              <td key={idx} className="px-4 py-4 text-md font-semibold text-center text-gray-700 tracking-widest">
                                {value}
                              </td>
                            ))}
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
