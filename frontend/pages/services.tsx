import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Image from 'next/image';
import { WHATSAPP_APPOINTMENT_URL } from '../lib/whatsapp';

const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.lg};
`;

const HeaderSection = styled.section`
  padding-bottom: ${props => props.theme.spacing.xl};
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xl};
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

const ServiceSection = styled.section`
  margin-bottom: ${props => props.theme.spacing.xl};
  padding-bottom: ${props => props.theme.spacing.xl};
  border-bottom: 1px solid ${props => props.theme.colors.lightGray};
  scroll-margin-top: 80px;
  
  &:last-child {
    border-bottom: none;
  }
`;

const ServiceHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.lg};
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ServiceIconContainer = styled.div`
  width: 80px;
  height: 80px;
  background-color: rgba(110, 162, 213, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${props => props.theme.spacing.lg};
  flex-shrink: 0;
  
  svg {
    width: 40px;
    height: 40px;
    fill: ${props => props.theme.colors.primary};
  }
  
  @media (max-width: 768px) {
    margin-bottom: ${props => props.theme.spacing.md};
  }
`;

const ServiceTitle = styled.h2`
  margin-bottom: ${props => props.theme.spacing.xs};
  color: ${props => props.theme.colors.secondary};
`;

const ServiceContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${props => props.theme.spacing.xl};
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ServiceDescription = styled.div`
  p {
    margin-bottom: ${props => props.theme.spacing.md};
    line-height: 1.8;
  }
  
  ul {
    margin-bottom: ${props => props.theme.spacing.md};
    padding-left: 20px;
  }
  
  li {
    margin-bottom: ${props => props.theme.spacing.sm};
  }
`;

const ServiceImage = styled.div`
  background-color: ${props => props.theme.colors.lightGray};
  border-radius: ${props => props.theme.borderRadius};
  height: 250px;
  background-size: cover;
  background-position: center;
  box-shadow: ${props => props.theme.shadows.default};
  
  @media (max-width: 768px) {
    height: 200px;
    margin-bottom: ${props => props.theme.spacing.md};
    order: -1;
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 10px 20px;
  border-radius: ${props => props.theme.borderRadius};
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-top: ${props => props.theme.spacing.md};
  
  &:hover {
    background-color: ${props => props.theme.colors.primary};
    opacity: 0.9;
  }
`;

const ServicesPage = () => {
  return (
    <>
      <Head>
        <title>Nuestros Servicios - Dra. Claudia Echeverry</title>
        <meta 
          name="description" 
          content="Explora el amplio rango de procedimientos quirúrgicos ofrecidos por la Dra. Claudia Echeverry, incluyendo cirugía general, técnicas minimamente invasivas y tratamientos especializados."
        />
      </Head>
      
      <main>
        <ServicesContainer>
          <HeaderSection>
            <PageTitle>Nuestros Servicios</PageTitle>
            <PageDescription>
            Con un enfoque centrado en el paciente, la Dra. Claudia Echeverry brinda servicios quirúrgicos especializados, combinando experiencia médica, tecnología avanzada y un trato humano que genera confianza.
            </PageDescription>
          </HeaderSection>
          
          <ServiceSection id="general-surgery">
            <ServiceHeader>
              <ServiceIconContainer>
                <svg viewBox="0 0 24 24">
                  <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14M19,9V7H21V9H19M19,13V11H21V13H19M17,9V7H15V9H17M7,9V7H9V9H7M17,13V11H15V13H17M7,13V11H9V13H7Z" />
                </svg>
              </ServiceIconContainer>
              <div>
                <ServiceTitle>Cirugía General</ServiceTitle>
                <p>Cuidado quirúrgico integral para una amplia gama de condiciones</p>
              </div>
            </ServiceHeader>
            
            <ServiceContent>
              <ServiceDescription>
                <p>
                  La cirugía general abarca un amplio espectro de procedimientos que se enfocan principalmente en el área abdominal, 
                  incluyendo el estómago, intestinos, vesícula biliar, hígado y otros órganos relacionados. La Dra. Echeverry 
                  ofrece un cuidado quirúrgico integral con un enfoque en lograr los mejores resultados posibles, mientras 
                  prioriza la seguridad y el bienestar del paciente.
                </p>
                <p>
                  Como cirujana general altamente experta, la Dra. Echeverry ha realizado miles de procedimientos 
                  y se mantiene al frente de las avances quirúrgicos para ofrecer las mejores opciones de tratamiento.
                </p>
                <p><strong>Algunos procedimientos de cirugía general incluyen:</strong></p>
                <ul>
                  <li>Apendicectomía (remoción de la apendicitis)</li>
                  <li>Cholecystectomía (remoción de la vesícula biliar)</li>
                  <li>Reparación de hernias (inguinal, umbilical, incisional)</li>
                  <li>Cirugía de colon y recto</li>
                  <li>Cirugía gastrointestinal</li>
                  <li>Procedimientos hepáticos y pancreáticos</li>
                  <li>Cirugía de mama</li>
                  <li>Cirugía de tiroides y paratiroides</li>
                </ul>
                <CTAButton
                  href={WHATSAPP_APPOINTMENT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Programar una consulta
                </CTAButton>
              </ServiceDescription>
              <ServiceImage style={{ backgroundImage: 'url("/general-surgery.jpg")' }} />
            </ServiceContent>
          </ServiceSection>
          
          <ServiceSection id="minimally-invasive">
            <ServiceHeader>
              <ServiceIconContainer>
                <svg viewBox="0 0 24 24">
                  <path d="M12.5 3C17.15 3 21.08 6.03 22.47 10.22L20.95 11C19.84 7.74 16.68 5.5 13 5.5C10.08 5.5 7.53 6.96 6.04 9.32L7.5 10.5H2V5L4.09 6.8C6.07 4.45 9.39 3 13 3H12.5M21 13V18L18.91 16.2C16.93 18.55 13.59 20 10 20C5.35 20 1.39 16.97 0 12.78L1.55 12C2.66 15.26 5.82 17.5 9.5 17.5C12.42 17.5 14.97 16.04 16.46 13.68L15 12.5H20.5L21 13Z" />
                </svg>
              </ServiceIconContainer>
              <div>
                <ServiceTitle>Cirugía Minimamente Invasiva</ServiceTitle>
                <p>Técnicas avanzadas con incisiones más pequeñas para una recuperación más rápida</p>
              </div>
            </ServiceHeader>
            
            <ServiceContent>
              <ServiceDescription>
                <p>
                  La cirugía minimamente invasiva representa un avance significativo en la técnica quirúrgica, permitiendo 
                  realizar procedimientos a través de incisiones pequeñas en lugar de los mayores cortes requeridos 
                  en la cirugía abierta tradicional. Dra. Echeverry se especializa en estas enfoques avanzados, que ofrecen 
                  numerosos beneficios para los pacientes.
                </p>
                <p>
                  Utilizando instrumentos especializados y cámaras, las procedimientos minimamente invasivos pueden lograr los mismos 
                  objetivos quirúrgicos mientras reduce el trauma a los tejidos del cuerpo, lo que resulta en menos dolor, 
                  estancias en el hospital más cortas, tiempos de recuperación más rápidos y cicatrices mínimas.
                </p>
                <p><strong>Beneficios clave de la cirugía minimamente invasiva:</strong></p>
                <ul>
                  <li>Incisiones más pequeñas (típicamente 0.5-1 cm)</li>
                  <li>Menor dolor postoperatorio</li>
                  <li>Shorter hospital stay</li>
                  <li>Faster return to normal activities</li>
                  <li>Lower risk of infection</li>
                  <li>Minimal scarring</li>
                  <li>Less internal scarring and adhesions</li>
                  <li>Reduced blood loss</li>
                </ul>
                <CTAButton
                  href={WHATSAPP_APPOINTMENT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Programar una consulta
                </CTAButton>
              </ServiceDescription>
              <ServiceImage style={{ backgroundImage: 'url("/minimally-invasive.jpg")' }} />
            </ServiceContent>
          </ServiceSection>
          
          <ServiceSection id="laparoscopic">
            <ServiceHeader>
              <ServiceIconContainer>
                <svg viewBox="0 0 24 24">
                  <path d="M2,3H5.5L8.5,7L6.5,9C7.6,11.5 9.5,13.4 12,14.5L14,12.5L18,15.5V19C18,19.6 17.6,20 17,20C12.4,20 6.6,16.3 3.7,9.8C2.6,7.4 2,5.8 2,5C2,4.4 2.4,4 3,4V3M17,3A2,2 0 0,1 19,5A2,2 0 0,1 17,7A2,2 0 0,1 15,5A2,2 0 0,1 17,3M17,9A4,4 0 0,0 21,5A4,4 0 0,0 17,1A4,4 0 0,0 13,5A4,4 0 0,0 17,9Z" />
                </svg>
              </ServiceIconContainer>
              <div>
                <ServiceTitle>Cirugía Laparoscópica</ServiceTitle>
                <p>Tratamiento quirúrgico preciso con incisiones pequeñas y guía por cámara</p>
              </div>
            </ServiceHeader>
            
            <ServiceContent>
              <ServiceDescription>
                <p>
                  La cirugía laparoscópica es un tipo específico de técnica minimamente invasiva que utiliza un tubo delgado, 
                  óptico-fibro, con una cámara (laparoscopio) para visualizar el área quirúrgica. La Dra. Echeverry 
                  tiene una experiencia extensa en procedimientos laparoscópicos, lo que le permite realizar operaciones 
                  complejas a través de varias pequeñas incisiones en lugar de un solo gran corte.
                </p>
                <p>
                  Durante la cirugía laparoscópica, el abdomen se infla con dióxido de carbono para crear 
                  espacio para el cirujano para trabajar. El laparoscopio transmite imágenes detalladas a monitores 
                  de alta definición en la sala de operaciones, proporcionando una excelente visualización del campo quirúrgico.
                </p>
                <p><strong>Algunos procedimientos de cirugía laparoscópica incluyen:</strong></p>
                <ul>
                  <li>Cholecystectomía laparoscópica (remoción de la vesícula biliar)</li>
                  <li>Apendicectomía laparoscópica</li>
                  <li>Reparación de hernias laparoscópicas</li>
                  <li>Resección de colon laparoscópica</li>
                  <li>Cirugía anti-reflujo laparoscópica</li>
                  <li>Procedimientos laparoscópicos de bariatricia (pérdida de peso)</li>
                  <li>Diagnóstico laparoscópico</li>
                </ul>
                <CTAButton
                  href={WHATSAPP_APPOINTMENT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Programar una consulta
                </CTAButton>
              </ServiceDescription>
              <ServiceImage style={{ backgroundImage: 'url("/laparoscopic.jpg")' }} />
            </ServiceContent>
          </ServiceSection>
          
          <ServiceSection id="hernia">
            <ServiceHeader>
              <ServiceIconContainer>
                <svg viewBox="0 0 24 24">
                  <path d="M19,3C20.11,3 21,3.9 21,5V9.17L19.83,8H19V5H5V19H9V21H5C3.9,21 3,20.11 3,19V5C3,3.9 3.9,3 5,3H19M9,7H13A3,3 0 0,1 16,10V14A3,3 0 0,1 13,17H9V7M11,9V15H13A1,1 0 0,0 14,14V10A1,1 0 0,0 13,9H11M14,18V20H16V22H14A2,2 0 0,1 12,20V18H14M21.7,13.35L20.7,14.35L18.65,12.35L19.65,11.35C19.85,11.14 20.19,11.13 20.42,11.35L21.7,12.63C21.89,12.83 21.89,13.15 21.7,13.35M12,18.94L18.07,12.88L20.12,14.88L14.06,21H12V18.94Z" />
                </svg>
              </ServiceIconContainer>
              <div>
                <ServiceTitle>Reparación de Hernias</ServiceTitle>
                <p>Tratamiento experto para todas las hernias usando técnicas avanzadas</p>
              </div>
            </ServiceHeader>
            
            <ServiceContent>
              <ServiceDescription>
                <p>
                  Una hernia ocurre cuando un órgano o tejido se empuja a través de un área débil en el tejido 
                  circundante. Las hernias son comunes y pueden desarrollarse en diversas áreas del cuerpo, 
                  principalmente en el abdomen. La Dra. Echeverry se especializa en el diagnóstico y tratamiento 
                  de todas las hernias, ofreciendo opciones de reparación abierta y minimamente invasiva.
                </p>
                <p>
                  La cirugía de reparación de hernias tiene como objetivo devolver el tejido desplazado a su ubicación 
                  correcta y reforzar el área débil para prevenir la recurrencia. La Dra. Echeverry emplea las últimas 
                  técnicas, incluyendo el uso de materiales avanzados de malla cuando sea apropiado, para garantizar 
                  resultados óptimos y durabilidad.
                </p>
                <p><strong>Tipos de hernias tratadas:</strong></p>
                <ul>
                  <li>Hernias inguinales (groin)</li>
                  <li>Hernias femorales (muslo superior)</li>
                  <li>Hernias umbilicales (cerca del ombligo)</li>
                  <li>Hernias incisionales (en un sitio quirúrgico anterior)</li>
                  <li>Hernias hiatales (estómago superior)</li>
                  <li>Hernias ventrales (pared abdominal)</li>
                  <li>Hernias deportivas</li>
                </ul>
                <CTAButton
                  href={WHATSAPP_APPOINTMENT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Programar una consulta
                </CTAButton>
              </ServiceDescription>
              <ServiceImage style={{ backgroundImage: 'url("/hernia.jpg")' }} />
            </ServiceContent>
          </ServiceSection>
          
          <ServiceSection id="gallbladder">
            <ServiceHeader>
              <ServiceIconContainer>
                <svg viewBox="0 0 24 24">
                  <path d="M10.5,15.97L10.91,18.41C10.65,18.55 10.23,18.68 9.67,18.8C9.1,18.93 8.43,19 7.66,19C5.45,18.96 3.79,18.3 2.68,17.04C1.56,15.77 1,14.16 1,12.21C1.05,9.9 1.72,8.13 3,6.89C4.32,5.64 5.96,5 7.94,5C8.69,5 9.34,5.07 9.88,5.19C10.42,5.31 10.82,5.44 11.08,5.59L10.5,8.08L9.44,7.74C9.04,7.64 8.58,7.59 8.05,7.59C6.89,7.58 5.93,7.95 5.18,8.69C4.42,9.42 4.03,10.54 4,12.03C4,13.39 4.37,14.45 5.08,15.23C5.79,16 6.79,16.4 8.07,16.41L9.4,16.29C9.83,16.21 10.19,16.1 10.5,15.97M11,11H13V2H11V11M12,22C13.1,22 14,21.1 14,20C14,19.62 13.9,19.27 13.71,18.97L12,15L10.29,18.97C10.1,19.27 10,19.62 10,20A2,2 0 0,0 12,22Z" />
                </svg>
              </ServiceIconContainer>
              <div>
                <ServiceTitle>Cirugía de la Vesícula Biliar</ServiceTitle>
                <p>Tratamiento efectivo para las enfermedades de la vesícula biliar</p>
              </div>
            </ServiceHeader>
            
            <ServiceContent>
              <ServiceDescription>
                <p>
                  La cirugía de la vesícula biliar, o cholecistectomía, es la remoción de la vesícula biliar, 
                  un pequeño órgano ubicado debajo del hígado que almacena bilis. Este procedimiento se realiza 
                  principalmente para tratar las piedras biliares, pero también puede ser necesario para otras 
                  condiciones de la vesícula biliar como la inflamación (cholecistitis) o los polipos.
                </p>
                <p>
                  La Dra. Echeverry se especializa en la cirugía laparoscópica de la vesícula biliar, un enfoque 
                  minimamente invasivo que permite la remoción de la vesícula biliar a través de varias pequeñas incisiones. 
                  Este enfoque resulta en menos dolor, una recuperación más rápida y cicatrices mínimas en comparación 
                  con la cirugía abierta tradicional.
                </p>
                <p><strong>Condiciones que pueden requerir cirugía de la vesícula biliar:</strong></p>
                <ul>
                  <li>Piedras biliares causando dolor (colico biliar)</li>
                  <li>Cholecistitis aguda o crónica (inflamación)</li>
                  <li>Pancreatitis biliar</li>
                  <li>Polipos de la vesícula biliar</li>
                  <li>Dyskinesia de la vesícula biliar (función deficiente)</li>
                  <li>Dyskinesia biliar</li>
                  <li>Vesícula biliar de porcelana</li>
                </ul>
                <CTAButton
                  href={WHATSAPP_APPOINTMENT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Programar una consulta
                </CTAButton>
              </ServiceDescription>
              <ServiceImage style={{ backgroundImage: 'url("/gallbladder.jpg")' }} />
            </ServiceContent>
          </ServiceSection>
        </ServicesContainer>
      </main>
    </>
  );
};

export default ServicesPage; 