// Write your code here
import './index.css'
import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props

  const renderTimeLineList = item => {
    if (item.categoryId === 'COURSE') {
      return <CourseTimelineCard key={item.id} courseDetails={item} />
    }
    return <ProjectTimelineCard key={item.id} projectDetails={item} />
  }

  return (
    <div className="bg-container">
      <div className="timeline-container">
        <div className="head-container">
          <h1 className="title">
            MY JOURNEY OF <br />
            <span className="brief">CCBP 4.0</span>
          </h1>
        </div>
        <div className="timeline-card">
          <Chrono
            items={timelineItemsList}
            mode="VERTICAL_ALTERNATING"
            theme={{
              secondary: 'white',
            }}
          >
            {timelineItemsList.map(Item => renderTimeLineList(Item))}
          </Chrono>
        </div>
      </div>
    </div>
  )
}
export default TimelineView
