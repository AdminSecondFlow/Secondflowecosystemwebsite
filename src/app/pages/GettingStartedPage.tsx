import { ArrowRight, CheckCircle } from 'lucide-react';

export default function GettingStartedPage() {
  return (
    <div>
      <section className="py-20 lg:py-32 bg-gradient-to-br from-[#0A4D68]/5 to-[#FF6B4D]/5">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-center">
            Как начать работу
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-16">
            Простые шаги для старта на платформе SecondFlow
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* For Sellers */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 rounded-2xl bg-[#0A4D68] flex items-center justify-center text-white mb-6 text-2xl font-bold">
                S
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Для продавцов</h2>
              
              <ol className="space-y-4 mb-8">
                {[
                  'Зарегистрируйтесь на платформе',
                  'Загрузите фотографии и данные товаров',
                  'AI создаст описания автоматически',
                  'Публикация на всех площадках за 24 часа',
                  'Получайте предложения от покупателей',
                ].map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#0A4D68] text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>

              <a
                href="https://secondflowmain.glide.page"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-8 py-4 bg-[#0A4D68] text-white rounded-lg font-semibold transition-all duration-300 hover:bg-[#007A9A] hover:shadow-xl group"
              >
                Начать продавать
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* For Buyers */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 rounded-2xl bg-[#FF6B4D] flex items-center justify-center text-white mb-6 text-2xl font-bold">
                B
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Для покупателей</h2>
              
              <ol className="space-y-4 mb-8">
                {[
                  'Зарегистрируйтесь в каталоге',
                  'Найдите нужные товары через поиск',
                  'Свяжитесь с продавцом в чате',
                  'Согласуйте условия сделки',
                  'Оплатите и получите товар',
                ].map((step, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#FF6B4D] text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 pt-0.5">{step}</span>
                  </li>
                ))}
              </ol>

              <a
                href="https://second-flow-store.glide.page"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-8 py-4 bg-[#FF6B4D] text-white rounded-lg font-semibold transition-all duration-300 hover:bg-[#E85A40] hover:shadow-xl group"
              >
                Начать покупать
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
