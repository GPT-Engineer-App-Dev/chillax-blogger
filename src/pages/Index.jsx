import { Container, VStack, Heading, Text, Box, Image, HStack, Link, IconButton } from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch">
        <Box textAlign="center">
          <Image
            borderRadius="full"
            boxSize="150px"
            src="/images/profile.jpg"
            alt="Profile Image"
            mx="auto"
          />
          <Heading as="h1" size="2xl" mt={4}>
            John Doe
          </Heading>
          <Text fontSize="lg" color="gray.500">
            Full Stack Developer & Tech Enthusiast
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>
            About Me
          </Heading>
          <Text fontSize="md" color="gray.700">
            Welcome to my personal blog! Here, I share my thoughts on technology, programming, and
            everything in between. I love exploring new tools and frameworks, and I'm passionate
            about sharing knowledge with the community.
          </Text>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Latest Posts
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading fontSize="xl">Understanding React Hooks</Heading>
              <Text mt={2} color="gray.600">
                Dive deep into the world of React Hooks and learn how they can simplify your React
                development process.
              </Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading fontSize="xl">A Guide to Modern CSS</Heading>
              <Text mt={2} color="gray.600">
                Discover the latest features in CSS and how you can use them to build responsive and
                modern web applications.
              </Text>
            </Box>
          </VStack>
        </Box>

        <Box textAlign="center">
          <HStack spacing={4} justify="center">
            <Link href="https://twitter.com" isExternal>
              <IconButton
                aria-label="Twitter"
                icon={<FaTwitter />}
                size="lg"
                variant="ghost"
                colorScheme="teal"
              />
            </Link>
            <Link href="https://github.com" isExternal>
              <IconButton
                aria-label="GitHub"
                icon={<FaGithub />}
                size="lg"
                variant="ghost"
                colorScheme="teal"
              />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <IconButton
                aria-label="LinkedIn"
                icon={<FaLinkedin />}
                size="lg"
                variant="ghost"
                colorScheme="teal"
              />
            </Link>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;