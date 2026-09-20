import {
  Badge, Box, Button, Code, Flex, Image, Link, Text,
} from "@chakra-ui/react";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
<<<<<<< HEAD
function HelperProject({ image, title, techStack, desc, github, deploy }) {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      once: false, // Whether animation should happen only once
      easing: 'ease-in-out',
    });

    // Refresh AOS after components are mounted
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);



=======
function HelperProject({ image, title, techStack, desc, github, deploy,githubBtn }) {
    useEffect(() => {
      // Initialize AOS
      AOS.init({
        duration: 800,
        once: false, // Whether animation should happen only once
        easing: 'ease-in-out',
      });
  
      // Refresh AOS after components are mounted
      const timer = setTimeout(() => {
        AOS.refresh();
      }, 1000);
  
      return () => clearTimeout(timer);
    }, []);

    console.log(title,title.includes("Maritime"))
>>>>>>> 4f259bf977083ec94ca1a00068351cd133ef7432
  return (
    <Box
      className="project-card"
      maxW="100%"
      minH="500px"
      h="100%"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      mt="5rem"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      // bg="white"
      boxShadow="md"
      data-aos="fade-up"
    >
      <Image
        src={image}
        alt={title}
        objectFit="cover"
        w="100%"
        h="200px"
        borderRadius="md"
      />

      <Box mt={4} p={4}>
        <Text fontWeight="bold" fontSize="xl" mb={2} textAlign="left">
          {title}
        </Text>
        <Text fontSize="sm" textAlign="left" noOfLines={4}>
          {desc}
        </Text>

        <Flex wrap="wrap" mt={4}>
          {techStack.map((tech, i) => (
            <Badge
              key={i}
              mr={2}
              mb={2}
              px={2}
              py={1}
              borderRadius="md"
              colorScheme="teal"
              fontSize="xs"
            >
              {tech}
            </Badge>
          ))}
        </Flex>
      </Box>

      <Flex justifyContent="space-between" p={4}>
        <Link href={github} isExternal>
<<<<<<< HEAD
          <Button size="sm" isDisabled={github === ""} colorScheme="teal" leftIcon={<BsGithub />}>
=======
          {githubBtn && <Button size="sm" colorScheme="teal" leftIcon={<BsGithub />}>
>>>>>>> 4f259bf977083ec94ca1a00068351cd133ef7432
            GitHub
          </Button>}
        </Link>
        <Link href={deploy} isExternal>
<<<<<<< HEAD
          <Button size="sm" isDisabled={deploy === ""} colorScheme="teal" variant="outline" leftIcon={<BiLinkExternal />}>
=======
          <Button cursor="pointer" isDisabled={title.includes("Maritime")} size="sm" colorScheme="teal" variant="outline" leftIcon={<BiLinkExternal />}>
>>>>>>> 4f259bf977083ec94ca1a00068351cd133ef7432
            Live
          </Button>
        </Link>
      </Flex>
    </Box>
  );
}

export default HelperProject;
