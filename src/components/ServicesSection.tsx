import { ScrollReveal } from '@/hooks/useScrollReveal';

const ServicesSection = () => {
  const services = [
    {
      title: "Consultoria Estratégica",
      description: "Análise completa das suas necessidades e desenvolvimento de estratégias personalizadas para alcançar seus objetivos.",
      features: ["Análise de mercado", "Planejamento estratégico", "Consultoria especializada"]
    },
    {
      title: "Desenvolvimento de Projetos",
      description: "Criação de soluções sob medida, desde a concepção até a implementação, sempre focando na qualidade e eficiência.",
      features: ["Projetos personalizados", "Acompanhamento completo", "Suporte contínuo"]
    },
    {
      title: "Otimização de Processos",
      description: "Melhoria dos seus processos existentes para aumentar a produtividade e reduzir custos operacionais.",
      features: ["Análise de processos", "Implementação de melhorias", "Treinamento de equipes"]
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <ScrollReveal delay={100}>
            <div className="inline-block mb-6">
              <span className="font-kumbh text-sm tracking-widest text-muted-foreground uppercase">
                Serviços
              </span>
              <div className="w-12 h-0.5 bg-primary mt-2 mx-auto"></div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <h2 className="font-inria text-3xl lg:text-4xl font-light text-primary mb-6">
              Soluções Profissionais
              <br />
              <span className="text-muted-foreground">Feitas Para Você</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <p className="font-kumbh text-lg text-muted-foreground leading-relaxed">
              Cada serviço é desenvolvido pensando nas suas necessidades específicas, 
              garantindo resultados que fazem a diferença no seu negócio.
            </p>
          </ScrollReveal>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={400 + (index * 200)}>
              <div className="space-y-6 group">
                {/* Service Number */}
                <div className="font-accent text-6xl font-light text-beige-secondary group-hover:text-primary transition-elegant">
                  0{index + 1}
                </div>
                
                {/* Service Content */}
                <div className="space-y-4">
                  <h3 className="font-inria text-xl font-light text-primary">
                    {service.title}
                  </h3>
                  
                  <p className="font-kumbh text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center font-kumbh text-sm text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Hover Line */}
                <div className="w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-16"></div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={1000}>
          <div className="text-center mt-16 lg:mt-20">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-kumbh border border-primary text-primary px-12 py-4 text-sm tracking-wide transition-elegant hover:bg-primary hover:text-primary-foreground"
            >
              SOLICITAR ORÇAMENTO
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ServicesSection;