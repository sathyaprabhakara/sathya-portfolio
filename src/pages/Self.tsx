import { useNavigate } from 'react-router-dom'
import songImg from '../assets/ai-song.png'
import newsImg from '../assets/ai-news.png'
import lifeloopImg from '../assets/lifeloop.png'

export default function Self() {
  const navigate = useNavigate()

  const projects = [
    { id: 'p1', title: 'AI Song & Poem Generator', subtitle: '', brief: 'An AI-powered application that generates custom poems and songs from user prompts.', img: songImg },
    { id: 'p2', title: 'AI News Agent', subtitle: '', brief: 'Agent that generates a concise tweet using OpenAI and posts it to Twitter (X), and emails the tweet.', img: newsImg },
    { id: 'p3', title: 'LifeLoop', subtitle: '', brief: 'LifeLoop is a revolutionary social media app that focuses on authentic, real-time shared moments through a loop-based storytelling system.', img: lifeloopImg },
  ]

  return (
    <section className="page-content">
      <h1 className="page-title">My Self</h1>
      <div className="shelf-content">
        <p>
          This is my digital self — a collection of projects I’ve built, tools I rely on, and ideas I explore.
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
              <h3>CI/CD</h3>
              <p>Docker, Kubernetes, Jenkins</p>
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
              <h3>AI Tools</h3>
              <p>GitHub Copilot, Cursor, Hugging Face, Vertex AI, LangChain</p>
            </div>
          </div>
        </div>

        <div className="shelf-section">
          <h2 className="shelf-section-title">Personal projects</h2>
          <div className="projects-grid">
            {projects.map((p) => (
              <div
                key={p.id}
                className="project-card"
                role="button"
                tabIndex={0}
                onClick={() => navigate(`/project/${p.id}`)}
                onKeyDown={(e) => { if (e.key === 'Enter') navigate(`/project/${p.id}`) }}
              >
                <div style={{minHeight: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                  <img src={p.img} alt={`${p.title} logo`} style={{maxWidth:'80%'}} />
                  <hr style={{width:'80%', margin:'12px 0', border:'none', height:'1px', background:'#ececec'}} />
                </div>
                <div style={{paddingTop: '1rem'}}>
                  <h3 className="project-card-title">{p.title}</h3>
                  <p className="project-card-company">{p.subtitle}</p>
                  <p className="project-card-brief">{p.brief}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}