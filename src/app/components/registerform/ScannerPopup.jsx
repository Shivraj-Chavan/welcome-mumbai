"use client";

import React, { useEffect } from "react";
import { X, CheckCircle2 } from "lucide-react";

export default function ScannerPopup({ open, plan, onSuccess, onCancel }) {
  if (!open) return null;

  const planImages = {
    starter: "/scanner/mazhimumbai_1000.png",
    pro: "/scanner/mazhimumbai_2000.png",
    elite: "/scanner/mazhimumbai_5000.png",
  };

  const handleSuccess = () => {
    onSuccess?.();
  };

  const handleCancel = () => {
    onCancel?.();
  };

  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && handleCancel();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-center items-center px-4 py-6">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 text-center animate-fadeIn">
        <button
          onClick={handleCancel}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
        >
          <X size={22} />
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Scan & Pay for {plan.toUpperCase()} Plan
        </h2>

        <div className="border rounded-lg p-4 mb-6 shadow-sm bg-gray-50">
          <img
            src={planImages[plan]}
            alt={`${plan} plan scanner`}
            className="w-48 h-48 mx-auto rounded-lg border"
          />
          <p className="text-sm mt-3 text-gray-700">
            UPI ID: <span className="font-semibold"></span>
          </p>
        </div>

        

        <button
          onClick={handleCancel}
          className="w-full py-2 text-sm text-gray-500 hover:text-gray-700 transition mt-2"
        >
          Cancel / Go Back
        </button>
        <button
          onClick={handleSuccess}
          className="w-full bg-gradient-to-r from-green-600 to-emerald-700 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-all flex items-center justify-center gap-2"
        >
          <CheckCircle2 size={18} />
          Done
        </button>
      </div>
    </div>
  );
}
