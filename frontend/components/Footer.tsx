import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { WHATSAPP_APPOINTMENT_URL } from '../lib/whatsapp';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.neutral};
  padding: ${props => props.theme.spacing.xl} 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.lg};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${props => props.theme.spacing.xl};
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.md};
  font-size: 1.2rem;
`;

const FooterLink = styled.a`
  color: ${props => props.theme.colors.neutral};
  text-decoration: none;
  margin-bottom: ${props => props.theme.spacing.sm};
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const FooterText = styled.p`
  margin-bottom: ${props => props.theme.spacing.sm};
  text-align: justify;
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: ${props => props.theme.spacing.lg};
  margin-top: ${props => props.theme.spacing.lg};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${props => props.theme.spacing.lg};
  padding-right: ${props => props.theme.spacing.lg};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  margin-top: ${props => props.theme.spacing.sm};
`;

const SocialLink = styled.a`
  color: ${props => props.theme.colors.neutral};
  font-size: 1.2rem;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterTitle>Dra. Claudia Echeverry</FooterTitle>
          <FooterText>
          Cirujana general con más de 40 años de experiencia, dedicada a brindar una atención quirúrgica cercana, empática y centrada en las necesidades de cada paciente
          </FooterText>
          <SocialLinks>
            <SocialLink href="#" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </SocialLink>
            <SocialLink href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </SocialLink>
            <SocialLink href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </SocialLink>
          </SocialLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Enlaces Rápidos</FooterTitle>
          <Link href="/" passHref legacyBehavior>
            <FooterLink>Inicio</FooterLink>
          </Link>
          <Link href="/about" passHref legacyBehavior>
            <FooterLink>Acerca de mi</FooterLink>
          </Link>
          <Link href="/services" passHref legacyBehavior>
            <FooterLink>Servicios</FooterLink>
          </Link>
          <Link href="/contact" passHref legacyBehavior>
            <FooterLink>Contacto</FooterLink>
          </Link>
          <FooterLink
            href={WHATSAPP_APPOINTMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar Cita
          </FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Servicios</FooterTitle>
          <Link href="/services#general-surgery" passHref legacyBehavior>
            <FooterLink>Cirugía General</FooterLink>
          </Link>
          <Link href="/services#minimally-invasive" passHref legacyBehavior>
            <FooterLink>Minimally Invasive Surgery</FooterLink>
          </Link>
          <Link href="/services#laparoscopic" passHref legacyBehavior>
            <FooterLink>Laparoscopic Surgery</FooterLink>
          </Link>
          <Link href="/services#hernia" passHref legacyBehavior>
            <FooterLink>Hernia Repair</FooterLink>
          </Link>
          <Link href="/services#gallbladder" passHref legacyBehavior>
            <FooterLink>Gallbladder Surgery</FooterLink>
          </Link>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Contacto</FooterTitle>
          <FooterText>Edificio de Consultorios de Especialistas - 302</FooterText>
          <FooterText>Clinica Medicádiz sede Samaria</FooterText>
          <FooterText>Ibagué, Colombia</FooterText>
          <FooterText>Phone: (123) 456-7890</FooterText>
          <FooterText>Email: info@drwilliams.com</FooterText>
        </FooterColumn>
      </FooterContent>
      
      <Copyright>
        <FooterText>© {new Date().getFullYear()} Dra. Claudia Echeverry. Todos los derechos reservados.</FooterText>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 