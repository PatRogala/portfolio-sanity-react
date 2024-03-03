import React from 'react'
import { FaLinkedinIn, FaMedium, FaGithub, FaWordpressSimple } from "react-icons/fa6";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <FaLinkedinIn />
      </div>
      <div>
        <FaMedium />
      </div>
      <div>
        <FaGithub />
      </div>
      <div>
        <FaWordpressSimple />
      </div>
    </div>
  )
}

export default SocialMedia
