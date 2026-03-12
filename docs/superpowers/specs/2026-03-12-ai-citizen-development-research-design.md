# AI Citizen Development in Higher Education: Research Plan Design

## Overview

A research plan to produce a decision framework briefing on AI citizen development for BYU-Idaho's CIO (Joe) to present to the university president by mid-April 2026. The briefing will arm leadership with market data, case studies, compliance analysis, and concrete options for how BYU-Idaho should approach AI citizen development.

## Context

### The Problem

BYU-Idaho faces converging pressures:

1. **Leadership pressure:** The university president has directly asked the CIO for information on AI citizen development. Internal stakeholders are requesting access to tools like Copilot Studio, n8n, and API keys. The ask is essentially "give us the tools and get out of the way."

2. **Active shadow AI:** Employees and faculty are bypassing IT and subscribing to unsanctioned services (Base44, Lovable, and others) to build AI-powered applications. These applications are being used with private data including student PII and grades. This is a live compliance exposure, not a hypothetical risk.

3. **Historical precedent:** Previous citizen development efforts with Power Automate produced automations that silently became business-critical, multi-department infrastructure with no documentation, no ownership, and no one to maintain them. IT inherited the mess.

4. **Resource constraints:** IT is resource-constrained. Any citizen development program must account for the governance and maintenance overhead it creates.

5. **Compliance stakes:** As a higher education institution, BYU-Idaho operates under FERPA. Citizen-built AI tools that process student data without proper governance create regulatory exposure that didn't exist in the Power Automate era.

### The Goal

Produce a research-backed executive briefing that gives the CIO data and a decision framework — not a single recommendation, but a set of options with trade-offs that respects leadership's authority to decide while making the risks and requirements concrete.

### Researcher

Claude executes the research, synthesis, and drafting. Ron validates findings against institutional reality and provides institutional context that only an insider can supply.

### Timeline

Deadline: Mid-April 2026 (~1 month from 2026-03-12).

## Deliverable: Decision Framework Briefing

### Document Structure

1. **Executive Summary** — One page. The situation, the stakes, and the three options at a glance. Written last.

2. **Situational Assessment** — BYU-Idaho's current state: shadow AI incidents, Power Automate precedent, resource constraints, leadership pressure. The "why we're here" section. Requires Ron's institutional input.

3. **Market Landscape** — AI citizen development across the market. Key platforms, adoption trends, analyst perspectives (Gartner, Forrester, EDUCAUSE). General industry first, then higher education specifically.

4. **Case Studies** — Documented examples of organizations that have attempted AI citizen development. Universities where possible, comparable regulated-industry organizations otherwise. Both successes and failures. Each case structured as: Institution, What They Did, Platform/Approach, Governance Model, Outcome, Lessons Learned.

5. **Compliance and Governance Analysis** — FERPA implications for citizen-built AI tools, data privacy risks, governance frameworks adopted by peer institutions. What "governed enablement" actually requires in a higher ed compliance context.

6. **Platform Evaluation** — Assessment of candidate platforms against BYU-Idaho-specific criteria. Comparative, not a vendor pitch. Candidates include: Microsoft Copilot Studio, Power Platform, n8n, and others surfaced during research.

7. **Decision Framework** — Three options with trade-offs:
   - **Option A: Restrict and Remediate** — Lock down shadow AI, no citizen development program. Addresses compliance risk but doesn't address the innovation pressure.
   - **Option B: Governed Enablement** — Sandboxed platform with guardrails, training, approval workflows, and IT oversight. Balances enablement with governance.
   - **Option C: Open Access with Guidelines** — Lighter governance, broader access, heavier risk acceptance. Faster enablement but higher compliance and maintenance exposure.

8. **Recommendation** — A clearly stated recommendation with justification, acknowledging that the final decision belongs to leadership.

### Format and Tone

- **Format:** Markdown, convertible to PDF. Target 15-25 pages. Heavy use of tables and comparison matrices. Case studies in structured templates. Executive Summary fits on one page.
- **Tone:** Professional, direct, neutral. Data-driven, not rhetorical. Acknowledges the legitimate desire to enable innovation. Makes risks concrete and specific. Respects the president's role as decision-maker.
- **What it is NOT:** Not an academic paper, not a vendor pitch, not a "just say no" document. The governed enablement option must be genuinely viable.

## Research Methodology

### Section 2: Situational Assessment
- **Source:** Ron provides institutional specifics — shadow AI incidents, Power Automate history, political dynamics, resource constraints
- **Claude's role:** Synthesize into a clear risk-framed narrative

### Section 3: Market Landscape
- **Sources:** EDUCAUSE reports and Horizon Report, Gartner/Forrester on citizen development and AI adoption, IDC surveys, higher ed CIO surveys, institutional AI policy repositories
- **Claude's role:** Web research, synthesis, trend identification

### Section 4: Case Studies
- **Sources:** University press releases, CIO magazine features, EDUCAUSE case studies, conference proceedings, cautionary tales (data breaches, compliance violations, failed rollouts)
- **Fallback:** Where university examples are thin, pull from comparable regulated industries (healthcare, K-12, government)
- **Claude's role:** Targeted search, structured case study extraction

### Section 5: Compliance and Governance Analysis
- **Sources:** US Department of Education FERPA guidance on AI tools, published institutional AI governance frameworks, data classification frameworks
- **Claude's role:** Research and synthesis of compliance requirements and governance models

### Section 6: Platform Evaluation
- **Evaluation criteria (BYU-Idaho specific):**
  - FERPA compliance capability
  - Admin governance controls (approval workflows, data access restrictions, audit trails)
  - Maintenance burden on IT
  - Learning curve for non-technical users
  - Integration with existing Azure infrastructure
- **Candidates:** Microsoft Copilot Studio, Power Platform (broader), n8n (already deployed), Retool, Appian, ServiceNow App Engine, and others surfaced during research
- **Claude's role:** Research each platform against criteria, produce comparative analysis

### Section 7-8: Decision Framework and Recommendation
- **Source:** Synthesized from all prior sections
- **Claude's role:** Build the three options with concrete trade-offs, draft recommendation

### Research Constraints
- Paywalled sources (Gartner, Forrester): Claude will flag when hitting paywalls so Ron can pursue institutional access if needed
- Thin evidence: Claude will flag areas where evidence is sparse rather than padding with speculation
- Timeline: Research must complete in time for drafting, review, and iteration before mid-April 2026

## Research Execution Plan

### Phase 1: Foundation (Sessions 1-2)
- Market landscape research: industry analyst reports, EDUCAUSE data, adoption trends
- FERPA and compliance research: Department of Education guidance, institutional AI policies
- **Deliverable:** Draft of Sections 3 (Market Landscape) and 5 (Compliance and Governance)

### Phase 2: Case Studies (Sessions 3-4)
- Deep dive into documented successes and failures
- University-specific cases first, then regulated-industry analogues
- Categorize each case by structured template
- **Deliverable:** Draft of Section 4 (Case Studies)

### Phase 3: Platform Evaluation (Session 5)
- Research each candidate platform against BYU-Idaho's evaluation criteria
- Produce comparative analysis, not just feature lists
- **Deliverable:** Draft of Section 6 (Platform Evaluation)

### Phase 4: Ron's Input Session
- Present findings from Phases 1-3
- Ron provides institutional context for the Situational Assessment
- Identify research gaps and whether anything needs a second pass
- **Deliverable:** Draft of Section 2 (Situational Assessment)

### Phase 5: Synthesis (Sessions 6-7)
- Build the Decision Framework (Section 7) from all gathered research
- Draft the Recommendation (Section 8)
- Write the Executive Summary (Section 1) last
- **Deliverable:** Complete first draft of the full briefing

### Phase 6: Review and Polish
- Ron reviews the full draft
- Iterate on tone, accuracy, and framing for the president as audience
- **Deliverable:** Final briefing document

### Ron's Input Points
- **Phase 4 (critical):** Institutional context for Situational Assessment
- **Throughout:** Validating that case studies and platform assessments are relevant to BYU-Idaho's reality
- **Phase 6:** Reviewing tone and framing for Joe's audience
