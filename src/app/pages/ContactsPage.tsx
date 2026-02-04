import { Mail, Phone, MapPin, Send, MessageSquare, User, Briefcase } from 'lucide-react';
import { useState } from 'react';

export default function ContactsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    segment: '',
  });

  const segments = [
    { icon: <Briefcase className="w-6 h-6" />, title: 'Я продавец', description: 'Хочу продать неликвиды' },
    { icon: <MessageSquare className="w-6 h-6" />, title: 'Я покупатель', description: 'Ищу выгодные предложения' },
    { icon: <User className="w-6 h-6" />, title: 'Партнерство', description: 'Предложение о сотрудничестве' },
    { icon: <Send className="w-6 h-6" />, title: 'Другое', description: 'Общий вопрос' },
  ];

  const contacts = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'info@secondflow.store',
      link: 'mailto:info@secondflow.store',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Телефон',
      value: '+7 (999) 123-45-67',
      link: 'tel:+79991234567',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Адрес',
      value: 'Москва, Россия',
      link: null,
    },
    {
      icon: <Send className="w-6 h-6" />,
      title: 'Telegram',
      value: '@secondflow',
      link: 'https://t.me/secondflow',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#0A4D68]/5 to-[#FF6B4D]/5">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
            Свяжитесь с нами
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
            Мы всегда готовы ответить на ваши вопросы
          </p>
        </div>
      </section>

      {/* Segments */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {segments.map((segment, index) => (
              <button
                key={index}
                onClick={() => setFormData({ ...formData, segment: segment.title })}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left hover:shadow-xl ${
                  formData.segment === segment.title
                    ? 'border-[#0A4D68] bg-gradient-to-br from-[#0A4D68]/5 to-[#FF6B4D]/5'
                    : 'border-gray-200 hover:border-[#0A4D68]/50'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  formData.segment === segment.title
                    ? 'bg-[#0A4D68] text-white'
                    : 'bg-gray-100 text-gray-700'
                }`}>
                  {segment.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{segment.title}</h3>
                <p className="text-sm text-gray-600">{segment.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Отправьте нам сообщение
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Имя *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0A4D68] focus:border-transparent outline-none transition-all"
                    placeholder="Ваше имя"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0A4D68] focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0A4D68] focus:border-transparent outline-none transition-all"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Компания
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0A4D68] focus:border-transparent outline-none transition-all"
                    placeholder="Название компании"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Сообщение *
                  </label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#0A4D68] focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Ваше сообщение..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#0A4D68] to-[#FF6B4D] text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                >
                  Отправить сообщение
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Контактная информация
              </h2>
              
              <div className="space-y-6 mb-12">
                {contacts.map((contact, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0A4D68]/10 to-[#FF6B4D]/10 flex items-center justify-center text-[#0A4D68] flex-shrink-0">
                      {contact.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">{contact.title}</div>
                      {contact.link ? (
                        <a
                          href={contact.link}
                          className="text-gray-600 hover:text-[#0A4D68] transition-colors"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <div className="text-gray-600">{contact.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-200 rounded-2xl h-64 flex items-center justify-center">
                <MapPin className="w-12 h-12 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
