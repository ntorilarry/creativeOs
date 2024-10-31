import { Avatar2, Canva, Figma2, FolderPlus, Link3 } from "@/assets";
import { IoIosHeartEmpty } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import { IoMdClose } from "react-icons/io"; // Import close icon

const ViewDetailsModal = ({ showModal, setShowModal, image, template }) => {
  // Close the modal when clicking outside
  const handleOutsideClick = (e) => {
    if (e.target.id === "modalOverlay") {
      setShowModal(false);
    }
  };

  return (
    <>
      {showModal ? (
        <>
          {/* Overlay */}
          <div
            id="modalOverlay"
            className="fixed inset-0 z-50 flex items-end bg-black bg-opacity-50"
            onClick={handleOutsideClick}
          >
            {/* Modal */}
            <div className="relative flex w-full  mx-auto bg-white rounded-t-lg shadow-lg">
              <div className="relative flex flex-col w-full h-[95vh] p-4 lg:p-2 overflow-y-auto">
                {/* Close Button */}
                <IoMdClose
                  className="absolute top-3 right-3 text-2xl cursor-pointer"
                  onClick={() => setShowModal(false)}
                />

                <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-8">
                  <div className="bg-[#F1F5F9] h-[90vh] flex justify-center items-center lg:col-span-6">
                    <img
                      src={image.image}
                      alt=""
                      className="w-[25rem] p-10 m-auto flex items-center"
                    />
                  </div>

                  <div className="lg:col-span-2 p-4 lg:p-8">
                    <div className="flex justify-between items-center flex-wrap">
                      <div className="flex items-center gap-x-1">
                        <img
                          src={Avatar2}
                          className="w-10 h-10"
                          aria-hidden="true"
                          alt=""
                        />
                        <div>
                          <p className="font-semibold text-[#020617] text-base">
                            {image.category}
                          </p>
                          <p className="text-gray-600 text-xs">
                            by {template?.createdBy}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <img src={FolderPlus} alt="" />
                        <img src={Link3} alt="" />
                      </div>
                    </div>

                    <h1 className="font-semibold mt-4 text-[#020617] text-lg">
                      {image.title}
                    </h1>
                    <p className="text-[#64748B] text-sm mt-1 flex flex-wrap items-center gap-x-2">
                      Posted{" "}
                      {new Date(image.createdOn).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}{" "}
                      <span className="flex items-center gap-1">
                        <LuUser2 /> {image.users} users
                      </span>
                      <span className="flex items-center gap-1">
                        <IoIosHeartEmpty /> {image.saves} Saves
                      </span>
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <button className="text-sm font-semibold text-[#020617] bg-[#F1F5F9] rounded-sm gap-2 inline-flex items-center px-4 py-2">
                        Copy to Figma{" "}
                        <img className="w-5" src={Figma2} alt="" />
                      </button>
                      <button className="text-sm font-semibold text-[#020617] bg-[#F1F5F9] rounded-sm gap-2 inline-flex items-center px-4 py-2">
                        Edit in Canva <img className="w-5" src={Canva} alt="" />
                      </button>
                    </div>

                    <div className="mt-5 flex gap-2 flex-wrap items-center justify-between">
                      <h1 className="text-base">Tags</h1>
                      <div className="flex flex-wrap gap-2">
                        {image.tags.map((tag, index) => (
                          <button
                            key={index}
                            className="text-xs font-semibold text-[#020617] bg-white border border-gray-300 rounded-full inline-flex items-center px-2.5 py-1"
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default ViewDetailsModal;
