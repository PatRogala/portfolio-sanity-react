import React, { useState, useEffect} from 'react'
import { motion } from 'framer-motion'

import './About.scss'
import { urlFor, client } from '../../client'

const About = () => {
  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then((data) => setAbouts(data))
  }, [])


  return (
    <>
      <h2 className="head-text">
        I Understand That <span> Effective Development</span><br /> Ensures <span>Successful Projects</span>
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
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text about-title">{about.title}</h2>
            <h2 className="p-text about-description">{about.description}</h2>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About
