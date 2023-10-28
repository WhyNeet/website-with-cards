import { CardDetailsItem, Price } from "@/components/ui/Card";
import { ArchLinux } from "@/components/Logo";
import { LayoutGrid, PcCase, Network, ListTree, Globe } from "lucide-solid";
import { JSX } from "solid-js";

export type Card = {
  icon: (props: any) => JSX.Element;
  iconText: string;

  title: string;
  description: string;

  detailsText?: string;
  details?: CardDetailsItem[] | string[];
  price?: Price;
};

export const cards: Card[] = [
  {
    icon: PcCase,
    iconText: "PC",
    title: "Computers",
    description: "HP Pavilion Desktop PC is our candidate for this position.",
    details: [
      { name: "Model", value: "HP Pavilion Desktop PC" },
      { name: "CPU", value: "AMD Ryzen 7 5700G" },
      { name: "RAM", value: "16 GB" },
      { name: "SSD", value: "512 GB" },
    ],
    price: { value: 500, prefix: "Price per pcs" },
  },
  {
    icon: ArchLinux,
    iconText: "OS",
    title: "Operating System",
    description:
      "We will use Arch Linux to help developers make better software.",
    detailsText:
      "Arch Linux was picked because it gives the developers control over the system, provides rich software ecosystem and has good security. It is also worth mentioning Linux is compatable with most programming languages. And all of this is for free.",
  },
  {
    icon: LayoutGrid,
    iconText: "Apps",
    title: "Software",
    description: "The basic software every developer needs.",
    details: [
      "VS Code: your code editor.",
      "Docker: dockerizing apps and running different containers locally.",
      "Git: version control system.",
      "Slack: collaboration tool.",
      "Compilers, runtimes, etc. (project-dependent)",
    ],
  },
  {
    icon: Network,
    iconText: "Net",
    title: "Network setup",
    description:
      "Our network setup contains a modem, a router, a switch and a bunch of Ethernet cabes.",
    detailsText:
      "Ethernet cables will be used to connect computers to a switch. Switch is connected to a router, which is connected to a modem provided by the ISP.",
    details: [
      { name: "Cisco Switch", value: "$250" },
      { name: "Cisco Router", value: "$125" },
      { name: "Modem", value: "ISP" },
    ],
    price: { value: 375, prefix: "Total price" },
  },
  {
    icon: ListTree,
    iconText: "Files",
    title: "File management",
    description: "A basic 'How To' on how to manage files.",
    details: [
      "We use GitHub Enterprise to store projects and Git for version control.",
      "Make a folder called 'repos' on your PC.",
      "Store each project in a separate folder in 'repos'.",
      "Name project folders after a GitHub repo.",
      "Folder structure depends on tools used.",
    ],
  },
  {
    icon: Globe,
    iconText: "WWW",
    title: "Internet connection",
    description: "How everyone will be connected.",
    detailsText:
      "Our plan provides fast internet, so that developers can spend their time developing, not downloading.",
    details: [
      { name: "ISP", value: "AT&T Business Fiber" },
      { name: "Speed", value: "1 GiG" },
    ],
    price: { value: 160, prefix: "Price per month" },
  },
];
