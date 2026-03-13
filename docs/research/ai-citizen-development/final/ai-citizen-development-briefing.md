# AI Citizen Development at BYU-Idaho: Decision Framework Briefing

**Prepared for:** CIO Office, Brigham Young University-Idaho
**Author:** Ron Vallejo, AI Solutions Architect, BYU-Idaho IT
**Date:** March 2026
**Classification:** Internal -- IT Leadership
**Status:** Draft -- pending CIO review

---

## Table of Contents

1. [Executive Summary](#section-1-executive-summary)
2. [Situational Assessment](#section-2-byu-idaho-situational-assessment)
3. [Market Landscape](#section-3-market-landscape)
4. [Case Studies](#section-4-case-studies)
5. [Compliance and Governance Analysis](#section-5-compliance-and-governance-analysis)
6. [Platform Evaluation](#section-6-platform-evaluation)
7. [Decision Framework](#section-7-decision-framework)
8. [Recommendation](#section-8-recommendation)
9. [Appendix A: Source Log](#appendix-a-source-log)
10. [Appendix B: Platform Comparison Matrix](#appendix-b-platform-comparison-matrix)

---


# Section 1: Executive Summary

**The situation.** President Meredith identified AI as a top-three strategic priority -- to enhance learning, improve workforce readiness, and strengthen student support. Employees have responded by adopting AI-powered tools to build applications on their own, a practice known as *citizen development* (building software applications without formal IT training). This grassroots activity is already underway at BYU-Idaho, but it is happening outside institutional governance, creating immediate compliance risk.

**What we found.** Our research -- spanning 292 sources, 26 case studies, and an evaluation of 9 platforms -- identified three key findings. First, shadow AI is active now: employees are using unvetted platforms such as Base44 and Lovable with individual API keys to build apps that handle student data. A review of the MKTG 170 course built on Base44 produced 14 compliance findings, 5 of them critical, including student grades visible to all class members and education records transmitted to an unknown third-party LLM -- clear FERPA violations. Second, BYU-Idaho's existing governance (4-tier data classification, AI Committee, approved tool list) is ahead of most peers, but it addresses *using* AI, not *building with* AI. Third, no platform on the market today fully combines AI-powered app generation, enterprise-grade governance, and FERPA compliance -- a gap that makes a rush to adoption premature.

**The options.** *Restrict* -- ban unsanctioned AI building tools, which addresses compliance but not the underlying demand driving adoption. *Governed Enablement* -- stand up a governance framework and vetted platform for citizen developers, which addresses both compliance and demand but requires investment. *Open Access* -- allow broad adoption with minimal guardrails, which is fastest but carries the highest risk to student data and institutional standing.

**The recommendation.** We recommend phased governed enablement: remediate active shadow AI immediately, establish a governance foundation, then pilot with 20-50 users over six months before expanding based on measured results. This approach requires 1-2 FTE for a Center of Excellence, $150K-$300K per year in platform licensing, and mandatory FERPA training for all citizen developers. It is the only option that treats AI citizen development as the strategic opportunity the president envisions while protecting the university's obligations to its students.

---

# Section 2: BYU-Idaho Situational Assessment

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

## The Platform Gap

Even if BYU-Idaho resolved every governance, staffing, and policy challenge described above, a fundamental market problem remains: **there is no platform today that responsibly enables AI citizen development the way employees want to use it.**

### What Employees Want vs. What Exists

The shadow AI tools driving demand -- Lovable, Base44, and similar AI app builders -- let users describe what they want in natural language and receive a working application. This is the capability employees are reaching for when they bypass IT. It is fast, intuitive, and produces real results (the MKTG 170 application was functional and pedagogically useful, despite its security failures).

The platform evaluation (Section 6) found that no enterprise-governed platform replicates this experience:

- **Microsoft Copilot Studio** builds chatbots, not applications. It does not generate full-stack apps from natural language. Ron's firsthand assessment that it is "difficult to use even for technical users" is corroborated by community feedback.
- **Power Apps** builds applications but requires manual drag-and-drop construction -- no AI generation. The learning curve is significant for non-technical users.
- **n8n** is a workflow automation tool for technical users, not a citizen development platform.
- **Retool** builds internal tools with AI assistance, but targets a more technical persona than the typical faculty member.
- **Lovable and Base44** provide the user experience employees want, but lack the governance controls, FERPA compliance, and institutional oversight that responsible deployment requires.

### The Market Gap Is Real

No major platform vendor -- including Microsoft -- currently offers a product that combines:
1. Natural language-to-application generation (what makes shadow AI tools attractive)
2. Enterprise governance controls (RBAC, DLP, audit logging, environment isolation)
3. FERPA-compatible data handling (institutional control, contractual protections, data residency)
4. A learning curve accessible to non-technical university employees

This is not a BYU-Idaho problem. It is a market maturity problem. The AI app builder category (Lovable, Base44, Bolt.new) is growing explosively -- Lovable reached $200M ARR and a $6.6B valuation in December 2025 -- but enterprise governance features lag behind the core product experience. The traditional low-code category (Power Platform, ServiceNow) has governance but lacks the AI-native generation capability that drives demand.

### What This Means for the Decision

The platform gap adds a dimension to the CIO's decision that stakeholders may not appreciate:

- **"Just give us Copilot Studio"** does not solve the problem. Copilot Studio does not do what employees are reaching for with Lovable and Base44.
- **"Approve Lovable for institutional use"** does not solve the problem either. Lovable lacks the governance controls required for FERPA compliance, and every generated application becomes an independent maintenance liability.
- **The honest answer is that the market has not yet produced a platform that satisfies both the demand side (easy AI app generation) and the governance side (institutional control and compliance).** This gap will likely close as the AI app builder category matures and adds enterprise features, or as traditional platforms add AI generation capabilities -- but it has not closed yet.

This does not mean BYU-Idaho should wait. It means the institution should pursue a layered strategy (detailed in the Decision Framework) that addresses immediate risks, establishes governance foundations, and positions the university to adopt the right platform when the market catches up. The IT Front Door initiative is the first step in that strategy.

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
| **Platform gap** | No platform combines AI app generation + enterprise governance + FERPA compliance. The market has not caught up to the demand. |

The CIO must decide between three options, detailed in Section 7 (Decision Framework):

- **Option A: Restrict and Remediate.** Lock down shadow AI, enforce existing policies, do not enable citizen development. Addresses compliance immediately but does not address demand.
- **Option B: Governed Enablement.** Establish a sandboxed citizen development program with governance, training, approval workflows, and IT oversight. Addresses both compliance and demand but requires sustained investment.
- **Option C: Open Access with Guidelines.** Provide access to approved tools with usage guidelines but minimal approval gates. Fastest enablement but highest risk.

The research, case studies, and platform evaluation all point toward a version of Option B -- but the specific shape of that option depends on BYU-Idaho's willingness to invest in governance. The IT Front Door initiative positions the institution to move toward governed enablement once the foundational infrastructure is in place.

---

# Section 3: Market Landscape

## AI Citizen Development: Market Overview

### Defining AI Citizen Development

AI citizen development refers to the practice of business users -- employees outside formal IT departments -- building applications, automations, and AI-powered workflows using low-code/no-code (LCNC) platforms. These platforms have evolved from simple drag-and-drop form builders into AI-augmented environments where natural language prompts can generate working applications, integrate data sources, and orchestrate multi-step business processes.

The defining shift in 2024-2026 is the convergence of two trends: the maturing low-code/no-code movement and the rapid proliferation of generative AI capabilities embedded directly into development platforms. The result is that non-technical employees can now build sophisticated tools that previously required professional development teams.

### Market Size and Growth Trajectory

The market is growing rapidly, though analyst estimates vary depending on scope and methodology:

- **Low-code development technologies market**: Forecasted to exceed $30 billion in 2026, with Gartner projecting that by 2029, 80% of application development projects globally will rely on low-code development, up from 15% in 2024.
- **No-code AI platform market**: Valued at approximately $6.56 billion in 2025 (Fortune Business Insights), projected to reach $75.14 billion by 2034 at a CAGR of 31.13%. Mordor Intelligence offers a more conservative estimate of $4.06 billion in 2025, growing to $12.25 billion by 2031.
- **AI app builder segment**: Revenue hit $4.7 billion in 2026, projected to reach $12.3 billion by 2027.
- **Broader low-code platform market**: Projected to grow from $32.8 billion (2025) to $348.6 billion by 2035 at a CAGR of 26.66% (Roots Analysis).

The wide variance in estimates reflects differing definitions of what constitutes "citizen development" versus professional low-code usage. Regardless of exact figures, every major analyst firm agrees the trajectory is steep and sustained.

### Key Adoption Trends

- **Citizen developers outnumber professional developers 4:1** by 2026, according to Gartner -- a fundamental shift in who builds enterprise software.
- **70% of new enterprise applications** are being built using LCNC technologies by 2025-2026.
- **80% of low-code users** will be outside formal IT departments by 2026.
- **75% of large enterprises** will employ at least four low-code/no-code tools by 2026.
- **41% of employees** are now classified as "business technologists" -- workers outside IT who build tech or analytics capabilities.
- **40% of enterprise applications** will feature task-specific AI agents by end of 2026, up from less than 5% in 2025 (Gartner).
- Cost reductions of **40-60%** compared to traditional professional development, with development time cuts of **up to 70%** (Forrester).

---

## Platform Landscape

### Major Players

**Microsoft Power Platform / Copilot Studio**
Microsoft holds the dominant position in enterprise citizen development through its Power Platform ecosystem (Power Apps, Power Automate, Power BI) and the newer Copilot Studio. Power Platform benefits from deep integration with Microsoft 365, Azure, and Dynamics 365 -- an advantage in organizations already invested in the Microsoft ecosystem. Copilot Studio, the AI agent builder, is evolving rapidly. The 2025 release waves added capabilities for building standalone agents, extending Microsoft 365 Copilot, and developing autonomous agents for complex, long-running operations. Microsoft's 2026 roadmap positions Power Platform as moving from simple code suggestions to orchestrating end-to-end tasks across multiple applications. Governance features include Centers of Excellence (CoE) toolkits and environment-level controls. For organizations already on Microsoft, this is the natural starting point.

**ServiceNow App Engine**
ServiceNow's low-code platform is purpose-built for large enterprises focusing on IT service management, workflow automation, and process-driven applications. Its strength lies in tight coupling with ServiceNow's broader ITSM and enterprise service management capabilities. Best suited for organizations where workflow orchestration and service management are primary use cases.

**Appian**
Appian unifies process automation, RPA, case management, and low-code development on a single platform. Its August 2025 release expanded AI availability to FedRAMP environments, positioning it strongly for government and regulated industries. Appian is strongest in process-heavy enterprises where workflow orchestration and compliance are paramount.

**Retool**
Retool positions itself as an AI-native internal tools platform. It connects directly to databases (PostgreSQL, MySQL, MongoDB, BigQuery) and APIs, allowing teams to build dashboards, admin panels, and internal apps using natural language prompts and visual tools. Its Q1 2025 release added multipage architecture and multi-instance releases for proper dev/staging/production workflows. Retool dominates the internal tools segment where small teams build for many users.

**Salesforce Platform**
Salesforce offers low-code capabilities through its Lightning platform and Flow Builder, with Einstein AI integration. Strong in organizations already invested in the Salesforce CRM ecosystem.

### Emerging Entrants (2025-2026)

**Lovable**
Lovable represents a new category of AI-first app builders. In December 2025, Lovable closed a $330 million Series B at a $6.6 billion valuation, reaching $200 million ARR -- signaling explosive market demand for AI-powered application generation. Lovable allows users to build full-stack applications from natural language descriptions, targeting both citizen developers and professional developers seeking rapid prototyping.

**Bolt.new / v0 (Vercel)**
These AI-powered app builders compete directly with Lovable in the "prompt-to-app" space. They represent a fundamental shift from visual drag-and-drop to conversational application development.

**n8n**
n8n is an open-source workflow automation platform (comparable to Zapier or Make) that has carved out a distinct niche for AI-powered workflow automation. Its node-based visual interface allows citizen developers to connect apps, APIs, and services. n8n is particularly notable for its extensibility and support for agentic AI workflows. Its integration with Model Context Protocol (MCP) enables direct access to automations from AI assistants.

**Kissflow / Quixy / Superblocks**
Mid-market and specialty platforms targeting specific organizational needs -- Kissflow for process automation, Quixy for workflow management, and Superblocks for internal tools with governance features.

### Market Positioning Summary

| Segment | Leaders | Differentiator |
|---|---|---|
| Enterprise ecosystem play | Microsoft, Salesforce, ServiceNow | Deep integration with existing enterprise suites |
| Process automation | Appian, Kissflow | Workflow orchestration and compliance |
| Internal tools | Retool, Superblocks | Database-first, developer-adjacent |
| AI-first app builders | Lovable, Bolt.new, v0 | Prompt-to-application generation |
| Workflow automation | n8n, Make, Zapier | Event-driven integration and AI agent orchestration |

---

## The Governance Gap

### What Analysts Say

The growth of citizen development has dramatically outpaced the governance structures meant to manage it. Analyst firms are increasingly sounding alarms:

- **Gartner** predicts that by 2028, prompt-to-app approaches adopted by citizen developers will **increase software defects by 2,500%**, triggering a software quality and reliability crisis. This is perhaps the most striking warning in the analyst literature.
- **Gartner** also predicts that **40% of firms will be hit by shadow AI security incidents**, with unchecked AI experimentation emerging as a critical enterprise risk.
- **Forrester** notes that businesses will find only moderate success with AI agents in 2025-2026, mostly in less critical employee support applications -- suggesting that ambitions are running ahead of reliable execution.
- **KPMG** reports that **73% of low-code planners and 65% of users have not yet defined governance rules** for their citizen development programs.
- A Superblocks survey found that **78% of enterprises worry about losing agility once governance kicks in**, creating a tension that often results in governance being deferred.

### Shadow IT and Shadow AI: The Numbers

The data on unauthorized tool usage is stark:

- **68% of employees** use unauthorized AI tools at work (Gartner, across 500 companies), up from 41% in 2023.
- **More than 80% of workers**, including nearly 90% of security professionals, use unapproved AI tools.
- **43% of companies** have no policy on AI tool usage; only **37%** have governance policies in place.
- **Engineering teams** have the highest shadow AI adoption at 79%.
- **20% of organizations** experienced security incidents linked to shadow AI in 2025.
- Shadow AI breaches carry a **cost premium**: $4.63 million versus $3.96 million for standard breaches (IBM, 2025).
- IBM's 2025 Cost of Data Breach Report found AI-associated cases cost organizations more than **$650,000 per breach**.

The defining risk of shadow AI is its invisibility. Unlike traditional applications that require installation or provisioning, many AI tools operate through browser extensions, embedded scripts, or personal cloud accounts within the seams of legitimate workflows. Once sensitive data enters a public or third-party AI tool, it may be logged, cached, or used for model retraining -- permanently leaving the organization's control.

### Common Failure Patterns

Based on analyst research and industry reports, ungoverned citizen development programs typically fail in predictable ways:

1. **Proliferation without visibility**: Business units build dozens of applications that IT has no inventory of, creating maintenance and security blind spots.
2. **Data sprawl and compliance exposure**: Citizen-built apps connect to sensitive data sources without proper access controls, creating regulatory risk (FERPA, HIPAA, GDPR, etc.).
3. **Technical debt accumulation**: Applications built without architecture review become fragile, undocumented, and dependent on individual employees who built them.
4. **Integration chaos**: Multiple departments adopt different platforms, creating incompatible toolchains and duplicated effort.
5. **Security incidents from data leakage**: Sensitive information entered into ungoverned AI tools leaves the organization's control permanently.

### What Good Governance Looks Like

Analyst consensus points to several governance essentials:

- **Centers of Excellence (CoE)**: Centralized teams providing training, standards, reusable components, and application review before production deployment.
- **Platform standardization**: Limiting the number of sanctioned platforms to reduce sprawl while maintaining flexibility.
- **Role-based access control**: Matching platform permissions to roles -- citizen developers get form-building capabilities, not database access.
- **Environment separation**: Distinct development, testing, and production environments even for citizen-built applications.
- **Automated monitoring**: Continuous visibility into what is being built, by whom, and what data it touches.
- **Shared governance model**: Moving from centralized IT control to a partnership between IT and business units, with IT providing guardrails and business units driving innovation within them.

Microsoft's Power Platform CoE toolkit is one concrete example of a governance framework designed specifically for citizen development at enterprise scale.

---

## Higher Education Market Landscape

### Where Universities Stand on AI Citizen Development

#### Adoption Is Accelerating, but Strategy Lags

Higher education AI adoption has surged. Ellucian's 2025 survey found that 66% of institutions are actively leveraging AI, up from 49% the prior year, with 88% expecting usage to increase further over the next two years. The 2025 EDUCAUSE AI Landscape Study confirmed this trajectory: 57% of respondents now view AI as a strategic priority, up from 49% in 2024.

However, adoption is outrunning governance and strategy. Only 11% of CTOs report having a comprehensive AI strategy. More than half of institutions (53%) remain focused on individual use cases rather than campus-wide approaches. The Digital Education Council's 2025 Global AI Faculty Survey found that just 4% of faculty are fully aware of institutional AI guidelines and consider them comprehensive.

#### How Higher Ed Compares to the Broader Market

Higher education trails the enterprise sector in structured citizen development by a significant margin. Where industry has formalized citizen developer programs, designated centers of excellence, and deployed enterprise-grade low-code/no-code platforms, most universities have no equivalent structure. The low-code/no-code market reached $45.5 billion globally in 2025, with 80% of organizations expecting non-IT staff to develop operational tools. Higher education's engagement with this movement is largely informal and unmanaged.

The concept of "citizen development" as a deliberate organizational strategy, where business users build sanctioned applications within governed guardrails, has virtually no formal presence in higher education literature. EDUCAUSE, the sector's primary technology research body, has not published dedicated guidance on citizen development programs. The 2026 EDUCAUSE Top 10 references "AI-Enabled Efficiencies" and "The Human Edge of AI" (which includes empowering users to create their own tools), but stops short of articulating a citizen development framework.

This represents a meaningful gap. Universities have the same underlying dynamic as enterprises (technically capable non-IT staff building solutions to local problems) but lack the organizational scaffolding to govern it.

#### Key Drivers

- **Resource constraints.** Teaching-focused institutions face flat or declining IT budgets alongside rising demand for digital services. AI-powered automation offers a path to doing more with less. EDUCAUSE's Top 10 #9 (AI-Enabled Efficiencies and Growth) specifically calls out the promise of "automated administrative processes that reduce staff burden."
- **Faculty autonomy culture.** Academic departments function with high independence. Faculty and staff are accustomed to selecting their own tools, making grassroots AI adoption a natural extension of existing behavior.
- **Competitive pressure.** Institutions see peer adoption and feel pressure to keep pace, particularly for student-facing services and enrollment operations.

#### Key Barriers

- **Data privacy regulation.** FERPA adds compliance stakes that most industries do not face. The use of student education records with AI tools requires explicit consent unless covered by directory information exceptions. AACRAO's forthcoming 2026 FERPA publication will address AI and student privacy directly, signaling that the regulatory landscape is still being defined.
- **Governance immaturity.** EDUCAUSE's 2024 AI Landscape Study found that only 9% of respondents considered their cybersecurity and privacy policies adequate to address AI-related risks.
- **Faculty readiness.** 40% of faculty describe themselves as just beginning their AI literacy journey. Only 6% strongly agree their institution has provided sufficient resources for AI literacy development.
- **Shared governance complexity.** AAUP's survey found that 71% of respondents said administrators lead AI conversations with "little meaningful input" from faculty, staff, or students. This governance disconnect slows policy development and erodes trust.

---

### University AI Governance Approaches

#### Published Institutional AI Policies

A growing number of universities have published formal AI policies, though the scope and maturity vary considerably.

**Comprehensive Institutional Policies:**

- **Northeastern University** has published one of the more robust institution-wide policies, requiring AI use to be consistent with university policies and applicable laws, with specific provisions for protecting confidential information and restricted research data.
- **Columbia University** finalized a university-wide generative AI policy that prohibits AI use without explicit permission, with shared responsibility for intellectual honesty and protection of inputs/outputs under copyright and patent law.
- **Ohio State University** maintains a curated list of approved AI tools (Microsoft Copilot, Google Gemini, Adobe Creative Cloud, plus Azure, AWS, and Google Cloud for technical users) and focuses on "principles that ensure responsible, secure and ethical use of data rather than prescribing specific technologies." Ohio State also co-founded the Center on Responsible AI and Governance (CRAIG) with Baylor, Rutgers, and Northeastern.
- **University of Utah** provides approved AI tools (Copilot, ChatGPT Edu) and has streamlined its review process to include assessments of use case, legal compliance, technology fit, and security considerations.
- **Arizona State University** has published AI policy and resource guidance through a dedicated ai.asu.edu portal.

**Teaching-Focused Policies:**

- **Harvard Graduate School of Education** permits AI use for concept clarification, brainstorming, and exploration, with mandatory documentation of tools used, prompts provided, and how output was integrated.
- **Duke University** provides syllabus-level AI policy guidelines through its Center for Teaching and Learning.
- **Northern Illinois University** offers structured class-level AI policy templates.
- **Georgia Gwinnett College** has published an acceptable use policy for AI covering both academic and administrative purposes, notable as a mid-size teaching institution (a closer peer to BYU-Idaho than research-intensive universities).

#### Common Governance Models

Based on published examples, three governance approaches are emerging:

1. **Approved tool lists with centralized review.** Institutions like Ohio State and the University of Utah maintain vetted lists of sanctioned AI tools, with formal review processes for new additions. This is the closest analog to enterprise citizen development governance.
2. **Principles-based frameworks.** Institutions publish ethical principles and acceptable use guidelines but leave tool selection largely to departments. EDUCAUSE's AI Ethical Guidelines, inspired by the Belmont Report, exemplify this approach.
3. **Decentralized, syllabus-level policies.** Many institutions leave AI governance to individual instructors or departments, resulting in inconsistent rules across campus. This is the most common current state.

#### What Is Working

- Institutions that provide approved tool lists report higher user awareness and lower shadow AI risk.
- EDUCAUSE recommends "walled AI sandboxes" that give users space for experimentation "without fear of breaking things or exposing the institution to risk." This balanced approach acknowledges that overly restrictive policies drive usage underground.
- The UNESCO global survey (September 2025) found that 19% of institutions already have formal AI policies, with 42% actively developing them. In North America and Europe, approximately 70% have or are developing guidance.

#### What Is Missing

- **Operational AI governance for staff workflows.** Nearly all published policies focus on academic use (teaching, research, student assignments). Policies governing how administrative staff use AI for day-to-day operational tasks are rare.
- **Citizen development guardrails.** No surveyed university has published a policy framework equivalent to an enterprise citizen development program, where non-IT staff build applications or automations within defined governance boundaries.
- **AI tool procurement standards.** Few institutions have formalized the process for evaluating and approving new AI tools at the pace staff adopt them. The University of Utah's streamlined review process is an exception, not the norm.
- **Monitoring and enforcement.** Policies exist on paper but 80% of faculty and staff are unaware of them (EDUCAUSE 2024). Without awareness, enforcement is moot.

---

### Shadow AI in Higher Education

#### Scope of the Problem

Shadow AI in higher education is pervasive and growing. The data paints a consistent picture across multiple surveys:

- **84% of faculty and administrators** already use AI tools, with 93% expecting use to grow (Ellucian 2025).
- **94% of higher education workers** use AI tools, but only 54% are aware of institutional AI use policies (EDU Ledger / Inside Higher Ed, 2026).
- **80% of faculty and staff** use AI tools, yet fewer than one in four are aware of a formal institutional policy (EDUCAUSE 2024).
- **84% of education IT leaders** say employees are adopting AI tools faster than they can be assessed; 83% find it difficult to control unauthorized AI use.
- **51% of employees** have connected or integrated AI tools with other work systems without IT department approval.

EDUCAUSE research consistently finds that universities have far more AI tools operating across campuses than IT departments know about, including AI writing assistants, research automation tools, coding copilots, data analysis platforms, and AI tutoring systems operating entirely outside institutional data governance perimeters.

#### Why Shadow AI Thrives in Universities

Universities are structurally predisposed to shadow AI for reasons that differ from typical enterprises:

- **Departmental autonomy.** Academic departments function independently, research teams adopt their own platforms, and decisions about new tools are often made without involving IT or legal.
- **Good intentions.** Shadow AI rarely starts with malicious intent. It begins with a professor trying to save time grading, a staff member seeking to automate a repetitive report, a team testing whether AI can improve student outreach. These are exactly the use cases a citizen development program would channel productively.
- **Policy vacuum.** When institutions lack clear, accessible policies, users default to whatever tool is most convenient.
- **Demand for better tools.** 76% of education employees want clearer AI policies, 72% want access to official tools, and 56% want better education on risks. The demand signal is there; the institutional response has not kept pace.

#### The FERPA Compliance Dimension

Shadow AI in higher education carries compliance risks that most industries do not face. FERPA governs the use and disclosure of student education records, and AI tools that process student data can create violations in ways users may not anticipate:

- **Third-party data exposure.** When a staff member pastes student information into an unsanctioned AI chatbot, that data may be processed and stored by a third party without the consent or contractual protections FERPA requires.
- **Evolving definitions.** The definition of "education records" under FERPA is broader than many users realize. AACRAO's forthcoming 2026 FERPA publication will address evolving definitions of education records in the context of AI.
- **2025 regulatory tightening.** Recent FERPA amendments strengthen privacy requirements, including explicit consent provisions and justified data retention rules. The 2025 COPPA amendments shifted from opt-out to opt-in consent, signaling a broader regulatory direction.
- **AI detection tools.** Using AI-detection software on student work may itself require FERPA consideration, as student work is processed through external third parties.
- **Inadequate safeguards.** Only 9% of EDUCAUSE respondents considered their institution's cybersecurity and privacy policies adequate to address AI-related risks.

For a FERPA-regulated institution like BYU-Idaho, unsanctioned AI use by staff handling student records represents a compliance exposure that enterprise-sector shadow AI analyses typically understate.

---

### The Gap

#### What Higher Education Lacks Compared to Industry

The enterprise sector has spent five or more years building citizen development programs with defined components: governance frameworks, approved tool catalogs, training curricula, centers of excellence, and monitoring systems. Higher education has almost none of this infrastructure:

| Capability | Enterprise (Mature) | Higher Education (Current State) |
|---|---|---|
| Citizen development strategy | Formal programs with executive sponsorship | Virtually nonexistent as a named initiative |
| Governed tool catalogs | Curated platforms with SSO and DLP integration | Emerging at a handful of institutions (Ohio State, Utah) |
| Training and enablement | Structured citizen developer certification paths | Ad hoc, inconsistent; only 6% of faculty feel adequately supported |
| Centers of excellence | Cross-functional teams governing citizen-built apps | No known higher-ed equivalent |
| Usage monitoring | Automated shadow IT/AI detection | 84% of IT leaders say adoption outpaces assessment |
| Compliance integration | Built into citizen development workflows | Largely absent; FERPA implications unaddressed at most institutions |

#### Why Enterprise Solutions Do Not Directly Translate

Standard enterprise citizen development frameworks assume organizational characteristics that many universities, particularly teaching-focused institutions, do not share:

- **Centralized authority.** Enterprise programs rely on top-down mandates. Universities operate through shared governance, where faculty have significant autonomy over their tools and methods. Policy adoption requires consensus-building that enterprise frameworks do not account for.
- **Uniform IT infrastructure.** Enterprise citizen development assumes standardized platforms (e.g., Microsoft Power Platform across the organization). Universities typically have heterogeneous environments with department-level technology decisions.
- **Dedicated staff.** Enterprise centers of excellence are staffed with full-time citizen development coordinators. Resource-constrained IT departments at teaching institutions often lack headcount for specialized roles.
- **Homogeneous compliance requirements.** Enterprise frameworks address a known regulatory profile. Universities face a layered compliance environment: FERPA, state data privacy laws, institutional review board requirements for research, accessibility mandates, and (for religiously affiliated institutions) values-alignment considerations that have no enterprise parallel.
- **Risk tolerance.** Enterprise citizen development programs assume a baseline organizational risk tolerance. Universities, particularly those serving vulnerable populations (students) under FERPA, have lower tolerance for data exposure incidents but fewer resources to prevent them.

#### The Opportunity

The gap between enterprise maturity and higher education's current state is not just a deficit; it is an opportunity to build something purpose-fit. A university-specific citizen development framework could:

- Channel the energy already flowing into shadow AI toward sanctioned, governed tools.
- Leverage the fact that 72% of education employees actively want access to official AI tools.
- Address FERPA and institutional compliance requirements by design rather than as an afterthought.
- Start small (approved tools, lightweight governance, departmental pilots) rather than attempting enterprise-scale transformation.
- Account for shared governance by involving faculty in framework design from the outset.

The question is not whether university employees will use AI to build solutions. They already are. The question is whether institutions will provide the governance infrastructure to make that usage safe, compliant, and productive.

---

# Section 4: Case Studies

## Success Cases

This section documents case studies of successful citizen development and AI-enabled low-code programs. Because "citizen development" as a named concept is still emerging in higher education (as noted in Phase 1 findings), this section draws from three tiers of evidence:

1. **University cases** where institutions deployed AI or low-code tools with citizen-development characteristics (staff/faculty building their own solutions)
2. **Enterprise cases** from large, regulated organizations that provide direct governance analogues
3. **Regulated-industry cases** (healthcare, transportation, government) that parallel BYU-Idaho's compliance constraints

Evidence quality varies significantly. University cases are predominantly sourced from Microsoft customer stories and vendor blogs, which carry inherent promotional bias. Enterprise cases offer stronger governance detail but require careful translation to the higher education context. Where possible, original metrics are cited with their source for Ron's independent verification.

---

### University Cases

#### 1. Miami Dade College -- AI-Powered Learning Assistants

- **Institution/Organization:** Miami Dade College (MDC), Miami, FL. One of the largest colleges in the US with 6,000+ employees. Public, open-access institution.
- **What They Did:** Deployed Microsoft 365 Copilot and Copilot Studio institution-wide, starting with the President's Cabinet and senior leaders, then expanding with 400 additional licenses prioritized to student-facing employees. Faculty used Copilot Studio to create AI-powered tutoring assistants for STEM and advanced analytics courses.
- **Platform/Approach:** Microsoft 365 Copilot, Copilot Studio, Microsoft Teams.
- **Governance Model:** Phased rollout with structured training. Created a Microsoft Teams community for faculty/staff to share best practices and AI prompts. Focus on peer-to-peer knowledge sharing as a continuous governance mechanism.
- **Outcome:**
  - 15% increase in student pass rates (STEM and advanced analytics courses, first semester)
  - 12% decrease in course dropout rates
  - 77% of users reported completing tasks faster
  - 76% observed improved work quality
  - 81% increase in self-reported productivity
  - 50% reduction in grading time
  - Estimated annual time savings: ~50,000 hours (if 15% of 6,000 employees save 12 minutes daily)
- **Lessons Learned:** Initial faculty skepticism required deliberate education and demonstration. The "moment it clicks" -- when a user completes a task in seconds that previously took hours -- drives organic adoption. Always-available AI tutoring (accessible at 2 AM) meaningfully expanded student access to support.
- **Source:** Microsoft Customer Story (2025); EdTech Magazine (2024)
- **Evidence Quality:** Vendor customer story. Metrics appear specific and credible but are not independently verified. MDC is a significantly larger and better-resourced institution than BYU-Idaho.

#### 2. University of South Florida -- Multi-Agent Campus Deployment

- **Institution/Organization:** University of South Florida (USF), Tampa, FL. ~50,000 students across three campuses. Public research university (R1).
- **What They Did:** Deployed Microsoft 365 Copilot campus-wide and used Copilot Studio to build multiple custom agents across departments. IT built agents for travel policy, IT help desk, and student commencement. Student Ambassadors built agents for departmental reporting. Library deployed "LINK," a 24/7 chatbot for student support. Partnering with College of Medicine on accreditation system.
- **Platform/Approach:** Microsoft 365 Copilot, Copilot Studio, Azure OpenAI. Combined IT-led development with student-built and department-built solutions.
- **Governance Model:** Phased approach across three campuses. CIO Sidney Fernandes emphasized "responsible and ethical deployment." Prioritized making institutional information "AI-ready" as a precondition for agent deployment.
- **Outcome:**
  - Policy revision tasks that "once took weeks" completed in hours
  - Decreased manual reporting time (Student Ambassador-built agents)
  - Expedited inventory analysis
  - 24/7 library support via LINK chatbot
  - Reduced help desk ticket volume
- **Lessons Learned:** Encouraging users to "play with the tools and be bold" accelerated adoption. Combining IT-built agents with student-built and department-built solutions created multiple innovation vectors. Making data AI-ready was a necessary precondition.
- **Source:** Microsoft Education Blog (June 2024); Microsoft Customer Story; USF News
- **Evidence Quality:** Vendor blog and customer story. Qualitative outcomes are described but most lack specific metrics. USF is a large R1 institution with significantly more IT resources than BYU-Idaho.

#### 3. BYU Pathway Worldwide -- Generative AI Support Bot

- **Institution/Organization:** BYU Pathway Worldwide. Online higher education program affiliated with the Church of Jesus Christ of Latter-day Saints. Serves students globally with limited on-campus infrastructure.
- **What They Did:** Upgraded an existing manual Copilot Studio support bot by infusing generative AI capabilities, transforming a rule-based chatbot into a generative AI-powered student support system.
- **Platform/Approach:** Microsoft Copilot Studio with generative AI features.
- **Governance Model:** Not publicly documented in available sources.
- **Outcome:**
  - Immediate time savings of over 150 staff hours per week
  - Freed advisors to focus on complex student queries
- **Lessons Learned:** Upgrading existing tools with AI capabilities (rather than building from scratch) can deliver immediate, measurable returns. The transition from rule-based to generative AI represents a low-friction adoption path.
- **Source:** Microsoft Copilot Blog (2025)
- **Evidence Quality:** Vendor blog citation. Single metric cited (150 hours/week) without methodology detail. However, this is the most directly relevant case to BYU-Idaho: religiously affiliated, resource-constrained, within the BYU system.

#### 4. Victoria University of Wellington -- Student Support Copilot

- **Institution/Organization:** Victoria University of Wellington, New Zealand. Public research university.
- **What They Did:** Built a student support copilot that provides natural language responses by tapping into the institution's knowledge base and data sources, creating a unified information portal for students.
- **Platform/Approach:** Microsoft Copilot Studio with built-in generative AI and Knowledge features.
- **Governance Model:** Pilot-based approach with survey-driven evaluation.
- **Outcome:**
  - Over 90% of pilot participants reported positive experiences
  - 95% indicated they would use the service again
- **Lessons Learned:** Connecting AI to existing institutional knowledge bases (rather than training new models) provides a governed, lower-risk path to deployment. High satisfaction rates suggest students are receptive to AI-powered support when well-implemented.
- **Source:** Microsoft Copilot Blog (2025)
- **Evidence Quality:** Vendor blog. Satisfaction metrics are self-reported from pilot participants, not institution-wide.

#### 5. Florida State University -- Faculty-Led Custom AI Agents

- **Institution/Organization:** Florida State University (FSU), Tallahassee, FL. Public research university.
- **What They Did:** Partnered with Microsoft to empower faculty to create their own custom AI agents using Copilot Studio. In Fall 2024, faculty across campus created GPTs trained on course syllabi, assignments, and lectures, making them available to students. In the graduate data science program, students built Copilot agents to explore complex datasets.
- **Platform/Approach:** Microsoft 365 Copilot, Copilot Studio.
- **Governance Model:** Curiosity-driven adoption based on institutional use cases rather than top-down mandates. Faculty ownership of agent creation.
- **Outcome:**
  - Faculty-built AI agents deployed across multiple courses
  - Students gained practical AI tool-building experience in capstone courses
  - Administrative staff reported productivity gains in email management and meeting preparation
- **Lessons Learned:** Faculty empowerment (rather than IT-mandated tools) drove adoption. FSU's approach of having faculty build their own AI solutions is the closest higher education analogue to a true "citizen developer" model. Quote from FSU leadership: "Our goal is to empower faculty to develop their own custom AI solutions."
- **Source:** Microsoft in Business Blog (April 2025); STARS Conference Proceedings (2025)
- **Evidence Quality:** Vendor blog and conference abstract. No quantified metrics available. The faculty-empowerment model is the most relevant governance pattern for BYU-Idaho.

#### 6. University of Manchester -- Phased Copilot Deployment with Governance

- **Institution/Organization:** University of Manchester, UK. Large public research university.
- **What They Did:** Rolled out Microsoft 365 Copilot in phases: 120 users initially (academic staff and back-office functions), expanded to 200, targeting 300 total. Partnered with Microsoft Consulting Services for Education.
- **Platform/Approach:** Microsoft 365 Copilot, SharePoint, Teams, Viva Engage.
- **Governance Model:** Phased rollout with explicit governance measures: updated data rights policies, user reporting mechanisms, Microsoft 365 security tools. Achieved above-average Microsoft Security Scores. Created SharePoint training hubs, "prompt of the week" guidance, and dedicated Viva Engage community spaces.
- **Outcome:**
  - 98% reduction in administrative burden during meetings (48% overall cost savings after human review)
  - Productivity gains ranged from 15 minutes to over 3 hours daily per user
  - Users offloading manual/repetitive tasks achieved 40% efficiency improvement
  - Academic staff reported "phenomenal time savings"
- **Lessons Learned:** Prompt literacy is critical -- users needed training on precise, detailed prompts. Phased rollout revealed varied use cases across departments. Two-thirds of users needed ongoing learning support. Support complexity increased for users with the highest manual workloads (18% vs. 40% improvement rates depending on baseline).
- **Source:** Microsoft Customer Story (2025)
- **Evidence Quality:** Vendor customer story with relatively detailed methodology. The phased governance model with explicit security scoring is the most detailed university governance case found.

#### 7. Macquarie University -- AI Peer Chatbot

- **Institution/Organization:** Macquarie University, Sydney, Australia. Public research university.
- **What They Did:** Deployed "Virtual Peer," an AI chatbot built using Azure AI Foundry to support student learning.
- **Platform/Approach:** Azure AI Foundry.
- **Governance Model:** Not documented in available sources.
- **Outcome:**
  - 80% of messages sent outside operating hours (demonstrating unmet demand for off-hours support)
  - Exam scores increased nearly 10%
  - 72% of respondents reported high satisfaction
- **Lessons Learned:** Off-hours usage patterns reveal significant unmet student support demand that AI can address without additional staffing costs.
- **Source:** Microsoft Education Blog (June 2025)
- **Evidence Quality:** Vendor blog. Metrics are compelling but source and methodology details are limited.

#### 8. Ohio University -- Power Platform Citizen Developer Community

- **Institution/Organization:** Ohio University, Athens, OH. Public university, ~28,000 students. The most comparable peer institution found in this research (mid-size, teaching-and-research balanced).
- **What They Did:** The Office of Information Technology (OIT) developed a community initiative to enable faculty and staff to create low-code web applications through Microsoft's Power Platform tools (Power Automate and Power Apps), already licensed institution-wide.
- **Platform/Approach:** Microsoft Power Apps, Power Automate (leveraging existing institutional licensing).
- **Governance Model:** OIT-managed with community input. Pilot conducted in two waves (December 2021-March 2022 and May 2022-August 2022). Program designed to gather community feedback to shape the service.
- **Outcome:**
  - Pilot completed in two phases
  - Program aimed to "improve business processes and efficiencies"
  - Assessment of campus interest planned for Spring 2023 to determine continuation
- **Lessons Learned:** Leveraging existing licensing (Power Platform already included in institutional Microsoft agreements) removes a significant adoption barrier. Community-driven design with feedback loops builds buy-in. This is the closest structural analogue to what BYU-Idaho might implement.
- **Source:** Ohio University OIT website
- **Evidence Quality:** Primary institutional source, but limited detail. No measurable outcomes published. Program status beyond Spring 2023 assessment is unclear. The absence of published results may indicate the program did not scale, which is itself an important data point.

#### 9. Gettysburg College -- No-Code Digital Transformation

- **Institution/Organization:** Gettysburg College, PA. Private liberal arts college, ~2,600 students. Small, resource-constrained institution.
- **What They Did:** Implemented Kuali Build, a no-code forms and workflow automation platform designed for higher education. IT and administrative leaders created no-code applications to replace outdated PDFs, integrate systems, and streamline workflows.
- **Platform/Approach:** Kuali Build (higher-education-specific no-code platform).
- **Governance Model:** IT created integrations (taking as little as five minutes each), then handed solutions back to process owners in departments. Collaborative model between IT and departments.
- **Outcome:**
  - Over 25 applications launched within six months
  - 50+ no-code apps created to replace outdated processes
  - HR department discovered and eliminated duplicate efforts and manual data entry
  - Improved collaboration, transparency, and data integrity
- **Lessons Learned:** Higher-education-specific platforms (Kuali) reduce the governance burden because they are pre-built for the sector's data structures and compliance needs. The "IT builds the integration, department owns the solution" model distributes workload without losing governance control.
- **Source:** Kuali case study
- **Evidence Quality:** Vendor case study. Metrics are specific but self-reported. Gettysburg is much smaller than BYU-Idaho but the resource-constrained context is relevant.

#### 10. Azusa Pacific University -- Decentralized No-Code Adoption

- **Institution/Organization:** Azusa Pacific University, Azuza, CA. Private, religiously affiliated (Christian) university. Multiple campuses, online programs.
- **What They Did:** Adopted Formstack (no-code forms and workflows platform) since 2016, deliberately choosing a tool easy enough to hand to departments directly. Faculty, students, and staff use it for everything from event registrations to financial aid to facilities work orders to donor management.
- **Platform/Approach:** Formstack Forms and Workflows.
- **Governance Model:** Deliberately decentralized. IT selected the platform but departments own their own forms and workflows. The explicit goal was to remove IT as a bottleneck.
- **Outcome:**
  - Approximately 200 forms created per month
  - 5,000-7,000 form submissions per month
  - Background check processing time reduced from two weeks to days
  - Eliminated lost email threads and bottlenecks
- **Lessons Learned:** Selecting tools specifically for departmental self-service (rather than IT control) drove widespread adoption. A religiously affiliated university with multiple campuses successfully decentralized solution-building without reported governance failures. This is the most directly comparable institutional profile to BYU-Idaho found in this research.
- **Source:** Formstack customer story; Inside Higher Ed
- **Evidence Quality:** Vendor case study. Long-running program (since 2016) suggests sustained success. The religiously affiliated, multi-campus profile is the closest match to BYU-Idaho's context.

---

### Enterprise and Regulated-Industry Analogues

The following cases come from large enterprises and regulated industries. They are included because they provide governance models, measurable outcomes, and lessons learned that are directly transferable to BYU-Idaho's situation. Each case note explains why it is relevant.

#### 11. Deutsche Bahn -- Citizen Development at Scale (Transportation/Government-Adjacent)

- **Institution/Organization:** Deutsche Bahn (DB), Germany. Operator of the largest rail infrastructure in Europe. Government-owned, heavily regulated. ~340,000 employees.
- **What They Did:** Empowered every employee with a premium Power Platform license to build low-code business applications. Created a community of 4,000 citizen developers with over 500 applications in production.
- **Platform/Approach:** Microsoft Power Apps, Power Automate, Dataverse, Power BI. Power Platform Center of Excellence Starter Kit.
- **Governance Model:** Two-level Center of Excellence (CoE):
  - **Centralized CoE:** Defines guidelines, standardizes common components and services across the company, builds connectors, defines functional blueprints.
  - **Local CoE:** Focuses on implementation at subsidiary level, includes subsidiary CIO. Local expert teams evaluate and approve apps.
  - **Managed Environments:** Three tiers -- development-test, staging (where local experts evaluate for business criticality, risk management, data protection, security), and production.
  - **Scalable governance:** Central team does not review every citizen developer question -- only those unresolvable by local experts.
- **Outcome:**
  - 4,000 citizen developers, 500+ production apps
  - 2,000 training sessions fully booked within 7 hours
  - 11,000 community members attending workshops and showcases
  - Track maintenance app: 8,440 targets recorded, saving 3 minutes each = 56 days returned to team
  - Shift log app: Reduced errors from 20% to 2%, saving shift managers 24 hours per week
- **Lessons Learned:** The two-level CoE (centralized + local) is the key governance pattern. It prevents central bottlenecks while maintaining standards. UX templates ensure consistency across citizen-developed apps. Community-driven enthusiasm is the primary adoption driver. Worker Council approval was a significant milestone for institutional buy-in.
- **Relevance to BYU-Idaho:** DB's two-level CoE model (central governance + local implementation) maps directly to a model where BYU-Idaho's central IT sets standards while department-level coordinators manage implementation. The regulated, government-adjacent context parallels BYU-Idaho's compliance requirements. The managed environment approach (dev-test, staging, production) provides a concrete governance architecture.
- **Source:** Microsoft Learn case study (April 2025); Microsoft Customer Story
- **Evidence Quality:** Detailed technical case study on Microsoft Learn with specific architecture diagrams. One of the most thoroughly documented citizen development cases available.

#### 12. H&M Group -- Citizen Development with Security at Scale (Retail/Global)

- **Institution/Organization:** H&M Group, Sweden. Global retailer, 5,000+ stores in 78 countries, 53+ online markets.
- **What They Did:** Enabled citizen development across the company using Microsoft Power Platform, growing to over 30,000 licensed Power Platform users and approximately 1,500 apps.
- **Platform/Approach:** Microsoft Power Platform, Power Platform CoE Starter Kit.
- **Governance Model:** "Center for Enablement" (rather than "Center of Excellence") with three pillars:
  1. **Administration and Governance:** Environment strategy, continuous monitoring, DLP policies across 350+ connectors
  2. **Support and Inspiration:** Global helpdesk, app showcase, digital champions, webinars
  3. **Nurture and Education:** Welcome emails, Yammer community, helpdesk resources
  - **Tiered environment structure:** Productivity tier (standard connectors, default for all), Important tier (premium connectors with DLP controls, access via request), Critical tier (custom connectors for mission-critical apps)
- **Outcome:**
  - 30,000+ licensed users
  - ~1,500 apps at launch
  - Security and governance structure deployed in two weeks for 30,000 users
  - FLEXI app adopted by 1,000+ employees with GDPR-compliant auto-deletion
- **Lessons Learned:** "Don't wait. It's much easier to start with policies and controls" than to retrofit governance after uncontrolled growth. The tiered environment model (productivity/important/critical) allows broad empowerment at the base while tightening controls for sensitive use cases. Starting governance before scaling prevents shadow IT.
- **Relevance to BYU-Idaho:** The tiered environment model is directly applicable. BYU-Idaho could offer a "productivity tier" for general staff self-service while restricting a "critical tier" for FERPA-sensitive applications. The two-week governance deployment timeline shows this can be done quickly. The "Center for Enablement" naming shift (from "Excellence") signals a cultural emphasis on empowerment over control.
- **Source:** Microsoft Customer Story; Microsoft Power Platform Blog
- **Evidence Quality:** Vendor customer story with specific architectural detail. Security-focused framing adds credibility.

#### 13. Medtronic -- Citizen Development in a Regulated Industry (Healthcare/Medical Devices)

- **Institution/Organization:** Medtronic, Minneapolis, MN. Global medical device company, 90,000+ employees. Heavily regulated (FDA, HIPAA).
- **What They Did:** Created a citizen development program on ServiceNow to increase app development capacity and accelerate digital transformation. Launched in 2018, the program has grown to 25+ active citizen developers.
- **Platform/Approach:** ServiceNow (Now Platform), with automated code review tools.
- **Governance Model:** Three foundational pillars:
  1. Users must understand how to use ServiceNow
  2. Go through a training and certification program (CD 101)
  3. Understand guidelines and best practices throughout the development process
  - Automated code review tool ensures low-quality code does not reach production
  - Center of Excellence team provides safeguards
- **Outcome:**
  - After Year 1: 56% of development demands satisfied through citizen development
  - 25+ citizen developers maintaining five service portals
  - 25+ business-critical processes and applications
  - Serving 90,000+ employees
  - Customer service agents resolve 1 million+ patient cases per year using automated workflows
- **Lessons Learned:** In a regulated industry, automated code review is essential -- it provides governance without creating human bottlenecks. A structured certification program (CD 101) ensures quality before citizen developers start building. Starting with a small cohort and growing organically works better than a large-scale launch.
- **Relevance to BYU-Idaho:** Medtronic operates under FDA and HIPAA regulations that parallel BYU-Idaho's FERPA compliance requirements. The automated code review model could translate to automated data-access review for FERPA-sensitive applications. The CD 101 certification model provides a template for BYU-Idaho's citizen developer training program. The 56% demand satisfaction rate demonstrates that citizen development can meaningfully reduce IT backlog.
- **Source:** SD Times (June 2021); ServiceNow documentation
- **Evidence Quality:** Trade press article and vendor documentation. Specific metrics cited. Program running since 2018 suggests sustained success in a highly regulated environment.

#### 14. Microsoft (Internal) -- Enterprise-Scale Citizen Development Governance

- **Institution/Organization:** Microsoft Corporation. 220,000+ employees. Uses its own Power Platform internally.
- **What They Did:** Deployed Power Platform across the enterprise with a governance model that balances empowerment and security. HR team deployed a custom Copilot Studio agent on their HRWeb portal (8 million visits/year).
- **Platform/Approach:** Microsoft Power Platform, Copilot Studio.
- **Governance Model:** Three-part governance strategy:
  1. **Protect:** Policies at tenant level
  2. **Measure:** Usage monitoring and analytics
  3. **Enforce:** Macro-level (overall tenant policies) and micro-level (individual group-specific policies)
  - Routes developers out of default environments into purpose-built, intentionally configured environments
  - 25+ million monthly active Power Platform users globally (external)
- **Outcome (HR case study):**
  - Custom HR copilot deflected 60% of incoming queries
  - 21,000+ hours of productivity generated
  - 27% reduction in incoming service tickets
  - From a baseline of 800,000 manual service tickets per year
- **Lessons Learned:** Routing all development into managed environments (away from default) is foundational to governance at scale. The "protect, measure, enforce" framework provides a simple governance taxonomy. Deflection rates (60%) demonstrate that AI can handle the majority of routine inquiries.
- **Relevance to BYU-Idaho:** The HR use case is directly analogous to BYU-Idaho's administrative functions. The 60% deflection rate suggests that a well-built citizen-developed agent could significantly reduce routine inquiry volume. The governance taxonomy (protect, measure, enforce) is simple enough for a resource-constrained IT organization.
- **Source:** Microsoft Inside Track Blog; Microsoft Copilot Blog (2025)
- **Evidence Quality:** First-party case study (Microsoft reporting on itself). The metrics are specific and credible but represent the vendor showcasing its own product.

---

### Additional Data Points (Insufficient for Full Case Studies)

The following institutions or organizations appeared in research but lacked sufficient detail for full case studies. They are noted here for completeness and potential follow-up:

- **Indiana University (Kelley School of Business):** Students using Microsoft 365 Copilot saw 10% performance improvement and 40% reduction in time to complete tasks. (Source: Microsoft Education Blog, June 2025)
- **University of South Carolina:** First cohort scored 8/10 satisfaction; expedited literature reviews. Prioritized data protection. (Source: Microsoft Education Blog, June 2025)
- **Auburn University, Oregon State University, University of Tennessee:** Student-run security operations centers using Microsoft Security Copilot. (Source: Microsoft Education Blog, June 2025)
- **Colorado State University:** Used Kuali Build to create a return-to-research safety form in 30 minutes during COVID-19. Staff described it as "ridiculously easy to use." (Source: Kuali case study)
- **Augustana College:** Used no-code tools (Formstack) to move complex forms online "in a matter of days" during COVID-19. (Source: Formstack/Inside Higher Ed)
- **Globe Telecom (Philippines):** Applied a "democracy model" of citizen development with low-code platforms. Reduced business process turnaround time by 79.8%. Complex apps delivered in 2-4 weeks vs. 3-6 months. (Source: Forrester case study, 2021)

---

## Success Patterns

Across the 14 documented cases and additional data points, the following patterns emerge:

### 1. Phased Deployment is Universal

Every successful program launched in phases rather than institution-wide. Miami Dade started with the President's Cabinet. Manchester started with 120 users. Deutsche Bahn built community gradually. No successful case attempted a "big bang" rollout.

**Implication for BYU-Idaho:** Start with a defined pilot group (e.g., one department or functional area), measure results, then expand.

### 2. Governance Precedes Scale, Not the Reverse

H&M's central lesson -- "Don't wait. It's much easier to start with policies and controls" -- is echoed across cases. Organizations that scaled without governance (common in shadow IT scenarios) faced costly retrofitting. Successful programs established governance frameworks before expanding citizen developer access.

**Implication for BYU-Idaho:** Build the governance framework and tiered environment structure before opening citizen development tools to staff.

### 3. The Two-Level Governance Model Dominates

Deutsche Bahn, H&M, and Medtronic all use variants of a central CoE + local implementation model. Central IT defines standards, builds guardrails, and provides tooling. Local teams (departments, business units) handle implementation, evaluation, and day-to-day support. This prevents central bottleneck while maintaining control.

**Implication for BYU-Idaho:** A central governance body sets FERPA-compliant standards and provides templates; department-level coordinators manage day-to-day citizen development within those guardrails.

### 4. Existing Licensing is the Entry Point

Ohio University, BYU Pathway, and multiple other cases built on Microsoft licensing already in place. Power Platform capabilities are included in many institutional Microsoft agreements. The lowest-friction path is activating what is already licensed rather than procuring new platforms.

**Implication for BYU-Idaho:** Audit existing Microsoft licensing to determine what Power Platform and Copilot Studio capabilities are already available.

### 5. Community Drives Adoption More Than Mandates

Deutsche Bahn's 11,000-member community, Miami Dade's Teams-based sharing channel, Manchester's "prompt of the week" -- every successful program built a community of practice. Top-down mandates appear less effective than peer-to-peer inspiration.

**Implication for BYU-Idaho:** Invest in community infrastructure (Teams channels, showcase events, champions programs) alongside technical infrastructure.

### 6. AI Upgrading Existing Tools Delivers Quick Wins

BYU Pathway's transformation of an existing rule-based bot into a generative AI-powered system delivered 150 hours/week savings immediately. This upgrade-in-place pattern appeared in multiple cases and represents the lowest-risk, fastest-return approach.

**Implication for BYU-Idaho:** Identify existing chatbots, forms, or workflows that could be upgraded with AI capabilities before building net-new solutions.

### 7. The Tiered Risk Model Enables Broad Access

H&M's productivity/important/critical tier model and Deutsche Bahn's managed environments both demonstrate the same principle: provide broad, low-friction access for low-risk use cases while applying progressively stricter controls as data sensitivity and business criticality increase.

**Implication for BYU-Idaho:** A three-tier model could allow general staff self-service for non-FERPA use cases (Tier 1), IT-reviewed access for applications touching student data (Tier 2), and professional developer oversight for mission-critical systems (Tier 3).

### 8. Religiously Affiliated and Resource-Constrained Institutions Can Succeed

Azusa Pacific University (religiously affiliated, multi-campus) has run a decentralized no-code program since 2016 with 200 forms created monthly. Gettysburg College (small, resource-constrained) launched 50+ apps in six months. BYU Pathway (religiously affiliated, limited infrastructure) achieved 150 hours/week savings. These cases directly counter the concern that citizen development requires large IT budgets or secular institutional culture.

**Implication for BYU-Idaho:** The institutional profile is not a barrier. Peer institutions with comparable constraints have succeeded.

### 9. Evidence Gaps Remain Significant

No university case study documented a complete citizen development program with all elements: formal governance framework, training/certification, measurable outcomes, FERPA/compliance integration, and long-term sustainability data. The strongest governance models come from enterprises (Deutsche Bahn, H&M, Medtronic); the strongest higher education outcomes come from AI deployment cases that are adjacent to, but not precisely, citizen development programs.

**Implication for BYU-Idaho:** BYU-Idaho would be an early mover in formally establishing a governed AI citizen development program in higher education. This is both a risk (limited peer precedent) and an opportunity (potential to become a reference case for the sector).

---

## Cautionary Tales

This section catalogs documented failures, incidents, and cautionary tales relevant to AI citizen development governance. Cases span shadow AI data leaks, citizen development governance failures, education data breaches, and ungoverned automation incidents. These cases provide the "what can go wrong" counterweight to success stories and directly inform governance framework recommendations.

---

### 15. Samsung Electronics -- Employee Data Leaks via ChatGPT (2023)

- **Institution/Organization:** Samsung Electronics, semiconductor division
- **What Happened:** In March 2023, Samsung employees submitted confidential data to ChatGPT on at least three separate occasions. One engineer pasted proprietary source code for a semiconductor facility measurement database seeking a bug fix. Another submitted code for a defective-equipment detection program requesting optimization. A third employee fed a recorded internal meeting transcript into ChatGPT to generate meeting minutes -- exposing confidential executive discussions.
- **Root Cause:** Employees were permitted to use ChatGPT without adequate security controls, data classification policies, or training on the risks of submitting proprietary information to external AI tools. This was human error driven by a governance vacuum.
- **Impact:** Proprietary source code, hardware specifications, and confidential meeting content were irrecoverably uploaded to OpenAI's servers. Samsung initially banned all generative AI tools company-wide, then later developed an internal AI tool (Samsung Gauss) as a controlled alternative. The incident became one of the most widely cited examples of shadow AI risk globally.
- **Lessons Learned:** Organizations must implement data classification policies before enabling AI tool access. Without clear guardrails defining what types of data can be shared with external AI platforms, well-intentioned employees will inadvertently expose sensitive information. A blanket ban is reactive; proactive governance with approved tools and clear data handling rules is more sustainable.
- **Source:** Cybersecurity Dive (2023); HumanFirewall case study
- **Relevance to BYU-Idaho:** Faculty or staff using public ChatGPT instances for tasks involving student data, unpublished research, or internal operational details face analogous risks.

### 16. PowerSchool -- Largest Student Data Breach in U.S. History (2024)

- **Institution/Organization:** PowerSchool Holdings, Inc. -- the dominant K-12 student information system vendor serving approximately 75% of the U.S. K-12 market
- **What Happened:** On December 19, 2024, an attacker used compromised credentials to access PowerSchool's customer support portal (PowerSource). The intrusion went undetected for nine days. The attacker exfiltrated records of 62.4 million students and 9.5 million teachers across 6,505 school districts.
- **Root Cause:** The support portal lacked multi-factor authentication (MFA). PowerSchool only discovered the breach when the attacker demanded a ransom. The company paid $2.85 million, but extortion attempts resumed in May 2025.
- **Impact:** Exposed student names, contact information, dates of birth, Social Security numbers, limited medical alert information, and special education records. Multiple class-action lawsuits filed.
- **Lessons Learned:** Vendor risk management is critical. Third-party platforms handling student data must meet rigorous security standards including MFA, access auditing, and encryption at rest. Paying ransoms does not guarantee data deletion.
- **Source:** TechTarget (2025); Proskauer Rose privacy analysis; FTC reporting
- **Relevance to BYU-Idaho:** Any citizen-developed application that integrates with or stores student data creates similar third-party risk if the application lacks enterprise security controls.

### 17. Illuminate Education -- 10 Million Student Records Exposed (2021-2022)

- **Institution/Organization:** Illuminate Education, Inc. -- an ed-tech provider serving K-12 schools nationwide
- **What Happened:** In late December 2021, a hacker used credentials of a former employee who had left the company three and a half years earlier to breach cloud-hosted databases. The breach exposed personal data of over 10 million students including 1.7 million in New York alone.
- **Root Cause:** Illuminate stored student data in plain text (unencrypted). Failed to decommission inactive user accounts, implement monitoring, or limit account permissions. Some school districts waited nearly two years for breach notification.
- **Impact:** New York AG, California, and Connecticut secured a $5.1 million settlement. The FTC imposed a 10-year consent order requiring comprehensive information security program implementation.
- **Lessons Learned:** Basic security hygiene failures -- unencrypted data, active credentials for departed employees, no monitoring -- are the most common and preventable causes of education data breaches.
- **Source:** NY Attorney General press release (2025); FTC enforcement action (2025)
- **Relevance to BYU-Idaho:** Citizen-developed applications that store student data could replicate these exact failures: hardcoded credentials, no access lifecycle management, unencrypted storage, and no monitoring.

### 18. New York City MyCity Chatbot -- AI Providing Illegal Advice (2024)

- **Institution/Organization:** City of New York -- MyCity AI chatbot launched by Mayor Eric Adams in October 2023
- **What Happened:** The city's official AI chatbot was discovered providing advice that directly violated city and state law: telling business owners they could take workers' tips (violating NY Labor Law), telling landlords they could refuse Section 8 vouchers (violating discrimination law), and saying businesses could refuse cash payments.
- **Root Cause:** Deployed without adequate testing against the actual legal landscape. No human-in-the-loop review, no validation against authoritative databases, no quality assurance.
- **Impact:** The chatbot remained publicly accessible for months despite documented inaccuracies. Cost approximately $500,000. The incoming mayor eliminated it in January 2026, calling it "functionally unusable."
- **Lessons Learned:** AI tools deployed in advisory capacities require rigorous domain-specific testing, human review loops, and ongoing quality monitoring. The "ship fast, fix later" approach is particularly dangerous for tools providing authoritative guidance.
- **Source:** The Markup investigative reporting (2024, 2026); THE CITY (2024)
- **Relevance to BYU-Idaho:** A citizen developer building an AI-powered advising tool, policy chatbot, or compliance assistant could produce similar hallucinated or incorrect guidance.

### 19. Blue Shield of California -- Three-Year Data Leak to Google Ads (2021-2024)

- **Institution/Organization:** Blue Shield of California -- major health insurer
- **What Happened:** From April 2021 through January 2024, a misconfigured Google Analytics implementation inadvertently shared protected health information (PHI) of 4.7 million members with Google Ads. The configuration error went undetected for nearly three years.
- **Root Cause:** A web analytics tracking tool was misconfigured to share data with Google's advertising platform. This was a technology integration error, not a malicious attack.
- **Impact:** PHI of 4.7 million members shared with a third-party advertising platform for nearly three years. Triggered HHS Office for Civil Rights reporting, class-action lawsuits, and significant reputational damage.
- **Lessons Learned:** Integration and configuration errors in seemingly routine tools (web analytics) can create massive compliance violations. Any tool that touches sensitive data -- even analytics and tracking pixels -- requires compliance review.
- **Source:** Healthcare Dive (2025); HIPAA Journal (2025)
- **Relevance to BYU-Idaho:** A citizen developer connecting a campus web application to analytics, marketing, or productivity tools could inadvertently create data flows that expose student or employee information to third parties.

### 20. CISA Interim Chief -- Sensitive Government Documents Uploaded to Public ChatGPT (2025)

- **Institution/Organization:** U.S. Cybersecurity and Infrastructure Security Agency (CISA), Department of Homeland Security
- **What Happened:** In mid-July 2025, CISA's interim chief uploaded at least four documents marked "For Official Use Only" (FOUO) to OpenAI's public ChatGPT instance, triggering automated DHS security alerts.
- **Root Cause:** Had obtained special permission to use ChatGPT but used a public instance rather than a government-secured version. The distinction between "approved to use AI" and "approved to use this specific AI tool for this specific data classification" was unclear.
- **Impact:** Internal DHS review initiated. High-profile embarrassment given the individual's role as the nation's top civilian cybersecurity official.
- **Lessons Learned:** Seniority does not prevent misuse. Even authorized users with security clearances can make governance mistakes. Exemption processes need the same rigor as baseline policies.
- **Source:** TechCrunch (2026); IT Pro (2025)
- **Relevance to BYU-Idaho:** University leadership and power users who receive early access to AI tools need the same governance training as everyone else -- possibly more, given their access to sensitive institutional data.

### 21. Shadow AI Across Industries -- IBM 2025 Cost of a Data Breach Report

- **Institution/Organization:** Cross-industry analysis (IBM, Reco, Gartner)
- **What Happened:** IBM's 2025 report found 20% of organizations experienced security breaches specifically attributable to shadow AI. These breaches cost an average of $4.63 million -- $670,000 more than standard breaches.
- **Root Cause:** 97% of organizations that experienced AI-related breaches lacked proper AI access controls. 63% had no AI governance policy or were still developing one. 47% of employees using generative AI platforms did so through personal accounts.
- **Impact:** Shadow AI breaches disproportionately affected customer PII (65% of cases) and intellectual property (40%). Took longer to detect (247 days average). Gartner predicts 40% of organizations will experience shadow AI security breaches by 2030.
- **Lessons Learned:** Shadow AI is not hypothetical -- it is actively causing breaches at significant scale and cost. Organizations that provide sanctioned AI tools with appropriate guardrails experience fewer shadow AI incidents.
- **Source:** IBM Cost of a Data Breach Report (2025); Reco 2025 State of Shadow AI Report; Gartner (2025)
- **Relevance to BYU-Idaho:** If the university does not provide approved, governed AI tools for common tasks, employees and faculty will use personal accounts on public AI platforms. This is the single most predictable failure mode.

### 22. Healthcare Shadow AI -- Patient Data Leaks (2024-2025)

- **Institution/Organization:** Multiple healthcare organizations (aggregate data)
- **What Happened:** 86% of healthcare IT executives reported shadow IT instances (up from 81% in 2024). 71% of healthcare workers used personal AI accounts for work tasks. One documented case involved a hospital AI chatbot sharing patient appointment details with third-party analytics providers.
- **Root Cause:** Healthcare workers face persistent burnout and staffing shortages, driving adoption of any tool that improves efficiency. 96% of healthcare organizations relied on AI tools that train on user data.
- **Impact:** Healthcare data breaches reached 259 million affected individuals in 2024 (up from 27 million in 2020). Average healthcare breach cost $7.4 million.
- **Lessons Learned:** Compliance-heavy industries face the highest stakes from shadow AI because the data involved is regulated. Well-intentioned employees adopt unsanctioned tools to cope with workload pressures, inadvertently creating compliance violations.
- **Source:** symplr (2025); IBM (2025); Netskope (2025); TechTarget Health IT Security
- **Relevance to BYU-Idaho:** Higher education shares the compliance burden (FERPA instead of HIPAA). Faculty, advisors, and staff face the same productivity pressures that drive healthcare workers to use unsanctioned AI tools.

### 23. OpenAI/ChatGPT -- Italy GDPR Fine and Temporary Ban (2023-2024)

- **Institution/Organization:** OpenAI and Italy's Garante per la protezione dei dati personali
- **What Happened:** Italy became the first Western nation to ban ChatGPT in March 2023 over data privacy concerns. In December 2024, the Garante fined OpenAI 15 million euros -- the first GenAI fine under the GDPR framework.
- **Root Cause:** OpenAI launched globally without adequate compliance with regional data protection regulations. No legal basis for processing personal data for model training, failure of transparency, inadequate age verification.
- **Lessons Learned:** AI tool providers are subject to data protection regulations. Organizations must verify that adopted AI tools comply with applicable regulations before deployment.
- **Source:** The Hacker News (2024); Lewis Silkin legal analysis (2025); Fortune (2023)
- **Relevance to BYU-Idaho:** Any AI tool adopted by the university -- whether institution-wide or by individual citizen developers -- must be vetted for compliance with FERPA, GLBA, and state privacy laws.

### 24. Citizen Development App Sprawl and Orphaned Applications

- **Institution/Organization:** Cross-industry pattern (CIMI Corporation, Blueprint Systems, Gartner, Deloitte)
- **What Happened:** A 2018 CIMI Corporation survey found 54% of citizen development projects were failures after the first year, 28% had marginal results, and less than 20% were clear successes. Ernst & Young reports up to 50% of RPA projects fail. Deloitte found only 3% of organizations successfully scaled RPA solutions.
- **Root Cause:** Applications become orphaned when creators leave. No maintenance standards, no ownership model. Integration with enterprise systems exceeds citizen developer skill sets. Organizations underestimate training and support requirements.
- **Impact:** Organizations without formal governance experience application sprawl, security violations, and compliance breaches at rates 3-4x higher than those with Centers of Excellence. IT teams inherit undocumented, unmaintained applications.
- **Lessons Learned:** Citizen development without governance is shadow IT with marketing approval. Successful programs require an application registry, ownership assignment, maintenance standards, security baselines, lifecycle management, and graduated complexity tiers.
- **Source:** CIMI Corporation survey (2018); Panorama Consulting (EY/Deloitte data); VentureBeat
- **Relevance to BYU-Idaho:** Given existing Power Platform usage, this is the most directly applicable pattern. Without governance, campus-built Power Automate flows, Power Apps, and AI integrations will follow the same trajectory.

### 25. Microsoft Copilot -- Data Oversharing and Governance Delays (2024-2025)

- **Institution/Organization:** Multiple enterprises deploying Microsoft 365 Copilot
- **What Happened:** Copilot accessed nearly 3 million sensitive records per organization on average during the first half of 2025. 16% of business-critical data was overshared (802,000 files at risk per organization). 40% of IT leaders delayed Copilot rollouts by three months or more. The U.S. House of Representatives banned congressional staff from using Copilot over data security risks.
- **Root Cause:** Copilot inherits user permissions. In organizations with permissive file-sharing defaults, it surfaces and synthesizes sensitive documents that users technically had access to but would never have found manually. A zero-click vulnerability (CVE-2025-32711, CVSS 9.3) also demonstrated AI assistants can be exploited for automated data exfiltration.
- **Lessons Learned:** AI tools amplify existing governance weaknesses. If your organization has overpermissioned file shares, ungoverned SharePoint sites, or loose access controls, deploying an AI assistant will surface and compound every permission problem. Data governance must precede AI deployment.
- **Source:** Computerworld/Gartner survey (2025); security research
- **Relevance to BYU-Idaho:** Before enabling AI-powered tools like Copilot across campus, the university must audit and remediate file permissions, SharePoint governance, and data access controls.

### 26. AI Hallucinations in Professional and Government Settings (2024-2025)

- **Institution/Organization:** Multiple -- courts, government agencies, consulting firms
- **What Happened:** An AI Hallucination Cases database has documented 486 cases worldwide (324 in U.S. courts). A U.S. District Judge sanctioned a lawyer after 12 of 19 cited cases were fabricated. A Colorado attorney received a 90-day suspension. Deloitte submitted a A$440,000 report to the Australian government containing hallucinated academic sources and a fabricated court quote.
- **Lessons Learned:** AI hallucinations are a systemic risk when AI-generated content is used without human verification. The risk is highest in domains requiring accuracy (legal, regulatory, academic, compliance). Any citizen-developed tool that generates text for official purposes must include verification workflows.
- **Source:** AI Hallucination Cases Database; Stanford HAI; Cronkite News
- **Relevance to BYU-Idaho:** A citizen developer building a chatbot for academic advising, policy lookup, or financial aid guidance must implement verification mechanisms.

---

## Common Failure Patterns

Across all documented cautionary tales, five recurring patterns emerge:

### 1. Governance Vacuum as the Primary Enabler

Every major incident traces back to absent or inadequate governance. Samsung had no data classification policy for AI tools. PowerSchool's portal lacked MFA. Illuminate kept departed-employee credentials active. The IBM report found 97% of AI-breached organizations lacked access controls. This is not a technology problem -- it is an organizational decision-making problem.

### 2. No Data Classification Framework

Organizations that failed to classify their data before enabling AI tools experienced the worst outcomes. Samsung employees did not know which data was too sensitive for ChatGPT because no classification existed. Healthcare workers uploaded PHI to consumer AI tools because no one defined which data required which protections. A data classification framework is a prerequisite for any AI governance program.

### 3. No Ownership or Lifecycle Model

Citizen-developed applications without assigned owners become orphaned when the creator changes roles or leaves. The 54% first-year failure rate for citizen development projects is driven primarily by the absence of maintenance and ownership models. This creates a growing inventory of unmaintained, undocumented tools that IT must eventually discover and assess.

### 4. Shadow AI Filling the Governance Vacuum

When organizations restrict AI access without providing approved alternatives, employees adopt shadow AI tools on personal accounts. This is not defiance -- it is pragmatism. The IBM data shows that organizations providing sanctioned AI tools experience fewer shadow AI incidents. Ban without alternatives, and you get uncontrolled shadow AI. Govern with approved tools and clear boundaries, and you get controlled, auditable AI adoption.

### 5. AI Amplifies Existing Weaknesses

Microsoft Copilot did not create overpermissioning problems -- it surfaced and amplified them. Shadow AI did not create ungoverned data flows -- it multiplied them. Any AI governance framework must first address foundational governance maturity (data classification, access controls, vendor management, change management) before layering AI-specific policies on top.

---

## Evidence Quality Assessment

| Case | Evidence Quality | Source Type |
|------|-----------------|-------------|
| Miami Dade College | Medium -- vendor customer story | Microsoft Customer Story |
| USF | Medium -- vendor blog | Microsoft Education Blog |
| BYU Pathway Worldwide | Medium -- vendor blog, single metric | Microsoft Copilot Blog |
| Victoria University | Medium -- vendor blog, pilot data | Microsoft Copilot Blog |
| Florida State University | Medium -- vendor blog + conference abstract | Microsoft/STARS Conference |
| University of Manchester | Medium-High -- detailed vendor case study | Microsoft Customer Story |
| Macquarie University | Medium -- vendor blog | Microsoft Education Blog |
| Ohio University | Medium -- primary institutional source, limited data | Ohio University OIT |
| Gettysburg College | Medium -- vendor case study | Kuali |
| Azusa Pacific University | Medium -- vendor case study, long-running | Formstack |
| Deutsche Bahn | High -- detailed Microsoft Learn case study | Microsoft Learn |
| H&M Group | Medium-High -- detailed security architecture | Microsoft Customer Story |
| Medtronic | Medium-High -- trade press + vendor docs | SD Times/ServiceNow |
| Microsoft (Internal) | Medium -- first-party vendor case study | Microsoft Inside Track |
| Samsung ChatGPT leak | High -- widely confirmed | News reports, Samsung statements |
| PowerSchool breach | High -- FTC action, class-action lawsuits | Legal filings, vendor disclosure |
| Illuminate Education | High -- FTC consent order, AG settlements | Federal enforcement |
| NYC MyCity chatbot | High -- investigative journalism, government response | The Markup |
| Blue Shield California | High -- HHS OCR filing | Regulatory filing |
| CISA ChatGPT incident | High -- DHS security alerts | News reports, government confirmation |
| IBM shadow AI data | High -- annual research with methodology | IBM Security |
| Healthcare shadow AI | Medium-High -- aggregate surveys | Industry surveys |
| Italy/OpenAI GDPR | High -- regulatory enforcement | Government enforcement |
| App sprawl/orphaned apps | Medium -- survey data, some aging | Industry surveys, consulting research |
| Microsoft Copilot oversharing | Medium-High -- Gartner surveys | Industry research |
| AI hallucinations | High -- court records, curated database | Legal records |

### Key Evidence Gaps

1. **No university-specific AI citizen development failure cases are published.** Most documented failures come from corporate, healthcare, and government settings. The patterns are directly transferable, but there is a gap in published higher ed case studies. FERPA violations are handled through Department of Education compliance processes with less public visibility than FTC or GDPR enforcement.

2. **Citizen development failure statistics are aging.** The most-cited failure rate data (CIMI Corporation's 54%) is from 2018. More recent data focuses on shadow AI rather than traditional citizen development failures.

3. **Vendor bias in governance literature.** Many governance recommendations come from vendors selling governance solutions. The IBM and Gartner data is more independent.

4. **University success cases are near-exclusively from Microsoft vendor stories.** No independent, peer-reviewed study of citizen development programs in higher education was found. Ohio University is the only institution with an explicit "citizen developer" program, but it published limited outcome data.

---

# Section 5: Compliance and Governance Analysis

## FERPA Requirements for AI Tools

### What FERPA Requires When Student Data Touches AI Tools

FERPA (20 U.S.C. 1232g; 34 CFR Part 99) restricts the disclosure of personally identifiable information (PII) from education records without prior written consent from the parent or eligible student. When an AI tool processes student data -- grades, enrollment status, academic performance, disciplinary records, or any other education record -- the institution must have a lawful basis for that disclosure.

The most commonly invoked basis is the **school official exception** under 34 CFR 99.31(a)(1)(i)(B). Under this exception, an institution may disclose education records to a contractor, consultant, or other outside party without student consent, provided three conditions are met:

1. The outside party **performs an institutional service or function** for which the institution would otherwise use employees.
2. The outside party is **under the direct control** of the institution with respect to the use and maintenance of education records.
3. The outside party is **subject to the same FERPA requirements** governing use and redisclosure of PII that apply to other school officials (per 34 CFR 99.33(a)).

The Department of Education interprets "direct control" to mean that the institution imposes contractual restrictions on the service provider's conduct regarding education records.

### The "School Official" Exception and Its Limits

The school official exception was designed for outsourced institutional services -- tutoring programs, IT systems, counseling services. Applying it to AI tools requires that each tool meet all three criteria above. Critical limits include:

- **Purpose limitation.** The AI vendor may use student data only for the purposes for which it was disclosed. An AI grading tool, for example, cannot use student submissions to train its general-purpose models, sell data to third parties, or repurpose the data beyond the contracted service.
- **Redisclosure prohibition.** The vendor may not redisclose PII to any other party without prior written consent from the student or parent.
- **Contractual requirement (best practice).** While FERPA does not technically require a written agreement for the school official exception, the Department of Education strongly recommends written contracts that specify permitted uses, prohibit unauthorized redisclosure, and require the vendor to disclose all third-party subprocessors that may access student data.
- **Model training.** If an AI vendor uses student data to train or fine-tune models that serve other customers, that likely constitutes an impermissible secondary use. The EDUCAUSE 2025 AI Landscape Study explicitly notes that vendors should never be allowed to use student data for model training nor retain that data beyond the contracted service period.

### Recent Department of Education Guidance on AI

The Department of Education has issued guidance relevant to AI in education, though no single comprehensive FERPA-and-AI regulation exists as of this writing:

- **April 2025 Dear Colleague Letter:** The Department issued guidance emphasizing education records requirements, the need to share safety-related information, and the requirement to issue annual privacy notices to students and parents.
- **PTAC Cloud Computing FAQ:** The Privacy Technical Assistance Center published guidance on cloud computing and FERPA that is directly analogous to AI tool usage. This guidance establishes that schools outsourcing IT services must ensure service agreements prohibit improper use of or access to education records, and that the "school official" exception applies only if the cloud provider remains under the "direct control" of the institution.
- **FPF Vetting Checklist (October 2024):** The Future of Privacy Forum published a checklist and policy brief to help schools vet generative AI tools for FERPA and COPPA compliance. Key considerations include whether the tool uses data inputs to further train its larger model, whether data will be de-identified, and whether the tool's use cases fall within the scope of the school official exception.
- **Pending AACRAO Publication (2026):** AACRAO is preparing a comprehensive FERPA publication that will address AI and student privacy, expected to provide updated interpretation guidance.

It is important to note that FERPA predates the widespread use of AI in education. The regulatory text does not mention artificial intelligence, machine learning, or large language models. Institutions must apply existing FERPA principles -- purpose limitation, direct control, redisclosure restrictions -- to AI tool usage by analogy and interpretation. This creates interpretive ambiguity that institutions should acknowledge rather than paper over.

### Enforcement Risk: What Happens When Institutions Get This Wrong

FERPA enforcement is handled by the Department of Education's Student Privacy Policy Office (SPPO). The statutory penalty is withdrawal of all federal funding from a noncompliant institution -- sometimes called the "nuclear option." The Department has never imposed this penalty. In practice, the enforcement process works as follows:

1. SPPO receives a complaint or initiates an investigation.
2. If a violation is found, SPPO works with the institution toward voluntary compliance.
3. If voluntary compliance is not achieved, the institution risks loss of federal education funding.

While the ultimate penalty has never been imposed, enforcement activity is increasing:

- In 2024, cases involving third-party data sharing rose 34%.
- In September 2024, New York State's Education Department collected $287,000 in penalties from two technology companies that violated student data privacy protections.
- In March 2025, SPPO launched investigations into the California and Maine state education agencies for alleged FERPA violations.
- Major vendor breaches -- the 2022 Illuminate Education incident (3+ million student records) and the 2024 PowerSchool breach (62 million students, 9.5 million educators) -- demonstrate the scale of exposure when vendor controls fail.

The practical enforcement risk is not immediate funding loss. It is reputational damage, regulatory investigation, mandatory remediation, and the precedent-setting possibility that the Department could escalate enforcement as AI-related complaints increase.

---

## The Specific Risk: Student Data in Citizen-Built AI

### How Citizen-Built AI Tools Create FERPA Exposure

Citizen-built AI tools -- applications built by non-IT employees using platforms like Base44, Lovable, or similar no-code/low-code AI builders -- create FERPA exposure through a fundamentally different risk profile than IT-managed systems:

1. **No vendor vetting.** IT-managed AI tools go through procurement, security review, and legal review. Citizen-built tools bypass all three. The employee selects the platform, connects data sources, and deploys -- often within hours.
2. **No contractual protections.** The institution has no direct contract with the underlying AI platform governing student data use, redisclosure, or model training. The employee's click-through terms of service are not institutional agreements and do not satisfy FERPA's direct control requirement.
3. **No data flow visibility.** IT has no visibility into what data is flowing to which AI services. Shadow AI research indicates that more than 80% of workers use unapproved AI tools, and only 37% of organizations have policies to detect or manage shadow AI (IBM, 2025).
4. **Model training risk.** Many consumer and freemium AI platforms use input data to train or improve their models. If student PII enters these platforms, it may be incorporated into model weights, making deletion effectively impossible.

### Data Flow Analysis: Where Does Student PII Go?

When an employee uses an unsanctioned AI tool to build an application that processes student data, the PII typically flows through multiple parties:

- **The no-code/low-code platform** (e.g., Base44, Lovable) receives and processes the data to execute the application logic.
- **The underlying LLM provider** (e.g., OpenAI, Anthropic, Google) receives data via API calls made by the platform. The platform's API agreement with the LLM provider governs data handling -- not the institution's agreement, because no such agreement exists.
- **Third-party subprocessors** used by the platform or the LLM provider (cloud hosting, analytics, logging services) may also receive or store student data.

At each hop, the institution loses control over how student data is used, stored, and potentially redisclosed. This is the core FERPA problem: the institution cannot demonstrate "direct control" over any of these parties because it has no contractual relationship with them.

### IT-Managed AI vs. Citizen-Built AI: The Compliance Gap

| Dimension | IT-Managed AI | Citizen-Built AI |
|---|---|---|
| Vendor vetting | Procurement and security review | None |
| Contractual controls | Data processing agreement with FERPA provisions | Employee click-through TOS only |
| Direct control (FERPA) | Established via contract | Not established |
| Data flow visibility | Logged, monitored, auditable | Unknown to institution |
| Model training controls | Contractually prohibited | Governed by vendor's default policies |
| Incident response | Covered by institutional plan | Not covered |
| Ongoing compliance monitoring | Continuous | None |

The gap is categorical, not incremental. Citizen-built AI tools that process student data operate entirely outside the institution's FERPA compliance framework.

---

## AI Model Governance

### Controlling Which LLMs/APIs Citizen-Built Tools Can Call

If the institution moves toward governed citizen development (rather than prohibition), a central technical requirement is controlling which AI models citizen-built applications can access. The emerging approach is an **LLM gateway** or **AI control plane** -- a centralized proxy through which all AI API calls are routed.

An LLM gateway provides:

- **Model allow-listing.** Only approved AI models and providers are accessible. Citizen-built applications cannot call unapproved third-party APIs.
- **Role-based access control (RBAC).** Different user roles receive access to different models and capabilities. A citizen developer building a course scheduling tool might access a lower-risk model, while applications handling student PII might be restricted to institution-hosted models or models with specific contractual protections.
- **Token-based budgets and rate limiting.** The gateway enforces cost controls and prevents runaway API usage.
- **Audit logging.** Every API call is logged with the requesting user, the data sent, and the model response -- enabling compliance monitoring and incident investigation.
- **Data residency enforcement.** The gateway can enforce that data stays within specific geographic or jurisdictional boundaries.

Leading approaches include centralized API key management (no shared keys, no employee-managed API credentials), model routing with failover, and semantic caching to reduce unnecessary data transmission.

### Preventing Student Data from Flowing to Unvetted Third-Party Models

Prevention requires both technical and policy controls:

**Technical controls:**
- LLM gateway with model allow-listing (described above)
- DLP (Data Loss Prevention) integration that scans prompts and inputs in real time, blocking PII before it reaches any AI model
- Automated PII detection and redaction at the gateway layer
- Network-level controls blocking unauthorized AI API endpoints

**Policy controls:**
- Explicit prohibition on sending FERPA-protected data to unapproved AI services
- Required use of the institutional AI gateway for all AI API calls
- Incident reporting requirements for suspected data exposure
- Annual training on FERPA requirements specific to AI tool usage

### Data Loss Prevention for AI Workflows

Traditional DLP solutions were not designed for generative AI workflows. Modern AI-aware DLP must:

- **Scan prompts in real time** before they reach the AI model, detecting PII patterns (names, student IDs, SSNs, grades, enrollment data).
- **Block or redact** sensitive data before transmission rather than after.
- **Monitor outputs** for potential PII leakage in model responses (models can memorize and reproduce training data).
- **Handle context-dependent sensitivity.** A student name alone may not trigger DLP, but a student name combined with a grade or disciplinary record constitutes FERPA-protected PII.
- **Integrate with the LLM gateway** to provide a single enforcement point.

Solutions in this space include Nightfall AI, Strac, Lakera, and enterprise DLP features from major cloud providers (Microsoft Purview, AWS Macie). The key requirement is that the DLP layer sits between the citizen-built application and the AI model -- the institution cannot rely on the citizen developer to implement DLP within their application.

---

## Data Classification for Citizen Development

### Which Data Tiers Are Appropriate for Citizen Development

A standard four-tier data classification framework applied to citizen AI development:

| Tier | Label | Description | Citizen Development? |
|---|---|---|---|
| 1 | Public | Published information, marketing materials, course catalog data | Yes -- no restrictions |
| 2 | Internal | Operational data not intended for public release (meeting notes, internal reports) | Yes -- with basic governance |
| 3 | Confidential | Business-sensitive data, non-PII employee data, aggregate institutional data | Limited -- requires review and approval |
| 4 | Restricted | FERPA-protected student PII, SSNs, financial aid data, grades, disciplinary records, health records | No -- unless processed through fully governed, IT-managed infrastructure |

### What Data Citizen Developers Should Never Touch

The following data categories should be excluded from citizen development entirely, regardless of governance controls:

- **Education records** as defined by FERPA (grades, transcripts, enrollment status, financial aid, disciplinary records)
- **Social Security numbers** and government-issued identifiers
- **Health records** (HIPAA-protected or otherwise)
- **Financial account information** (PCI-governed data)
- **Authentication credentials** and access tokens
- **Data subject to legal holds** or active investigations

If a citizen-developed application requires access to restricted data, it should be escalated to IT for development within the institution's managed infrastructure, with appropriate contractual, technical, and compliance controls.

### How to Enforce Data Access Boundaries

Enforcement requires layered controls:

1. **Identity and access management.** Citizen development platforms should authenticate through the institution's identity provider (Entra ID / Azure AD). Data access permissions should be inherited from institutional RBAC, not configured within the citizen development platform.
2. **API-level data segmentation.** APIs that expose restricted data should not be accessible from citizen development platforms. Only pre-approved, sanitized data endpoints should be available.
3. **Automated classification and scanning.** Data entering citizen development workflows should be automatically scanned and classified. Restricted data should be blocked at ingestion.
4. **Runtime monitoring.** Continuous monitoring of citizen-built applications for data access pattern anomalies (e.g., an application suddenly accessing student records it was not designed to use).

---

## Published Governance Frameworks

### Institutional Frameworks from Peer Universities

Published university AI governance approaches as of early 2026 vary significantly in maturity:

- **EDUCAUSE 2025 AI Landscape Study:** Found that 39% of institutions had AI-related acceptable use policies (up from 23% in 2024), but only 9% of respondents considered their institution's cybersecurity and privacy policies adequate to address AI-related risks.
- **Stanford University:** Operates a public ethics review board for AI decision-making and publishes AI teaching guides for faculty. Stanford's Human-Centered AI Institute (HAI) publishes annual AI Index Reports that include governance policy analysis.
- **MIT:** Implements regular AI ethics audits and maintains a governance committee for ethical AI deployment.
- **Harvard University:** Aligns AI guidance with FERPA and institutional data-security protocols. The Faculty of Arts and Sciences uses a tiered course-level AI policy (AI-permitted, some AI allowed, no AI).
- **Higher Education Authority (Ireland):** Published a national-level "Generative AI in Higher Education Teaching & Learning: Policy Framework" (December 2025) providing a shared reference for institutions navigating AI adoption.
- **JISC (UK):** Published "A Strategic Framework for AI in Colleges and Universities" (August 2025) addressing institutional-level AI strategy.

A common finding across these frameworks: most university AI policies focus on academic integrity (student use of AI in coursework) rather than institutional data governance for employee-built AI applications. The citizen development governance gap is largely unaddressed in published university frameworks.

### Industry Frameworks Adapted for Higher Ed

**NIST AI Risk Management Framework (AI RMF 1.0, January 2023):**
The NIST AI RMF provides a voluntary, sector-agnostic framework built on four core functions:

1. **Govern** -- Establish organizational AI risk management culture, policies, and accountability structures.
2. **Map** -- Identify and document AI system context, including intended purposes, stakeholders, and potential impacts.
3. **Measure** -- Assess and track AI risks using quantitative and qualitative methods.
4. **Manage** -- Prioritize and act on AI risks based on assessment outcomes.

The Govern function is most directly applicable to citizen development governance: it requires leadership commitment, clear governance structures, defined roles and responsibilities, and ongoing risk monitoring. The framework is designed to be adaptable to organizational context, including higher education.

**NIST AI 600-1 (Generative AI Profile):**
A companion document to the AI RMF that addresses risks specific to generative AI, including data privacy, confabulation, and information integrity. Directly relevant to LLM-based citizen development tools.

**Joint Commission / CHAI Responsible Use of AI in Healthcare:**
While healthcare-specific, this framework addresses analogous challenges in a regulated environment: AI governance structures, patient (student) privacy and transparency, and ongoing monitoring. It proposes governance across seven key domains and provides a maturity model approach.

**Cloud Security Alliance (CSA) AI Security Governance Report (December 2025):**
Found that governance maturity is the strongest indicator of organizational readiness for AI. Only 25% of organizations report comprehensive AI security governance. Where governance is mature, 48% express confidence in AI security; where governance is partial, only 23% do.

**COBIT Framework (Applied to AI):**
Some researchers propose adapting the seven components of the COBIT framework to AI governance: principles/policies/frameworks, processes, organizational structures, culture/ethics/behavior, information, services/infrastructure/applications, and people/skills/competencies.

### Common Elements of Effective AI Governance Programs

Across published frameworks, the following elements appear consistently:

1. **Centralized governance body** (AI governance committee, ethics board) with cross-functional representation (IT, legal, compliance, academic affairs, data privacy).
2. **AI inventory and registry** -- a catalog of all AI tools and applications in use, including citizen-built tools.
3. **Risk-based tiering** -- classifying AI applications by risk level based on data sensitivity, decision impact, and autonomy.
4. **Vetting and approval process** -- a defined process for evaluating new AI tools before deployment, with different rigor for different risk tiers.
5. **Ongoing monitoring and audit** -- continuous monitoring of AI tool usage, data flows, and compliance, not just point-in-time approval.
6. **Training and awareness** -- regular training for all employees on AI policies, FERPA requirements, and acceptable use.
7. **Incident response** -- defined procedures for responding to AI-related data incidents.
8. **Vendor management** -- contractual requirements for AI vendors addressing data use, model training, redisclosure, and breach notification.

---

## What "Governed Enablement" Requires

### Minimum Governance Requirements for a Compliant Citizen Development Program

A citizen development program that handles any institutional data (beyond purely public data) requires at minimum:

1. **AI Acceptable Use Policy** that defines what citizen developers can and cannot build, what data they can access, and what AI services they can use.
2. **Approved platform list** -- a curated set of citizen development platforms that have been vetted for security, privacy, and contractual compliance.
3. **LLM gateway or API control plane** -- a technical enforcement layer that routes all AI API calls through institutionally controlled infrastructure with model allow-listing, DLP, and audit logging.
4. **Data classification enforcement** -- automated controls that prevent restricted data (FERPA-protected PII) from entering citizen development workflows.
5. **Registration and approval process** -- citizen-built applications must be registered, reviewed for data access scope, and approved before deployment.
6. **Training requirement** -- citizen developers must complete training on FERPA, data classification, and acceptable AI use before gaining access to citizen development platforms.
7. **Ongoing monitoring** -- continuous monitoring of data flows, API usage, and application behavior for compliance anomalies.
8. **Incident response integration** -- citizen-built applications must be covered by the institution's data breach and incident response plan.

### The Governance Stack: Policy, Technology, Process, People

Governance is not a single control. It is a stack of interdependent layers:

| Layer | Components | Purpose |
|---|---|---|
| **Policy** | AI acceptable use policy, data classification policy, FERPA compliance policy, vendor management policy | Define the rules |
| **Technology** | LLM gateway, DLP, identity and access management, automated data classification, monitoring and alerting, API management | Enforce the rules technically |
| **Process** | Application registration, vetting and approval workflow, periodic review and recertification, incident response, audit and reporting | Operationalize the rules |
| **People** | AI governance committee, FERPA compliance officer, citizen developer training program, IT support for citizen developers, designated reviewers/approvers | Execute and sustain the program |

All four layers must be in place. Policy without technology enforcement is aspirational. Technology without process is unmanageable. Process without trained people is unsustainable.

### Ongoing Costs of Governance

Governed enablement is not a one-time implementation. Ongoing costs include:

- **LLM gateway operation and maintenance** -- infrastructure, licensing, updates, and monitoring.
- **DLP tuning and updates** -- ongoing refinement of detection rules as data patterns and AI tools evolve.
- **Application review and approval** -- staff time for reviewing citizen-built applications, including periodic recertification.
- **Training program delivery** -- initial and annual refresher training for citizen developers and approvers.
- **Monitoring and audit** -- staff time and tooling for continuous compliance monitoring.
- **Incident investigation** -- resources for investigating and remediating AI-related data incidents.
- **Vendor management** -- ongoing assessment of citizen development platforms and AI service providers as their terms, capabilities, and data practices change.
- **Policy maintenance** -- regular policy review and updates as regulations, technology, and institutional needs evolve.
- **Governance committee operations** -- meeting time, decision-making, and cross-functional coordination.

These costs are real and recurring. They should be budgeted explicitly, not treated as absorbed overhead. The alternative -- ungoverned citizen development -- carries higher costs in the form of compliance risk, potential enforcement action, reputational damage, and remediation after incidents.

---

# Section 6: Platform Evaluation

## Executive Summary

This section evaluates citizen development platforms against BYU-Idaho's specific requirements: FERPA compliance, governance controls, maintenance burden, learning curve for non-technical users, Azure ecosystem integration, and cost. Nine platforms were assessed. The evaluation is criteria-driven, not vendor-biased.

**Bottom line:** No single platform solves citizen development. The strongest strategy is a tiered approach: Microsoft Power Platform as the primary governed platform for broad citizen development, n8n as a governed power-user platform for technically inclined staff, and Retool as a complement for internal tooling. Lovable should be governed as a prototyping sandbox. Base44 should be prohibited for institutional data.

---

## Comparative Summary Matrix

| Criterion | Copilot Studio / Power Platform | n8n | Retool | ServiceNow AES | Lovable Enterprise |
|-----------|-------------------------------|-----|--------|----------------|--------------------|
| **FERPA compliance** | Adequate | Strong | Strong | Strong | Weak |
| **Governance controls** | Strong | Moderate | Strong | Strong | Adequate |
| **IT maintenance burden** | Weak | Moderate-High | Adequate | Adequate | Weak |
| **Non-technical user UX** | Adequate-to-Weak | High (barrier) | Adequate | Adequate | Strong |
| **Azure integration** | Strong | Strong | Strong | Adequate | Weak |
| **Cost (annual estimate)** | $150K-$300K+ | Low-Moderate (software) / Moderate-High (staffing) | $14K-$48K (edu discounts available) | Incremental if existing customer | ~$24K + per-app hosting |
| **Overall fit for BYU-Idaho** | Primary platform (with CoE investment) | Tier 2 power-user platform | Strong complement for internal tools | Strong if existing customer | Prototyping sandbox only |

**Platforms considered and excluded:** Appian (overpriced, no higher ed footprint), Base44 (no governance), OutSystems (targets professional devs), Mendix (no advantage over Power Platform), Bubble (no governance), Caspio (notable FERPA edition but too narrow).

Rating scale: **Strong** / **Adequate** / **Weak** / **Unknown**

---

## Platform 1: Microsoft Copilot Studio and Power Platform

### Overview

Microsoft Copilot Studio and the broader Power Platform represent the most natural citizen development option for BYU-Idaho given the university's existing Microsoft 365 licensing and Azure infrastructure. The platform offers strong governance controls and deep Azure integration. However, this evaluation identifies significant concerns around usability for non-technical users, licensing complexity, maintenance burden at scale, and the historical precedent of ungoverned Power Platform sprawl at BYU-Idaho itself.

### Copilot Studio Capabilities (2025-2026)

**Core features:**
- Custom AI agent creation with generative AI (GPT-based) responses
- Generative answers from enterprise knowledge sources (SharePoint, websites, uploaded documents)
- Generative orchestration that dynamically selects topics, actions, and knowledge sources
- Over 1,400 external connectors via the Power Platform connector ecosystem
- Model Context Protocol (MCP) support for connecting AI apps, APIs, and data sources
- Code interpreter (GA) enabling Python code execution within agents
- GPT-5 model deployment (as of late 2025)
- Multi-channel publishing: Microsoft Teams, websites, custom endpoints, social platforms
- Application Lifecycle Management (ALM) with dev/test/prod environment support

**Knowledge sources:** SharePoint sites and files (7 MB limit for non-M365 Copilot licensed makers), public websites, uploaded documents, Dataverse tables, and custom connectors to external data sources.

### Pricing and Licensing

Copilot Studio licensing is notably complex:

- **Standalone:** Tenant-wide license with capacity packs of 25,000 Copilot Credits at $200/pack/month
- **Via M365 Copilot:** Education pricing reduced from $420 to $276/user/year as of March 2026
- **Managed Environments** (required for full governance) require Power Apps Premium or equivalent licenses for all active users
- **Total estimated annual cost for meaningful deployment:** $150,000-$300,000+, depending on scope

**Critical:** The credit-based consumption model creates unpredictable cost exposure. Trial/developer environments are throttled to 10 requests per minute. Production agents exceeding quota become unavailable until capacity is added.

### Governance Features

Governance is comprehensive in scope but requires active configuration:

**Tenant-level:** DLP policies to allow/block unauthenticated usage, channels, knowledge sources, connectors, and skills. Ability to block publishing of agents that use generative AI entirely.

**Environment-level:** DLP policy scoping per environment or environment group. Public data source blocking. Virtual network support and IP firewall. Security group-based environment access.

**Agent-level:** Enable/disable generative orchestration, AI knowledge, generative answers per agent. Authentication enforcement. Sharing controls.

**Audit and compliance:** Full audit logging in Microsoft Purview (GA since January 2025). Logs include user prompts, responses, knowledge sources accessed, and conversation transcripts. Microsoft Sentinel integration for alerts. Customer-managed encryption keys.

**Critical finding: DLP is disabled by default.** Organizations must actively enable and enforce DLP policies. In 2021, misconfigured Power Apps portals exposed 38 million records across 47 organizations. Microsoft's initial response was that this was "by design."

### Copilot Studio in Higher Education

Documented deployments are primarily M365 Copilot (the user-facing assistant), not Copilot Studio (the agent-building platform):
- **University of South Florida:** Automated help desk support via Copilot Studio
- **Miami Dade College:** AI-powered assistants, 15% pass rate increase, 12% dropout decrease
- **University of Manchester:** M365 Copilot to 65,000 staff and students, 90% adoption in 30 days
- **Indiana University:** 10% performance improvement, 40% task completion time reduction

Documented Copilot Studio-specific deployments in higher education remain sparse.

### Known Limitations

- Platform "manages to feel both limited and overly complex" (user reviews)
- Learning curve is the top user complaint on G2 (7 mentions)
- Ron's assessment that it is "difficult to use even for technical users" is corroborated by community feedback
- SharePoint file knowledge source capped at 7 MB for non-M365 Copilot licensed makers
- Multiple overlapping licensing models create confusion
- Managed Environments (governance features) require premium licensing, with enforcement beginning March 2026

### Power Platform Center of Excellence (CoE) Toolkit

The CoE Starter Kit is Microsoft's reference implementation for governance: inventory of all apps/flows/connectors, usage analytics, governance monitoring, maker onboarding, orphaned resource detection. It is essential infrastructure for any citizen development program.

However, the CoE toolkit is itself a Power Platform solution that must be deployed, configured, and maintained by IT staff. Organizations report that mature CoEs deliver results (67% faster solution delivery, 72% improved security posture), but this requires dedicated staffing.

### FERPA Compliance Assessment

**Microsoft's FERPA posture:** In Online Services Terms, Microsoft agrees to be designated as a "school official" with "legitimate educational interests" in customer data. Power BI, PowerApps, and Power Automate are specifically covered services.

**Shared responsibility model:** Microsoft provides the infrastructure; the institution must properly classify and protect student records, enforce least-privilege permissions, apply sensitivity labels and DLP policies, ensure citizen-developed apps do not expose FERPA-protected data, and audit data flows.

**Core FERPA risk in citizen development:** A citizen developer creates a Power App or Copilot Studio agent that accesses student data without proper permissions boundaries, sensitivity labels, or DLP controls -- through overly broad SharePoint permissions, unauthenticated channels, or connectors bridging data classifications.

### Azure Integration

**Native and deep.** Power Platform authenticates through Entra ID natively. Security groups control environment access, maker licensing, and security roles. Conditional Access policies apply. Key Vault connector for secrets. PostgreSQL connector for database access. This is the platform's clearest advantage for BYU-Idaho.

### Risk Analysis: The Citizen Development Paradox

The Power Platform community has engaged in significant debate about whether citizen development has "failed." Microsoft's original vision (2016-2020) was Power Platform as "Excel on steroids" for business users. Enterprise reality (2020-2026): ungoverned citizen development created application sprawl, knowledge silos, security vulnerabilities, business-critical processes on personal credentials, and invisible data flows.

**BYU-Idaho's historical precedent** with Power Automate citizen development becoming unmaintained business-critical infrastructure is the industry norm, not the exception.

Microsoft's response has been to pivot toward requiring business cases, system diagrams, security approvals, code reviews, ALM pipelines, and managed environments -- essentially transforming from a citizen development tool into a governed development platform requiring IT oversight.

### Evaluation Summary

| Criterion | Rating | Assessment |
|-----------|--------|------------|
| FERPA compliance | Adequate | Documented FERPA posture and technical controls, but compliance depends entirely on proper configuration. Defaults are not FERPA-safe. |
| Governance controls | Strong | Comprehensive multi-tiered governance. Full governance requires premium licensing, and DLP is disabled by default. |
| IT maintenance burden | Weak | Most significant liability. CoE requires 1-2 dedicated FTE. Historical BYU-Idaho experience confirms the risk. |
| Non-technical user UX | Adequate-to-Weak | Complexity exceeds what most non-technical university staff can manage independently. |
| Azure integration | Strong | Deepest Azure integration of any citizen development platform. |
| Cost | Adequate | Education pricing helps. $150K-$300K+/year for meaningful deployment. Consumption model creates unpredictable exposure. |

### Recommendations

**If proceeding:** Do not enable citizen development without a funded, staffed Center of Excellence (1-2 FTE minimum). Implement DLP policies before enabling maker access. Start with a 20-50 user pilot. Budget $150K-$300K/year.

**If restricting:** The platform still has value as a governed development environment for IT staff. Focus M365 Copilot investment on productivity, not agent building.

**The question for the CIO is not "Can Microsoft's platform support citizen development?" (it can) but "Is BYU-Idaho willing to make the sustained staffing and budget investment required to govern it?"**

---

## Platform 2: n8n (Already Deployed at BYU-Idaho)

### Current State

| Attribute | Current Configuration |
|-----------|----------------------|
| Hosting | Self-hosted on AKS (queue mode: main + worker pods) |
| Data layer | PostgreSQL + Redis |
| FERPA posture | Telemetry disabled, data stays on-premise in Azure |
| Current users | IT staff only |
| Use cases | BSC-Agent/Advising-Agent webhook routing, ETL pipeline triggering |

The existing deployment gives BYU-Idaho a head start: infrastructure is proven, FERPA-compliant data residency is already solved, and IT staff have operational familiarity.

### Enterprise Governance and RBAC

n8n has built a layered RBAC system that matured significantly through 2025:

**Project-level roles:** Project Admin (full control), Project Editor (create/update/run), Project Viewer (read-only, Enterprise only).

**Custom roles (v1.122.0+, November 2025):** Granular permission assignment across six resource types. Available only on Enterprise plans.

**Instance-level roles:** Instance Owner, Instance Admin, Instance Member.

**Project isolation:** Workflows and credentials are scoped to projects. Users in one project cannot access resources in another unless explicitly granted cross-project access.

**Key limitations:**
- **Node blocking is instance-wide only.** No per-project or per-role node restriction. Cannot allow IT to use the Code node while blocking it for citizen developers within the same instance.
- **No built-in workflow approval gate.** No native "submit for review before activation." Must be enforced through Git-based environment promotion or organizational process.
- **Custom roles require Enterprise licensing.** Without Enterprise, all project members are either Admins or Editors -- insufficient granularity for citizen development governance.

### Environment Separation

n8n supports Git-based environment promotion with protected production instances. This is strong for IT-managed workflows. For citizen development, the Git-based promotion pattern assumes developers understand branching and pull requests -- not a realistic expectation for citizen developers. IT would need to operate a gated promotion pipeline.

### Audit Logging and FERPA Compliance

**FERPA compliance is a strength.** The self-hosted AKS deployment with telemetry disabled is the strongest possible compliance posture. Azure Key Vault integration enables per-project credential isolation. Audit logging provides traceability. No built-in data classification or DLP system -- governance depends on credential restrictions and network policies.

### AI Capabilities

Extensive AI workflow capabilities built on LangChain:
- AI Agent node supporting Tools Agent and Conversational Agent patterns
- LLM providers: OpenAI, Anthropic Claude, Google Gemini, Cohere, HuggingFace, Ollama
- Vector store nodes: Pinecone, Redis, Qdrant, Supabase
- Human-in-the-loop approval steps
- 8,500+ templates with growing AI agent subset

**Model governance:** No built-in model allowlist. IT can enforce through credential control (only provision approved API keys) and node blocking (`NODES_EXCLUDE`), but this is instance-wide.

### Learning Curve -- The Primary Barrier

The learning curve is consistently identified as n8n's most significant barrier to citizen development:
- "Steep for beginners, especially if they don't have prior knowledge of APIs or JavaScript"
- Meaningful customization requires understanding JSON structures, API concepts, and error handling
- AI workflow configuration requires managing "memory, retries, and tool logic by hand"
- n8n's own positioning: platform for "technical teams," not business users

| Area | Difficulty Level |
|------|-----------------|
| Basic node connections | Low-Moderate |
| Data mapping between nodes | Moderate-High |
| Error handling and retry logic | High |
| API authentication setup | High |
| AI agent configuration | High |
| Custom code (Code node) | Very High |

**Realistic expectations for BYU-Idaho faculty:**
- With 8-16 hours training: simple trigger-action workflows
- With 40+ hours training and ongoing support: multi-step workflows with conditional logic
- AI agent workflows: remain firmly in IT's domain

### Maintenance Burden at Scale

| Burden Category | Current (IT-Only) | Projected (Citizen Dev) |
|----------------|-------------------|------------------------|
| User management | Minimal | Moderate |
| Credential provisioning | Self-service | IT-managed |
| Workflow review | None | Significant |
| Debugging support | Self-service | Significant |
| Training | None | Significant |
| Version upgrades | Moderate | Higher risk |
| Security monitoring | Minimal | Moderate |

**Community node security risk:** A January 2026 supply chain attack used malicious npm packages masquerading as n8n community nodes to steal OAuth credentials. Community node installation should be blocked for any citizen-accessible instance.

**Estimated incremental IT staffing:** 0.25-0.5 FTE for governance, support, and training.

### Cost Analysis

Infrastructure costs exist regardless of citizen development expansion. Incremental costs: Enterprise license (required for governance features, custom pricing), additional AKS compute, and 0.25-0.5 FTE IT staffing. The most significant incremental cost is staffing, not software.

### Evaluation Summary

| Criterion | Rating | Assessment |
|-----------|--------|------------|
| FERPA compliance | Strong | Self-hosted on AKS, telemetry disabled. Strongest compliance posture of any platform evaluated. |
| Governance controls | Moderate | RBAC and projects exist (Enterprise). No per-project node restrictions. No native approval gate. |
| IT maintenance burden | Moderate-High | Credential provisioning, workflow review, debugging, training scale linearly with user count. |
| Non-technical user UX | High (barrier) | Low-code for technical users, not no-code for business users. 8-16+ hours training for basics. |
| Azure integration | Strong | Native AKS hosting, Key Vault, Entra ID SSO, Azure OpenAI. Already deployed. |
| Cost | Low-Moderate (software) / Moderate-High (staffing) | Enterprise license + 0.25-0.5 FTE. |

### Recommended Positioning

**n8n should be positioned as a "governed power-user platform" rather than a general citizen development platform.**

- **Tier 1 (current):** IT staff building and maintaining automation workflows.
- **Tier 2 (expansion target):** Technically inclined departmental staff with structured training and governed projects.
- **Tier 3 (not recommended for n8n):** General faculty and administrative staff -- better served by Power Automate.

A hybrid strategy pairing n8n (complex/technical workflows) with Power Automate (broad citizen development) may be the strongest approach.

---

## Platform 3: Retool

### Overview

Retool is an internal tools platform that connects directly to databases and APIs, allowing teams to build dashboards, admin panels, and internal applications. A October 2025 survey found 48% of non-engineers are already shipping production software on Retool.

### Key Strengths

- **Self-hosted deployment** keeps all student data in BYU-Idaho's Azure environment -- architecturally ideal for FERPA
- **Semantic objects** (2025) let platform teams define governed abstractions ("Student," "Course") with built-in permissions
- **Automated security agents** identify vulnerabilities in citizen-built apps
- **RBAC, audit logging, SSO via Entra ID** on Enterprise plan
- **Education program** offers free Business tier for students and educators

### Governance and Compliance

SOC 2 Type II certified. In self-hosted mode, no Retool systems store customer data and no Retool personnel have access to customer data. Only usage telemetry is shared. Third-party governance integration with Nokod Security (February 2026) provides additional visibility.

### Pricing

Education program: free Business Plan for students and educators. Standard pricing: $10-$50/month per builder, $5-$15/month per user. For a 20-builder, 200-user pilot: $14,400-$48,000/year before education discounts.

### Limitations

Retool builds internal tools, not public-facing applications or complex process automation. More developer-oriented than pure no-code platforms. Best suited as a complement to Power Platform, not a replacement.

### Evaluation Summary

| Criterion | Rating |
|-----------|--------|
| FERPA compliance | **Strong** -- Self-hosted, no vendor data access |
| Governance controls | **Strong** -- RBAC, audit logging, semantic objects, security agents |
| IT maintenance burden | **Adequate** -- Self-hosted requires Docker/K8s management |
| Non-technical user UX | **Adequate** -- AI AppGen helps, training still required |
| Azure integration | **Strong** -- Entra ID SSO, Azure deployment, native DB connectors |
| Cost | **Strong** -- Education program, moderate standard pricing |
| **Overall** | **Strong complement** for internal tooling alongside Power Platform |

---

## Platform 4: ServiceNow App Engine Studio

### Overview

ServiceNow's App Engine Studio (AES) is a low-code environment built into the Now Platform with a deep higher education footprint. The Internet2 NET+ program provides pre-negotiated pricing and higher-education-tailored terms. Over 100 preconfigured request types are tailored for higher education.

### Key Strengths

- **Best-in-class delegated development** governance: admins define what citizen developers can build per app file type
- **Internet2 NET+ pricing** with higher-education-tailored contracts
- **Now Assist AI** for flow generation from text prompts
- **Applications inherit the Now Platform's** security, data model, RBAC, and compliance certifications (ISO 27001, SOC 1/2)

### Limitations

ServiceNow is a standalone platform, not embedded within Azure. Integration happens via connectors. For institutions without existing ServiceNow, the investment solely for citizen development would be difficult to justify.

### Evaluation Summary

| Criterion | Rating |
|-----------|--------|
| FERPA compliance | **Strong** -- Internet2 terms, strong certifications |
| Governance controls | **Strong** -- Best-in-class delegated development |
| IT maintenance burden | **Adequate** -- SaaS, but requires ServiceNow admin expertise |
| Non-technical user UX | **Adequate** -- Guided interface, dedicated training paths |
| Azure integration | **Adequate** -- Connectors for M365/Teams/Entra ID, not natively hosted |
| Cost | **Adequate** -- Internet2 discounts; incremental if already a customer |
| **Overall** | **Strong if BYU-Idaho is an existing ServiceNow customer; Weak if not** |

---

## Platform 5: Lovable Enterprise

### Overview

Lovable is an AI-first application builder that converts natural language prompts into full-stack web applications (React + Supabase). BYU-Idaho employees are already using Lovable as a shadow IT tool. $330M Series B at $6.6B valuation (December 2025), $200M ARR.

### The Governance Problem

Lovable generates real, portable code -- which means every application becomes an independent piece of infrastructure requiring its own hosting, security patching, authentication integration, database management, monitoring, and ongoing maintenance. This is the opposite of the centralized governance model that Power Platform or ServiceNow provide.

For a citizen development program, IT takes on the maintenance burden of every application a citizen developer creates.

### Enterprise Controls

SSO/SAML, SCIM, role-based access, audit logs, model training opt-out, GitHub PR integration. SOC 2 Type II (August 2025), ISO 27001:2022. SaaS-only (no self-hosting of the platform itself; generated code can deploy anywhere).

### Learning Curve

**Lowest of any platform evaluated.** Natural language to app. This is precisely why shadow adoption is occurring at BYU-Idaho. However, the gap between "I made something that works" and "this is ready for production with student data" is significant.

### Evaluation Summary

| Criterion | Rating |
|-----------|--------|
| FERPA compliance | **Weak** -- SaaS-only, no FERPA controls, generated apps need independent compliance |
| Governance controls | **Adequate** -- Governs the dev environment, not deployed apps |
| IT maintenance burden | **Weak** -- Every app becomes an independent maintenance liability |
| Non-technical user UX | **Strong** -- Lowest barrier to entry |
| Azure integration | **Weak** -- No native Azure/Entra ID integration |
| Cost | **Adequate** -- ~$24K/yr for 20 users, plus per-app hosting and maintenance |
| **Overall** | **Weak for production; Strong for prototyping.** Govern as a sandbox, do not adopt as production platform. |

### Recommended Approach

1. Establish Lovable as an approved prototyping tool with explicit restrictions (no student data, no production deployment without IT review)
2. Require any Lovable prototype intended for production to be rebuilt on a governed platform
3. Provide training on approved platforms so citizen developers have governed alternatives

---

## Platforms Considered and Excluded

### Base44

BYU-Idaho employees are reportedly using Base44 as a shadow IT tool. Base44 lacks compliance certifications (no SOC 2, no ISO 27001), has limited RBAC, no audit logging, no enterprise governance, no self-hosting, no FERPA documentation, and no education pricing.

**Verdict: Prohibit for institutional data.** Employees currently using Base44 should be migrated to approved alternatives.

### Appian

Enterprise process orchestration platform with strong compliance credentials (FedRAMP, SOC 1/2/3, HIPAA). Overbuilt and overpriced for university citizen development (~$150/user/month). No documented higher education deployments.

**Verdict: Cost and complexity not justified for BYU-Idaho's needs.**

### OutSystems

High-performance low-code platform targeting professional developers. Education Program exists but is oriented toward teaching CS students, not enabling citizen development by business users.

**Verdict: Wrong tool for the use case.**

### Mendix (Siemens)

Professional developer low-code platform with some citizen development features. Enterprise-tier pricing. No documented higher education FERPA deployments.

**Verdict: No advantage over Power Platform for BYU-Idaho.**

### Bubble

Visual no-code platform for web applications. SOC 2 Type II. Produces independent web applications (same governance problem as Lovable) without AI-generation advantage. No FERPA controls, no Azure integration.

**Verdict: Lovable does what Bubble does, faster and with AI, and Lovable still doesn't meet governance requirements.**

### Caspio

Notable exception: explicitly markets FERPA compliance with a Compliance Edition (encrypted infrastructure, role-based access, audit trails, multi-campus governance). SOC 2 Type II. However, builds only database applications -- no workflow automation, no AI capabilities.

**Verdict: Worth noting for specialized FERPA-sensitive database applications. Too narrow for a primary platform.**

---

## Strategic Recommendations

### Recommended Platform Strategy: Tiered Approach

| Tier | Platform | Audience | Use Cases | Governance |
|------|----------|----------|-----------|------------|
| **Tier 1: Broad citizen development** | Microsoft Power Platform | General faculty and staff | M365 automation, form routing, simple approvals, departmental workflows, basic AI chatbots | DLP policies, Entra ID, CoE toolkit, managed environments |
| **Tier 2: Power-user automation** | n8n (existing) | IT staff + trained departmental power users | Complex integrations, AI agent workflows, ETL pipelines, API orchestration | RBAC, project isolation, environment promotion, credential governance |
| **Tier 3: Internal tooling** | Retool (evaluate) | Data-oriented departments | Admin panels, dashboards, data entry tools, reporting apps | Self-hosted, RBAC, semantic objects, security agents |
| **Sandbox: Prototyping** | Lovable (governed) | Citizen developers exploring ideas | Proof-of-concept, rapid prototyping, ideation | No student data, no production deployment, rebuild on governed platform |
| **Prohibited** | Base44 | None | None | Block for institutional data |

### Investment Requirements

No matter which platform(s) are selected, citizen development requires human governance investment:

| Investment | Estimated Cost | Purpose |
|-----------|---------------|---------|
| Center of Excellence staffing | 1-2 FTE | Governance, policy, CoE toolkit, maker onboarding, orphaned resource cleanup |
| Power Platform licensing | $150K-$300K/year | Copilot Studio capacity, managed environments, premium licenses |
| n8n Enterprise license | Custom pricing | RBAC, custom roles, SSO, external secrets |
| n8n governance staffing | 0.25-0.5 FTE | Credential provisioning, workflow review, training |
| FERPA training program | Initial + ongoing | Mandatory for all citizen developers before platform access |
| Pilot program | 6 months | 20-50 users in controlled environment before broad enablement |

### The Fundamental Question

The platform evaluation reveals that the CIO's decision is not primarily a technology selection problem. Every platform evaluated can technically support some form of citizen development. The decision is an organizational investment problem:

**Is BYU-Idaho willing to fund the sustained staffing, licensing, training, and governance infrastructure required to make citizen development work -- knowing that the alternative (continued shadow AI) is also costly and risky?**

The platforms provide the tools. The institution must provide the governance.

---

# Section 7: Decision Framework

## Purpose

This section presents three options for the CIO's decision on AI citizen development at BYU-Idaho. Each option is assessed on compliance risk, implementation cost, IT resource requirements, innovation enablement, and sustainability. The options are presented neutrally -- the CIO's judgment on institutional priorities and risk tolerance determines the right choice.

---

## Option A: Restrict and Remediate

### What It Entails

Shut down active shadow AI, enforce existing acceptable use policies, remediate known compliance gaps, and decline to establish a citizen development program. The institution treats AI citizen development as outside its risk appetite for the foreseeable future. Innovation requests are routed through IT's existing development capacity.

### Existing Tool Disposition

| Tool | Action | Detail |
|------|--------|--------|
| Base44 | Block | Prohibit all institutional use. Network-level blocking where feasible. Remove from any devices under institutional management. |
| Lovable | Block | Prohibit for institutional data. Block at network level if possible. |
| Individual API keys | Prohibit | Policy enforcement: no employee-provisioned API keys to commercial LLM providers for institutional work. |
| MKTG 170 app | Rebuild or sunset | Migrate functionality to IT-managed Azure infrastructure or discontinue. Remediate all 14 security findings (5 critical). |
| Other citizen-built apps | Discover and triage | Conduct a shadow AI discovery audit. For each application: assess data exposure, remediate or sunset. |

### Cost Estimate

| Item | Estimated Cost | Notes |
|------|---------------|-------|
| Shadow AI discovery and audit | 0.25-0.5 FTE (one-time, 3-6 months) | Manual discovery supplemented by network traffic analysis. No comprehensive discovery tool exists. |
| MKTG 170 remediation | $15K-$40K or 80-200 dev hours | Rebuild on Azure with proper auth, RBAC, and FERPA-compliant data handling. Alternatively, sunset the application. |
| Other app remediation | Variable | Depends on discovery results. Budget 0.25 FTE ongoing for 12 months. |
| Network blocking infrastructure | Minimal-Moderate | URL/domain filtering for Base44, Lovable. May require web proxy or firewall rule updates. |
| Policy development and communication | 0.1 FTE (one-time) | Update acceptable use policy to explicitly address AI app building. Communicate to all employees. |
| Ongoing enforcement | 0.25 FTE ongoing | Monitor for new shadow AI adoption, investigate reports, enforce policy. |
| **Estimated annual cost** | **$50K-$120K** (primarily FTE time) | Lower dollar cost but consumes existing IT capacity. |

### Risk Profile

**Compliance risk: Low.** Directly addresses the FERPA exposure created by shadow AI. Remediating the MKTG 170 app and blocking unsanctioned platforms eliminates known compliance gaps.

**Innovation risk: High.** The institutional demand driving shadow AI does not disappear. President Meredith's three AI priorities -- enhanced learning, workforce readiness, student support -- require new AI capabilities that IT's current FTE capacity cannot deliver at the speed stakeholders expect. Restricting citizen development without expanding IT development capacity creates a gap between presidential priorities and institutional capability.

**Shadow AI recurrence risk: High.** Research consistently shows that prohibition without alternative drives shadow AI deeper underground. IBM found that 80% of workers use unapproved AI tools, and restriction alone does not change that behavior -- it reduces visibility. BYU-Idaho's shadow AI problem was discovered. The next generation of shadow AI may not be.

**Stakeholder relationship risk: Moderate-High.** Institutional Research leadership and departmental stakeholders are actively advocating for citizen development capabilities. A restriction-only response risks being perceived as IT saying "no" without offering a path to "yes" -- especially given the president's AI-forward posture.

### Success Metrics

- Zero FERPA incidents from citizen-built applications
- Reduction in unsanctioned AI tool usage (measured via network monitoring)
- All known citizen-built applications triaged within 6 months
- Updated acceptable use policy published and communicated to 100% of employees
- Shadow AI audit completed with findings documented

### Implementation Requirements

| Requirement | Detail |
|-------------|--------|
| Policy update | Amend acceptable use policy to explicitly prohibit building applications on unapproved platforms. Define what constitutes "building" vs. "using" an AI tool. |
| Shadow AI discovery | Conduct a one-time audit: network traffic analysis, department surveys, tool procurement review. Identify all citizen-built applications processing institutional data. |
| Tool blocking | Configure network-level blocking for Base44, Lovable, and other identified platforms. Coordinate with CES if shared network infrastructure. |
| Communication plan | Inform all employees of policy changes. Explain the rationale (FERPA compliance, the MKTG 170 findings). Provide alternative channels: IT Front Door for innovation requests, AI Committee for tool requests. |
| Remediation execution | For each discovered application: assess data exposure, determine rebuild/sunset, execute. |
| Ongoing monitoring | Periodic network scans and department check-ins to detect new shadow AI adoption. |

### Change Management

- Communicate the "why" clearly: 14 security findings in a single shadow AI app, including direct FERPA violations. This is not theoretical risk.
- Provide the IT Front Door as the alternative channel for innovation requests. Position IT as an enabler with a process, not a blocker.
- Anticipate pushback from departments that view their shadow AI tools as essential. Offer to prioritize their needs in IT's development queue.
- Brief the AI Committee on the policy change and their expanded role in routing requests.
- Presidential communication: frame as protecting the institution's FERPA compliance posture while IT builds the governance foundation for future enablement.

### Timeline

| Phase | Duration | Activities |
|-------|----------|------------|
| Phase 1: Policy and communication | Months 1-2 | Policy update, stakeholder communication, IT Front Door preparation |
| Phase 2: Discovery and triage | Months 2-4 | Shadow AI audit, application inventory, risk assessment |
| Phase 3: Remediation | Months 3-8 | Application rebuild/sunset, network blocking, MKTG 170 remediation |
| Phase 4: Steady state | Month 9+ | Ongoing monitoring, enforcement, innovation request routing |

---

## Option B: Governed Enablement

### What It Entails

Establish a citizen development program with sandboxed platforms, mandatory training, an approval workflow, and IT oversight through a Center of Excellence (CoE). This option treats citizen development as an institutional capability that must be governed, not prohibited. It accepts that demand exists and channels it through controlled infrastructure.

### The Tiered Platform Strategy

| Tier | Platform | Audience | Use Cases | Governance Model |
|------|----------|----------|-----------|-----------------|
| **Primary** | Microsoft Power Platform | General faculty and staff | M365 automation, form routing, approvals, departmental workflows, basic AI chatbots | DLP policies, Entra ID, CoE toolkit, managed environments |
| **Power-user** | n8n (already deployed on AKS) | IT staff + trained departmental power users | Complex integrations, AI agent workflows, ETL pipelines, API orchestration | RBAC, project isolation, environment promotion, credential governance |
| **Internal tools** | Retool | Data-oriented departments | Admin panels, dashboards, data entry tools, reporting apps | Self-hosted on Azure, RBAC, semantic objects, security agents |
| **Prototyping sandbox** | Lovable (governed) | Citizen developers exploring ideas | Proof-of-concept, rapid prototyping, ideation only | No student data, no production deployment, rebuild on governed platform for production |
| **Prohibited** | Base44 | None | None | Block for institutional data |

### Existing Tool Disposition

| Tool | Action | Detail |
|------|--------|--------|
| Base44 | Block | Same as Option A. No institutional use. |
| Lovable | Govern as sandbox | Approve for prototyping with explicit restrictions: no student data, no FERPA-protected information, no production deployment without IT review. |
| Individual API keys | Replace | Provide institutional API access through governed platforms. Prohibit personal API keys for institutional work. |
| MKTG 170 app | Rebuild on governed platform | Migrate to Power Platform or Azure-hosted solution with proper FERPA controls. Use as a case study for the training program. |
| Other citizen-built apps | Migrate or sunset | Discover, assess, and migrate viable applications to governed platforms. Sunset non-compliant ones. |

### Cost Estimate

| Item | Estimated Annual Cost | Notes |
|------|----------------------|-------|
| Power Platform licensing | $150K-$300K/year | Copilot Studio capacity packs, managed environments, premium licenses. Credit-based consumption model creates variability. |
| n8n Enterprise license | Custom pricing (est. $20K-$60K/year) | Required for RBAC, custom roles, SSO, external secrets manager. Already deployed; incremental cost is the license. |
| Retool | $14K-$48K/year | 20-builder, 200-user estimate. Education program may reduce this. Self-hosted deployment on existing AKS. |
| Lovable sandbox | ~$24K/year | 20-user estimate. Plus per-app hosting costs during prototyping. |
| CoE staffing | 1-2 FTE ($80K-$180K/year fully loaded) | Governance, maker onboarding, CoE toolkit management, orphaned resource cleanup, training delivery, application review. This is the most critical investment. |
| n8n governance staffing | 0.25-0.5 FTE ($20K-$45K/year) | Credential provisioning, workflow review, power-user training and support. |
| FERPA training development | $15K-$30K (one-time) + $5K-$10K/year maintenance | Custom curriculum: FERPA requirements for AI tools, data classification, platform-specific governance rules. |
| Shadow AI remediation | $50K-$100K (one-time) | Same discovery and remediation as Option A, but concurrent with platform rollout. |
| LLM gateway (future) | $20K-$50K/year | Centralized AI API proxy for model allow-listing, DLP, audit logging. Not required for pilot but recommended for scale. |
| **Estimated Year 1 total** | **$400K-$750K** | Includes one-time costs. |
| **Estimated annual steady-state** | **$300K-$600K/year** | After one-time costs. Range depends on platform adoption and scope. |

These are ranges, not precision estimates. Power Platform licensing is the largest variable -- actual cost depends on the number of makers, the scope of Copilot Studio usage, and whether managed environments are required for all users or only a subset.

### Risk Profile

**Compliance risk: Low-Moderate.** Governance controls address FERPA requirements: approved platforms with contractual protections, data classification enforcement, mandatory training, application review before deployment. Residual risk exists because governance depends on sustained execution -- if CoE staffing lapses or training compliance drops, the governance degrades. The 2021 Power Apps incident (38M records exposed due to misconfigured DLP) demonstrates that governance controls must be actively maintained.

**Innovation risk: Moderate (constrained by platform gap).** Provides governed channels for citizen development but cannot fully replicate the experience that drives shadow AI adoption. Power Platform requires manual building -- no natural-language-to-app generation. Lovable provides that experience but only as a sandbox (no production deployment with student data). The platform gap means governed enablement satisfies some demand but not all of it.

**Shadow AI recurrence risk: Low-Moderate.** Providing governed alternatives reduces the incentive for shadow AI. Research shows that organizations with formal citizen development programs see shadow AI reduction. However, the platform gap means some users may still reach for ungoverned tools that offer a faster, more intuitive experience. Monitoring remains necessary.

**Sustainability risk: Moderate.** The Power Automate precedent is directly relevant. BYU-Idaho's prior citizen development effort became ungoverned technical debt because it lacked dedicated governance staffing. Option B requires sustained investment in CoE staffing, training delivery, and application lifecycle management. If that investment is not sustained, Option B degrades into a more expensive version of Option C. Research indicates citizen-built apps have a 54% first-year failure rate without governance support.

**IT resource risk: Moderate-High.** 1.5-2.5 FTE of new or reallocated capacity. This is significant for a resource-constrained IT organization. The CoE cannot be an additional responsibility layered onto existing staff without capacity relief.

### Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Citizen developer adoption | 20-50 users in pilot; 100+ in Year 2 | Platform registration data |
| FERPA incidents from citizen-built apps | Zero | Incident reporting system |
| Shadow AI reduction | 50%+ reduction in unsanctioned tool usage | Network monitoring, periodic survey |
| Audit pass rate | 100% of production citizen-built apps pass annual review | CoE audit records |
| Time-to-solution | Measurable reduction vs. IT development queue | Intake tracking (IT Front Door) |
| Training completion | 100% of citizen developers complete FERPA training before access | LMS records |
| Application lifecycle health | <20% orphaned applications annually | CoE toolkit monitoring |
| User satisfaction | Positive trend in citizen developer satisfaction survey | Annual survey |

### Implementation Requirements

| Requirement | Detail |
|-------------|--------|
| CoE staffing | Hire or reallocate 1-2 FTE. Roles: governance lead, platform administrator, training coordinator. This is the prerequisite for everything else. |
| Platform procurement | Power Platform licensing (negotiate education pricing), n8n Enterprise license, Retool evaluation and procurement, Lovable Enterprise subscription. |
| Platform configuration | Deploy managed environments (Power Platform), configure DLP policies, set up project isolation (n8n), deploy Retool on AKS, configure Lovable SSO and restrictions. |
| Governance framework | Define: application registration process, data classification rules for citizen dev, approval workflow (IT Front Door as entry point), periodic review cadence, incident response integration. |
| FERPA training curriculum | Develop mandatory training: FERPA basics, data classification at BYU-Idaho, platform-specific governance rules, what citizen developers can and cannot build, how to request exceptions. |
| Pilot program | 20-50 users, 6-month duration. Selected departments with clear use cases and willing participants. CoE provides hands-on support during pilot. |
| Shadow AI remediation | Concurrent with platform rollout. Discover, assess, migrate, or sunset existing citizen-built applications. |
| IT Front Door integration | Route all citizen development requests through the IT Front Door. Establish intake criteria, routing rules, and escalation paths. |

### The Platform Gap Caveat

Option B is constrained by the current state of the market. No platform today combines natural-language AI app generation with enterprise governance and FERPA compliance (Section 6, Platform Evaluation). The tiered strategy is the best available approach, but it is a pragmatic compromise:

- **Power Platform** provides governance but not the intuitive AI-generation experience that drives shadow AI adoption.
- **Lovable** provides the experience but not the governance for production use with student data.
- **The gap between these two** is where residual shadow AI risk lives.

The strategy should include active market monitoring. The AI app builder category is maturing rapidly (Lovable reached $200M ARR and a $6.6B valuation in December 2025). Enterprise governance features will likely emerge as the category matures. BYU-Idaho should be positioned to adopt governed AI app builders when they arrive -- and the governance framework built under Option B provides that foundation.

### Change Management

- **Training programs:** Mandatory FERPA training before platform access. Platform-specific training tracks (Power Platform basics, n8n for power users, Retool for data teams).
- **Departmental champions:** Identify 5-10 early adopters across departments to serve as peer mentors and feedback channels. Research shows the two-level governance model (central CoE + departmental leads) is the only proven model at scale (Deutsche Bahn, H&M).
- **IT Front Door as entry point:** All citizen development requests start at the IT Front Door. This normalizes the governed path and provides intake data for demand analysis.
- **Communication strategy:** Frame as enablement, not restriction. "We are providing governed tools so you can build safely" -- not "we are taking away your tools." Acknowledge the MKTG 170 findings as the catalyst.
- **Quick wins:** Identify 3-5 high-visibility use cases for the pilot that demonstrate value within the first 90 days. Success stories drive adoption.
- **Presidential alignment:** Brief the president on the phased approach. Frame the pilot as responsible experimentation aligned with his AI priorities. Provide quarterly progress reports.

### Timeline

| Phase | Duration | Activities |
|-------|----------|------------|
| Phase 0: Foundation | Months 1-3 | CoE staffing, platform procurement, governance framework design, FERPA training development |
| Phase 1: Pilot | Months 4-9 | 20-50 users on governed platforms. Hands-on CoE support. Shadow AI remediation begins concurrently. |
| Phase 2: Evaluation | Month 10 | Assess pilot results against success metrics. Adjust governance, training, and platform configuration. |
| Phase 3: Controlled expansion | Months 11-18 | Expand to 100+ users. Departmental champions program. Mature the CoE toolkit. |
| Phase 4: Steady state | Month 19+ | Ongoing governance, annual training, application lifecycle management, market monitoring for next-generation platforms. |

**Total time to steady state:** 18-24 months. This is not fast. Governed enablement requires deliberate investment. Rushing the timeline by skipping the CoE foundation or the pilot phase replicates the Power Automate experience.

---

## Option C: Open Access with Guidelines

### What It Entails

Provide employees access to approved AI development tools with usage guidelines and basic training, but minimal approval gates. Citizen developers can build and deploy applications after completing a lightweight orientation. IT provides the tools and guidelines; users are responsible for compliance. This option prioritizes speed of enablement and innovation volume over governance depth.

### Existing Tool Disposition

| Tool | Action | Detail |
|------|--------|--------|
| Base44 | Block | Same as Options A and B. No institutional use regardless of approach. |
| Lovable | Approve with restrictions | Add to approved tools list with usage guidelines: no Restricted-tier data, annual attestation. |
| Individual API keys | Discourage but not prohibit | Provide institutional alternatives; policy discourages personal keys but enforcement is minimal. |
| MKTG 170 app | Remediate critical findings | Address the 5 critical findings. Lower-severity findings addressed on best-effort basis. |
| Other citizen-built apps | Evaluate case-by-case | No systematic discovery. Respond to reported issues. |

### Cost Estimate

| Item | Estimated Annual Cost | Notes |
|------|----------------------|-------|
| Platform licensing | $50K-$150K/year | Lovable Enterprise + basic Power Platform licensing. Lighter deployment than Option B. |
| Guidelines and training development | $10K-$20K (one-time) | Acceptable use documentation, self-service training materials, quick-start guides. |
| Lightweight governance staffing | 0.25-0.5 FTE ($20K-$45K/year) | Tool provisioning, guideline maintenance, incident response. No dedicated CoE. |
| Incident response (reactive) | Variable | Budget for 2-4 incidents per year requiring investigation and remediation. $10K-$40K/year. |
| MKTG 170 remediation | $15K-$40K (one-time) | Address critical findings only. |
| **Estimated Year 1 total** | **$105K-$295K** | |
| **Estimated annual steady-state** | **$80K-$235K/year** | |

### Risk Profile

**Compliance risk: High.** This is the core liability. Usage guidelines are not governance. Without mandatory training verification, application review before deployment, data classification enforcement, or DLP controls, FERPA compliance depends entirely on individual user judgment. The MKTG 170 case demonstrates what happens when well-intentioned users build without governance: 14 findings, 5 critical, direct FERPA violations. Option C provides guidelines that would have told the MKTG 170 builders not to store student grades on Base44 -- but guidelines did not prevent the incident because the builders did not know they were violating policy. Awareness, not compliance intent, was the failure point.

**Innovation risk: Low.** Fastest path to enablement. Users can build immediately with minimal friction. This is the option that most directly satisfies stakeholder demand.

**Shadow AI recurrence risk: Low.** By approving tools like Lovable, the category of "shadow AI" shrinks. However, "approved but ungoverned" carries many of the same risks as "unapproved and ungoverned" -- the institution has visibility into which tools are in use but limited visibility into what is being built with them.

**Sustainability risk: High.** This is the Power Automate experience with higher stakes. Without application lifecycle management, citizen-built applications will follow the documented pattern: built, embedded in business processes, creator leaves, application breaks, IT inherits. Research indicates a 54% first-year failure rate for citizen-built applications without governance support. With AI-powered applications processing more sensitive data than simple workflow automations, the consequences of orphaned applications are more severe.

**Regulatory risk: High.** If a FERPA incident occurs under Option C, the institution's defense is "we published guidelines." The Department of Education's enforcement posture requires that institutions demonstrate "direct control" over third parties processing student data. Guidelines without enforcement do not establish direct control. In an enforcement investigation, Option C's governance posture is difficult to defend.

### Success Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Adoption rate | High (100+ users within 6 months) | Platform registration |
| Innovation output | Number of applications built | Platform analytics |
| Incident count | Monitored reactively | Incident reporting |
| Guideline acknowledgment | 100% of users acknowledge guidelines | Sign-off during provisioning |

Note the asymmetry: Option C's success metrics emphasize adoption and output. Compliance and sustainability metrics are weaker because the governance infrastructure to measure them does not exist under this option.

### Implementation Requirements

| Requirement | Detail |
|-------------|--------|
| Tool provisioning | Procure Lovable Enterprise, configure basic SSO. Light Power Platform deployment. |
| Acceptable use policy | Publish guidelines for AI app building: data classification reminder, list of approved tools, recommendation (not requirement) for IT consultation on sensitive data. |
| Self-service training | Develop online training modules: platform basics, data classification overview, FERPA awareness. Completion encouraged but not enforced as a prerequisite. |
| Incident response plan | Define what constitutes a reportable incident, who investigates, and what remediation looks like. This is the safety net. |
| Basic monitoring | Periodic review of what is being built. No systematic application review or approval gate. |

### Change Management

- Lightweight: communicate approved tools, provide self-service training, make resources available via IT Front Door.
- No departmental champion program or CoE. Users are largely self-directed.
- Frame as trust in employees to use tools responsibly. Acknowledge the risk explicitly.
- IT Front Door serves as an information resource, not an approval gate.

### Timeline

| Phase | Duration | Activities |
|-------|----------|------------|
| Phase 1: Setup | Months 1-2 | Tool procurement, guideline publication, training development |
| Phase 2: Launch | Month 3 | Open access, communication campaign, IT Front Door resources |
| Phase 3: Monitor | Month 4+ | Reactive monitoring, incident response as needed |

**Total time to launch:** 2-3 months. Significantly faster than Option B.

---

## Comparison Table

| Dimension | Option A: Restrict and Remediate | Option B: Governed Enablement | Option C: Open Access with Guidelines |
|-----------|--------------------------------|-------------------------------|---------------------------------------|
| **Compliance risk** | Low | Low-Moderate | High |
| **Innovation enablement** | None -- all development routes through IT queue | Moderate -- constrained by platform gap and governance process | High -- but ungoverned |
| **IT resource requirement** | 0.5-1 FTE (enforcement and remediation) | 1.5-2.5 FTE (CoE, platform admin, training) | 0.25-0.5 FTE (provisioning, incident response) |
| **Estimated annual cost (steady-state)** | $50K-$120K | $300K-$600K | $80K-$235K |
| **Shadow AI impact** | Reduces known shadow AI; may drive it underground. Visibility decreases. | Reduces shadow AI by providing governed alternatives. Visibility increases. | Eliminates the "shadow" label by approving tools. Does not address the underlying governance gap. |
| **Maintenance burden** | Low ongoing (enforcement). One-time remediation cost. | High -- application lifecycle management, CoE operations, training delivery. Sustained investment required. | Low initially. Grows uncontrollably over time as orphaned applications accumulate. The Power Automate pattern repeats. |
| **Time to implement** | 6-8 months to steady state | 18-24 months to steady state | 2-3 months to launch |
| **FERPA defensibility** | Strong -- eliminates the risk surface | Strong if governance is sustained -- demonstrable "direct control" | Weak -- guidelines without enforcement do not establish "direct control" under FERPA |
| **Alignment with presidential AI priorities** | Low -- restricts the innovation the president is asking for | Moderate-High -- enables innovation within governed boundaries | High in the short term -- enables innovation fast. Low in the long term if incidents erode trust. |
| **Reversibility** | Moderate -- can enable citizen dev later, but rebuilding trust and momentum after restriction is harder | Moderate -- can scale back to Option A if governance proves unsustainable, but sunk cost is significant | Low -- once applications are built and embedded in business processes, reverting to governance is extremely difficult. The Power Automate experience demonstrates this. |
| **Risk of repeating the Power Automate experience** | Low -- no citizen development means no sprawl | Moderate -- depends on CoE investment and sustained governance | High -- this is the Power Automate experience by design, with higher stakes |

---

## Key Tradeoffs

### Cost vs. Risk

Option A is the least expensive but accepts the highest innovation risk and stakeholder friction. Option C is moderately priced but accepts the highest compliance and sustainability risk. Option B is the most expensive but is the only option that addresses both compliance and innovation. There is no low-cost, low-risk option.

### Speed vs. Governance

Option C launches in 2-3 months. Option B takes 18-24 months to reach steady state. The difference is the governance foundation. Rushing Option B's timeline produces Option C's risk profile at Option B's cost -- the worst of both.

### The Platform Gap and All Three Options

The platform gap (Section 6) affects all three options differently:

- **Option A** avoids the platform gap by declining to enable citizen development. The gap becomes someone else's problem.
- **Option B** works within the platform gap by assembling a tiered strategy from imperfect components. It is an honest, pragmatic approach that positions BYU-Idaho to adopt better platforms as the market matures.
- **Option C** ignores the platform gap by approving tools (like Lovable) that provide the user experience but lack the governance. The gap's consequences are absorbed as incidents rather than addressed as architecture.

### The Power Automate Precedent

BYU-Idaho has lived through Option C before. Power Automate was made available with guidelines and minimal governance. The result: orphaned automations, invisible business-critical processes, technical debt that IT inherited without understanding or capacity to maintain. AI citizen development raises the stakes because AI applications process more sensitive data, create more complex third-party data flows, and have higher FERPA exposure than workflow automations.

Every option in this framework should be evaluated against the question: **Does this prevent the Power Automate experience from repeating at higher stakes?**

- Option A: Yes, by declining to enable citizen development.
- Option B: Conditionally -- if governance investment is sustained.
- Option C: No.

---

# Section 8: Recommendation

## Recommendation

We recommend a phased approach to governed enablement that addresses immediate shadow AI risks while building the governance infrastructure required for responsible citizen development at scale.

---

## Why Governed Enablement -- and Why Now

The evidence does not support restriction. BYU-Idaho already has an active shadow AI problem -- the MKTG 170 Base44 incident produced 14 findings, 5 of them critical, including a direct FERPA violation where student grades were exposed to every class member. EDUCAUSE data shows that 56% of higher education workers use AI tools not provided by their institutions, and 80% of faculty and staff are unaware of institutional AI policies. Restricting access to AI development tools does not eliminate demand; it drives activity underground, where the institution has no visibility, no governance, and no contractual basis for the FERPA "school official" exception. President Meredith has made AI a top-3 strategic priority for the university. A posture of restriction would be misaligned with that direction and would not address the conditions that created the current exposure.

The evidence also does not support unmanaged enablement. BYU-Idaho's own Power Automate experience is the clearest warning: citizen-built automations became embedded in business processes, original creators moved on, and IT inherited critical infrastructure it did not build and could not easily maintain. Industry data reinforces the pattern -- 54% of citizen development applications fail in their first year, most commonly because the original builder leaves and no one maintains the solution. Organizations without formal governance experience application sprawl and compliance breaches at 3-4x higher rates than those with governance in place. At BYU-Idaho, the stakes are higher than in a typical enterprise context because student education records carry FERPA obligations that do not expire when a citizen developer changes roles.

Governed enablement is the remaining option, but the research demands honesty about what it requires. The only proven governance model at enterprise scale is the two-level Center of Excellence structure documented at Deutsche Bahn (4,000 citizen developers) and H&M (30,000 users): a central policy team sets standards, while local departmental leads provide frontline support and compliance checks. No university has published a complete citizen development framework with governance, training, measurable outcomes, and FERPA integration. BYU-Idaho would be building something without a peer reference implementation -- but it would be building on a governance foundation (4-tier data classification, AI Committee, approved tools list, AI data usage guide) that is ahead of most peers. The question is not whether to govern; BYU-Idaho already governs the *use* of AI. The question is whether to extend that governance to cover *building* with AI before the shadow builders make the decision for you.

---

## What This Requires

Governed enablement is not a policy decision alone. It requires sustained investment:

- **Staffing:** A minimum of 1 FTE dedicated to a Center of Excellence function, with 0.5 FTE as a viable starting point during the pilot phase. This role owns governance policy, platform configuration, citizen developer training, and application lifecycle oversight. The Deutsche Bahn and H&M models both demonstrate that a CoE is not optional -- it is the mechanism that prevents citizen development from becoming the next Power Automate.
- **Platform licensing:** $150K-$300K per year for Power Platform licensing (the primary governed platform), plus incremental costs for Retool and Lovable Enterprise. n8n is already deployed and self-hosted. These costs are real but are consistent with the investment peer institutions have made -- Miami Dade College, University of South Florida, and Florida State University all invested in Microsoft licensing at comparable or larger scale.
- **FERPA training:** A mandatory training program for any employee who will build applications that touch institutional data. This is not a suggestion; FERPA's "school official" exception requires that the institution maintain "direct control" over how education records are used. Training is the minimum threshold for demonstrating that control when the builder is an employee rather than a contracted vendor.
- **Pilot scope:** A 6-month pilot with 20-50 users in a single department, with defined success criteria and measurable outcomes. The research shows that phased rollouts with deliberate evaluation are the only pattern associated with successful citizen development programs.

---

## What This Does Not Solve

Governed enablement reduces risk. It does not eliminate it.

- **The platform gap persists.** No platform today combines AI-powered application generation with enterprise governance controls and FERPA compliance. The tools that are easiest to use (Lovable, Base44) have the weakest governance. The tools with the strongest governance (Power Platform) require manual building and have usability challenges that even technical users find difficult. This means the specific demand that is driving shadow AI -- "describe an app in plain language and get a working application" -- cannot be fully met within a governed environment today. The market is moving toward this, but it is not there yet.
- **Shadow AI will not disappear overnight.** Deploying IT Front Door and blocking Base44 for institutional data will reduce the most visible risk vectors. But employees who have built habits around unsanctioned tools will not abandon them immediately. Sustained communication, viable alternatives, and visible executive sponsorship are required to shift behavior over 12-18 months.
- **IT involvement does not go to zero.** Citizen development is sometimes marketed as a way to reduce IT burden. The evidence suggests the opposite in the first 12-18 months: IT must configure platform governance, review high-risk applications, manage the CoE, and remediate existing shadow AI. The long-term trajectory may reduce demand on IT for routine application requests, but the near-term is an investment, not a savings.
- **Application lifecycle remains a challenge.** Even with governance, citizen-built applications will require ongoing maintenance. The 54% first-year failure rate is not a platform problem -- it is a people problem. Governance can reduce the failure rate, but any program must plan for application retirement, ownership transfer, and IT escalation paths.

---

## Phased Implementation

### Phase 1: Immediate Risk Remediation (0-3 Months)

- **Remediate existing shadow AI.** Address known cases, starting with the MKTG 170 Base44 deployment. Establish a process for identifying and evaluating other active shadow AI applications across campus.
- **Establish a FERPA training requirement.** Before any employee builds an application that processes institutional data -- on any platform -- they must complete training on data classification, FERPA obligations, and the institutional approval process.
- **Deploy IT Front Door.** Use the IT Front Door initiative already underway to create a single intake point for AI project requests. This provides visibility into demand, enables risk triage, and establishes the expectation that AI projects go through institutional channels.
- **Block Base44 for institutional data.** Base44 has no compliance certifications, no self-hosting option, no governance controls, and no data processing agreement with BYU-Idaho. It should be formally prohibited for any application that processes institutional data. Communicate this decision with a clear rationale -- not as a blanket ban on innovation, but as a specific risk-based decision grounded in the security assessment findings.

### Phase 2: Governance Foundation (3-6 Months)

- **Stand up the Center of Excellence.** Begin with 0.5 FTE if a full FTE is not immediately available. This role configures platform governance, develops citizen developer training materials, and manages the pilot program. The CoE does not need to be large at this stage, but it must exist -- without a named owner, governance becomes everyone's responsibility and no one's priority.
- **Configure Power Platform governance.** Deploy Data Loss Prevention (DLP) policies, managed environments, and connector restrictions before granting citizen developer access. Power Platform DLP is disabled by default; the 2021 misconfiguration that exposed 38 million records at other organizations demonstrates what happens when governance follows enablement rather than preceding it.
- **Pilot with 20-50 users in one department.** Select a department with defined use cases, willing participants, and manageable data sensitivity. Define success metrics before the pilot begins: adoption rate, application quality, governance compliance, user satisfaction, and IT support burden.
- **Establish Lovable as a governed prototyping sandbox.** Lovable's natural-language-to-application capability is what drives shadow adoption. Providing a governed instance -- with clear boundaries on data classification (Tier 1 and Tier 2 data only, no student PII) -- gives citizen developers a legitimate channel for the capability they are seeking, while IT evaluates the governance implications at small scale.

### Phase 3: Measured Expansion (6-12 Months)

- **Evaluate pilot results against defined criteria.** Do not expand based on enthusiasm alone. The 54% failure rate applies to programs that scaled before governance matured.
- **Expand to additional departments** if pilot metrics support it. Use the two-level CoE model: the central CoE sets policy, and trained departmental leads provide frontline support within their units.
- **Evaluate n8n for Tier 2 power users.** n8n is already deployed and self-hosted at BYU-Idaho, making it FERPA-ideal for workflow automation. Its learning curve limits it to technically inclined staff, but for that audience, it provides governed automation capability without additional licensing cost.
- **Assess Retool for internal tooling.** Retool's self-hosted option, free education tier, and semantic objects for governed data abstractions make it a strong candidate for data-oriented departments building internal dashboards and admin tools.

### Phase 4: Market Monitoring (Ongoing)

- **Track AI app builder market maturity.** The platform gap -- no tool combines AI generation with enterprise governance -- is a market condition, not a permanent state. Microsoft, Google, and enterprise low-code vendors are all investing in AI-assisted app generation. The gap will close; the question is when.
- **Reassess platform strategy annually.** As vendors add enterprise governance to AI app builders (or as enterprise platforms add natural-language generation), the tiered strategy should evolve. A platform that is categorized as "sandbox only" today may become a primary platform in 12-18 months.
- **Monitor regulatory developments.** FERPA guidance on AI is incomplete. AACRAO's forthcoming 2026 publication and any new Department of Education guidance should be incorporated into governance policies as they become available.

---

## Closing

The final decision belongs to leadership. This recommendation reflects 292 sources of research across market analysis, 26 case studies, 9 platform evaluations, and compliance analysis spanning FERPA, state privacy law, and emerging federal AI regulation. The evidence supports governed enablement -- but only with the sustained investment to make governance real, not theoretical. A governance framework on paper that lacks staffing, platform configuration, and training is worse than no framework at all, because it creates the illusion of control without the substance.

BYU-Idaho is better positioned than most institutions to do this well. The governance infrastructure exists. The AI Committee exists. The data classification framework exists. The IT Front Door is being built. What does not yet exist is the bridge between governing the *use* of AI and governing the *building* of AI applications by non-IT employees. This recommendation is a proposal for how to build that bridge -- deliberately, with evidence, and with clear-eyed acknowledgment of both the opportunity and the cost.

---

## Appendix A: Source Log

A total of 292 sources were consulted across 8 research tasks:

| Task | Section | Source Count | Source File |
|------|---------|-------------|-------------|
| Task 2 | Market Landscape (General) | 21 | sources-task2-general-market.md |
| Task 3 | Market Landscape (Higher Ed) | 24 | sources-task3-higher-ed.md |
| Task 4 | Compliance and Governance | 41 | sources-task4-compliance.md |
| Task 6 | Case Studies (Successes) | 50 | sources-task6-successes.md |
| Task 7 | Case Studies (Failures) | 60 | sources-task7-failures.md |
| Task 9 | Platform Evaluation (Microsoft) | 30 | sources-task9-microsoft.md |
| Task 10 | Platform Evaluation (n8n) | 32 | sources-task10-n8n.md |
| Task 11 | Platform Evaluation (Alternatives) | 34 | sources-task11-alternatives.md |

Full source documentation with URLs, dates, key findings, and credibility assessments is available in the source files listed above, located in `docs/research/ai-citizen-development/sources/`.

### Evidence Gaps

- No independent, peer-reviewed study of citizen development in higher education exists
- University case studies are near-exclusively sourced from vendor customer stories (primarily Microsoft)
- No university has published a complete citizen development framework with measurable outcomes
- No platform holds a FERPA-specific certification (none exists)
- FERPA predates AI; regulatory guidance is evolving but incomplete (AACRAO 2026 publication pending)
- n8n Enterprise pricing is not publicly available
- No head-to-head platform comparison for higher education citizen development exists in the literature

---

## Appendix B: Platform Comparison Matrix

### Full Comparison (All Evaluated Platforms)

| Criterion | Copilot Studio / Power Platform | n8n | Retool | ServiceNow AES | Lovable Enterprise | Appian | Base44 |
|-----------|-------------------------------|-----|--------|----------------|--------------------|--------|--------|
| **FERPA compliance** | Adequate | Strong | Strong | Strong | Weak | Strong | Weak |
| **Governance controls** | Strong | Moderate | Strong | Strong | Adequate | Strong | Weak |
| **IT maintenance burden** | Weak | Moderate-High | Adequate | Adequate | Weak | Adequate | Weak |
| **Non-technical user UX** | Adequate-to-Weak | High (barrier) | Adequate | Adequate | Strong | Adequate | Strong |
| **Azure integration** | Strong | Strong | Strong | Adequate | Weak | Strong | Weak |
| **Cost** | $150K-$300K+/yr | Low-Moderate | $14K-$48K/yr | Incremental if customer | ~$24K/yr + hosting | ~$150/user/mo | Unknown |
| **Overall fit** | Primary (with CoE) | Tier 2 power-user | Strong complement | Excluded (not customer) | Prototyping sandbox | Excluded (overpriced) | Prohibited |

### Recommended Tiered Strategy

| Tier | Platform | Audience | Primary Use Cases |
|------|----------|----------|-------------------|
| Primary | Microsoft Power Platform | General faculty and staff | M365 automation, workflows, basic AI chatbots |
| Power-user | n8n (already deployed) | IT staff + trained technical staff | Complex integrations, AI agent workflows, ETL |
| Internal tools | Retool | Data-oriented departments | Dashboards, admin panels, reporting apps |
| Sandbox | Lovable (governed) | Citizen developers exploring ideas | Prototyping only -- no student data, no production |
| Prohibited | Base44 | None | Blocked for institutional data |

---

*End of briefing.*
