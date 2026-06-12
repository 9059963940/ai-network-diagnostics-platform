"use client";

import DeviceCard from "./DeviceCard";

type Device = {
  id: string;
  name: string;
  type: string;
  latency: number;
  cpu: number;
  packetLoss: number;
  status: "Healthy" | "Warning" | "Critical";
  timestamp: string;
};

export default function DeviceList({ devices }: { devices: Device[] }) {
  if (!devices || devices.length === 0) {
    return <p className="text-gray-400">No devices found</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {devices.map((device) => (
        <DeviceCard key={device.id} device={device} />
      ))}
    </div>
  );
}