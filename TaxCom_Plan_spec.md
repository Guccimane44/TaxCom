---
project: TaxCom
stage: Planning Specification
author: [Yan]
created: 2025-10-08
version: 1.0
--- 

# 🧩 TaxCom — Plan Specification Document

### Document Purpose
This document defines **how the TaxCom project plan will be created** — outlining the approach, stages, and validation methods for planning the platform.

---

## 1. 🔭 Vision Alignment

**Goal:**  
> TaxCom is a website/SaaS that compares the personal income tax (capital tax and wealth tax can be added in the future) amongst various countries. it will contain an income tax calculator and also a "how much you could make and get taxed in other countries/regions". TaxCom will have state of the art level of data visualization and UI, which will make it very competitive._

**Core Value Proposition:**  
> _Those website with similar purposes are extremely out-of-date. they contain bad UI, and are full of ads and ugly texts. They are easily replacable._

**Long-Term Vision:**  
> _TaxCom will try to overtake the viewership of legacy websites that serves similar purposes. When the user grows, it can be extended into customizable financial planing or simply adding some high cpm advertisements._

**Planning Objective:**  
> _Let users compare estimated income taxes across Germany and netherland easily, in a visually clear way. To validate the MVP scope (see below), technical architecture, and user experience flow for TaxCom before development begins._

---

## 2. 🔍 Research & Discovery Framework

**Objectives:**  
- Identify user personas  
- Analyze competitors (direct + indirect)  
- Define key metrics and tax comparison parameters  

**Process:**  
1. Competitor benchmarking (who, what features, how they monetize)  
2. Target audience definition (users, their problems, workflows)  
3. Scope mapping (which tax data, how deep, how visualized)

**Deliverables:**  
- Competitor matrix  
- Persona profiles  
- Feature opportunity notes  

---

## 3. ⚙️ Feature Identification & Prioritization Method

**Framework:**  
> _e.g., MoSCoW (Must / Should / Could / Won’t), RICE scoring, or MVP-first iteration._

**Steps:**  
1. List all potential features  
2. Prioritize by value and complexity  
3. Select MVP feature set  

**Expected Output:**  
- MVP Feature List  
- Feature Roadmap (MVP → Expansion → Premium)

---
## 4. 🧱 MVP Scope

**Core MVP features:**
| Area | Feature | Purpose |
|------|----------|----------|
| **1. Tax Calculator** | A simple calculator where users enter income (e.g., annual gross salary) and select a country. | Provide instant tax estimate. |
| **2. Comparison View** | Allow comparison between two countries side-by-side (e.g., “Germany vs USA”). | Show main value proposition — cross-country comparison. |
| **3. Data Backend** | Basic PostgreSQL database with simplified tax brackets for ~5–10 countries. | Functional demo data; proves scalability idea. |
| **4. Frontend UI** | Clean, responsive web page (Next.js + Tailwind) similar to 16personalities layout. | Validate visual design and user flow. |
| **5. Simple Results Visualization** | Bar chart or percentage summary of tax burden vs net income. | Improves comprehension and engagement. |
| **6. Feedback Loop** | Optional feedback or contact form. | Collect validation data from users. |

## 5. 🧱 Technical Validation Process

**Validation Approach:** 
TaxCom will adopt a **Test-Driven Development (TDD)** methodology for its core logic, especially the tax calculation and data parsing modules.  
Each new feature will follow the cycle:
1. Write minimal failing test  
2. Implement the logic to make it pass  
3. Refactor while ensuring all tests remain green  

**Stack Overview:**  
- **Frontend:** Next.js (App Router), Tailwind, shadcn/ui  
- **Backend:** PostgreSQL, Prisma ORM  
- **Hosting:** Vercel / Supabase  
- **Auth:** NextAuth.js or Supabase Auth  

**Validation Steps:**  
- Prototype data model for tax tables  
- Test calculation logic for sample countries  
- Validate SSR performance for dynamic routes  

**Deliverables:**  
- Data schema draft  
- Architecture diagram  
- Tech risk log  

---

## 6. 🧩 Architecture Planning Framework

**Goal:**  
Define how the platform’s architecture will be structured.

**Components:**  
- Frontend pages & routes  
- API endpoints  
- Database schema  
- Integration structure (auth, data imports)

**Deliverables:**  
- Component hierarchy map  
- Data flow diagram  
- Repository structure guidelines  

---

## 7. 🎨 Design & UX Planning

**Tools:**  
Figma, Tailwind, Lucidchart (for flows)

**Process:**  
1. Draft wireframes → review → finalize MVP design  
2. Design for responsiveness (mobile-first)  
3. Create consistent UI components  

**Deliverables:**  
- Wireframe set  
- Design system tokens  
- User flow map  

---

## 8. 🧪 Validation & Testing Plan

**Objectives:**  
Ensure early feedback and validate usability.

**Steps:**  
1. Launch alpha calculator prototype  
2. Gather user feedback (10–20 testers)  
3. Iterate before expanding features  

**Metrics for Validation:**  
- Engagement time  
- Comparison completion rate  
- Feedback on clarity of tax data  

**Deliverables:**  
- Test feedback summary  
- Adjusted roadmap  

--- 

## 9. 💰 Monetization & Account Roadmap

**Purpose:**  
Lay the groundwork for long-term revenue through targeted, high-CPM advertising and lightweight user personalization.

**Phases:**  
- **Phase 1:** Free access for all users, supported by contextual and programmatic advertising (e.g., Google AdSense or ethical alternatives).  
- **Phase 2:** Introduce optional user accounts for personalization (e.g., saved countries, recurring salary comparisons) — not paywalled, but used to improve engagement and ad relevance.  
- **Phase 3:** Add premium ad partnerships, sponsored insights, and affiliate integrations (e.g., international tax advisors, relocation agencies, or fintech products).  

**Considerations:**  
- Optimize for SEO and organic traffic to maximize ad reach.  
- Use non-intrusive ad placements that don’t harm UX.  
- Track CPM and CTR performance via analytics.  
- Maintain GDPR and CCPA compliance for ads and tracking.  
- Evaluate potential for hybrid monetization later (ads + premium tools if user base justifies).  

## 10. 📚 Documentation & Knowledge Base

**Tools:**  
Notion / GitHub Wiki  

**Requirements:**  
- Track assumptions, decisions, and design notes  
- Version control for documentation  
- Technical documentation for each feature  

**Deliverables:**  
- Knowledge base index  
- Decision log  
- A validated planning blueprint ready for system design and prototype development.

---

## 11. 🗓️ Planning Timeline

This is a personal project. It doesnt have a strict timeline.

## 12. ✅ Expected Outputs of This Planning Phase

By the end of the planning process, you should have:
- Validated MVP concept  
- Technical and design blueprint  
- Prioritized feature roadmap  
- Resource plan  
