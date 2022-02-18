import React, { FunctionComponent, useState } from 'react'
import { AiFillGithub, AiFillProject } from 'react-icons/ai'
import { MdClose } from 'react-icons/md'
import { IProject } from '../type'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from '../animation'
const ProjectCard: FunctionComponent<{
  p: IProject
  showDetails: number | null
  setShowDetails: (id: null | number) => void
}> = ({
  p: {
    name,
    description,
    category,
    deployed_url,
    github_url,
    image_path,
    tags,
    id,
  },
  showDetails,
  setShowDetails,
}) => {
  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        className="cursor-pointer"
        onClick={() => setShowDetails(id)}
        width="300"
        height="150"
        layout="responsive"
      />
      <p className="my-2 text-center">{name}</p>

      {showDetails === id && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 gap-x-12 dark:bg-dark-100 dark:text-white md:grid-cols-2">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div variants={fadeInUp}>
              <Image
                src={image_path}
                alt={name}
                height="150"
                width="300"
                layout="responsive"
              />
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="flex justify-center my-4 space-x-3"
            >
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub />
                <span>GitHub</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject />
                <span>Project</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2
              variants={fadeInUp}
              className="mb-3 text-xl font-medium md:text-2xl"
            >
              {name}
            </motion.h2>
            <motion.h3 variants={fadeInUp} className="mb-3 font-medium">
              {description}
            </motion.h3>
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
            >
              {tags.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 my-1 bg-gray-200 rounded-sm dark:bg-dark-200"
                >
                  {t}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <button
            onClick={() => setShowDetails(null)}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200 "
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  )
}

export default ProjectCard
