import { test, expect } from '@playwright/test';

test('home renders and has calculator', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('TaxCom');
  await expect(page.getByRole('button', { name: /calculate/i })).toBeVisible();
});

