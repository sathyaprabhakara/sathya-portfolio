export default function Home() {
  return (
    <>
      <section className="hero">
        <h1 className="hero-title">
          Hey, I'm <span className="highlight">Sathya</span>
        </h1>
        <div className="hero-content">
          <p>
            <strong>Full-stack software engineer</strong> with{" "}
            <strong>3+ years</strong> of experience building{" "}
            <strong>scalable, distributed systems</strong> in high-compliance
            environments. Strong background across <strong>backend</strong>,
            <strong> frontend</strong> and <strong>system design</strong> with a
            focus on <strong>reliability</strong>, <strong>performance</strong>{" "}
            and <strong>clean architecture</strong>.
          </p>
          <p>
            Currently at <strong>Société Générale GSC (Bengaluru)</strong>,
            working on enterprise-scale risk and cybersecurity platforms (
            <strong>MyCyberRisk</strong>, <strong>MyKRI</strong>) that process
            and remediate critical business signals. Led development across{" "}
            <strong>microservices</strong>, <strong>workflow engines</strong>{" "}
            and <strong>data pipelines</strong>
            delivering <strong>90%+ automated test coverage</strong> and
            enforcing strong <strong>code-quality</strong> standards.
          </p>
          <p>
            Proficient in <strong>Java (Spring Boot)</strong>,{" "}
            <strong>React</strong>, <strong>TypeScript</strong> and{" "}
            <strong>PostgreSQL</strong>, with hands-on experience in{" "}
            <strong>containerized deployments</strong> and{" "}
            <strong>CI/CD pipelines</strong> using <strong>Docker</strong>,{" "}
            <strong>Kubernetes</strong>
            and <strong>Jenkins</strong>. Leverage{" "}
            <strong>AI-assisted development (GitHub Copilot)</strong> to improve
            development velocity while maintaining production-grade quality and
            observability.
          </p>
          <p>
            If you have a question or proposal, or just want to say hello, feel
            free to{" "}
            <a
              href="mailto:sathyaprabhakara@gmail.com"
              className="contact-link"
            >
              contact me
            </a>
            .
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
  );
}
