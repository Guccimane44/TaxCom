import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, countryFromId, countryToId, comment } = body ?? {};
    // Basic shape validation
    if (typeof email !== 'string') throw new Error('email required');
    if (!Number.isInteger(countryFromId) || !Number.isInteger(countryToId)) throw new Error('country ids');
    // Best-effort insert; if DB not configured, swallow error for MVP
    try {
      await prisma.feedback.create({
        data: {
          email,
          countryFromId: Number(countryFromId),
          countryToId: Number(countryToId),
          comment: typeof comment === 'string' ? comment : null,
        },
      });
    } catch {
      // TODO: log error (no-op for MVP without DB)
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}

