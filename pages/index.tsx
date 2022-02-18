import { motion } from 'framer-motion'
import Head from 'next/head'
import { fadeInUp, routefade, stagger } from '../animation'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mohd Kaif Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        className="flex flex-col flex-grow px-6 pt-1"
        variants={routefade}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <h5 className="my-3 font-medium">
          I am a CSE student in SRMCEM. I have got 5 star in C++ on Hackerrank .
          I know various programming languages like Python , C , C++ and a
          little bit of JAVA .
        </h5>
        <div
          className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
          style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}
        >
          <h6 className="my-3 text-lg font-bold tracking-wide">My Skills</h6>
          <motion.div
            className="grid gap-6 lg:grid-cols-2 "
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            {services.map((service) => (
              <motion.div
                variants={fadeInUp}
                className="bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
