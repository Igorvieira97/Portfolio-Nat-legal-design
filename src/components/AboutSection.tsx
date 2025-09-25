import { ScrollReveal } from '@/hooks/useScrollReveal';
import Foto_about_section from '@/assets/Foto_about_section.jpg';
import FotoAbout400 from '@/assets/Foto_about_section_400.webp';
import FotoAbout800 from '@/assets/Foto_about_section_800.webp';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-beige-secondary">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Image */}
          <ScrollReveal direction="left" delay={300}>
        <div className="relative order-2 lg:order-1">
          
            <div className="flex justify-center">
              <img 
              src={FotoAbout800}
              srcSet={`${FotoAbout400} 400w, ${FotoAbout800} 800w`}
              sizes="(max-width: 640px) 400px, 800px"
              alt="Foto profissional"
              className="w-full max-w-md h-auto rounded-lg shadow-lg"
              loading="lazy"
              />
            </div>
              
              {/* Quote */}
              <div className="mt-6">
                <blockquote className="font-inria text-center text-muted-foreground italic text-sm">
                  "O que é construído com esforço merece 
                  <br />ser protegido com um trabalho de qualidade"
                </blockquote>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-6">
              <ScrollReveal direction="right" delay={200}>
                <h2 className="font-inria text-3xl lg:text-4xl font-bold italic  text-primary">
                  — Oie, eu sou a Natália
                  <br />
                  <span className="text-muted-foreground font-inria font-light not-italic">Sobre mim</span>
                </h2>
              </ScrollReveal>
            </div>

            <div className="space-y-6 font-kumbh text-muted-foreground leading-relaxed">
              <ScrollReveal direction="right" delay={300}>
                <p>
                  Advogada inscrita na OAB/MS sob o n. 28022, 
                  especializada em Direito Contratual e Propriedade Intelectual, com experiência 
                  em registro de marcas no INPI.
                </p>
              </ScrollReveal>
              
              <ScrollReveal direction="right" delay={400}>
                <p>
                  Acredito que negócios sólidos começam com uma base segura – e é isso o que eu ajudo a construir.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={500}>
                <p>
                  Unindo técnica jurídica e Legal Design, desenvolvo contratos claros e acessíveis que 
                  irão conferir muito mais profissionalismo para as suas relações comerciais.
                </p>
              </ScrollReveal>
              
              <ScrollReveal direction="right" delay={500}>
                <p>
                  Também atuo com o registro de marcas, 
                  garantindo que a identidade e a credibilidade do seu negócio estejam sempre bem resguardadas.
                </p>
              </ScrollReveal>
              
              <ScrollReveal direction="right" delay={600}>
                <p>
                  Meu trabalho vai além de “fazer contratos” ou “registrar marcas”: eu protejo o que você criou, 
                  para que cada detalhe esteja juridicamente assegurado.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={400}>
                <p>
                  Meu objetivo é simples: dar segurança para que você possa crescer com liberdade, 
                  sabendo que o seu negócio estará protegido.
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