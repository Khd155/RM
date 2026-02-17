/*
  Art Deco Luxury Header Component
  - Black background with gold accents
  - Geometric border patterns
  - Smooth scroll navigation
  - Fixed position on scroll
*/

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'الرئيسية' },
    { id: 'about', label: 'من نحن' },
    { id: 'services', label: 'خدماتنا' },
    { id: 'gallery', label: 'معرض الصور' },
    { id: 'contact', label: 'تواصل معنا' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-lg shadow-accent/10' : 'bg-transparent'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => scrollToSection('home')}>
            <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663363323575/JwqVywAGtuTVKhNx.jpeg" alt="شعار الرماح الماسية" className="h-12 lg:h-16 w-auto" />
            <div className="hidden md:block">
              <h1 className="text-lg lg:text-xl font-bold text-foreground font-['Playfair_Display']">
                مؤسسة الرماح الماسية
              </h1>
              <p className="text-xs text-muted-foreground">للنجف الفاخر والستائر الراقية</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-accent transition-colors duration-300 font-['Montserrat'] font-semibold relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <div className="hidden lg:block">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-accent text-primary-foreground hover:bg-accent/90 font-['Montserrat'] font-semibold px-6 py-6 gold-shimmer"
            >
              طلب تصميم خاص
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground hover:text-accent transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-card border-t border-accent/30 py-4 animate-in slide-in-from-top">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-accent transition-colors duration-300 font-['Montserrat'] font-semibold text-right px-4 py-2"
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={() => scrollToSection('contact')}
                className="bg-accent text-primary-foreground hover:bg-accent/90 font-['Montserrat'] font-semibold mx-4"
              >
                طلب تصميم خاص
              </Button>
            </nav>
          </div>
        )}
      </div>

      {/* Art Deco Bottom Border */}
      <div className="h-px bg-gradient-to-l from-transparent via-accent to-transparent" />
    </header>
  );
}
