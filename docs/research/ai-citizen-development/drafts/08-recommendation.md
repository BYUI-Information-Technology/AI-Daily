# Section 8: Recommendation

**Prepared for:** BYU-Idaho CIO Office
**Author:** Ron Vallejo, AI Solutions Architect
**Date:** 2026-03-13
**Status:** Draft -- pending Ron's review
**Classification:** Internal -- IT Leadership

---

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
