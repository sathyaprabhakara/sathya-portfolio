export default function Work() {
 return (
   <section className="page-content">
     <h1 className="page-title">My Work</h1>
     <div className="work-content">
       <div className="work-item">
         <h2 className="work-project-title">MyCyberRisk Project</h2>
         <p className="work-company">Societe Generale GSC - Bengaluru</p>
         <p className="work-period">November 2022 - February 2025</p>
         <ul className="work-list">
           <li>
             <strong>Designed and built a centralized platform to ingest,</strong> classify and remediate cybersecurity anomalies across
             multiple security controls, providing end-to-end visibility and lifecycle tracking.
           </li>
           <li>
             <strong>Implemented a metadata-driven, low-code workflow engine</strong> using a deterministic <strong>finite state machine (FSM), </strong>
             enabling rapid onboarding of new security processes without code changes.
           </li>
           <li>
             <strong>Engineered scalable ingestion and enrichment pipelines</strong> (push/pull, validation, staging, caching) to
             normalize high-volume security events and link them to people, applications and infrastructure.
           </li>
           <li>
             <strong>Built a type-safe runtime and integration layer</strong> supporting dynamic rule evaluation (SpEL), asynchronous messaging <strong>(RabbitMQ) </strong>
             and REST-based coordination with external security systems.
           </li>
           <li>
             <strong>Deployed and operated the platform on Kubernetes</strong>, establishing CI/CD with <strong>Jenkins and Docker</strong>, and improving
             reliability and observability using <strong>Elastic/Kibana</strong> and centralized monitoring.
           </li>
           <li>
             <strong>Improved code quality and delivery velocity by leveraging AI-assisted development tools (GitHub Copilot), </strong>
             implementing automated testing <strong>(JUnit, FitNesse, Cypress)</strong> and enforcing static analysis and quality gates via <strong>SonarQube</strong>.
           </li>
         </ul>
       </div>

       <div className="work-item">
         <h2 className="work-project-title">MyKRI Project</h2>
         <p className="work-company">Societe Generale GSC - Bengaluru</p>
         <p className="work-period">February 2025 - Present</p>
         <ul className="work-list">
           <li>
             <strong>Built a distributed, microservices-based platform </strong>to monitor operational risk indicators in near real time,
             enabling early detection of risk escalation across large-scale enterprise systems.
           </li>
           <li>
             <strong>Designed and implemented backend services</strong> using <strong>Java, Spring Boot, PostgreSQL and MyBatis</strong>,
             supporting high-throughput data processing, batch jobs and complex aggregation workflows.
           </li>
           <li>
             <strong>Deployed and operated services on Kubernetes</strong>, improving system availability,
              scalability and fault isolation across multiple environments.
           </li>
           <li>
             <strong>Developed REST APIs and React-based UI</strong> to manage end-to-end lifecycle of risk metrics, including template-driven creation,
             bulk updates and entity-level instantiation.
           </li>
           <li>
             <strong>Strengthened system reliability, security and observability</strong> through <strong>OAuth2-based authentication (ForgeRock),
              ELK/APM monitoring</strong>, optimized connection pooling <strong>(HikariCP)</strong> and object storage integration <strong>(S3)</strong>.
           </li>
         </ul>
       </div>
     </div>
   </section>
 )
}