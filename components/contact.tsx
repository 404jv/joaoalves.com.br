import React from 'react';
import { MessageCircle, Mail, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      description: 'joaovictorramalho7@gmail.com',
      action: 'mailto:joaovictorramalho7@gmail.com'
    },
    {
      icon: MapPin,
      title: 'Localização',
      description: 'Todo o Brasil',
      action: null
    },
    {
      icon: Clock,
      title: 'Horário de Atendimento',
      description: 'Seg - Sex: 9h às 18h',
      action: null
    }
  ];

  return (
    <section id="contato" className="section-padding">
      <div className="container-padding">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Vamos trabalhar juntos?
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tem um projeto em mente? Vamos conversar sobre como posso ajudar 
            a transformar sua ideia em realidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Entre em contato</h3>
              <p className="text-muted-foreground leading-relaxed">
                Estou sempre disponível para novos projetos e parcerias. 
                Entre em contato via WhatsApp para conversarmos sobre suas necessidades 
                e como posso ajudar seu negócio a crescer.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.title} className="flex items-start space-x-4 p-4 rounded-xl bg-card border border-border">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-foreground">{info.title}</h4>
                    {info.action ? (
                      <a
                        href={info.action}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.description}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Why Work With Me */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-6 space-y-4">
              <h4 className="font-semibold text-lg">Por que trabalhar comigo?</h4>
              <div className="space-y-3">
                {[
                  'Entrega no prazo acordado',
                  'Comunicação transparente',
                  'Suporte pós-entrega',
                  'Código limpo e documentado'
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="lg:pl-8">
            <div className="bg-card rounded-3xl p-8 border border-border shadow-lg text-center space-y-6">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto">
                <MessageCircle className="h-8 w-8 text-green-600" />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">
                  Pronto para começar?
                </h3>
                <p className="text-muted-foreground">
                  Clique no botão abaixo para iniciar nossa conversa via WhatsApp. 
                  Vou responder o mais rápido possível!
                </p>
              </div>

              <Link
                href="https://wa.me/5544988058073?text=Olá! Gostaria de conversar sobre um projeto."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-2xl transition-colors group"
              >
                <MessageCircle className="mr-3 h-5 w-5" />
                Conversar no WhatsApp
              </Link>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Resposta em até 2 horas durante horário comercial
                </p>
              </div>
            </div>

            {/* Additional CTA */}
            <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl text-center">
              <h4 className="font-semibold mb-2">Consultoria Gratuita</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Não sabe por onde começar? Vamos conversar de forma gratuita 
                para entender suas necessidades.
              </p>
              <Link 
                href={'https://wa.me/5544988058073?text=Olá! Gostaria de conversar sobre um projeto'} 
                className="text-primary font-medium text-sm hover:text-primary-hover transition-colors"
              >
                Agendar conversa →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
