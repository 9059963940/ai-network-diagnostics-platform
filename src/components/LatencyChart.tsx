"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "10:00", latency: 22 },
  { time: "10:05", latency: 28 },
  { time: "10:10", latency: 32 },
  { time: "10:15", latency: 26 },
  { time: "10:20", latency: 35 },
  { time: "10:25", latency: 31 },
];

export default function LatencyChart() {
  return (
    <div className="bg-slate-800 p-6 rounded-xl shadow-lg">
      <h2 className="text-xl font-bold text-cyan-400 mb-4">
        Latency Trend
      </h2>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="latency"
              stroke="#22d3ee"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}