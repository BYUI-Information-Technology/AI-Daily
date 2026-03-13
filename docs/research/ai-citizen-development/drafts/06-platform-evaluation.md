# Section 6: Platform Evaluation

**Prepared for:** BYU-Idaho CIO Office
**Author:** Ron Vallejo, AI Solutions Architect
**Date:** 2026-03-13
**Status:** Draft
**Sources consulted:** 96 (30 Microsoft, 32 n8n, 34 alternatives)

---

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
