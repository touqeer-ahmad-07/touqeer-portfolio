export const profile = {
  name: "Touqeer Ahmad",
  title: "Software Engineer",
  roleLine: "iOS, Android & React Native",
  tagline: "Building seamless experiences across platforms.",
  location: "Lahore, Pakistan",
  email: "personal.touqeer@gmail.com",
  phone: "+92 308 5184559",
  linkedin: "https://www.linkedin.com/in/touqeer-ahmad-4a8531222/",
  github: "https://github.com/touqeer-ahmad-07",
  yearsOfExperience: "4+",
  summary:
    "Experienced Software Engineer with 4+ years across the complete development lifecycle of mobile and web applications. Specialized in high-quality iOS apps using Swift and SwiftUI — with a strong focus on responsive interfaces, in-app purchases, API integrations, and performance optimization. Skilled in native Android development with Kotlin, cross-platform work with React Native, and full-stack web with the MERN stack.",
  journey: [
    "Started as a MERN stack developer building live, real-time web apps.",
    "Moved into iOS engineering with Swift & SwiftUI, shipping App Store apps.",
    "Expanded to native Android with Kotlin & XML and Google Play releases.",
    "Now delivering cross-platform apps with React Native and bridging native libraries.",
  ],
}

export type SkillCategory = {
  label: string
  accent: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    label: "Mobile",
    accent: "iOS · Android · Cross-platform",
    skills: ["Swift", "SwiftUI", "Kotlin", "XML", "React Native", "StoreKit", "Screen Time API"],
  },
  {
    label: "Backend",
    accent: "APIs & data",
    skills: ["Node.js", "Express.js", "TypeScript", "MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    label: "Frontend",
    accent: "Web interfaces",
    skills: ["React.js", "Next.js", "Redux Toolkit", "JavaScript", "HTML/CSS"],
  },
  {
    label: "Tools",
    accent: "Workflow & delivery",
    skills: ["Git", "GitHub", "Xcode", "Android Studio", "Firebase", "RevenueCat", "Jira", "CI/CD"],
  },
]

export type Experience = {
  role: string
  company: string
  location: string
  period: string
  highlights: string[]
}

export const experiences: Experience[] = [
  {
    role: "Mobile App Developer",
    company: "Skylinx Technologies",
    location: "Lahore, Pakistan",
    period: "Feb 2026 — Present",
    highlights: [
      "Design and develop cross-platform mobile apps with React Native.",
      "Contribute to native iOS (Swift/SwiftUI) and Android (Kotlin/XML) modules.",
      "Read and integrate native library code to extend functionality and optimize performance.",
    ],
  },
  {
    role: "iOS App Developer",
    company: "The GamiTron (PVT) LTD",
    location: "Lahore, Pakistan",
    period: "Oct 2025 — Feb 2026",
    highlights: [
      "Built scalable, user-focused features with Swift and SwiftUI.",
      "Integrated native iOS frameworks and maintained clean architecture.",
      "Ensured stability and performance via Xcode Instruments profiling.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Daira Engineering",
    location: "Lahore, Pakistan",
    period: "Feb 2023 — Sep 2025",
    highlights: [
      "Shipped iOS apps integrating StoreKit, Screen Time API, RevenueCat, AppsFlyer & APNs.",
      "Built Android apps in Kotlin with Retrofit, Crashlytics & Google Play Billing.",
      "Developed React.js frontends and Node/Express backends with MySQL, PostgreSQL & MongoDB.",
    ],
  },
  {
    role: "MERN Stack Developer",
    company: "CodeNinja",
    location: "Lahore, Pakistan",
    period: "Nov 2022 — Feb 2023",
    highlights: [
      "4-month MERN internship building a live chat web application.",
      "Applied Agile methodologies and iterative risk assessment.",
      "Strengthened communication, problem-solving, and teamwork.",
    ],
  },
]

export type Project = {
  name: string
  category: string
  stack: string[]
  description: string
  link?: string
}

export const projects: Project[] = [
  {
    name: "True Ilm — Audiobooks & eBooks",
    category: "React Native",
    stack: ["React Native", "TypeScript", "Readium SDK", "Realm", "Redux Toolkit"],
    description:
      "Built the eBook reader module, customizing the Readium SDK for advanced EPUB/PDF rendering with themes, pagination and bookmarking. Added offline-first persistence with Realm for large text collections.",
  },
  {
    name: "TV Remote App",
    category: "iOS",
    stack: ["Swift", "SwiftUI", "SSDP/UPnP", "SQLite", "Google Cast"],
    description:
      "A complete iOS TV remote with a full set of control keys mapped over Wi-Fi. Implemented same-network scanning via SSDP/UPnP with secure PIN pairing and SQLite device history for quick reconnections.",
  },
  {
    name: "Media Cast & Screen Mirror",
    category: "iOS",
    stack: ["Swift", "SwiftUI", "AirPlay", "Google Cast", "DLNA/SSDP"],
    description:
      "High-performance casting and screen mirroring built from the ground up. Integrated AirPlay for low-latency mirroring and the Google Cast SDK to stream photos and videos to external displays.",
  },
  {
    name: "Minimis Phone — Minimal Detox",
    category: "iOS",
    stack: ["Swift", "SwiftUI", "StoreKit", "Screen Time API", "RevenueCat"],
    description:
      "A digital-detox iOS app with an intuitive UI. Leveraged the Screen Time API for advanced usage control, StoreKit + RevenueCat for subscriptions, and AppsFlyer for analytics. Published on the App Store.",
    link: "https://apps.apple.com",
  },
  {
    name: "Minimis Phone — Android",
    category: "Android",
    stack: ["Kotlin", "XML", "Google Play Billing", "Retrofit", "Crashlytics"],
    description:
      "Feature-rich Android app with a responsive UI, Retrofit-based real-time sync, Google Play Billing for subscriptions, and foreground/background services. Launched via Google Play Console.",
    link: "https://play.google.com",
  },
  {
    name: "Minimis AR Glasses",
    category: "Android · Native",
    stack: ["Kotlin", "JNI/NDK", "Spotify SDK", "Mapbox", "Strava API"],
    description:
      "Custom Android system interface for AR glasses. Integrated Spotify Remote SDK, Mapbox navigation, Strava activity upload, and sensor/heart-rate data via native libraries (JNI/NDK) for kernel-level access.",
  },
  {
    name: "NAA World",
    category: "iOS · Full-stack",
    stack: ["SwiftUI", "Firebase", "Socket.IO", "Node.js", "StoreKit"],
    description:
      "A high-performance social iOS app with secure auth, role-based flows for vendors and users, video streaming, and real-time features. Backed by custom Node/Express REST APIs and push notifications.",
  },
  {
    name: "Minimis Phone — Web",
    category: "Full-stack Web",
    stack: ["Node.js", "Express", "React.js", "MySQL"],
    description:
      "Frontend and backend contributions focused on the backend. Developed and optimized RESTful APIs, resolved critical cross-site issues, and designed performant MySQL schemas and queries.",
  },
]

export const interests = [
  {
    title: "Backend Architecture",
    description: "Designing scalable REST APIs and data models that stay fast under load.",
  },
  {
    title: "Mobile Workflow Optimization",
    description: "Profiling with Xcode Instruments and tightening build & release pipelines.",
  },
  {
    title: "Git & Tooling",
    description: "Repository management, branching strategy, and clean version-control workflows.",
  },
  {
    title: "UI/UX Improvements",
    description: "Refining interactions and readability for a seamless cross-device feel.",
  },
]
