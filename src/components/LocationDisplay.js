import React from "react";
import { useLocation } from "react-router-dom";

const LocationDisplay = () => {
  const location = useLocation();
  console.log(location);
  return <div>{location.pathname}</div>;
};

export default LocationDisplay;
