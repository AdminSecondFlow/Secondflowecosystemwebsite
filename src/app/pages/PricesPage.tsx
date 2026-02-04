import { Check } from 'lucide-react';

export default function PricesPage() {
  const plans = [
    {
      name: 'Базовый',
      price: '0 ₽',
      period: 'навсегда',
      description: 'Для начинающих продавцов',
      features: [
        'Размещение до 10 товаров',
        'Публикация на 5 площадках',
        'Базовая аналитика',
        'Email поддержка',
      ],
      cta: 'Начать бесплатно',
      popular: false,
    },
    {
      name: 'Профессиональный',
      price: '9 990 ₽',
      period: 'в месяц',
      description: 'Для активных продавцов',
      features: [
        'Неограниченное количество товаров',
        'Публикация на 15+ площадках',
        'AI-описания товаров',
        'Расширенная аналитика',
        'Приоритетная поддержка',
        'Персональный менеджер',
      ],
      cta: 'Выбрать план',
      popular: true,
    },
    {
      name: 'Корпоративный',
      price: 'По запросу',
      period: '',
      description: 'Для крупных компаний',
      features: [
        'Все из Профессионального',
        'Индивидуальная интеграция',
        'Выделенный сервер',
        'API доступ',
        'SLA 99.9%',
        'Персональная команда',
      ],
      cta: 'Связаться с нами',
      popular: false,
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#0A4D68]/5 to-[#FF6B4D]/5">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
            Прозрачные тарифы
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
            Выберите план, который подходит для вашего бизнеса
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                  plan.popular ? 'border-2 border-[#FF6B4D] transform scale-105' : 'border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#FF6B4D] text-white rounded-full text-sm font-semibold">
                    Популярный
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="text-4xl font-bold text-gray-900">{plan.price}</div>
                  {plan.period && <div className="text-gray-600">{plan.period}</div>}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#0A4D68] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://secondflowmain.glide.page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 rounded-lg font-semibold text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-[#FF6B4D] text-white hover:bg-[#E85A40] hover:shadow-xl'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Часто задаваемые вопросы
          </h2>
          
          <div className="space-y-6">
            {[
              {
                q: 'Как происходит оплата?',
                a: 'Вы можете оплатить услуги банковской картой, по счету или через электронный кошелек.',
              },
              {
                q: 'Можно ли изменить тариф?',
                a: 'Да, вы можете в любой момент перейти на другой тариф. Неиспользованные средства будут зачтены.',
              },
              {
                q: 'Есть ли комиссия за сделки?',
                a: 'Мы берем комиссию 3-5% только с успешно завершенных сделок.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
