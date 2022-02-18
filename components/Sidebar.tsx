import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'
import { useTheme } from 'next-themes'
import Image from 'next/image'

const Sidebar = () => {
  const { theme, setTheme } = useTheme()

  const cht = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      <Image
        src="https://media-exp1.licdn.com/dms/image/C5603AQHMjW-Y5TlR5g/profile-displayphoto-shrink_200_200/0/1626253081453?e=1650499200&v=beta&t=ackCUh771RLxFdYRg1GPgn67nL5bDd3vaa1e1yJRK00"
        alt="user avtar"
        className="mx-auto rounded-full"
        height="128px"
        width="128px"
        quality="100"
      />
      <h3 className="my-3 text-3xl font-medium tracking-wider font-electrolize">
        <span className="text-green">Mohd </span>Kaif
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        Full stack developer
      </p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 "
        href="/images/Resume.pdf"
        download="resume"
      >
        <GiTie className="w-6 h-6" />
        Download Resume
      </a>

      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a href="https://www.github.com/kaifcoder">
          <AiFillGithub className="w-10 h-10 cursor-pointer" />
        </a>
        <a href="https://www.instagram.com">
          <AiFillInstagram className="w-10 h-10 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/mohdkaif00/">
          <AiFillLinkedin className="w-10 h-10 cursor-pointer" />
        </a>
      </div>

      <div
        className="py-4 my-4 bg-gray-200 dark:bg-dark-200"
        style={{ marginLeft: '-1rem', marginRight: '-1rem' }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation className="w-6 h-6" />
          <span>Lucknow, India</span>
        </div>
        <p className="my-2">kaifmohd2014@gmail.com</p>
        <p className="my-2">9336834706</p>
      </div>
      <button
        className="w-8/12 px-3 py-2 my-2 text-white rounded-full onfocus:outline-none bg-gradient-to-r from-green to-blue-400"
        onClick={() => window.open('mailto:kaifmohd2014@gmail.com')}
      >
        Email Me
      </button>
      <button
        className="w-8/12 px-3 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 "
        onClick={cht}
      >
        toggle theme
      </button>
    </>
  )
}

export default Sidebar
