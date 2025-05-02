import React, { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.lg};
`;

const HeaderSection = styled.section`
  padding-bottom: ${props => props.theme.spacing.xl};
  margin-bottom: ${props => props.theme.spacing.xl};
  text-align: center;
`;

const PageTitle = styled.h1`
  margin-bottom: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.primary};
`;

const PageDescription = styled.p`
  max-width: 800px;
  margin: 0 auto;
  color: ${props => props.theme.colors.textGray};
`;

const ContentSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing.xl};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MapContainer = styled.div<{ isMapLoaded?: boolean }>`
  width: 100%;
  height: 450px;
  border-radius: ${props => props.theme.borderRadius};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.default};
  margin-bottom: ${props => props.theme.spacing.lg};
  background-color: ${props => props.theme.colors.lightGray};
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 3px solid ${props => props.theme.colors.primary};
    border-top-color: transparent;
    animation: spin 1s linear infinite;
    opacity: ${props => props.isMapLoaded ? 0 : 1};
    transition: opacity 0.3s ease;
  }
  
  @keyframes spin {
    to { transform: translate(-50%, -50%) rotate(360deg); }
  }
  
  iframe {
    position: relative;
    z-index: 1;
    opacity: ${props => props.isMapLoaded ? 1 : 0.01};
    transition: opacity 0.5s ease;
  }
`;

const ContactInfoCard = styled.div`
  background-color: white;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.shadows.default};
  padding: ${props => props.theme.spacing.lg};
  height: fit-content;
`;

const ContactTitle = styled.h2`
  color: black;
  margin-bottom: ${props => props.theme.spacing.md};
`;

const ContactDetailsSection = styled.div`
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const ContactItem = styled.div`
  display: flex;
  margin-bottom: ${props => props.theme.spacing.sm};
  
  svg {
    width: 24px;
    height: 24px;
    margin-right: ${props => props.theme.spacing.md};
    fill: ${props => props.theme.colors.primary};
    flex-shrink: 0;
  }
`;

const ContactText = styled.div`
  line-height: 1.6;
`;

const OfficeHoursSection = styled.div`
  margin-top: ${props => props.theme.spacing.lg};
  padding-top: ${props => props.theme.spacing.lg};
  border-top: 1px solid ${props => props.theme.colors.lightGray};
`;

const DayItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const Day = styled.span`
  font-weight: 500;
`;

const Hours = styled.span``;

const SocialSection = styled.div`
  margin-top: ${props => props.theme.spacing.lg};
  padding-top: ${props => props.theme.spacing.lg};
  border-top: 1px solid ${props => props.theme.colors.lightGray};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  margin-top: ${props => props.theme.spacing.sm};
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${props => props.theme.colors.lightGray};
  border-radius: 50%;
  color: ${props => props.theme.colors.secondary};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.primary};
    color: white;
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const ContactPage = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  
  const handleMapLoad = () => {
    setMapLoaded(true);
  };
  
  return (
    <>
      <Head>
        <title>Contacta Dra. Claudia Echeverry - Cirujana General</title>
        <meta 
          name="description" 
          content="Contacta con la Dra. Claudia Echeverry. Encuentra nuestra ubicación, horarios de oficina y información de contacto."
        />
        <link rel="preconnect" href="https://www.google.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://maps.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://maps.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://maps.gstatic.com" />
      </Head>
      
      <main>
        <ContactContainer>
          <HeaderSection>
            <PageTitle>Contactate con nosotros</PageTitle>
            <PageDescription>
              ¿Tienes preguntas o necesitas programar una cita? 
              Contáctanos y nuestro personal estará listo para ayudarte.
            </PageDescription>
          </HeaderSection>
          
          <ContentSection>
            <MapContainer isMapLoaded={mapLoaded}>
              <iframe 
                src="https://www.google.com/maps/embed/v1/place?q=Edificio+de+Consultorios+de+Especialistas+-+Medicádiz,+Ibagué,+Tolima,+Colombia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&language=es&region=co" 
                width="600" 
                height="450"
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de la Oficina"
                onLoad={handleMapLoad}
              ></iframe>
            </MapContainer>
            
            <ContactInfoCard>
              <ContactTitle>Información de contacto</ContactTitle>
              
              <ContactDetailsSection>
                <ContactItem>
                  <svg viewBox="0 0 24 24">
                    <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                  </svg>
                  <ContactText>
                    <strong>Dirección:</strong><br />
                    Edificio de Consultorios de Especialistas - 302<br />
                    Clinica Medicádiz sede Samaria<br />
                    (Ibagué, Tolima)
                  </ContactText>
                </ContactItem>
                
                <ContactItem>
                  <svg viewBox="0 0 24 24">
                    <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                  </svg>
                  <ContactText>
                    <strong>Teléfono:</strong><br />
                    (123) 456-7890
                  </ContactText>
                </ContactItem>
                
                <ContactItem>
                  <svg viewBox="0 0 24 24">
                    <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                  </svg>
                  <ContactText>
                    <strong>Email:</strong><br />
                    info@drwilliams.com
                  </ContactText>
                </ContactItem>
                
                <ContactItem>
                  <svg viewBox="0 0 24 24">
                    <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M19,19H5V8H19V19M7,10H9V12H7V10M11,10H13V12H11V10M15,10H17V12H15V10M7,14H9V16H7V14M11,14H13V16H11V14M15,14H17V16H15V14Z" />
                  </svg>
                  <ContactText>
                    <strong>Fax:</strong><br />
                    (123) 456-7899
                  </ContactText>
                </ContactItem>
              </ContactDetailsSection>
              
              <OfficeHoursSection>
                <ContactTitle>Horarios de atención</ContactTitle>
                <DayItem>
                  <Day>Lunes - Viernes</Day>
                  <Hours>9:00 AM - 5:00 PM</Hours>
                </DayItem>
                <DayItem>
                  <Day>Sábado</Day>
                  <Hours>9:00 AM - 1:00 PM</Hours>
                </DayItem>
                <DayItem>
                  <Day>Domingo</Day>
                  <Hours>Cerrado</Hours>
                </DayItem>
              </OfficeHoursSection>
              
              <SocialSection>
                <ContactTitle>Conectate con nosotros</ContactTitle>
                <SocialLinks>
                  <SocialLink href="#" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </SocialLink>
                  <SocialLink href="#" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </SocialLink>
                  <SocialLink href="#" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </SocialLink>
                </SocialLinks>
              </SocialSection>
            </ContactInfoCard>
          </ContentSection>
        </ContactContainer>
      </main>
    </>
  );
};

export default ContactPage; 