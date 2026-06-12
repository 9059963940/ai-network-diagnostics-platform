"use client";

import { useEffect } from "react";

export default function AutoRefresh() {
  useEffect(() => {
    const interval = setInterval(() => {
      window.location.reload();
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
      <h3 className="text-lg font-semibold text-cyan-400">
        Auto Refresh
      </h3>

      <p className="text-slate-400 mt-2">
        Dashboard refreshes every 15 seconds.
      </p>

      <div className="mt-3 text-green-400">
        ● Active
      </div>
    </div>
  );
}