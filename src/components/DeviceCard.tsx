type Device = {
  id: string;
  name: string;
  type: string;
  latency: number;
  cpu: number;
  packetLoss: number;
  status: string;
};

export default function DeviceCard({
  device,
}: {
  device: Device;
}) {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "healthy":
        return "text-green-400";

      case "warning":
        return "text-yellow-400";

      case "critical":
        return "text-red-400";

      default:
        return "text-gray-400";
    }
  };

  const getDeviceIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "router":
        return "📡";

      case "switch":
        return "🔀";

      case "5g base station":
        return "📶";

      default:
        return "💻";
    }
  };

  return (
    <div className="bg-slate-900 border border-cyan-800 rounded-xl p-4 shadow-md hover:border-cyan-400 transition-all">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-2xl">
          {getDeviceIcon(device.type)}
        </span>

        <h3 className="text-cyan-300 font-bold text-lg">
          {device.name}
        </h3>
      </div>

      <div className="space-y-2 text-sm">
        <p>
          Type:{" "}
          <span className="text-gray-300">
            {device.type}
          </span>
        </p>

        <p>
          Latency:{" "}
          <span className="text-cyan-400">
            {device.latency} ms
          </span>
        </p>

        <p>
          CPU:{" "}
          <span className="text-purple-400">
            {device.cpu}%
          </span>
        </p>

        <p>
          Packet Loss:{" "}
          <span className="text-pink-400">
            {device.packetLoss}%
          </span>
        </p>

        <p>
          Status:{" "}
          <span
            className={`font-bold ${getStatusColor(
              device.status
            )}`}
          >
            {device.status}
          </span>
        </p>
      </div>
    </div>
  );
}