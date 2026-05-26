"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function PaymentPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const projectId = searchParams.get("projectId");

  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    try {
      // 🔥 SIMULATED PAYMENT (replace with Razorpay later)
      const fakePaymentId = "pay_" + Date.now();

      const { error } = await supabase
        .from("projects")
        .update({
          paid: true,
          payment_id: fakePaymentId,
        })
        .eq("id", projectId);

      if (error) throw error;

      alert("Payment Successful!");

      router.push("/projects");
    } catch (err) {
      console.log(err);
      alert("Payment failed");
    }

    setLoading(false);
  };

  return (
    <div className="paymentPage">
      <h1>Complete Payment</h1>
      <p>Unlock your Arc3D project download</p>

      <button onClick={handlePayment} disabled={loading}>
        {loading ? "Processing..." : "Pay & Unlock Download"}
      </button>

      <style jsx>{`
        .paymentPage {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 20px;
        }

        button {
          padding: 14px 28px;
          border-radius: 999px;
          border: none;
          background: black;
          color: white;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
