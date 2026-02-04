import { 
  Zap, 
  Globe, 
  Eye, 
  Settings, 
  Shield, 
  Clock,
  Upload,
  Sparkles,
  Target,
  CheckCircle,
  Camera,
  ThumbsUp
} from 'lucide-react';

export default function SellersPage() {
  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Максимальный охват покупателей',
      description: 'Ваши товары автоматически размещаются на всех ключевых B2B-площадках, отраслевых маркетплейсах и в нашем собственном SecondFlow Store',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Автоматизация от А до Я',
      description: 'Искусственный интеллект создает описания, подбирает категории, устанавливает рекомендуемые цены и публикует объявления без вашего участия',
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: 'Прозрачность и контроль',
      description: 'Следите за статусом каждого лота в реальном времени: просмотры, запросы, текущие переговоры и совершенные сделки',
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Гибкие настройки продаж',
      description: 'Установите минимальную цену, разрешите торг, настройте условия доставки и оплаты под свою бизнес-модель',
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Гарантия безопасности',
      description: 'Проверенные покупатели, безопасные платежи через эскроу-счета, юридическое сопровождение каждой сделки',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Быстрый старт',
      description: 'От загрузки первого фото до появления на площадках — менее 24 часов. Никаких сложных процедур и долгих согласований',
    },
  ];

  const steps = [
    {
      number: '1',
      title: 'Загрузите данные',
      description: 'Excel-файл, фотографии или просто список — мы примем в любом формате',
      icon: <Upload className="w-8 h-8" />,
    },
    {
      number: '2',
      title: 'AI создаст объявления',
      description: 'Автоматическое описание, SEO-оптимизация, подбор категорий и ценообразование',
      icon: <Sparkles className="w-8 h-8" />,
    },
    {
      number: '3',
      title: 'Публикация на 15+ площадках',
      description: 'Ваш товар появится везде одновременно: от Авито до отраслевых B2B-каталогов',
      icon: <Target className="w-8 h-8" />,
    },
    {
      number: '4',
      title: 'Получайте предложения',
      description: 'Отслеживайте заявки, ведите переговоры, заключайте сделки прямо в системе',
      icon: <CheckCircle className="w-8 h-8" />,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A4D68]/5 to-[#FF6B4D]/5" />
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1768796373360-95d80c5830fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBpbnZlbnRvcnklMjBtYW5hZ2VtZW50JTIwYm94ZXN8ZW58MXx8fHwxNzcwMTM3NTIwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Warehouse"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        
        <div className="relative max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-4 py-2 bg-[#0A4D68]/10 rounded-full mb-6">
              <span className="text-[#0A4D68] font-semibold text-sm">SecondFlow для продавцов</span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Ваш цифровой директор по неликвидам
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8">
              Превратим залежавшиеся активы в реальные деньги и освободим ваши склады
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://secondflowmain.glide.page"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#0A4D68] text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-[#007A9A] hover:shadow-2xl hover:shadow-[#0A4D68]/30 hover:-translate-y-1"
              >
                ПРОДАТЬ
              </a>
            </div>
          </div>

          {/* QR Code */}
          <div className="mt-12 p-6 bg-white rounded-2xl shadow-lg inline-block">
            <img
              src="https://images.unsplash.com/photo-1605513524042-426bace35fc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxciUyMGNvZGUlMjBzbWFydHBob25lJTIwc2Nhbm5pbmd8ZW58MXx8fHwxNzcwMTM3MzU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="QR код для продавцов"
              className="w-40 h-40 object-contain"
            />
            <p className="text-sm text-gray-600 text-center mt-3">
              Сканируйте для быстрого доступа<br />к платформе
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ключевые возможности
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-gray-200 hover:border-[#0A4D68] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0A4D68]/10 to-[#FF6B4D]/10 flex items-center justify-center text-[#0A4D68] mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Как это работает?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0A4D68] to-[#FF6B4D] flex items-center justify-center text-white mb-6 text-2xl font-bold">
                    {step.number}
                  </div>
                  <div className="text-[#0A4D68] mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#0A4D68] to-[#FF6B4D]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#0A4D68] to-[#007A9A] text-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <div className="flex justify-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Camera className="w-8 h-8" />
            </div>
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <ThumbsUp className="w-8 h-8" />
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Сделайте только фото — остальное сделаем мы
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Никаких таблиц, описаний и рутины. Просто сфотографируйте ваши активы — наш AI превратит их в продающие объявления на всех ключевых площадках
          </p>
          <a
            href="https://secondflowmain.glide.page"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0A4D68] rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-2xl hover:-translate-y-1"
          >
            Начать продавать
          </a>
        </div>
      </section>
    </div>
  );
}
