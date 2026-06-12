"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString());
    };

    updateTime();

    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mb-8 flex justify-between items-center">
      <div>
        <h1 className="text-5xl font-bold text-cyan-400">
          AI Network Operations Center
        </h1>

        <p className="text-gray-400 mt-2">
          Private 5G Network Diagnostics Dashboard
        </p>
      </div>

      <div className="text-right">
        <p className="text-gray-400">
          Current Time
        </p>

        <p className="text-lg font-semibold text-green-400">
          {time}
        </p>
      </div>
    </div>
  );
}