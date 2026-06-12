"use client";

import { useEffect, useCallback } from "react";

export default function DashboardPage() {
  const fetchDevices = useCallback(async () => {
    try {
      const response = await fetch("/api/devices");

      if (!response.ok) {
        throw new Error("Failed to fetch devices");
      }

      const data = await response.json();

      console.log("Network Devices:", data);
    } catch (error) {
      console.error("Error fetching devices:", error);
    }
  }, []);

  useEffect(() => {
    fetchDevices();

    const interval = setInterval(fetchDevices, 3000);

    return () => clearInterval(interval);
  }, [fetchDevices]);

  return (
    <div>
      Dashboard
    </div>
  );
}