import { AlertTriangle, FileText, MessageSquare, CheckCircle } from 'lucide-react';

export default function ComplaintsPage() {
  const steps = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Шаг 1: Подача претензии',
      description: 'Направьте претензию в письменном виде на email: complaints@secondflow.store с описанием проблемы и приложением подтверждающих документов.',
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Шаг 2: Рассмотрение',
      description: 'Мы рассматриваем претензию в течение 10 рабочих дней с момента получения. При необходимости можем запросить дополнительную информацию.',
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Шаг 3: Решение',
      description: 'По результатам рассмотрения мы направляем мотивированный ответ и принимаем меры для урегулирования ситуации.',
    },
  ];

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-[#0A4D68]/5 to-[#FF6B4D]/5">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <AlertTriangle className="w-12 h-12 text-orange-600" />
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Процедура претензий
            </h1>
          </div>
          <p className="text-xl text-gray-600 text-center">
            Мы стремимся решать все вопросы оперативно и справедливо
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="space-y-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#0A4D68]/10 to-[#FF6B4D]/10 flex items-center justify-center text-[#0A4D68] flex-shrink-0">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Информация для претензии</h2>
            <p className="text-gray-700 mb-4">Пожалуйста, укажите в претензии:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Ваши контактные данные (ФИО, email, телефон, название компании)</li>
              <li>Номер сделки или объявления (если применимо)</li>
              <li>Подробное описание проблемы</li>
              <li>Ваши требования</li>
              <li>Документы, подтверждающие претензию</li>
            </ul>
            <div className="bg-white p-4 rounded-lg">
              <p className="text-gray-700"><strong>Email для претензий:</strong> <a href="mailto:complaints@secondflow.store" className="text-[#0A4D68] hover:underline">complaints@secondflow.store</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
