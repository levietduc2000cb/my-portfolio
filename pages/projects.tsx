import { useState } from "react";
import { projectslist } from "@/data";
import ProjectsNavBar from "@/components/ProjectsNavBar";
import ProjectCard from "@/components/ProjectCard";
import { Category, IProject } from "@/types";
import { motion } from "framer-motion";
import { fadeInUp, stagger, routeAnimation } from "@/animations";
import Head from "next/head";

const Projects = () => {
  const [projectsChoose, setProjectsChoose] =
    useState<IProject[]>(projectslist);
  const [active, setActive] = useState<Category | "all">("all");
  const [showDetail, setShowDetail] = useState<number | null>(null);

  const handlerFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjectsChoose(projectslist);
      setActive(category);
      return;
    }
    const newArr = projectslist.filter((project) =>
      project.category.includes(category)
    );
    setProjectsChoose(newArr);
    setActive(category);
  };

  return (
    <motion.div
      className="px-5 py-2 overflow-y-scroll"
      style={{ height: "65vh" }}
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Head>
        <title>Web Developer | Projects</title>
      </Head>
      <ProjectsNavBar
        handlerFilterCategory={handlerFilterCategory}
        active={active}
      />
      <motion.div
        className="relative grid grid-cols-12 gap-4 my-3"
        variants={stagger}
        initial="initial"
        animate="animate"
      >
        {projectsChoose.map((project) => {
          return (
            <motion.div
              key={project.name}
              className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
              variants={fadeInUp}
              initial="initial"
              animate="animate"
            >
              <ProjectCard
                project={project}
                showDetail={showDetail}
                setShowDetail={setShowDetail}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
