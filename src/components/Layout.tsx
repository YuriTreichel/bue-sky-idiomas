import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageCircle, Globe2, Building2 } from 'lucide-react';

const Logo = ({ className = "h-12 w-auto" }: { className?: string }) => {
  const [error, setError] = useState(false);
  
  if (error) {
    return (
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary-500/30">
          BS
        </div>
        <span className="font-bold text-xl text-slate-900 tracking-tight">Blue Sky<span className="text-accent-500">.</span></span>
      </div>
    );
  }

  return (
    <img 
      src={`${import.meta.env.BASE_URL}images/logo.png`} 
      alt="Blue Sky Idiomas" 
      className={className} 
      onError={() => setError(true)} 
    />
  );
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'A Escola', path: '/metodologia' },
    { name: 'Cursos', path: '/cursos' },
    { name: 'Professores', path: '/professores' },
    { name: 'Convênios', path: '/convenios' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <Link to="/">
              <Logo className="h-10 md:h-12 w-auto" />
            </Link>
          </motion.div>
          
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item, i) => (
              <motion.div key={item.name} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <Link 
                  to={item.path}
                  className={`text-sm font-medium transition-colors ${location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path)) ? 'text-primary-600' : 'text-slate-600 hover:text-primary-600'}`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:flex items-center"
          >
            <a href="https://wa.me/5551999474150" target="_blank" rel="noopener noreferrer">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-slate-900/20 flex items-center gap-2"
              >
                Fale Conosco
              </motion.button>
            </a>
          </motion.div>

          <button className="md:hidden text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 overflow-hidden md:hidden"
          >
            <div className="p-4 flex flex-col gap-2">
              {navLinks.map((item) => (
                <Link 
                  key={item.name}
                  to={item.path} 
                  className={`flex items-center gap-3 text-base font-medium p-3 rounded-xl transition-colors ${location.pathname === item.path ? 'bg-primary-50 text-primary-600' : 'text-slate-600 hover:bg-slate-50'}`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="h-px bg-slate-100 my-2"></div>
              <a href="https://wa.me/5551999474150" target="_blank" rel="noopener noreferrer">
                <button className="bg-primary-600 text-white px-5 py-3.5 rounded-xl text-base font-medium w-full flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Fale Conosco
                </button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Logo className="h-12 w-auto" />
            </div>
            <p className="text-slate-500 font-inter text-sm leading-relaxed">
              Transformando vidas através do ensino de idiomas com qualidade e foco nas suas necessidades.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><Globe2 className="w-4 h-4 text-primary-500"/> Cursos</h4>
            <ul className="space-y-3 text-sm text-slate-600 font-inter">
              <li><Link to="/cursos/ingles" className="hover:text-primary-600 hover:translate-x-1 inline-block transition-transform">Inglês</Link></li>
              <li><Link to="/cursos/espanhol" className="hover:text-primary-600 hover:translate-x-1 inline-block transition-transform">Espanhol</Link></li>
              <li><Link to="/cursos/mandarim" className="hover:text-primary-600 hover:translate-x-1 inline-block transition-transform">Mandarim</Link></li>
              <li><Link to="/cursos/alemao" className="hover:text-primary-600 hover:translate-x-1 inline-block transition-transform">Alemão</Link></li>
              <li><Link to="/cursos/frances" className="hover:text-primary-600 hover:translate-x-1 inline-block transition-transform">Francês</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><Building2 className="w-4 h-4 text-primary-500"/> A Escola</h4>
            <ul className="space-y-3 text-sm text-slate-600 font-inter">
              <li><Link to="/metodologia" className="hover:text-primary-600 hover:translate-x-1 inline-block transition-transform">Sobre nós</Link></li>
              <li><Link to="/metodologia" className="hover:text-primary-600 hover:translate-x-1 inline-block transition-transform">Metodologia</Link></li>
              <li><Link to="/empresas" className="hover:text-primary-600 hover:translate-x-1 inline-block transition-transform">Para Empresas</Link></li>
              <li><Link to="/contato" className="hover:text-primary-600 hover:translate-x-1 inline-block transition-transform">Trabalhe conosco</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2"><MessageCircle className="w-4 h-4 text-primary-500"/> Contato</h4>
            <ul className="space-y-3 text-sm text-slate-600 font-inter">
              <li className="flex items-center gap-2"><a href="mailto:faleconosco@blueskyidiomas.com.br" className="hover:text-primary-600 transition-colors">faleconosco@blueskyidiomas.com.br</a></li>
              <li className="flex items-center gap-2"><a href="tel:+5551999474150" className="hover:text-primary-600 transition-colors">(51) 99947-4150</a></li>
              <li className="flex items-center gap-2">Atendimento Online • Brasil</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 font-inter">
            © {new Date().getFullYear()} Blue Sky Idiomas. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 text-sm text-slate-500 font-inter">
            <Link to="#" className="hover:text-primary-600 transition-colors">Termos de Uso</Link>
            <Link to="#" className="hover:text-primary-600 transition-colors">Política de Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function Layout() {
  // Scroll to top on route change
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-primary-500 selection:text-white overflow-x-hidden flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <a 
        href="https://web.whatsapp.com/send/?phone=5519986088642&text&type=phone_number&app_absent=0" 
        className="bt-whatsApp transition-transform hover:scale-110 active:scale-95" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ right: '30px', position: 'fixed', width: '60px', height: '60px', bottom: '30px', zIndex: 100 }}
      >
        <img 
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSI2MHB4IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA2MCA2MCIgd2lkdGg9IjYwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48dGl0bGUvPjxkZWZzLz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGlkPSJmbGF0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSI+PGcgaWQ9IndoYXRzYXBwIj48cGF0aCBkPSJNMzAsNjAgQzQ2LjU2ODU0MzMsNjAgNjAsNDYuNTY4NTQzMyA2MCwzMCBDNjAsMTMuNDMxNDU2NyA0Ni41Njg1NDMzLDAgMzAsMCBDMTMuNDMxNDU2NywwIDAsMTMuNDMxNDU2NyAwLDMwIEMwLDQ2LjU2ODU0MzMgMTMuNDMxNDU2Nyw2MCAzMCw2MCBaIiBmaWxsPSIjNTdCQjYzIi8+PHBhdGggZD0iTTMwLjA3MTI2MTUsNDYuMjIxMDQ2MiBDMjcuMjEwODMwOCw0Ni4yMjEwNDYyIDI0LjUyMzU2OTIsNDUuNDg5OTY5MiAyMi4xODU2LDQ0LjIwNjg5MjMgTDEzLjE1Mzg0NjIsNDcuMDc2OTIzMSBMMTYuMDk4MDkyMywzOC4zOTE4NzY5IEMxNC42MTMwNDYyLDM1Ljk1MjM2OTIgMTMuNzU3NTM4NSwzMy4wOTE1NjkyIDEzLjc1NzUzODUsMzAuMDMzNiBDMTMuNzU3NTM4NSwyMS4wOTM0MTU0IDIxLjA2MTI5MjMsMTMuODQ2MTUzOCAzMC4wNzE2MzA4LDEzLjg0NjE1MzggQzM5LjA4MDg2MTUsMTMuODQ2MTUzOCA0Ni4zODQ2MTU0LDIxLjA5MzQxNTQgNDYuMzg0NjE1NCwzMC4wMzM2IEM0Ni4zODQ2MTU0LDM4Ljk3Mzc4NDYgMzkuMDgxMjMwOCw0Ni4yMjEwNDYyIDMwLjA3MTI2MTUsNDYuMjIxMDQ2MiBaIE0zMC4wNzEyNjE1LDE2LjQyNDEyMzEgQzIyLjUwNzkzODUsMTYuNDI0MTIzMSAxNi4zNTU4MTU0LDIyLjUyOTM1MzggMTYuMzU1ODE1NCwzMC4wMzM2IEMxNi4zNTU4MTU0LDMzLjAxMTQ0NjIgMTcuMzI2NTIzMSwzNS43NjkyMzA4IDE4Ljk2ODEyMzEsMzguMDEzMDQ2MiBMMTcuMjU0ODkyMyw0My4wNjcwNzY5IEwyMi41MjUyOTIzLDQxLjM5MTg3NjkgQzI0LjY5MTIsNDIuODEzNzg0NiAyNy4yODU0MTU0LDQzLjY0MzA3NjkgMzAuMDcxMjYxNSw0My42NDMwNzY5IEMzNy42MzM0NzY5LDQzLjY0MzA3NjkgNDMuNzg2NzA3NywzNy41MzgyMTU0IDQzLjc4NjcwNzcsMzAuMDMzOTY5MiBDNDMuNzg2NzA3NywyMi41Mjk3MjMxIDM3LjYzMzQ3NjksMTYuNDI0MTIzMSAzMC4wNzEyNjE1LDE2LjQyNDEyMzEgTDMwLjA3MTI2MTUsMTYuNDI0MTIzMSBaIE0zOC4zMDg4LDMzLjc2MTcyMzEgQzM4LjIwODM2OTIsMzMuNTk2Njc2OSAzNy45NDE3ODQ2LDMzLjQ5Njk4NDYgMzcuNTQyNjQ2MiwzMy4yOTg3MDc3IEMzNy4xNDI0LDMzLjEwMDQzMDggMzUuMTc1ODc2OSwzMi4xNDAwNjE1IDM0LjgwOTk2OTIsMzIuMDA4MjQ2MiBDMzQuNDQyOTUzOCwzMS44NzYwNjE1IDM0LjE3NiwzMS44MDkyMzA4IDMzLjkwOTc4NDYsMzIuMjA2NTIzMSBDMzMuNjQzNTY5MiwzMi42MDM4MTU0IDMyLjg3NzA0NjIsMzMuNDk2OTg0NiAzMi42NDMzMjMxLDMzLjc2MTcyMzEgQzMyLjQwOTk2OTIsMzQuMDI2ODMwOCAzMi4xNzY5ODQ2LDM0LjA2MDA2MTUgMzEuNzc3MTA3NywzMy44NjE0MTU0IEMzMS4zNzc2LDMzLjY2MzEzODUgMzAuMDg4OTg0NiwzMy4yNDQwNjE1IDI4LjU2MTEwNzcsMzEuODkyMzA3NyBDMjcuMzcyNTUzOCwzMC44NDA3Mzg1IDI2LjU2OTg0NjIsMjkuNTQyNTIzMSAyNi4zMzY4NjE1LDI5LjE0NDg2MTUgQzI2LjEwMzUwNzcsMjguNzQ3OTM4NSAyNi4zMTIxMjMxLDI4LjUzMzQxNTQgMjYuNTEyMjQ2MiwyOC4zMzU4NzY5IEMyNi42OTIwNjE1LDI4LjE1NzkwNzcgMjYuOTEyMTIzMSwyNy44NzI0OTIzIDI3LjExMjI0NjIsMjcuNjQwOTg0NiBDMjcuMzEyMzY5MiwyNy40MDkxMDc3IDI3LjM3ODgzMDgsMjcuMjQ0MDYxNSAyNy41MTE3NTM4LDI2Ljk3ODk1MzggQzI3LjY0NTQxNTQsMjYuNzE0MjE1NCAyNy41Nzg1ODQ2LDI2LjQ4MjcwNzcgMjcuNDc4NTIzMSwyNi4yODM2OTIzIEMyNy4zNzg0NjE1LDI2LjA4NTQxNTQgMjYuNTc4MzM4NSwyNC4xMzI5MjMxIDI2LjI0NTI5MjMsMjMuMzM4MzM4NSBDMjUuOTEyMjQ2MiwyMi41NDQ0OTIzIDI1LjU3OTU2OTIsMjIuNjc2Njc2OSAyNS4zNDU4NDYyLDIyLjY3NjY3NjkgQzI1LjExMjQ5MjMsMjIuNjc2Njc2OSAyNC44NDU5MDc3LDIyLjY0MzQ0NjIgMjQuNTc5MzIzMSwyMi42NDM0NDYyIEMyNC4zMTI3Mzg1LDIyLjY0MzQ0NjIgMjMuODc5MjYxNSwyMi43NDI3NjkyIDIzLjUxMjYxNTQsMjMuMTM5NjkyMyBDMjMuMTQ2MzM4NSwyMy41MzY5ODQ2IDIyLjExMzYsMjQuNDk2OTg0NiAyMi4xMTM2LDI2LjQ0OTEwNzcgQzIyLjExMzYsMjguNDAxNiAyMy41NDU4NDYyLDMwLjI4OCAyMy43NDYzMzg1LDMwLjU1MjM2OTIgQzIzLjk0NjA5MjMsMzAuODE2NzM4NSAyNi41MTE4NzY5LDM0Ljk1MzYgMzAuNTc2NzM4NSwzNi41NDI0IEMzNC42NDMwNzY5LDM4LjEzMDgzMDggMzQuNjQzMDc2OSwzNy42MDA5ODQ2IDM1LjM3NjM2OTIsMzcuNTM0ODkyMyBDMzYuMTA4NTUzOCwzNy40Njg4IDM3Ljc0MTI5MjMsMzYuNTc1MjYxNSAzOC4wNzU0NDYyLDM1LjY0ODg2MTUgQzM4LjQwODEyMzEsMzQuNzIxNzIzMSAzOC40MDgxMjMxLDMzLjkyNzEzODUgMzguMzA4OCwzMy43NjE3MjMxIEwzOC4zMDg4LDMzLjc2MTcyMzEgWiIgZmlsbD0iI0ZGRkZGRiIvPjwvZz48L2c+PC9zdmc+" alt="WhatsApp" 
        />
      </a>
    </div>
  );
}
