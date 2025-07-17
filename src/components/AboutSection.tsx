import { ScrollReveal } from '@/hooks/useScrollReveal';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-beige-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Image */}
          <ScrollReveal direction="left" delay={300}>
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] bg-blue-light shadow-elegant">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <div className="text-center space-y-2">
                    <div className="w-16 h-16 mx-auto bg-muted rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="font-kumbh text-sm">Foto Profissional</p>
                  </div>
                </div>
              </div>
              
              {/* Quote */}
              <div className="mt-6">
                <blockquote className="font-inria text-center text-muted-foreground italic text-sm">
                  "O que é construído com esforço merece ser protegido com um trabalho de qualidade"
                </blockquote>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-6">
              <ScrollReveal direction="right" delay={100}>
                <div className="inline-block">
                  <span className="font-kumbh text-sm tracking-widest text-muted-foreground uppercase">
                    O que me move
                  </span>
                  <div className="w-12 h-0.5 bg-primary mt-2"></div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="right" delay={200}>
                <h2 className="font-inria text-3xl lg:text-4xl font-light text-primary">
                  — Olá, sou um
                  <br />
                  <span className="text-muted-foreground">Profissional Dedicado</span>
                </h2>
              </ScrollReveal>
            </div>

            <div className="space-y-6 font-kumbh text-muted-foreground leading-relaxed">
              <ScrollReveal direction="right" delay={300}>
                <p>
                  Sou especialista em criar soluções personalizadas que fazem a diferença. 
                  Com formação sólida e experiência prática, transformo ideias em realidade 
                  através de um trabalho cuidadoso e detalhado.
                </p>
              </ScrollReveal>
              
              <ScrollReveal direction="right" delay={400}>
                <p>
                  Quem vive da própria paixão sabe que cada projeto carrega não apenas técnica, 
                  mas identidade, história e propósito. Para que seu trabalho alcance todo o 
                  seu potencial, é preciso mais do que talento: é necessário dedicação e visão.
                </p>
              </ScrollReveal>
              
              <ScrollReveal direction="right" delay={500}>
                <p>
                  Acredito que tradição e inovação caminham juntas e que preservar aquilo que 
                  você construiu com tanto esforço é essencial para que sua carreira prospere 
                  sem barreiras.
                </p>
              </ScrollReveal>
              
              <ScrollReveal direction="right" delay={600}>
                <p>
                  Eu ajudo você a garantir que seus projetos sejam claros, eficientes e 
                  alinhados com o crescimento do seu negócio. Com uma abordagem moderna e 
                  acessível, transformo desafios em oportunidades.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="right" delay={700}>
              <div className="pt-4">
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="font-kumbh text-primary text-sm tracking-wide border-b border-primary pb-1 transition-elegant hover:border-primary/60"
                >
                  VAMOS CONVERSAR →
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;