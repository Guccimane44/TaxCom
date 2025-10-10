import { describe, it, expect } from 'vitest';
import { calculateTax } from '@/lib/calculator';

describe('calculateTax (stub)', () => {
  it('returns effective rate within 0-1', async () => {
    const res = await calculateTax({ income: 60000, country: 'DE' });
    expect(res.income).toBe(60000);
    expect(res.tax).toBeGreaterThan(0);
    expect(res.net).toBeGreaterThan(0);
    expect(res.effectiveRate).toBeGreaterThan(0);
    expect(res.effectiveRate).toBeLessThanOrEqual(1);
  });

  it('handles NL stub rate', async () => {
    const de = await calculateTax({ income: 100000, country: 'DE' });
    const nl = await calculateTax({ income: 100000, country: 'NL' });
    expect(nl.tax).toBeGreaterThan(de.tax);
  });
});

