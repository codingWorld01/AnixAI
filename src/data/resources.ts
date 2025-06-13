export interface Resource {
  id: string;
  imageSrc: string;
  alt: string;
  title: string;
  description: string;
  downloadUrl: string;
  topicsCovered: string[]; // Added for topics covered section
}

export const resources: Resource[] = [
  {
    id: "1",
    imageSrc:
      "https://markovate.com/wp-content/uploads/2024/04/resource-ebook-img.webp",
    alt: "eBook Cover: Navigating Custom AI Development",
    title:
      "Navigating Custom AI Development vs. Pre-Existing AI Solutions: A Comprehensive Guide for Businesses",
    description:
      "This eBook provides an in-depth exploration of the benefits and challenges of custom AI development compared to pre-existing AI solutions, offering actionable insights for businesses looking to implement AI effectively. Learn how to evaluate your needs, choose the right approach, and plan for long-term success in your AI journey.",
    downloadUrl: "https://markovate.com/handbook/ai-strategy-prioritizing-ethics-and-security-for-growth.pdf",
    topicsCovered: [
      "Understanding Custom AI Development",
      "Choosing the Best AI Solution for Your Business",
      "Implementation Strategies for Seamless Integration",
      "Future Trends and Considerations in AI Development",
    ],
  },
  {
    id: "2",
    imageSrc:
      "https://markovate.com/wp-content/uploads/2024/04/Crafting-an-Effective-AI-Strategy_.webp",
    alt: "Handbook Cover: AI Strategy Ethics and Security",
    title: "AI Strategy: Prioritizing Ethics and Security for Growth",
    description:
      "This detailed handbook dives into the critical aspects of building AI strategies that prioritize ethics and security, ensuring sustainable business growth. It covers best practices for mitigating risks, maintaining compliance with regulations, and fostering trust with stakeholders while leveraging AI to drive innovation and efficiency.",
    downloadUrl: "https://markovate.com/handbook/ai-strategy-prioritizing-ethics-and-security-for-growth.pdf",
    topicsCovered: [
      "Ethical AI: Principles and Practices",
      "Security Measures for AI Systems",
      "Regulatory Compliance in AI Deployment",
      "Building Trust Through Responsible AI Use",
    ],
  },
  {
    id: "3",
    imageSrc:
      "https://markovate.com/wp-content/uploads/2024/04/Maximizing-Business-Efficiency-with-AI-Chatbots-in-ERP-systems-banner.webp",
    alt: "Infographic: AI Chatbots in ERP Systems",
    title: "Maximizing Business Efficiency with AI Chatbots in ERP Systems",
    description:
      "This insightful infographic illustrates how integrating AI chatbots with ERP systems can streamline business operations, enhance productivity, and improve decision-making. It highlights real-world use cases, benefits, and strategies for implementing AI chatbots to optimize workflows and drive operational excellence across industries.",
    downloadUrl: "https://markovate.com/handbook/ai-strategy-prioritizing-ethics-and-security-for-growth.pdf",
    topicsCovered: [
      "Role of AI Chatbots in ERP Systems",
      "Key Benefits for Business Efficiency",
      "Strategies for Successful Integration",
      "Case Studies and Real-World Applications",
    ],
  },
];