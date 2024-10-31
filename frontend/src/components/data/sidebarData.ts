import {  HiOutlineCog6Tooth } from "react-icons/hi2";
import { LuGrid } from "react-icons/lu";
import { FiLayout, FiTarget } from "react-icons/fi";
import { MdStorefront } from "react-icons/md";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { FaRegStar } from "react-icons/fa";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { PiSlackLogoThin } from "react-icons/pi";

export const navigation = [
  { name: "Templates", href: "/templates", icon: FiLayout },
  { name: "Inspiration", href: "/inspiration", icon: FiTarget },
  { name: "Brands", href: "/brands", icon: MdStorefront },
];

export const collections = [
  { name: "Curated Collections", href: "/curated-collections", icon: LuGrid },
  {
    name: "Live Collections",
    icon: HiOutlineLightningBolt,
    subItems: [
      { name: "Hidden Gems", href: "/hidden-gems" },
      { name: "Evergreen Ads", href: "/evergreen-ads" },
      { name: "Testing Lab", href: "/testing-lab" },
    ],
  },
  {
    name: "My Collections",
    icon: FaRegStar,
    subItems: [
      { name: "All Saved", href: "/hidden-gems" },
      { name: "Spring Campaign 2024", href: "/spring-campaign-2024" },
      { name: "Requested Templates", href: "/requested-templates" },
      { name: "New Collection", href: "/new-collection" },
    ],
  },
];

export const bottomData = [
  { name: "Settings", href: "/settings", icon: HiOutlineCog6Tooth },
  {
    name: "Help & Feedback",
    href: "/help-feedback",
    icon: IoIosHelpCircleOutline,
  },
  { name: "Join Creative OS Slack!", href: "/brands", icon: PiSlackLogoThin },
];
