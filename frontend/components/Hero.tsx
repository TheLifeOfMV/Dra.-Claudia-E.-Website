import React from 'react';
import styled from 'styled-components';
import { WHATSAPP_APPOINTMENT_URL } from '../lib/whatsapp';

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  padding: ${props => props.theme.spacing.xl} 0;
  min-height: calc(100vh - 100px);
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: ${props => props.theme.spacing.lg} 0;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.lg};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing.xl};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${props => props.theme.spacing.lg};
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RightColumn = styled.div`
  position: relative;
  
  @media (max-width: 768px) {
    order: -1;
    margin-bottom: ${props => props.theme.spacing.lg};
  }
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: ${props => props.theme.spacing.md};
  
  span {
    color: ${props => props.theme.colors.primary};
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: ${props => props.theme.spacing.lg};
  color: ${props => props.theme.colors.textGray};
  max-width: 90%;
  text-align: justify;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 100%;
  }
`;

const HeroButton = styled.a`
  display: inline-block;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 15px 30px;
  border-radius: ${props => props.theme.borderRadius};
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  align-self: flex-start;
  
  &:hover {
    background-color: ${props => props.theme.colors.primary};
    opacity: 0.9;
  }
  
  @media (max-width: 768px) {
    align-self: center;
  }
`;

const BackgroundCircle = styled.div`
  position: absolute;
  background-color: rgba(110, 162, 213, 0.1);
  border-radius: 50%;
  width: 300px;
  height: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
`;

const DoctorImage = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 400px;
  background-image: url('/doctor.jpg');
  background-size: cover;
  background-position: center;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.shadows.default};
`;

const TestimonialBadge = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 2;
  background-color: white;
  padding: ${props => props.theme.spacing.sm};
  border-radius: ${props => props.theme.borderRadius};
  display: flex;
  align-items: center;
  box-shadow: ${props => props.theme.shadows.default};
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f0f0f0;
  margin-right: ${props => props.theme.spacing.sm};
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TestimonialContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Stars = styled.div`
  color: ${props => props.theme.colors.accent};
  font-size: 0.8rem;
  margin-bottom: 4px;
`;

const StatsBadge = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 2;
  background-color: white;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius};
  display: flex;
  align-items: center;
  box-shadow: ${props => props.theme.shadows.default};
`;

const StatIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: rgba(110, 162, 213, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${props => props.theme.spacing.md};
  
  svg {
    width: 20px;
    height: 20px;
    fill: ${props => props.theme.colors.primary};
  }
`;

const StatContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatValue = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <LeftColumn>
          <HeroTitle>
            Experta en <span>Cirugia General</span> con alto nivel profesional y calidez humana.
          </HeroTitle>
          <HeroSubtitle>
          La cirugía con la Dra. Echeverry no solo es precisa, también es humana: cada paciente es tratado con respeto, empatía y dedicación.
          </HeroSubtitle>
          <HeroButton
            href={WHATSAPP_APPOINTMENT_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar Cita
          </HeroButton>
        </LeftColumn>
        
        <RightColumn>
          <BackgroundCircle />
          <DoctorImage />
          
          <TestimonialBadge>
            <Avatar>
              <img src="/avatar.jpg" alt="Patient" />
            </Avatar>
            <TestimonialContent>
              <Stars>★★★★★</Stars>
              <small>Calidez humana!</small>
            </TestimonialContent>
          </TestimonialBadge>
          
          <StatsBadge>
            <StatIcon>
              <svg viewBox="0 0 24 24">
                <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" />
              </svg>
            </StatIcon>
            <StatContent>
              <StatValue>10000+</StatValue>
              <small>Pacientes Satisfechos</small>
            </StatContent>
          </StatsBadge>
        </RightColumn>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero; 