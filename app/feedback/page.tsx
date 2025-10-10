"use client";
import { useState } from 'react';

export default function FeedbackPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="space-y-6 max-w-2xl">
      <h1 className="text-2xl font-semibold">Feedback</h1>
      <p className="text-gray-600">Tell us if results are clear and useful.</p>
      {!submitted ? (
        <form
          className="space-y-4"
          onSubmit={async (e) => {
            e.preventDefault();
            const form = e.currentTarget as HTMLFormElement;
            const payload = {
              email: (form.elements.namedItem('email') as HTMLInputElement).value,
              countryFromId: Number((form.elements.namedItem('from') as HTMLSelectElement).value || 1),
              countryToId: Number((form.elements.namedItem('to') as HTMLSelectElement).value || 2),
              comment: (form.elements.namedItem('comment') as HTMLTextAreaElement).value,
            };
            await fetch('/api/feedback', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(payload),
            });
            setSubmitted(true);
          }}
        >
          <div className="flex items-center gap-3">
            <label className="w-28 text-sm text-gray-700">Email</label>
            <input name="email" type="email" className="border rounded px-3 py-2 w-full" placeholder="you@example.com" />
          </div>
          <div className="flex items-center gap-3">
            <label className="w-28 text-sm text-gray-700">From</label>
            <select name="from" className="border rounded px-3 py-2">
              <option value="1">Germany</option>
              <option value="2">Netherlands</option>
            </select>
          </div>
          <div className="flex items-center gap-3">
            <label className="w-28 text-sm text-gray-700">To</label>
            <select name="to" className="border rounded px-3 py-2">
              <option value="2">Netherlands</option>
              <option value="1">Germany</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1">Comment</label>
            <textarea name="comment" rows={5} className="border rounded px-3 py-2 w-full" placeholder="What was unclear or useful?" />
          </div>
          <button className="bg-gray-900 text-white rounded px-4 py-2 text-sm">Submit</button>
        </form>
      ) : (
        <p className="text-green-700">Thanks! Your feedback was submitted.</p>
      )}
    </section>
  );
}

