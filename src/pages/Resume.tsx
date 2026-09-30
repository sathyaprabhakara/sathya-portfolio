import resume from '../resume.json';
import './Resume.css';

export default function Resume() {
  const pdfUrl = `${import.meta.env.BASE_URL}Sathya_Resume.pdf`;

  return (
    <section className="resume-page" aria-labelledby="resume-name">
      <div className="resume-toolbar">
        <span className="eyebrow">THE DETAILS / RÉSUMÉ</span>
        <div>
          <a className="resume-preview-link" href={pdfUrl} target="_blank" rel="noreferrer">View PDF ↗</a>
          <a className="button" href={pdfUrl} download="Sathya_Resume.pdf">Download résumé <span aria-hidden="true">↓</span></a>
        </div>
      </div>

      <article className="resume-sheet">
        <header className="resume-masthead">
          <p className="resume-kicker">ENGINEERING / FULL-STACK / AI</p>
          <h1 id="resume-name">{resume.name}<span aria-hidden="true">✳</span></h1>
          <p className="resume-role">{resume.role}</p>
          <p className="resume-lead">{resume.summary}</p>
        </header>

        <div className="resume-body">
          <aside className="resume-sidebar" aria-label="Contact and skills">
            <div className="resume-years"><strong>{resume.experienceYears}<span> years</span></strong><p>Of engineering experience</p></div>
            <section className="resume-contact-block">
              <h2><span>Contact</span></h2>
              <p>{resume.location}</p>
              <a href={`mailto:${resume.email}`}>{resume.email}</a>
              <div className="resume-profile-links">{resume.links.map(link => <a key={link.label} href={link.url} target="_blank" rel="noreferrer">{link.label} <span aria-hidden="true">↗</span></a>)}</div>
            </section>
            {resume.skills.map(group => <section className="resume-skill-group" key={group.title}><h2>{group.title}</h2><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></section>)}
          </aside>

          <div className="resume-story">
            <section aria-labelledby="experience-heading">
              <h2 id="experience-heading" className="resume-section-heading"><span>Experience</span><span className="resume-section-index">01</span></h2>
              <div className="resume-employer"><h3>{resume.company}</h3><p>Software Engineer <span> / {resume.period}</span></p></div>
              {resume.experience.map(role => <section className="resume-position" key={role.title}><div><h4>{role.title}</h4><span className="resume-date">{role.period}</span></div><p className="resume-position-subtitle">{role.subtitle}</p><ul>{role.points.map(point => <li key={point}>{point}</li>)}</ul></section>)}
            </section>
            <section className="resume-selected" aria-labelledby="projects-heading">
              <h2 id="projects-heading" className="resume-section-heading"><span>Selected projects</span><span className="resume-section-index">02</span></h2>
              {resume.projects.map(project => <div className="resume-build" key={project.name}><a href={project.url} target="_blank" rel="noreferrer">{project.name} <span aria-hidden="true">↗</span></a><p className="resume-build-stack">{project.stack}</p><p>{project.description}</p></div>)}
            </section>
          </div>
        </div>
        <div className="resume-sheet-footer"><span>SATHYA P / RÉSUMÉ</span><span>Built with care. Ready for what’s next.</span></div>
      </article>
      <div className="resume-download-note"><p>A considered layout, right down to the last detail.</p><span>One-page A4 PDF · Selectable text · Clickable links</span></div>
    </section>
  );
}
