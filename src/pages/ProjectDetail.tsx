import { useParams, useNavigate } from 'react-router-dom'

export default function ProjectDetail() {
  const { projectId } = useParams()
  const navigate = useNavigate()

  const projectDetails: Record<string, any> = {
    p1: {
      title: 'AI Song & Poem Generator',
      subtitle: 'Creative AI Content Generation',
      period: '2025',
      technologies: ['Node.js', 'Express.js', 'TypeScript', 'Ollama', 'phi3:mini', 'RESTful API', 'JSON'],
      description: 'An AI-powered application that generates custom poems and songs from user prompts.',
      details: [
        'Engineered a scalable <strong>Node.js and Express.js backend</strong> to facilitate real-time creative content generation, implementing a <strong>RESTful API</strong> that handles JSON-based requests for custom themes and styles.',
        'Architected a privacy-centric <strong>AI inference pipeline</strong> by integrating <strong>Ollama</strong> for local <strong>LLM processing</strong>, enabling high-performance text generation with the <strong>phi3:mini model</strong> while eliminating external API dependency and data latency.',
        'Developed a robust, modular codebase utilizing <strong>TypeScript and JavaScript</strong>, ensuring high maintainability and type safety across the application\'s backend infrastructure.',
        'Optimized creative workflows by designing a lightweight system capable of generating specialized content types (e.g., songs and poems) through customizable user prompts, improving the flexibility of the AI output.',
        'Strategized future-state enhancements by prototyping a roadmap for real-time streaming output, aiming to decrease perceived latency for long-form creative text generation.'
      ]
    },
    p2: {
      title: 'AI News Agent',
      subtitle: 'Autonomous AI Content Pipeline',
      period: '2025',
      technologies: ['Python', 'OpenAI', 'GPT-4o-mini', 'RSS Feeds', 'SQLite', 'Tweepy', 'Twitter API', 'SMTP', 'GitHub Actions', 'Cron'],
      description: 'Agent that generates a concise tweet using OpenAI and posts it to Twitter (X), and emails the tweet.',
      details: [
        'Engineered an end-to-end <strong>autonomous AI content pipeline</strong> using <strong>Python and OpenAI\'s GPT-4o-mini</strong> to aggregate, analyze, and summarize high-relevance artificial intelligence news into human-readable social media posts.',
        'Architected a modular <strong>data retrieval system</strong> utilizing <strong>RSS fetchers</strong> (Google News) and <strong>keyword-based filtering logic</strong> to programmatically curate content from reputable online sources.',
        'Implemented a persistent <strong>state management layer</strong> using <strong>SQLite</strong> to handle article deduplication, ensuring data integrity and preventing redundant content distribution across automated cycles.',
        'Developed a <strong>multi-channel distribution engine</strong> integrating <strong>Tweepy</strong> (Twitter/X API) and <strong>SMTP</strong> for real-time automated publishing and email notifications, managed through an environment-driven configuration for enhanced security.',
        'Optimized deployment and reliability by leveraging <strong>GitHub Actions</strong> and <strong>Cron</strong> for scheduled execution, enabling a fully hands-off, 24/7 autonomous operation with graceful error handling and logging.'
      ]
    },
    p3: {
      title: 'LifeLoop',
      subtitle: 'Loop-based Social App',
      period: '2025',
      technologies: ['React Native', 'TypeScript', 'Expo', 'React Navigation', 'AsyncStorage', 'Expo Camera', 'Media Library', 'Firebase'],
      description: 'Cross-platform social app prioritizing real-time, chronological loop-based storytelling with short multimedia clips.',
      details: [
        'Architected and developed a cross-platform <strong>React Native</strong> application using <strong>100% TypeScript</strong>, implementing a "loop-based" storytelling system that prioritizes real-time, chronological content over curated feeds.',
        'Engineered a high-performance multimedia capture and playback engine utilizing <strong>Expo Camera</strong> and <strong>Media Library</strong> to facilitate 10–20 second clip recording and auto-organizing content into immersive, ephemeral 24-hour "Loops".',
        'Implemented a seamless, gesture-driven UX with <strong>React Navigation</strong>, featuring full-screen vertical and horizontal swipe mechanics for content discovery, progress-tracked playback, and real-time reaction overlays.',
        'Developed a collaborative <strong>Remix framework</strong> that enables parallel storytelling by synchronizing user content side-by-side with friends\' loops, fostering shared experiences through technical synchronization of media streams.',
        'Optimized application performance and state management using <strong>React Context</strong> and <strong>AsyncStorage</strong> for low-latency local data handling, while designing a modular architecture ready for <strong>Firebase</strong> backend integration and global scaling.'
      ]
    }
  }

  const project = projectId ? projectDetails[projectId] : null

  if (!project) {
    return (
      <section className="page-content">
        <h1 className="page-title">Project Not Found</h1>
        <p>The requested project does not exist.</p>
        <button onClick={() => navigate('/self')}>Back</button>
      </section>
    )
  }

  return (
    <section className="page-content">
      <button className="nav-back-button" onClick={() => navigate('/self')}>/Self</button>
      <div className="project-detail">
        <h1 className="project-detail-title">{project.title}</h1>
        <p className="project-detail-company">{project.subtitle} • {project.period}</p>

        <div className="project-detail-technologies" style={{marginTop: '2rem'}}>
          <h3>Technologies</h3>
          <div className="tech-list">
            {project.technologies.map((t: string, idx: number) => (
              <span key={t} className="tech-badge">
                {t}
                {idx < project.technologies.length - 1 && ', '}
              </span>
            ))}
          </div>
        </div>

        <div className="project-detail-description" style={{marginTop: '2rem'}}>
          <h3>Overview</h3>
          <p>{project.description}</p>
        </div>

        {project.details && (
          <div className="project-detail-achievements" style={{marginTop: '2rem'}}>
            <h3>Key Highlights</h3>
            <div className="achievements-list">
              {project.details.map((detail: string, index: number) => (
                <div key={index} className="achievement-item">
                  <p dangerouslySetInnerHTML={{ __html: detail }} />
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="project-checkout" style={{marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #eee'}}>
          <h3>Checkout</h3>
          <a href={projectId === 'p1' ? 'https://github.com/sathyaprabhakara/AI-Song-and-Poem-Generator' : projectId === 'p2' ? 'https://github.com/sathyaprabhakara/AI-News-Agent' : projectId === 'p3' ? 'https://github.com/sathyaprabhakara/LifeLoop' : '#'} target="_blank" rel="noopener noreferrer" className="checkout-link">
            View Repository on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
