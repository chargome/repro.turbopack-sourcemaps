import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
class SentryExampleAPIError extends Error {
  constructor(message: string | undefined) {
    super(message);
    this.name = "SentryExampleAPIError";
  }
}

export function GET() {
  try {
    throw new SentryExampleAPIError("Turbopack in route handler");
  } catch (error) {
    throw error;
  }
  return NextResponse.json({ data: "Testing Sentry Error..." });
}
