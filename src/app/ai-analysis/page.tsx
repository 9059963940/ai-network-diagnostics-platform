import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function Devices() {
  return (
    <>
      <Sidebar />
      <div className="ml-64">
        <Header />
        <div className="p-8">
          <h1 className="text-3xl font-bold">
            AI Analysis
          </h1>
        </div>
      </div>
    </>
  );
}