import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import FormModal from '@/components/FormModal';
import PremiosSection from '@/components/PremiosSection';
import PropostaSection from '@/components/PropostaSection';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [isFormOpen, setIsFormOpen] = useState(false);

  const renderSection = () => {
    switch (currentSection) {
      case 'premios':
        return <PremiosSection />;
      case 'proposta':
        return <PropostaSection />;
      default:
        return <HomeSection onOpenForm={() => setIsFormOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar 
        onSectionChange={setCurrentSection}
        onOpenForm={() => setIsFormOpen(true)}
        currentSection={currentSection}
      />
      
      <main className="pt-20">
        {renderSection()}
      </main>

      <FormModal 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </div>
  );
};

const HomeSection = ({ onOpenForm }: { onOpenForm: () => void }) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Minimal animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Clean Hero Title */}
          <div className="mb-8 animate-slide-up">
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
              <span className="block gradient-primary bg-clip-text text-transparent">
                NOVA ERA
              </span>
              <span className="block text-foreground mt-2">
                iGAMING
              </span>
              <span className="block text-xl md:text-2xl font-semibold text-accent mt-4">
                Programa de Sub Afiliados
              </span>
            </h1>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Junte-se à <span className="text-primary font-semibold">elite dos afiliados</span> e 
              <span className="text-accent font-semibold"> maximize seus resultados</span> com as 
              melhores oportunidades do mercado
            </p>
          </div>
          
          {/* Elegant CTA */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              onClick={onOpenForm}
              size="lg"
              className="gradient-elegant hover:shadow-glow font-bold text-lg px-12 py-6 rounded-2xl border border-primary/20 hover-scale group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                 Inscrever-se Agora
                <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-primary/30 text-foreground hover:bg-primary/5 hover:border-primary/50 font-semibold text-lg px-12 py-6 rounded-2xl hover-scale"
            >
               Ver Detalhes
            </Button>
          </div>

          {/* Clean Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="text-center p-8 glass rounded-2xl hover-lift group border border-primary/10">
              <div className="w-16 h-16 gradient-elegant rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-500">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="font-bold text-xl mb-4 text-foreground">Altas Comissões</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ganhe até <span className="text-accent font-semibold">R$90 por CPA</span> 
                <span className="text-primary font-semibold"> </span>
              </p>
            </div>
            
            <div className="text-center p-8 glass rounded-2xl hover-lift group border border-primary/10" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 gradient-elegant rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-500">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="font-bold text-xl mb-4 text-foreground">Suporte Completo</h3>
              <p className="text-muted-foreground leading-relaxed">
                <span className="text-primary font-semibold">CRM integrado</span>, base zerada e 
                <span className="text-accent font-semibold"> suporte dedicado</span>
              </p>
            </div>
            
            <div className="text-center p-8 glass rounded-2xl hover-lift group border border-primary/10" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 gradient-elegant rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-glow transition-all duration-500">
                <span className="text-3xl">💸</span>
              </div>
              <h3 className="font-bold text-xl mb-4 text-foreground">Pagamentos Semanais</h3>
              <p className="text-muted-foreground leading-relaxed">
                Receba seus ganhos <span className="text-success font-semibold">semanalmente</span>, 
                sem burocracias e com <span className="text-primary font-semibold">transparência total</span>
              </p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-20 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-success">✅</span>
                <span className="font-medium">100% Seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">🛡️</span>
                <span className="font-medium">Licenciado</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-accent">⭐</span>
                <span className="font-medium">5 Estrelas</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-info">🏆</span>
                <span className="font-medium">Líderes do Mercado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;