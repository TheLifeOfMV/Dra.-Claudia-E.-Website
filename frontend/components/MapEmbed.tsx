import React from 'react';
import styled from 'styled-components';

interface MapEmbedProps {
  apiKey?: string;
  address: string;
  height?: string;
}

const MapContainer = styled.div<{ height: string }>`
  width: 100%;
  height: ${props => props.height};
  border-radius: ${props => props.theme.borderRadius};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.default};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const IframeWrapper = styled.div`
  width: 100%;
  height: 100%;
  
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const FallbackMap = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.lightGray};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${props => props.theme.spacing.lg};
  text-align: center;
`;

const FallbackIcon = styled.div`
  margin-bottom: ${props => props.theme.spacing.md};
  
  svg {
    width: 48px;
    height: 48px;
    fill: ${props => props.theme.colors.textGray};
  }
`;

const FallbackText = styled.p`
  color: ${props => props.theme.colors.textGray};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const FallbackButton = styled.a`
  display: inline-block;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 8px 16px;
  border-radius: ${props => props.theme.borderRadius};
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #16a085;
  }
`;

const MapEmbed: React.FC<MapEmbedProps> = ({ 
  apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, 
  address,
  height = '400px'
}) => {
  const encodedAddress = encodeURIComponent(address);
  const hasApiKey = apiKey && apiKey.length > 0;
  
  return (
    <MapContainer height={height}>
      {hasApiKey ? (
        <IframeWrapper>
          <iframe
            src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodedAddress}`}
            title="Google Maps"
            aria-label="Google Maps showing the location of our office"
            loading="lazy"
            allowFullScreen
          />
        </IframeWrapper>
      ) : (
        <FallbackMap>
          <FallbackIcon>
            <svg viewBox="0 0 24 24">
              <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
            </svg>
          </FallbackIcon>
          <FallbackText>
            <strong>Nuestra ubicación:</strong><br />
            {address}
          </FallbackText>
          <FallbackButton 
            href={`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            Open in Google Maps
          </FallbackButton>
        </FallbackMap>
      )}
    </MapContainer>
  );
};

export default MapEmbed; 