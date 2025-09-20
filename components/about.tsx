import React from 'react';
import { CheckCircle, Heart, Target, Users } from 'lucide-react';
import Image from 'next/image';

const About = () => {
  const skills = [
    'React & Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'PostgreSQL',
    'Git & GitHub'
  ];

  const values = [
    {
      icon: Target,
      title: 'Foco em Resultados',
      description: 'Cada projeto é desenvolvido pensando nos objetivos do cliente e no ROI.'
    },
    {
      icon: Heart,
      title: 'Paixão por Código',
      description: 'Amo o que faço e isso se reflete na qualidade das entregas.'
    },
    {
      icon: Users,
      title: 'Comunicação Clara',
      description: 'Mantenho o cliente sempre informado sobre o progresso do projeto.'
    }
  ];

  return (
    <section id="sobre" className="section-padding bg-muted/30">
      <div className="container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image/Avatar Section */}
          <div className="relative">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl transform rotate-3"></div>
              
              {/* Avatar container */}
              <div className="relative bg-card rounded-3xl p-4 shadow-lg border border-border">
                <div className="aspect-square w-full max-w-sm mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                      <Image
                        width={200}
                        height={200}
                        className='  object-cover rounded-2xl'
                        alt="Minha foto"
                        src={'/eu.jpg'}
                      />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Sobre mim
              </h2>
              <div className="w-12 h-1 bg-primary rounded-full"></div>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Olá! Sou João, desenvolvedor web apaixonado por criar soluções digitais 
                que fazem a diferença. Com mais de 5 anos de experiência, já ajudei 
                dezenas de empresas a alcançarem seus objetivos através da tecnologia.
              </p>
              
              <p>
                Minha especialidade está no desenvolvimento de aplicações web modernas, 
                responsivas e otimizadas. Trabalho principalmente com React, Next.js e 
                tecnologias do ecossistema JavaScript, sempre focado em entregar a 
                melhor experiência possível para o usuário final.
              </p>

              <p>
                Quando não estou codando, gosto de estudar novas tecnologias, 
                compartilhar conhecimento através do meu canal no YouTube e 
                contribuir com projetos open source.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Principais tecnologias:</h3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Values */}
            <div className="space-y-6 pt-4">
              {values.map((value) => (
                <div key={value.title} className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <value.icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-foreground">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
