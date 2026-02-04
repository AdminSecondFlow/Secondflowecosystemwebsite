import { 
  DollarSign, 
  Package, 
  ShieldCheck,
  Search,
  MessageSquare,
  ShoppingCart,
  Truck
} from 'lucide-react';

export default function BuyersPage() {
  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: 'Экономия до 70%',
      description: 'Покупайте оборудование, материалы и комплектующие по ценам существенно ниже рыночных. Продавцы готовы к скидкам, чтобы освободить склады',
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: 'Уникальный ассортимент',
      description: 'Снятые с производства позиции, редкие материалы, эксклюзивное оборудование — то, что сложно найти на обычных площадках',
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: 'Проверенные продавцы',
      description: 'Все поставщики проходят верификацию. Юридическая чистота сделок, прозрачные условия, гарантия безопасности платежей',
    },
  ];

  const categories = [
    { emoji: '🏗️', title: 'Стройматериалы', description: 'Кирпич, цемент, металлоконструкции, кровля' },
    { emoji: '⚙️', title: 'Оборудование', description: 'Станки, прессы, конвейеры, складская техника' },
    { emoji: '⚡', title: 'Электротехника', description: 'Кабель, электрощиты, трансформаторы' },
    { emoji: '🔧', title: 'Инструменты', description: 'Электроинструмент, ручной инструмент, оснастка' },
    { emoji: '🚚', title: 'Автокомпоненты', description: 'Запчасти, шины, аккумуляторы, расходники' },
    { emoji: '📦', title: 'Упаковка', description: 'Картон, пленка, тара, паллеты' },
  ];

  const steps = [
    {
      number: '1',
      title: 'Найдите товар',
      description: 'Используйте поиск или фильтры по категориям, регионам и ценам',
      icon: <Search className="w-8 h-8" />,
    },
    {
      number: '2',
      title: 'Уточните детали',
      description: 'Задайте вопросы продавцу через чат, запросите дополнительные фото',
      icon: <MessageSquare className="w-8 h-8" />,
    },
    {
      number: '3',
      title: 'Оформите заказ',
      description: 'Согласуйте условия, оплатите через безопасный эскроу-счет',
      icon: <ShoppingCart className="w-8 h-8" />,
    },
    {
      number: '4',
      title: 'Получите товар',
      description: 'Самовывоз или доставка — выбирайте удобный вам вариант',
      icon: <Truck className="w-8 h-8" />,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B4D]/5 to-[#0A4D68]/5" />
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1763872011479-aa293bf083a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMGNhcnQlMjBlY29tbWVyY2UlMjBtYXJrZXRwbGFjZXxlbnwxfHx8fDE3NzAxMzc1MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Marketplace"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        
        <div className="relative max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 bg-[#FF6B4D]/10 rounded-full mb-6">
              <span className="text-[#FF6B4D] font-semibold text-sm">SecondFlow Store</span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              B2B-маркетплейс неликвидных активов
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8">
              Находите уникальные предложения, которых нет на обычных площадках
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://second-flow-store.glide.page"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#FF6B4D] text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-[#E85A40] hover:shadow-2xl hover:shadow-[#FF6B4D]/30 hover:-translate-y-1"
              >
                КУПИТЬ
              </a>
            </div>
          </div>

          {/* QR Code */}
          <div className="mt-12 p-6 bg-white rounded-2xl shadow-lg inline-block">
            <img
              src="https://images.unsplash.com/photo-1605513524042-426bace35fc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxciUyMGNvZGUlMjBzbWFydHBob25lJTIwc2Nhbm5pbmd8ZW58MXx8fHwxNzcwMTM3MzU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="QR код для покупателей"
              className="w-40 h-40 object-contain"
            />
            <p className="text-sm text-gray-600 text-center mt-3">
              Сканируйте для доступа<br />к каталогу
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Три основных преимущества
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border border-gray-200 hover:border-[#FF6B4D] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B4D]/10 to-[#0A4D68]/10 flex items-center justify-center text-[#FF6B4D] mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Популярные категории
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {category.emoji}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600">
                  {category.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://second-flow-store.glide.page"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#FF6B4D] text-[#FF6B4D] rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-[#FF6B4D] hover:text-white hover:shadow-xl"
            >
              Смотреть все категории
            </a>
          </div>
        </div>
      </section>

      {/* How to Buy */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Как покупать?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF6B4D] to-[#0A4D68] flex items-center justify-center text-white mb-6 text-2xl font-bold">
                    {step.number}
                  </div>
                  <div className="text-[#FF6B4D] mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#FF6B4D] to-[#E85A40] text-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Начните экономить сегодня
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Тысячи уникальных предложений от проверенных поставщиков. Регистрация займет 2 минуты.
          </p>
          <a
            href="https://second-flow-store.glide.page"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#FF6B4D] rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-2xl hover:-translate-y-1"
          >
            Перейти в каталог
          </a>
        </div>
      </section>
    </div>
  );
}
