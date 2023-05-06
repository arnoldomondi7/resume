import React from "react"
import { ProjectList } from "../helpers/ProjectList"
import ProjectItemComp from "../components/ProjectItem.comp"
import "../styles/Projects.css"

const Projects = () => {
  return (
    <div className='projects'>
      <h1> My Personal Projects</h1>
      <div className='projectList'>
        {ProjectList.map((project, index) => {
          return (
            <ProjectItemComp
              key={index}
              id={index}
              subject={project.subject}
              name={project.name}
              image={project.image}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Projects
