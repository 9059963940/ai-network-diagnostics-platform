export default function Sidebar() {
  return (
    <div className="w-64 bg-slate-900 border-r border-slate-800 p-6">

      <h2 className="text-2xl font-bold text-cyan-400 mb-8">
        MatreComm AI
      </h2>

      <ul className="space-y-4">

        <li className="text-slate-300 hover:text-cyan-400 cursor-pointer">
          Dashboard
        </li>

        <li className="text-slate-300 hover:text-cyan-400 cursor-pointer">
          Devices
        </li>

        <li className="text-slate-300 hover:text-cyan-400 cursor-pointer">
          Alerts
        </li>

        <li className="text-slate-300 hover:text-cyan-400 cursor-pointer">
          AI Analysis
        </li>

        <li className="text-slate-300 hover:text-cyan-400 cursor-pointer">
          Settings
        </li>

      </ul>
    </div>
  );
}