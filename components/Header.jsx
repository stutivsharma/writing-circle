import styled from 'styled-components';

// Styled components
const HeaderContainer = styled.header`
  background-color: #f8f9fa;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: #333;
  margin: 0;
  font-weight: bold;
  cursor: pointer;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
  }
`;

// Header component
const Header = () => {
  return (
    <HeaderContainer>
      <Logo>for the writers</Logo>
      <Nav>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">About</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
