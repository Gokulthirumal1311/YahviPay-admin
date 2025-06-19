import React, { useEffect, useState } from "react";
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react";

let toastTrigger = null;

export const triggerToast = (type, message) => {
    if (toastTrigger) {
        toastTrigger({ type, message });
    }
};

export const ToastMessage = () => {
    const [toast, setToast] = useState(null);

    useEffect(() => {
        toastTrigger = setToast;
        return () => {
            toastTrigger = null;
        };
    }, []);

    useEffect(() => {
        if (toast) {
            const timer = setTimeout(() => {
                setToast(null);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [toast]);

    if (!toast) return null;

    const typeStyles = {
        success: "bg-green-600",
        error: "bg-red-600",
        warning: "bg-yellow-500 text-black",
    };

    const Icon = {
        success: CheckCircle,
        error: XCircle,
        warning: AlertTriangle,
    }[toast.type];

    return (
        <div
            className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex w-full max-w-md overflow-hidden ${typeStyles[toast.type]} rounded-lg animate-slideDown`}
        >
            <div className="flex items-center justify-center w-12">
                <Icon className="w-6 h-6 text-white" />
            </div>

            <div className="px-4 py-2 -mx-3">
                <div className="mx-3">
                    <span className="font-semibold text-white capitalize text-lg tracking-wider">{toast.type}</span>
                    <p className="text-white font-medium text-md tracking-wider">{toast.message}</p>
                </div>
            </div>
        </div>
    );
};