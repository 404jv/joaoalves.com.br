import About from '@/components/about';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Navbar from '@/components/nav-bar';
import Portfolio from '@/components/portfolio';
import Services from '@/components/services';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import React from 'react';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const Index = () => {
  return (
    <>
      <Head>
        <title>Desenvolvimento de Sites e Software em Umuarama | João Alves Dev</title>

        <meta
          name="description"
          content="Desenvolvimento de sites, sistemas e softwares personalizados em Umuarama, Maringá, Goioerê e Cascavel. Especialista em soluções web modernas com React, Next.js e Node.js."
        />

        <meta
          name="keywords"
          content="desenvolvimento de sites em Umuarama, software Umuarama, criação de sites em Goioerê, sites Maringá, sistemas Cascavel, programador Umuarama, desenvolvedor web Paraná"
        />

        <meta name="author" content="João Alves" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="pt-BR" />
        <meta charSet="utf-8" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Desenvolvimento de Sites e Software em Umuarama | João Alves Dev" />
        <meta
          property="og:description"
          content="Criação de sites e sistemas sob medida em Umuarama, Maringá, Goioerê e Cascavel."
        />
        <meta property="og:image" content="https://lp.joaoalves.com.br/imagem-preview.jpg" />
        <meta property="og:url" content="https://lp.joaoalves.com.br" />
        <meta property="og:site_name" content="João Alves Dev" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Desenvolvimento de Sites e Software em Umuarama | João Alves Dev" />
        <meta
          name="twitter:description"
          content="Desenvolvimento web e software profissional em Umuarama, Maringá, Goioerê e Cascavel."
        />
        <meta name="twitter:image" content="https://lp.joaoalves.com.br/imagem-preview.jpg" />

        {/* Canonical */}
        <link rel="canonical" href="https://lp.joaoalves.com.br" />
      </Head>
      <div className={`min-h-screen ${inter.className}`}>
        <Navbar />
        <main className='pt-16 md:pt-4'>
          <Hero /> 
          <About />
          <Services />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
