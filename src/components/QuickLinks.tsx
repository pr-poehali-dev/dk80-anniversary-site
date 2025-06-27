import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const QuickLinks = () => {
  const links = [
    {
      title: "История",
      description: "Узнайте о 80-летнем пути нашего Дворца культуры",
      icon: "BookOpen",
      path: "/history",
      color: "from-secondary to-secondary-light",
    },
    {
      title: "Мероприятия",
      description: "Календарь юбилейных событий и концертов",
      icon: "Calendar",
      path: "/events",
      color: "from-primary to-jubilee-bronze",
    },
    {
      title: "Приглашения",
      description: "Скачайте персональные приглашения на события",
      icon: "Download",
      path: "/invitations",
      color: "from-jubilee-bronze to-primary",
    },
  ];

  return (
    <section className="py-16 bg-jubilee-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-secondary mb-4">
            Присоединяйтесь к празднованию
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Изучите нашу историю, запланируйте посещение мероприятий и получите
            персональные приглашения
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {links.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${link.color}`}></div>

              <div className="p-6">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${link.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}
                >
                  <Icon
                    name={link.icon as any}
                    className="w-6 h-6 text-white"
                  />
                </div>

                <h3 className="text-xl font-montserrat font-semibold text-secondary mb-2 group-hover:text-primary transition-colors">
                  {link.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed">
                  {link.description}
                </p>

                <div className="flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform duration-200">
                  <span>Подробнее</span>
                  <Icon name="ArrowRight" className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickLinks;
