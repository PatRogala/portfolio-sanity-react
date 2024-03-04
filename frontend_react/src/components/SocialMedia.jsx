import React from 'react'
import { FaLinkedinIn, FaMedium, FaGithub, FaWordpressSimple } from "react-icons/fa6";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.linkedin.com/in/patrogala/" target="_blank" rel="noreferrer">
          <FaLinkedinIn />
        </a>
      </div>
      <div>
        <a href="https://medium.com/@patrykrogedu" target="_blank" rel="noreferrer">
          <FaMedium />
        </a>
      </div>
      <div>
        <a href="https://github.com/PatRogala" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
      </div>
      <div>
        <a href="https://blog.patrykrogala.dev/" target="_blank" rel="noreferrer">
          <FaWordpressSimple />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
