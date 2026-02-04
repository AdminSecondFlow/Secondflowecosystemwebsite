import HeroSlider from '@/app/components/HeroSlider';
import SuccessStories from '@/app/components/SuccessStories';
import { ArrowRight, Zap, Shield, TrendingUp, Users, Globe, Clock } from 'lucide-react';

export default function HomePage() {
  const features = [
    {
      icon: <Zap className="w-32 h-32" strokeWidth={0.5} />,
      title: 'AI-автоматизация',
      description: 'Искусственный интеллект создает описания и публикует на 15+ площадках',
    },
    {
      icon: <Globe className="w-32 h-32" strokeWidth={0.5} />,
      title: 'Максимальный охват',
      description: 'Ваши товары видят покупатели на всех ключевых B2B-маркетплейсах',
    },
    {
      icon: <Shield className="w-32 h-32" strokeWidth={0.5} />,
      title: 'Безопасность сделок',
      description: 'Проверенные покупатели, эскроу-счета, юридическое сопровождение',
    },
    {
      icon: <TrendingUp className="w-32 h-32" strokeWidth={0.5} />,
      title: 'Прозрачная аналитика',
      description: 'Отслеживайте просмотры, запросы и статус каждой сделки',
    },
    {
      icon: <Users className="w-32 h-32" strokeWidth={0.5} />,
      title: 'B2B фокус',
      description: 'Работаем только с бизнесом - серьезные покупатели и продавцы',
    },
    {
      icon: <Clock className="w-32 h-32" strokeWidth={0.5} />,
      title: 'Быстрый старт',
      description: 'От загрузки до публикации на всех площадках - менее 24 часов',
    },
  ];

  const stats = [
    { value: '15+', label: 'Площадок размещения' },
    { value: '90', label: 'Дней средняя реализация' },
    { value: '500+', label: 'Успешных сделок' },
    { value: '50М+', label: 'Рублей выручки клиентов' },
  ];

  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="w-full px-4 lg:px-8">
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

      {/* Features Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="w-full px-4 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Почему выбирают SecondFlow
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto px-[0px] py-[10px] mx-[0px] my-[10px]">
              Мы создали экосистему, где каждый актив находит своего покупателя
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative bg-gradient-to-br from-white to-[#0A4D68]/3 p-10 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 overflow-hidden"
              >
                <div className="absolute top-1/2 right-4 -translate-y-1/2 text-[#0A4D68]/12 pointer-events-none scale-110">
                  {feature.icon}
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-center">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <SuccessStories />

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#0A4D68] via-[#0A4D68] to-[#FF6B4D] text-white">
        <div className="w-full px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-[#ffffff]">
            Готовы превратить неликвиды в прибыль?
          </h2>
          <p className="text-xl text-white/90 mb-14 max-w-2xl mx-auto">
            Присоединяйтесь к сотням компаний, которые уже зарабатывают на том, что раньше просто хранили
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="https://secondflowmain.glide.page"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#0A4D68] text-[#ffffff] rounded-lg font-semibold transition-all duration-300 hover:bg-[#007A9A] hover:shadow-lg hover:shadow-[#0A4D68]/30 hover:-translate-y-0.5 text-[16px] px-[20px] py-[10px]"
            >
              Продать
            </a>
            <a
              href="https://second-flow-store.glide.page"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#FF6B4D] text-[#ffffff] rounded-lg font-semibold transition-all duration-300 hover:bg-[#E85A40] hover:shadow-lg hover:shadow-[#FF6B4D]/30 hover:-translate-y-0.5 text-[16px] px-[20px] py-[10px]"
            >
              Купить
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
