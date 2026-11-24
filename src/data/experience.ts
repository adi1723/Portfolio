export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  additional?: {
    title: string;
    highlights: string[];
  };
};

export const experience: ExperienceItem[] = [
  {
    id: "fpg",
    role: "Junior AI Engineer",
    company: "FPG Technologies India Pvt. Ltd.",
    period: "March 2026 – Present",
    location: "Pune, India",
    highlights: [
      "Designed and developed an end-to-end Python automation application supporting approximately 130 hotel locations.",
      "Reduced processing time from approximately 36 hours to 8 hours, achieving nearly 78% time reduction.",
      "Integrated AWS S3 using Boto3 for multi-profile authentication and automated file downloads.",
      "Built PMS-specific workflows supporting PDF, Excel, CSV, TXT, and ZIP files.",
      "Implemented missing-file detection, duplicate detection, validation, error handling, and output verification.",
      "Used Cursor AI for development assistance, followed by manual debugging and testing.",
    ],
    additional: {
      title: "Additional Automation Work – n8n",
      highlights: [
        "Developed workflow automation for reporting across 5,000+ hotel locations.",
        "Integrated AWS data retrieval.",
        "Automated HTML and Excel report generation.",
        "Automated email and Microsoft Outlook report distribution.",
      ],
    },
  },
  {
    id: "neuralverse",
    role: "Generative AI Intern",
    company: "NeuralVerse Technologies",
    period: "February 2025 – July 2025",
    location: "Remote",
    highlights: [
      "Worked on text and image-based Generative AI applications.",
      "Built and optimized data preprocessing pipelines.",
      "Researched Generative AI techniques and integrated AI solutions into prototypes.",
    ],
  },
  {
    id: "adtech",
    role: "Data Science Intern",
    company: "AdTech Pvt. Ltd.",
    period: "July 2024 – January 2025",
    location: "Pune, India",
    highlights: [
      "Worked with Python and SQL for data cleaning and analysis.",
      "Developed Power BI dashboards.",
      "Built predictive models for financial-product analysis.",
      "Performed exploratory data analysis and statistical analysis.",
    ],
  },
];
