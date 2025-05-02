import React from 'react';
import styled from 'styled-components';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import Head from 'next/head';

const ServicesSection = styled.section`
  padding: ${props => props.theme.spacing.xl} 0;
  background-color: ${props => props.theme.colors.lightGray};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.lg};
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.lg};
  color: ${props => props.theme.colors.primary};
`;

const SectionDescription = styled.p`
  text-align: center;
  max-width: 800px;
  margin: 0 auto ${props => props.theme.spacing.xl};
  color: ${props => props.theme.colors.textGray};
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${props => props.theme.spacing.lg};
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const StatsSection = styled.section`
  padding: ${props => props.theme.spacing.xl} 0;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${props => props.theme.spacing.lg};
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  display: flex;
  align-items: center;
  padding: ${props => props.theme.spacing.md};
  background-color: white;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.shadows.default};
`;

const StatIcon = styled.div`
  width: 60px;
  height: 60px;
  background-color: rgba(110, 162, 213, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${props => props.theme.spacing.md};
  
  svg {
    width: 30px;
    height: 30px;
    fill: ${props => props.theme.colors.primary};
  }
`;

const StatContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatValue = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 4px;
`;

const StatLabel = styled.div`
  color: ${props => props.theme.colors.textGray};
`;

const services = [
  {
    id: 1,
    title: 'General Surgery',
    description: 'Comprehensive surgical care for a wide range of conditions, focusing on the abdominal area, including the stomach, intestines, gallbladder, and more.',
    iconName: 'scalpel',
    link: '/services#general-surgery'
  },
  {
    id: 2,
    title: 'Minimally Invasive Surgery',
    description: 'Advanced techniques that use small incisions, resulting in shorter recovery times, less pain, and minimal scarring compared to traditional open surgeries.',
    iconName: 'stethoscope',
    link: '/services#minimally-invasive'
  },
  {
    id: 3,
    title: 'Laparoscopic Surgery',
    description: 'A type of minimally invasive procedure using a laparoscope to view and operate on the organs within the abdomen without major incisions.',
    iconName: 'monitor',
    link: '/services#laparoscopic'
  },
  {
    id: 4,
    title: 'Hernia Repair',
    description: 'Surgical correction of hernias, which occur when an organ pushes through an opening in the muscle or tissue that holds it in place.',
    iconName: 'heart',
    link: '/services#hernia'
  },
  {
    id: 5,
    title: 'Gallbladder Surgery',
    description: 'Removal of the gallbladder (cholecystectomy), typically performed to treat gallstones and other gallbladder diseases.',
    iconName: 'medical-tag',
    link: '/services#gallbladder'
  },
  {
    id: 6,
    title: 'Colonoscopy',
    description: 'Examination of the large intestine (colon) and rectum using a flexible tube with a camera, used for both diagnostic and preventive purposes.',
    iconName: 'endoscope',
    link: '/services#colonoscopy'
  }
];

const stats = [
  {
    id: 1,
    value: '40+',
    label: 'Años de Experiencia',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" />
      </svg>
    )
  },
  {
    id: 2,
    value: '10000+',
    label: 'Pacientes Satisfechos',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" />
      </svg>
    )
  },
  {
    id: 3,
    value: '10000+',
    label: 'Cirugías exitosas',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M20 14.58C19.53 15.07 18.6 15.5 17.43 15.5C16.86 15.5 16.32 15.37 15.84 15.31C15.36 15.25 14.87 15.12 14.43 14.91L12.76 17.51L12.35 15L14.5 12.04C14.27 11.41 14.06 10.73 14 10L5.93 17.09C4.72 18.19 4.72 20.06 5.93 21.16C7.1 22.23 9 22.23 10.25 21.16C10.25 21.16 18.1 13.5 18.96 12.67C19.34 12.27 19.71 11.82 20 11.34C18.7 12.5 18.3 13.5 20 14.58Z" />
      </svg>
    )
  },
  {
    id: 4,
    value: '5/5',
    label: 'Satisfacción del paciente',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
      </svg>
    )
  }
];

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Dra. Claudia Echeverry - Cirujana General</title>
        <meta 
          name="description" 
          content="La Dra. Claudia Echeverry ofrece atención quirúrgica de alta calidad con un enfoque centrado en el paciente, utilizando técnicas avanzadas y un trato humano que genera confianza."
        />
      </Head>
      
      <main>
        <Hero />
        
        <ServicesSection>
          <Container>
            <SectionTitle>Nuestros Servicios</SectionTitle>
            <SectionDescription>
            Con un enfoque humano y técnicas quirúrgicas de vanguardia, la Dra. Claudia Echeverry ofrece una atención centrada en la confianza y el bienestar del paciente
            </SectionDescription>
            
            <ServicesGrid>
              {services.map(service => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  iconName={service.iconName}
                  link={service.link}
                />
              ))}
            </ServicesGrid>
          </Container>
        </ServicesSection>
        
        <StatsSection>
          <Container>
            <StatsContainer>
              {stats.map(stat => (
                <StatCard key={stat.id}>
                  <StatIcon>{stat.icon}</StatIcon>
                  <StatContent>
                    <StatValue>{stat.value}</StatValue>
                    <StatLabel>{stat.label}</StatLabel>
                  </StatContent>
                </StatCard>
              ))}
            </StatsContainer>
          </Container>
        </StatsSection>
      </main>
    </>
  );
};

export default HomePage; 