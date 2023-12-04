import styled from 'styled-components';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  color: #fff; // Keeping the color consistent with the title card
`;

const FormLabel = styled.label`
  color: #ccc; // Lighter color for labels
  margin-bottom: 0.5rem; // Spacing for visual separation
`;

const FormInput = styled.input`
  border: 1px solid #333; // Darker border for input
  padding: 0.5rem;
  margin-bottom: 1rem; // Spacing after each input
`;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
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
`;
