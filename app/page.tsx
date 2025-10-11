import ChartPreview from '@/components/ChartPreview';
import Link from 'next/link';
import { calcAction } from '@/app/actions/calc';
import { calculateTax } from '@/lib/calculator';

export default async function HomePage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const incomeParam = typeof searchParams?.income === 'string' ? searchParams?.income : undefined;
  const countryParam = typeof searchParams?.country === 'string' ? searchParams?.country : undefined;
  const parsedIncome = incomeParam ? Math.max(0, Number(incomeParam)) : undefined;
  const country = (countryParam || 'DE').toUpperCase();

  const result = typeof parsedIncome === 'number' && Number.isFinite(parsedIncome)
    ? await calculateTax({ income: parsedIncome, country })
    : undefined;

  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">TaxCom</h1>
        <p className="text-gray-600">Estimate and compare income taxes across countries (MVP).</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 items-start">
        <div className="space-y-4">
          <h2 className="font-medium">Quick Calculator</h2>
          <form className="space-y-3" action={calcAction}>
            <div className="flex items-center gap-3">
              <label className="w-24 text-sm text-gray-700">Income</label>
              <input name="income" type="number" min={0} defaultValue={parsedIncome ?? 60000} className="border rounded px-3 py-2 w-full" />
            </div>
            <div className="flex items-center gap-3">
              <label className="w-24 text-sm text-gray-700">Country</label>
              <select name="country" defaultValue={country} className="border rounded px-3 py-2">
                <option value="DE">Germany</option>
                <option value="NL">Netherlands</option>
              </select>
            </div>
            <button className="bg-gray-900 text-white rounded px-4 py-2 text-sm">Calculate</button>
          </form>
        </div>
        <div>
          {result ? (
            <div className="space-y-3">
              <div className="border rounded p-4">
                <h3 className="font-medium mb-1">Result</h3>
                <p className="text-sm text-gray-700">Country: {result.country} &bull; Income: {result.income.toLocaleString()}</p>
                <p className="text-sm text-gray-700">Tax: {result.tax.toLocaleString()} &bull; Net: {result.net.toLocaleString()} &bull; Effective: {(result.effectiveRate * 100).toFixed(1)}%</p>
              </div>
              <ChartPreview gross={result.income} tax={result.tax} net={result.net} />
            </div>
          ) : (
            <ChartPreview />
          )}
        </div>
      </div>

      <div className="text-sm text-gray-600">
        <Link href="/compare" className="mr-4">Go to Compare</Link>
        <Link href="/about" className="mr-4">About</Link>
        <Link href="/feedback">Feedback</Link>
      </div>
    </section>
  );
}

