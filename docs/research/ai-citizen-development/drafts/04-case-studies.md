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
