# Section 7: Decision Framework

**Prepared for:** BYU-Idaho CIO Office
**Author:** Ron Vallejo, AI Solutions Architect
**Date:** 2026-03-13
**Status:** Draft -- pending Ron's review
**Classification:** Internal -- IT Leadership

---

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

*This section presents options for the CIO's consideration. The research, case studies, compliance analysis, and platform evaluation conducted across Sections 2-6 inform these assessments. The decision depends on institutional risk tolerance, investment willingness, and strategic priorities. This section should be reviewed alongside the platform evaluation (Section 6) and compliance analysis (Section 5) for supporting detail.*
