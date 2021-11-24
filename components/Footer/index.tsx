import Link from "next/link";
import { useRouter } from "next/router";
import { Box, Text, Link as ChakraLink, LinkProps, VStack, HStack, useColorModeValue } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box mt={12} mb={16} as="footer">
      <HStack
        flexDirection={{ base: "column", md: "row" }}
        alignItems="flex-start"
        justifyContent=" space-between"
        color={useColorModeValue("gray.500", "gray.500")}
      >
        <VStack css={{ marginInlineStart: "0.5rem" }}>
          <Text
            p={3}
            _hover={{
              bg: useColorModeValue("gray.100", "whiteAlpha.200"),
              color: useColorModeValue("black", "white"),
              rounded: "md",
            }}
            css={{ transition: "all 0.15s ease-in-out" }}
          >
            Ediz Yurdakul
          </Text>
        </VStack>
        <VStack>
          <NavLink p={3} to="/">
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
        <VStack alignItems="flex-start" mt={{ base: "4", sm: "4", md: "0" }}>
          <NavLink p={3} to="/">
            Github
          </NavLink>
          <NavLink p={3} to="#">
            Twitter
          </NavLink>
          <NavLink p={3} to="#">
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
  const router = useRouter();
  const isActive = router.pathname === to;
  const color = useColorModeValue("black", "white");

  if (isActive) {
    return (
      <Link href={to}>
        <ChakraLink
          {...props}
          {...activeProps}
          _hover={{
            bg: useColorModeValue("gray.100", "whiteAlpha.200"),
            color: useColorModeValue("black", "white"),
            rounded: "md",
          }}
        >
          {children}
        </ChakraLink>
      </Link>
    );
  }

  return (
    <Link href={to}>
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
