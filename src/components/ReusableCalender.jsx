import React from "react";
const monthNames = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const ResusableCalender = ({ title, columns, data, actions, renderType = "table", year }) => {
  const monthStatusMap = {};
  if (renderType === "calendar") {
    data.forEach((item) => {
      if (item.year === year) {
        monthStatusMap[item.month] = item.v.status;
      }
    });
  }
  return (
    <div className="p-6 bg-white rounded-xl shadow mb-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">{title}</h2>
      {renderType === "table" && (
        <table className="w-full border-collapse">
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col} className="border p-2 text-left bg-gray-100">{col}</th>
              ))}
              {actions.length > 0 && <th className="border p-2 bg-gray-100">Actions</th>}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} className="border">
                {columns.map((col) => (
                  <td key={col} className="border p-2">
                    {col === "status" ? row.v.status : col === "amount" ? row.v.amount : row[col]}
                  </td>
                ))}
                {actions.length > 0 && (
                  <td className="border p-2">
                    {actions.map((action, i) => (
                      <button key={i} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">{action.label}</button>
                    ))}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}      
    </div>
  );
};
export default ResusableCalender;
