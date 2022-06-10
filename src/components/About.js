import React from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  return (
    <div>
      <h1>You are on the about page.</h1>
      <p data-testid="location-display">{location.pathname}</p>
    </div>
  );
};

export default About;
