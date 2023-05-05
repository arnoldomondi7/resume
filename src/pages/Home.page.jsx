import React from "react"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from "@mui/icons-material/Email"
import GitHubIcon from "@mui/icons-material/GitHub"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import "../styles/Home.css"

function HomePage() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hi, My Name is Arnold</h2>
        <div className='prompt'>
          <p>
            A self-taught web developer with a passion for learning and
            creating.
          </p>
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
          <WhatsAppIcon />
        </div>
      </div>
      <div className='skills'>
        <h1> Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2> Front-End Development:</h2>
            <span>
              ReactJS, Redux-Toolkit, HTML, CSS, NPM,BootStrap, MaterialUI,
              Yarn, TailwindCSS
            </span>
          </li>
          <li className='item'>
            <h2>Back-End Development:</h2>
            <span>NodeJS,ExpressJS, MongoDB, DigitalOcean, AWS S3</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>JavaScript, React, Node</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default HomePage
