import React from 'react'
import { motion } from 'framer-motion'

import { images } from '../../constants'
import './About.scss'

const abouts = [
  { title: 'Web Development', description: 'I am a good web developer.', imgUrl: images.about01 },
  { title: 'Web Design', description: 'I am a good web designer.', imgUrl: images.about02 },
  { title: 'UI/UX', description: 'I am good at UI/UX.', imgUrl: images.about03 },
  { title: 'Web Animations', description: 'I am good at web animations.', imgUrl: images.about04 },
]

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I Know That <span>Good Design</span><br />means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text about-title">{about.title}</h2>
            <h2 className="p-text about-description">{about.description}</h2>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About
