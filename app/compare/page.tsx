export default function ComparePage() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-semibold">Compare Countries</h1>
      <p className="text-gray-600">Side-by-side comparison (stub UI).</p>
      <div className="grid md:grid-cols-2 gap-6">
        <StubPanel title="Country A" defaultCountry="DE" />
        <StubPanel title="Country B" defaultCountry="NL" />
      </div>
    </section>
  );
}

function StubPanel({ title, defaultCountry }: { title: string; defaultCountry: string }) {
  return (
    <div className="border rounded p-4 space-y-3">
      <h2 className="font-medium">{title}</h2>
      <div className="flex items-center gap-3">
        <label className="w-24 text-sm text-gray-700">Income</label>
        <input type="number" min={0} defaultValue={60000} className="border rounded px-3 py-2 w-full" />
      </div>
      <div className="flex items-center gap-3">
        <label className="w-24 text-sm text-gray-700">Country</label>
        <select defaultValue={defaultCountry} className="border rounded px-3 py-2">
          <option value="DE">Germany</option>
          <option value="NL">Netherlands</option>
        </select>
      </div>
      <button className="bg-gray-900 text-white rounded px-4 py-2 text-sm">Compare (TODO)</button>
    </div>
  );
}

