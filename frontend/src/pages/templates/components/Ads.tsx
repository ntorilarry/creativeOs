import { Avatar2, Canva, Figma, LinkIcon, SaveIcon } from "@/assets";
import Loader from "@/components/ui/Loader";
import {
  useGetCategoriesQuery,
  useGetTemplatesQuery,
} from "@/services/api-service";
import { useMemo, useState } from "react";
import { HiChevronUpDown } from "react-icons/hi2";
import ViewDetailsModal from "./ViewDetailsModal";

const Ads = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
  const { data: categoryResponse, isLoading: categoryLoading } =
    useGetCategoriesQuery();
  const { data: templateResponse, isLoading: templateLoading } =
    useGetTemplatesQuery();

  const categories = useMemo(() => {
    return categoryResponse?.result.data || [];
  }, [categoryResponse]);

  const templates = useMemo(() => {
    return templateResponse?.result.data || [];
  }, [templateResponse]);

    const handleImageClick = (template, image) => {
      setSelectedTemplate(template);
      setSelectedImage(image);
      setShowModal(true); // Open the modal
    };

  if (categoryLoading || templateLoading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  return (
    <div>
      <h1 className="font-semibold text-[#020617] text-2xl">Ad Templates</h1>
      <div className="flex mt-4 flex-wrap gap-y-4 justify-between">
        <div className="flex items-start gap-5 overflow-x-auto whitespace-nowrap">
          {categories.slice(0, 5).map((item) => (
            <button
              key={item.id}
              className="text-sm font-semibold text-[#020617] bg-white border border-gray-300 rounded-full inline-flex items-center px-2.5 py-1"
            >
              {item.categoryName}
            </button>
          ))}
          <button className="text-sm font-semibold text-[#020617] bg-white border border-gray-300 rounded-full inline-flex items-center px-2.5 py-1">
            <HiChevronUpDown /> More
          </button>
        </div>

        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 ">
          <option value="RECENT" selected>
            Recent
          </option>
          <option value="POPULAR">Popular</option>
        </select>
      </div>

      <div className="grid mt-8 grid-cols-1 md:grid-cols-4 gap-4">
        {templates.map((template, index) => (
          <div key={index} className="grid gap-4">
            {template.images.map((image, imgIndex) => (
              <div key={imgIndex} className="relative group">
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src={image.image}
                  alt=""
                />
                {/* Overlay */}
                <div
                  onClick={() => handleImageClick(template, image)}
                  className="absolute cursor-pointer inset-0 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {/* Top Left Icon */}
                  <div className="absolute top-3 left-3 text-white">
                    <div className="flex  gap-1">
                      <img src={Canva} alt="" />
                      <img src={Figma} alt="" />
                    </div>
                  </div>
                  {/* Top Right Icon */}
                  <div className="absolute top-3 right-3 text-white">
                    <div className="flex gap-1">
                      <img src={SaveIcon} alt="" />
                      <img src={LinkIcon} alt="" />
                    </div>
                  </div>
                  {/* Bottom Left Icon */}
                  <div className="absolute bottom-3 left-3 text-white">
                    <div className="flex items-center gap-1">
                      <img
                        src={Avatar2}
                        className="w-9 h-9 my-auto"
                        aria-hidden="true"
                        alt=""
                      />
                      <div>
                        <p className="font-semibold">{image.category}</p>
                        <p className="font-light text-xs">
                          by {template?.createdBy}
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* Bottom Right Icon */}
                  <div className="absolute bottom-4 right-3 text-white">
                    <p className="font-light">Template</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      {showModal && (
        <ViewDetailsModal
          showModal={showModal}
          setShowModal={setShowModal}
          template={selectedTemplate}
          image={selectedImage} // Pass selected image
        />
      )}
    </div>
  );
};

export default Ads;
