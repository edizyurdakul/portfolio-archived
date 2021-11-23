import Link from "next/link";
import { useRouter } from "next/router";
import ThemeToggler from "./ThemeToggler";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Box,
  Link as ChakraLink,
  LinkProps,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Mobile = () => {
  return (
    <Menu>
      <MenuButton as={IconButton} icon={<HamburgerIcon />} aria-label="Open Menu"></MenuButton>
      <MenuList css={{ paddingTop: "0", paddingBottom: "0" }}>
        <MenuItem>
          <NavLink to="/">Home</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/about">About</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/projects">Projects</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/contact">Contact</NavLink>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default function Navbar() {
  return (
    <Box as="header" mt={6} display="flex" alignItems="center" justifyContent="space-between">
      <Box as="nav" display={{ base: "block", sm: "block", md: `none` }}>
        <Mobile />
      </Box>
      <Box as="nav" display={{ base: "none", sm: "none", md: `block` }}>
        <NavLink p={3} mr={2} to="/">
          Home
        </NavLink>
        <NavLink p={3} mr={2} to="/about">
          About
        </NavLink>
        <NavLink p={3} mr={2} to="/projects">
          Projects
        </NavLink>
        <NavLink p={3} to="/contact">
          Contact
        </NavLink>
      </Box>
      <ThemeToggler />
    </Box>
  );
}

// Amazing implementation by Kenneth Mark
// Source: https://dev.to/kennymark/implementing-activelink-in-next-js-and-chakra-44ki

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
          fontWeight="600"
          {...props}
          {...activeProps}
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
