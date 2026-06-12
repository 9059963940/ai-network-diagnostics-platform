export default function AIDiagnosis() {
  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-bold text-cyan-400 mb-4">
        AI Diagnosis
      </h2>

      <div className="space-y-3">
        <div>
          <p className="text-gray-400">Issue</p>
          <p className="text-red-400 font-semibold">
            High Latency Detected
          </p>
        </div>

        <div>
          <p className="text-gray-400">Root Cause</p>
          <p>Network Congestion</p>
        </div>

        <div>
          <p className="text-gray-400">Confidence</p>
          <p className="text-green-400">94%</p>
        </div>

        <div>
          <p className="text-gray-400">Recommendation</p>
          <p>Enable Alternate Route</p>
        </div>
      </div>
    </div>
  );
}