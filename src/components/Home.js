import React from "react";

const Home = () => {
  return (
    <div>
      <h1>You are home.</h1>
      <p data-testid="location-display">{location.pathname}</p>
    </div>
  );
};

export default Home;
