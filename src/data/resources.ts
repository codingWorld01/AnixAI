export interface Resource {
  id: string;
  imageSrc: string;
  alt: string;
  title: string;
  description: string;
  downloadUrl: string;
}

export const resources: Resource[] = [
  {
    id: "1",
    imageSrc:
      "https://markovate.com/wp-content/uploads/2024/04/resource-ebook-img.webp",
    alt: "eBook Cover: Navigating Custom AI Development",
    title:
      "Navigating Custom AI Development vs. Pre-Existing AI Solutions: A Comprehensive Guide for Businesses",
    description: "Crafting an Effective AI Strategy",
    downloadUrl: "/downloads/ebook-navigating-custom-ai.pdf",
  },
  {
    id: "2",
    imageSrc:
      "https://markovate.com/wp-content/uploads/2024/04/Crafting-an-Effective-AI-Strategy_.webp",
    alt: "Handbook Cover: AI Strategy Ethics and Security",
    title: "AI Strategy: Prioritizing Ethics and Security for Growth",
    description:
      "A detailed handbook on building AI strategies that prioritize ethics and security, ensuring sustainable business growth while addressing key challenges.",
    downloadUrl: "/downloads/handbook-ai-strategy-ethics-security.pdf",
  },
  {
    id: "3",
    imageSrc:
      "https://markovate.com/wp-content/uploads/2024/04/Maximizing-Business-Efficiency-with-AI-Chatbots-in-ERP-systems-banner.webp",
    alt: "Infographic: AI Chatbots in ERP Systems",
    title: "Maximizing Business Efficiency with AI Chatbots in ERP Systems",
    description:
      "An insightful infographic illustrating how AI chatbots integrated with ERP systems can streamline operations and enhance productivity for businesses.",
    downloadUrl: "/downloads/infographic-ai-chatbots-erp.pdf",
  },
];