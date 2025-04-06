import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onNavigate: {
    about: () => void;
    education: () => void;
    experience: () => void;
    projects: () => void;
    skills: () => void;
    contact: () => void;
  };
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (handler: () => void) => {
    handler();
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full bg-white z-50 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a 
            href="#" 
            className="text-2xl font-bold text-primary"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Darshan<span className="text-amber-500">.</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="font-medium hover:text-primary transition-colors">Home</button>
            <button onClick={() => onNavigate.about()} className="font-medium hover:text-primary transition-colors">About</button>
            <button onClick={() => onNavigate.education()} className="font-medium hover:text-primary transition-colors">Education</button>
            <button onClick={() => onNavigate.experience()} className="font-medium hover:text-primary transition-colors">Experience</button>
            <button onClick={() => onNavigate.projects()} className="font-medium hover:text-primary transition-colors">Projects</button>
            <button onClick={() => onNavigate.skills()} className="font-medium hover:text-primary transition-colors">Skills</button>
            <button onClick={() => onNavigate.contact()} className="font-medium hover:text-primary transition-colors">Contact</button>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3 space-y-3">
            <button onClick={() => handleNavClick(() => window.scrollTo({ top: 0, behavior: 'smooth' }))} className="block w-full text-left font-medium hover:text-primary transition-colors py-2">Home</button>
            <button onClick={() => handleNavClick(onNavigate.about)} className="block w-full text-left font-medium hover:text-primary transition-colors py-2">About</button>
            <button onClick={() => handleNavClick(onNavigate.education)} className="block w-full text-left font-medium hover:text-primary transition-colors py-2">Education</button>
            <button onClick={() => handleNavClick(onNavigate.experience)} className="block w-full text-left font-medium hover:text-primary transition-colors py-2">Experience</button>
            <button onClick={() => handleNavClick(onNavigate.projects)} className="block w-full text-left font-medium hover:text-primary transition-colors py-2">Projects</button>
            <button onClick={() => handleNavClick(onNavigate.skills)} className="block w-full text-left font-medium hover:text-primary transition-colors py-2">Skills</button>
            <button onClick={() => handleNavClick(onNavigate.contact)} className="block w-full text-left font-medium hover:text-primary transition-colors py-2">Contact</button>
          </div>
        </div>
      )}
    </header>
  );
}
