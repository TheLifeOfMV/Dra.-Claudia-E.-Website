import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: string;
  link: string;
}

const Card = styled.div`
  background-color: white;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.shadows.default};
  padding: ${props => props.theme.spacing.lg};
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
  }
`;

const IconContainer = styled.div`
  width: 60px;
  height: 60px;
  background-color: rgba(110, 162, 213, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${props => props.theme.spacing.md};
  
  svg {
    width: 30px;
    height: 30px;
    fill: ${props => props.theme.colors.primary};
    stroke: ${props => props.theme.colors.primary};
  }
`;

const Title = styled.h3`
  margin-bottom: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.secondary};
`;

const Description = styled.p`
  color: ${props => props.theme.colors.textGray};
  margin-bottom: ${props => props.theme.spacing.md};
  flex-grow: 1;
`;

const LearnMore = styled.a`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  display: flex;
  align-items: center;
  
  &:hover {
    text-decoration: underline;
  }
  
  svg {
    width: 18px;
    height: 18px;
    margin-left: ${props => props.theme.spacing.xs};
    fill: ${props => props.theme.colors.primary};
  }
`;

// New Icon components
const HeartStethoscopeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
    <path d="M8 13.75C4.8 13.75 2 11.5 2 8S4.8 2.25 8 2.25c3 0 5.5 2.5 5.5 6.25.5 0 1 .25 1.25.75C15 9.75 15 10.25 15 10.75v1c0 .75-.25 1.5-.75 2-1 1-2.25 1.25-3.5 1.25h-1.5" />
    <path d="M15.75 8.25a3 3 0 1 1 6 0 3 3 0 0 1-6 0z"/>
    <path d="M18.75 21.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    <path d="M8.25 14v1.75c0 .75-.5 1.5-1.25 1.75h-.25c-1 0-1.75-.75-1.75-1.75V14"/>
    <path d="M8.25 14v1.75c0 .75.5 1.5 1.25 1.75h.25c1 0 1.75-.75 1.75-1.75V14"/>
    <path d="M18.75 18.75h-4"/>
    <path d="M16.75 16.75v4"/>
  </svg>
);

const SurgeonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
    <path d="M12 15.75c3.5 0 6.5-2.75 6.5-6.5V6.5C18.5 4 16.5 2 14 2H10C7.5 2 5.5 4 5.5 6.5v2.75c0 3.75 3 6.5 6.5 6.5z"/>
    <path d="M18.5 7.75c1 0 1.75-.75 1.75-1.75s-.75-1.75-1.75-1.75"/>
    <path d="M5.5 7.75c-1 0-1.75-.75-1.75-1.75S4.5 4.25 5.5 4.25"/>
    <path d="M10 5.25h4"/>
    <path d="M10 8h4"/>
    <path d="M12 15.75v6"/>
    <path d="M15.5 18.25h-7"/>
    <ellipse cx="8.5" cy="10.25" rx="1" ry="1.25"/>
    <ellipse cx="15.5" cy="10.25" rx="1" ry="1.25"/>
    <path d="M14 13.75a2 2 0 0 1-4 0"/>
  </svg>
);

const StethoscopeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
    <path d="M17.25 2.25c.75 0 1.25.5 1.25 1.25v5c0 .75-.5 1.25-1.25 1.25s-1.25-.5-1.25-1.25V8c0-1-.75-1.75-1.75-1.75s-1.75.75-1.75 1.75v1.5c0 4.5-3.75 8.25-8.25 8.25h-.5c-1 0-1.75.75-1.75 1.75s.75 1.75 1.75 1.75h.5c2.25 0 4.25-.75 6-2"/>
    <path d="M17.25 4.75V2.25"/>
    <path d="M14.5 4.75V2.25"/>
    <path d="M19.25 16.5a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/>
    <path d="M15.25 16.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
  </svg>
);

const MedicalTagIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
    <path d="M18.5 9V5c0-1.75-1.25-3-3-3h-7c-1.75 0-3 1.25-3 3v4c0 2 1.25 3.25 3 3.25h7c1.75 0 3-1.25 3-3.25z"/>
    <path d="M12 16.25v5.5"/>
    <path d="M9 19.25h6"/>
    <path d="M11 8.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
    <path d="M14 7.25h-1"/>
    <path d="M14 9.25h-1"/>
    <path d="M11 9.25h-3"/>
    <path d="M10 7.25H9"/>
  </svg>
);

const MonitorIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
    <rect x="2" y="3" width="20" height="14" rx="2"/>
    <path d="M6 21h12"/>
    <path d="M10 17v4"/>
    <path d="M14 17v4"/>
    <path d="M6 8.25h12"/>
    <path d="M6 12.25h12"/>
    <path d="M7 10.25h2"/>
    <path d="M12 10.25h2"/>
    <path d="M17 10.25h1"/>
    <path d="M7 14.25h1"/>
    <path d="M11 14.25h2"/>
    <path d="M16 14.25h1"/>
  </svg>
);

const EndoscopeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5">
    <path d="M9.5 4c0-1.1.9-2 2-2h1c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-1c-1.1 0-2-.9-2-2V4z"/>
    <path d="M12 8v2"/>
    <path d="M10.5 11.5c-4 .5-6.5 2.5-6.5 4.5 0 2.5 3.5 4.5 8 4.5s8-2 8-4.5c0-2-2.5-4-6.5-4.5"/>
    <path d="M20 12v4"/>
    <path d="M4 12v4"/>
    <path d="M12 13.5v5"/>
    <path d="M15 16c-.3-1.1-1.5-2-3-2s-2.7.9-3 2"/>
    <ellipse cx="9" cy="16" rx="1" ry="0.5"/>
    <ellipse cx="15" cy="16" rx="1" ry="0.5"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
  </svg>
);

const getIconByName = (iconName: string) => {
  switch (iconName) {
    case 'heart':
      return <HeartStethoscopeIcon />;
    case 'scalpel':
      return <SurgeonIcon />;
    case 'syringe':
      return <MonitorIcon />;
    case 'stethoscope':
      return <StethoscopeIcon />;
    case 'monitor':
      return <MonitorIcon />;
    case 'medical-tag':
      return <MedicalTagIcon />;
    case 'endoscope':
      return <EndoscopeIcon />;
    default:
      return <SurgeonIcon />;
  }
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, iconName, link }) => {
  return (
    <Card>
      <IconContainer>
        {getIconByName(iconName)}
      </IconContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Link href={link} passHref legacyBehavior>
        <LearnMore>
          Learn More <ArrowRightIcon />
        </LearnMore>
      </Link>
    </Card>
  );
};

export default ServiceCard; 