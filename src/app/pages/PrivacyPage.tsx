export default function PrivacyPage() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-[#0A4D68]/5 to-[#FF6B4D]/5">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Политика конфиденциальности
          </h1>
          <p className="text-gray-600">Последнее обновление: 2 февраля 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Общие положения</h2>
              <p className="text-gray-700 leading-relaxed">
                Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных 
                пользователей платформы SecondFlow Ecosystem.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Собираемые данные</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Мы собираем следующую информацию:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Контактные данные (ФИО, email, телефон)</li>
                <li>Данные компании (название, ИНН, юридический адрес)</li>
                <li>Информация о товарах и сделках</li>
                <li>Технические данные (IP-адрес, cookies)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Использование данных</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Мы используем данные для:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Предоставления услуг платформы</li>
                <li>Обработки заказов и сделок</li>
                <li>Коммуникации с пользователями</li>
                <li>Улучшения качества сервиса</li>
                <li>Соблюдения законодательства</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Защита данных</h2>
              <p className="text-gray-700 leading-relaxed">
                Мы применяем современные технологии шифрования и защиты данных. Доступ к персональной информации 
                имеют только уполномоченные сотрудники.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Права пользователей</h2>
              <p className="text-gray-700 leading-relaxed mb-4">Вы имеете право:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Получать доступ к своим данным</li>
                <li>Исправлять неточную информацию</li>
                <li>Удалять свои данные</li>
                <li>Ограничивать обработку данных</li>
                <li>Отозвать согласие на обработку</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Контакты</h2>
              <p className="text-gray-700 leading-relaxed">
                По вопросам защиты данных: <a href="mailto:privacy@secondflow.store" className="text-[#0A4D68] hover:underline">privacy@secondflow.store</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
