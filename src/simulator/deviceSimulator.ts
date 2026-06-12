export interface NetworkDevice {
  id: string;
  name: string;
  type: string;
  latency: number;
  cpu: number;
  packetLoss: number;
  status: "healthy" | "warning" | "critical";
  healthScore: number;
  isDegraded: boolean;
  timestamp: string;
}

const devices: NetworkDevice[] = [
  {
    id: "1",
    name: "Router-01",
    type: "Router",
    latency: 20,
    cpu: 40,
    packetLoss: 0.2,
    status: "healthy",
    healthScore: 100,
    isDegraded: false,
    timestamp: "",
  },
  {
    id: "2",
    name: "Switch-01",
    type: "Switch",
    latency: 15,
    cpu: 30,
    packetLoss: 0.1,
    status: "healthy",
    healthScore: 100,
    isDegraded: false,
    timestamp: "",
  },
  {
    id: "3",
    name: "BaseStation-01",
    type: "5G Base Station",
    latency: 95,
    cpu: 45,
    packetLoss: 0.3,
    status: "healthy",
    healthScore: 100,
    isDegraded: false,
    timestamp: "",
  },
];

function randomVariation(base: number, range: number): number {
  return Math.max(0, Math.round(base + (Math.random() - 0.5) * range));
}

function calculateHealth(latency: number, cpu: number, packetLoss: number) {
  let score = 100;

  score -= latency * 0.4;
  score -= cpu * 0.3;
  score -= packetLoss * 10;

  score = Math.max(0, Math.min(100, Math.round(score)));

  let status: "healthy" | "warning" | "critical" = "healthy";

  if (score < 40) status = "critical";
  else if (score < 70) status = "warning";

  return {
    score,
    status,
    isDegraded: status !== "healthy",
  };
}

export function generateMetrics(): NetworkDevice[] {
  return devices.map((device) => {
    const latency = randomVariation(device.latency, 30);
    const cpu = randomVariation(device.cpu, 25);

    const packetLoss = Math.max(
      0,
      Number((device.packetLoss + (Math.random() - 0.5) * 1).toFixed(2))
    );

    const health = calculateHealth(latency, cpu, packetLoss);

    return {
      ...device,
      latency,
      cpu,
      packetLoss,
      status: health.status,
      healthScore: health.score,
      isDegraded: health.isDegraded,
      timestamp: new Date().toISOString(),
    };
  });
}