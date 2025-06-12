export interface BlogPost {
  id: string;
  imageSrc: string;
  alt: string;
  date: string;
  title: string;
  description: string;
  category: string; // Added category field
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    imageSrc: "https://markovate.com/wp-content/uploads/2025/05/AI-Property-Listing-Generation.webp",
    alt: "AI Trends 2025 Blog Image",
    date: "January 15, 2025",
    title: "Top AI Trends to Watch in 2025",
    description:
      "Explore the emerging AI trends that will shape industries in 2025, from generative AI advancements to ethical AI practices, as predicted by Anix AI’s experts.",
    category: "AI Trends",
  },
  {
    id: "2",
    imageSrc: "https://markovate.com/wp-content/uploads/2025/05/ERP-Automation-2.0_-Generative-AI-Makes-ERP-Accessible-for-All@3x.webp",
    alt: "Generative AI Case Study Blog Image",
    title: "How Generative AI Transformed a Marketing Agency",
    date: "November 20, 2024",
    description:
      "A case study on how Anix AI’s generative AI solution helped a marketing agency produce 1,000+ pieces of content monthly, boosting engagement by 30%.",
    category: "Generative AI",
  },
  {
    id: "3",
    imageSrc: "https://markovate.com/wp-content/uploads/2025/03/Diffusion-LLMs-dLLMs_-Introducing-a-New-Generation-of-LLMs-88@3x-1.webp",
    alt: "AI in Healthcare Blog Image",
    title: "The Role of AI in Modern Healthcare",
    date: "September 5, 2024",
    description:
      "Discover how AI is revolutionizing healthcare with predictive analytics, personalized care, and operational efficiency, based on Anix AI’s recent projects.",
    category: "Healthcare AI",
  },
  {
    id: "4",
    imageSrc: "https://markovate.com/wp-content/uploads/2025/05/Types-of-AI-Agents@3x-1.webp",
    alt: "Ethics in AI Blog Image",
    title: "Navigating Ethics in AI Development",
    date: "July 10, 2024",
    description:
      "Anix AI discusses the importance of ethical AI development, addressing bias, transparency, and accountability in AI systems.",
    category: "AI Ethics",
  },
  {
    id: "5",
    imageSrc: "https://markovate.com/wp-content/uploads/2025/03/Top-8-Quantum-Computing-Applications-Driving-Change-in-the-Market-1.webp",
    alt: "AI in E-commerce Blog Image",
    date: "March 25, 2025",
    title: "The Impact of AI on E-commerce in 2025",
    description:
      "Learn how AI is transforming e-commerce with intelligent chatbots and personalized shopping experiences, featuring insights from Anix AI’s recent e-commerce chatbot project.",
    category: "E-commerce AI",
  },
  {
    id: "6",
    imageSrc: "https://markovate.com/wp-content/uploads/2025/04/AI-Agent-Evaluation_@3x.webp",
    alt: "NLP Advancements Blog Image",
    date: "May 10, 2025",
    title: "Advancements in NLP: What’s New in 2025",
    description:
      "Anix AI explores the latest advancements in natural language processing, including improved sentiment analysis and applications in customer feedback, based on our recent retail project.",
    category: "NLP",
  },
];