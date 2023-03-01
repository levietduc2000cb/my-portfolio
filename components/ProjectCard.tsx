import { IProject } from "@/types";
import Image from "next/image";
import { useState } from "react";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "@/animations";

export interface ProjectProps {
  project: IProject;
  showDetail: number | null;
  setShowDetail: (id: null | number) => void;
}

const ProjectCard = ({ project, showDetail, setShowDetail }: ProjectProps) => {
  const {
    id,
    category,
    deployed_url,
    description,
    github_url,
    image_path,
    key_techs,
    name,
  } = project;

  return (
    <div>
      <div className="h-[160px] cursor-pointer relative">
        <Image
          src={image_path}
          alt={name}
          onClick={() => setShowDetail(id)}
          fill
          className="object-cover"
        />
      </div>
      <p className="my-2 text-center">{name}</p>
      {showDetail === id && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:p-10 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div
              variants={fadeInUp}
              className="border-4 border-gray-100"
            >
              <Image src={image_path} alt={name} width={300} height={150} />
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="flex justify-center my-4 space-x-3"
            >
              <a
                href={github_url}
                target="_blank"
                rel="noopener"
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub />
                <span>Github</span>
              </a>
              {deployed_url && (
                <a
                  href={deployed_url}
                  className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                >
                  <AiFillProject />
                  <span>Project</span>
                </a>
              )}
            </motion.div>
          </motion.div>
          <motion.div variants={fadeInUp} initial="initial" animate="animate">
            <motion.h2
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="mb-3 text-xl font-medium md:text-2xl"
            >
              {name}
            </motion.h2>
            <motion.h3
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="mb-3 font-medium"
            >
              {description}
            </motion.h3>
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wide"
            >
              {key_techs.map((tech) => {
                return (
                  <span
                    key={tech}
                    className="px-2 py-1 my-1 bg-gray-200 rounded dark:bg-dark-200"
                  >
                    {tech}
                  </span>
                );
              })}
            </motion.div>
          </motion.div>
          <button
            onClick={() => setShowDetail(null)}
            className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
          >
            <MdClose size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
