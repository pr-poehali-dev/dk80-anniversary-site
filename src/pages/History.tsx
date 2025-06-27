import Navigation from "@/components/Navigation";
import Icon from "@/components/ui/icon";
import PhotoGallery from "@/components/PhotoGallery";
import { useState } from "react";

const History = () => {
  const timeline = [
    {
      year: "1944",
      title: "Основание Дворца",
      description:
        "Торжественное открытие Дворца культуры для служения искусству",
      icon: "Home",
    },
    {
      year: "1960",
      title: "Расширение залов",
      description: "Добавлены новые концертные залы и творческие мастерские",
      icon: "Building",
    },
    {
      year: "1985",
      title: "Реконструкция",
      description: "Масштабная модернизация технического оснащения",
      icon: "Wrench",
    },
    {
      year: "2010",
      title: "Цифровизация",
      description: "Внедрение современных цифровых технологий",
      icon: "Monitor",
    },
    {
      year: "2024",
      title: "80-летний юбилей",
      description: "Празднование великого юбилея и новые планы развития",
      icon: "Crown",
    },
  ];

  const [photos, setPhotos] = useState([
    {
      id: "1",
      src: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800",
      title: "Открытие Дворца культуры",
      year: "1944",
      description: "Торжественное открытие Дворца культуры в 1944 году",
    },
    {
      id: "2",
      src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800",
      title: "Первый концерт",
      year: "1945",
      description: "Первое масштабное выступление в новом зале",
    },
    {
      id: "3",
      src: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800",
      title: "Реконструкция залов",
      year: "1985",
      description: "Масштабная модернизация концертных залов",
    },
  ]);

  const handleAddPhoto = (newPhoto: Omit<(typeof photos)[0], "id">) => {
    const photo = {
      ...newPhoto,
      id: Date.now().toString(),
    };
    setPhotos([...photos, photo]);
  };

  const handleDeletePhoto = (id: string) => {
    setPhotos(photos.filter((photo) => photo.id !== id));
  };

  return (
    <div className="min-h-screen bg-jubilee-cream">
      <Navigation />

      {/* Header */}
      <section className="bg-gradient-to-r from-secondary to-secondary-light text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            История Дворца культуры
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            80 лет служения искусству, культуре и творчеству нашего города
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary"></div>

            {timeline.map((event, index) => (
              <div key={index} className="relative mb-12 last:mb-0">
                <div
                  className={`flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} flex-col md:flex-row`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center border-4 border-white shadow-lg animate-golden-glow">
                    <Icon
                      name={event.icon as any}
                      className="w-4 h-4 text-white"
                    />
                  </div>

                  {/* Content */}
                  <div
                    className={`bg-white rounded-xl shadow-lg p-6 ml-12 md:ml-0 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"} md:w-5/12 animate-fade-in`}
                  >
                    <div className="flex items-center mb-3">
                      <span className="text-2xl font-montserrat font-bold golden-text mr-3">
                        {event.year}
                      </span>
                      <div className="h-px bg-primary flex-1"></div>
                    </div>

                    <h3 className="text-xl font-montserrat font-semibold text-secondary mb-2">
                      {event.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-secondary mb-4">
              Фотогалерея исторических моментов
            </h2>
            <p className="text-lg text-gray-600">
              Взгляните на ключевые события 80-летней истории
            </p>
          </div>

          <PhotoGallery
            photos={photos}
            onAddPhoto={handleAddPhoto}
            onDeletePhoto={handleDeletePhoto}
            editable={true}
          />
        </div>
      </section>
    </div>
  );
};

export default History;
