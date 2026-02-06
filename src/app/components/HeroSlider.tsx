import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import heroImage1 from '../../assets/images/hero-1.jpg';
import heroImage2 from '../../assets/images/hero-2.jpg';
import heroImage3 from '../../assets/images/hero-3.jpg';
import heroImage4 from '../../assets/images/hero-4.jpg';
import heroImage5 from '../../assets/images/hero-5.jpg';

interface Slide {
  title: string;
  image: string;
  alt: string;
}

const slides: Slide[] = [
  {
    title: 'Превратим Ваши неликвиды в живые деньги за 90 дней',
    image: heroImage1,
    alt: 'Поддон денег на складе',
  },
  {
    title: 'Продавай неликвиды везде и сразу. Загрузи один раз - продавай на 15+ маркетплейсах',
    image: heroImage2,
    alt: 'Довольный менеджер',
  },
  {
    title: 'Прекратите хранить - Начните продавать - AI-платформа мгновенной продажи неликвидов!',
    image: heroImage3,
    alt: 'AI робот',
  },
  {
    title: 'Мы находим ценность там, где другие видят только негодный хлам!',
    image: heroImage4,
    alt: 'Золотые слитки в грязи',
  },
  {
    title: 'Экосистема, где ваш неликвид становится важным ресурсом!',
    image: heroImage5,
    alt: 'Деловое рукопожатие',
  },
];

const subtitle = 'Мы автоматически публикуем ваш товар на всех самых популярных маркетплейсах и ключевых B2B-площадках';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen overflow-hidden -mt-18">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30" />
          </div>

          {/* Content */}
          <div className="relative z-20 h-full flex flex-col justify-center px-4 text-center pt-20 pb-8">
            <div className="flex-1 flex items-center justify-center">
              <div className="max-w-4xl px-4">
                <h1 className="font-bold mb-6 leading-tight animate-fade-in font-[Rubik] text-[32px] sm:text-[40px] md:text-[48px]" style={{ color: '#ffffff' }}>
                  {slide.title}
                </h1>
                <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
                  <a
                    href="https://secondflowmain.glide.page"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#0A4D68] text-[#ffffff] rounded-3xl font-semibold text-[18px] transition-all duration-300 hover:bg-[#007A9A] hover:shadow-2xl hover:shadow-[#0A4D68]/50 hover:-translate-y-1 font-[Rubik] px-12 py-4 min-w-[180px] inline-block text-center"
                  >Продать</a>
                  <a
                    href="https://second-flow-store.glide.page"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#FF6B4D] text-[#ffffff] rounded-3xl font-semibold text-[18px] transition-all duration-300 hover:bg-[#E85A40] hover:shadow-2xl hover:shadow-[#FF6B4D]/50 hover:-translate-y-1 font-[Rubik] px-12 py-4 min-w-[180px] inline-block text-center"
                  >Купить</a>
                </div>
              </div>
            </div>
            {/* Subtitle at the bottom */}
            <div className="pb-16 sm:pb-20">
              <p className="text-base sm:text-lg md:text-xl text-white/90 italic max-w-3xl mx-auto animate-fade-in-delay px-4">
                «{subtitle}»
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 group-hover:scale-125 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 group-hover:scale-125 transition-transform" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-12 h-3 bg-white'
                : 'w-3 h-3 bg-white/40 hover:bg-white/70 hover:scale-125'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
