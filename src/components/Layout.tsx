import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const location = useLocation()

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  return (
    <div className="app">
      <div className="app-container">
        <header className="header">
          <nav className="nav">
            <Link to="/" className="site-name">Sathya</Link>
            <div className="nav-links">
              <Link to="/work" className={location.pathname === '/work' ? 'active' : ''}>My Work</Link>
              <Link to="/self" className={location.pathname === '/self' ? 'active' : ''}>My Self</Link>
              <Link to="/resume" className={location.pathname === '/resume' ? 'active' : ''}>My Resume</Link>
            </div>
            <button className="sidebar-toggle" onClick={toggleSidebar} aria-label="Toggle sidebar">
              <span></span>
              <span></span>
            </button>
          </nav>
        </header>

        <main className="main">
          {children}
        </main>
      </div>

      {/* Sidebar Menu */}
      <div className={`sidebar-overlay ${isSidebarOpen ? 'active' : ''}`} onClick={closeSidebar}></div>
      <aside className={`sidebar ${isSidebarOpen ? 'active' : ''}`}>
        <button className="sidebar-close" onClick={closeSidebar} aria-label="Close sidebar">
          ×
        </button>
        <nav className="sidebar-nav">
          <Link to="/work" onClick={closeSidebar}>My Work</Link>
          <Link to="/self" onClick={closeSidebar}>My Self</Link>
          <Link to="/resume" onClick={closeSidebar}>My Resume</Link>
        </nav>
        <div className="sidebar-contact">
          <h3>Say Hello</h3>
          <a href="mailto:sathyaprabhakara@gmail.com" onClick={closeSidebar}>sathyaprabhakara@gmail.com</a>
        </div>
        <div className="sidebar-social">
          <a 
            href="https://github.com/sathyaprabhakara" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={closeSidebar}
          >
            GH
          </a>
          <a 
            href="https://www.linkedin.com/in/sathyaprabhakara" 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={closeSidebar}
          >
            LN
          </a>
        </div>
      </aside>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section footer-left">
            <h3>Say Hello</h3>
            <a href="mailto:sathyaprabhakara@gmail.com">sathyaprabhara@gmail.com</a>
          </div>
          <div className="footer-section footer-right">
            <Link to="/">Home</Link>
            <Link to="/work">My Work</Link>
            <Link to="/self">My Self</Link>
            <Link to="/resume">My Resume</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">© Sathya P 2025</p>
          <div className="footer-social-links">
            <a 
              href="https://github.com/sathyaprabhakara"
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              GH
            </a>
            <a 
              href="https://www.linkedin.com/in/sathyaprabhakara" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              LN
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

