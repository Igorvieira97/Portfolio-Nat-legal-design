import { useState, useEffect } from 'react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Approximate header height
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  const menuItems = [
    { id: 'home', label: 'INÍCIO' },
    { id: 'about', label: 'QUEM SOU' },
    { id: 'services', label: 'SERVIÇOS' },
    { id: 'contracts', label: 'MEUS CONTRATOS' },
    { id: 'proposals', label: 'MINHAS PROPOSTAS' },
    { id: 'contact', label: 'CONTATO' }
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-elegant ${
          isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-elegant' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            {/* Logo/Brand */}
            <div className="font-accent text-2xl tracking-wider text-primary">
              Profissional
            </div>

            {/* Navigation Menu */}
            <ul className="hidden lg:flex space-x-6 xl:space-x-8">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`font-kumbh text-xs xl:text-sm tracking-wide transition-elegant hover:text-primary ${
                      activeSection === item.id ? 'text-primary font-medium' : 'text-muted-foreground'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-primary p-2 relative z-60"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Background Overlay */}
          <div 
            className="absolute inset-0 bg-background/95 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          {/* Menu Content */}
          <div className="relative z-50 mt-20 mx-6">
            <div className="bg-background border border-border rounded-lg shadow-elegant p-6">
              <ul className="space-y-4">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`font-kumbh text-sm tracking-wide transition-elegant hover:text-primary block w-full text-left py-3 px-4 rounded-md hover:bg-muted/50 ${
                        activeSection === item.id ? 'text-primary font-medium bg-muted' : 'text-muted-foreground'
                      }`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;