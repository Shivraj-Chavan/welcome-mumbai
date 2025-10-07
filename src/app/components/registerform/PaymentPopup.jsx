"use client";

import React, { useEffect } from "react";
import { X, CheckCircle2, Scan, Smartphone, CreditCard, MessageCircle, Copy, Check } from "lucide-react";
import { FaGooglePay } from "react-icons/fa";     // Google Pay
import { SiPhonepe } from "react-icons/si";       // PhonePe
import { SiPaytm } from "react-icons/si";         // Paytm
import { MdAccountBalanceWallet } from "react-icons/md"; // Generic UPI
// ============= CONFIGURATION VARIABLES =============
const PAYMENT_CONFIG = {
    upiId: "sanstithitradingllp0355@aubank",
    businessName: "MazhiMumbai",
    whatsappNumber: "+919619363738",
    planImages: {
        Starter: "/scanner/mazhimumbai_1000.png",
        Pro: "/scanner/mazhimumbai_2000.png",
        Elite: "/scanner/mazhimumbai_5000.jpeg",
    }
};

const UPI_APPS = [
    { name: "Any UPI App", scheme: "upi", color: "bg-gradient-to-r from-blue-600 to-blue-700", icon: MdAccountBalanceWallet },
    { name: "Google Pay", scheme: "gpay", color: "bg-gradient-to-r from-green-600 to-green-700", icon: FaGooglePay },
    { name: "PhonePe", scheme: "phonepe", color: "bg-gradient-to-r from-purple-600 to-purple-700", icon: SiPhonepe },
    { name: "Paytm", scheme: "paytmmp", color: "bg-gradient-to-r from-blue-500 to-cyan-600", icon: SiPaytm },
];
// ===================================================

export default function PaymentPopup({ plan, onClose }) {
    const [copied, setCopied] = React.useState(false);

    if (!plan) return null;

    const sendWhatsAppMessage = (message) => {
        const encodedMsg = encodeURIComponent(message);
        window.open(`https://wa.me/${PAYMENT_CONFIG.whatsappNumber}?text=${encodedMsg}`, "_blank");
    };

    const handlePaymentSuccess = () => {
        sendWhatsAppMessage(
            `✅ Payment Completed Successfully!\n\n📦 Plan: *${plan.name}*\n💰 Amount: ₹${plan.price}\n\n🙏 Please confirm my registration and activate my account.\n\nThank you!`
        );
        onClose();
    };

    const handleUPIPayment = (scheme) => {
        const upiUrl = `${scheme}://upi/pay?pa=${PAYMENT_CONFIG.upiId}&pn=${PAYMENT_CONFIG.businessName}&tn=Payment%20for%20${plan.name}%20Plan&am=${plan.price}&cu=INR`;
        window.location.href = upiUrl;
    };

    const copyUPIId = () => {
        navigator.clipboard.writeText(PAYMENT_CONFIG.upiId);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    useEffect(() => {
        const handleEsc = (e) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    return (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-center items-center px-3 py-4 sm:px-2 sm:py-3">
            <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl max-w-md w-full max-h-[95vh] overflow-y-auto animate-fadeIn">
                {/* Header */}
                <div className="sticky top-0 bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-4 sm:px-3 sm:py-2 rounded-t-xl sm:rounded-t-2xl">
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white/80 hover:text-white transition"
                        aria-label="Close"
                    >
                        <X size={22} />
                    </button>

                    <div className="text-center">
                        <h2 className="text-xl sm:text-2xl font-bold mb-1">
                            {plan.name === "Free" ? "Activate Free Plan" : "Complete Payment"}
                        </h2>
                        <div className="flex items-center justify-center gap-2 mt-1">
                            <span className="text-3xl font-bold">₹{plan.price}</span>
                            <span className="text-sm opacity-90">/ year</span>
                        </div>
                        <p className="text-xs sm:text-sm opacity-90 mt-1">{plan.name} Plan</p>
                    </div>
                </div>

                <div className="p-2 sm:p-3">
                    {plan.name !== "Free" ? (
                        <>
                            {/* QR Code Section */}
                            <div className="bg-gradient-to-br from-gray-50 to-gray-100 border-2 border-gray-200 rounded-xl p-2  mb-2">
                                <div className="flex items-center justify-center gap-2 mb-3">
                                    <Scan className="text-orange-600" size={20} />
                                    <h3 className="text-base font-semibold text-gray-800">
                                        Scan QR Code
                                    </h3>
                                </div>

                                <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm border border-gray-200">
                                    <img
                                        src={PAYMENT_CONFIG.planImages[plan.name]}
                                        alt={`${plan.name} plan QR code`}
                                        className="w-44 h-44 sm:w-52 sm:h-52 mx-auto rounded-lg"
                                    />
                                </div>

                                <div className="mt-4 space-y-2">
                                    {/* <div className="flex items-center justify-between bg-white px-3 py-2 rounded-lg border border-gray-200">
                                        <div>
                                            <p className="text-xs text-gray-500">UPI ID</p>
                                            <p className="text-sm font-semibold text-gray-800">{PAYMENT_CONFIG.upiId}</p>
                                        </div>
                                        <button
                                            onClick={copyUPIId}
                                            className="p-2 hover:bg-gray-100 rounded-lg transition"
                                            aria-label="Copy UPI ID"
                                        >
                                            {copied ? (
                                                <Check size={18} className="text-green-600" />
                                            ) : (
                                                <Copy size={18} className="text-gray-600" />
                                            )}
                                        </button>
                                    </div> */}
                                    <p className="text-xs text-center text-gray-500">
                                        💡 Scan with any UPI app or use quick pay buttons below
                                    </p>
                                </div>
                            </div>

                            {/* UPI Payment Buttons */}
                            <div className="space-y-2 mb-2">
                                <p className="text-xs font-medium text-gray-600 text-center mb-2">
                                    ⚡ Quick Pay Options
                                </p>
                                <div className="flex justify-center gap-2 ">
                                    {UPI_APPS.map((app) => {
                                        const Icon = app.icon;
                                        return (
                                            <button
                                                key={app.scheme}
                                                onClick={() => handleUPIPayment(app.scheme)}
                                                className={`flex flex-col items-center justify-center p-1 ${app.color} text-white rounded-xl hover:opacity-90 active:scale-95 transition-all shadow-md w-24`}
                                            >
                                                <Icon size={32} />
                                                <span className="text-xs mt-1">{app.name}</span>
                                            </button>
                                        );
                                    })}
                                </div>

                            </div>

                            {/* Divider */}
                            <div className="relative my-5">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-300"></div>
                                </div>
                                <div className="relative flex justify-center text-xs">
                                    <span className="px-3 bg-white text-gray-500 font-medium">
                                        AFTER PAYMENT
                                    </span>
                                </div>
                            </div>

                            {/* WhatsApp Confirmation */}
                            <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
                                <div className="flex items-start gap-3 mb-3">
                                    <div className="bg-green-100 p-2 rounded-lg">
                                        <MessageCircle className="text-green-600" size={20} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="font-semibold text-gray-800 text-sm">Payment Confirmation</h4>
                                        <p className="text-xs text-gray-600 mt-1">
                                            After successful payment, click below to send confirmation via WhatsApp
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={handlePaymentSuccess}
                                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 active:scale-98 transition-all shadow-md flex items-center justify-center gap-2"
                                >
                                    <CheckCircle2 size={18} />
                                    Send Confirmation on WhatsApp
                                </button>
                            </div>

                            {/* Help Text */}
                            {/* <div className="text-center">
                                <p className="text-xs text-gray-500">
                                    💬 Need help? Contact us on WhatsApp
                                </p>
                            </div> */}
                        </>
                    ) : (
                        // Free Plan Section
                        <div className="text-center py-4">
                            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-5">
                                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle2 className="text-green-600" size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">
                                    🎉 Free Plan Selected!
                                </h3>
                                <p className="text-sm text-gray-600 mb-4">
                                    Start your journey with our free plan. No payment required!
                                </p>
                                <ul className="text-left text-xs text-gray-600 space-y-2 max-w-xs mx-auto">
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-500 mt-0.5">✓</span>
                                        <span>Basic visibility for your listing</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-500 mt-0.5">✓</span>
                                        <span>Access to essential features</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-green-500 mt-0.5">✓</span>
                                        <span>Quick setup and activation</span>
                                    </li>
                                </ul>
                            </div>

                            <button
                                onClick={() => sendWhatsAppMessage(
                                    `🎉 Free Plan Activation Request\n\n✅ I would like to activate the *Free Plan*.\n\nPlease confirm and set up my account.\n\nThank you!`
                                )}
                                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 active:scale-98 transition-all shadow-md flex items-center justify-center gap-2"
                            >
                                <MessageCircle size={18} />
                                Confirm Free Plan on WhatsApp
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}