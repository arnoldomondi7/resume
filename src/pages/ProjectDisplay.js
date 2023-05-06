import React from "react"
import { Link, useParams } from "react-router-dom"
import { ProjectList } from "../helpers/ProjectList"
import "../styles/ProjectDisplay.css"
import { GitHub } from "@mui/icons-material"

function ProjectDisplay() {
  const { id } = useParams()
  const project = ProjectList[id]
  return (
    <div className='project'>
      <h1> {project.name}</h1>
      <img
        src={project.image}
        alt='project-name'
        style={{ objectFit: "contain", width: "40em", height: "40em" }}
      />
      <p>
        <b>Skills:</b> {project.skills}
      </p>

      <Link to='https://github.com/arnoldomondi7' target='_blank'>
        <GitHub style={{ fontSize: "2em", marginBottom: "15px" }} />
      </Link>
    </div>
  )
}

export default ProjectDisplay
