import React from "react"
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from "@mui/icons-material/Twitter"
import FacebookIcon from "@mui/icons-material/Facebook"
import { Link } from "react-router-dom"
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <Link
          to='https://www.instagram.com/arnoldomondi_/?hl=en'
          target='_blank'
        >
          <InstagramIcon />
        </Link>
        <Link to='https://twitter.com/ano_omondi' target='_blank'>
          <TwitterIcon />
        </Link>

        <Link to='https://www.facebook.com/arnold.akello.7/' target='_blank'>
          <FacebookIcon />
        </Link>
      </div>
      <p>All Rights Reserved &copy; 2023 Arnold.O</p>
    </div>
  )
}

export default Footer
