"use client";

import styled from "styled-components";
import Image from "next/image";
import React, { useState, useEffect } from "react";

import Timer from "@/components/Timer";
import Heading from "@/components/Heading";
import Header from "@/components/Header";
import TitleCard from "@/components/TitleCard";
//import styles from "@global.css";

export default function Home() {
  const [subject, setSubject] = useState("");
  const [location, setLocation] = useState("");
  const [format, setFormat] = useState("");
  const [keyword, setKeyword] = useState("");
  const [responseText, setResponseText] = useState("");
  const [responseTexttwo, setResponseTexttwo] = useState("");
  const [loading, setLoading] = useState(false);

  const Headline = styled.h1`
    font-size: 24px;
    color: white;
    text-align: center;
    font-weight: normal;
    font-family: "Raleway", sans-serif;
  `;

  const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    background-color: #2596be; // Dark background
    padding: 2rem; // Padding around the form
    border-radius: 8px; // Optional: rounded corners
    color: #fff; // White text for contrast
  `;

  const FormLabel = styled.label`
    color: #21130d; // Lighter color for labels
    font-family: "Courier";
    margin-bottom: 0.5rem; // Spacing for visual separation
  `;

  const FormInput = styled.input`
    width: 100%; // Full width of the container
    border: 1px solid #333; // Darker border for input
    padding: 0.5rem;
    margin-bottom: 1rem; // Spacing after each input
    color: #333; // Dark text for input
    background-color: #fff; // White background for input
  `;

  const SubmitButton = styled.button`
    padding: 0.5rem 3rem;
    background-color: #333;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #444; // Slightly lighter on hover
    }
  `;

  const ResponseContainer = styled.div`
    margin-top: 1rem;
    color: #ccc;
    background-color: #063970; // Slightly different background for response
    padding: 1rem;
    border-radius: 4px; // Optional: rounded corners
  `;

  // The empty array makes this run only once on component mount

  return (
    <div>
      <Header />
      <TitleCard />
      <FormContainer>
        <Headline>
          Warm up activity: enter what you want to write about today. Or, leave
          any of the options blank to get a randomized ideas.
        </Headline>
        <FormLabel>
          Subject:{" "}
          <FormInput
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </FormLabel>
        <FormLabel>
          Location:{" "}
          <FormInput
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </FormLabel>
        <FormLabel>
          Format (essay, poem, story, etc.):{" "}
          <FormInput
            type="text"
            value={format}
            onChange={(e) => setFormat(e.target.value)}
          />
        </FormLabel>

        <SubmitButton
          onClick={() => {
            setLoading(true);
            fetch("/chat", {
              method: "POST",
              headers: {
                // Add headers here if needed
              },
              body: JSON.stringify({ subject, location }), // Convert the JSON object to a string
            })
              .then(async (response) => {
                const data = await response.json();
                setResponseText(data.response); // Update the state with the response
              })
              .catch((error) => {
                console.error("Error:", error);
              })
              .finally(() => {
                setLoading(false);
              });
          }}
        >
          submit
        </SubmitButton>
        <Headline>
          {" "}
          Set a timer for 5 minutes to complete your warm-up.{" "}
        </Headline>
        {loading && <p>loading...</p>}
        {responseText !== "" && (
          <ResponseContainer>
            <p>response:</p>
            {responseText}
          </ResponseContainer>
        )}
        <Timer />
      </FormContainer>
    </div>
  );
}
