export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string | string[];
  live: string;
}

export const projects: Project[] = [
  {
    title: "BloodBridge",
    description:
      "Bridging Hope to Life | A digital lifeline connecting verified donors with patients in critical need. One tap, one connection, infinite impact",
    image: "/images/1.png",
    tags: ["Next.js", "Tailwind", "MongoDB", "Mongoose"],
    github: "https://github.com/tonmoytr/blood-bridge",
    live: "https://blood-bridge-lac.vercel.app/",
  },
  {
    title: "DocAppointment",
    description:
      "Manage your doctor appointments with ease using DocAppoint. A platform for scheduling and managing doctor appointments.",
    image: "/images/5.png",
    tags: ["Next.js", "Tailwind", "MongoDB", "ExpressJs", "JWT", "BetterAuth"],
    github: [
      "https://github.com/tonmoytr/docappointment-client",
      "https://github.com/tonmoytr/docappointment-server",
    ],
    live: "https://docappointment-client-seven.vercel.app/",
  },
  {
    title: "LibConnect",
    description:
      "A seamless and modern Online Book Borrowing Platform. It is built with a focus on user experience, making it easy for users to find, borrow, and return books.",
    image: "/images/6.png",
    tags: ["Next.js", "Tailwind", "MongoDB", "BetterAuth", "Hero-UI"],
    github: "https://github.com/tonmoytr/libconnect-tr",
    live: "https://libconnect-trt.vercel.app/",
  },
  {
    title: "Digitools",
    description:
      "Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.",
    image: "/images/3.png",
    tags: ["ReactJs", "React-DOM", "Tailwind", "DaisyUI"],
    github: "https://github.com/tonmoytr/tr-digitools-platform",
    live: "https://tr-digitools-platform.vercel.app/",
  },
  {
    title: "KeenKeeper",
    description:
      "Friends to keep close in your life | Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.",
    image: "/images/2.png",
    tags: ["NextJs", "Tailwind", "Recharts", "React DOM"],
    github: "https://github.com/tonmoytr/keenkeeper",
    live: "https://keenkeeper-trt.vercel.app/",
  },

  {
    title: "Job App Tracker",
    description:
      "Track and manage your job applications in one organized place.",
    image: "/images/4.png",
    tags: ["React", "TypeScript", "Chart.js", "Firebase"],
    github: "https://github.com/tonmoytr/tr-job-app-tracker",
    live: "https://tr-job-app-tracker.vercel.app/",
  },
];
