import React from "react";
import { Container } from "@material-ui/core";
import { Navbar } from "./components/Navbar";

const App: React.FC = () => {
  return (
    <>
      <Navbar></Navbar>
      <Container maxWidth="lg">
        <section></section>
      </Container>
    </>
  );
};

export default App;
