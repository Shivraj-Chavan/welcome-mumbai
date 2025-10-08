"use client";

import React, { useState } from "react";
import { CreditCardIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ScannerPopup from "./ScannerPopup";

export default function PlanPopup({ open, onClose }) {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [scannerOpen, setScannerOpen] = useState(false);

  if (!open) return null;

  const sendWhatsAppMessage = (message) => {
    const phone = "9619363738"; // replace with your WhatsApp number
    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);

    if (plan === "free") {
      toast.success("🎉 Free Plan Selected!");
      sendWhatsAppMessage("User selected Free Plan ✅");
      onClose();
      return;
    }

    // Open scanner for paid plans
    setScannerOpen(true);
  };
const handlePaymentSuccess = () => {
  sendWhatsAppMessage(
    `✅ Hello! I’ve successfully completed the payment for the *${selectedPlan.toUpperCase()}* plan. Please confirm my registration.`
  );
  setScannerOpen(false);
  onClose();
};

const handlePaymentCancel = () => {
  sendWhatsAppMessage(
    `⚠️ Hi, I selected the *${selectedPlan.toUpperCase()}* plan but could not complete the payment. Please guide me further.`
  );
  setScannerOpen(false);
  onClose();
};

  return (
    <>
      <div className="fixed inset-0 flex justify-center items-center bg-black/40 backdrop-blur-md z-50">
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full text-center animate-fadeIn">
          <h2 className="text-xl font-bold mb-4 flex items-center justify-center gap-2">
            <CreditCardIcon className="w-6 h-6 text-orange-500" />
            Choose Your Plan
          </h2>

          <p className="mb-6 text-center leading-relaxed font-bold">
            Pre-Launch Mega Deal <br />
            <span className="font-semibold text-green-600">Pro Plan</span>
          </p>

          <div className="space-y-3">
            {/* <button
              onClick={() => handleSelectPlan("free")}
              className="w-full py-2 px-4 rounded-lg font-semibold border border-orange-500 bg-orange-50 hover:bg-orange-100 transition"
            >
              🎉 Free Plan
            </button>

            <button
              onClick={() => handleSelectPlan("starter")}
              className="w-full py-2 px-4 rounded-lg font-semibold border border-blue-500 bg-blue-50 hover:bg-blue-100 transition"
            >
              💼 Starter Plan – ₹1000
            </button> */}

            <button
              onClick={() => handleSelectPlan("pro")}
              className="w-full py-2 px-4 rounded-lg font-semibold border border-purple-500 bg-purple-50 hover:bg-purple-100 transition"
            >
              💸 Pro Plan – ₹2000
            </button>

            <button
              onClick={() => handleSelectPlan("elite")}
              className="w-full py-2 px-4 rounded-lg font-semibold border border-green-500 bg-green-50 hover:bg-green-100 transition"
            >
              🚀 Elite Plan – ₹5000
            </button>
          </div>

          <button
            onClick={onClose}
            className="mt-6 text-sm text-gray-500 hover:text-gray-700"
          >
            Close
          </button>
        </div>
      </div>

      {/* Scanner Popup */}
      {scannerOpen && (
        <ScannerPopup
          open={scannerOpen}
          plan={selectedPlan}
          onSuccess={handlePaymentSuccess}
          onCancel={handlePaymentCancel}
        />
      )}
    </>
  );
}
