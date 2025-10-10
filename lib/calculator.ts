// Simple placeholder tax calculator used by API and tests.
// TODO: Replace with DB-driven schedule + bracket evaluation.

export type CalcInput = {
  income: number;
  country: string; // ISO2
};

export type CalcResult = {
  income: number;
  tax: number;
  net: number;
  effectiveRate: number;
  country: string;
};

export async function calculateTax(input: CalcInput): Promise<CalcResult> {
  const income = Math.max(0, Number(input.income || 0));
  // Very rough stub: DE 22%, NL 25% for preview only.
  const baseRate = input.country?.toUpperCase() === 'NL' ? 0.25 : 0.22;
  const tax = round2(income * baseRate);
  const net = round2(income - tax);
  const effectiveRate = income > 0 ? tax / income : 0;
  return { income, tax, net, effectiveRate, country: (input.country || 'DE').toUpperCase() };
}

function round2(n: number) {
  return Math.round(n * 100) / 100;
}

