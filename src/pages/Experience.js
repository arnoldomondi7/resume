import React from "react"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@mui/icons-material/School"
import WorkIcon from "@mui/icons-material/Work"

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          date='2017 - 2022'
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            The Technical University of Kenya,Nairobi.
          </h3>

          <h4 className='vertical-timeline-element-subtitle'>
            Bachelor's Degree
          </h4>

          <p> Civil Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2022 - 2022'
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Started Learning to Code From Udemy, Instructors: 1. Stephen Grider
            (React and Redux)2. Andrew Mead (Node.js) 3.Ryan Dhungel (MERN
            stack)
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>
            Learning From Home.
          </h4>
          <p>
            Learned and worked on the projects and successfully completed the
            courses.After the bootcamp, learned some other frontend libraries
            (i.e antdesign, material ui, bootstrap, tailwind)
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          date='2023 - present'
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className='vertical-timeline-element-title'>
            Full Stack Developer
          </h3>
          <h4 className='vertical-timeline-element-subtitle'>Nairobi, KE</h4>
          <p>
            Currently Doing Freelance Contracts With An Aim Of Landing A
            React/MERN-Stack Job.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience
