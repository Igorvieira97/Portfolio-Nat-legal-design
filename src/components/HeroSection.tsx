import Foto_Hero_section from '@/assets/Foto_Hero_section.jpg';
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
          
            <div className="flex justify-center">
              <img 
                src={Foto_Hero_section} 
                alt="Foto profissional" 
                className="w-3/4 max-w-sm rounded-lg shadow-lg"
              />
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
                <h1 className="font-inria text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold italic tracking-tight text-primary leading-tight">
                  Estratégias para você criar e empreender com mais liberdade
                </h1>
                <span className="text-muted-foreground block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-inria font-light not-italic">
                  <Typewriter 
                    words={[
                      "Para que você cresça com segurança.",
                      "Para fortalecer a sua identidade.",
                      "Para valorizar o seu negócio.",
                      "Para proteger a sua marca." 
                    ]} /* colocar texto com mais espaço */
                    typeSpeed={120}
                    deleteSpeed={80}
                    delayBetweenWords={3000}
                  />
                </span>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="right" delay={600}>
              <div className="w-16 h-0.5 bg-primary"></div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={800}>
              <p className="font-kumbh text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
                Ofereço soluções jurídicas personalizadas (através dos contratos e registro de marcas), 
                para garantir que a sua empresa cresça com clareza e proteção.
                <br />
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
                  className="font-kumbh bg-primary text-primary-foreground px-6 sm:px-8 py-3 text-xs sm:text-sm tracking-wide transition-elegant hover:bg-primary/90"
                >
                  SOBRE MIM
                </button> {/* botoes da mesma cor */}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;