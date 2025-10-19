import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { calculateTax } from '@/lib/calculator';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const income = Number(body?.income ?? 0);
    const country = String(body?.country ?? 'DE');
    // TODO: use year, filingStatus, residentType when wired to DB
    const result = await calculateTax({ income, country });
    return NextResponse.json(result);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

