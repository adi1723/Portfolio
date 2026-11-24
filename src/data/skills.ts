export type SkillCategory = {
  title: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    skills: ["Python", "SQL", "JavaScript", "Dart"],
  },
  {
    title: "Mobile Development",
    skills: ["Flutter", "Firebase Authentication"],
  },
  {
    title: "Backend",
    skills: ["FastAPI", "Node.js", "REST APIs"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "Firebase Firestore"],
  },
  {
    title: "Cloud",
    skills: ["AWS", "Amazon S3", "Boto3"],
  },
  {
    title: "AI & Generative AI",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "LLMs",
      "RAG",
      "LangChain",
      "Semantic Search",
      "Prompt Engineering",
    ],
  },
  {
    title: "Python & Data Processing",
    skills: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "TensorFlow",
      "OpenPyXL",
      "PDF Processing",
    ],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Cursor AI", "n8n"],
  },
];
