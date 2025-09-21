import { ScrollReveal } from '@/hooks/useScrollReveal';

const ServicesSection = () => {
  const services = [
    {
      title: "Assessoria jurídica contratual",
      intro: "Previna problemas antes que eles aconteçam.",
      features: [
        "Análise de necessidades e riscos",
        "Participação em negociações",
        "Ajustes contratuais conforme crescimento",
        "Atendimento contínuo (preventivo) ou pontual (dúvidas)"
      ]
    },
    {
      title: "Elaboração contratual",
      intro: "Contratos sob medida que refletem o seu negócio.",
      features: [
        "Reunião inicial para entender sua realidade",
        "Transformação em documentos claros e estratégicos",
        "Mais segurança e acessibilidade para clientes"
      ]
    },
    {
      title: "Revisão contratual",
      intro: "Seu contrato atual pode ficar muito melhor.",
      features: [
        "Revisão cláusula por cláusula",
        "Parecer com riscos e melhorias",
        "Sugestão de novo contrato, se necessário",
        "Aplicação de legal design (linguagem simples, ícones, tabelas)"
      ]
    },
    {
      title: "Aplicação de legal design",
      intro: "Modernize seus documentos jurídicos com clareza e impacto.",
      features: [
        "Contratos, termos, petições e pareceres revisados",
        "Documentos objetivos e acessíveis",
        "Materiais bonitos, claros e profissionais"
      ]
    },
    {
      title: "Registro de marcas no INPI",
      intro: "Garanta a proteção da sua marca.",
      features: [
        "Explicação detalhada sobre o processo",
        "Acompanhamento em todas as etapas",
        "Segurança jurídica no registro"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <ScrollReveal delay={200}>
            <h2 className="font-inria text-3xl lg:text-4xl font-light text-primary mb-6">
              Serviços
              <br />
              <div className="w-12 h-0.5 bg-primary mt-2 mx-auto"></div>
              <span className="text-muted-foreground">Pensados Para Você</span>
            </h2>
          </ScrollReveal>
        </div>

        {/* Services Grid */}
        <div className="space-y-12">
          {/* Primeira linha - 3 colunas */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {services.slice(0, 3).map((service, index) => (
              <ScrollReveal key={index} delay={400 + index * 200}>
                <div className="space-y-6 group">
                  {/* Service Number */}
                  <div className="font-accent text-6xl font-light text-beige-secondary group-hover:text-primary transition-elegant">
                    0{index + 1}
                  </div>

                  {/* Service Content */}
                  <div className="space-y-4">
                    <h3 className="font-inria text-xl font-light text-primary">{service.title}</h3>
                    <p className="font-kumbh text-muted-foreground leading-relaxed">{service.intro}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center font-kumbh text-sm text-muted-foreground">
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

          {/* Segunda linha - 2 colunas centralizadas */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
            {services.slice(3, 5).map((service, index) => (
              <ScrollReveal key={index + 3} delay={1000 + index * 200}>
                <div className="space-y-6 group">
                  {/* Service Number */}
                  <div className="font-accent text-6xl font-light text-beige-secondary group-hover:text-primary transition-elegant">
                    0{index + 4}
                  </div>

                  {/* Service Content */}
                  <div className="space-y-4">
                    <h3 className="font-inria text-xl font-light text-primary">{service.title}</h3>
                    <p className="font-kumbh text-muted-foreground leading-relaxed">{service.intro}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center font-kumbh text-sm text-muted-foreground">
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
        </div>

        {/* CTA */}
        <ScrollReveal delay={1400}>
          <div className="text-center mt-16 lg:mt-20">
            <button
              onClick={() => window.open('https://wa.me/5567999198685?text=Olá! Gostaria de solicitar um orçamento para os serviços jurídicos.', '_blank')}
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