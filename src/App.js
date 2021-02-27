import "./App.css";
import React, { useState, useEffect } from "react";
import { Container } from "reactstrap";
import Counter from "./components/Counter";

function App() {
  const [state, setState] = useState(0);

  useEffect(() => {
    window.addEventListener("AuctionCaptured", updateUIhandler, {
      passive: true,
    });
    return () => window.removeEventListener("AuctionCaptured", updateUIhandler);
  }, []);

  const updateUIhandler = (e) => {
    setState((prevState) => prevState + 1);
  };
  return (
    <Container className="themed-container" fluid="sm">
      <Counter auctions={state} />
    </Container>
  );
}

export default App;
