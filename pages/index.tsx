import Head from "next/head";
import { Box, Image, Button, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import NextImage from "next/image";
import NextLink from "next/link";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Ediz Yurdakul &nbsp;–&nbsp; Frontend Web Developer</title>
      </Head>
      <Box as="section" mt={24} display="flex" flexDirection={{ base: "column-reverse", sm: "row", md: "row" }}>
        <Box display="flex" flexDirection="column" justifyContent="center" pr={{ base: "1", sm: "6", md: "6" }}>
          <Heading mb={5} as="h1">
            Ediz Yurdakul
          </Heading>
          <Text as="p" color={useColorModeValue("gray.600", "gray.400")}>
            I’m a front-end developer specializing in building (and occasionally designing) exceptional digital experiences.
          </Text>
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
    </>
  );
}
