import { useState, useEffect } from "react";
import { ScrollReveal } from "@/hooks/useScrollReveal";
import { ChevronLeft, ChevronRight, FileText, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import PDFViewer from "@/components/PDFViewer";

// Carregando imagens dinamicamente das pastas
const proposta1Images = Object.values(
  import.meta.glob("@/assets/Proposta1/*.{png,jpg,jpeg,svg}", {
    eager: true,
    import: "default",
  })
);

const proposta2Images = Object.values(
  import.meta.glob("@/assets/Proposta2/*.{png,jpg,jpeg,svg}", {
    eager: true,
    import: "default",
  })
);

const ProposalsSection = () => {
  const proposals = [
    {
      title: "Proposta de Mentoria",
      images: proposta1Images,
      pdfUrl: "/contract-templates/Proposta_mentoria.pdf",
      pdfName: "Modelo de Proposta mentoria",
    },
    {
      title: "Proposta Contratos e Legal Design",
      images: proposta2Images,
      pdfUrl: "/contract-templates/Proposta_contratos_legal_design.pdf",
      pdfName: "Modelo de Proposta contratos e legal design",
    },
  ];

  return (
    <section id="proposals" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
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
            <h2 className="font-inria text-3xl lg:text-4xl font-bold italic text-primary mb-6">
              Minhas Propostas
            </h2>
          </ScrollReveal>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {proposals.map((proposal, index) => (
            <ScrollReveal key={index} delay={400 + index * 200}>
              <ProposalCard proposal={proposal} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProposalCard = ({ proposal }: { proposal: any }) => {
  const [current, setCurrent] = useState(0);
  const [isPDFOpen, setIsPDFOpen] = useState(false);

  // Detecta mobile
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const handleOpenPDF = () => {
    if (isMobile) {
      window.open(proposal.pdfUrl, "_blank");
    } else {
      setIsPDFOpen(true);
    }
  };

  const prevSlide = () =>
    setCurrent((prev) =>
      prev === 0 ? proposal.images.length - 1 : prev - 1
    );
  const nextSlide = () =>
    setCurrent((prev) =>
      prev === proposal.images.length - 1 ? 0 : prev + 1
    );

  // Slider automático (opcional)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === proposal.images.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [proposal.images.length]);

  return (
    <div className="space-y-6 group">
      {/* Carousel */}
      <div className="relative aspect-[16/9] bg-card rounded-lg overflow-hidden shadow-elegant">
        {proposal.images.map((img: string, idx: number) => (
          <img
            key={idx}
            src={img}
            alt={`${proposal.title} ${idx + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
              idx === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Navegação */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 text-white opacity-80 hover:opacity-100 transition-opacity"
        >
          <ChevronLeft size={28} strokeWidth={1.5} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 text-white opacity-80 hover:opacity-100 transition-opacity"
        >
          <ChevronRight size={28} strokeWidth={1.5} />
        </button>
      </div>

      {/* Info */}
      <div className="space-y-4">
        <h3 className="font-inria text-xl font-light text-primary">
          {proposal.title}
        </h3>
        <p className="font-kumbh text-sm text-muted-foreground">
        </p>
        <p className="font-kumbh text-muted-foreground leading-relaxed text-sm">
          {proposal.description}
        </p>

        {/* Botão PDF */}
        {proposal.pdfUrl && (
          <div className="pt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleOpenPDF}
              className="font-kumbh text-sm transition-smooth group-hover:border-primary/50"
            >
              <FileText className="h-4 w-4 mr-2" />
              <Eye className="h-4 w-4 mr-2" />
              Visualizar Proposta Completa
            </Button>
          </div>
        )}
      </div>

      {/* Hover line */}
      <div className="w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-16"></div>

      {/* PDF Viewer */}
      {!isMobile && proposal.pdfUrl && (
        <PDFViewer
          isOpen={isPDFOpen}
          onClose={() => setIsPDFOpen(false)}
          pdfUrl={proposal.pdfUrl}
          title={proposal.pdfName || `Modelo - ${proposal.title}`}
        />
      )}
    </div>
  );
};

export default ProposalsSection;
