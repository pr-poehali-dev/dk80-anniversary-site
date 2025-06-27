import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import QuickLinks from "@/components/QuickLinks";
import JubileeStats from "@/components/JubileeStats";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <QuickLinks />
      <JubileeStats />

      {/* Footer */}
      <footer className="bg-secondary text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold">80</span>
            </div>
            <span className="font-montserrat font-semibold">
              Дворец Культуры
            </span>
          </div>
          <p className="text-gray-300">© 2024 - Год великого юбилея</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
