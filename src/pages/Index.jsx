import { Container, VStack, Heading, Text, Image, Box, HStack, Divider } from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={6} align="start" width="100%">
        <Box>
          <Image src="/images/profile.jpg" alt="Profile" borderRadius="full" boxSize="150px" mx="auto" />
          <Heading as="h1" size="xl" textAlign="center" mt={4}>John Doe</Heading>
          <Text fontSize="md" textAlign="center">Full Stack Developer & Blogger</Text>
        </Box>

        <Divider />

        <Box>
          <Heading as="h2" size="lg">About Me</Heading>
          <Text mt={4}>
            Hi, I'm John Doe, a passionate full stack developer with experience in building web applications
            using modern technologies like React, Node.js, and GraphQL. I love sharing my knowledge through
            my blog posts. Stay tuned for insightful articles and tutorials!
          </Text>
        </Box>

        <Divider />

        <Box>
          <Heading as="h2" size="lg">Recent Posts</Heading>
          <VStack align="start" spacing={4} mt={4}>
            <Box>
              <Heading as="h3" size="md">Understanding React Hooks</Heading>
              <Text fontSize="sm">Posted on January 1, 2023</Text>
              <Text mt={2}>
                React Hooks are functions that let you use state and other React features without writing a class.
                In this post, we explore the basics of hooks and how to use them in your React applications.
              </Text>
            </Box>
            <Box>
              <Heading as="h3" size="md">A Guide to Node.js Performance Optimization</Heading>
              <Text fontSize="sm">Posted on December 15, 2022</Text>
              <Text mt={2}>
                Node.js is a powerful platform for building fast and scalable network applications. This guide covers
                several techniques to optimize the performance of your Node.js applications.
              </Text>
            </Box>
          </VStack>
        </Box>

        <Divider />

        <Box width="100%" textAlign="center">
          <HStack spacing={4} justify="center">
            <FaTwitter size="24px" />
            <FaGithub size="24px" />
            <FaLinkedin size="24px" />
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;