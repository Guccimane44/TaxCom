import { NextRequest, NextResponse } from 'next/server';
import { calculateTax } from '@/lib/calculator';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const income = Number(body?.income ?? 0);
    const a = String(body?.a ?? 'DE');
    const b = String(body?.b ?? 'NL');
    const [resA, resB] = await Promise.all([
      calculateTax({ income, country: a }),
      calculateTax({ income, country: b }),
    ]);
    return NextResponse.json({ a: resA, b: resB });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

