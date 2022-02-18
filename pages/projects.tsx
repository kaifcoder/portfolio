import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { fadeInUp, routefade, stagger } from '../animation'
import ProjectCard from '../components/ProjectCard'
import ProjectNavbar from '../components/ProjectNavbar'
import { projects as ProjectData } from '../data'
import { Category } from '../type'
const Project = () => {
  const [projects, setProjects] = useState(ProjectData)
  const [active, setActive] = useState('all')
  const [showDetails, setShowDetails] = useState<number | null>(null)
  const handlerFilterCategory = (category: Category | 'all') => {
    if (category === 'all') {
      setProjects(ProjectData)
      setActive(category)
      return
    }
    const newArray = ProjectData.filter((p) => p.category.includes(category))
    setProjects(newArray)
    setActive(category)
  }
  return (
    <motion.div
      className="px-5 py-2 overflow-y-scroll"
      style={{ height: '65vh' }}
      variants={routefade}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <nav>
        <ProjectNavbar
          handlerFilterCategory={handlerFilterCategory}
          active={active}
        />
      </nav>
      <motion.div
        variants={stagger}
        initial="initial"
        animate="animate"
        className="relative grid grid-cols-12 gap-4 my-3"
      >
        {projects.map((p) => (
          <motion.div
            variants={fadeInUp}
            className="col-span-12 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 sm:col-span-6 lg:col-span-4"
          >
            <ProjectCard
              p={p}
              key={p.name}
              showDetails={showDetails}
              setShowDetails={setShowDetails}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Project
