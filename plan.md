---
project: TaxCom
author: Yan
version: 0.1.0
date: 2025-10-09
---

# TaxCom Project Plan (MVP)

## Executive Summary
TaxCom is a web/SaaS platform that enables users to estimate and compare personal income taxes across countries through a clean, modern interface with best-in-class data visualization. The MVP focuses on delivering a fast, accurate, and comprehensible comparison experience, starting with Germany and the Netherlands, and designed to expand to 5–10 countries. The project emphasizes a robust technical foundation (Next.js + PostgreSQL) and a Test-Driven Development (TDD) approach for the core tax calculation logic.

Objectives:
- Validate that users can easily estimate and compare taxes across countries and understand results.
- Establish a scalable data model for tax brackets and calculations.
- Ship a visually polished, responsive UI suitable for organic growth and SEO.
- Lay groundwork for advertising-based monetization while maintaining a non-intrusive UX.

---

## MVP Scope

### Feature Set
| Area | Feature | Description | Acceptance Criteria |
|------|---------|-------------|---------------------|
| Tax Calculator | Single-country estimate | Input annual gross income; select a country; return estimated tax and net income. | For Germany and Netherlands: returns tax, net income, and effective tax rate within defined unit tests and examples. |
| Comparison View | Side-by-side comparison | Compare two countries’ estimated taxes and net income. | Render two result panels with identical input; include visual diff and totals. |
| Data Backend | Simplified tax brackets | Store simplified bracket tables for 5–10 countries (MVP starts with DE, NL). | Seeded DB; retrieval via typed models; versioned dataset with source notes. |
| Visualization | Results chart | Bar/stacked or donut chart summarizing gross vs. tax vs. net. | Chart renders for all supported countries; a11y labels; responsive. |
| Frontend UI | Modern responsive UI | Next.js App Router + Tailwind + shadcn/ui. Polished layout similar in clarity to 16personalities. | Pages load under reasonable budgets; lighthouse a11y ≥ 90 on key pages. |
| Feedback | Feedback/contact | Lightweight form to collect qualitative feedback on clarity and usefulness. | Submissions persisted or sent to an inbox; spam-protected. |

Out of scope (MVP): subnational taxes, detailed deductions/credits, complex residency/dual-tax scenarios, wealth/capital taxes (noted for future), official tax advice.

---

## Research & Validation

### Research Tracks
| Track | Tasks | Deliverables |
|-------|-------|--------------|
| Personas | Identify primary user types (e.g., relocating professionals, remote workers, expats). | 2–3 persona briefs with goals, pain points, top tasks. |
| Competitors | Benchmark direct/indirect competitors, features, UX, monetization, SEO posture. | Competitor matrix with feature gaps and UX notes. |
| Data Sources | Identify authoritative tax data sources and licenses; define update cadence. | Source registry, licensing notes, update policy draft. |
| Metrics | Define core KPIs for MVP validation. | KPI list with measurement plan. |

Suggested KPIs (MVP):
- Comparison completion rate
- Time-to-first-result (TTFR)
- Result comprehension feedback score (qualitative form)
- Return rate for repeat comparisons

### Validation Steps
1. Ship alpha calculator for DE and NL to 10–20 test users.
2. Collect structured feedback (comprehension, usefulness, missing inputs, visual clarity).
3. Address critical issues, expand to additional countries, then broaden tester pool.

Expected validation outputs:
- Feedback summary and prioritized fixes
- Adjusted feature roadmap and data scope

---

## Technical Stack & Architecture

### Stack Overview
| Layer | Technology | Purpose |
|-------|------------|---------|
| Frontend | Next.js (App Router) | SSR/SSG routes, fast UX, SEO-ready. |
| Styling | Tailwind CSS, shadcn/ui | Rapid, consistent UI construction. |
| Charts | Lightweight chart lib (e.g., Chart.js/Recharts) | Simple, responsive bar/stacked charts. |
| API | Next.js route handlers | Calculation and data access endpoints. |
| ORM | Prisma | Type-safe access to PostgreSQL. |
| Database | PostgreSQL | Persist tax tables, feedback, telemetry events. |
| Auth (optional MVP) | NextAuth.js or Supabase Auth | User accounts (Phase 2 monetization). |
| Hosting | Vercel (app) + Supabase (DB) | Simple deploy pipeline and managed DB. |
| Testing | Unit: Vitest/Jest; E2E: Playwright | TDD for calc logic, e2e for flows. |

### High-Level Architecture
- UI pages: home (input), results (single), compare (dual), about/disclaimer, feedback.
- API endpoints: `/api/calc`, `/api/compare`, `/api/feedback`.
- Data model (v1):
  - Country (id, name, iso2, region, created_at)
  - TaxYear (id, country_id → Country, year, effective_from, effective_to, source_name, source_url, notes, created_at)
  - FilingStatus (id, code, label, description)
  - TaxSchedule (id, tax_year_id → TaxYear, filing_status_id → FilingStatus, resident_type, description, created_at)
  - TaxBracket (id, schedule_id → TaxSchedule, lower_bound, upper_bound, rate, method, notes)
  - AllowanceRule (id, schedule_id → TaxSchedule, type, amount, phaseout_start, phaseout_rate, phaseout_cap, formula_ref, notes, created_at)
  - SocialContribution (id, schedule_id → TaxSchedule, name, rate, income_floor, income_ceiling, notes)
  - Feedback (id, email, country_from_id → Country, country_to_id → Country, comment, created_at)
- Config-driven calculators per country (function map), all conforming to a shared interface.

---

## TDD & Quality Gates
- Core logic (tax calculations) developed using TDD: write failing test, implement, refactor.
- Unit tests cover bracket application, effective tax rate, rounding/formatting, edge incomes.
- Integration tests ensure API endpoints return consistent, typed responses.
- E2E tests verify calculator, comparison, and visualization flows.
- Quality thresholds (MVP):
  - Unit test coverage (calc modules) ≥ 90%
  - Key route E2E smoke tests passing in CI
  - Lighthouse a11y ≥ 90 on core pages

---

## Monetization (Advertising-Based)

| Phase | Description | Notes |
|-------|-------------|-------|
| 1 | Free access with contextual/programmatic ads | Ethical, non-intrusive placements; protect UX and performance. |
| 2 | Optional accounts for personalization | Saved comparisons; not paywalled; improve retention and ad relevance. |
| 3 | Premium ad partnerships/affiliates | Sponsored insights, relevant services (e.g., relocation, tax advisors). |

Compliance and UX:
- Respect privacy regulations (GDPR/CCPA) and cookie consent.
- Avoid intrusive formats; prioritize page speed and readability.
- Track CPM/CTR performance; iterate placement and density cautiously.

---

## Expected Outputs (End of MVP)
- Deployed MVP supporting at least two countries (DE, NL) with an extensible path to 5–10.
- Working calculator and side-by-side comparison with responsive visualization.
- Seeded PostgreSQL with versioned, sourced tax brackets; documented assumptions.
- TDD test suite for calc logic; smoke E2E for core flows; CI pipeline.
- Basic analytics and feedback collection enabled; privacy notice and disclaimers present.
- Repository documentation: README, architecture overview, data sources & update policy, contribution/testing guides.

---

## Implementation Plan (Sequence, No Hard Dates)
1. Data model draft and seed minimal DE/NL brackets with sources.
2. Implement calculator core with TDD; expose `/api/calc`.
3. Build UI for single-country results; add chart.
4. Implement comparison flow and UI; expose `/api/compare`.
5. Add feedback form and basic analytics; publish disclaimers/privacy.
6. Harden tests (unit/integration/E2E); performance & a11y pass.
7. Expand country set toward 5–10 (as data quality allows).

---

## Risks & Mitigations
- Data accuracy and updates: define sources, assumptions, and an update cadence; version datasets.
- Legal/compliance: clear disclaimers (not tax advice); privacy/cookie consent for ads/analytics.
- UX performance: keep bundle small; defer ads; prefetch data carefully; monitor Core Web Vitals.
- Scope creep: maintain MVP feature guardrails; defer deductions/edge cases to post-MVP.

---

## Critical Review: Plan Spec Shortcomings
The planning spec provides clear direction but leaves several areas under-specified for execution:

- Source governance: No explicit list of authoritative sources, licenses, or update cadence. Remedy: add a source registry, license notes, and quarterly update policy.
- Accuracy guarantees: No target error bounds or validation method against reference calculators. Remedy: set tolerance thresholds and create comparison tests on known examples.
- Non-functional requirements: Performance, accessibility, and SEO budgets not specified. Remedy: adopt lighthouse/a11y targets and CWV goals.
- Privacy and ads compliance: Cookie consent, GDPR/CCPA, and ad policy constraints are not enumerated. Remedy: add a compliance checklist and consent implementation plan.
- Testing methodology details: TDD is stated but frameworks, coverage targets, and CI gates are unspecified. Remedy: define Jest/Vitest, Playwright, coverage gates, and CI workflow.
- Internationalization and currency: Strategy for i18n and FX conversion is absent. Remedy: set locale strategy and FX source/update policy (even if deferred post-MVP).
- Expansion criteria: Criteria to add new countries are not defined. Remedy: add readiness checklist (source quality, assumptions, test cases, UX impact).
- Timeline/resources: No sequencing or resource assumptions. Remedy: adopt the lightweight sequence above and note solo-project constraints.

These refinements make the plan execution-ready while preserving the MVP’s focused scope.
