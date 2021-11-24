import Navbar from "../Navbar";
import Footer from "../Footer";
import { Box, Container } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <Container maxW="container.md">
      <Navbar />
      <Box as="main">{children}</Box>
      <Footer />
    </Container>
  );
}
