# Compliance and Governance Analysis

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

*Draft prepared for CIO executive briefing on AI citizen development. This section addresses compliance and governance requirements. It should be reviewed by institutional legal counsel and the FERPA compliance officer before finalization.*
