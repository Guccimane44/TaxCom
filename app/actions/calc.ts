"use server";

import { redirect } from 'next/navigation';

export async function calcAction(formData: FormData) {
  const incomeStr = (formData.get('income') ?? '').toString();
  const country = (formData.get('country') ?? 'DE').toString().toUpperCase();

  const income = Number(incomeStr);
  const safeIncome = Number.isFinite(income) && income >= 0 ? Math.floor(income) : 0;
  const safeCountry = country === 'NL' ? 'NL' : 'DE';

  // Redirect with query params; page will compute and render results server-side
  redirect(`/?income=${encodeURIComponent(safeIncome)}&country=${encodeURIComponent(safeCountry)}`);
}

