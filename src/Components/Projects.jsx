import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import HelperProject from "./helper";
<<<<<<< HEAD
import spadeImage from "../Image/spade-image.PNG";
import taskMangement from "../Image/task-management-2.PNG";
import dgStudio from "../Image/dg-studio.PNG";
import pixelApp from "../Image/pixel-app.PNG";
=======
import img1 from "../Image/Screenshot 2026-02-09 213144.png";
import img2 from "../Image/Screenshot 2026-02-09 213206.png";
import img3 from "../Image/img3.png";
import img4 from "../Image/Screenshot 2026-09-20 204013.png";
>>>>>>> 4f259bf977083ec94ca1a00068351cd133ef7432

const Projects = () => {
  return (
    <Box id="projects" textAlign={"center"} mt="6rem">
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
<<<<<<< HEAD
  {
    image: `${spadeImage}`,
    title: "Spade",
    desc: "Spade is an advanced satellite imagery discovery and ordering platform that allows users to access both archived and tasking-based satellite data. Through this platform, users can request high-resolution imagery from multiple trusted providers including ICEYE, BlackSky, Umbra, and Satellogic. Spade simplifies the satellite data acquisition process by offering a seamless interface for selecting areas of interest and viewing upcoming satellite opportunities—indicating when a satellite will be available over a given latitude and longitude. This powerful tool is designed for users who need timely and precise geospatial data for various applications, from environmental monitoring to defense and infrastructure planning.",
    techStack: ["Reactjs", "JavaScript", "Redux", "Chakra-UI"],
    github: "",
    deploy: "https://spade.suhora.com/",
  },
  {
    image: `${dgStudio}`,
    desc: " Built a full-featured web application for car sale, purchase, and denting-painting services, enabling users to interact with brand-specific pricing and service options.Designed and implemented an admin portal to manage car listings, including uploading photos and updating records, which dynamically reflect on the main platform frontend Integrated a contact section allowing customers to directly reach out with queries, enhancing user engagement and support accessibility",
    title: "DG car studio",
    techStack: ["Reactjs", "JavaScript", "Redux", "Chakra-UI"],
    github: "",
    deploy: "https://dgcarstudio.com/",
  },
  {
    image: `${taskMangement}`,
    desc: "The Task Management app is a productivity tool designed to help users efficiently organize and track their daily activities. Users can create tasks categorized by priority levels—high, medium, and low—and update their status as either pending or completed. The app also includes powerful editing capabilities, allowing tasks to be updated at any time. A dedicated dashboard provides a visual overview of task progress, showing real-time counts of completed and pending tasks. Additionally, users can sort tasks based on priority—either from high to low or low to high—making it easier to focus on what matters most",
    title: "Task Management",
    techStack: ["Reactjs", "JavaScript", "Redux", "Chakra-UI"],
    github: "https://github.com/amanshrivastava1000/Task-management-app",
    deploy: "https://the-task-management.netlify.app/",
=======
  // {
  //   image:`${img1}`,
  //   githubBtn:false,
  //   title: "SPADE (E-Commerce Platform for Satellite Images)",
  //   desc: "A SaaS-based e-commerce platform for satellite imagery that enables users to search, visualize, and order multi-source satellite data. The platform supports archival imagery from Optical, SAR, and Thermal satellites, allowing users to explore and analyze data directly on an interactive map. Users can place orders for existing images or schedule tasking requests for future image acquisitions. It also includes a comprehensive dashboard for managing orders, tasking requests, and user activity, delivering a seamless end-to-end satellite data procurement experience.",
  //   techStack: ["React","TypeScript","Redux","Chakra-UI","Node.js","Express.js","MongoDB","PostgreSQL"],
  //   github: "https://github.com/Harshitakatara34/auspicious-sea-8816",
  //   deploy: "https://spade.suhora.com/",
  // },
  // {
  //   image:`${img2}`,
  //   githubBtn:false,
  //   desc: "A Maritime Domain Awareness (MDA) platform designed to monitor, analyze, and visualize maritime activity in real time. The application integrates vessel tracking data to display ship movements on an interactive map, enabling users to monitor routes, identify patterns, and detect anomalies. It provides advanced filtering, historical track analysis, and geo-fencing capabilities to support surveillance and operational decision-making. A centralized dashboard offers actionable insights, alerts, and analytics, helping stakeholders enhance maritime security, safety, and situational awareness.",
  //   title: "Maritime Domain Awareness Application",
  //   techStack: ["React","TypeScript","Redux","Chakra-UI","Node.js","Express.js","PostgreSQL"],
  //   github: "https://github.com/Harshitakatara34/pointless-belief-3937",
  //   // deploy: "https://mirkamda.suhora.com/",
  // },
  {
    image:`${img3}`,
    githubBtn:false,
    desc: "A SaaS-based platform for car sale, purchase, and denting-painting services, enabling users to interact with brand-specific pricing and service options.Designed and implemented an admin portal to manage car listings, including uploading photos and updating records, which dynamically reflect on the main platform.",
    title: "DG Car Studio",
    techStack: ["React","TypeScript","Redux","Chakra-UI","Node.js","Express.js","MongoDB"],
    deploy: "https://dgcarstudio.com/",
  },
  {
    image:`${img4}`,
    githubBtn:false,
    title: "Docuchat (AI-Powered Document Chatbot)",
    desc: "An intelligent document assistant built with FastAPI, React (Vite), and Google Gemini API. It implements a Retrieval-Augmented Generation (RAG) pipeline with ChromaDB vector storage and Server-Sent Events (SSE) to deliver real-time, context-grounded streaming answers from uploaded PDF documents.",
    techStack: ["React","TypeScript","FastAPI","Python","ChromaDB","Docker"],
    // github: "https://github.com/Harshitakatara34/defective-impulse-1904.git",
    deploy: "https://docuchat-rag-project.vercel.app/",
>>>>>>> 4f259bf977083ec94ca1a00068351cd133ef7432
  },

  {
    image: `${pixelApp}`,
    title: "Pixel Wallpaper (Mobile App)",
    desc: "Developed a React Native mobile app that enables users to search and download high-quality wallpapers directly to their device gallery.Integrated the Pixabay API to fetch dynamic wallpaper content based on user search queries.Implemented a smooth, responsive UI optimized for mobile experience with efficient image handling and download functionality.",
    techStack: ["React Native", "Expo Cli", "JavaScript"],
    github: "https://github.com/amanshrivastava1000/wallpaper-app-react-native",
    deploy: "",
  },
];

export default Projects;
