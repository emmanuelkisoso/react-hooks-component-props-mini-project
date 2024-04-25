import React from "react";

function About({ image, about }) {
  const defaultImage = "https://via.placeholder.com/215"; // Default image URL
  const imgSrc = image || defaultImage; // Use the provided image or default

  return (
    <aside>
      <img src={imgSrc} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;
