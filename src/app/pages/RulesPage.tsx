import { AlertCircle, CheckCircle, XCircle } from 'lucide-react';

export default function RulesPage() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-[#0A4D68]/5 to-[#FF6B4D]/5">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Правила размещения товаров
          </h1>
          <p className="text-xl text-gray-600">
            Соблюдайте эти правила для эффективной продажи на платформе
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <CheckCircle className="w-7 h-7 text-green-600" />
              Разрешено к размещению
            </h2>
            <ul className="space-y-2 mb-8">
              <li>Новые и б/у товары в рабочем состоянии</li>
              <li>Товары с незначительными дефектами (с указанием в описании)</li>
              <li>Остатки со склада, излишки производства</li>
              <li>Снятые с производства позиции</li>
              <li>Оборудование, материалы, комплектующие</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <XCircle className="w-7 h-7 text-red-600" />
              Запрещено к размещению
            </h2>
            <ul className="space-y-2 mb-8">
              <li>Контрафактная продукция</li>
              <li>Товары без документов происхождения</li>
              <li>Опасные материалы без соответствующих разрешений</li>
              <li>Товары, запрещенные законодательством РФ</li>
              <li>Б/у товары в неработающем состоянии без возможности ремонта</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <AlertCircle className="w-7 h-7 text-orange-600" />
              Требования к описанию
            </h2>
            <ul className="space-y-2 mb-8">
              <li>Точное наименование товара</li>
              <li>Подробные технические характеристики</li>
              <li>Указание количества и единиц измерения</li>
              <li>Четкие фотографии (минимум 3 шт)</li>
              <li>Честное описание состояния и дефектов</li>
              <li>Условия доставки и оплаты</li>
            </ul>

            <div className="bg-gradient-to-br from-[#0A4D68]/5 to-[#FF6B4D]/5 p-6 rounded-xl">
              <p className="text-gray-700 mb-0">
                <strong>Важно:</strong> За нарушение правил размещения товар может быть снят с публикации, 
                а аккаунт заблокирован. Мы проверяем все объявления перед публикацией.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
