import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import theme from '../styles/theme';
import '../styles/globals.css';

// Create a client for React Query
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Dra. Claudia Echeverry - Cirujana General</title>
          <meta 
            name="description" 
            content="La Dra. Claudia Echeverry ofrece atención quirúrgica de alta calidad con un enfoque centrado en el paciente, utilizando técnicas avanzadas y un trato humano que genera confianza."
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
          <style jsx global>{`
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
          `}</style>
        </Head>

        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp; 