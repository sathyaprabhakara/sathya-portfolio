import { useState } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../projects';
const layers = [
 { name: 'Interface', detail: 'Thoughtful interfaces. Type-safe interactions.', tech: 'React · TypeScript', symbol: '</>' },
 { name: 'Systems', detail: 'Resilient services. Designed to work together.', tech: 'Java · Spring Boot', symbol: '{ }' },
 { name: 'Intelligence', detail: 'Grounded answers. Useful AI, built end to end.', tech: 'LangChain · Ollama', symbol: '✳' },
];
export default function Home() {
 const [layer, setLayer] = useState(1);
 return <>
  <section className="hero"><div className="hero-copy"><p className="eyebrow"><span className="status-dot"/> HEY, I’M SATHYA — SOFTWARE ENGINEER</p><h1>Thoughtful code.<br/>Resilient systems.<br/><span>A little <em>possibility.</em></span></h1><p className="hero-description">I bring ideas to life across the stack — from reliable enterprise platforms to curious experiments in AI.</p><div className="hero-actions"><Link className="button" to="/self">Explore my projects <span>↗</span></Link><Link className="text-link" to="/work">The story so far <span>→</span></Link></div><div className="hero-location"><span className="location-icon">◎</span> Based in Bengaluru, India <span className="location-line"/> Building with purpose</div></div>
  <div className="system-art"><div className="art-topline"><span>THE WAY I BUILD</span><span>01 — 03</span></div><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="art-cross cross-one">+</div><div className="art-cross cross-two">+</div><div className="system-stack" aria-hidden="true"><div className={`system-plane plane-top ${layer === 0 ? 'chosen' : ''}`}><span>&lt;/&gt;</span></div><div className={`system-plane plane-middle ${layer === 1 ? 'chosen' : ''}`}><span>{'{ }'}</span></div><div className={`system-plane plane-bottom ${layer === 2 ? 'chosen' : ''}`}><span>✳</span></div></div><span className="art-annotation">IDEA → ARCHITECTURE → IMPACT</span><div className="art-controls"><div className="layer-buttons" aria-label="Explore engineering layers">{layers.map((item, i) => <button key={item.name} aria-pressed={layer === i} onClick={() => setLayer(i)}>{item.name}</button>)}</div><div className="layer-detail" aria-live="polite"><p>{layers[layer].detail}</p><span>{layers[layer].tech}</span></div></div></div>
  </section>
  <section className="credibility" aria-label="Engineering background"><div><span className="small-label">CURRENTLY BUILDING AT</span><strong><span className="sg-mark"/> Société Générale</strong></div><div><strong>4 <span>years</span></strong><p>Engineering for the real world</p></div><div><strong>Full-stack <span>+ AI</span></strong><p>From foundations to possibilities</p></div><a href="#selected">SCROLL TO EXPLORE <span>↓</span></a></section>
  <section id="selected" className="section-block"><div className="section-heading"><div><p className="eyebrow">01 / SELECTED BUILDS</p><h2>Ideas, made <em>real.</em></h2></div><Link className="text-link" to="/self">All projects <span>↗</span></Link></div><div className="projects-grid">{projects.slice(0, 2).map((project, index) => <ProjectCard key={project.id} project={project} index={index}/>)}</div></section>
  <section className="about-strip section-block"><div><p className="eyebrow">02 / A LITTLE ABOUT ME</p><h2>A systems mind.<br/><em>A builder’s curiosity.</em></h2></div><div><p>I’m a full-stack software engineer working on risk and cybersecurity platforms at Société Générale GSC. I care about the parts you see, and the foundations you don’t.</p><p>Beyond enterprise engineering, I explore local language models, retrieval pipelines, and autonomous agents — bringing the same care for reliability to new possibilities.</p><Link className="text-link" to="/resume">More about my experience <span>↗</span></Link></div></section>
 </>;
}
