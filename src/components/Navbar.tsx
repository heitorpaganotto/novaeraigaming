import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavbarProps {
  onSectionChange: (section: string) => void;
  onOpenForm: () => void;
  currentSection: string;
}

const Navbar = ({ onSectionChange, onOpenForm, currentSection }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'premios', label: 'Prêmios' },
    { id: 'proposta', label: 'Proposta' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-primary/10 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Clean Logo */}
          <div className="flex items-center">
            <div className="gradient-elegant text-foreground font-black text-xl px-6 py-3 rounded-xl shadow-glow hover-scale border border-primary/20">
              <span className="flex items-center gap-2">
                <span className="text-2xl"></span>
                NovaEra Gaming
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`relative text-muted-foreground hover:text-foreground transition-all duration-300 font-semibold text-lg px-4 py-2 rounded-lg hover:bg-primary/5 ${
                  currentSection === item.id ? 'text-foreground' : ''
                }`}
              >
                {item.label}
                {currentSection === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary rounded-full" />
                )}
              </button>
            ))}
            <Button 
              onClick={onOpenForm}
              className="gradient-elegant hover:shadow-glow font-bold px-6 py-2 rounded-xl border border-primary/20 hover-scale group"
              size="sm"
            >
              <span className="flex items-center gap-2">
                 Inscrever-se
                <span className="text-sm group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-foreground p-2 rounded-lg hover:bg-primary/5 transition-all duration-300"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Clean Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-3 glass rounded-2xl mt-4 shadow-card border border-primary/10">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onSectionChange(item.id);
                    setIsOpen(false);
                  }}
                  className={`block px-4 py-3 text-left w-full text-muted-foreground hover:text-foreground transition-all duration-300 font-semibold rounded-xl hover:bg-primary/5 ${
                    currentSection === item.id ? 'text-foreground bg-primary/5' : ''
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => {
                  onOpenForm();
                  setIsOpen(false);
                }}
                className="w-full mt-4 gradient-elegant hover:shadow-glow font-bold rounded-xl border border-primary/20 hover-scale"
              >
                 Inscrever-se Agora
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;