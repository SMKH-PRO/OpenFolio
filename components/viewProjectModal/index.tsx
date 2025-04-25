import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import ImageSlider from "../Image/ImageSlider";

interface MediaItem {
  id?: number;
  image?: string[];
  title?: string;
  description?: string;
  link?: string;
}

interface ViewProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  media?: MediaItem;
}

const ViewProjectModal = ({
  isOpen = true,
  onClose,
  media = {},
}: ViewProjectModalProps) => {
  if (!isOpen || !media) return null;

  const currentMedia = media;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-full max-w-5xl min-h-[30vh] rounded-lg shadow-xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-2xl font-bold">Media</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <FontAwesomeIcon icon={faTimes} className="text-xl w-7 h-7" />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row flex-grow">
          {/* Image section */}
          <div className="md:w-3/5 bg-white">
            <ImageSlider images={currentMedia.image || []} />
          </div>

          {/* Text content section */}
          <div className="md:w-2/5 p-6 overflow-y-auto h-full">
            <h3 className="text-2xl font-bold mb-4">{currentMedia.title}</h3>
            <p className="text-gray-700">{currentMedia.description}</p>

            {currentMedia.link && (
              <a
                href={currentMedia.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block flex items-center bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded transition-colors w-[160px]"
              >
                <FontAwesomeIcon
                  icon={["fas", "up-right-from-square"]}
                  className="mr-2"
                  width="15px"
                  height="15px"
                />
                View Project
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProjectModal;
