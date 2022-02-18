import { type } from "os";
import { IconType } from "react-icons";

export interface Iservice{
    title: string
    about: string
    Icon: IconType
}

export interface ISkill{
    name: string
    level: string
    Icon: IconType
}

export interface IProject{
    id: number
    name: string
    description: string
    image_path: string
    deployed_url: string
    github_url: string
    category: string[]
    tags: string[]
}

export type Category = "React" | "next" | "android" | "python" | "HTML";