# AI Citizen Development Research — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Execute the research plan defined in `docs/superpowers/specs/2026-03-12-ai-citizen-development-research-design.md` to produce a decision framework briefing on AI citizen development for BYU-Idaho's CIO.

**Architecture:** Six-phase research pipeline. Phases 1-3 are independent research tracks (market landscape, case studies, platform evaluation) executed by Claude via web research. Phase 4 is a collaborative session with Ron for institutional context. Phase 5 synthesizes everything into the final briefing. Phase 6 is review and polish.

**Tech Stack:** Web research (WebSearch, WebFetch), Markdown drafting, optional PDF conversion for final delivery.

**Spec:** `docs/superpowers/specs/2026-03-12-ai-citizen-development-research-design.md`

**Output directory:** `docs/research/ai-citizen-development/`

---

## Chunk 1: Project Setup and Phase 1 — Market Landscape Research

### Task 1: Set Up Output Directory Structure

**Files:**
- Create: `docs/research/ai-citizen-development/README.md`
- Create: `docs/research/ai-citizen-development/drafts/` (directory)
- Create: `docs/research/ai-citizen-development/sources/` (directory)
- Create: `docs/research/ai-citizen-development/final/` (directory)

- [ ] **Step 1: Create the directory structure**

```bash
mkdir -p docs/research/ai-citizen-development/{drafts,sources,final}
```

- [ ] **Step 2: Create README with project overview**

Create `docs/research/ai-citizen-development/README.md` with:
- Project purpose (link to spec)
- Directory layout explanation
- Timeline (deadline: mid-April 2026)
- Phase status tracker (all phases start as "Not Started")

- [ ] **Step 3: Create source tracking file**

Create `docs/research/ai-citizen-development/sources/source-log.md` — a running log of every source consulted during research. For each source, record:
- URL
- Title
- Date accessed
- Relevance (which briefing section it informs)
- Key findings (1-2 sentences)
- Paywalled? (yes/no)
- Credibility notes

This log is for Ron to verify sources and for traceability. Every web search result used in drafting MUST be logged here.

- [ ] **Step 4: Commit**

```bash
git add docs/research/ai-citizen-development/
git commit -m "Set up research output directory for AI citizen development briefing"
```

---

### Task 2: Market Landscape Research — General Industry

**Files:**
- Create: `docs/research/ai-citizen-development/drafts/03-market-landscape.md`
- Update: `docs/research/ai-citizen-development/sources/source-log.md`

Research the current state of AI citizen development across the general market (not higher-ed specific yet — that's Task 3).

- [ ] **Step 1: Research citizen development market trends**

Search for:
- "AI citizen development" market size and adoption trends (2024-2026)
- "citizen developer AI tools" enterprise adoption
- Gartner, Forrester, IDC reports on citizen development and AI
- Low-code/no-code AI platform market analysis

Log every source consulted in `source-log.md`.

- [ ] **Step 2: Research governance challenges in citizen development**

Search for:
- "citizen development governance challenges"
- "shadow IT AI" enterprise risk
- "low-code governance framework"
- Industry analyst warnings about ungoverned citizen development

Log every source consulted in `source-log.md`.

- [ ] **Step 3: Research platform landscape**

Search for:
- Major AI citizen development platforms and their market positioning
- Microsoft Copilot Studio adoption and market reception
- Comparison articles and analyst evaluations
- Emerging platforms (2025-2026)

Log every source consulted in `source-log.md`.

- [ ] **Step 4: Draft general market landscape section**

Write the first half of Section 3 (Market Landscape) covering:
- Market definition: what "AI citizen development" means in practice
- Adoption trends: how widespread is this, who's doing it
- Key platforms: overview of the major players
- Governance gap: what analysts say about the risks

Save to `docs/research/ai-citizen-development/drafts/03-market-landscape.md`. Start with the general market section; leave a placeholder for the higher-ed subsection.

Tone: data-driven, neutral, cite specific numbers where available. Flag any claims that are sourced from paywalled reports with `[PAYWALLED]` so Ron can decide whether to pursue institutional access.

- [ ] **Step 5: Commit**

```bash
git add docs/research/ai-citizen-development/
git commit -m "Draft general market landscape for AI citizen development"
```

---

### Task 3: Market Landscape Research — Higher Education

**Files:**
- Update: `docs/research/ai-citizen-development/drafts/03-market-landscape.md`
- Update: `docs/research/ai-citizen-development/sources/source-log.md`

- [ ] **Step 1: Research EDUCAUSE and higher-ed specific data**

Search for:
- EDUCAUSE Horizon Report — AI and citizen development mentions
- EDUCAUSE Review articles on citizen development, shadow AI, AI governance in higher ed
- "AI citizen development higher education"
- "university AI governance policy"
- Higher ed CIO surveys on AI adoption and governance

Log every source consulted in `source-log.md`.

- [ ] **Step 2: Research university AI policies**

Search for:
- Published university AI policies and acceptable use frameworks
- "university AI acceptable use policy" examples
- Institutional approaches to governing employee AI tool usage
- FERPA-specific AI guidance from universities

Log every source consulted in `source-log.md`.

- [ ] **Step 3: Draft higher-ed market landscape subsection**

Add to `docs/research/ai-citizen-development/drafts/03-market-landscape.md`:
- Higher-ed adoption trends: where are universities on this?
- Common approaches: what policies and platforms are universities using?
- The gap: what's missing in higher-ed specific solutions?
- Shadow AI in higher ed: any published data on scope?

- [ ] **Step 4: Commit**

```bash
git add docs/research/ai-citizen-development/
git commit -m "Add higher education market landscape section"
```

---

### Task 4: Compliance and Governance Research

**Files:**
- Create: `docs/research/ai-citizen-development/drafts/05-compliance-governance.md`
- Update: `docs/research/ai-citizen-development/sources/source-log.md`

- [ ] **Step 1: Research FERPA guidance on AI tools**

Search for:
- US Department of Education FERPA guidance on AI (2024-2026)
- "FERPA AI tools" guidance and interpretation
- "FERPA student data third party AI"
- PTAC (Privacy Technical Assistance Center) guidance on AI/ML
- Any enforcement actions related to AI and student data

Log every source consulted in `source-log.md`.

- [ ] **Step 2: Research AI model governance frameworks**

Search for:
- "AI model governance higher education"
- Data classification frameworks applied to AI (which data tiers can citizen tools access?)
- LLM API governance: controlling which models citizen-built tools can call
- "AI data loss prevention" — how to prevent PII from flowing to third-party models

Log every source consulted in `source-log.md`.

- [ ] **Step 3: Research published institutional AI governance frameworks**

Search for:
- University AI governance frameworks (specific published examples)
- "responsible AI framework higher education"
- AI governance models from comparable regulated industries
- Governance templates or maturity models for citizen AI development

Log every source consulted in `source-log.md`.

- [ ] **Step 4: Draft compliance and governance section**

Write Section 5 (Compliance and Governance Analysis) covering:
- FERPA requirements as they apply to citizen-built AI tools
- The specific risk: student PII flowing through unvetted third-party services
- AI model governance: controlling which LLMs/APIs citizen tools can access (API allow-listing, model access controls, data routing policies)
- Data classification: which data tiers are appropriate for citizen development
- Published governance frameworks from peer institutions
- What "governed enablement" requires from a compliance perspective

Save to `docs/research/ai-citizen-development/drafts/05-compliance-governance.md`.

- [ ] **Step 5: Commit**

```bash
git add docs/research/ai-citizen-development/
git commit -m "Draft compliance and governance analysis"
```

---

### Task 5: Phase 1 Review Checkpoint

- [ ] **Step 1: Review Phase 1 deliverables for completeness**

Read both draft files:
- `docs/research/ai-citizen-development/drafts/03-market-landscape.md`
- `docs/research/ai-citizen-development/drafts/05-compliance-governance.md`

Check against spec requirements. Identify any gaps or thin areas.

- [ ] **Step 2: Create a Phase 1 findings summary for Ron**

Write a concise summary (1-2 pages) of key findings from Phase 1:
- Top 3-5 market landscape takeaways
- Top 3-5 compliance/governance takeaways
- Paywalled sources that Ron should consider accessing
- Areas where evidence was thin
- Anything surprising that may change the approach for later phases

Save to `docs/research/ai-citizen-development/drafts/phase-1-summary.md`.

- [ ] **Step 3: Present summary to Ron for validation**

Ask Ron:
- Do these findings align with what you're seeing at BYU-Idaho?
- Are there specific angles you want me to dig deeper on in Phase 2?
- Any paywalled sources worth pursuing through institutional access?

- [ ] **Step 4: Commit**

```bash
git add docs/research/ai-citizen-development/
git commit -m "Complete Phase 1: market landscape and compliance research"
```

---

## Chunk 2: Phase 2 — Case Studies

### Task 6: University Case Studies — Successes

**Files:**
- Create: `docs/research/ai-citizen-development/drafts/04-case-studies.md`
- Update: `docs/research/ai-citizen-development/sources/source-log.md`

- [ ] **Step 1: Search for university citizen development success stories**

Search for:
- "university citizen development success" case studies
- "higher education AI citizen developer program"
- "university Copilot Studio" deployment case studies
- "university low-code AI" success stories
- EDUCAUSE case studies on citizen development
- Conference proceedings (EDUCAUSE, Internet2) mentioning citizen development programs

Prioritize peer institutions: teaching-focused, comparable size (~30,000-50,000 students), religiously affiliated, resource-constrained IT.

Log every source consulted in `source-log.md`.

- [ ] **Step 2: Search for enterprise/regulated-industry success stories**

Search for:
- "enterprise citizen development success" case study
- "healthcare citizen development AI" (regulated industry parallel)
- "government agency citizen development" (compliance-heavy parallel)
- "K-12 AI citizen development" (education sector parallel)

Log every source consulted in `source-log.md`.

- [ ] **Step 3: Draft success case studies**

For each documented case, use the structured template:
- **Institution/Organization:** Name and relevant context (size, sector, constraints)
- **What They Did:** Specific program or initiative
- **Platform/Approach:** Tools and technologies used
- **Governance Model:** How they governed citizen development
- **Outcome:** Measurable results where available
- **Lessons Learned:** What worked and why

Save to `docs/research/ai-citizen-development/drafts/04-case-studies.md` under a "Success Cases" heading.

If university-specific cases are thin, clearly label the regulated-industry cases as analogues and explain why they're relevant to BYU-Idaho's situation.

- [ ] **Step 4: Commit**

```bash
git add docs/research/ai-citizen-development/
git commit -m "Draft success case studies for citizen development"
```

---

### Task 7: Case Studies — Failures and Cautionary Tales

**Files:**
- Update: `docs/research/ai-citizen-development/drafts/04-case-studies.md`
- Update: `docs/research/ai-citizen-development/sources/source-log.md`

- [ ] **Step 1: Search for citizen development failures**

Search for:
- "citizen development failed" OR "citizen development problems"
- "shadow IT AI" breach OR violation OR incident
- "FERPA violation AI" or "FERPA breach student data AI"
- "low-code governance failure"
- "ungoverned automation" failure stories
- "Power Automate governance" challenges and failures (directly relevant to BYU-Idaho's history)

Log every source consulted in `source-log.md`.

- [ ] **Step 2: Search for data privacy incidents from AI tools**

Search for:
- AI-related data breaches in education or healthcare
- Third-party AI tool data exposure incidents
- Compliance enforcement actions related to employee use of unsanctioned AI
- Shadow AI risk assessments from consulting firms

Log every source consulted in `source-log.md`.

- [ ] **Step 3: Draft failure case studies**

For each documented case, use the same structured template. Add to `docs/research/ai-citizen-development/drafts/04-case-studies.md` under a "Cautionary Tales" heading.

Include a synthesis subsection: "Common Failure Patterns" — what themes emerge across the failures? (Likely: lack of governance, no data classification, no ownership model, no maintenance plan, shadow IT filling a governance vacuum.)

- [ ] **Step 4: Commit**

```bash
git add docs/research/ai-citizen-development/
git commit -m "Draft failure case studies and cautionary tales"
```

---

### Task 8: Phase 2 Review Checkpoint

- [ ] **Step 1: Review case studies for completeness and balance**

Read `docs/research/ai-citizen-development/drafts/04-case-studies.md`. Check:
- Are there at least 3-5 cases on each side (success/failure)?
- Are cases well-sourced with verifiable details?
- Is the balance fair? (Not skewed toward fear or hype)
- Are the "Common Failure Patterns" synthesis insights useful for the Decision Framework?

- [ ] **Step 2: Flag evidence gaps**

If university-specific cases are thin, document this honestly in the draft with a note like: "Published university case studies on AI citizen development are limited as of early 2026. The following cases from comparable regulated industries are included as analogues."

- [ ] **Step 3: Present case study summary to Ron**

Brief Ron on:
- Number and quality of cases found
- Key patterns from successes and failures
- Any cases that feel especially relevant to BYU-Idaho
- Evidence gaps

- [ ] **Step 4: Commit**

```bash
git add docs/research/ai-citizen-development/
git commit -m "Complete Phase 2: case studies with review"
```

---

## Chunk 3: Phase 3 — Platform Evaluation

### Task 9: Platform Research — Microsoft Copilot Studio and Power Platform

**Files:**
- Create: `docs/research/ai-citizen-development/drafts/06-platform-evaluation.md`
- Update: `docs/research/ai-citizen-development/sources/source-log.md`

Microsoft is the front-runner given BYU-Idaho's existing Azure infrastructure. Research both Copilot Studio specifically and the broader Power Platform.

- [ ] **Step 1: Research Copilot Studio capabilities and governance**

Search for:
- Microsoft Copilot Studio current capabilities, pricing, and licensing (2025-2026)
- Copilot Studio governance features (DLP policies, environment controls, audit logs)
- Copilot Studio in education — any documented deployments
- "Copilot Studio" reviews and analyst assessments
- Known limitations and pain points (Ron noted it's "difficult to use even for technical users")

Use Context7 to check Microsoft's latest Copilot Studio documentation.

Log every source consulted in `source-log.md`.

- [ ] **Step 2: Research Power Platform governance capabilities**

Search for:
- Power Platform Center of Excellence (CoE) toolkit
- Power Platform DLP policies and environment strategy
- Power Platform governance in higher education
- Power Platform admin controls for citizen development

Log every source consulted in `source-log.md`.

- [ ] **Step 3: Draft Microsoft platform evaluation**

Evaluate against BYU-Idaho criteria:
| Criterion | Assessment |
|-----------|------------|
| FERPA compliance capability | |
| Admin governance controls | |
| Maintenance burden on IT | |
| Learning curve for non-technical users | |
| Integration with existing Azure infrastructure | |

Include: licensing costs, strengths, weaknesses, and fit for BYU-Idaho specifically.

Save to `docs/research/ai-citizen-development/drafts/06-platform-evaluation.md`.

- [ ] **Step 4: Commit**

```bash
git add docs/research/ai-citizen-development/
git commit -m "Draft Microsoft Copilot Studio and Power Platform evaluation"
```

---

### Task 10: Platform Research — n8n (Already Deployed)

**Files:**
- Update: `docs/research/ai-citizen-development/drafts/06-platform-evaluation.md`
- Update: `docs/research/ai-citizen-development/sources/source-log.md`

n8n is already deployed at BYU-Idaho (n8n.byui.edu). Evaluate it specifically as a citizen development platform, not just as the automation tool IT already uses.

- [ ] **Step 1: Research n8n as a citizen development platform**

Search for:
- n8n multi-user governance features (RBAC, environment isolation, audit trails)
- n8n enterprise features relevant to citizen development
- n8n AI capabilities (AI nodes, LLM integration, agent building)
- "n8n citizen development" or "n8n non-technical users"
- n8n learning curve for non-technical users

Use Context7 to check n8n's latest documentation on governance and enterprise features.

Log every source consulted in `source-log.md`.

- [ ] **Step 2: Assess n8n's citizen development fit**

Key questions to answer:
- Can n8n's RBAC and project isolation support multiple citizen developers safely?
- Can IT enforce data access restrictions (prevent citizen workflows from accessing FERPA data)?
- What's the realistic learning curve for a non-technical faculty or staff member?
- What's the maintenance burden? (IT already runs it — but scaling to citizen developers is different)
- Can n8n enforce which AI models/APIs citizen workflows use?

- [ ] **Step 3: Draft n8n evaluation**

Add to `docs/research/ai-citizen-development/drafts/06-platform-evaluation.md` using the same criteria table. Be honest about both the advantage (already deployed, already understood by IT) and the limitations.

- [ ] **Step 4: Commit**

```bash
git add docs/research/ai-citizen-development/
git commit -m "Draft n8n platform evaluation for citizen development"
```

---

### Task 11: Platform Research — Alternative Platforms

**Files:**
- Update: `docs/research/ai-citizen-development/drafts/06-platform-evaluation.md`
- Update: `docs/research/ai-citizen-development/sources/source-log.md`

Research alternatives beyond the two front-runners. Include Lovable Enterprise (since shadow AI users are already on Lovable), and other candidates from the spec.

- [ ] **Step 1: Research Lovable Enterprise**

Search for:
- Lovable enterprise/team features, governance controls
- Lovable pricing and licensing for organizations
- Lovable data privacy and compliance posture
- Whether Lovable can be self-hosted or is SaaS-only

Log every source consulted in `source-log.md`.

- [ ] **Step 2: Research Retool, Appian, and ServiceNow App Engine**

For each platform, search for:
- AI citizen development capabilities
- Governance and admin controls
- Pricing model (relevant for a university budget)
- Higher education or regulated industry deployments
- Learning curve for non-technical users

Log every source consulted in `source-log.md`.

- [ ] **Step 3: Research any additional platforms surfaced during earlier research**

If Phases 1-2 surfaced platforms not in the original candidate list, research them here using the same criteria.

- [ ] **Step 4: Draft alternative platform evaluations**

Add to `docs/research/ai-citizen-development/drafts/06-platform-evaluation.md`. For platforms that clearly don't fit BYU-Idaho's needs, a brief "considered and excluded" note is sufficient — don't waste pages on irrelevant options. Include a "considered and excluded" entry for Base44 (actively used by shadow AI users at BYU-Idaho but likely lacks enterprise governance features).

- [ ] **Step 5: Create comparative summary table**

Add a summary comparison matrix at the top of the platform evaluation draft:

| Criterion | Copilot Studio | Power Platform | n8n | Lovable Enterprise | Retool | Appian | ServiceNow |
|-----------|---------------|----------------|-----|-------------------|--------|--------|------------|
| FERPA compliance | | | | | | | |
| Governance controls | | | | | | | |
| IT maintenance burden | | | | | | | |
| Non-technical user UX | | | | | | | |
| Azure integration | | | | | | | |
| Cost (annual estimate) | | | | | | | |
| Overall fit for BYU-Idaho | | | | | | | |

Use a simple rating: Strong / Adequate / Weak / Unknown.

- [ ] **Step 6: Commit**

```bash
git add docs/research/ai-citizen-development/
git commit -m "Draft alternative platform evaluations with comparison matrix"
```

---

### Task 12: Phase 3 Review Checkpoint

- [ ] **Step 1: Review platform evaluation for fairness and completeness**

Read `docs/research/ai-citizen-development/drafts/06-platform-evaluation.md`. Check:
- Is the evaluation criteria-driven, not vendor-biased?
- Are the assessments honest about limitations?
- Does the comparison matrix clearly differentiate the candidates?
- Is the n8n evaluation honest about the gap between "IT automation tool" and "citizen development platform"?

- [ ] **Step 2: Present platform summary to Ron**

Brief Ron on:
- Top 2-3 platform recommendations and why
- Any platforms that were surprisingly strong or weak
- Whether the Copilot Studio assessment matches his team's experience
- Cost implications

- [ ] **Step 3: Commit**

```bash
git add docs/research/ai-citizen-development/
git commit -m "Complete Phase 3: platform evaluation with review"
```

---

## Chunk 4: Phase 4 — Ron's Input Session and Situational Assessment

### Task 13: Prepare for Ron's Input Session

**Files:**
- Create: `docs/research/ai-citizen-development/drafts/phase-1-3-summary.md`

- [ ] **Step 1: Create a consolidated findings brief**

Synthesize key findings from Phases 1-3 into a single document that Ron can review quickly:
- Market landscape key takeaways (5-7 bullets)
- Case study patterns — what worked and what didn't (5-7 bullets)
- Platform evaluation summary — top candidates and their fit (comparison matrix)
- Compliance requirements — what governance must look like (5-7 bullets)
- Open questions for Ron
- Evidence gaps flagged

Save to `docs/research/ai-citizen-development/drafts/phase-1-3-summary.md`.

- [ ] **Step 2: Prepare structured questions for Ron**

Prepare specific questions to fill the Situational Assessment:
1. Shadow AI incidents: can you describe specific cases? (Anonymized for the briefing)
2. Shadow AI scope: how widespread is this? Estimated number of employees/faculty using unsanctioned tools, which departments are most active, and what types of data (student PII, grades, HR data) are flowing through these tools?
3. Power Automate history: what specifically went wrong? How many orphaned automations?
4. IT resource constraints: how many FTEs? What's the current capacity situation?
5. Political dynamics: who are the key stakeholders pushing for citizen development? What departments?
6. What has Joe already communicated to the president on this topic?
7. Are there any compliance incidents that have already occurred from shadow AI?
8. Does BYU-Idaho have a formal data classification policy? If so, how is it enforced, and does it address AI tools specifically?
9. What's the president's general disposition — is he tech-forward? Risk-averse?

- [ ] **Step 3: Commit**

```bash
git add docs/research/ai-citizen-development/
git commit -m "Prepare consolidated findings brief for Ron's input session"
```

---

### Task 14: Ron's Input Session — Draft Situational Assessment

**Files:**
- Create: `docs/research/ai-citizen-development/drafts/02-situational-assessment.md`

This task is interactive — it requires Ron's direct input.

- [ ] **Step 1: Walk Ron through the consolidated findings brief**

Present the Phase 1-3 summary. Ask for validation and corrections.

- [ ] **Step 1.5: Validate case studies and platform assessments with Ron**

Before moving to the Situational Assessment, briefly review:
- Do the case studies feel relevant to BYU-Idaho's situation?
- Does the platform evaluation match what his team has experienced (especially Copilot Studio)?
- Any cases or platforms to drop or prioritize?

This ensures Ron's institutional perspective shapes the research before it gets baked into the Decision Framework.

- [ ] **Step 2: Gather institutional context from Ron**

Ask the structured questions from Task 13 Step 2. Record Ron's answers.

- [ ] **Step 3: Draft the Situational Assessment**

Write Section 2 (Situational Assessment) based on Ron's input, covering:
- The current shadow AI situation (specific but anonymized)
- The Power Automate precedent and what it taught BYU-Idaho
- IT resource constraints and what they mean for governance capacity
- The leadership pressure and what's driving it
- The compliance exposure that exists right now

Save to `docs/research/ai-citizen-development/drafts/02-situational-assessment.md`.

- [ ] **Step 4: Ron reviews the Situational Assessment draft**

Present draft to Ron. Iterate until he confirms it accurately represents BYU-Idaho's situation.

- [ ] **Step 5: Commit**

```bash
git add docs/research/ai-citizen-development/
git commit -m "Draft situational assessment from Ron's institutional input"
```

---

## Chunk 5: Phase 5 — Synthesis and Final Briefing

### Task 15: Build the Decision Framework

**Files:**
- Create: `docs/research/ai-citizen-development/drafts/07-decision-framework.md`

- [ ] **Step 1: Draft Option A — Restrict and Remediate**

Write up the "lock it down" option:
- What it entails: remediate existing shadow AI, enforce acceptable use, no citizen development program
- Existing tool disposition: block Base44, Lovable, and other unsanctioned services; migrate or sunset any citizen-built applications
- Cost estimate: enforcement FTE, remediation effort, tool blocking
- Risk profile: addresses compliance immediately, but pressure continues and shadow AI may go deeper underground
- Success metrics: reduction in unsanctioned tool usage, zero FERPA incidents
- Implementation requirements: policy enforcement, tool discovery/blocking, communication plan
- Change management: communicate rationale to stakeholders, provide alternative channels for innovation requests, manage pushback

- [ ] **Step 2: Draft Option B — Governed Enablement**

Write up the middle path:
- What it entails: sandboxed platform, training program, approval workflow, IT oversight, change management
- Existing tool disposition: migrate viable citizen-built apps to sanctioned platform; sunset non-compliant ones; offer transition support
- Cost estimate: platform licensing, governance FTE (fractional or full), training development, champion program. Present as ranges with confidence levels where evidence is thin.
- Risk profile: moderate — compliance addressed through governance, but governance itself requires sustained investment
- Success metrics: citizen developer adoption rate, audit pass rate, time-to-solution for citizen projects, zero FERPA incidents, reduction in shadow AI
- Implementation requirements: platform selection, governance framework, data classification policy, training curriculum, champion identification, approval workflow design
- Change management plan: training programs, departmental champions, documentation, escalation paths

- [ ] **Step 3: Draft Option C — Open Access with Guidelines**

Write up the lighter-touch option:
- What it entails: provide access to approved tools with usage guidelines but minimal approval gates
- Existing tool disposition: evaluate and potentially bless some existing tools (Lovable, Base44) with usage guidelines; add to approved list or provide alternatives
- Cost estimate: licensing, lightweight documentation, minimal governance FTE
- Risk profile: highest — faster enablement but relies on user compliance with guidelines, limited enforcement
- Success metrics: adoption rate, innovation output, incident count (reactive)
- Implementation requirements: tool provisioning, acceptable use policy, basic training, incident response plan
- Change management: lightweight — communicate approved tools list, provide self-service training resources

- [ ] **Step 4: Create comparison table**

| Dimension | Option A: Restrict | Option B: Governed | Option C: Open Access |
|-----------|-------------------|-------------------|----------------------|
| Compliance risk | | | |
| Innovation enablement | | | |
| IT resource requirement | | | |
| Estimated annual cost | | | |
| Shadow AI impact | | | |
| Maintenance burden | | | |
| Time to implement | | | |
| Reversibility | | | |

- [ ] **Step 5: Commit**

```bash
git add docs/research/ai-citizen-development/
git commit -m "Draft decision framework with three options"
```

---

### Task 16: Draft the Recommendation

**Files:**
- Create: `docs/research/ai-citizen-development/drafts/08-recommendation.md`

- [ ] **Step 1: Draft the recommendation**

Based on the full body of research, draft a clear recommendation. This will almost certainly be Option B (Governed Enablement) given the constraints, but the recommendation must be earned by the evidence, not assumed.

Structure:
1. State the recommendation clearly in one sentence
2. Justify it with evidence from the research (2-3 paragraphs)
3. Acknowledge what it requires (investment, sustained governance)
4. Acknowledge what it does NOT solve (can't eliminate all risk, requires ongoing IT involvement)
5. Suggest a phased approach: pilot with one department, then expand
6. Close with: the final decision belongs to leadership; this recommendation reflects the research findings

Tone: confident but not presumptuous. The CIO is presenting to the president — the recommendation should feel like it comes from someone who's done the homework.

- [ ] **Step 2: Commit**

```bash
git add docs/research/ai-citizen-development/
git commit -m "Draft recommendation section"
```

---

### Task 17: Write the Executive Summary

**Files:**
- Create: `docs/research/ai-citizen-development/drafts/01-executive-summary.md`

Written LAST because it distills everything.

- [ ] **Step 1: Draft the Executive Summary**

One page maximum. Structure:
1. **The situation** (2-3 sentences): BYU-Idaho faces pressure to enable AI citizen development while managing active shadow AI and FERPA compliance obligations
2. **What we found** (3-4 sentences): key findings from market research, case studies, and compliance analysis
3. **The options** (3 sentences): one sentence per option with its core trade-off
4. **The recommendation** (1-2 sentences): what we recommend and why

This is the page the president will actually read. Every word must earn its place.

- [ ] **Step 2: Commit**

```bash
git add docs/research/ai-citizen-development/
git commit -m "Draft executive summary"
```

---

### Task 18: Assemble the Full Briefing

**Files:**
- Create: `docs/research/ai-citizen-development/final/ai-citizen-development-briefing.md`

- [ ] **Step 1: Assemble all sections into the final document**

Combine all draft sections in order:
1. Executive Summary
2. Situational Assessment
3. Market Landscape
4. Case Studies
5. Compliance and Governance Analysis
6. Platform Evaluation
7. Decision Framework
8. Recommendation

Add:
- Title page with document metadata (date, author, audience, classification)
- Table of contents
- Appendix A: Source log (from `sources/source-log.md`)
- Appendix B: Platform comparison matrix (full version)

Save to `docs/research/ai-citizen-development/final/ai-citizen-development-briefing.md`.

- [ ] **Step 2: Review for consistency and flow**

Read the assembled document end-to-end. Check:
- Do section transitions flow naturally?
- Are there contradictions between sections?
- Is terminology consistent throughout?
- Does the Executive Summary accurately reflect the body?
- Is the total length within the 15-25 page target?

- [ ] **Step 3: Commit**

```bash
git add docs/research/ai-citizen-development/
git commit -m "Assemble complete first draft of AI citizen development briefing"
```

---

## Chunk 6: Phase 6 — Review and Polish

### Task 19: Ron's Full Draft Review

This task is interactive — it requires Ron's review.

- [ ] **Step 1: Present the full draft to Ron**

Share `docs/research/ai-citizen-development/final/ai-citizen-development-briefing.md` and ask Ron to review with these questions:
- Does the Situational Assessment accurately represent BYU-Idaho?
- Are the case studies relevant and credible?
- Does the platform evaluation match your team's experience?
- Is the Decision Framework balanced and fair to all options?
- Is the recommendation defensible?
- Is the tone right for Joe presenting to the president?

- [ ] **Step 2: Incorporate Ron's feedback**

Make revisions based on Ron's review. This may require multiple passes.

- [ ] **Step 3: Commit**

```bash
git add docs/research/ai-citizen-development/
git commit -m "Incorporate Ron's review feedback on briefing"
```

---

### Task 20: Final Polish and Delivery

**Files:**
- Update: `docs/research/ai-citizen-development/final/ai-citizen-development-briefing.md`

- [ ] **Step 1: Spec compliance check**

Verify the final document against the spec's "Format and Tone" requirements:
- [ ] Target 15-25 pages? Check actual length.
- [ ] Heavy use of tables and comparison matrices? (Not prose-heavy)
- [ ] Professional, direct, neutral tone? (Not academic, not a vendor pitch)
- [ ] Data-driven, not rhetorical? (Claims backed by evidence)
- [ ] Acknowledges legitimate desire to enable innovation? (Not a "just say no" document)
- [ ] Governed enablement option is genuinely viable? (Not a straw man)
- [ ] Executive Summary fits on one page?

Fix any violations before proceeding.

- [ ] **Step 2: Copy edit pass**

Review the full document for:
- Grammar and punctuation
- Consistent formatting (headings, tables, bullets)
- Citation consistency
- Redundancy elimination
- Professional tone throughout

- [ ] **Step 3: Verify all claims are sourced**

Cross-reference every factual claim against `sources/source-log.md`. Flag any unsourced claims for removal or sourcing.

- [ ] **Step 4: Final commit**

```bash
git add docs/research/ai-citizen-development/
git commit -m "Final polish on AI citizen development briefing — ready for delivery"
```

- [ ] **Step 5: Update README with completion status**

Update `docs/research/ai-citizen-development/README.md` — mark all phases as complete, note the final document location.

- [ ] **Step 6: Generate PDF if needed**

If Joe needs a PDF for the president, convert the final Markdown to PDF. Confirm with Ron whether Markdown or PDF is the preferred delivery format.

- [ ] **Step 7: Notify Ron that the briefing is ready for Joe**
