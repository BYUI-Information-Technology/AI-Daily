# Consolidated Findings Brief: Phases 1-3

**Prepared for:** Ron Vallejo, AI Solutions Architect
**Purpose:** Quick-reference synthesis of all research findings before the Situational Assessment
**Date:** 2026-03-13
**Sources consulted to date:** 292 across 8 research tasks

---

## Market Landscape: Key Takeaways

1. **Citizen development is mainstream in enterprise, absent in higher ed.** By 2026, citizen developers outnumber professional developers 4:1 (Gartner). But "citizen development" as a named concept does not exist in higher education literature. No university has published a governance framework equivalent to enterprise citizen developer programs.
2. **Shadow AI is the default state.** 56% of higher ed workers use AI tools not provided by their institutions (EDUCAUSE). 80% of faculty and staff are unaware of institutional AI policies. This is the environment BYU-Idaho is operating in.
3. **The market is bifurcating.** Traditional low-code (Power Platform, ServiceNow) requires manual building with governance. AI app builders (Lovable, Base44, Bolt.new) generate full applications from natural language. These are fundamentally different categories with different governance implications.
4. **Governance lags adoption everywhere.** Only 9% of higher ed respondents consider their cybersecurity and privacy policies adequate for AI risks (EDUCAUSE 2024). Only 11% of CTOs have a comprehensive AI strategy.
5. **The cost savings are real but so are the risks.** 40-60% cost reduction vs. traditional development (Forrester), but organizations without formal governance see application sprawl and compliance breaches at 3-4x higher rates.

---

## Case Studies: What Worked and What Didn't

### Success Patterns (14 cases documented)
1. **Phased rollout with executive sponsorship works.** Miami Dade College (15% pass rate increase), University of Manchester (90% adoption in 30 days) both started with leadership, then expanded deliberately.
2. **Upgrading existing tools beats building new.** BYU Pathway Worldwide saved 150 hrs/week by adding generative AI to an existing Copilot Studio bot -- not by building from scratch.
3. **Two-level governance scales.** Deutsche Bahn (4,000 citizen devs) and H&M (30,000 users) both use central policy team + local departmental leads. This is the only proven model at scale.
4. **Regulated industries can do this.** Medtronic (FDA/HIPAA) satisfies 56% of demand through citizen development with mandatory training and IT co-development for anything touching regulated data.
5. **No university has done this completely.** Ohio University is the only institution with an explicit "citizen developer" program. No university has published a complete framework with governance, training, measurable outcomes, FERPA integration, and sustainability data.

### Failure Patterns (12 cases documented)
1. **Shadow AI data leaks are not hypothetical.** Samsung lost proprietary source code to ChatGPT. Blue Shield leaked 4.65M patients' data to Google for 3 years without detection. A CISA chief uploaded FOUO documents to public ChatGPT.
2. **Education-sector breaches are massive.** PowerSchool breach: 62M students. Illuminate Education: FTC enforcement action. These are vendor failures, not citizen development -- but they show the data exposure scale.
3. **Citizen dev apps have a 54% first-year failure rate.** Most common cause: original creator leaves, no one maintains the solution, IT inherits broken critical infrastructure. This is exactly what happened at BYU-Idaho with Power Automate.
4. **AI hallucinations create institutional liability.** NYC's MyCity chatbot gave citizens illegal advice (skip legally mandated disclosures, ignore worker protections). 486 documented hallucination cases across sectors.
5. **IBM data: 20% of organizations have experienced an AI-related data breach.** Average cost: $4.63M. Shadow AI is the #1 contributor.

---

## Platform Evaluation: Top Candidates and Fit

### Critical Finding: No Microsoft Product Replaces the AI App Builders

There is no Microsoft product today that lets someone say "build me an app" in natural language and get a working application -- which is exactly what Lovable and Base44 do. Copilot Studio builds chatbots. Power Apps requires manual drag-and-drop. M365 Copilot assists with productivity. GitHub Copilot targets developers in an IDE.

**This means:** The demand driving shadow AI cannot be met by the Microsoft ecosystem today. Banning Lovable/Base44 without providing an alternative that scratches the same itch will push shadow AI underground.

### Recommended Tiered Platform Strategy

| Tier | Platform | Audience | Rating |
|------|----------|----------|--------|
| **Primary** | Microsoft Power Platform | General faculty and staff | Adequate -- strongest governance, but $150K-$300K/yr, needs 1-2 FTE CoE, and usability is "difficult even for technical users" |
| **Power-user** | n8n (already deployed) | IT staff + trained technical staff | Strong for FERPA (self-hosted), but learning curve is a barrier for non-technical users |
| **Internal tools** | Retool | Data-oriented departments | Surprisingly strong -- self-hosted (FERPA-ideal), free education tier, semantic objects for governed abstractions |
| **Sandbox** | Lovable (governed) | Citizen developers exploring ideas | Lowest learning curve (why shadow adoption occurs), but every app becomes independent maintenance liability |
| **Prohibited** | Base44 | None | No compliance certs, no governance, no self-hosting |

### Platforms Considered and Excluded
- **ServiceNow:** BYU-Idaho is not a customer and would not consider it
- **Appian:** Overpriced for university needs (~$150/user/month), no higher ed footprint
- **Copilot Studio:** Does not justify investment given usability concerns and narrow scope (chatbots only)
- **OutSystems / Mendix:** Target professional developers, not citizen developers
- **Bubble:** Same governance problem as Lovable, without AI generation advantage
- **Caspio:** Notable FERPA compliance edition but too narrow (database apps only)

---

## Compliance Requirements: What Governance Must Look Like

1. **FERPA's "school official" exception is the legal basis** for any AI tool processing student data. Requires: institutional service function, direct control, contractual restrictions on redisclosure.
2. **"Direct control" is the crux.** When employees use unsanctioned tools, the institution has no contract with the AI vendor, no control over data use, and no visibility into data flows. This fails the school official exception.
3. **Model training is a redisclosure risk.** If an AI vendor uses student data to train models serving other customers, that likely constitutes impermissible secondary use under FERPA.
4. **No FERPA-and-AI regulation exists.** FERPA predates AI. Institutions must apply existing principles by analogy. AACRAO's 2026 publication will provide updated guidance but is not yet available.
5. **Enforcement is escalating.** Third-party data sharing cases up 34% in 2024. New York collected $287K in penalties. SPPO launched investigations into California and Maine education agencies.
6. **Data classification is prerequisite.** Any citizen development program needs a 4-tier classification (Public, Internal, Confidential, Restricted) with clear rules about which tiers citizen developers can access.
7. **DLP is not secure by default.** Power Platform DLP is disabled by default. In 2021, misconfigured Power Apps exposed 38M records. Governance must be configured before enabling access, not after.

---

## Evidence Gaps

- No independent, peer-reviewed study of citizen development in higher education exists
- University case studies are near-exclusively vendor customer stories (primarily Microsoft)
- No university has published a complete citizen development framework with measurable outcomes
- Citizen development failure statistics are aging (2018 data for the 54% failure rate)
- No platform holds FERPA-specific certification (none exists)
- FERPA predates AI; regulatory guidance is evolving but incomplete
- n8n Enterprise pricing is not publicly available
- Copilot Studio-specific (not M365 Copilot) higher ed deployments are sparse
- No head-to-head platform comparison for higher education citizen development exists

---

## Open Questions for Ron

The following questions are needed to draft the **Situational Assessment** (Section 2 of the briefing). This section grounds the briefing in BYU-Idaho's specific reality -- without it, the recommendations are generic.

### Shadow AI Situation
1. **Shadow AI incidents:** Can you describe specific cases of employees using unsanctioned AI tools (Base44, Lovable, individual API keys)? We'll anonymize for the briefing -- no names or departments in the final document.
2. **Shadow AI scope:** How widespread is this? Estimated number of employees/faculty involved, which departments are most active, and what types of data (student PII, grades, HR data) are flowing through these tools?
3. **Compliance incidents:** Have any compliance incidents already occurred from shadow AI? Near-misses? Has anyone reported concerns internally?

### Historical Precedent
4. **Power Automate history:** What specifically went wrong? How many orphaned automations exist? What was the cost to IT of inheriting them? How did the institution respond?

### IT Capacity
5. **IT resource constraints:** How many FTEs does IT have? What's the current capacity situation? Could the team absorb a 1-2 FTE Center of Excellence, or would that require new headcount?

### Political Dynamics
6. **Stakeholder pressure:** Who are the key stakeholders pushing for citizen development? What departments? What are they specifically asking for ("Give us Copilot Studio," "give us n8n access," "give us API keys")?
7. **CIO communication:** What has Joe already communicated to the president on this topic? What framing or commitments have already been made?

### Institutional Context
8. **Data classification:** Does BYU-Idaho have a formal data classification policy? If so, how is it enforced, and does it address AI tools specifically?
9. **President's disposition:** What's the president's general disposition -- tech-forward? Risk-averse? How much detail does he want in this kind of briefing?
