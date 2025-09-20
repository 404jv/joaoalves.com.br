import About from '@/components/about';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Navbar from '@/components/nav-bar';
import Portfolio from '@/components/portfolio';
import Services from '@/components/services';
import { Inter } from 'next/font/google';
import React from 'react';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const Index = () => {
  return (
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
  );
};

export default Index;
