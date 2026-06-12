"use client";

import ReactFlow, {
  Background,
  Controls,
  MiniMap,
} from "reactflow";
import "reactflow/dist/style.css";

const nodes = [
  {
    id: "1",
    position: { x: 250, y: 50 },
    data: { label: "Router-01" },
    style: {
      background: "#0f172a",
      color: "#22d3ee",
      border: "2px solid #22d3ee",
      borderRadius: "12px",
      padding: "10px",
      width: 150,
      textAlign: "center",
    },
  },
  {
    id: "2",
    position: { x: 250, y: 220 },
    data: { label: "Switch-01" },
    style: {
      background: "#0f172a",
      color: "#22d3ee",
      border: "2px solid #22d3ee",
      borderRadius: "12px",
      padding: "10px",
      width: 150,
      textAlign: "center",
    },
  },
  {
    id: "3",
    position: { x: 250, y: 390 },
    data: { label: "5G Base Station" },
    style: {
      background: "#0f172a",
      color: "#22d3ee",
      border: "2px solid #22d3ee",
      borderRadius: "12px",
      padding: "10px",
      width: 170,
      textAlign: "center",
    },
  },
];

const edges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
    style: {
      stroke: "#22d3ee",
      strokeWidth: 3,
    },
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    animated: true,
    style: {
      stroke: "#22d3ee",
      strokeWidth: 3,
    },
  },
];

export default function NetworkTopology() {
  return (
    <div className="bg-slate-800 rounded-xl p-4">
      <h2 className="text-xl font-bold text-cyan-400 mb-4">
        Network Topology
      </h2>

      <div style={{ height: "500px" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </div>
    </div>
  );
}