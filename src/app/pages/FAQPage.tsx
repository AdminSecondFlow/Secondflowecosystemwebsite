import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Что такое SecondFlow?',
      answer: 'SecondFlow - это цифровая платформа для автоматической продажи неликвидных активов на 15+ B2B маркетплейсах. Мы используем AI для создания описаний и публикации товаров.',
    },
    {
      question: 'Как быстро мой товар появится на площадках?',
      answer: 'После загрузки данных и фотографий, ваш товар появится на всех площадках в течение 24 часов.',
    },
    {
      question: 'Какая комиссия за продажу?',
      answer: 'Мы берем комиссию 3-5% только с успешно завершенных сделок. Никаких скрытых платежей.',
    },
    {
      question: 'Как обеспечивается безопасность сделок?',
      answer: 'Мы проверяем всех участников, используем эскроу-счета для платежей и предоставляем юридическое сопровождение каждой сделки.',
    },
    {
      question: 'Можно ли продавать только оптом?',
      answer: 'Да, наша платформа ориентирована на B2B сегмент. Мы работаем только с юридическими лицами и ИП.',
    },
    {
      question: 'Какие категории товаров можно продавать?',
      answer: 'Стройматериалы, оборудование, электротехника, инструменты, автокомпоненты, упаковка и другие B2B товары.',
    },
    {
      question: 'Нужно ли самостоятельно размещать объявления?',
      answer: 'Нет! Наш AI автоматически создает описания, подбирает категории и размещает на всех площадках.',
    },
    {
      question: 'Как отслеживать статус товаров?',
      answer: 'В личном кабинете вы видите все: просмотры, запросы, предложения покупателей и статус сделок в реальном времени.',
    },
  ];

  return (
    <div>
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#0A4D68]/5 to-[#FF6B4D]/5">
        <div className="max-w-3xl mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center">
            Часто задаваемые вопросы
          </h1>
          <p className="text-xl text-gray-600 text-center mb-12">
            Ответы на популярные вопросы о SecondFlow
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
