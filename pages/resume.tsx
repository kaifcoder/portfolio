import React from 'react'
import Bar from '../components/Bar'
import { languages, tools } from '../data'
import { motion } from 'framer-motion'
import { fadeInUp, routefade } from '../animation'

const resume = () => {
  return (
    <motion.div
      className="px-6 py-2"
      variants={routefade}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Computer Science Engineering
            </h5>
            <p className="font-semibold">
              Shri Ramswaroop Memorial College of Engg. and Mnmgt.
            </p>
            <p className="my-3">
              I am Currently persuing Btech. in Computer Science Engineering
              (2020-2024){' '}
            </p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Experiance</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Technical co-head</h5>
            <p className="font-semibold">GeeksforGeeks_SRMCEM</p>
            <p className="my-3">
              Developed a next.js landing page for this organization
            </p>
          </div>
        </motion.div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((language) => (
              <Bar data={language} key={language.name} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default resume
