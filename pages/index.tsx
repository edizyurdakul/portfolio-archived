import Head from "next/head";
import NextLink from "next/link";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { postFilePaths, POSTS_PATH } from "../utils/mdxUtils";
import {
  Box,
  VStack,
  HStack,
  Grid,
  Link,
  IconButton,
  Tooltip,
  Image,
  Button,
  Heading,
  Text,
  List,
  ListItem,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";

export default function HomePage({ posts }) {
  const OpenIconLight = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        width="24"
        fill="#FFF"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
      </svg>
    );
  };

  const OpenIconDark = () => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
      </svg>
    );
  };

  const GithubIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        width="24"
        viewBox="0 0 496 512"
      >
        <path
          fill={useColorModeValue("gray.600", "white")}
          d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
        />
      </svg>
    );
  };

  return (
    <>
      <Head>
        <title>Ediz Yurdakul &nbsp;–&nbsp; Frontend Web Developer</title>
        <meta
          name="description"
          content="My personal portfolio website, built with NextJS, Chakra-UI, Typescript, MDX"
        />
      </Head>

      <Box
        id="content"
        as="section"
        display="flex"
        flexDirection={{ base: "column-reverse", sm: "row", md: "row" }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          pr={{ base: "1", sm: "6", md: "6" }}
        >
          <Heading mb={5} as="h1">
            Ediz Yurdakul
          </Heading>
          <Box
            fontWeight="normal"
            as="span"
            fontSize="md"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            I’m a front-end developer specializing in building (and occasionally
            designing) outstanding digital products.
          </Box>

          <NextLink href="/resume.pdf">
            <Button isDisabled mt={5} w="fit-content" size="md">
              Resume
            </Button>
          </NextLink>
        </Box>
        <Image
          mb={{ base: "8", md: "0" }}
          borderRadius="full"
          boxSize="150px"
          src="https://avatars.githubusercontent.com/u/53665610?v=4"
          alt="Ediz Yurdakul"
        />
      </Box>
      <Box as="section" mt={{ base: "12", sm: "16", md: "16" }}>
        <Heading as="h2" fontSize="2xl" mb={8}>
          About Me
        </Heading>
        <Text color={useColorModeValue("gray.600", "gray.400")} as="p">
          Hello! My name is Ediz and I enjoy building things for the web.
          Currently improving and learning NextJS, Chakra-UI, Typescript,
          Prisma, Fauna, GraphQL, and Apollo 3.
        </Text>
      </Box>
      <Box as="section" mt={{ base: "12", sm: "16", md: "16" }}>
        <Heading as="h2" fontSize="2xl" mb={8}>
          Featured Work
        </Heading>
        <HStack
          alignItems="flex-start"
          p={4}
          bg={useColorModeValue("gray.100", "whiteAlpha.100")}
          rounded="md"
          position="relative"
          css={{
            transition: "all ease-in-out 0.15s",
          }}
          _hover={{
            transform: `${" translateY(-2px)"} ${"scale(1.005)"}`,
            shadow: "lg",
          }}
        >
          <VStack align="stretch">
            <Box p={2}>
              <Heading as="h3" fontSize="xl">
                Hamshack Radio
              </Heading>
              <HStack css={{ marginLeft: "0" }} mt={4}>
                <Badge p={1} rounded="md" colorScheme="teal">
                  NextJS
                </Badge>
                <Badge p={1} rounded="md" colorScheme="pink">
                  SASS
                </Badge>
                <Badge p={1} rounded="md" colorScheme="purple">
                  STRAPI
                </Badge>
                <Badge p={1} rounded="md" colorScheme="red">
                  REACT
                </Badge>
              </HStack>
              <Text color={useColorModeValue("gray.600", "gray.400")} mt={4}>
                Hamshack Radio is an online radio station and independent
                cultural platform based in Cape Town, South Africa.
              </Text>
              <HStack mt={6}>
                <Tooltip label="Open live website">
                  <Link target="_blank" href="https://hamshackradio.live">
                    <IconButton
                      aria-label="Open live website"
                      colorScheme={"gray"}
                      icon={useColorModeValue(
                        <OpenIconDark />,
                        <OpenIconLight />
                      )}
                    ></IconButton>
                  </Link>
                </Tooltip>
                <Tooltip label="Private repository only available if requested">
                  <IconButton
                    css={{ cursor: "not-allowed" }}
                    aria-label="Open github repo"
                    colorScheme={"gray"}
                    icon={useColorModeValue(<GithubIcon />, <GithubIcon />)}
                  ></IconButton>
                </Tooltip>
              </HStack>
            </Box>
          </VStack>
        </HStack>
        <HStack
          alignItems="flex-start"
          p={4}
          mt={4}
          bg={useColorModeValue("gray.100", "whiteAlpha.100")}
          rounded="md"
          css={{ transition: "all ease-in-out 0.15s" }}
          _hover={{
            transform: `${" translateY(-2px)"} ${"scale(1.005)"}`,
            shadow: "lg",
          }}
        >
          <VStack align="stretch">
            <Box p={2}>
              <Heading as="h3" fontSize="xl">
                Consermul S.A
              </Heading>
              <HStack css={{ marginLeft: "0" }} mt={4}>
                <Badge p={1} rounded="md" colorScheme="teal">
                  NextJS
                </Badge>
                <Badge p={1} rounded="md" colorScheme="pink">
                  SASS
                </Badge>
                <Badge p={1} rounded="md" colorScheme="red">
                  REACT
                </Badge>
              </HStack>
              <Text color={useColorModeValue("gray.600", "gray.400")} mt={4}>
                Consermul S.A, is a consulting, maintenance and construction
                company based in Panama
              </Text>
              <HStack mt={6}>
                <Tooltip label="Open live website">
                  <Link target="_blank" href="http://consermulsa.com/">
                    <IconButton
                      aria-label="Open live website"
                      colorScheme={"gray"}
                      icon={useColorModeValue(
                        <OpenIconDark />,
                        <OpenIconLight />
                      )}
                    ></IconButton>
                  </Link>
                </Tooltip>
                <Tooltip label="Open github repository">
                  <Link
                    target="_blank"
                    href="https://github.com/edizyurdakul/ConsermulSA"
                  >
                    <IconButton
                      aria-label="Open github repo"
                      colorScheme={"gray"}
                      icon={useColorModeValue(<GithubIcon />, <GithubIcon />)}
                    ></IconButton>{" "}
                  </Link>
                </Tooltip>
              </HStack>
            </Box>
          </VStack>
        </HStack>
      </Box>
      <Box as="section" mt={{ base: "12", sm: "16", md: "24" }}>
        <Heading as="h2" fontSize="2xl" mb={8}>
          Experience
        </Heading>
        <Box>
          <HStack justifyContent="space-between">
            <Heading as="h3" fontSize="md">
              Dado Agency
            </Heading>
            <Text as="p">March 2019 - December 2019</Text>
          </HStack>
          <Text as="p" color={useColorModeValue("gray", "gray")} fontSize="sm">
            Web Developer
          </Text>
        </Box>
      </Box>
      <Box as="section" mt={{ base: "12", sm: "16", md: "24" }}>
        <Heading as="h2" fontSize="2xl" mb={8}>
          Skills
        </Heading>
        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(4, 1fr)",
          }}
          gap={{ base: "6" }}
        >
          <VStack alignItems="flex-start">
            <Heading as="h3" fontSize="xl">
              Languages
            </Heading>
            <List>
              <ListItem color={useColorModeValue("gray", "gray")} mt={2}>
                HTML
              </ListItem>
              <ListItem color={useColorModeValue("gray", "gray")} mt={2}>
                CSS/Sass
              </ListItem>
              <ListItem color={useColorModeValue("gray", "gray")} mt={2}>
                JavaScript (ES6)
              </ListItem>
              <ListItem color={useColorModeValue("gray", "gray")} mt={2}>
                Chakra UI
              </ListItem>
              <ListItem color={useColorModeValue("gray", "gray")} mt={2}>
                TailwindCSS
              </ListItem>
            </List>
          </VStack>
          <VStack alignItems="flex-start">
            <Heading as="h3" fontSize="xl">
              Frameworks
            </Heading>
            <List>
              <ListItem color={useColorModeValue("gray", "gray")} mt={4}>
                React
              </ListItem>
              <ListItem color={useColorModeValue("gray", "gray")} mt={2}>
                NextJS
              </ListItem>
              <ListItem color={useColorModeValue("gray", "gray")} mt={2}>
                GatsbyJS
              </ListItem>
            </List>
          </VStack>
          <VStack alignItems="flex-start">
            <Heading as="h3" fontSize="xl">
              Tools
            </Heading>
            <List>
              <ListItem color={useColorModeValue("gray", "gray")} mt={4}>
                Bash
              </ListItem>
              <ListItem color={useColorModeValue("gray", "gray")} mt={2}>
                Git & Github
              </ListItem>
              <ListItem color={useColorModeValue("gray", "gray")} mt={2}>
                Chrome Devtools
              </ListItem>
            </List>
          </VStack>
          <VStack alignItems="flex-start">
            <Heading as="h3" fontSize="xl">
              Design
            </Heading>
            <List>
              <ListItem color={useColorModeValue("gray", "gray")} mt={4}>
                Figma
              </ListItem>
            </List>
          </VStack>
        </Grid>
      </Box>
      <Box as="section" mt={{ base: "12", sm: "16", md: "16" }}>
        <Heading as="h2" fontSize="2xl" mb={8}>
          Projects
        </Heading>
        <HStack
          alignItems="flex-start"
          p={4}
          mt={4}
          bg={useColorModeValue("gray.100", "whiteAlpha.100")}
          rounded="md"
          css={{ transition: "all ease-in-out 0.15s" }}
          _hover={{
            transform: `${" translateY(-2px)"} ${"scale(1.005)"}`,
            shadow: "lg",
          }}
        >
          <VStack align="stretch" w={"100%"}>
            <Box p={2}>
              <HStack
                justifyContent={"space-between"}
                css={{ marginLeft: "0" }}
              >
                <Heading as="h3" fontSize="xl">
                  Github Scout
                </Heading>
                <Box>
                  <Badge p={1} mr={2} rounded="md" colorScheme="blue">
                    React
                  </Badge>
                  <Badge p={1} mr={2} rounded="md" colorScheme="green">
                    Chakra UI
                  </Badge>
                  <Badge
                    p={1}
                    rounded="md"
                    colorScheme="gray"
                    color={"black"}
                    bg={useColorModeValue("gray.300", "gray.200")}
                  >
                    GitHub Api
                  </Badge>
                </Box>
              </HStack>
              <Text color={useColorModeValue("gray.600", "gray.400")} mt={2}>
                Github Scout enables searching github users, and see their
                details more in depth, how many stars, followers, and etc.
              </Text>
              <HStack mt={2}>
                <Tooltip label="Open live website">
                  <Link target="_blank" href="https://github-scout.vercel.app/">
                    <IconButton
                      aria-label="Open live website"
                      colorScheme={"gray"}
                      icon={useColorModeValue(
                        <OpenIconDark />,
                        <OpenIconLight />
                      )}
                    ></IconButton>
                  </Link>
                </Tooltip>
                <Tooltip label="Open github repository">
                  <Link
                    target="_blank"
                    href="https://github.com/edizyurdakul/github-scout"
                  >
                    <IconButton
                      aria-label="Open github repo"
                      colorScheme={"gray"}
                      icon={useColorModeValue(<GithubIcon />, <GithubIcon />)}
                    ></IconButton>{" "}
                  </Link>
                </Tooltip>
              </HStack>
            </Box>
          </VStack>
        </HStack>
        <HStack
          alignItems="flex-start"
          p={4}
          mt={4}
          bg={useColorModeValue("gray.100", "whiteAlpha.100")}
          rounded="md"
          css={{ transition: "all ease-in-out 0.15s" }}
          _hover={{
            transform: `${" translateY(-2px)"} ${"scale(1.005)"}`,
            shadow: "lg",
          }}
        >
          <VStack align="stretch" w={"100%"}>
            <Box p={2}>
              <HStack
                justifyContent={"space-between"}
                css={{ marginLeft: "0" }}
              >
                <Heading as="h3" fontSize="xl">
                  Feedback App
                </Heading>
                <Box>
                  <Badge p={1} mr={2} rounded="md" colorScheme="blue">
                    React
                  </Badge>
                  <Badge p={1} mr={2} rounded="md" colorScheme="green">
                    Chakra UI
                  </Badge>
                  <Badge p={1} rounded="md" colorScheme="red">
                    JSON-Server
                  </Badge>
                </Box>
              </HStack>
              <Text color={useColorModeValue("gray.600", "gray.400")} mt={2}>
                Feedback App allows users to enter, edit, and delete reviews
                with rating selection and text description. Connected to a
                JSON-Server(Deployed on Heroku) to create a fake API.
              </Text>
              <HStack mt={2}>
                <Tooltip label="Open live website">
                  <Link
                    target="_blank"
                    href="https://feedback-app-edizyurdakul.vercel.app/"
                  >
                    <IconButton
                      aria-label="Open live website"
                      colorScheme={"gray"}
                      icon={useColorModeValue(
                        <OpenIconDark />,
                        <OpenIconLight />
                      )}
                    ></IconButton>
                  </Link>
                </Tooltip>
                <Tooltip label="Open github repository">
                  <Link
                    target="_blank"
                    href="https://github.com/edizyurdakul/feedback-app"
                  >
                    <IconButton
                      aria-label="Open github repo"
                      colorScheme={"gray"}
                      icon={useColorModeValue(<GithubIcon />, <GithubIcon />)}
                    ></IconButton>{" "}
                  </Link>
                </Tooltip>
              </HStack>
            </Box>
          </VStack>
        </HStack>
      </Box>
      {/* <Box as="section" mt={{ base: "12", sm: "16", md: "24" }}>
        <Heading as="h2" fontSize="2xl" mb={8}>
          Featured Posts
        </Heading>
        <List>
          {posts.map((post) => (
            <ListItem key={post.filePath}>
              <LinkBox as="article">
                <VStack
                  alignItems="flex-start"
                  p={4}
                  mt={4}
                  bg={useColorModeValue("gray.100", "whiteAlpha.100")}
                  rounded="md"
                  css={{ transition: "all ease-in-out 0.15s" }}
                  _hover={{
                    transform: `${" translateY(-2px)"} ${"scale(1.005)"}`,
                    shadow: "lg",
                  }}
                >
                  <NextLink
                    as={`/blog/${post.filePath.replace(/\.mdx?$/, "")}`}
                    href={`/blog/[slug]`}
                    passHref
                  >
                    <LinkOverlay>
                      <Heading
                        _hover={{
                          color: useColorModeValue("black", "white"),
                          rounded: "md",
                        }}
                        as="h3"
                        fontSize="xl"
                      >
                        {post.data.title}
                      </Heading>
                    </LinkOverlay>
                  </NextLink>
                  <Text
                    color={useColorModeValue("gray", "gray")}
                    noOfLines={2}
                    fontSize="md"
                    as="p"
                  >
                    {post.data.description}
                  </Text>
                </VStack>
              </LinkBox>
            </ListItem>
          ))}
        </List>
      </Box> */}
    </>
  );
}

/**
 <NextLink as={`/blog/${post.filePath.replace(/\.mdx?$/, "")}`} href={`/blog/[slug]`}>
                <a>{post.data.title}</a>
              </NextLink>
 */

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
