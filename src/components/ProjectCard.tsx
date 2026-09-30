import { Link } from 'react-router-dom';
import { projects } from '../projects';
export default function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
 return <Link to={`/project/${project.id}`} className="project-card"><div className={`project-art ${project.color}`}><span className="project-number">0{index + 1} / {project.category}</span><img src={project.image} alt={`${project.title} project artwork`} loading="lazy"/><span className="project-open" aria-hidden="true">↗</span></div><div className="project-caption"><p className="small-label">{project.tag}</p><h3>{project.title}</h3><p>{project.description}</p></div></Link>;
}
