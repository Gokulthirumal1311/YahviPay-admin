import React, { useState } from "react";
import { SuccessPop } from "./SuccessPop";

export const ToastComponent=()=>{
  const [toast, setToast] = useState(null);
  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 3000); 
  };

  return (
    <div className="p-8 ">
      <button
        className="bg-green-500 text-white px-4 py-2 rounded mr-4"
        onClick={() => showToast("success", "Data saved successfully!")}
      >
        Success
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded mr-4"
        onClick={() => showToast("error", "Something went wrong!")}
      >
        Error
      </button>
      <button
        className="bg-yellow-500 text-black px-4 py-2 rounded"
        onClick={() => showToast("warning", "Check your inputs!")}
      >
        Warning
      </button>

      {toast && <SuccessPop type={toast.type} message={toast.message} />}
    </div>
  );
};
