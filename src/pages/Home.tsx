export default function Home() {
  return (
    <>
      <section className="hero">
        <h1 className="hero-title">
          Hey, I'm <span className="highlight">Sathya</span>
        </h1>
        <div className="hero-content">
          <p>
            A Full Stack Developer with over 3 years of experience in the banking industry, 
            skilled in web development. My work spans backend engineering, frontend development, 
            and full-stack architecture, which has shaped how I think about building scalable 
            and resilient systems.
          </p>
          <p>
            Currently, I work at <strong>Societe Generale GSC</strong> in Bengaluru, where I 
            primarily focus on developing risk and compliance management systems. I contribute 
            to high-impact projects like <strong>MyCyberRisk</strong> and <strong>MyKRI</strong>, 
            implementing comprehensive solutions that ensure code quality with over 90% coverage 
            and automated testing protocols.
          </p>
          <p>
            I specialize in technologies such as <strong>Spring Boot</strong>, <strong>React</strong>, 
            <strong>TypeScript</strong>, and <strong>PostgreSQL</strong>, with expertise in CI/CD 
            pipelines using <strong>Docker</strong>, <strong>Kubernetes</strong>, and <strong>Jenkins</strong>. 
            I also leverage AI-powered tools like GitHub Copilot to enhance productivity and accelerate 
            development cycles.
          </p>
          <p>
            If you have a question or proposal, or just want to say hello, feel free to{' '}
            <a href="mailto:sathyaprabhakara@gmail.com" className="contact-link">contact me</a>.
          </p>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-social">
          <a 
            href="https://github.com/sathyaprabhakara" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="social-link"
          >
            GH
          </a>
          <a 
            href="https://www.linkedin.com/in/sathyaprabhakara" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="social-link"
          >
            LN
          </a>
        </div>
      </section>
    </>
  )
}

