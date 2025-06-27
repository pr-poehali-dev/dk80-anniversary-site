import { useState } from "react";
import Icon from "@/components/ui/icon";

interface Photo {
  id: string;
  src: string;
  title: string;
  year: string;
  description: string;
}

interface PhotoGalleryProps {
  photos: Photo[];
  onAddPhoto?: (photo: Omit<Photo, "id">) => void;
  onDeletePhoto?: (id: string) => void;
  editable?: boolean;
}

const PhotoGallery = ({
  photos,
  onAddPhoto,
  onDeletePhoto,
  editable = false,
}: PhotoGalleryProps) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newPhoto, setNewPhoto] = useState({
    src: "",
    title: "",
    year: "",
    description: "",
  });

  const handleAddPhoto = () => {
    if (newPhoto.src && newPhoto.title && onAddPhoto) {
      onAddPhoto(newPhoto);
      setNewPhoto({ src: "", title: "", year: "", description: "" });
      setShowAddForm(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setNewPhoto({ ...newPhoto, src: e.target?.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6">
      {/* Admin Controls */}
      {editable && (
        <div className="flex justify-end">
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
          >
            <Icon name="Plus" size={16} />
            <span>Добавить фото</span>
          </button>
        </div>
      )}

      {/* Add Photo Form */}
      {showAddForm && editable && (
        <div className="bg-white rounded-xl shadow-lg p-6 border">
          <h3 className="text-lg font-montserrat font-semibold text-secondary mb-4">
            Добавить новое фото
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Загрузить изображение
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Название
              </label>
              <input
                type="text"
                value={newPhoto.title}
                onChange={(e) =>
                  setNewPhoto({ ...newPhoto, title: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Название фотографии"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Год
              </label>
              <input
                type="text"
                value={newPhoto.year}
                onChange={(e) =>
                  setNewPhoto({ ...newPhoto, year: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="1944"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Описание
              </label>
              <textarea
                value={newPhoto.description}
                onChange={(e) =>
                  setNewPhoto({ ...newPhoto, description: e.target.value })
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                rows={3}
                placeholder="Описание фотографии"
              />
            </div>

            <div className="flex space-x-3">
              <button
                onClick={handleAddPhoto}
                className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200"
              >
                Сохранить
              </button>
              <button
                onClick={() => setShowAddForm(false)}
                className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-lg font-medium transition-colors duration-200"
              >
                Отмена
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Photo Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="relative bg-gray-200 rounded-lg overflow-hidden aspect-video group cursor-pointer"
          >
            {photo.src ? (
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <Icon name="Image" className="w-12 h-12 text-gray-400" />
              </div>
            )}

            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
              <div className="flex space-x-2">
                <button
                  onClick={() => setSelectedPhoto(photo)}
                  className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-lg transition-colors duration-200"
                >
                  <Icon name="ZoomIn" className="w-5 h-5" />
                </button>
                {editable && onDeletePhoto && (
                  <button
                    onClick={() => onDeletePhoto(photo.id)}
                    className="bg-red-500/80 hover:bg-red-500 text-white p-2 rounded-lg transition-colors duration-200"
                  >
                    <Icon name="Trash2" className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Photo Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <h3 className="text-white font-medium">{photo.title}</h3>
              {photo.year && (
                <p className="text-white/70 text-sm">{photo.year}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Photo Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-montserrat font-semibold text-secondary">
                    {selectedPhoto.title}
                  </h3>
                  {selectedPhoto.year && (
                    <p className="text-gray-600">{selectedPhoto.year}</p>
                  )}
                </div>
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <Icon name="X" size={24} />
                </button>
              </div>

              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full max-h-96 object-contain rounded-lg mb-4"
              />

              {selectedPhoto.description && (
                <p className="text-gray-700">{selectedPhoto.description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
