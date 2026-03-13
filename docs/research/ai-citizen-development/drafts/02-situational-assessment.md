# Section 2: BYU-Idaho Situational Assessment

**Prepared for:** BYU-Idaho CIO Office
**Author:** Ron Vallejo, AI Solutions Architect
**Date:** 2026-03-13
**Status:** Draft -- pending Ron's review
**Classification:** Internal -- IT Leadership

---

## Why This Briefing Exists

In early 2026, President Meredith asked the CIO for information about AI citizen development -- the practice of enabling non-IT employees to build their own AI-powered applications and automations. The request comes in the context of growing institutional demand, increasing shadow AI activity, and the president's own designation of AI as a top strategic priority for BYU-Idaho.

This section grounds the briefing in BYU-Idaho's specific institutional reality: what is already happening, what governance exists, where the gaps are, and what constraints shape the available options.

---

## The Shadow AI Problem

### It Is Not Hypothetical

Shadow AI at BYU-Idaho is not a theoretical risk discussed in analyst reports. It is an active, documented condition.

**Case: MKTG 170 Sales EQ Learning Platform (Base44)**

A faculty member's MKTG 170 course deployed an AI-powered interactive learning application built by a student using Base44, an unapproved third-party no-code platform. The application taught sales emotional intelligence concepts through quizzes, AI-coached scenarios, and graded assignments.

A security assessment conducted by IT identified **14 findings (5 critical, 5 high, 4 medium)**:

- **Student education records stored on unapproved infrastructure.** Student names, institutional @byui.edu email addresses, assignment scores, letter grades, and performance metrics were created and stored on Base44's servers. No data processing agreement exists between BYU-Idaho and Base44.
- **Student grades exposed to all class members.** A student completions page retrieved all student records and displayed them in a table with no role-based access control. Any authenticated user could view and download (via CSV export) every other student's name, email, scores, and letter grades -- a direct FERPA violation.
- **Education records sent to an unknown LLM provider.** Student reflection text, quiz scores, and coaching responses were embedded in prompts sent to Base44's LLM integration (`InvokeLLM`). The underlying LLM provider is not identified in the code. Data processing location, retention policies, and model training practices are unknown.
- **Canvas LMS API token with grade-writing privileges stored on Base44's servers.** The application submitted grades to Canvas through a serverless function running on Base44's infrastructure. An API token capable of modifying student grades in BYU-Idaho's Canvas LMS existed on a third-party server outside institutional control.
- **Public leaderboard displayed student PII without consent.** A ranked leaderboard displayed all students' full names, institutional emails, and aggregated performance scores with no opt-in mechanism.
- **Behavioral tracking transmitted to Base44.** Every page navigation by authenticated students was logged to Base44's servers, creating behavioral profiles on unapproved infrastructure.

This case illustrates the core dynamic: a well-intentioned project built to enhance a course created significant FERPA exposure because it bypassed every institutional safeguard -- procurement, security review, legal review, data governance, and IT oversight. The student who built it and the faculty member who deployed it were not acting maliciously. They were filling a gap with the tools available to them.

### Scope of Shadow AI Activity

The MKTG 170 case is not an isolated incident. Employees and students across campus are using unapproved AI tools -- including Base44, Lovable, and individual API keys to commercial LLM providers -- to build applications and automations that process institutional data. The prevalence of these incidents has increased as AI tools have become more capable and accessible.

This pattern is consistent with broader trends. EDUCAUSE's 2024 survey found that 56% of higher education workers use AI tools not provided by their institutions. IBM's 2024 research found that 20% of organizations have experienced an AI-related data breach, with shadow AI as the leading contributor.

---

## The Power Automate Precedent

BYU-Idaho has direct institutional experience with the consequences of ungoverned citizen development. Previous efforts to enable employees to build their own automations using Microsoft Power Automate produced a pattern that the research identifies as the most common failure mode in citizen development programs:

1. Employees created flows to solve immediate operational problems.
2. Solutions worked well and became embedded in business processes.
3. Original creators changed roles, left the university, or lost bandwidth to maintain their solutions.
4. Solutions broke due to API changes, credential expiration, or platform updates.
5. IT inherited business-process-critical automations they did not build, did not fully understand, and could not easily replace.

The result is an ongoing governance challenge. Power Automate remains difficult to govern with existing IT resources, and the tool's complexity exceeds what most non-technical employees can manage independently. This experience directly informs the risk assessment for any future citizen development program: without dedicated governance, the same pattern will repeat -- at greater scale and with higher stakes, because AI-powered applications process more sensitive data than simple workflow automations.

---

## What BYU-Idaho Already Has

### Existing Governance Infrastructure

BYU-Idaho has more AI governance infrastructure in place than most peer institutions. The research found that only 9% of higher education institutions consider their cybersecurity and privacy policies adequate for AI risks (EDUCAUSE, 2024). BYU-Idaho is ahead of that baseline:

**Data Classification Policy (approved January 2023, CES-aligned):**
- **Public:** Information approved for public release. Use with any AI tool.
- **Internal:** Moderately sensitive information accessible within the university. Use only with BYU-Idaho-approved tools.
- **Confidential:** Highly sensitive information (salary, performance reviews, ecclesiastical endorsements). Requires approval.
- **Restricted:** Highest sensitivity (SSNs, credit cards, medical records, passwords). Prohibited from all AI tools.

Unclassified data defaults to Confidential -- a conservative and appropriate posture.

**AI-Specific Data Usage Guidelines:**
BYU-Idaho has published a modified data classification system specifically for AI tool usage, with a step-by-step decision guide:
1. Is the AI tool approved by the AI Committee?
2. What type of data will you put into the AI tool?
3. Are you using the BYU-Idaho-authenticated version?

This framework explicitly addresses the model training risk ("Are you using the BYUI-authenticated version of this tool that prevents AI models from training on the data?") and routes PII use cases through the AI Committee for approval.

**Approved AI Tools:**
- Microsoft Copilot Chat (free M365 version, authenticated) -- approved for Public and Internal data
- Google Gemini (free Workspace version, authenticated) -- approved for Public and Internal data
- ChatGPT Edu (limited CES-managed licenses) -- approved for Public, Internal, and PII (with approval)

**AI Committee:** A cross-functional governance body that reviews tool requests and approves PII usage with AI tools. Employees can submit formal requests for tools or use cases not covered by existing approvals.

### The Critical Gap

The existing governance framework answers: **"What AI tools can employees use, and with what data?"**

It does not answer: **"Can employees build applications with AI tools, and under what governance?"**

The data usage guide addresses putting data *into* AI tools. Citizen development means employees building applications that *process* data through AI tools they've configured -- creating new data flows, new storage locations, new third-party relationships, and new maintenance obligations. That is a fundamentally different risk surface than an employee using ChatGPT to summarize meeting notes.

The MKTG 170 case demonstrates this gap precisely. The existing governance would have caught an employee *using* Base44 to analyze student data (Step 1: "Is the AI tool approved?" -- No). But it did not prevent an employee from *building an application* on Base44 that collected, stored, graded, and displayed student records through multiple unapproved third parties.

---

## Strategic Context

### President Meredith's AI Priorities

President Meredith has established AI as a top strategic priority for BYU-Idaho, with three student-centered focuses articulated in his January 2026 State of the University address:

1. **"Advance knowledge" and "enhance learning"** -- AI as a learning multiplier (intelligent tutoring, personalized learning, content adaptation)
2. **Develop workforce readiness** -- preparing students for AI-augmented careers (AI literacy, hands-on tool exposure, industry-relevant skills)
3. **Facilitate student support and advising** -- scaling human connection, not replacing it (proactive outreach, advisor capacity multiplication)

This framing is explicitly **student-centered, not cost-reduction or efficiency theater.** The president is an advocate for AI adoption, not a skeptic. This means the briefing's job is not to convince leadership that AI matters -- it is to present the CIO with clear options for enabling AI development responsibly.

### The Stakeholder Pressure

Internal pressure for citizen development comes from multiple directions:

- **Institutional Research leadership** and AI governance stakeholders are actively advocating for citizen development capabilities.
- **Department leaders and faculty** see the gap between what shadow AI tools can do and what IT-approved tools offer.
- **The shadow AI incidents themselves** have become an argument for enablement: "Look what shadow AI has produced -- open up citizen development so we can prevent these issues by giving people governed tools."

The stakeholder argument is essentially: **shadow AI is the disease, citizen development is the cure.** The research supports this framing -- but only if governance investment accompanies enablement. Without dedicated governance, citizen development replicates the Power Automate experience at higher stakes.

### IT Resource Constraints

IT operates with limited FTE capacity. The current staffing model does not include dedicated resources for citizen development governance -- there is no Center of Excellence, no dedicated platform administration team, and no citizen developer training program. The existing team manages a portfolio of production applications, infrastructure, and operational responsibilities that fully consumes available capacity.

This constraint is the single most important factor in the decision framework. Every option evaluated in this briefing requires some level of IT investment -- the question is how much, and whether that investment is new headcount, reallocation of existing capacity, or acceptance of residual risk.

### The IT Front Door Initiative

The CIO has communicated to the president that IT is actively addressing these issues by making processes and information more accessible. A key initiative is the **IT Front Door** -- a single point of entry for all users to:

- Get help with incidents and requests
- Request project resources
- Submit requests for enterprise software
- Find development resources (software engineering)
- Access information about data classifications, best practices, and approved AI tools

This initiative is foundational. It establishes the governance infrastructure that must exist before citizen development can be enabled responsibly. The IT Front Door creates the "front door" that shadow AI bypasses entirely -- and it does so by making the governed path easier, not by making the ungoverned path harder.

---

## The Decision the CIO Faces

The situational assessment reveals a convergence of pressures:

| Factor | Current State |
|--------|--------------|
| **Presidential priority** | AI is a top strategic priority with student-centered framing |
| **Shadow AI** | Active and documented, with confirmed FERPA exposure |
| **Stakeholder demand** | Internal governance and department leaders pushing for enablement |
| **Existing governance** | Stronger than most peers (data classification, AI Committee, approved tools) -- but addresses tool *usage*, not tool *building* |
| **Historical precedent** | Power Automate citizen development became ungoverned technical debt |
| **IT capacity** | Resource-constrained; no dedicated citizen development governance staffing |
| **CIO positioning** | Building the governance foundation (IT Front Door) as the prerequisite |

The CIO must decide between three options, detailed in Section 7 (Decision Framework):

- **Option A: Restrict and Remediate.** Lock down shadow AI, enforce existing policies, do not enable citizen development. Addresses compliance immediately but does not address demand.
- **Option B: Governed Enablement.** Establish a sandboxed citizen development program with governance, training, approval workflows, and IT oversight. Addresses both compliance and demand but requires sustained investment.
- **Option C: Open Access with Guidelines.** Provide access to approved tools with usage guidelines but minimal approval gates. Fastest enablement but highest risk.

The research, case studies, and platform evaluation all point toward a version of Option B -- but the specific shape of that option depends on BYU-Idaho's willingness to invest in governance. The IT Front Door initiative positions the institution to move toward governed enablement once the foundational infrastructure is in place.
