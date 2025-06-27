import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const JubileeStats = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { icon: "Users", value: "50,000+", label: "Посетителей ежегодно" },
    { icon: "Music", value: "500+", label: "Концертов проведено" },
    { icon: "Award", value: "25", label: "Престижных наград" },
    { icon: "Heart", value: "80", label: "Лет служения искусству" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-secondary mb-4">
            Наши достижения за 80 лет
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-jubilee-bronze mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center group transform transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-jubilee-bronze rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200 animate-golden-glow">
                <Icon name={stat.icon as any} className="w-8 h-8 text-white" />
              </div>

              <div className="text-3xl md:text-4xl font-montserrat font-bold text-secondary mb-2 golden-text">
                {stat.value}
              </div>

              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JubileeStats;
