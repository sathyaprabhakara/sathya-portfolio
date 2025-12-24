import { jsPDF } from 'jspdf'

export default function Resume() {
  const handleDownloadResume = () => {
    const doc = new jsPDF()
    
    // Color definitions (RGB)
    const purpleColor: [number, number, number] = [92, 45, 145] // #5C2D91
    
    // Left column width
    const leftColX = 20
    const rightColX = 100
    const pageWidth = 210
    const margin = 20
    
    let yPosition = 20
    
    // LEFT COLUMN
    // Contact Information
    doc.setFontSize(10)
    doc.setTextColor(purpleColor[0], purpleColor[1], purpleColor[2])
    doc.setFont('helvetica', 'bold')
    doc.text('Contact information', leftColX, yPosition)
    yPosition += 6
    
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'normal')
    doc.text('Bengaluru, India', leftColX, yPosition)
    yPosition += 6
    
    doc.setTextColor(purpleColor[0], purpleColor[1], purpleColor[2])
    doc.text('sathyaprabhakara@gmail.com', leftColX, yPosition)
    yPosition += 27
    
    // Core Technologies (Purple title)
    doc.setTextColor(purpleColor[0], purpleColor[1], purpleColor[2])
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(10)
    doc.text('Core Technologies:', leftColX, yPosition)
    yPosition += 6
    
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(0, 0, 0)
    const coreTech = ['Java', 'TypeScript', 'JavaScript', 'React', 'Spring Boot', 'PostgreSQL', 'Node.js', 'Docker', 'Kubernetes', 'Jenkins', 'JPA', 'Cypress']
    coreTech.forEach(tech => {
      doc.text('• ' + tech, leftColX, yPosition)
      yPosition += 5
    })
    
    yPosition += 8
    
    // Others (Purple title)
    doc.setTextColor(purpleColor[0], purpleColor[1], purpleColor[2])
    doc.setFont('helvetica', 'bold')
    doc.text('Others:', leftColX, yPosition)
    yPosition += 6
    
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(0, 0, 0)
    const others = ['Git & GitHub', 'Testing (JUnit, Jest, Mockito)', 'CI/CD Pipelines', 'Apache Airflow', 'Code Quality (SonarQube)', 'Performance Optimization', 'API Integration', 'Build Automation']
    others.forEach(item => {
      doc.text('• ' + item, leftColX, yPosition)
      yPosition += 5
    })
    
    // RIGHT COLUMN
    yPosition = 20
    
    // Name in purple
    doc.setFontSize(24)
    doc.setTextColor(purpleColor[0], purpleColor[1], purpleColor[2])
    doc.setFont('helvetica', 'bold')
    doc.text('Sathya P', rightColX, yPosition)
    yPosition += 8
    
    // Title
    doc.setFontSize(12)
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'normal')
    doc.text('Full Stack Developer.', rightColX, yPosition)
    yPosition += 8
    
    // Summary
    doc.setFontSize(10)
    const summaryText = 'Focused on building scalable, high-performance software solutions and resilient systems that drive real business impact in the banking industry.'
    const summaryLines = doc.splitTextToSize(summaryText, pageWidth - rightColX - margin)
    summaryLines.forEach((line: string) => {
      doc.text(line, rightColX, yPosition)
      yPosition += 5
    })
    
    yPosition += 8
    
    // Experience heading in purple
    doc.setFontSize(12)
    doc.setTextColor(purpleColor[0], purpleColor[1], purpleColor[2])
    doc.setFont('helvetica', 'bold')
    doc.text('Experience', rightColX, yPosition)
    yPosition += 6
    
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(10)
    const introText = "I've worked on several web projects over the past 3+ years, some of which were for the following organization:"
    const introLines = doc.splitTextToSize(introText, pageWidth - rightColX - margin)
    introLines.forEach((line: string) => {
      doc.text(line, rightColX, yPosition)
      yPosition += 5
    })
    
    yPosition += 6
    
    // Software Engineer position
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(purpleColor[0], purpleColor[1], purpleColor[2])
    doc.text('Software Engineer', rightColX, yPosition)
    yPosition += 5
    
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(0, 0, 0)
    doc.text('Societe Generale GSC — Bengaluru', rightColX, yPosition)
    yPosition += 5
    
    doc.text('November 2022 - Present', rightColX, yPosition)
    yPosition += 5
    
    const companyDesc = 'Developing risk and compliance management systems for a leading global financial institution.'
    const descLines = doc.splitTextToSize(companyDesc, pageWidth - rightColX - margin)
    descLines.forEach((line: string) => {
      doc.text(line, rightColX, yPosition)
      yPosition += 5
    })
    
    yPosition += 4
    
    // MyCyberRisk Project
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(purpleColor[0], purpleColor[1], purpleColor[2])
    doc.text('MyCyberRisk Project:', rightColX, yPosition)
    yPosition += 5
    
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(0, 0, 0)
    const cyberRiskPoints = [
      'Spearheaded the implementation of risk mitigation functionalities in MyControls, including organizational tree components and legal entity upgrades.',
      'Executed comprehensive testing protocols (Unit, Functional, Behavioral, and performance tests).',
      'Ensured code quality with over 90% code coverage, measured by SonarQube.',
      'Collaborated with DevOps, utilizing Jenkins for automated deployments and Airflow for scheduling batch processes.',
      'Integrated AI-powered tools like GitHub Copilot to enhance productivity and accelerate development cycles.'
    ]
    
    cyberRiskPoints.forEach(point => {
      const lines = doc.splitTextToSize('• ' + point, pageWidth - rightColX - margin)
      lines.forEach((line: string) => {
        if (yPosition > 270) {
          doc.addPage()
          yPosition = 20
        }
        doc.text(line, rightColX + 3, yPosition)
        yPosition += 5
      })
      yPosition += 2
    })
    
    yPosition += 4
    
    // MyKRI Project
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(purpleColor[0], purpleColor[1], purpleColor[2])
    doc.text('MyKRI Project:', rightColX, yPosition)
    yPosition += 5
    
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(0, 0, 0)
    const kriPoints = [
      'Contributed to the development of a risk and compliance management system, including the development of periodicity.',
      'Utilized technologies such as Spring Boot, React, TypeScript, Spring Batch, and PostgreSQL for project execution.',
      'Designed and implemented batch jobs using Apache Airflow for automated workflows and data processing.',
      'Automated testing using Cypress to reduce manual efforts and improve software reliability.',
      'Implemented key application features, API integrations, and frontend optimizations for an enhanced user experience.'
    ]
    
    kriPoints.forEach(point => {
      const lines = doc.splitTextToSize('• ' + point, pageWidth - rightColX - margin)
      lines.forEach((line: string) => {
        if (yPosition > 270) {
          doc.addPage()
          yPosition = 20
        }
        doc.text(line, rightColX + 3, yPosition)
        yPosition += 5
      })
      yPosition += 2
    })
    
    // Save the PDF
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
            <h3 className="resume-section-title purple-title">Core Technologies</h3>
            <ul className="resume-tech-list">
              <li>Java</li>
              <li>TypeScript</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Spring Boot</li>
              <li>PostgreSQL</li>
              <li>Node.js</li>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>Jenkins</li>
              <li>JPA</li>
              <li>Cypress</li>
            </ul>
          </div>

          <div className="resume-section">
            <h3 className="resume-section-title purple-title">Others</h3>
            <ul className="resume-tech-list">
              <li>Git & GitHub</li>
              <li>Testing (JUnit, Jest, Mockito)</li>
              <li>CI/CD Pipelines</li>
              <li>Apache Airflow</li>
              <li>Code Quality (SonarQube)</li>
              <li>Performance Optimization</li>
              <li>API Integration</li>
              <li>Build Automation</li>
            </ul>
          </div>
        </div>

        <div className="resume-right-column">
          <div className="resume-header">
            <h2 className="purple-name">Sathya P</h2>
            <p className="resume-subtitle">Full Stack Developer.</p>
            <p className="resume-summary">Focused on building scalable, high-performance software solutions and resilient systems that drive real business impact in the banking industry.</p>
          </div>

          <div className="resume-section">
            <h3 className="resume-section-title purple-title">Experience</h3>
            <p className="resume-intro">I've worked on several web projects over the past 3+ years, some of which were for the following organization:</p>
            
            <div className="resume-experience">
              <div className="experience-item">
                <h4 className="purple-title">Software Engineer</h4>
                <p className="company">Societe Generale GSC - Bengaluru</p>
                <p className="period">November 2022 - Present</p>
                <p className="company-description">Developing risk and compliance management systems for a leading global financial institution.</p>
                
                <div className="project">
                  <h5 className="purple-title">MyCyberRisk Project:</h5>
                  <ul>
                    <li>Spearheaded the implementation of risk mitigation functionalities in MyControls, including organizational tree components and legal entity upgrades.</li>
                    <li>Executed comprehensive testing protocols (Unit, Functional, Behavioral, and performance tests).</li>
                    <li>Ensured code quality with over 90% code coverage, measured by SonarQube.</li>
                    <li>Collaborated with DevOps, utilizing Jenkins for automated deployments and Airflow for scheduling batch processes.</li>
                    <li>Integrated AI-powered tools like GitHub Copilot to enhance productivity and accelerate development cycles.</li>
                  </ul>
                </div>

                <div className="project">
                  <h5 className="purple-title">MyKRI Project:</h5>
                  <ul>
                    <li>Contributed to the development of a risk and compliance management system, including the development of periodicity.</li>
                    <li>Utilized technologies such as Spring Boot, React, TypeScript, Spring Batch, and PostgreSQL for project execution.</li>
                    <li>Designed and implemented batch jobs using Apache Airflow for automated workflows and data processing.</li>
                    <li>Automated testing using Cypress to reduce manual efforts and improve software reliability.</li>
                    <li>Implemented key application features, API integrations, and frontend optimizations for an enhanced user experience.</li>
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

