import { useParams, useNavigate } from "react-router-dom";

export default function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const projectDetails: Record<string, any> = {
    p1: {
      title: "AI Song & Poem Generator",
      subtitle: "Creative AI Content Generation",
      period: "2025",
      technologies: [
        "Node.js",
        "Express.js",
        "TypeScript",
        "Ollama",
        "phi3:mini",
        "RESTful API",
        "JSON",
      ],
      description:
        "An AI-powered application that generates custom poems and songs from user prompts.",
      details: [
        "Engineered a scalable <strong>Node.js and Express.js backend</strong> to facilitate real-time creative content generation, implementing a <strong>RESTful API</strong> that handles JSON-based requests for custom themes and styles.",
        "Architected a privacy-centric <strong>AI inference pipeline</strong> by integrating <strong>Ollama</strong> for local <strong>LLM processing</strong>, enabling high-performance text generation with the <strong>phi3:mini model</strong> while eliminating external API dependency and data latency.",
        "Developed a robust, modular codebase utilizing <strong>TypeScript and JavaScript</strong>, ensuring high maintainability and type safety across the application's backend infrastructure.",
        "Optimized creative workflows by designing a lightweight system capable of generating specialized content types (e.g., songs and poems) through customizable user prompts, improving the flexibility of the AI output.",
        "Strategized future-state enhancements by prototyping a roadmap for real-time streaming output, aiming to decrease perceived latency for long-form creative text generation.",
      ],
    },
    p2: {
      title: "AI News Agent",
      subtitle: "Autonomous AI Content Pipeline",
      period: "2025",
      technologies: [
        "Python",
        "OpenAI",
        "GPT-4o-mini",
        "RSS Feeds",
        "SQLite",
        "Tweepy",
        "Twitter API",
        "SMTP",
        "GitHub Actions",
        "Cron",
      ],
      description:
        "Agent that generates a concise tweet using OpenAI and posts it to Twitter (X), and emails the tweet.",
      details: [
        "Engineered an end-to-end <strong>autonomous AI content pipeline</strong> using <strong>Python and OpenAI's GPT-4o-mini</strong> to aggregate, analyze, and summarize high-relevance artificial intelligence news into human-readable social media posts.",
        "Architected a modular <strong>data retrieval system</strong> utilizing <strong>RSS fetchers</strong> (Google News) and <strong>keyword-based filtering logic</strong> to programmatically curate content from reputable online sources.",
        "Implemented a persistent <strong>state management layer</strong> using <strong>SQLite</strong> to handle article deduplication, ensuring data integrity and preventing redundant content distribution across automated cycles.",
        "Developed a <strong>multi-channel distribution engine</strong> integrating <strong>Tweepy</strong> (Twitter/X API) and <strong>SMTP</strong> for real-time automated publishing and email notifications, managed through an environment-driven configuration for enhanced security.",
        "Optimized deployment and reliability by leveraging <strong>GitHub Actions</strong> and <strong>Cron</strong> for scheduled execution, enabling a fully hands-off, 24/7 autonomous operation with graceful error handling and logging.",
      ],
    },
    p3: {
      title: "LifeLoop",
      subtitle: "Loop-based Social App",
      period: "2025",
      technologies: [
        "React Native",
        "TypeScript",
        "Expo",
        "React Navigation",
        "AsyncStorage",
        "Expo Camera",
        "Media Library",
        "Firebase",
      ],
      description:
        "Cross-platform social app prioritizing real-time, chronological loop-based storytelling with short multimedia clips.",
      details: [
        'Architected and developed a cross-platform <strong>React Native</strong> application using <strong>100% TypeScript</strong>, implementing a "loop-based" storytelling system that prioritizes real-time, chronological content over curated feeds.',
        'Engineered a high-performance multimedia capture and playback engine utilizing <strong>Expo Camera</strong> and <strong>Media Library</strong> to facilitate 10–20 second clip recording and auto-organizing content into immersive, ephemeral 24-hour "Loops".',
        "Implemented a seamless, gesture-driven UX with <strong>React Navigation</strong>, featuring full-screen vertical and horizontal swipe mechanics for content discovery, progress-tracked playback, and real-time reaction overlays.",
        "Developed a collaborative <strong>Remix framework</strong> that enables parallel storytelling by synchronizing user content side-by-side with friends' loops, fostering shared experiences through technical synchronization of media streams.",
        "Optimized application performance and state management using <strong>React Context</strong> and <strong>AsyncStorage</strong> for low-latency local data handling, while designing a modular architecture ready for <strong>Firebase</strong> backend integration and global scaling.",
      ],
    },
    p4: {
      title: "CreatorHub",
      subtitle: "Production-Ready Social Backend",
      period: "2025",
      technologies: [
        "Java 17",
        "Spring Boot",
        "Spring Security",
        "JWT",
        "Google OAuth",
        "BCrypt",
        "PostgreSQL",
        "Liquibase",
        "Maven",
        "Lombok",
      ],
      description:
        "A production-ready backend powering a social content platform with secure authentication, post management, and real-time interactions.",
      details: [
        "Engineered a secure authentication system using <strong>Spring Security and JWT</strong>, supporting email/password login and <strong>Google OAuth</strong> via ID tokens with <strong>BCrypt</strong> password hashing and access/refresh token session management.",
        "Architected a clean layered backend with controller, service, repository, DTO, and exception handling layers, ensuring modularity, testability, and long-term maintainability.",
        "Implemented a <strong>PostgreSQL</strong> database with <strong>Liquibase</strong> for schema versioning and migration control, ensuring reliable and auditable database evolution across environments.",
        "Developed core social platform features including image-upload posts, paginated feeds, likes, and comments — all secured behind authenticated API routes.",
        "Optimized feed and comment scalability using pagination support, with <strong>Maven</strong> managing builds and <strong>Lombok</strong> reducing boilerplate across the codebase.",
      ],
    },
    p5: {
      title: "BangaloreByte",
      subtitle: "Hyperlocal City Intelligence API",
      period: "2025",
      technologies: [
        "Python",
        "FastAPI",
        "Ollama",
        "phi3:mini",
        "Redis",
        "ChromaDB",
        "React",
        "Vite",
        "TypeScript",
        "Docker",
        "Cloud Run",
      ],
      description:
        "An AI-powered hyperlocal backend that answers real-time city queries for Bengaluru — traffic, weather, and local events.",
      details: [
        "Architected a <strong>FastAPI</strong> backend with a Bangalore-grounded LLM system prompt using <strong>Ollama (phi3:mini)</strong>, enabling hyperlocal query answering with a witty, city-aware persona.",
        "Engineered real ingestion fetchers for live weather, traffic heuristics, and weekly events, normalizing multi-source city signals into a unified retrieval context.",
        "Implemented a <strong>CityRetriever</strong> abstraction layer that assembles contextual snippets to ground LLM answers, designed to swap seamlessly with <strong>Firestore</strong> vector search.",
        "Developed <strong>Redis</strong>-backed query caching for hot questions with graceful fallback, reducing redundant LLM calls and improving response latency.",
        "Containerized the service with a <strong>Dockerfile</strong> ready for <strong>Cloud Run</strong> deployment, paired with a lightweight <strong>React + Vite</strong> developer UI for prototyping and testing.",
      ],
    },
    p6: {
      title: "AI Document Chatbot",
      subtitle: "RAG-Powered PDF Q&A",
      period: "2025",
      technologies: [
        "Python",
        "FastAPI",
        "Streamlit",
        "LangChain",
        "ChromaDB",
        "Ollama",
        "llama3",
        "PyPDF",
        "nomic-embed-text",
      ],
      description:
        "A fully local AI chatbot that lets you upload PDFs and ask questions about them using a complete Retrieval Augmented Generation pipeline.",
      details: [
        "Engineered a complete <strong>RAG pipeline</strong> — from PDF ingestion and vector embedding to similarity search and LLM generation — using <strong>LangChain, ChromaDB</strong>, and <strong>Ollama (llama3)</strong> with zero cloud dependency.",
        "Developed a <strong>FastAPI</strong> backend with RESTful endpoints for document upload, querying, listing, and database management, with full API documentation via <strong>Swagger</strong>.",
        "Implemented intelligent text chunking (500-character chunks, 100-character overlap) and <strong>nomic-embed-text</strong> embeddings stored persistently in <strong>ChromaDB</strong> for accurate semantic retrieval.",
        "Built a conversational <strong>Streamlit</strong> frontend with tabbed document upload, chat, and management interfaces for a seamless end-to-end user experience.",
        "Designed a privacy-first, fully offline architecture — all models and data remain local after initial setup, with comprehensive error handling and structured logging throughout.",
      ],
    },
  };

  const project = projectId ? projectDetails[projectId] : null;

  if (!project) {
    return (
      <section className="page-content">
        <h1 className="page-title">Project Not Found</h1>
        <p>The requested project does not exist.</p>
        <button onClick={() => navigate("/self")}>Back</button>
      </section>
    );
  }

  return (
    <section className="page-content">
      <button className="nav-back-button" onClick={() => navigate("/self")}>
        /Self
      </button>
      <div className="project-detail">
        <h1 className="project-detail-title">{project.title}</h1>
        <p className="project-detail-company">
          {project.subtitle} • {project.period}
        </p>

        <div
          className="project-detail-technologies"
          style={{ marginTop: "2rem" }}
        >
          <h3>Technologies</h3>
          <div className="tech-list">
            {project.technologies.map((t: string, idx: number) => (
              <span key={t} className="tech-badge">
                {t}
                {idx < project.technologies.length - 1 && ", "}
              </span>
            ))}
          </div>
        </div>

        <div
          className="project-detail-description"
          style={{ marginTop: "2rem" }}
        >
          <h3>Overview</h3>
          <p>{project.description}</p>
        </div>

        {project.details && (
          <div
            className="project-detail-achievements"
            style={{ marginTop: "2rem" }}
          >
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

        <div
          className="project-checkout"
          style={{
            marginTop: "3rem",
            paddingTop: "2rem",
            borderTop: "1px solid #eee",
          }}
        >
          <h3>Checkout</h3>
          <a
            href={
              projectId === "p1"
                ? "https://github.com/sathyaprabhakara/AI-Song-and-Poem-Generator"
                : projectId === "p2"
                ? "https://github.com/sathyaprabhakara/AI-News-Agent"
                : projectId === "p3"
                ? "https://github.com/sathyaprabhakara/LifeLoop"
                : projectId === "p4"
                ? "https://github.com/sathyaprabhakara/CreatorHub"
                : projectId === "p5"
                ? "https://github.com/sathyaprabhakara/BangloreByte"
                : projectId === "p6"
                ? "https://github.com/sathyaprabhakara/AI-Document-Chatbot"
                : "#"
            }
            target="_blank"
            rel="noopener noreferrer"
            className="checkout-link"
          >
            View Repository on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
