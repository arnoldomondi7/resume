import React from "react"
import { useNavigate } from "react-router-dom"

function ProjectItemComp({ image, name, id, subject }) {
  const navigate = useNavigate()
  return (
    <div
      className='projectItem'
      onClick={() => {
        navigate("/project/" + id)
      }}
    >
      <h1> {name} </h1>
      <div style={{ backgroundImage: `url(${image})` }} className='bgImage' />
      <h2>{subject}</h2>
    </div>
  )
}

export default ProjectItemComp
