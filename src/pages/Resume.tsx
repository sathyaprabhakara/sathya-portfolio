import { jsPDF } from 'jspdf'

export default function Resume() {
  const handleDownloadResume = () => {
  const doc = new jsPDF()
  const purple: [number, number, number] = [92, 45, 145]

  const leftX = 20
  const rightX = 100
  const pageWidth = 210
  const margin = 20

  let yLeft = 20
  let yRight = 20

  /* ================= LEFT COLUMN ================= */

  const sectionTitle = (title: string) => {
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(10)
    doc.setTextColor(...purple)
    doc.text(title, leftX, yLeft)
    yLeft += 6
  }

  const bulletList = (items: string[]) => {
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(0, 0, 0)
    items.forEach(i => {
      doc.text(`• ${i}`, leftX, yLeft)
      yLeft += 5
    })
    yLeft += 4
  }

  sectionTitle('Contact Information')
  doc.setFont('helvetica', 'normal')
  doc.text('Bengaluru, India', leftX, yLeft)
  yLeft += 5
  doc.setTextColor(...purple)
  doc.text('sathyaprabhakara@gmail.com', leftX, yLeft)
  yLeft += 10

  sectionTitle('Languages')
  bulletList(['Java', 'TypeScript', 'SQL'])

  sectionTitle('Frameworks')
  bulletList(['Spring Boot', 'React', 'Vite', 'JPA', 'MyBatis'])

  sectionTitle('Tools')
  bulletList(['Git & GitHub', 'PostgreSQL', 'SonarQube', 'Apache Airflow', 'JIRA'])

  sectionTitle('Testing Tools')
  bulletList(['JUnit', 'Jest', 'Mockito', 'Cypress', 'FitNesse'])

  sectionTitle('CI/CD')
  bulletList(['Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins'])

  /* ================= RIGHT COLUMN ================= */

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(24)
  doc.setTextColor(...purple)
  doc.text('Sathya P', rightX, yRight)
  yRight += 8

  doc.setFontSize(12)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(0, 0, 0)
  doc.text('Full Stack Developer', rightX, yRight)
  yRight += 8

  const summary =
    'Focused on building scalable, high-performance software solutions and resilient systems that drive real business impact in the banking industry.'
  doc.setFontSize(10)
  doc.splitTextToSize(summary, pageWidth - rightX - margin).forEach((line: string | string[]) => {
    doc.text(line, rightX, yRight)
    yRight += 5
  })
  yRight += 6

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(12)
  doc.setTextColor(...purple)
  doc.text('Experience', rightX, yRight)
  yRight += 6

  doc.setFont('helvetica', 'bold')
  doc.setFontSize(10)
  doc.text('Software Engineer', rightX, yRight)
  yRight += 5

  doc.setFont('helvetica', 'normal')
  doc.setTextColor(0, 0, 0)
  doc.text('Societe Generale GSC – Bengaluru', rightX, yRight)
  yRight += 5
  doc.text('November 2022 – Present', rightX, yRight)
  yRight += 6

  const projectSection = (title: string, points: string[]) => {
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(...purple)
    doc.text(title, rightX, yRight)
    yRight += 5

    doc.setFont('helvetica', 'normal')
    doc.setTextColor(0, 0, 0)

    points.forEach(p => {
      const lines = doc.splitTextToSize(`• ${p}`, pageWidth - rightX - margin)
      lines.forEach((l: string | string[]) => {
        if (yRight > 270) {
          doc.addPage()
          yRight = 20
        }
        doc.text(l, rightX + 3, yRight)
        yRight += 5
      })
      yRight += 2
    })
    yRight += 4
  }

  projectSection('MyCyberRisk Project:', [
    'Designed and built a centralized platform to ingest, classify, and remediate cybersecurity anomalies across multiple security controls.',
    'Implemented a metadata-driven, low-code workflow engine using a deterministic finite state machine (FSM).',
    'Engineered scalable ingestion and enrichment pipelines to normalize high-volume security events.',
    'Built a type-safe integration layer using REST, RabbitMQ, and dynamic rule evaluation (SpEL).',
    'Deployed and operated the platform on Kubernetes with CI/CD using Jenkins and Docker.',
    'Improved delivery velocity using GitHub Copilot, automated testing, and SonarQube quality gates.'
  ])

  projectSection('MyKRI Project:', [
    'Built a distributed microservices platform to monitor operational risk indicators in near real time.',
    'Developed backend services using Java, Spring Boot, PostgreSQL, and MyBatis.',
    'Designed batch jobs and workflows using Apache Airflow.',
    'Built REST APIs and React-based UI for end-to-end lifecycle management of risk metrics.',
    'Improved reliability and observability using OAuth2, ELK/APM, optimized connection pooling, and S3.'
  ])

  doc.save('Sathya_Resume.pdf')
}


  return (
    <section className="page-content">
      <h1 className="page-title">My Resume</h1>
      <div className="resume-content">
        <div className="resume-left-column">
          <div className="resume-section">
            <h3 className="resume-section-title purple-title">Contact Information</h3>
            <div className="resume-contact">
              <p>Bengaluru, India</p>
              <p><a href="mailto:sathyaprabhakara@gmail.com">sathyaprabhakara@gmail.com</a></p>
            </div>
          </div>

          <div className="resume-section">
            <h3 className="resume-section-title purple-title">Languages</h3>
            <ul className="resume-tech-list">
              <li>Java</li>
              <li>TypeScript</li>
              <li>SQL</li>
            </ul>
          </div>

          <div className="resume-section">
            <h3 className="resume-section-title purple-title">Frameworks</h3>
            <ul className="resume-tech-list">
              <li>Spring Boot</li>
              <li>React</li>
              <li>Vite</li>
              <li>JPA</li>
              <li>Mybatis</li>
            </ul>
          </div>

           <div className="resume-section">
            <h3 className="resume-section-title purple-title">Tools</h3>
            <ul className="resume-tech-list">
              <li>Git & GitHub</li>
              <li>PostgreSQL</li>
              <li>Sonar</li>
              <li>Apache Airflow</li>
              <li>JIRA</li>
            </ul>
          </div>

          <div className="resume-section">
            <h3 className="resume-section-title purple-title">Testing tools</h3>
            <ul className="resume-tech-list">
              <li>JUnit</li>
              <li>Jest</li>
              <li>Mockito</li>
              <li>Cypress</li>
              <li>FitNesse</li>
            </ul>
          </div>

          <div className="resume-section">
            <h3 className="resume-section-title purple-title">CI/CD</h3>
            <ul className="resume-tech-list">
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>Github actions</li>
              <li>Jenkins</li>
            </ul>
          </div>
        </div>

        <div className="resume-right-column">
          <div className="resume-header">
            <h2 className="purple-name">Sathya P</h2>
            <p className="resume-subtitle">Full Stack Developer</p>
            <p className="resume-summary">Focused on building scalable, high-performance software solutions and resilient systems that drive real business impact in the banking industry.</p>
          </div>

          <div className="resume-section">
            <h3 className="resume-section-title purple-title">Experience</h3>
            <p className="resume-intro">I've worked on several web projects over the past 3+ years, some of which are the following:</p>
            
            <div className="resume-experience">
              <div className="experience-item">
                <h4 className="purple-title">Software Engineer</h4>
                <p className="company">Societe Generale GSC - Bengaluru</p>
                <p className="period">November 2022 - Present</p>
                <p className="company-description">Developing cybersecurity and compliance management systems for a leading global financial institution.</p>
                
                <div className="project">
                  <h5 className="purple-title">MyCyberRisk Project:</h5>
                  <ul>
                    <li>Designed and built a centralized platform to ingest, classify, and remediate cybersecurity anomalies across multiple security controls, providing end-to-end visibility and lifecycle tracking.</li>
                    <li>Implemented a metadata-driven, low-code workflow engine using a deterministic finite state machine (FSM), enabling rapid onboarding of new security processes without code changes.</li>
                    <li>Engineered scalable ingestion and enrichment pipelines (push/pull, validation, staging, caching) to normalize high-volume security events and link them to people, applications, and infrastructure.</li>
                    <li>Built a type-safe runtime and integration layer supporting dynamic rule evaluation (SpEL), asynchronous messaging (RabbitMQ), and REST-based coordination with external security systems.</li>
                    <li>Deployed and operated the platform on Kubernetes, establishing CI/CD with Jenkins and Docker, and improving reliability and observability using Elastic/Kibana and centralized monitoring.</li>
                    <li>Improved code quality and delivery velocity by leveraging AI-assisted development tools (GitHub Copilot), implementing automated testing (JUnit, FitNesse, Cypress), and enforcing static analysis and quality gates via SonarQube.</li>
                  </ul>
                </div>

                <div className="project">
                  <h5 className="purple-title">MyKRI Project:</h5>
                  <ul>
                    <li>Built a distributed, microservices-based platform to monitor operational risk indicators in near real time, enabling early detection of risk escalation across large-scale enterprise systems.</li>
                    <li>Designed and implemented backend services using Java, Spring Boot, PostgreSQL, and MyBatis, supporting high-throughput data processing, batch jobs, and complex aggregation workflows.</li>
                    <li>Deployed and operated services on Kubernetes, improving system availability, scalability, and fault isolation across multiple environments.</li>
                    <li>Developed REST APIs and React-based UI to manage end-to-end lifecycle of risk metrics, including template-driven creation, bulk updates, and entity-level instantiation.</li>
                    <li>Strengthened system reliability, security, and observability through OAuth2-based authentication (ForgeRock), ELK/APM monitoring, optimized connection pooling (HikariCP), and object storage integration (S3).</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="resume-download">
            <button onClick={handleDownloadResume} className="download-button">
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

