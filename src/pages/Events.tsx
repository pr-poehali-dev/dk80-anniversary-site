import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Events = () => {
  const [selectedMonth, setSelectedMonth] = useState("march");

  const events = {
    march: [
      {
        date: "15 марта",
        title: "Торжественное открытие юбилея",
        time: "19:00",
        description: "Гала-концерт с участием звезд эстрады",
        icon: "Star",
      },
      {
        date: "22 марта",
        title: "Выставка исторических фотографий",
        time: "10:00-18:00",
        description: "80 лет в фотографиях и документах",
        icon: "Camera",
      },
    ],
    april: [
      {
        date: "5 апреля",
        title: "Концерт классической музыки",
        time: "19:30",
        description: "Симфонический оркестр города",
        icon: "Music",
      },
      {
        date: "12 апреля",
        title: "Театральный фестиваль",
        time: "18:00",
        description: "Лучшие спектакли юбилейного года",
        icon: "Drama",
      },
    ],
    may: [
      {
        date: "9 мая",
        title: "Концерт военных песен",
        time: "15:00",
        description: "В честь Дня Победы",
        icon: "Medal",
      },
      {
        date: "20 мая",
        title: "Детский творческий конкурс",
        time: "14:00",
        description: "Юные таланты нашего города",
        icon: "Users",
      },
    ],
  };

  const months = [
    { key: "march", label: "Март" },
    { key: "april", label: "Апрель" },
    { key: "may", label: "Май" },
  ];

  return (
    <div className="min-h-screen bg-jubilee-cream">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-jubilee-bronze text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            Программа мероприятий
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Календарь юбилейных событий, концертов и культурных мероприятий
          </p>
        </div>
      </section>

      {/* Calendar Navigation */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-1">
            {months.map((month) => (
              <button
                key={month.key}
                onClick={() => setSelectedMonth(month.key)}
                className={`px-6 py-3 rounded-lg font-montserrat font-medium transition-all duration-200 ${
                  selectedMonth === month.key
                    ? "bg-primary text-white shadow-lg"
                    : "text-secondary hover:bg-jubilee-cream"
                }`}
              >
                {month.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {events[selectedMonth as keyof typeof events].map(
              (event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in"
                >
                  <div className="p-6">
                    <div className="flex items-start space-x-4">
                      {/* Icon */}
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-jubilee-bronze rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon
                          name={event.icon as any}
                          className="w-6 h-6 text-white"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <h3 className="text-xl font-montserrat font-semibold text-secondary">
                            {event.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center space-x-1">
                              <Icon name="Calendar" size={14} />
                              <span>{event.date}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Icon name="Clock" size={14} />
                              <span>{event.time}</span>
                            </span>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-4">
                          {event.description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3">
                          <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
                            <Icon name="Plus" size={16} />
                            <span>Добавить в календарь</span>
                          </button>

                          <button className="border border-primary text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2">
                            <Icon name="Bell" size={16} />
                            <span>Уведомить о событии</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Notification Subscription */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-primary to-jubilee-bronze rounded-2xl p-8 text-white">
            <Icon name="Bell" className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-montserrat font-bold mb-4">
              Подписка на уведомления
            </h3>
            <p className="mb-6 opacity-90">
              Получайте уведомления о новых мероприятиях и важных событиях
              юбилейного года
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-secondary hover:bg-secondary-light text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                Подписаться
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
