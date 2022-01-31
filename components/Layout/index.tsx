import Navbar from "../Navbar";
import Footer from "../Footer";
import { Box, Container, VisuallyHidden } from "@chakra-ui/react";

export default function Layout({ children }) {
  return (
    <>
      {" "}
      <a href="#content">
        <VisuallyHidden aria-label="skip navigation">
          Skip navigation
        </VisuallyHidden>
      </a>
      <Container maxW="container.md">
        <Navbar />
        <Box as="main" mt={{ base: "12", sm: "16", md: "24" }}>
          {children}
        </Box>
        <Footer />
      </Container>
    </>
  );
}
