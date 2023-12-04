import styled from 'styled-components';

// Styled components for the title card
const TitleCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh; // Full viewport height
  background-color: #282c34; // Dark background for contrast
  color: #fff; // White text color for high contrast
  text-align: center;
`;

const Title = styled.h1`
  font-size: 4rem; // Large font size for impact
  margin: 0;
  font-family: 'Raleway', sans-serif; // Choose a font that fits your style
  font-weight: bold;
  letter-spacing: 0.1em; // Letter spacing for style
  text-transform: uppercase; // Uppercase for a striking look
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-top: 0.5rem; // Space between title and subtitle
  font-family: 'Courier', sans-serif;
  font-weight: normal;
  color: #ccc; // A lighter color for the subtitle
`;

// TitleCard component
const TitleCard = () => {
    return (
      <TitleCardContainer>
        <div>
          <Title>The Writing Circle</Title>
          <Subtitle>your AI powered guided writing activity </Subtitle> 
        </div>
      </TitleCardContainer>
    );
  };
export default TitleCard;
