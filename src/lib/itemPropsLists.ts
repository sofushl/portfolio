import { type ItemProps } from "../components/GridView.tsx";

export const skillsList: ItemProps[] = [
  {
    name: "Typescript",
    buttons: [{ text: "Projects", href: "/projects?filter=typescript" }],
  },
  {
    name: "Java",
    buttons: [{ text: "Projects", href: "/projects?filter=java" }],
  },
  {
    name: "Nix",
    buttons: [{ text: "Projects", href: "/projects?filter=nix" }],
  },
  {
    name: "Javascript",
    buttons: [{ text: "Projects", href: "/projects?filter=javascript" }],
  },
  {
    name: "Rust",
    buttons: [{ text: "Projects", href: "/projects?filter=rust" }],
  },
  {
    name: "Python",
    buttons: [{ text: "Projects", href: "/projects?filter=python" }],
  },
];

export const experienceList: ItemProps[] = [
  {
    name: "Nordic Semiconductors",
    description:
      "Frontend developer intern, Jun–Aug 2026; part-time since — building cloud-driven firmware and configuration delivery tools for nRF Connect for desktop",
    buttons: [{ text: "Website", href: "https://www.nordicsemi.com/About-us" }],
  },
  {
    name: "Teknologiskolen Robot Camp, SDU",
    description:
      "Assistant instructor 2024, 2025 — taught kids programming with Raspberry Pi Pico and MicroPython",
    buttons: [{ text: "Website", href: "https://www.teknologiskolen.dk/" }],
  },
  {
    name: "Bølgeløypa Skolelaboratoriet, NTNU",
    description:
      "Instructor January 2026 — taught wave physics to high school students through hands-on lab activities",
    buttons: [
      { text: "Website", href: "https://www.ntnu.no/skolelab/bolgeloypa" },
    ],
  },
];
