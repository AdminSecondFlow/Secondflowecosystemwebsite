import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImg from 'figma:asset/3058c53044f9fb739fe81000c5b11e22e8880103.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/sellers', label: 'Продавцам' },
    { path: '/buyers', label: 'Покупателям' },
    { path: '/about', label: 'О нас' },
    { path: '/why', label: 'Решать проблему' },
    { path: '/prices', label: 'Тарифы' },
    { path: '/contacts', label: 'Контакты' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={logoImg} 
              alt="SecondFlow Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="ml-3 text-xl font-bold bg-gradient-to-r from-[#0A4D68] to-[#FF6B4D] bg-clip-text text-transparent">
              SecondFlow
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors relative group ${ location.pathname === link.path ? 'text-[#0A4D68]' : 'text-gray-700 hover:text-[#0A4D68]' } font-bold font-[Rubik] text-[16px]`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#0A4D68] to-[#FF6B4D] transition-all duration-300 ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="https://secondflowmain.glide.page"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 bg-[#0A4D68] rounded-lg font-semibold transition-all duration-300 hover:bg-[#007A9A] hover:shadow-lg hover:shadow-[#0A4D68]/30 hover:-translate-y-0.5 text-[16px] mx-[20px] my-[0px] px-[20px] py-[2.5px] text-[#ffffff]"
            >Продать</a>
            <a
              href="https://second-flow-store.glide.page"
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 bg-[#FF6B4D] text-[#ffffff] rounded-lg font-semibold transition-all duration-300 hover:bg-[#E85A40] hover:shadow-lg hover:shadow-[#FF6B4D]/30 hover:-translate-y-0.5 text-[16px] px-[20px] py-[0px] mx-[10px] my-[0px]"
            >Купить</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
        }`}
      >
        <nav className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                location.pathname === link.path
                  ? 'bg-gradient-to-r from-[#0A4D68]/10 to-[#FF6B4D]/10 text-[#0A4D68]'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 space-y-2 flex flex-col items-center">
            <a
              href="https://secondflowmain.glide.page"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-[#0A4D68] text-[#ffffff] text-center rounded-lg font-semibold hover:bg-[#007A9A] transition-colors"
            >
              Продать
            </a>
            <a
              href="https://second-flow-store.glide.page"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-[#FF6B4D] text-[#ffffff] text-center rounded-lg font-semibold hover:bg-[#E85A40] transition-colors"
            >
              Купить
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
