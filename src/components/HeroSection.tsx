import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-secondary via-secondary-light to-primary min-h-[70vh] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl text-primary">🏛️</div>
        <div className="absolute top-20 right-20 text-4xl text-primary">🎭</div>
        <div className="absolute bottom-20 left-20 text-5xl text-primary">
          🎨
        </div>
        <div className="absolute bottom-10 right-10 text-3xl text-primary">
          🎵
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="animate-fade-in">
          {/* Anniversary Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary px-6 py-2 rounded-full mb-6 animate-golden-glow">
            <Icon name="Star" className="w-5 h-5" />
            <span className="font-montserrat font-semibold">80 ЛЕТ</span>
            <Icon name="Star" className="w-5 h-5" />
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold mb-6 leading-tight">
            Дворец Культуры
            <br />
            <span className="golden-text">Юбилей</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            80 лет служения искусству, культуре и творчеству. Присоединяйтесь к
            празднованию нашего великого юбилея!
          </p>

          {/* Anniversary Years */}
          <div className="flex justify-center items-center space-x-4 text-primary font-montserrat font-bold text-xl mb-8">
            <span>1944</span>
            <div className="w-12 h-0.5 bg-primary"></div>
            <span>2024</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-montserrat font-semibold flex items-center space-x-2 transition-all duration-200 transform hover:scale-105">
              <Icon name="Calendar" size={18} />
              <span>Программа мероприятий</span>
            </button>

            <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-montserrat font-semibold flex items-center space-x-2 transition-all duration-200">
              <Icon name="Download" size={18} />
              <span>Скачать приглашение</span>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-jubilee-cream to-transparent"></div>
    </section>
  );
};

export default HeroSection;
