import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://cdn.poehali.dev/files/e9862c8c-8edc-432f-abdf-28d0648a7169.jpg)",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white z-10">
        <div className="animate-fade-in">
          {/* Anniversary Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary px-6 py-2 rounded-full mb-6">
            <Icon name="Star" className="w-5 h-5" />
            <span className="font-montserrat font-semibold">80 ЛЕТ</span>
            <Icon name="Star" className="w-5 h-5" />
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold mb-6 leading-tight">
            Дворец Культуры
            <br />
            <span className="text-white">и Техники</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            80 лет служения искусству, культуре и творчеству. Присоединяйтесь к
            празднованию нашего великого юбилея!
          </p>

          {/* Anniversary Years */}
          <div className="flex justify-center items-center space-x-4 text-white font-montserrat font-bold text-xl mb-8">
            <span>1944</span>
            <div className="w-12 h-0.5 bg-white"></div>
            <span>2024</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-montserrat font-semibold flex items-center justify-center space-x-2 transition-all duration-200 transform hover:scale-105">
              <Icon name="Calendar" size={18} />
              <span>Программа мероприятий</span>
            </button>

            <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-montserrat font-semibold flex items-center justify-center space-x-2 transition-all duration-200">
              <Icon name="Download" size={18} />
              <span>Скачать приглашение</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
