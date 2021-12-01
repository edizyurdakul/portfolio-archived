import Head from "next/head";
import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Ediz Yurdakul &nbsp;–&nbsp; About Page</title>
        <meta name="description" content="I'm Ediz Yurdakul, a Front-end Web Developer, based in Cape Town, South Africa." />
      </Head>
      <Box as="section">
        <Heading as="h2" fontSize="4xl" mb={8}>
          About Me
        </Heading>
        <Text color={useColorModeValue("gray.600", "gray.400")} mt={4} as="p">
          My name is Ediz. Born in Durban, South Africa. My parents are from Turkey and South Africa, so I occasionally travel 
          to Turkey and Cape Town and back. I am looking to improve and develop my front end skills.
        </Text>
        <Text color={useColorModeValue("gray.600", "gray.400")} mt={4} as="p">
          Currently studying at Varsity College Cape Town, although looking for opportunities to grow.
        </Text>
        <Text color={useColorModeValue("gray.600", "gray.400")} mt={4} as="p">
          I enjoy building things for the web. Currently improving and learning NextJS, Chakra-UI, Typescript, Prisma, GraphQL,
          and Apollo 3.
        </Text>
      </Box>
      <Box as="section" mt={{ base: "12", sm: "16", md: "16" }}>
        <Heading as="h2" fontSize="2xl" mb={8}>
          How I Decided To Become A Developer
        </Heading>
        <Text color={useColorModeValue("gray.600", "gray.400")} mt={4} as="p">
          I always enjoyed using computers, writing code, and solving problems. Started coding since high school, my first
          language was Delphi although it is kinda dead it indeed helped me improve my problem solving skills and logical
          thinking.
        </Text>
      </Box>
      <Box as="section" mt={{ base: "12", sm: "16", md: "16" }}>
        <Heading as="h2" fontSize="2xl" mb={8}>
          Things I Enjoy On My Free Time
        </Heading>
        <Text color={useColorModeValue("gray.600", "gray.400")} mt={4} as="p">
          I am kind of a gamer myself, being playing competitive since 14, games such as Overwatch, League of Legends, Counter
          Strike: Global Offensive.
        </Text>
      </Box>
    </>
  );
}
