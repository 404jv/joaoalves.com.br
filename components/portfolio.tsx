import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('todos');

  const filters = [
    { id: 'todos', label: 'Todos' },
    { id: 'web', label: 'Web Apps' },
    { id: 'landing', label: 'Landing Pages' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Viação Mourãoense',
      category: 'web',
      description: 'Site para consultar horários e trajetos de transporte público em Goioerê.',
      image: '/prints/lunabus.png',
      tags: ['React', 'Next.js', 'Tailwind CSS', 'PWA'],
      liveUrl: 'https://lunabus.com.br',
      githubUrl: 'https://lunabus.com.br'
    },
    {
      id: 3,
      title: 'GD Consultoria',
      category: 'landing',
      description: 'Landing page de alta conversão para captação de leads de um personal trainer.',
      image: '/prints/gdconsultoria.png',
      tags: ['React', 'CSS', 'Google Analytics'],
      liveUrl: 'https://gdteamconsultoria.com.br',
      githubUrl: 'https://gdteamconsultoria.com.br'
    },
    {
      id: 4,
      title: 'inkPen',
      category: 'web',
      description: 'API de um SaaS para gestão escolar de forma completa.',
      image: '/prints/inkpen.png',
      tags: ['Nest.js', 'PostgreSQL', 'Node.js', 'Google Cloud', 'AWS'],
      liveUrl: 'https://inkpen.com.br',
      githubUrl: 'https://inkpen.com.br'
    },
    {
      id: 6,
      title: 'RacketHub',
      category: 'web',
      description: 'Sistemas para gerenciar clubes de tênis e beach tênis com +700 usuários ativos.',
      image: '/prints/rackethub.png',
      tags: ['TypeScript', 'Hostinger', 'Twilio API'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-muted/30">
      <div className="container-padding">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Meu Portfólio
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi nos últimos anos, cada um com suas próprias características e desafios.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter.id
                  ? 'bg-primary text-primary-foreground shadow-md'
                  : 'bg-card text-muted-foreground hover:text-foreground hover:bg-muted border border-border'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-card rounded-2xl overflow-hidden border border-border card-hover shadow-md"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-primary hover:text-white transition-colors"
                    aria-label="Ver projeto"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-primary hover:text-white transition-colors"
                    aria-label="Ver código"
                  >
                    <Github className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center pt-12">
          <button className="btn-secondary group inline-flex items-center">
            Fale comigo
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
