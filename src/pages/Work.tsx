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
              Spearheaded the implementation of risk mitigation functionalities in MyControls, 
              including organizational tree components and legal entity upgrades.
            </li>
            <li>
              Executed comprehensive testing protocols (Unit, Functional, Behavioral, and performance tests).
            </li>
            <li>
              Ensured code quality with over 90% code coverage, measured by SonarQube.
            </li>
            <li>
              Collaborated with DevOps, utilizing Jenkins for automated deployments and Airflow 
              for scheduling batch processes.
            </li>
            <li>
              Integrated AI-powered tools like GitHub Copilot to enhance productivity and accelerate 
              development cycles.
            </li>
          </ul>
        </div>

        <div className="work-item">
          <h2 className="work-project-title">MyKRI Project</h2>
          <p className="work-company">Societe Generale GSC - Bengaluru</p>
          <p className="work-period">February 2025 - Present</p>
          <ul className="work-list">
            <li>
              Contributed to the development of a risk and compliance management system, including 
              the development of periodicity.
            </li>
            <li>
              Utilized technologies such as Spring Boot, React, TypeScript, Spring Batch, and 
              PostgreSQL for project execution.
            </li>
            <li>
              Designed and implemented batch jobs using Apache Airflow for automated workflows 
              and data processing.
            </li>
            <li>
              Automated testing using Cypress to reduce manual efforts and improve software reliability.
            </li>
            <li>
              Implemented key application features, API integrations, and frontend optimizations 
              for an enhanced user experience.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

