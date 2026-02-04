import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Footer() {
  const productLinks = [
    { path: '/sellers', label: 'SecondFlow (Продавцам)' },
    { path: '/buyers', label: 'SecondFlow Store' },
    { path: '/categories', label: 'Категории товаров' },
    { path: '/getting-started', label: 'Как начать' },
  ];

  const companyLinks = [
    { path: '/about', label: 'О нас' },
    { path: '/why', label: 'Решать проблему' },
    { path: '/prices', label: 'Тарифы' },
    { path: '/faq', label: 'FAQ' },
  ];

  const legalLinks = [
    { path: '/privacy', label: 'Политика конфиденциальности' },
    { path: '/terms', label: 'Пользовательское соглашение' },
    { path: '/offer', label: 'Публичная оферта' },
    { path: '/rules', label: 'Правила размещения' },
    { path: '/complaints', label: 'Процедура претензий' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="w-full px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-[#0A4D68] to-[#FF6B4D]">
                <span className="text-white font-bold text-xl">SF</span>
              </div>
              <span className="ml-3 text-xl font-bold text-white">SecondFlow Ecosystem</span>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Цифровой хаб циркулярной экономики
            </p>
            <div className="flex space-x-4">
              <a
                href="https://t.me/secondflow"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#0A4D68] transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/secondflow"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#0A4D68] transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="font-semibold mb-4" style={{ color: '#ffffff' }}>Продукты</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold mb-4" style={{ color: '#ffffff' }}>Компания</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold mb-4" style={{ color: '#ffffff' }}>Свяжитесь с нами</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 text-[#0A4D68] mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@secondflow.store"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  info@secondflow.store
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-5 h-5 text-[#0A4D68] mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+79211050409"
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >+7 (921) 105-04-09</a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-[#0A4D68] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">
                  Москва, Россия
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Links - Mobile */}
        <div className="mb-8 lg:hidden">
          <h3 className="font-semibold mb-4" style={{ color: '#ffffff' }}>Правовая информация</h3>
          <ul className="space-y-2">
            {legalLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="text-sm text-gray-500 text-center lg:text-left">
              © 2026 SecondFlow Ecosystem. Все права защищены.
            </p>
            
            {/* Legal Links - Desktop */}
            <div className="hidden lg:flex flex-wrap justify-center gap-4">
              {legalLinks.map((link, index) => (
                <span key={link.path}>
                  <Link to={link.path} className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
                    {link.label}
                  </Link>
                  {index < legalLinks.length - 1 && <span className="mx-2 text-gray-700">•</span>}
                </span>
              ))}
            </div>

            <p className="text-xs text-gray-600 text-center lg:text-right">
              ИНН: 7701234567 | ОГРН: 1027700012345
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
