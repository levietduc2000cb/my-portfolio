import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";
import { IService, Skill, IProject } from "@/types";

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about: "handle database, server, api using <b>Express </b> & <b>NodeJS</b>",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about:
      "I can develop create  RESTful API using <b>NodeJS</b>  & <b>Express</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX designer",
    about: "Stunning user interface designer using <b>Figma</b>",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    about:
      "Know how to use <b>Github</b> & <b>Git</b> to store code as well as <b>search skills</b>",
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "JavaScript",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "ReactJS",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "NodeJS",
    level: "50",
  },
  {
    Icon: BsCircleFill,
    name: "Tailwind",
    level: "50",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "10",
  },
];

export const projectslist: IProject[] = [
  {
    id: 1,
    name: "Shoppe F8",
    description: "This web show shoppe clone",
    image_path: "/images/Shop-F8.png",
    deployed_url: "",
    github_url: "https://github.com/levietduc2000cb/ShopF8.github.io",
    category: ["html/css"],
    key_techs: ["Html", "Css"],
  },
  {
    id: 2,
    name: "The Band",
    image_path: "/images/The-ban.png",
    deployed_url: "",
    github_url: "https://github.com/levietduc2000cb/TheBand",
    category: ["html/css"],
    description: "This web show the band clone",
    key_techs: ["Html", "Css"],
  },

  {
    id: 3,
    name: "Travel",
    image_path: "/images/Travel.png",
    deployed_url: "",
    github_url: "https://github.com/levietduc2000cb/Travelix",
    category: ["html/css"],
    description: "This web show the travelix clone",
    key_techs: ["Html", "Css"],
  },

  {
    id: 4,
    name: "Smash Bricks Game",
    image_path: "/images/Smash-bricks-game.png",
    deployed_url: "",
    github_url: "https://github.com/levietduc2000cb/game_dap_gach",
    category: ["html/css"],
    description: "Brick smashing game underfunded version",
    key_techs: ["Html", "Css", "Javascript"],
  },

  {
    id: 5,
    name: "Nettruyen",
    image_path: "/images/Nettruyen.png",
    deployed_url: "",
    github_url: "https://github.com/levietduc2000cb/nettruyen-copy",
    category: ["html/css", "react"],
    description:
      "The first project uses react and html/css to duplicate the home page of nettruyen",
    key_techs: ["React"],
  },

  {
    id: 6,
    name: "Sell Books",
    image_path: "/images/Sell-books.png",
    deployed_url: "",
    github_url: "https://github.com/levietduc2000cb/WebBooks",
    category: ["react"],
    description:
      "First project using NodeJS and Api from friends combined with React and Tailwind",
    key_techs: ["Express", "React", "Tailwind"],
  },
  {
    id: 7,
    name: "Sell Fruit",
    image_path: "/images/Sell-fruit.png",
    deployed_url: "",
    github_url: "https://github.com/levietduc2000cb/SellFruit",
    category: ["express", "react", "mongo", "node"],
    description: "The first project to code itself using NodeJS and ReactJS",
    key_techs: ["React", "MongoDB", "Node", "Tailwind"],
  },
];
