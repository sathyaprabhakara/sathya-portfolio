export default function Shelf() {
  return (
    <section className="page-content">
      <h1 className="page-title">My Self</h1>
      <div className="shelf-content">
        <p>
          This is my digital self—a collection of resources, tools, and insights that have 
          influenced my work and thinking as a Full Stack Developer.
        </p>
        
        <div className="shelf-section">
          <h2 className="shelf-section-title">Technologies & Tools</h2>
          <div className="shelf-items">
            <div className="shelf-item">
              <h3>Languages</h3>
              <p>Java, TypeScript, JavaScript</p>
            </div>
            <div className="shelf-item">
              <h3>Frameworks</h3>
              <p>Spring Boot, React, JPA</p>
            </div>
            <div className="shelf-item">
              <h3>Tools</h3>
              <p>Git, GitHub, PostgreSQL, Sonar, Airflow batches, JIRA</p>
            </div>
            <div className="shelf-item">
              <h3>Testing Tools</h3>
              <p>Mockito, JUnit, Jest, Cypress, FitNesse</p>
            </div>
            <div className="shelf-item">
              <h3>CI/CD</h3>
              <p>Docker, Kubernetes, Jenkins</p>
            </div>
          </div>
        </div>

        <div className="shelf-section">
          <h2 className="shelf-section-title">Areas of Focus</h2>
          <ul className="shelf-list">
            <li>Full-stack web development</li>
            <li>Risk and compliance management systems</li>
            <li>Code quality and testing automation</li>
            <li>CI/CD pipeline optimization</li>
            <li>Performance optimization</li>
            <li>AI-powered development tools</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

