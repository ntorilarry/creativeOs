import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { HiMiniXMark } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { LuPanelLeftClose } from "react-icons/lu";
import { Avatar } from "@/assets";
import { bottomData, collections, navigation } from "../data/sidebarData";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      <Transition show={sidebarOpen}>
        <Dialog className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
          <TransitionChild
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </TransitionChild>

          <div className="fixed inset-0 flex">
            <TransitionChild
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <DialogPanel className="relative mr-16 flex w-full max-w-xs flex-1">
                <TransitionChild
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <HiMiniXMark
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </TransitionChild>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex h-screen grow flex-col gap-y-5 overflow-y-auto border bg-white px-6 pb-4 ring-1 ring-white/10">
                  <nav className="flex flex-1 flex-col">
                    <ul
                      role="list"
                      className="flex flex-1 mt-2 flex-col gap-y-7"
                    >
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <NavLink
                                to={item.href}
                                className={({ isActive }) =>
                                  classNames(
                                    isActive
                                      ? "bg-[#0F172A] text-white"
                                      : "text-[#0F172A] hover:text-black hover:bg-[#e7e8e8] ",
                                    "group flex gap-x-3 rounded-lg p-2 text-sm  font-medium"
                                  )
                                }
                              >
                                <item.icon
                                  className="h-6 w-6 shrink-0"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {collections.map((item) => (
                            <li key={item.name}>
                              {item.subItems ? (
                                // If the item has sub-items, render a collapsible section
                                <div>
                                  <div className="group flex gap-x-3 rounded-lg p-2 text-sm font-medium leading-6 cursor-pointer text-[#0F172A] hover:text-black hover:bg-[#e7e8e8]">
                                    <item.icon
                                      className="h-6 w-6 shrink-0"
                                      aria-hidden="true"
                                    />
                                    {item.name}
                                  </div>
                                  <ul className="ml-6 space-y-1">
                                    {item.subItems.map((subItem) => (
                                      <li key={subItem.name}>
                                        <NavLink
                                          to={subItem.href}
                                          className={({ isActive }) =>
                                            classNames(
                                              isActive
                                                ? "bg-[#0F172A] text-white"
                                                : "text-[#0f172a90] hover:text-black hover:bg-[#e7e8e8] ",
                                              "group flex gap-x-3 rounded-lg p-2 text-sm font-medium"
                                            )
                                          }
                                        >
                                          {subItem.name}
                                        </NavLink>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ) : (
                                // Render single item if there are no sub-items
                                <NavLink
                                  to={item.href}
                                  className={({ isActive }) =>
                                    classNames(
                                      isActive
                                        ? "bg-[#0F172A] text-white"
                                        : "text-[#0F172A] hover:text-black hover:bg-[#e7e8e8] ",
                                      "group flex gap-x-3 rounded-lg p-2 text-sm font-medium"
                                    )
                                  }
                                >
                                  <item.icon
                                    className="h-6 w-6 shrink-0"
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </NavLink>
                              )}
                            </li>
                          ))}
                        </ul>
                      </li>

                      <li className="mt-auto">
                        <ul role="list" className="-mx-2 space-y-1">
                          {bottomData.map((item) => (
                            <li key={item.name}>
                              <NavLink
                                to={item.href}
                                className={({ isActive }) =>
                                  classNames(
                                    isActive
                                      ? "bg-[#0F172A] text-white"
                                      : "text-[#64748B] hover:text-black hover:bg-[#e7e8e8] ",
                                    "group flex gap-x-3 rounded-lg p-2 text-sm font-medium"
                                  )
                                }
                              >
                                <item.icon
                                  className="h-6 w-6 shrink-0"
                                  aria-hidden="true"
                                />
                                {item.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-[280px] lg:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col overflow-y-auto  bg-[#F8FAFC] border-r-2 px-6 pb-4">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center gap-x-2">
              <img
                src={Avatar}
                className="w-7 h-7 my-auto"
                aria-hidden="true"
                alt=""
              />
              <p>Michael Kossner</p>
            </div>
            <LuPanelLeftClose className="text-xl" />
          </div>
          <nav className="flex flex-1 flex-col">
            <ul role="list" className="flex flex-1 flex-col gap-y-2">
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <NavLink
                        to={item.href}
                        className={({ isActive }) =>
                          classNames(
                            isActive
                              ? "bg-[#0F172A] text-white"
                              : "text-[#0F172A] hover:text-black hover:bg-[#e7e8e8] ",
                            "group flex gap-x-3 rounded-lg p-2 text-sm font-medium"
                          )
                        }
                      >
                        <item.icon
                          className="h-6 w-6 shrink-0"
                          aria-hidden="true"
                        />
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
              <hr className=" border-t border-gray-300" />
              <li>
                <ul role="list" className="-mx-2 space-y-1">
                  {collections.map((item) => (
                    <li key={item.name}>
                      {item.subItems ? (
                        // If the item has sub-items, render a collapsible section
                        <div>
                          <div className="group flex gap-x-3 rounded-lg p-2 text-sm font-medium leading-6 cursor-pointer text-[#0F172A] hover:text-black hover:bg-[#e7e8e8]">
                            <item.icon
                              className="h-6 w-6 shrink-0"
                              aria-hidden="true"
                            />
                            {item.name}
                          </div>
                          <ul className="ml-6 space-y-1">
                            {item.subItems.map((subItem) => (
                              <li key={subItem.name}>
                                <NavLink
                                  to={subItem.href}
                                  className={({ isActive }) =>
                                    classNames(
                                      isActive
                                        ? "bg-[#0F172A] text-white"
                                        : "text-[#0f172a90] hover:text-black hover:bg-[#e7e8e8] ",
                                      "group flex gap-x-3 rounded-lg p-2 text-sm font-medium"
                                    )
                                  }
                                >
                                  {subItem.name}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        // Render single item if there are no sub-items
                        <NavLink
                          to={item.href}
                          className={({ isActive }) =>
                            classNames(
                              isActive
                                ? "bg-[#0F172A] text-white"
                                : "text-[#0F172A] hover:text-black hover:bg-[#e7e8e8] ",
                              "group flex gap-x-3 rounded-lg p-2 text-sm font-medium"
                            )
                          }
                        >
                          <item.icon
                            className="h-6 w-6 shrink-0"
                            aria-hidden="true"
                          />
                          {item.name}
                        </NavLink>
                      )}
                    </li>
                  ))}
                </ul>
              </li>

              <li className="mt-auto">
                <ul role="list" className="-mx-2 space-y-1">
                  {bottomData.map((item) => (
                    <li key={item.name}>
                      <NavLink
                        to={item.href}
                        className={({ isActive }) =>
                          classNames(
                            isActive
                              ? "bg-[#0F172A] text-white"
                              : "text-[#64748B] hover:text-black hover:bg-[#e7e8e8] ",
                            "group flex gap-x-3 rounded-lg p-2 text-sm font-medium"
                          )
                        }
                      >
                        <item.icon
                          className="h-6 w-6 shrink-0"
                          aria-hidden="true"
                        />
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
