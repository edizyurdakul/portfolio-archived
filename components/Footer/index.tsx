import Link from "next/link";
import { Box, Link as ChakraLink, LinkProps, VStack, HStack, useColorModeValue } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box mt={12} mb={16} as="footer">
      <HStack
        flexDirection={{ base: "column", md: "row" }}
        alignItems="flex-start"
        justifyContent="flex-start"
        color={useColorModeValue("gray.500", "gray.500")}
      >
        <VStack ml={{ base: "2", sm: "2", md: "0" }} mr={{ base: "0", sm: "0", md: "24" }} alignItems="flex-start">
          <NavLink mt={{ base: "2", sm: "2", md: "0" }} p={3} to="/">
            Home
          </NavLink>
          <NavLink p={3} to="#" css={{ cursor: "not-allowed" }}>
            About
          </NavLink>
          <NavLink p={3} to="#" css={{ cursor: "not-allowed" }}>
            Projects
          </NavLink>
          <NavLink p={3} to="#" css={{ cursor: "not-allowed" }}>
            Contact
          </NavLink>
        </VStack>
        <VStack alignItems="flex-start">
          <NavLink isExternal mt={{ base: "2", sm: "2", md: "0" }} p={3} to="https://github.com/edizyurdakul">
            Github
          </NavLink>
          <NavLink p={3} to="#">
            Twitter
          </NavLink>
          <NavLink isExternal p={3} to="https://www.linkedin.com/in/edizyurdakul/">
            LinkedIn
          </NavLink>
        </VStack>
      </HStack>
    </Box>
  );
}

interface NavLinkProps extends LinkProps {
  children?: string | React.ReactNode;
  to: string;
  activeProps?: LinkProps;
  _hover?: LinkProps;
}

function NavLink({ to, activeProps, children, _hover, ...props }: NavLinkProps) {
  return (
    <Link href={to} passHref>
      <ChakraLink
        {...props}
        _hover={{
          bg: useColorModeValue("gray.100", "rgba(255, 255, 255, 0.08)"),
          color: useColorModeValue("black", "white"),
          rounded: "md",
        }}
      >
        {children}
      </ChakraLink>
    </Link>
  );
}
