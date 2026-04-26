import { useNavigate } from "react-router-dom";
import songImg from "../assets/ai-song.png";
import newsImg from "../assets/ai-news.png";
import lifeloopImg from "../assets/lifeloop.png";
import creatorhubImg from "../assets/creatorhub.png";
import chatbotImg from "../assets/aidocumentchatbot.png";
import bangalorebyteImg from "../assets/banglorebyte.png";

export default function Self() {
  const navigate = useNavigate();

  const projects = [
    {
      id: "p1",
      title: "AI Song & Poem Generator",
      subtitle: "",
      brief:
        "An AI-powered application that generates custom poems and songs from user prompts.",
      img: songImg,
    },
    {
      id: "p2",
      title: "AI News Agent",
      subtitle: "",
      brief:
        "Agent that generates a concise tweet using OpenAI and posts it to Twitter (X), and emails the tweet.",
      img: newsImg,
    },
    {
      id: "p3",
      title: "LifeLoop",
      subtitle: "",
      brief:
        "LifeLoop is a revolutionary social media app that focuses on authentic, real-time shared moments through a loop-based storytelling system.",
      img: lifeloopImg,
    },
    {
      id: "p4",
      title: "CreatorHub",
      subtitle: "",
      brief:
        "A production-ready backend powering a social content platform with secure authentication, post management, and real-time interactions.",
      img: creatorhubImg,
    },
    {
      id: "p5",
      title: "BangaloreByte",
      subtitle: "",
      brief:
        "An AI-powered hyperlocal backend that answers real-time city queries for Bengaluru — traffic, weather, and local events.",
      img: bangalorebyteImg,
    },
    {
      id: "p6",
      title: "AI Document Chatbot",
      subtitle: "",
      brief:
        "A fully local AI chatbot that lets you upload PDFs and ask questions about them using a complete Retrieval Augmented Generation pipeline.",
      img: chatbotImg,
    },
  ];

  return (
    <section className="page-content">
      <h1 className="page-title">My Self</h1>
      <div className="shelf-content">
        <p>
          This is my digital self — a collection of projects I’ve built, tools I
          rely on, and ideas I explore.
        </p>

        <div className="shelf-section">
          <h2 className="shelf-section-title">Technologies & Tools</h2>
          <div className="shelf-items">
            <div className="shelf-item">
              <h3>Languages</h3>
              <p>Java, TypeScript, JavaScript, SQL</p>
            </div>
            <div className="shelf-item">
              <h3>Frameworks</h3>
              <p>Spring Boot, React, Vite</p>
            </div>
            <div className="shelf-item">
              <h3>CI/CD</h3>
              <p>Docker, Kubernetes, Jenkins, Github actions</p>
            </div>
            <div className="shelf-item">
              <h3>Tools</h3>
              <p>GitHub, Sonar, Airflow batches, JIRA</p>
            </div>
            <div className="shelf-item">
              <h3>Testing Tools</h3>
              <p>Mockito, JUnit, Jest, Cypress, FitNesse</p>
            </div>
            <div className="shelf-item">
              <h3>AI Tools</h3>
              <p>
                GitHub Copilot, Cursor, Hugging Face, Vertex AI, LangChain,
                NotebookLM, Lovable
              </p>
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
                onKeyDown={(e) => {
                  if (e.key === "Enter") navigate(`/project/${p.id}`);
                }}
              >
                <div
                  style={{
                    minHeight: "120px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <img
                    src={p.img}
                    alt={`${p.title} logo`}
                    style={{ maxWidth: "80%" }}
                  />
                  <hr
                    style={{
                      width: "80%",
                      margin: "12px 0",
                      border: "none",
                      height: "1px",
                      background: "#ececec",
                    }}
                  />
                </div>
                <div style={{ paddingTop: "1rem" }}>
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
  );
}
