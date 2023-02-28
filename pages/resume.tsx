import { languages, tools } from "@/data";
import Bar from "@/components/Bar";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "@/animations";

const resume = () => {
  return (
    <motion.div
      className="px-6 py-2"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold ">Education</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">
              Computer Science Engineering
            </h5>
            <p className="font-semibold">Thang Long Univercity(2018-2023) </p>
            <p className="my-3">I am a student</p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold ">Experience</h5>
          <div>
            <h5 className="my-2 text-xl font-bold">Frontend Developer</h5>
            <p className="font-semibold">Thang Long Univercity(2018-2023)</p>
            <p className="my-3">I am currently work like intership</p>
          </div>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((language) => {
              return <Bar data={language} key={language.name} />;
            })}
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool) => {
              return <Bar data={tool} key={tool.name} />;
            })}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default resume;
