import Navbar from "../Navbar";
import { Box, Container } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <Container maxW="container.md">
      <Navbar />
      <Box as="main">{children}</Box>
    </Container>
  );
}
