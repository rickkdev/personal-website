import React from "react";
import Head from "next/head"; // Import the Head component
import CalendlyEmbed from "../../components/CalendlyEmbed"; // Adjust the path based on your file structure

const Cal = () => {
  const calendlyUrl = "https://calendly.com/rickkdev/invites"; // Replace with your Calendly link

  return (
    <div className="pt-10">
      <Head>
        <title>Book a Meeting with Rick</title>
        <meta
          name="description"
          content="Book a meeting with me on Calendly."
        />
      </Head>
      <h1>Book a Meeting</h1>
      <CalendlyEmbed url={calendlyUrl} />
    </div>
  );
};

export default Cal;
