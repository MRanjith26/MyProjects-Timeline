// Write your code here
import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails

  return (
    <div className="project-card">
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="title-card">
        <h1 className="project-name">{projectTitle}</h1>
        <div className="time-card">
          <AiFillCalendar className="card-icon" />
          <p className="project-time">{duration}</p>
        </div>
      </div>
      <p className="project-para">{description}</p>
      <a href={projectUrl} className="link-text">
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
