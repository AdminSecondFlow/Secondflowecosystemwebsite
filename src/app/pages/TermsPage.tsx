export default function TermsPage() {
  return (
    <div>
      <section className="py-20 bg-gradient-to-br from-[#0A4D68]/5 to-[#FF6B4D]/5">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Пользовательское соглашение
          </h1>
          <p className="text-gray-600">Последнее обновление: 2 февраля 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Предмет соглашения</h2>
              <p className="text-gray-700 leading-relaxed">
                Настоящее Пользовательское соглашение регулирует отношения между SecondFlow Ecosystem и пользователями платформы.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Регистрация и аккаунт</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Пользователь обязан предоставить достоверную информацию</li>
                <li>Один пользователь может иметь только один аккаунт</li>
                <li>Пользователь несет ответственность за безопасность своего аккаунта</li>
                <li>Передача доступа третьим лицам запрещена</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Права и обязанности продавца</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Размещать только легальные товары</li>
                <li>Предоставлять точную информацию о товаре</li>
                <li>Соблюдать сроки исполнения обязательств</li>
                <li>Оплачивать комиссию платформы</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Права и обязанности покупателя</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Оплачивать товары в согласованные сроки</li>
                <li>Принимать товар согласно условиям сделки</li>
                <li>Сообщать о проблемах с товаром в разумные сроки</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Комиссия платформы</h2>
              <p className="text-gray-700 leading-relaxed">
                Платформа взимает комиссию 3-5% от суммы сделки. Комиссия удерживается автоматически при проведении платежа.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Ответственность сторон</h2>
              <p className="text-gray-700 leading-relaxed">
                Платформа не несет ответственности за качество товаров, сроки доставки и выполнение обязательств между пользователями.
                Платформа выступает посредником и обеспечивает техническую возможность для сделок.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Порядок разрешения споров</h2>
              <p className="text-gray-700 leading-relaxed">
                Все споры решаются путем переговоров. При недостижении согласия - в соответствии с законодательством РФ.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
