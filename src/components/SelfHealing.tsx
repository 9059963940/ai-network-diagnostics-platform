"use client";

import { useState } from "react";

export default function SelfHealing() {
  const [message, setMessage] = useState("");

  const runRecovery = () => {
    setMessage("Running recovery...");

    setTimeout(() => {
      setMessage("Recovery completed successfully.");
    }, 2000);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">

      <h2 className="text-xl font-bold text-cyan-400 mb-4">
        Self-Healing Actions
      </h2>

      <p className="text-slate-400 mb-4">
        Automatically recover network services.
      </p>

      <button
        onClick={runRecovery}
        className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg font-semibold"
      >
        Execute Recovery
      </button>

      {message && (
        <div className="mt-4 text-green-400">
          {message}
        </div>
      )}

    </div>
  );
}