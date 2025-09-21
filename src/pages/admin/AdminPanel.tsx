import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { LogOut, BarChart3, MessageSquare, ExternalLink } from 'lucide-react';
import AdminDashboard from './AdminDashboard';
import AdminRespostas from './AdminRespostas';
import AdminLogin from './AdminLogin';

const AdminPanel = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');

  useEffect(() => {
    const loggedIn = localStorage.getItem('adminLoggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('adminLoggedIn');
    setIsLoggedIn(false);
    setCurrentPage('dashboard');
  };

  const openExternalLink = (url: string) => {
    window.open(url, '_blank');
  };

  if (!isLoggedIn) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'respostas', label: 'Respostas', icon: MessageSquare },
  ];

  const externalLinks = [
    { label: 'Dash AnaGaming', url: 'https://app.ana.partners/pt/auth/login' },
    { label: 'Dash BlackSheep', url: 'https://portal.socioblacksheep.com.br/dashboard' },
  ];

  const renderContent = () => {
    switch (currentPage) {
      case 'respostas':
        return <AdminRespostas />;
      default:
        return <AdminDashboard onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="gradient-primary text-white font-bold text-xl px-4 py-2 rounded-lg">
              Admin Panel
            </div>
            <Button
              onClick={handleLogout}
              variant="ghost"
              className="text-muted-foreground hover:text-foreground"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-card border-r border-border min-h-[calc(100vh-4rem)]">
          <nav className="p-4 space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={currentPage === item.id ? "default" : "ghost"}
                className={`w-full justify-start ${
                  currentPage === item.id 
                    ? "gradient-primary text-white hover:shadow-glow" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setCurrentPage(item.id)}
              >
                <item.icon className="h-4 w-4 mr-2" />
                {item.label}
              </Button>
            ))}
            
            <div className="pt-4 mt-4 border-t border-border">
              <p className="text-sm font-medium text-muted-foreground mb-2 px-2">Links Externos</p>
              {externalLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start text-muted-foreground hover:text-foreground"
                  onClick={() => openExternalLink(link.url)}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  {link.label}
                </Button>
              ))}
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;