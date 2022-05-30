import React from "react";

import { Container } from "@chakra-ui/react";

import Products from "./components/Products";

const App = () => {
  return (
    // <div>{/* TODO: Code here */}</div>;
    <div>
    
      <Container maxW="container.xl" textAlign="center">
        <Products />
       
      </Container>
    </div>
  );
};

export default App;

