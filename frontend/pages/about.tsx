import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.lg};
`;

const HeaderSection = styled.section`
  padding-bottom: ${props => props.theme.spacing.xl};
  border-bottom: 1px solid ${props => props.theme.colors.lightGray};
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const PageTitle = styled.h1`
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.primary};
`;

const SubTitle = styled.h2`
  color: ${props => props.theme.colors.secondary};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const ContentSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing.xl};
  margin-bottom: ${props => props.theme.spacing.xl};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TextColumn = styled.div``;

const ImageColumn = styled.div`
  @media (max-width: 768px) {
    order: -1;
  }
`;

const DoctorImage = styled.div`
  width: 100%;
  height: 400px;
  background-image: url('/doctor-profile.jpg');
  background-size: cover;
  background-position: center;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.shadows.default};
`;

const Paragraph = styled.p`
  margin-bottom: ${props => props.theme.spacing.md};
  line-height: 1.8;
  text-align: justify;
`;

const CredentialsSection = styled.section`
  padding: ${props => props.theme.spacing.xl} 0;
  border-top: 1px solid ${props => props.theme.colors.lightGray};
  border-bottom: 1px solid ${props => props.theme.colors.lightGray};
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const CredentialsList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${props => props.theme.spacing.lg};
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const CredentialCard = styled.div`
  background-color: white;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.shadows.default};
  padding: ${props => props.theme.spacing.lg};
`;

const CredentialTitle = styled.h3`
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const CredentialSubtitle = styled.h4`
  color: ${props => props.theme.colors.textGray};
  margin-bottom: ${props => props.theme.spacing.sm};
  font-weight: normal;
`;

const CredentialDate = styled.p`
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
`;

const CredentialsTitle = styled(SubTitle)`
  color: ${props => props.theme.colors.primary};
`;

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Acerca de la Dra. Claudia Echeverry - Cirujana General</title>
        <meta 
          name="description" 
          content="Aprende sobre la Dra. Claudia Echeverry, una cirujana general con más de 40 años de experiencia en brindar atención quirúrgica compasiva e integral."
        />
      </Head>
      
      <main>
        <AboutContainer>
          <HeaderSection>
            <PageTitle>Dra. Claudia Echeverry</PageTitle>
            <SubTitle>Cirujana General – Pionera, Profesional y Humana</SubTitle>
          </HeaderSection>
          
          <ContentSection>
            <TextColumn>
              <Paragraph>
              La Dra. Claudia Echeverry es una de las primeras mujeres en Colombia en especializarse en cirugía general, una disciplina que durante décadas fue considerada exclusiva para hombres. Su camino no fue fácil. Sin embargo, con determinación, vocación y excelencia, rompió barreras y abrió el camino para muchas otras mujeres en la medicina.
              </Paragraph>
              <Paragraph>
              De ascendencia alemana, la Dra. Echeverry realizó su especialización en Cirugía General en la prestigiosa Universidad del Rosario. Con más de 40 años de experiencia, ha sido reconocida por su alto nivel profesional, su enfoque ético y, sobre todo, por su calidad humana. Su atención se caracteriza por un genuino compromiso con el bienestar integral de sus pacientes, a quienes acompaña con empatía, cercanía y respeto.
              </Paragraph>
              <Paragraph>
              Durante muchos años se desempeñó como cirujana y subgerente en el Hospital Federico Lleras Acosta, donde dejó una huella importante tanto en el ámbito médico como en la gestión hospitalaria. Actualmente, continúa su labor en las instituciones Urocádiz y Medicádiz, brindando atención quirúrgica de excelencia, siempre con un enfoque centrado en el paciente.
              </Paragraph>
              <Paragraph>
              La Dra. Claudia Echeverry es más que una cirujana experta: es una mujer pionera que ha demostrado que la sensibilidad, la fortaleza y la humanidad pueden convivir con la precisión y la exigencia de la cirugía general.
              </Paragraph>
            </TextColumn>
            <ImageColumn>
              <DoctorImage />
            </ImageColumn>
          </ContentSection>
          
          <CredentialsSection>
            <CredentialsTitle>Educación y Credenciales</CredentialsTitle>
            <CredentialsList>
              <CredentialCard>
                <CredentialTitle>Universidad del Rosario</CredentialTitle>
                <CredentialSubtitle>Medicina General</CredentialSubtitle>
                <CredentialDate>1980-1985</CredentialDate>
              </CredentialCard>
              <CredentialCard>
                <CredentialTitle>Hospital Universitario San Ignacio</CredentialTitle>
                <CredentialSubtitle>Residencia en Cirugía General</CredentialSubtitle>
                <CredentialDate>1985-1990</CredentialDate>
              </CredentialCard>
              <CredentialCard>
                <CredentialTitle>Board Certification</CredentialTitle>
                <CredentialSubtitle>American Board of Surgery</CredentialSubtitle>
                <CredentialDate>2012-Present</CredentialDate>
              </CredentialCard>
              <CredentialCard>
                <CredentialTitle>Fellowship</CredentialTitle>
                <CredentialSubtitle>Minimally Invasive Surgery - Cleveland Clinic</CredentialSubtitle>
                <CredentialDate>2012-2014</CredentialDate>
              </CredentialCard>
            </CredentialsList>
          </CredentialsSection>
          
          <section>
            <CredentialsTitle>Filosofía de trabajo</CredentialsTitle>
            <Paragraph>
            La Dra. Claudia Echeverry aborda cada intervención quirúrgica con precisión, responsabilidad y un profundo respeto por la vida del paciente. Su filosofía de trabajo se basa en la atención minuciosa a los detalles, la seguridad en cada procedimiento y la constante actualización de sus conocimientos para aplicar técnicas modernas, menos invasivas y más efectivas.
            </Paragraph>
          </section>
        </AboutContainer>
      </main>
    </>
  );
};

export default AboutPage; 