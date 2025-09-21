import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';

interface Submission {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  status: 'pendente' | 'aprovado' | 'em conversa';
  data: string;
  timestamp: string;
}

const AdminRespostas = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [filter, setFilter] = useState<string>('todos');

  useEffect(() => {
    const stored = localStorage.getItem('formSubmissions');
    if (stored) {
      setSubmissions(JSON.parse(stored));
    }
  }, []);

  const filteredSubmissions = submissions.filter(submission => {
    if (filter === 'todos') return true;
    return submission.status === filter;
  });

  const updateStatus = (id: string, newStatus: 'pendente' | 'aprovado' | 'em conversa') => {
    const updatedSubmissions = submissions.map(submission =>
      submission.id === id ? { ...submission, status: newStatus } : submission
    );
    
    setSubmissions(updatedSubmissions);
    localStorage.setItem('formSubmissions', JSON.stringify(updatedSubmissions));
    
    toast({
      title: "Status atualizado",
      description: `Status alterado para ${newStatus}`,
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pendente': return 'bg-warning/20 text-warning border-warning/30';
      case 'aprovado': return 'bg-success/20 text-success border-success/30';
      case 'em conversa': return 'bg-info/20 text-info border-info/30';
      default: return 'bg-muted/20 text-muted-foreground border-muted/30';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'pendente': return 'Pendente';
      case 'aprovado': return 'Aprovado';
      case 'em conversa': return 'Em Conversa';
      default: return status;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
          Respostas
        </h1>
        
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filtrar por status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="todos">Todos</SelectItem>
            <SelectItem value="pendente">Pendente</SelectItem>
            <SelectItem value="em conversa">Em Conversa</SelectItem>
            <SelectItem value="aprovado">Aprovado</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Card className="shadow-card bg-card border-border">
        <CardHeader>
          <CardTitle className="text-foreground">
            {filteredSubmissions.length} inscrição{filteredSubmissions.length !== 1 ? 'ões' : ''} encontrada{filteredSubmissions.length !== 1 ? 's' : ''}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {filteredSubmissions.length === 0 ? (
            <p className="text-muted-foreground text-center py-8">
              Nenhuma inscrição encontrada para este filtro
            </p>
          ) : (
            <div className="space-y-4">
              {filteredSubmissions.map((submission) => (
                <div key={submission.id} className="border border-border rounded-lg p-4 bg-background/50">
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                    <div>
                      <p className="text-sm text-muted-foreground">Data</p>
                      <p className="font-medium text-foreground">{submission.data}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground">Nome</p>
                      <p className="font-medium text-foreground">{submission.nome}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground break-all">{submission.email}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground">Telefone</p>
                      <p className="font-medium text-foreground">{submission.telefone}</p>
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Status</p>
                      <Select
                        value={submission.status}
                        onValueChange={(value: 'pendente' | 'aprovado' | 'em conversa') => 
                          updateStatus(submission.id, value)
                        }
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue>
                            <Badge className={getStatusColor(submission.status)}>
                              {getStatusLabel(submission.status)}
                            </Badge>
                          </SelectValue>
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pendente">
                            <Badge className="bg-warning/20 text-warning border-warning/30">
                              Pendente
                            </Badge>
                          </SelectItem>
                          <SelectItem value="em conversa">
                            <Badge className="bg-info/20 text-info border-info/30">
                              Em Conversa
                            </Badge>
                          </SelectItem>
                          <SelectItem value="aprovado">
                            <Badge className="bg-success/20 text-success border-success/30">
                              Aprovado
                            </Badge>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminRespostas;