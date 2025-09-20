import React from 'react';
import { Github, Linkedin, Instagram, Heart, Youtube } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: 'https://www.youtube.com/@joaoalves_dev', icon: Youtube, label: 'YouTube' },
    { href: 'https://www.instagram.com/joaoalves.dev', icon: Instagram, label: 'Instagram' },
    { href: 'https://www.linkedin.com/in/404jv/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://github.com/404jv', icon: Github, label: 'GitHub' },
  ];

  const quickLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#portfolio', label: 'Portfólio' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#contato', label: 'Contato' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container-padding">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">João Alves</h3>
              <p className="text-background/70 text-sm leading-relaxed">
                Desenvolvedor freelancer especializado em criar soluções web 
                modernas e eficientes para empresas de todos os tamanhos.
              </p>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-background/10 rounded-xl flex items-center justify-center text-background/70 hover:bg-primary hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Links Rápidos</h4>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="block text-background/70 hover:text-background transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Serviços</h4>
            <div className="space-y-3">
              {[
                'Desenvolvimento Web',
                'Landing Pages',
                'E-commerce',
                'Integrações',
                'Consultoria'
              ].map((service) => (
                <div
                  key={service}
                  className="block text-background/70 text-sm"
                >
                  {service}
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="text-background/70">
                <div className="font-medium text-background">Email</div>
                <a 
                  href="mailto:joaovictorramalho7@gmail.com"
                  className="hover:text-background transition-colors"
                >
                  joaovictorramalho7@gmail.com
                </a>
              </div>
              
              <div className="text-background/70">
                <div className="font-medium text-background">WhatsApp</div>
                <a 
                  href="https://wa.me/5544988058073"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-background transition-colors"
                >
                  +55 (44) 98805-8073
                </a>
              </div>
              
              <div className="text-background/70">
                <div className="font-medium text-background">Localização</div>
                Todo Brasil
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-background/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-background/70">
              <span>© {currentYear} João Alves. Todos os direitos reservados.</span>
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-background/70">
              <span>Feito com</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>e muito café</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
