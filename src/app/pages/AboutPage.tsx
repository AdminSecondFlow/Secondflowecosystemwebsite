import { Target, Eye, Users, Award, TrendingUp, Zap } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { value: '2024', label: 'Год основания' },
    { value: '500+', label: 'Успешных сделок' },
    { value: '15+', label: 'Площадок интеграции' },
    { value: '50М+', label: 'Рублей выручки клиентов' },
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Миссия',
      description: 'Превратить каждый неликвидный актив в ценный ресурс через технологии и автоматизацию',
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Видение',
      description: 'Стать ведущей цифровой экосистемой циркулярной экономики в России и СНГ',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Ценности',
      description: 'Прозрачность, инновации, результативность и забота о клиентах',
    },
  ];

  const differences = [
    'AI-автоматизация создания объявлений',
    'Публикация на 15+ площадках одновременно',
    'Фокус на B2B сегменте',
    'Проверка всех участников сделок',
    'Безопасные платежи через эскроу',
    'Юридическое сопровождение',
  ];

  const tech = [
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'AI/ML' },
    { name: 'TensorFlow', category: 'AI/ML' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Redis', category: 'Cache' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A4D68]/10 to-[#FF6B4D]/10" />
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1763191213523-1489179a1088?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwb2ZmaWNlJTIwbW9kZXJuJTIwd29ya3NwYWNlfGVufDF8fHx8MTc3MDEzNzUyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Office"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        
        <div className="relative max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
            О SecondFlow Ecosystem
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
            Цифровой хаб циркулярной экономики, где каждый актив находит своего покупателя
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#0A4D68] to-[#FF6B4D] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0A4D68]/10 to-[#FF6B4D]/10 flex items-center justify-center text-[#0A4D68] mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Чем мы отличаемся
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {differences.map((diff, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gradient-to-br hover:from-[#0A4D68]/5 hover:to-[#FF6B4D]/5 transition-all duration-300"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#0A4D68] to-[#FF6B4D] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">{diff}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 lg:py-24 bg-gray-900 text-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Технологический стек
            </h2>
            <p className="text-xl text-gray-400">
              Современные технологии для максимальной производительности
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tech.map((technology, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center hover:bg-white/20 transition-all duration-300"
              >
                <div className="text-4xl mb-3">💻</div>
                <div className="font-bold mb-1">{technology.name}</div>
                <div className="text-sm text-gray-400">{technology.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Наша команда
            </h2>
            <p className="text-xl text-gray-600">
              Профессионалы с опытом в e-commerce, AI и B2B маркетплейсах
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { role: 'CEO & Founder', team: 'Стратегия' },
              { role: 'CTO', team: 'Технологии' },
              { role: 'Head of Product', team: 'Продукт' },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#0A4D68] to-[#FF6B4D] mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.role}
                </h3>
                <p className="text-gray-600">{member.team}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#0A4D68] to-[#FF6B4D] text-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Присоединяйтесь к экосистеме SecondFlow
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Станьте частью растущего сообщества компаний, которые эффективно управляют своими активами
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://secondflowmain.glide.page"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0A4D68] rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-2xl"
            >
              Начать продавать
            </a>
            <a
              href="https://second-flow-store.glide.page"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white hover:text-[#0A4D68]"
            >
              Начать покупать
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
