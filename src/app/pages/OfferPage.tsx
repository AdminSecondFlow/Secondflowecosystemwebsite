export default function OfferPage() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-[#0A4D68]/5 to-[#FF6B4D]/5">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Публичная оферта
          </h1>
          <p className="text-gray-600">Договор оказания услуг</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Общие положения</h2>
              <p className="text-gray-700 leading-relaxed">
                Настоящая публичная оферта является предложением SecondFlow Ecosystem (далее - "Исполнитель") 
                заключить договор оказания услуг на изложенных ниже условиях.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Предмет договора</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Исполнитель обязуется оказать Заказчику следующие услуги:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Предоставление доступа к платформе SecondFlow</li>
                <li>AI-обработка данных о товарах</li>
                <li>Размещение объявлений на партнерских площадках</li>
                <li>Техническая поддержка пользователей</li>
                <li>Обеспечение безопасности транзакций</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Стоимость услуг</h2>
              <p className="text-gray-700 leading-relaxed">
                Стоимость услуг определяется тарифным планом, выбранным Заказчиком. 
                Комиссия за успешные сделки составляет 3-5% от суммы транзакции.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Порядок оплаты</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Оплата производится на основании выставленного счета</li>
                <li>Комиссия удерживается автоматически при проведении сделки</li>
                <li>НДС включен в стоимость услуг</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Ответственность сторон</h2>
              <p className="text-gray-700 leading-relaxed">
                Исполнитель несет ответственность за работоспособность платформы и сохранность данных. 
                Заказчик несет ответственность за достоверность размещаемой информации.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Реквизиты</h2>
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-gray-700 mb-2"><strong>Наименование:</strong> ООО "СекондФлоу"</p>
                <p className="text-gray-700 mb-2"><strong>ИНН:</strong> 7701234567</p>
                <p className="text-gray-700 mb-2"><strong>ОГРН:</strong> 1027700012345</p>
                <p className="text-gray-700 mb-2"><strong>Адрес:</strong> Москва, Россия</p>
                <p className="text-gray-700"><strong>Email:</strong> info@secondflow.store</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
