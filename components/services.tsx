import React from 'react';
import { Globe, ShoppingCart, Smartphone, Cog, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Desenvolvimento Web',
      description: 'Sites institucionais, landing pages e aplicações web personalizadas com foco em performance e SEO.',
      features: ['Design responsivo', 'Otimização SEO', 'Performance otimizada', 'Código limpo'],
      price: 'A partir de R$ 2.500'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Lojas virtuais completas com sistema de pagamento, gestão de produtos e painel administrativo.',
      features: ['Integração com pagamentos', 'Gestão de estoque', 'Painel admin', 'Mobile-first'],
      price: 'A partir de R$ 5.000'
    },
    {
      icon: Smartphone,
      title: 'Landing Pages',
      description: 'Páginas de conversão otimizadas para campanhas de marketing digital e captação de leads.',
      features: ['Alta conversão', 'Carregamento rápido', 'Integração com CRM', 'A/B Testing'],
      price: 'A partir de R$ 1.500'
    },
    {
      icon: Cog,
      title: 'Integrações',
      description: 'Desenvolvimento de APIs, integrações com sistemas externos e automatizações personalizadas.',
      features: ['APIs REST', 'Webhooks', 'Automações', 'Sincronização de dados'],
      price: 'Sob consulta'
    }
  ];

  return (
    <section id="servicos" className="section-padding">
      <div className="container-padding">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Serviços que ofereço
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas para suas necessidades digitais, desde conceito até a entrega final.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-2xl p-8 border border-border card-hover shadow-md hover:border-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-6">
                {/* Header */}
                <div className="space-y-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center space-x-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price and CTA */}
                <div className="pt-4 border-t border-border space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-primary text-lg">
                      {service.price}
                    </span>
                    <button className="text-primary hover:text-primary-hover font-medium text-sm inline-flex items-center transition-colors group">
                      Saber mais
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center pt-16">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 lg:p-12">
            <div className="space-y-6 max-w-3xl mx-auto">
              <h3 className="text-2xl lg:text-3xl font-bold">
                Não encontrou o que procura?
              </h3>
              <p className="text-muted-foreground text-lg">
                Cada projeto é único. Vamos conversar sobre suas necessidades 
                específicas e criar uma solução personalizada para seu negócio.
              </p>
              <button 
                onClick={() => {
                  const element = document.querySelector('#contato');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-primary"
              >
                Vamos conversar sobre seu projeto
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
