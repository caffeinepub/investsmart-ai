import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useNavigate, useRouterState } from '@tanstack/react-router';
import { Menu } from 'lucide-react';

export default function SiteHeader() {
  const navigate = useNavigate();
  const routerState = useRouterState();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Get Plan', path: '/chatbot' },
    { label: 'Learn', path: '/learn' },
    { label: 'SIP Calculator', path: '/sip-calculator' },
    { label: 'About', path: '/about' },
    { label: 'Disclaimer', path: '/disclaimer' },
  ];

  const handleNavigate = (path: string) => {
    navigate({ to: path });
    setIsOpen(false);
  };

  const isActive = (path: string) => {
    return routerState.location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <button
          onClick={() => handleNavigate('/')}
          className="flex items-center space-x-2 transition-opacity hover:opacity-80"
        >
          <img
            src="/assets/generated/investsmart-logo.dim_512x128.png"
            alt="InvestSmart AI"
            className="h-8 w-auto"
          />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-1 md:flex">
          {navItems.map((item) => (
            <Button
              key={item.path}
              variant={isActive(item.path) ? 'default' : 'ghost'}
              onClick={() => handleNavigate(item.path)}
              className={
                isActive(item.path)
                  ? 'bg-fintech-blue hover:bg-fintech-blue/90'
                  : ''
              }
            >
              {item.label}
            </Button>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-64">
            <nav className="flex flex-col space-y-2 pt-8">
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  variant={isActive(item.path) ? 'default' : 'ghost'}
                  onClick={() => handleNavigate(item.path)}
                  className={
                    isActive(item.path)
                      ? 'justify-start bg-fintech-blue hover:bg-fintech-blue/90'
                      : 'justify-start'
                  }
                >
                  {item.label}
                </Button>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
