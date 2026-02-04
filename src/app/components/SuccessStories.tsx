import { TrendingUp, Award, CheckCircle } from 'lucide-react';

interface CaseStudy {
  company: string;
  industry: string;
  revenue: string;
  duration: string;
  description: string;
  result: string;
}

const cases: CaseStudy[] = [
  {
    company: 'ПромСтройМаш',
    industry: 'Производство стройматериалов',
    revenue: '85 млн ₽',
    duration: '87 дней',
    description: 'Компания реализовала 12 тонн кирпича нестандартного размера и 300 м² керамогранита с производственным браком через платформу*',
    result: 'Освободили складские площади и вернули 20% балансовой стоимости активов',
  },
  {
    company: 'ТехноЛогистик',
    industry: 'Логистика и склад',
    revenue: '42 млн ₽',
    duration: '65 дней',
    description: 'Продали устаревшее складское оборудование (погрузчики, стеллажи) на общую сумму 42 млн рублей*',
    result: 'Полностью модернизировали склад за счет выручки от неликвидов',
  },
  {
    company: 'ЭлектроКомплект',
    industry: 'Электротехника',
    revenue: '28 млн ₽',
    duration: '45 дней',
    description: 'Реализовали кабельную продукцию со склада (3 года хранения) и электрощитовое оборудование*',
    result: 'Избежали списания на 28 млн и получили живые деньги',
  },
];

export default function SuccessStories() {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="w-full px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Истории успеха наших клиентов
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Реальные результаты компаний, которые превратили неликвиды в прибыль
          </p>
        </div>

        {/* Cases Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 mb-16">
          {cases.map((caseStudy, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              {/* Header */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-[#0A4D68] to-[#FF6B4D] bg-clip-text text-transparent">
                  "{caseStudy.company}"
                </h3>
                <span className="inline-block px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                  {caseStudy.industry}
                </span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8 p-6 bg-gray-50 rounded-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#FF6B4D] mb-1 flex items-center justify-center gap-1">
                    <TrendingUp className="w-5 h-5" />
                    {caseStudy.revenue}
                  </div>
                  <div className="text-sm text-gray-600">Выручка за {caseStudy.duration.split(' ')[0]} {caseStudy.duration.includes('месяц') ? 'месяца' : 'дней'}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#FF6B4D] mb-1">
                    {caseStudy.duration}
                  </div>
                  <div className="text-sm text-gray-600">Средний срок реализации</div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-8 leading-relaxed">
                {caseStudy.description}
              </p>

              {/* Result */}
              <div className="flex gap-3 p-5 bg-gradient-to-br from-[#0A4D68]/10 to-[#FF6B4D]/10 rounded-lg border-l-4 border-[#0A4D68]">
                <Award className="w-5 h-5 text-[#0A4D68] flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0A4D68] block mb-1">Результат:</strong>
                  <span className="text-gray-700">{caseStudy.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-sm text-gray-500 italic max-w-3xl mx-auto">
          * - В соответствии с политикой конфиденциальности названия и регионы присутствия компаний были изменены
        </p>
      </div>
    </section>
  );
}
