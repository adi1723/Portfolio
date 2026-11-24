export type Project = {
  id: string;
  title: string;
  summary: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  accent: string;
  visual: "travel" | "automation" | "rag" | "summarizer" | "chatbot";
  note?: string;
};

export const projects: Project[] = [
  {
    id: "travelmate",
    title: "TravelMate – Travel Booking Application",
    summary:
      "Cross-platform travel booking product with authentication, packages, bookings, reviews, and an admin dashboard.",
    description:
      "A Flutter-based travel booking application focused on package discovery, secure authentication, booking workflows, and operational admin tools backed by Firebase and Supabase.",
    technologies: [
      "Flutter",
      "Dart",
      "Firebase Authentication",
      "Cloud Firestore",
      "Supabase",
    ],
    features: [
      "Google and email authentication",
      "Travel package management",
      "Booking management",
      "Customer reviews",
      "Admin dashboard",
      "Image storage and retrieval",
    ],
    accent: "#38bdf8",
    visual: "travel",
  },
  {
    id: "automation",
    title: "Python Automation & AWS Processing System",
    summary:
      "Production automation system that orchestrates AWS downloads, multi-format processing, validation, and location-wise status tracking.",
    description:
      "An end-to-end Python desktop automation application for hospitality data operations. Built for multi-profile AWS access, PMS-specific file pipelines, and rigorous validation across PDF, Excel, CSV, TXT, and ZIP inputs.",
    technologies: [
      "Python",
      "AWS S3",
      "Boto3",
      "PySide6",
      "Excel",
      "PDF Processing",
    ],
    features: [
      "Automated AWS file downloads",
      "Multi-profile AWS authentication",
      "Multiple PMS integrations",
      "PDF and Excel processing",
      "File validation and duplicate detection",
      "Location-wise processing status",
    ],
    accent: "#2dd4bf",
    visual: "automation",
    note: "Professional work shown as a sanitized architectural overview. Confidential company code, customer data, and proprietary internals are not published.",
  },
  {
    id: "rag",
    title: "Retrieval-Augmented Generation (RAG) System",
    summary:
      "Knowledge-base retrieval pipeline with semantic search and context-aware response generation.",
    description:
      "A RAG system that retrieves relevant context from a knowledge base and grounds generative responses for higher relevance and reduced hallucination.",
    technologies: [
      "Python",
      "LangChain",
      "Hugging Face",
      "Embeddings",
      "Vector Databases",
    ],
    features: [
      "Knowledge-base retrieval",
      "Semantic search",
      "Context-aware responses",
      "Improved response relevance",
    ],
    accent: "#a78bfa",
    visual: "rag",
  },
  {
    id: "summarizer",
    title: "Document Summarization Tool",
    summary:
      "AI-assisted document processing pipeline for PDF and Word summarization with prompt engineering.",
    description:
      "A document intelligence tool that ingests PDF and Word files, applies prompt-engineered summarization with Azure OpenAI, and produces concise outputs.",
    technologies: [
      "Python",
      "Azure OpenAI",
      "PyPDF2",
      "Azure Cognitive Services",
    ],
    features: [
      "PDF and Word document processing",
      "AI-powered summarization",
      "Prompt engineering",
      "Concise document generation",
    ],
    accent: "#fbbf24",
    visual: "summarizer",
  },
  {
    id: "chatbot",
    title: "AI-Powered Chatbot",
    summary:
      "Conversational assistant with semantic search, vector memory, and context-aware dialogue.",
    description:
      "A Streamlit chatbot that combines OpenAI generation with FAISS retrieval and conversational memory for grounded, multi-turn interactions.",
    technologies: ["Python", "LangChain", "OpenAI API", "FAISS", "Streamlit"],
    features: [
      "Context-aware conversations",
      "Semantic search",
      "Vector database integration",
      "Conversational memory",
    ],
    accent: "#fb7185",
    visual: "chatbot",
  },
];
