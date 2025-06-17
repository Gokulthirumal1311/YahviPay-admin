import React, { useState, useEffect } from "react";
const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const J_D = () => {
  const [paymentData, setPaymentData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentYear, setCurrentYear] = useState(2025);
  const [currentMonth, setCurrentMonth] = useState(6);
  useEffect(() => {
    fetch("http://localhost:5000/payments")
      .then((res) => res.json())
      .then((data) => setPaymentData(data))
      .catch((err) => console.error("Error fetching payment data", err));
  }, []);
  console.log(paymentData);
  const getDaysInMonth = (year, month) =>
    new Date(year, month, 0).getDate();
  const daysInMonth = Array.from(
    { length: getDaysInMonth(currentYear, currentMonth) },
    (_, i) => i + 1
  );
  const getStatusColor = (day) => {
    const payment = paymentData.find(
      (item) => item.y === currentYear && item.m === currentMonth && item.d === day
    );
    if (!payment) return "bg-gray-300";
    switch (payment.v.s) {
      case "0":
        return "bg-red-500";
      case "1":
        return "bg-emerald-400";
      case "2":
        return "bg-green-500";
      case "3":
        return "bg-sky-400";
      default:
        return "bg-gray-300";
    }
  };
  const handleMonthChange = (e) => setCurrentMonth(parseInt(e.target.value));
  const handleYearChange = (e) => setCurrentYear(parseInt(e.target.value));
  return (
    <div className="p-4 max-w-sm mx-auto bg-white rounded-xl shadow">
      <div className="flex justify-center items-center gap-2 mb-4">
        <select
          value={currentMonth}
          onChange={handleMonthChange}
          className="border rounded p-1 text-sm"
        >
          {monthNames.map((name, index) => (
            <option key={index} value={index + 1}>
              {name}
            </option>
          ))}
        </select>
        <input
          type="number"
          value={currentYear}
          onChange={handleYearChange}
          className="border rounded p-1 w-20 text-sm"
        />
      </div>
      <div className="grid grid-cols-7 gap-2 text-center">
        {daysInMonth.map((day) => (
          <button
            key={day}
            onClick={() => setSelectedDate(day)}
            className={`h-12 w-12 flex items-center justify-center rounded-full relative ${
              selectedDate === day ? "ring-2 ring-blue-500" : ""
            }`}
          >
            <span>{day}</span>
            <span
              className={`absolute bottom-1 right-1 h-3 w-3 rounded-full ${getStatusColor(
                day
              )}`}
            ></span>
          </button>
        ))}
      </div>
      <div className="mt-6 border-t pt-4 space-y-2 text-sm">
        <div className="flex items-center">
          <span className="h-3 w-3 rounded-full bg-red-500 mr-2"></span> Unpaid
        </div>
        <div className="flex items-center">
          <span className="h-3 w-3 rounded-full bg-green-500 mr-2"></span> Paid
        </div>
        <div className="flex items-center">
          <span className="h-3 w-3 rounded-full bg-emerald-400 mr-2"></span> Extra Payment
        </div>
        <div className="flex items-center">
          <span className="h-3 w-3 rounded-full bg-sky-400 mr-2"></span> Holiday
        </div>
      </div>
    </div>
  );
};
export default J_D;
