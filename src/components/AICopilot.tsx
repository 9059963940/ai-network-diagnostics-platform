"use client";

import { useState } from "react";

export default function AICopilot() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const askAI = () => {
    const q = question.toLowerCase();

    if (q.includes("router")) {
      setResponse(
        "Router-01 latency is elevated due to increased CPU utilization."
      );
    }
    else if (q.includes("latency")) {
      setResponse(
        "Network latency is within acceptable range. Average latency: 31 ms."
      );
    }
    else if (q.includes("alert")) {
      setResponse(
        "Three active alerts detected. One requires immediate attention."
      );
    }
    else {
      setResponse(
        "Network health is stable. No critical issues detected."
      );
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">

      <h2 className="text-xl font-bold text-cyan-400 mb-4">
        AI Network Copilot
      </h2>

      <input
        type="text"
        placeholder="Ask about network status..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 mb-3"
      />

      <button
        onClick={askAI}
        className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg font-semibold"
      >
        Ask AI
      </button>

      {response && (
        <div className="mt-4 bg-slate-800 p-4 rounded-lg text-slate-300">
          {response}
        </div>
      )}

    </div>
  );
}