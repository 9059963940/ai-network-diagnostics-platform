import { NextResponse } from "next/server";
import { generateMetrics } from "@/simulator/deviceSimulator";

export async function GET() {
  const data = generateMetrics();

  return NextResponse.json({
    success: true,
    timestamp: new Date().toISOString(),
    data,
  });
}