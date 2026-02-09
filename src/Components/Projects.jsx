import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import HelperProject from "./helper";
import img1 from "../Image/Screenshot 2026-02-09 213144.png";
import img2 from "../Image/Screenshot 2026-02-09 213206.png";
import img3 from "../Image/img3.png";
import img4 from "../Image/img4.png";
console.log(img1);

const Projects = () => {
  return (
    <Box id="projects" textAlign={"center"} mt="6rem"  >
      <Heading>Projects</Heading>
      <SimpleGrid 
        justifyContent="center"
        textAlign={"center"}
        m={"auto"}
        columns={{ base: "1", md: "2", xl: "2" }}
        spacing={{ base: "10px", md: "40px" }}
        w={{ base: "85%", md: "81%" }}
        // marginTop="70px"
        // marginBottom={"50px"}
        minH="200px" // Set a minimum height for each child
      >
        {data.map((el, ind) => {
          return <HelperProject key={Date.now() + ind} {...el} />;
        })}
      </SimpleGrid>
    </Box>
  );
};

let data = [
  {
    image:`${img1}`,
    githubBtn:false,
    title: "SPADE (E-Commerce Platform for Satellite Images)",
    desc: "A SaaS-based e-commerce platform for satellite imagery that enables users to search, visualize, and order multi-source satellite data. The platform supports archival imagery from Optical, SAR, and Thermal satellites, allowing users to explore and analyze data directly on an interactive map. Users can place orders for existing images or schedule tasking requests for future image acquisitions. It also includes a comprehensive dashboard for managing orders, tasking requests, and user activity, delivering a seamless end-to-end satellite data procurement experience.",
    techStack: ["React","TypeScript","Redux","Chakra-UI","Node.js","Express.js","MongoDB","PostgreSQL"],
    github: "https://github.com/Harshitakatara34/auspicious-sea-8816",
    deploy: "https://spade.suhora.com/",
  },
  {
    image:`${img2}`,
    githubBtn:false,
    desc: "A Maritime Domain Awareness (MDA) platform designed to monitor, analyze, and visualize maritime activity in real time. The application integrates vessel tracking data to display ship movements on an interactive map, enabling users to monitor routes, identify patterns, and detect anomalies. It provides advanced filtering, historical track analysis, and geo-fencing capabilities to support surveillance and operational decision-making. A centralized dashboard offers actionable insights, alerts, and analytics, helping stakeholders enhance maritime security, safety, and situational awareness.",
    title: "Maritime Domain Awareness Application",
    techStack: ["React","TypeScript","Redux","Chakra-UI","Node.js","Express.js","MongoDB","PostgreSQL"],
    github: "https://github.com/Harshitakatara34/pointless-belief-3937",
    deploy: "https://mirkamda.suhora.com/",
  },
  // {
  //   image:`${img3}`,
  //   githubBtn:true,
  //   desc: "Explore our Expedia-inspired e-commerce platform, where you can effortlessly book accommodations at a wide range of hotels and access enticing vacation packages. Plan your dream getaway with ease and embark on unforgettable journeys, all from the comfort of your screen.",
  //   title: "Bagpacker (Clone-Of-Expedia)",
  //   techStack: ["HTML", "CSS", "JavaScript"],
  //   github: "https://github.com/Harshitakatara34/ragged-tank-492.git",
  //   deploy: "https://golden-sorbet-745819.netlify.app/",
  // },
  // {
  //   image:`${img4}`,
  //   githubBtn:true,
  //   title: "Chicken (Clone-Of-Licious)",
  //   desc: "Chicken, your premier online marketplace for sourcing top-quality poultry and fish products at the most competitive prices. Our diverse range of offerings ensures that you can place orders conveniently and enjoy doorstep delivery of the freshest and finest options for your culinary delights.",
  //   techStack: ["HTML", "CSS", "JavaScript"],
  //   github: "https://github.com/Harshitakatara34/defective-impulse-1904.git",
  //   deploy: "https://superb-haupia-a7c7f2.netlify.app/",
  // },

  ];

export default Projects;
