import professionalPortrait from '@/assets/professional-portrait.jpg';
import { ScrollReveal } from '@/hooks/useScrollReveal';
import { Typewriter } from '@/hooks/useTypewriter';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-background pt-20 lg:pt-0">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Image */}
          <ScrollReveal direction="left" delay={300}>
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] max-w-sm sm:max-w-md lg:max-w-md mx-auto bg-blue-light shadow-elegant">
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
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-beige-secondary -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-blue-light -z-10"></div>
            </div>
          </ScrollReveal>

          {/* Right Content */}
          <div className="space-y-6 sm:space-y-8 lg:pl-8 order-1 lg:order-2">
            <div className="space-y-4 sm:space-y-6">
              <ScrollReveal direction="right" delay={200}>
                <h1 className="font-inria text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light tracking-tight text-primary leading-tight">
                  Criados sob medida
                  <br />
                  <span className="text-muted-foreground">
                    <Typewriter 
                      words={[
                        "para sua realidade.",
                        "para seu negócio.",
                        "para seus objetivos.",
                        "para seu sucesso."
                      ]}
                      typeSpeed={120}
                      deleteSpeed={80}
                      delayBetweenWords={3000}
                    />
                  </span>
                </h1>
              </ScrollReveal>
              
              <ScrollReveal direction="right" delay={400}>
                <h2 className="font-accent text-xl sm:text-2xl lg:text-3xl text-teal-primary">
                  Visual intuitivo,<br />
                  moderno e eficiente.
                </h2>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="right" delay={600}>
              <div className="w-16 h-0.5 bg-primary"></div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={800}>
              <p className="font-kumbh text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
                Soluções personalizadas que combinam expertise técnica com design 
                elegante, criando experiências que conectam com sua audiência de 
                forma autêntica e profissional.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={1000}>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 sm:space-x-0">
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="font-kumbh bg-primary text-primary-foreground px-6 sm:px-8 py-3 text-xs sm:text-sm tracking-wide transition-elegant hover:bg-primary/90"
                >
                  CONHEÇA OS SERVIÇOS
                </button>
                
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="font-kumbh border border-primary text-primary px-6 sm:px-8 py-3 text-xs sm:text-sm tracking-wide transition-elegant hover:bg-primary hover:text-primary-foreground"
                >
                  SOBRE MIM
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;