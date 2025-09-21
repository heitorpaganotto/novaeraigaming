import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';

interface FormData {
  nome: string;
  email: string;
  telefone: string;
}

interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FormModal = ({ isOpen, onClose }: FormModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Store data in localStorage for admin panel
      const submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
      const newSubmission = {
        id: Date.now().toString(),
        ...formData,
        status: 'pendente',
        data: new Date().toLocaleDateString('pt-BR'),
        timestamp: new Date().toISOString(),
      };
      
      submissions.push(newSubmission);
      localStorage.setItem('formSubmissions', JSON.stringify(submissions));

      toast({
        title: "🎉 Sucesso!",
        description: "Sua inscrição foi enviada com sucesso. Entraremos em contato em breve!",
      });

      setFormData({ nome: '', email: '', telefone: '' });
      onClose();
    } catch (error) {
      toast({
        title: "❌ Erro",
        description: "Houve um erro ao enviar sua inscrição. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg glass border border-primary/30 rounded-3xl">
        <div className="relative">
          {/* Background Effect */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-accent/15 rounded-full blur-3xl" />
          
          <DialogHeader className="text-center pb-6 relative z-10">
            <div className="w-20 h-20 gradient-elegant rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow border border-primary/20">
              <span className="text-4xl"></span>
            </div>
            <DialogTitle className="text-3xl font-black gradient-primary bg-clip-text text-transparent">
              Inscrever-se Agora
            </DialogTitle>
            <p className="text-muted-foreground mt-2">
              <span className="text-primary font-semibold">Últimos dias</span> para aproveitar essas 
              <span className="text-accent font-semibold"> condições especiais</span>
            </p>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div className="space-y-2">
              <Label htmlFor="nome" className="text-foreground font-semibold flex items-center gap-2">
                 Nome Completo
              </Label>
              <Input
                id="nome"
                type="text"
                value={formData.nome}
                onChange={(e) => handleChange('nome', e.target.value)}
                placeholder="Digite seu nome completo"
                required
                className="glass border-primary/30 focus:border-primary focus:shadow-glow rounded-xl h-12 text-foreground placeholder:text-muted-foreground"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-semibold flex items-center gap-2">
                 Email
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="seu@email.com"
                required
                className="glass border-primary/30 focus:border-primary focus:shadow-glow rounded-xl h-12 text-foreground placeholder:text-muted-foreground"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="telefone" className="text-foreground font-semibold flex items-center gap-2">
                Telefone
              </Label>
              <Input
                id="telefone"
                type="tel"
                value={formData.telefone}
                onChange={(e) => handleChange('telefone', e.target.value)}
                placeholder="(11) 99999-9999"
                required
                className="glass border-primary/30 focus:border-primary focus:shadow-glow rounded-xl h-12 text-foreground placeholder:text-muted-foreground"
              />
            </div>

            {/* Trust Indicators */}
            <div className="glass rounded-2xl p-4 border border-primary/20">
              <div className="flex items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-1 text-success">
                  <span></span>
                  <span className="font-medium">100% Seguro</span>
                </div>
                <div className="flex items-center gap-1 text-primary">
                  <span></span>
                  <span className="font-medium">Resposta Rápida</span>
                </div>
                <div className="flex items-center gap-1 text-accent">
                  <span>🎯</span>
                  <span className="font-medium">Sem Spam</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1 border-muted hover:border-primary hover:text-primary rounded-xl h-12 font-semibold"
                disabled={isSubmitting}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                className="flex-1 gradient-elegant hover:shadow-glow font-bold rounded-xl h-12 hover-scale relative overflow-hidden group border border-primary/20"
                disabled={isSubmitting}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Inscrição
                      <span className="text-xl group-hover:scale-125 transition-transform duration-300">→</span>
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </Button>
            </div>

            {/* Footer Message */}
            <div className="text-center text-sm text-muted-foreground">
              Ao se inscrever, você concorda em receber comunicações sobre 
              <span className="text-primary font-semibold"> oportunidades exclusivas</span> 
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FormModal;