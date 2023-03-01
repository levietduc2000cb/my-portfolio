import { services } from "@/data";
import {
  GetServerSidePropsContext,
  GetStaticPathsContext,
  GetStaticPropsContext,
} from "next";
import { IService } from "@/types";
import ServiceCard from "@/components/ServiceCard";
import { motion } from "framer-motion";
import { fadeInUp, stagger, routeAnimation } from "@/animations";
import Head from "next/head";

export interface propsIndex {
  services: IService[];
}

const index = (props: propsIndex) => {
  return (
    <motion.div
      className="flex flex-col flex-grow px-6 pt-1"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
    >
      <Head>
        <title>Web Developer | Portfolio</title>
      </Head>
      <h6 className="my-3 text-base font-medium">
        I am studying information technology at Thang Long University. I have
        little experience in web programming. I am trying to be a web developer
        in the future
      </h6>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100"
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">What I Offer</h6>
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {services.map((service, index) => {
            return (
              <motion.div
                variants={fadeInUp}
                initial="initial"
                animate="animate"
                key={index}
                className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1"
              >
                <ServiceCard service={service} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default index;

// export const getServerSideProps = async (context: GetServerSidePropsContext) => {
//   // console.log(services);

//   const res = await fetch("api/services");
//   const data = await res.json();

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   // console.log(services);

//   const res = await fetch(`${process.env.VERCEL_URL}api/services`);
//   const data = await res.json();

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };
