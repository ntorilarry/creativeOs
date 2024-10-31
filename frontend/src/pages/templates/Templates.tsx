import { Fragment } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Ads from "./components/Ads";

const Templates = () => {
  const tabs = [
    {
      title: "Ads",
      content: <Ads />,
    },
    {
      title: "Emails",
      content: <p>Emails</p>,
    },
    {
      title: "Landers",
      content: <p>Landers</p>,
    },
  ];

  return (
    <div className="mt-4 lg:mt-0 ">
      <TabGroup>
        <div className="w-full flex lg:justify-center">
          {" "}
          {/* Center the TabList */}
          <TabList className="space-x-2 px-2 py-2 rounded-full bg-[#F1F5F9]">
            {tabs.map((tab) => (
              <Tab key={tab.title} as={Fragment}>
                {({ selected }) => (
                  <button
                    className={`${
                      selected
                        ? "text-[#0F172A] bg-white rounded-full"
                        : "border-transparent text-gray-500"
                    } px-4 py-2 text-center text-sm font-medium`}
                  >
                    {tab.title}
                  </button>
                )}
              </Tab>
            ))}
          </TabList>
        </div>
        <TabPanels className="mt-4">
          {tabs.map((tab) => (
            <TabPanel key={tab.title}>
              <div className="text-sm text-text">{tab.content}</div>
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default Templates;
