import React from "react";

interface CalendlyEmbedProps {
  url: string; // Your Calendly unique link
}

const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({ url }) => {
  return (
    <div>
      <iframe src={url} width="100%" height="1000" frameBorder="0"></iframe>
    </div>
  );
};

export default CalendlyEmbed;
