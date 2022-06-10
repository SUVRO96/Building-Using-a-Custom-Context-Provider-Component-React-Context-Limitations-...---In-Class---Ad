import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  return (
    <div>
      <h1>You are home.</h1>
      <p data-testid="location-display">{location.pathname}</p>
    </div>
  );
};

export default Home;
