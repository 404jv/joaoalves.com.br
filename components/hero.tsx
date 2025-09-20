import React from 'react';
import { ArrowRight, Code, Zap } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      <div className="container-padding w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm font-medium text-primary">
                <Zap className="h-4 w-4" />
                <span>Disponível para freelas</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Desenvolvedor{' '}
                <span className="text-primary">Freelancer</span>{' '}
                especializado em{' '}
                <span className="relative text-5xl">
                  resolver problemas
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full"></div>
                </span>{' '}
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Transformo suas ideias em aplicações web modernas e funcionais. 
                Especializado em React, Next.js e desenvolvimento full-stack com 
                foco em performance e experiência do usuário.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="btn-primary group inline-flex items-center justify-center"
              >
                Vamos trabalhar juntos
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <a 
                href="#portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector('#portfolio');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-secondary inline-flex items-center justify-center"
              >
                Ver meu trabalho
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Projetos entregues</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Anos de experiência</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Clientes satisfeitos</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative lg:pl-12 animate-slide-in-left">
            <div className="relative">
              {/* Background decorations */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
              
              {/* Main illustration area */}
              <div className="relative bg-card rounded-3xl p-8 shadow-lg border border-border">
                <div className="flex items-center justify-center h-64 lg:h-80">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                      <Code className="h-10 w-10 text-primary" />
                    </div>
                    <div className="space-y-2 gap-2">
                      <h3 className="font-semibold text-lg">Clean Code</h3>
                      <p className="text-muted-foreground text-sm">
                        Código limpo, otimizado e fácil de manter
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-12 bg-gradient-to-b from-primary to-transparent rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
