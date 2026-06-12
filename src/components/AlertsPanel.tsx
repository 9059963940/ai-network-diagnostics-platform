const alerts = [
  "High Latency on Router-01",
  "Packet Loss Detected on 5G-BS-01",
  "CPU Utilization Above 90%",
];

export default function AlertsPanel() {
  return (
    <div className="bg-slate-900 p-6 rounded-xl border border-slate-800">

      <h2 className="text-2xl font-bold text-red-400 mb-5">
        Active Alerts
      </h2>

      <div className="space-y-4">

        {alerts.map((alert, index) => (
          <div
            key={index}
            className="bg-red-950 border border-red-800 p-3 rounded-lg"
          >
            {alert}
          </div>
        ))}

      </div>

    </div>
  );
}