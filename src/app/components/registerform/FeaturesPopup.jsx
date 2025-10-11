"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import PaymentPopup from "./PaymentPopup";

export default function FeaturesPopup({ open, onClose }) {
  const [selectedPlan, setSelectedPlan] = useState(null);

  if (!open) return null;

  const plans = [
  // {
  //   name: "Free",
  //   price: 0,
  //   features: [
  //     "1x Visibility",
  //     "2 Photos",
  //     "No Videos",
  //     "No Mm Verified Seal",
  //     "Premium Customer Support",
  //     "No Ad Discount",
  //     "Smart Lead System",
  //     "Map Locations",
  //     "No Social Media Links",
  //     "No Promotion on MM Channels"
  //   ],
  //   color: "border-gray-300",
  // },
  // {
  //   name: "Starter",
  //   price: 1000,
  //   features: [
  //     "1x Visibility",
  //     "5 Photos",
  //     "No Videos",
  //     "Mm Verified Seal",
  //     "Premium Customer Support",
  //     "No Ad Discount",
  //     "Smart Lead System",
  //     "Map Locations",
  //     "No Social Media Links",
  //     "No Promotion on MM Channels"
  //   ],
  //   color: "border-blue-300",
  // },
  {
    name: "Pro Plan",
    url:"Pro",
    price: 2000,
    features: [
      "3x Visibility",
      "10 Photos",
      "1 Video",
      "MM Verified Seal",
      "Premium Customer Support",
      "5% Ad Discount",
      "Smart Lead System",
      "Map Locations",
    ],
    color: "border-green-400",
  },
  {
    name: "Elite Plan",
    url:"Elite",
    price: 5000,
    features: [
      "Top Visibility (T&C Apply)",
      "20 Photos",
      "2 Videos",
      "MM Verified Seal",
      "Premium Customer Support",
      "10% Ad Discount",
      "Smart Lead System",
      "Map Locations",
      "Social Media Links",
      "Promotion on MM Channels"
    ],
    color: "border-yellow-400",
  },
];

  return (
    <>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-3 sm:p-4">
        <div className="bg-white w-full max-w-6xl rounded-xl shadow-2xl relative max-h-[95vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 rounded-t-xl z-10">
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
            >
              <X size={22} />
            </button>
            <h2 className="text-2xl font-semibold text-center text-orange-700">
              Choose Your Plan
            </h2>
          </div>

          {/* Plans Grid */}
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`border-2 ${plan.color} rounded-lg p-4 flex flex-col justify-between shadow-md hover:shadow-lg transition`}
              >
                <div>
                  <h3 className="text-lg font-bold text-center text-gray-800 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-center text-xl font-semibold text-green-700 mb-3">
                    ₹{plan.price} / year
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm mb-3">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-green-500">✅</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button
                  onClick={() => setSelectedPlan(plan)}
                  className="mt-3 bg-gradient-to-r from-orange-500 to-red-600 text-white py-2 rounded-lg font-semibold hover:scale-105 transition-transform shadow"
                >
                  Choose & Pay
                </button>
              </div>
            ))}
          </div>
             <div className="text-center my-2 text-gray-700 text-sm">
          <p>
            💥 <strong>Pre-launch offer:</strong> For Elite plan — Pay for 1 year,
            get 2 years of service!
          </p>
        </div>
        </div>
      </div>

      {/* Payment Popup */}
      {selectedPlan && (
        <PaymentPopup
          plan={selectedPlan}
          onClose={() => setSelectedPlan(null)}
        />
      )}
    </>
  );
}
