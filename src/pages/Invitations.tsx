import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";

const Invitations = () => {
  const invitationTypes = [
    {
      title: "Торжественное открытие",
      description: "Персональное приглашение на гала-концерт",
      image: "🎭",
      formats: ["PDF", "PNG"],
      date: "15 марта 2024",
    },
    {
      title: "Концерт классической музыки",
      description: "Изысканное приглашение для ценителей музыки",
      image: "🎼",
      formats: ["PDF", "PNG"],
      date: "5 апреля 2024",
    },
    {
      title: "Театральный фестиваль",
      description: "Приглашение на театральные представления",
      image: "🎪",
      formats: ["PDF", "PNG"],
      date: "12 апреля 2024",
    },
    {
      title: "Детский творческий конкурс",
      description: "Яркое приглашение для семей с детьми",
      image: "🎨",
      formats: ["PDF", "PNG"],
      date: "20 мая 2024",
    },
  ];

  return (
    <div className="min-h-screen bg-jubilee-cream">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-r from-jubilee-bronze to-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            Приглашения на мероприятия
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Скачайте персональные приглашения на юбилейные события
          </p>
        </div>
      </section>

      {/* Instructions */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-montserrat font-bold text-secondary mb-4">
              Как получить приглашение
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-jubilee-bronze rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-montserrat font-semibold mb-2">
                Выберите мероприятие
              </h3>
              <p className="text-gray-600 text-sm">
                Выберите интересующее вас событие из списка ниже
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-jubilee-bronze rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-montserrat font-semibold mb-2">
                Предварительный просмотр
              </h3>
              <p className="text-gray-600 text-sm">
                Посмотрите, как будет выглядеть ваше приглашение
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-jubilee-bronze rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-montserrat font-semibold mb-2">
                Скачайте файл
              </h3>
              <p className="text-gray-600 text-sm">
                Загрузите приглашение в удобном формате
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Invitations Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {invitationTypes.map((invitation, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in"
              >
                {/* Preview */}
                <div className="relative h-64 bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-4">{invitation.image}</div>
                    <div className="text-sm opacity-75">
                      Предварительный просмотр
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button className="bg-white/20 backdrop-blur-sm rounded-lg p-2 text-white hover:bg-white/30 transition-colors">
                      <Icon name="Eye" size={18} />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-montserrat font-semibold text-secondary">
                      {invitation.title}
                    </h3>
                    <span className="text-sm text-gray-500 flex items-center space-x-1">
                      <Icon name="Calendar" size={14} />
                      <span>{invitation.date}</span>
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4">{invitation.description}</p>

                  {/* Format Options */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      {invitation.formats.map((format) => (
                        <span
                          key={format}
                          className="bg-jubilee-cream text-secondary px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {format}
                        </span>
                      ))}
                    </div>

                    <div className="flex space-x-2">
                      <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
                        <Icon name="Download" size={16} />
                        <span>Скачать</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Invitation Request */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-secondary to-secondary-light rounded-2xl p-8 text-white">
            <Icon name="Edit" className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-montserrat font-bold mb-4">
              Персональное приглашение
            </h3>
            <p className="mb-6 opacity-90">
              Нужно особенное приглашение? Мы можем создать индивидуальный
              дизайн специально для вас
            </p>

            <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-montserrat font-semibold transition-colors duration-200 flex items-center space-x-2 mx-auto">
              <Icon name="Mail" size={18} />
              <span>Заказать персональное</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Invitations;
