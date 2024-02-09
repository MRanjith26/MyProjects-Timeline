// Write your code here
import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <div className="course-card">
      <div className="course-title-card">
        <h1 className="course-name">{courseTitle}</h1>
        <div className="time-card">
          <AiFillClockCircle className="card-icon" />
          <p className="course-time">{duration}</p>
        </div>
      </div>
      <p className="course-para">{description}</p>
      <ul className="tags-container">
        {tagsList.map(each => (
          <li key={each.id} className="tag-item">
            <p className="tag-text">{each.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default CourseTimelineCard
