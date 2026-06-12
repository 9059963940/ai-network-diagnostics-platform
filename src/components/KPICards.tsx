"use client";

interface Device {
  id: string;
  name: string;
  type: string;
  latency: number;
  cpu: number;
  packetLoss: number;
  status: string;
}

interface Props {
  devices: Device[];
}

export default function KPICards({ devices = [] }: Props) {
  // Safety fix (prevents filter crash)
  const safeDevices = Array.isArray(devices) ? devices : [];

  const totalDevices = safeDevices.length;

  const healthyDevices = safeDevices.filter(
    (d) => d.status === "healthy"
  ).length;

  const warningDevices = safeDevices.filter(
    (d) => d.status === "warning"
  ).length;

  const criticalDevices = safeDevices.filter(
    (d) => d.status === "critical"
  ).length;

  const avgLatency =
    safeDevices.reduce((acc, d) => acc + (d.latency || 0), 0) /
    (safeDevices.length || 1);

  const avgCPU =
    safeDevices.reduce((acc, d) => acc + (d.cpu || 0), 0) /
    (safeDevices.length || 1);

  const avgPacketLoss =
    safeDevices.reduce((acc, d) => acc + (d.packetLoss || 0), 0) /
    (safeDevices.length || 1);

  const kpis = [
    {
      title: "Total Devices",
      value: totalDevices,
      color: "bg-blue-600",
    },
    {
      title: "Healthy",
      value: healthyDevices,
      color: "bg-green-600",
    },
    {
      title: "Warning",
      value: warningDevices,
      color: "bg-yellow-500",
    },
    {
      title: "Critical",
      value: criticalDevices,
      color: "bg-red-600",
    },
    {
      title: "Avg Latency (ms)",
      value: avgLatency.toFixed(1),
      color: "bg-purple-600",
    },
    {
      title: "Avg CPU (%)",
      value: avgCPU.toFixed(1),
      color: "bg-indigo-600",
    },
    {
      title: "Packet Loss (%)",
      value: avgPacketLoss.toFixed(2),
      color: "bg-pink-600",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
      {kpis.map((kpi, index) => (
        <div
          key={index}
          className={`${kpi.color} text-white rounded-xl p-4 shadow-lg`}
        >
          <div className="text-sm opacity-80">{kpi.title}</div>
          <div className="text-2xl font-bold mt-2">{kpi.value}</div>
        </div>
      ))}
    </div>
  );
}