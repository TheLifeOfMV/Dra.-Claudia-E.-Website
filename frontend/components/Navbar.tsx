import React, { useState } from 'react';
import Link from 'next/link';
import styled, { createGlobalStyle } from 'styled-components';
import { useRouter } from 'next/router';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #6EA2D5;
    --secondary: #333333;
    --neutral: #FFFFFF;
    --light-gray: #F2F2F2;
    --text-gray: #666666;
    --accent: #FFD700;
    --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --border-radius: 8px;
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 32px;
    --font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html, body {
    font-family: var(--font-family);
    color: var(--secondary);
    background-color: var(--neutral);
    line-height: 1.6;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md) var(--spacing-lg);
  background-color: var(--neutral);
  box-shadow: var(--shadow);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--primary);
`;

const NavLinks = styled.div`
  display: flex;
  gap: var(--spacing-lg);

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileNavLinks = styled.div<{ isOpen: boolean }>`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background-color: var(--neutral);
    padding: var(--spacing-md);
    box-shadow: var(--shadow);
    transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-100%)'};
    opacity: ${props => props.isOpen ? 1 : 0};
    transition: all 0.3s ease;
    z-index: 99;
  }
`;

const NavLink = styled.a<{ active?: boolean }>`
  text-decoration: none;
  color: ${props => props.active ? 'var(--primary)' : 'var(--text-gray)'};
  font-weight: 500;
  
  &:hover {
    color: var(--primary);
  }

  @media (max-width: 768px) {
    padding: var(--spacing-md) 0;
    border-bottom: 1px solid var(--light-gray);
  }
`;

const BookButton = styled.button`
  background-color: var(--primary);
  color: var(--neutral);
  border: none;
  padding: 12px 24px;
  border-radius: var(--border-radius);
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  
  &:hover {
    background-color: var(--primary);
    opacity: 0.9;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path: string) => router.pathname === path;

  return (
    <>
      <GlobalStyle />
      <Nav>
        <Logo>Dra. Claudia Echeverry</Logo>
        
        <NavLinks>
          <Link href="/" passHref legacyBehavior>
            <NavLink active={isActive('/')}>Inicio</NavLink>
          </Link>
          <Link href="/about" passHref legacyBehavior>
            <NavLink active={isActive('/about')}>Acerca de</NavLink>
          </Link>
          <Link href="/services" passHref legacyBehavior>
            <NavLink active={isActive('/services')}>Servicios</NavLink>
          </Link>
          <Link href="/contact" passHref legacyBehavior>
            <NavLink active={isActive('/contact')}>Contacto</NavLink>
          </Link>
        </NavLinks>
        
        <MobileNavLinks isOpen={mobileMenuOpen}>
          <Link href="/" passHref legacyBehavior>
            <NavLink active={isActive('/')}>Home</NavLink>
          </Link>
          <Link href="/about" passHref legacyBehavior>
            <NavLink active={isActive('/about')}>About</NavLink>
          </Link>
          <Link href="/services" passHref legacyBehavior>
            <NavLink active={isActive('/services')}>Services</NavLink>
          </Link>
          <Link href="/contact" passHref legacyBehavior>
            <NavLink active={isActive('/contact')}>Contact</NavLink>
          </Link>
          <Link href="/booking" passHref legacyBehavior>
            <NavLink active={isActive('/booking')}>Book Appointment</NavLink>
          </Link>
        </MobileNavLinks>
        
        <div>
          <Link href="/booking" passHref legacyBehavior>
            <BookButton>Agendar Cita</BookButton>
          </Link>
          <MobileMenuButton onClick={toggleMobileMenu}>
            {mobileMenuOpen ? '✕' : '☰'}
          </MobileMenuButton>
        </div>
      </Nav>
    </>
  );
};

export default Navbar; 