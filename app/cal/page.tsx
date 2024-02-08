import React from "react";
import CalendlyEmbed from "../../components/CalendlyEmbed"; // Adjust the path based on your file structure

const Cal = () => {
  const calendlyUrl = "https://calendly.com/rickkdev/invites"; // Replace with your Calendly link

  return (
    <div className="pt-10">
      <h1>Book a Meeting</h1>
      <CalendlyEmbed url={calendlyUrl} />
    </div>
  );
};

export default Cal;
