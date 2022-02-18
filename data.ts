import {RiComputerLine} from "react-icons/ri"
import { IProject, Iservice, ISkill } from "./type"
import {FaPython, FaServer} from "react-icons/fa"
import {MdDeveloperMode} from "react-icons/md"
import { AiFillAndroid, AiOutlineApi } from "react-icons/ai"
import {BsCircleFill} from 'react-icons/bs'

export const services:Iservice[] = [
    {
        title : "frontend developer",
        about : "I am frontend developer with 1 year of experiance",
        Icon : RiComputerLine,
    },
    {
        title : "Backend developer",
        about : "I am Backend developer and handle database with <b>firebase</b> and <b>sanity.io</b>",
        Icon : FaServer,
    },
    {
        title : "Competative Coder",
        about : "I am frontend developer with 1 year of experiance",
        Icon : MdDeveloperMode,
    },
    {
        title : "API developer",
        about : "I am frontend developer with 1 year of experiance",
        Icon : AiOutlineApi,
    },
    {
        title : "Android developer",
        about : "I am frontend developer with 1 year of experiance",
        Icon : AiFillAndroid,
    },
    {
        title : "Python developer",
        about : "I am frontend developer with 1 year of experiance",
        Icon : FaPython,
    },
]

export const languages:ISkill[] = [
    {
        name: "Python",
        level: '80%',
        Icon: BsCircleFill,
    },
    {
        name: "C++",
        level: '90%',
        Icon: BsCircleFill,
    },
    {
        name: "C",
        level: '86%',
        Icon: BsCircleFill,
    },
    {
        name: "Javascript",
        level: '60%',
        Icon: BsCircleFill,
    },
    {
        name: "Next.js",
        level: '70%',
        Icon: BsCircleFill,
    },
    {
        name: "React",
        level: '70%',
        Icon: BsCircleFill,
    },
]

export const tools:ISkill[] = [
    {
        name: "VScode",
        level: '80%',
        Icon: BsCircleFill,
    },
    {
        name: "Premier Pro",
        level: '70%',
        Icon: BsCircleFill,
    },
    {
        name: "Pycharm",
        level: '60%',
        Icon: BsCircleFill,
    },
    {
        name: "Ardiuno",
        level: '70%',
        Icon: BsCircleFill,
    },
    {
        name: "Proteus",
        level: '40%',
        Icon: BsCircleFill,
    },
]

export const projects:IProject[] = [
    {
        id: 1,
        name: "instagram clone",
        description: "this is instagram clone made with the help of next.js",
        image_path: "/images/insta.jpg",
        deployed_url: "https://insta2-eauoi4m8q-kaifcoder.vercel.app/",
        github_url: "https://github.com/kaifcoder/insta2",
        category: ["next"],
        tags: ["next.js","tailwindcss","firebase"]
    },
    {
        id: 2,
        name: "share me social media",
        description: "This is a photo sharing site made with react",
        image_path: "/images/shareme.jpg",
        deployed_url: "https://sharemedrk.netlify.app/",
        github_url: "https://github.com/kaifcoder/insta2",
        category: ["react"],
        tags: ["react","tailwindcss","sanity"]
    },
]