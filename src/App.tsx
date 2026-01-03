import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Work from './pages/Work'
import Resume from './pages/Resume'
import './App.css'
import Self from './pages/Self'
import ProjectDetail from './pages/ProjectDetail'

function App() {
  return (
    // Use basename so routes work when site is served from /sathya-portfolio/
    <Router basename="/sathya-portfolio">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/self" element={<Self />} />
          <Route path="/project/:projectId" element={<ProjectDetail />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
