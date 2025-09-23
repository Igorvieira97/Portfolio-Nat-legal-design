import { useState, useEffect } from "react";
import { ScrollReveal } from "@/hooks/useScrollReveal"; 
import { ChevronLeft, ChevronRight, FileText, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import PDFViewer from "@/components/PDFViewer";

// Importa imagens de cada pasta (tem que ser fixo)
const socialMediaImages = Object.values(
  import.meta.glob("@/assets/Gestao_estrategica_redes_sociais/*.{png,jpg,jpeg,svg}", {
    eager: true,
    import: "default",
  })
);

const ghostwritingImages = Object.values(
  import.meta.glob("@/assets/Ghostwriting/*.{png,jpg,jpeg,svg}", {
    eager: true,
    import: "default",
  })
);

const smImages = Object.values(
  import.meta.glob("@/assets/SocialMedia/*.{png,jpg,jpeg,svg}", {
    eager: true,
    import: "default",
  })
);

const ContractsSection = () => {
  const contracts = [
    {
      title: "Contrato Gestão Estratégica de Redes Sociais",
      images: socialMediaImages,
      pdfUrl: "/contract-templates/Contrato_redessociais.pdf",
      pdfName: "Modelo de Contrato para redes sociais",
    },
    {
      title: "Contrato de Prestação de Serviços de Ghostwriting",
      images: ghostwritingImages,
      pdfUrl: "/contract-templates/Contrato_ghostwriting.pdf",
      pdfName: "Modelo de Contrato Ghostwriting",
    },
    {
      title: "Contrato de Prestação de Serviços de Social Media",
      images: smImages,
      pdfUrl: "/contract-templates/Contrato_socialmedia.pdf",
      pdfName: "Modelo de Contrato para Social Media",
    },
  ];

  return (
    <section id="contracts" className="py-20 lg:py-32 bg-muted">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <ScrollReveal delay={100}>
            <div className="inline-block">
              <span className="font-kumbh text-sm tracking-widest text-muted-foreground uppercase">
                Trabalhos Realizados
              </span>
              <div className="w-12 h-0.5 bg-primary mt-2 mx-auto"></div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h2 className="font-inria text-3xl lg:text-4xl font-bold italic text-primary mb-6">
              Legal Design na prática
            </h2>
          </ScrollReveal>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-8 mt-10">
          {contracts.map((contract, index) => (
            <ScrollReveal key={index} delay={400 + index * 200}>
              <ContractCard contract={contract} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContractCard = ({ contract }: { contract: any }) => {
  const [current, setCurrent] = useState(0);
  const [isPDFOpen, setIsPDFOpen] = useState(false);

  // Detecta se é mobile
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  const handleOpenPDF = () => {
    if (isMobile) {
      window.open(contract.pdfUrl, "_blank");
    } else {
      setIsPDFOpen(true);
    }
  };

  // Slider automático
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === contract.images.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [contract.images.length]);

  const prevSlide = () =>
    setCurrent((prev) =>
      prev === 0 ? contract.images.length - 1 : prev - 1
    );
  const nextSlide = () =>
    setCurrent((prev) =>
      prev === contract.images.length - 1 ? 0 : prev + 1
    );

  return (
    <div className="flex flex-col h-full group">
      {/* Carousel */}
      <div className="relative aspect-[3/4] bg-card rounded-lg overflow-hidden shadow-elegant">
        {contract.images.map((img: string, idx: number) => (
          <img
            key={idx}
            src={img}
            alt={`${contract.title} ${idx + 1}`}
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

      {/* Info + Botão alinhado na base */}
      <div className="flex flex-col flex-1 justify-between space-y-4">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="font-inria text-xl font-light text-primary mt-6">
              {contract.title}
            </h3>
          </div>
        </div>
        {contract.pdfUrl && (
          <div className="pt-2 mt-auto">
          </div>
        )}
      </div>

      {/* PDF Viewer (desktop apenas) */}
      {!isMobile && contract.pdfUrl && (
        <PDFViewer
          isOpen={isPDFOpen}
          onClose={() => setIsPDFOpen(false)}
          pdfUrl={contract.pdfUrl}
          title={contract.pdfName || `Modelo - ${contract.title}`}
        />
      )}
    </div>
  );
};

export default ContractsSection;
