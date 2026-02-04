import { ArrowRight } from 'lucide-react';

export default function CategoriesPage() {
  const categories = [
    {
      emoji: '🏗️',
      title: 'Стройматериалы',
      items: ['Кирпич', 'Цемент', 'Металлоконструкции', 'Кровельные материалы', 'Изоляция', 'Лакокрасочные материалы'],
    },
    {
      emoji: '⚙️',
      title: 'Оборудование',
      items: ['Станки', 'Прессы', 'Конвейеры', 'Складская техника', 'Погрузчики', 'Подъемники'],
    },
    {
      emoji: '⚡',
      title: 'Электротехника',
      items: ['Кабельная продукция', 'Электрощиты', 'Трансформаторы', 'Светильники', 'Автоматика', 'Генераторы'],
    },
    {
      emoji: '🔧',
      title: 'Инструменты',
      items: ['Электроинструмент', 'Ручной инструмент', 'Измерительный инструмент', 'Оснастка', 'Расходные материалы', 'Спецодежда'],
    },
    {
      emoji: '🚚',
      title: 'Автокомпоненты',
      items: ['Запчасти', 'Шины', 'Аккумуляторы', 'Масла и жидкости', 'Аксессуары', 'Расходники'],
    },
    {
      emoji: '📦',
      title: 'Упаковка',
      items: ['Картонная упаковка', 'Пленка', 'Тара', 'Паллеты', 'Скотч и лента', 'Этикетки'],
    },
    {
      emoji: '🏭',
      title: 'Промышленное сырье',
      items: ['Металлопрокат', 'Пластики', 'Химическое сырье', 'Текстиль', 'Древесина', 'Резина'],
    },
    {
      emoji: '🖥️',
      title: 'Оргтехника',
      items: ['Компьютеры', 'Принтеры', 'Серверы', 'Сетевое оборудование', 'Офисная мебель', 'Телефония'],
    },
    {
      emoji: '🏪',
      title: 'Торговое оборудование',
      items: ['Витрины', 'Стеллажи', 'Кассовое оборудование', 'Холодильное оборудование', 'Весы', 'Манекены'],
    },
    {
      emoji: '🍽️',
      title: 'HoReCa',
      items: ['Кухонное оборудование', 'Посуда', 'Мебель для ресторанов', 'Барное оборудование', 'Текстиль', 'Инвентарь'],
    },
    {
      emoji: '🎨',
      title: 'Рекламные материалы',
      items: ['Баннеры', 'Стенды', 'Вывески', 'Промо-продукция', 'Печатные материалы', 'Сувениры'],
    },
    {
      emoji: '🏥',
      title: 'Медоборудование',
      items: ['Диагностическое оборудование', 'Мебель медицинская', 'Расходные материалы', 'Инструменты', 'Средства защиты', 'Дезинфекция'],
    },
  ];

  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-[#0A4D68]/5 to-[#FF6B4D]/5">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Категории товаров
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полный каталог категорий на платформе SecondFlow
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-[#0A4D68] hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {category.emoji}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-2 mb-6">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-gray-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B4D]"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://second-flow-store.glide.page"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#0A4D68] font-semibold hover:gap-3 transition-all"
                >
                  Смотреть товары
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Не нашли нужную категорию?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Мы постоянно расширяем каталог. Свяжитесь с нами, и мы добавим вашу категорию.
          </p>
          <a
            href="https://secondflowmain.glide.page"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#0A4D68] to-[#FF6B4D] text-white rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            Связаться с нами
          </a>
        </div>
      </section>
    </div>
  );
}
