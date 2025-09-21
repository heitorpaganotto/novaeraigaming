import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X } from 'lucide-react';

const PremiosSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Placeholder images - user will replace these
  const premios = [
    {
      id: 1,
      src: './src/assets/1.png',
      alt: 'Prêmio 1',
      title: '🏆 Grande Prêmio VIP'
    },
    {
      id: 2,
      src: './src/assets/2.png',
      alt: 'Prêmio 2', 
      title: ' Prêmio Premium'
    },
    {
      id: 3,
      src: './src/assets/3.png',
      alt: 'Prêmio 3',
      title: '🎯 Meta Especial'
    },
    {
      id: 4,
      src: './src/assets/4.png',
      alt: 'Prêmio 4',
      title: ' Bônus Performance'
    },
    {
      id: 5,
      src: './src/assets/5.png',
      alt: 'Prêmio 5',
      title: '🌟 Recompensa Elite'
    }
  ];

  return (
    <section className="py-32 px-4 relative overflow-hidden">
      {/* Subtle Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-accent/2 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="text-5xl md:text-7xl font-black mb-6 gradient-primary bg-clip-text text-transparent">
            Prêmios Exclusivos
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <span className="text-primary font-semibold">Recompensas premium</span> esperando por você. 
            Clique nas imagens para <span className="text-accent font-semibold">visualizar em detalhes</span>.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
          {/* Top 2 images - larger */}
          <div className="lg:col-span-6 animate-slide-up">
            <div 
              className="relative overflow-hidden rounded-2xl shadow-card hover-lift cursor-pointer h-80 lg:h-96 group border border-primary/10"
              onClick={() => setSelectedImage(premios[0].src)}
            >
              <img
                src={premios[0].src}
                alt={premios[0].alt}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white font-black text-2xl mb-2">{premios[0].title}</h3>
                <div className="flex items-center gap-2 text-primary">
                  <span className="text-lg">✨</span>
                  <span className="font-medium">Clique para ampliar</span>
                </div>
              </div>
              <div className="absolute top-6 right-6">
                <div className="w-10 h-10 bg-primary/80 rounded-full flex items-center justify-center shadow-glow">
                  <span className="text-white font-bold text-sm">1°</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <div 
              className="relative overflow-hidden rounded-2xl shadow-card hover-lift cursor-pointer h-80 lg:h-96 group border border-primary/10"
              onClick={() => setSelectedImage(premios[1].src)}
            >
              <img
                src={premios[1].src}
                alt={premios[1].alt}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white font-black text-2xl mb-2">{premios[1].title}</h3>
                <div className="flex items-center gap-2 text-accent">
                  <span className="text-lg">✨</span>
                  <span className="font-medium">Clique para ampliar</span>
                </div>
              </div>
              <div className="absolute top-6 right-6">
                <div className="w-10 h-10 bg-accent/80 rounded-full flex items-center justify-center shadow-glow">
                  <span className="text-foreground font-bold text-sm">2°</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom 3 images - smaller */}
          {premios.slice(2).map((premio, index) => (
            <div key={premio.id} className={`lg:col-span-4 animate-slide-up`} style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
              <div 
                className="relative overflow-hidden rounded-2xl shadow-card hover-lift cursor-pointer h-64 group border border-primary/10"
                onClick={() => setSelectedImage(premio.src)}
              >
                <img
                  src={premio.src}
                  alt={premio.alt}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg mb-1">{premio.title}</h3>
                  <div className="flex items-center gap-1 text-primary text-sm">
                    <span>✨</span>
                    <span className="font-medium">Ver detalhes</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-primary/80 rounded-full flex items-center justify-center shadow-glow">
                    <span className="text-white text-sm font-bold">{index + 3}°</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto border border-primary/10">
            <h3 className="text-2xl font-bold mb-4 gradient-primary bg-clip-text text-transparent">
              🎉 Conquiste Todos os Prêmios
            </h3>
            <p className="text-muted-foreground mb-6">
              Cada meta alcançada te aproxima dessas <span className="text-primary font-semibold">recompensas exclusivas</span>
            </p>
            <div className="flex items-center justify-center gap-2 text-success">
              <span className="text-xl">🏆</span>
              <span className="font-medium">Sistema de Recompensas Ativo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-6xl p-0 bg-transparent border-none">
          <div className="relative rounded-2xl overflow-hidden">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 z-10 bg-black/80 text-white rounded-full p-3 hover:bg-black/90 transition-all duration-300 shadow-lg"
            >
              <X size={24} />
            </button>
            {selectedImage && (
              <div className="relative">
                <img
                  src={selectedImage}
                  alt=""
                  className="w-full h-auto rounded-2xl shadow-glow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass rounded-xl p-4">
                    <h3 className="text-white font-bold text-xl mb-2">✨ Prêmio Exclusivo</h3>
                    <p className="text-white/80">Conquiste este prêmio alcançando suas metas como afiliado</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default PremiosSection;