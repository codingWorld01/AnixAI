export interface Project {
  id: string;
  imageSrc: string;
  alt: string;
  title: string;
  subject: string;
  description: string;
}

export const projects: Project[] = [
  {
    id: "1",
    imageSrc: "https://markovate.com/wp-content/uploads/2024/11/ERP-AI-Agent-for-Manufacturing-_thumbnail_Desktop.webp",
    alt: "E-commerce Chatbot Project",
    title: "E-commerce Chatbot Development",
    subject: "AI Agent. Automated Order Management",
    description:
      "Developed an AI-powered chatbot for a leading e-commerce platform to enhance customer support. The chatbot handles 500+ daily queries, reducing response time by 40% and increasing customer satisfaction by 25%.",
  },
  {
    id: "2",
    imageSrc: "https://markovate.com/wp-content/uploads/2025/03/Civiltakeoff-home-case-study-image.webp",
    alt: "Predictive Analytics Healthcare Project",
    title: "Predictive Analytics for Healthcare",
    subject: "Automated Labeling & Coloring. AI Blueprint Analysis",
    description:
      "Implemented a predictive analytics solution for a healthcare provider, analyzing patient data to optimize care. The system improved patient outcomes by 15% and reduced operational costs by $200,000 annually.",
  },
  {
    id: "3",
    imageSrc: "https://markovate.com/wp-content/uploads/2024/11/Medical-Research-Chatbot-_thumbnail_Desktop.webp",
    alt: "Generative AI Marketing Project",
    title: "Generative AI for Marketing Content",
    subject: "AI Research Assistant. Evidence-Based Responses",
    description:
      "Created a generative AI model for a marketing agency to produce ad copy and social media content. The solution generated 1,000+ pieces of content monthly, boosting engagement by 30% and reducing content creation time by 50%.",
  },
  {
    id: "4",
    imageSrc: "https://markovate.com/wp-content/uploads/2024/08/nvms-thumbnail-v3.webp",
    alt: "AI Automation Logistics Project",
    title: "AI-Driven Automation for Logistics",
    subject: "NLP-Driven Analysis. AI Image Classification",
    description:
      "Built an AI-driven automation system for a logistics company to optimize delivery routes and inventory management. The system reduced delivery times by 20% and saved $150,000 annually in operational costs.",
  },
  {
    id: "5",
    imageSrc: "https://markovate.com/wp-content/uploads/2025/01/aisle24-thumbnail-25.webp",
    alt: "AI Fraud Detection Project",
    title: "AI-Powered Fraud Detection for Finance",
    subject: "Checkout Technology. Inventory Management",
    description:
      "Developed an AI system for a financial institution to detect fraudulent transactions in real-time. The solution reduced fraud losses by 35%, improved detection accuracy to 90%, and saved the company $500,000 annually.",
  },
  {
    id: "6",
    imageSrc: "https://markovate.com/wp-content/uploads/2024/11/Intelligent-Document-Extraction-Tool-for-Insurance-Companies-_thumbnail_Desktop.webp",
    alt: "NLP Customer Feedback Project",
    title: "NLP for Customer Feedback Analysis",
    subject: "AI-Driven Document Processing. Accurate Data Extraction",
    description:
      "Implemented a natural language processing system for a retail chain to analyze customer feedback from reviews and surveys. The system identified key trends, improved customer satisfaction by 20%, and increased repeat purchases by 15%.",
  },
];