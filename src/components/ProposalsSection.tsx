import { ScrollReveal } from '@/hooks/useScrollReveal';

const ProposalsSection = () => {
  const proposals = [
    {
      title: "Sistema de CRM",
      client: "Tech Solutions Ltd.",
      description: "Desenvolvimento de sistema completo de gestão de relacionamento com clientes",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "E-commerce Fashion",
      client: "Boutique Elegance",
      description: "Loja virtual premium com sistema de pagamento e gestão de estoque",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "App de Delivery",
      client: "Fast Food Chain",
      description: "Aplicativo mobile para pedidos online com rastreamento em tempo real",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Portal Corporativo",
      client: "Empresa Industrial",
      description: "Intranet corporativa com módulos de RH, financeiro e operacional",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Site Institucional",
      client: "ONG Ambiental",
      description: "Website responsivo com área administrativa e sistema de doações",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Plataforma EAD",
      client: "Instituto de Ensino",
      description: "Sistema completo de ensino à distância com videoaulas e avaliações",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="proposals" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <ScrollReveal delay={100}>
            <div className="inline-block mb-6">
              <span className="font-kumbh text-sm tracking-widest text-muted-foreground uppercase">
                Oportunidades
              </span>
              <div className="w-12 h-0.5 bg-primary mt-2 mx-auto"></div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <h2 className="font-inria text-3xl lg:text-4xl font-light text-primary mb-6">
              Minhas Propostas
              <br />
              <span className="text-muted-foreground">Em Andamento</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={300}>
            <p className="font-kumbh text-lg text-muted-foreground leading-relaxed">
              Projetos propostos e em diferentes estágios de aprovação, 
              representando oportunidades de crescimento e parcerias estratégicas.
            </p>
          </ScrollReveal>
        </div>

        {/* Proposals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {proposals.map((proposal, index) => (
            <ScrollReveal key={index} delay={400 + (index * 150)}>
              <div className="bg-card shadow-elegant hover:shadow-medium transition-elegant group border border-border/50 overflow-hidden">
                {/* Image */}
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={proposal.image} 
                    alt={proposal.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Content */}
                <div className="p-8">
                  {/* Number Badge */}
                  <div className="flex justify-start items-start mb-6">
                    <div className="font-accent text-4xl font-light text-beige-secondary group-hover:text-primary transition-elegant">
                      0{index + 1}
                    </div>
                  </div>
                  
                  {/* Proposal Content */}
                  <div className="space-y-4">
                    <h3 className="font-inria text-xl font-light text-primary group-hover:text-teal-primary transition-elegant">
                      {proposal.title}
                    </h3>
                    
                    <p className="font-kumbh text-sm text-muted-foreground">
                      <strong>Cliente:</strong> {proposal.client}
                    </p>
                    
                    <p className="font-kumbh text-muted-foreground leading-relaxed text-sm">
                      {proposal.description}
                    </p>
                  </div>
                  
                  {/* Action Button */}
                  <div className="mt-6 pt-4 border-t border-border/30">
                    <button className="w-full font-kumbh text-sm text-primary hover:text-primary-foreground hover:bg-primary border border-primary/30 hover:border-primary py-2 px-4 transition-elegant">
                      Ver Detalhes
                    </button>
                  </div>
                  
                  {/* Hover Line */}
                  <div className="w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full mt-4"></div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>


      </div>
    </section>
  );
};

export default ProposalsSection;