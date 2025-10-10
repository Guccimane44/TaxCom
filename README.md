# TaxCom (MVP)

Global income tax comparison MVP (Germany + Netherlands to start), built with Next.js 14, Prisma, and PostgreSQL.

## Tech Stack
- Next.js 14 (App Router), TypeScript
- Tailwind CSS, Recharts (simple charts)
- Prisma ORM + PostgreSQL
- Tests: Vitest (unit) + Playwright (e2e)
- Hosting: Vercel (app) + Supabase (DB)

## Getting Started

1) Install dependencies
```
npm install
```

2) Configure environment
```
cp .env.example .env
# Edit DATABASE_URL to point to your local Postgres
```

3) Prisma: generate client and run initial migration
```
npx prisma generate
npx prisma migrate dev --name init
```

4) Seed demo data (DE/NL, simplified)
```
npm run prisma:seed
```

5) Run the app
```
npm run dev
```

Visit http://localhost:3000

## Tests

- Unit tests (Vitest)
```
npm run test
```

- E2E tests (Playwright)
```
npm run test:e2e
```

## Project Structure

```
app/
  api/
    calc/route.ts
    compare/route.ts
    feedback/route.ts
  about/page.tsx
  compare/page.tsx
  feedback/page.tsx
  layout.tsx
  page.tsx
components/
  ChartPreview.tsx
  CookieBanner.tsx
lib/
  calculator.ts
  prisma.ts
prisma/
  schema.prisma
  seed.ts
tests/
  calc.unit.test.ts
e2e/
  calc.spec.ts
.github/workflows/ci.yml
```

## Notes
- Analytics and ads are stubbed/placeholder only.
- No authentication in MVP to reduce friction.
- Tax calculations are simplified; not legal or financial advice.

