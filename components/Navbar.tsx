import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState, FunctionComponent } from 'react'

const NavItem: FunctionComponent<{
    activeItem:string
    setActiveItem:Function
    name:string
    route:string
 }> = ({activeItem , name , route, setActiveItem}) => {
    return activeItem !== name ? (
                <Link href={route}>
            <a href=""><span onClick={()=>setActiveItem(name)} className="hover:text-green">{name}</span></a>
        </Link>
            ) : null }

const Navbar = () => {

    const [activeItem, setActiveItem] = useState<string>('')
    const {pathname} = useRouter()
    useEffect(() => {
    if (pathname === '/') setActiveItem('About')
    if (pathname === '/projects') setActiveItem('Projects')
    if (pathname === '/resume') setActiveItem('Resume')
    }, [])
    
  return (
      <div className='flex justify-between px-5 py-3 my-3 '>

          <span className='text-xl font-bold border-b-4 text-green border-green md:text-2xl' >{activeItem}</span>
        <div className='space-x-5 text-lg border-b-4 '>
            <NavItem setActiveItem={setActiveItem} activeItem={activeItem} route="/"  name="About"/> 
            <NavItem setActiveItem={setActiveItem} activeItem={activeItem} route="/projects"  name="Projects"/> 
            <NavItem setActiveItem={setActiveItem} activeItem={activeItem} route="/resume"  name="Resume"/> 
            
        </div>
      </div>
  )
}

export default Navbar