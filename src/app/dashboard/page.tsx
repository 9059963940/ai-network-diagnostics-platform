"use client";

import { useEffect, useState } from "react";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import KPICards from "@/components/KPICards";
import DeviceCard from "@/components/DeviceCard";
import AlertsPanel from "@/components/AlertsPanel";
import AIDiagnosis from "@/components/AIDiagnosis";
import LatencyChart from "@/components/LatencyChart";
import NetworkTopology from "@/components/NetworkTopology";
import AutoRefresh from "@/components/AutoRefresh";
import SelfHealing from "@/components/SelfHealing";
import AICopilot from "@/components/AICopilot";

export default function Dashboard() {
  const [devices, setDevices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // ✅ FIXED API FETCH LOGIC
  const fetchDevices = async () => {
    try {
      const res = await fetch("/api/devices");
      const data = await res.json();

      console.log("API RESPONSE:", data);
      console.log("DEVICES ARRAY:", data.data);

      setDevices(data.data ?? []);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching devices:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDevices();
  }, []);

  return (
    <div className="flex min-h-screen bg-slate-950 text-white">
      
      <Sidebar />

      <div className="flex-1 p-6">

        <Header />

        {/* KPI Cards */}
        <div className="bg-red-900 p-4 rounded-xl mb-4">
          <h2 className="font-bold">Debug Device Count</h2>
          <p>Total Devices: {devices.length}</p>
        </div>

        <KPICards devices={devices} />

        {/* Devices + Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">

          <div className="lg:col-span-2">

            <div className="bg-slate-900 rounded-xl p-4 border border-cyan-900">

              <h2 className="text-2xl font-bold text-cyan-400 mb-4">
                Network Devices
              </h2>

              {loading ? (

                <p>Loading devices...</p>

              ) : (

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                  {devices.map((device) => (

                    <DeviceCard
                      key={device.id}
                      device={device}
                    />

                  ))}

                </div>

              )}

            </div>

          </div>

          <AlertsPanel devices={devices} />

        </div>

        {/* AI Diagnosis + Latency Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <AIDiagnosis devices={devices} />
          <LatencyChart devices={devices} />
        </div>

        {/* Network Topology */}
        <div className="mt-6">
          <NetworkTopology devices={devices} />
        </div>

        {/* Auto Refresh + Self Healing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <AutoRefresh onRefresh={fetchDevices} />
          <SelfHealing devices={devices} />
        </div>

        {/* AI Copilot */}
        <div className="mt-6">
          <AICopilot devices={devices} />
        </div>

      </div>

    </div>
  );
}