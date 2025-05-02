import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import BookingForm from '../components/BookingForm';

const BookingContainer = styled.div`
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

const FormSection = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${props => props.theme.spacing.xl};
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const InfoSidebar = styled.div`
  @media (max-width: 992px) {
    order: -1;
  }
`;

const InfoCard = styled.div`
  background-color: white;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.shadows.default};
  padding: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const InfoTitle = styled.h3`
  color: black;
  margin-bottom: ${props => props.theme.spacing.md};
`;

const InfoList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const InfoItem = styled.li`
  margin-bottom: ${props => props.theme.spacing.md};
  padding-left: 30px;
  position: relative;
  
  &:before {
    content: '✓';
    position: absolute;
    left: 0;
    color: ${props => props.theme.colors.primary};
    font-weight: bold;
  }
`;

const ContactInfo = styled.div`
  margin-top: ${props => props.theme.spacing.md};
  padding-top: ${props => props.theme.spacing.md};
  border-top: 1px solid ${props => props.theme.colors.lightGray};
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.sm};
  
  svg {
    width: 20px;
    height: 20px;
    margin-right: ${props => props.theme.spacing.sm};
    fill: ${props => props.theme.colors.primary};
  }
`;

const BookingPage = () => {
  return (
    <>
      <Head>
        <title>Agendar Cita - Dra. Claudia Echeverry</title>
        <meta 
          name="description" 
          content="Agenda una consulta con Dra. Claudia Echeverry. Nuestro formulario de reserva simple te permite solicitar tu hora de cita preferida."
        />
      </Head>
      
      <main>
        <BookingContainer>
          <HeaderSection>
            <PageTitle>Agendar Cita</PageTitle>
            <PageDescription>
              Agenda una consulta con la Dra. Claudia Echeverry usando nuestro formulario de reserva en línea.
              Te contactaremos para confirmar los detalles de tu cita.
            </PageDescription>
          </HeaderSection>
          
          <FormSection>
            <div>
              <BookingForm />
            </div>
            
            <InfoSidebar>
              <InfoCard>
                <InfoTitle>Información de la Consulta</InfoTitle>
                <InfoList>
                  <InfoItem>Las consultas son típicamente de 30-45 minutos</InfoItem>
                  <InfoItem>Por favor, llega 15 minutos antes de tu hora programada</InfoItem>
                  <InfoItem>Lleva tu identificación, información de seguro y historial médico</InfoItem>
                  <InfoItem>Las citas deben reprogramarse con al menos 24 horas de antelación</InfoItem>
                </InfoList>
                
                <ContactInfo>
                  <ContactItem>
                    <svg viewBox="0 0 24 24">
                      <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                    </svg>
                    <span>(123) 456-7890</span>
                  </ContactItem>
                  <ContactItem>
                    <svg viewBox="0 0 24 24">
                      <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                    </svg>
                    <span>appointments@drwilliams.com</span>
                  </ContactItem>
                </ContactInfo>
              </InfoCard>
              
              <InfoCard>
                <InfoTitle>Horarios de Atención</InfoTitle>
                <div>
                  <p><strong>Lunes - Viernes:</strong> 9:00 AM - 5:00 PM</p>
                  <p><strong>Sábado:</strong> 9:00 AM - 1:00 PM</p>
                  <p><strong>Domingo:</strong> Cerrado</p>
                </div>
              </InfoCard>
            </InfoSidebar>
          </FormSection>
        </BookingContainer>
      </main>
    </>
  );
};

export default BookingPage; 