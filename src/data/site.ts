export const siteConfig = {
  name: "Aditya Kapadane",
  shortName: "AK",
  title: "Aditya Kapadane | Software Engineer",
  description:
    "Software Engineer building intelligent products, automation systems, and modern applications across full-stack development, Python automation, cloud infrastructure, and Generative AI.",
  url: "https://aditya-kapadane-portfolio.vercel.app",
  location: "Pune, Maharashtra, India",
  email: "adikapadane@gmail.com",
  phone: "+91 9022951550",
  phoneHref: "tel:+919022951550",
  resumePath: "/resume/Aditya_Kapadane_9022951550.pdf",
  availability: {
    enabled: true,
    label: "Open to opportunities",
  },
  social: {
    github: "https://github.com/adi1723",
    linkedin: "https://www.linkedin.com/in/aditya-kapadane-423180267/",
  },
  // Existing working Google Form from the previous portfolio (real submission endpoint).
  contactFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSdDTmsk94gWdMevp6PlUfjHuTug8sXLr6m2_6YrZq3qMf1uMg/viewform",
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export const heroContent = {
  name: "ADITYA KAPADANE",
  headline:
    "Software Engineer building intelligent products, automation systems & modern applications.",
  description:
    "I build practical software solutions across full-stack development, Python automation, cloud infrastructure, and Generative AI. I enjoy turning complex problems into reliable, scalable products.",
} as const;

export const aboutContent = {
  intro:
    "I am an Artificial Intelligence and Data Science engineering graduate from Zeal College of Engineering & Research, Pune (2025).",
  body: "I enjoy building real-world applications, automating complex workflows, integrating cloud services, and developing useful user-facing products. My work sits at the intersection of software engineering, data systems, and applied AI.",
  interests: [
    "Software Engineering",
    "Full-Stack Development",
    "Python Automation",
    "Cloud Engineering",
    "Generative AI",
    "Product Development",
  ],
} as const;

export const education = {
  degree: "Bachelor of Engineering – Artificial Intelligence and Data Science",
  school: "Zeal College of Engineering & Research, Pune",
  graduated: "2025",
} as const;

export const certifications = [
  "Python Full Stack Development",
  "Data Science",
  "Power BI",
  "Tableau",
] as const;
