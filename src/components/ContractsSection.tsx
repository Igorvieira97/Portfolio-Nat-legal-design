import { ScrollReveal } from '@/hooks/useScrollReveal';

const ContractsSection = () => {
  const contracts = [
    {
      title: "Projeto Corporativo",
      description: "Sistema de gestão completo desenvolvido para empresa multinacional",
      duration: "6 meses"
    },
    {
      title: "E-commerce Premium",
      description: "Plataforma de vendas online com integração completa",
      duration: "4 meses"
    },
    {
      title: "Aplicativo Mobile",
      description: "App nativo para iOS e Android com mais de 50k downloads",
      duration: "8 meses"
    }
  ];

  return (
    <section id="contracts" className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <ScrollReveal delay={100}>
            <div className="inline-block mb-6">
              <span className="font-kumbh text-sm tracking-widest text-muted-foreground uppercase">
                Trabalhos Realizados
              </span>
              <div className="w-12 h-0.5 bg-primary mt-2 mx-auto"></div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <h2 className="font-inria text-3xl lg:text-4xl font-light text-primary mb-6">
              Meus Contratos
              <br />
              <span className="text-muted-foreground">Em Execução</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <p className="font-kumbh text-lg text-muted-foreground leading-relaxed">
              Projetos atualmente em desenvolvimento, demonstrando nosso 
              compromisso com a excelência e entrega de resultados.
            </p>
          </ScrollReveal>
        </div>

        {/* Videos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {contracts.map((contract, index) => (
            <ScrollReveal key={index} delay={400 + (index * 200)}>
              <div className="space-y-6 group">
                {/* Video Container */}
                <div className="aspect-video bg-card rounded-lg overflow-hidden shadow-elegant">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <div className="w-16 h-16 bg-primary/30 rounded-full flex items-center justify-center mx-auto">
                        <div className="w-6 h-6 bg-primary rounded-full"></div>
                      </div>
                      <p className="font-kumbh text-sm text-muted-foreground">
                        Vídeo do Projeto
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Contract Info */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-inria text-xl font-light text-primary">
                      {contract.title}
                    </h3>
                    <span className="font-kumbh text-sm text-teal-primary bg-primary/10 px-3 py-1 rounded-full">
                      {contract.duration}
                    </span>
                  </div>
                  
                  <p className="font-kumbh text-muted-foreground leading-relaxed">
                    {contract.description}
                  </p>
                </div>
                
                {/* Hover Line */}
                <div className="w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-16"></div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ContractsSection;