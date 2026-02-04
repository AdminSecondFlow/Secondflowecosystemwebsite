import { AlertCircle, TrendingDown, DollarSign, Clock, Zap, Target } from 'lucide-react';

export default function WhyPage() {
  const problems = [
    {
      icon: <TrendingDown className="w-8 h-8" />,
      title: 'Замороженные активы',
      description: 'Миллионы рублей лежат на складах мертвым грузом, снижая рентабельность бизнеса',
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Потеря стоимости',
      description: 'Каждый месяц хранения неликвидов уменьшает их рыночную стоимость на 5-10%',
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Время на продажу',
      description: 'Ручное размещение на площадках занимает недели, а результат не гарантирован',
    },
  ];

  const solutions = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Автоматизация',
      description: 'AI создает объявления и размещает на 15+ площадках за 24 часа',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Максимальный охват',
      description: 'Ваши товары видят тысячи потенциальных покупателей одновременно',
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Быстрая монетизация',
      description: 'Средний срок реализации - 90 дней вместо 6-12 месяцев',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full mb-6">
            <AlertCircle className="w-5 h-5 text-red-600 mr-2" />
            <span className="text-red-600 font-semibold text-sm">Критическая проблема бизнеса</span>
          </div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
            Почему неликвиды — это проблема?
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
            Каждый день неликвидные активы съедают прибыль российских компаний
          </p>
        </div>
      </section>

      {/* Problems */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Три главные проблемы
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="bg-red-50 p-8 rounded-2xl border-2 border-red-100"
              >
                <div className="w-16 h-16 rounded-xl bg-red-100 flex items-center justify-center text-red-600 mb-6">
                  {problem.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {problem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Как SecondFlow решает эти проблемы
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0A4D68]/10 to-[#FF6B4D]/10 flex items-center justify-center text-[#0A4D68] mb-6">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {solution.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-[#0A4D68] to-[#FF6B4D] text-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Перестаньте терять деньги на неликвидах
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Начните зарабатывать на том, что раньше просто занимало место на складе
          </p>
          <a
            href="https://secondflowmain.glide.page"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0A4D68] rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-2xl"
          >
            Начать продавать
          </a>
        </div>
      </section>
    </div>
  );
}
