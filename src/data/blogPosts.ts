export interface Block {
  type: string;
  data: any;
}

export interface BlogPost {
  id: string;
  slug: string;
  imageSrc: string;
  alt: string;
  date: string;
  title: string;
  description: string;
  category: string;
  author: string;
  tags: string[];
  content: { blocks: Block[] };
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "top-ai-trends-2025",
    imageSrc: "https://markovate.com/wp-content/uploads/2025/05/AI-Property-Listing-Generation.webp",
    alt: "AI Trends 2025 Blog Image",
    date: "2025-01-15",
    title: "Top AI Trends to Watch in 2025",
    description:
      "Explore the emerging AI trends that will shape industries in 2025, from generative AI advancements to ethical AI practices, as predicted by Anix AI’s experts.",
    category: "AI Trends",
    author: "Anix AI Team",
    tags: ["AI", "Trends", "2025", "Generative AI"],
    content: {
      blocks: [
        {
          type: "header",
          data: {
            text: "Introduction",
            level: 2,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Artificial Intelligence (AI) continues to evolve at a rapid pace, transforming industries and redefining how businesses operate. In 2025, we expect several key trends to dominate the AI landscape. This blog post explores these trends, offering insights from Anix AI’s experts.",
          },
        },
        {
          type: "header",
          data: {
            text: "Advancements in Generative AI",
            level: 2,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Generative AI has made significant strides in recent years, and 2025 will see even more breakthroughs. From creating realistic images to generating human-like text, generative AI is becoming a game-changer for industries like marketing, entertainment, and design.",
          },
        },
        {
          type: "image",
          data: {
            file: {
              url: "https://markovate.com/wp-content/uploads/2025/05/7.-Personalized-Customer-Interactions@2x.webp",
            },
            caption: "Example of Generative AI in action",
          },
        },
        {
          type: "header",
          data: {
            text: "Key Benefits",
            level: 3,
          },
        },
        {
          type: "list",
          data: {
            style: "unordered",
            items: [
              "Creativity Boost: Generate unique content in seconds.",
              "Cost Efficiency: Reduce the need for manual content creation.",
              "Personalization: Tailor content to individual user preferences.",
            ],
          },
        },
        {
          type: "header",
          data: {
            text: "Conclusion",
            level: 2,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "The AI trends of 2025 promise to bring innovation and efficiency across industries. At Anix AI, we’re excited to be at the forefront of these developments, helping businesses leverage AI responsibly and effectively.",
          },
        },
      ],
    },
  },
  {
    id: "2",
    slug: "generative-ai-marketing-agency",
    imageSrc: "https://markovate.com/wp-content/uploads/2025/05/ERP-Automation-2.0_-Generative-AI-Makes-ERP-Accessible-for-All@3x.webp",
    alt: "Generative AI Case Study Blog Image",
    date: "2024-11-20",
    title: "How Generative AI Transformed a Marketing Agency",
    description:
      "A case study on how Anix AI’s generative AI solution helped a marketing agency produce 1,000+ pieces of content monthly, boosting engagement by 30%.",
    category: "Generative AI",
    author: "Jane Doe",
    tags: ["Generative AI", "Marketing", "Case Study"],
    content: {
      blocks: [
        {
          type: "header",
          data: {
            text: "Overview",
            level: 2,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "A leading marketing agency partnered with Anix AI to implement a generative AI solution for content creation. The goal was to streamline their workflow and increase output without compromising quality.",
          },
        },
        {
          type: "header",
          data: {
            text: "The Challenge",
            level: 2,
          },
        },
        {
          type: "list",
          data: {
            style: "unordered",
            items: [
              "High demand for ad copy and social media content.",
              "Limited resources and tight deadlines.",
              "Maintaining brand consistency across campaigns.",
            ],
          },
        },
        {
          type: "header",
          data: {
            text: "The Solution",
            level: 2,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Anix AI deployed a custom generative AI model that could generate 1,000+ pieces of content monthly, adapt to the agency’s brand voice, and reduce content creation time by 50%.",
          },
        },
        {
          type: "image",
          data: {
            file: {
              url: "https://markovate.com/wp-content/uploads/2025/05/1.-Financial-Planning-Automation-and-Fraud-Detection@2x.webp",
            },
            caption: "Marketing agency workflow with AI",
          },
        },
        {
          type: "header",
          data: {
            text: "Results",
            level: 2,
          },
        },
        {
          type: "list",
          data: {
            style: "unordered",
            items: [
              "30% Increase in Engagement: Social media campaigns saw higher interaction rates.",
              "50% Time Savings: Content creation time was halved.",
              "Improved Scalability: The agency could take on more clients without additional staff.",
            ],
          },
        },
      ],
    },
  },
  {
    id: "3",
    slug: "ai-in-healthcare",
    imageSrc: "https://markovate.com/wp-content/uploads/2025/03/Diffusion-LLMs-dLLMs_-Introducing-a-New-Generation-of-LLMs-88@3x-1.webp",
    alt: "AI in Healthcare Blog Image",
    date: "2024-09-05",
    title: "The Role of AI in Modern Healthcare",
    description:
      "Discover how AI is revolutionizing healthcare with predictive analytics, personalized care, and operational efficiency, based on Anix AI’s recent projects.",
    category: "Healthcare AI",
    author: "Dr. John Smith",
    tags: ["Healthcare", "AI", "Predictive Analytics"],
    content: {
      blocks: [
        {
          type: "header",
          data: {
            text: "Introduction",
            level: 2,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "AI is transforming healthcare by enabling predictive analytics, improving patient outcomes, and streamlining operations. This blog explores how Anix AI is contributing to this revolution.",
          },
        },
        {
          type: "header",
          data: {
            text: "Predictive Analytics",
            level: 2,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "AI models can predict patient outcomes by analyzing historical data, helping doctors make informed decisions and improve care quality.",
          },
        },
        {
          type: "image",
          data: {
            file: {
              url: "https://markovate.com/wp-content/uploads/2025/05/How-Generative-AI-Transforms-Property-Photos-into-Listings_-The-Basic-Workflow@3x.webp",
            },
            caption: "AI-powered predictive analytics in healthcare",
          },
        },
      ],
    },
  },
  {
    id: "4",
    slug: "ai-in-education",
    imageSrc: "https://markovate.com/wp-content/uploads/2025/05/AI-Property-Listing-Generation.webp",
    alt: "AI in Education Blog Image",
    date: "2025-02-10",
    title: "AI in Education: Personalized Learning and Beyond",
    description:
      "Learn how AI is reshaping education with personalized learning experiences and administrative efficiency, based on Anix AI’s insights.",
    category: "Education AI",
    author: "Sarah Johnson",
    tags: ["Education", "AI", "Personalized Learning"],
    content: {
      blocks: [
        {
          type: "header",
          data: {
            text: "Introduction",
            level: 2,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "AI is revolutionizing education by enabling personalized learning and automating administrative tasks. This blog explores how Anix AI is helping educators and institutions leverage AI effectively.",
          },
        },
        {
          type: "header",
          data: {
            text: "Personalized Learning",
            level: 2,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "AI-powered tools can adapt to each student’s learning pace, providing customized lessons and feedback to improve outcomes.",
          },
        },
        {
          type: "image",
          data: {
            file: {
              url: "https://markovate.com/wp-content/uploads/2025/05/7.-Personalized-Customer-Interactions@2x.webp",
            },
            caption: "AI-driven personalized learning platform",
          },
        },
        {
          type: "header",
          data: {
            text: "Administrative Efficiency",
            level: 2,
          },
        },
        {
          type: "list",
          data: {
            style: "unordered",
            items: [
              "Automated Grading: AI can grade assignments and exams quickly.",
              "Scheduling: Optimize class schedules with AI algorithms.",
              "Resource Allocation: Predict and manage resource needs effectively.",
            ],
          },
        },
      ],
    },
  },
  {
    id: "5",
    slug: "ai-supply-chain-retail",
    imageSrc: "https://markovate.com/wp-content/uploads/2025/05/ERP-Automation-2.0_-Generative-AI-Makes-ERP-Accessible-for-All@3x.webp",
    alt: "AI in Supply Chain Blog Image",
    date: "2025-03-25",
    title: "Case Study: AI-Powered Supply Chain for Retail",
    description:
      "A retail company used Anix AI’s predictive analytics to optimize its supply chain, reducing costs by 20% and improving delivery times.",
    category: "Retail AI",
    author: "Michael Brown",
    tags: ["Retail", "AI", "Supply Chain", "Case Study"],
    content: {
      blocks: [
        {
          type: "header",
          data: {
            text: "Overview",
            level: 2,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "A major retail company collaborated with Anix AI to enhance its supply chain operations using AI-driven predictive analytics.",
          },
        },
        {
          type: "header",
          data: {
            text: "The Challenge",
            level: 2,
          },
        },
        {
          type: "list",
          data: {
            style: "unordered",
            items: [
              "Inefficient inventory management leading to overstocking.",
              "Delays in delivery due to poor demand forecasting.",
              "High operational costs from supply chain inefficiencies.",
            ],
          },
        },
        {
          type: "header",
          data: {
            text: "The Solution",
            level: 2,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "Anix AI implemented a predictive analytics model that analyzed historical sales data and market trends to optimize inventory and improve delivery schedules.",
          },
        },
        {
          type: "image",
          data: {
            file: {
              url: "https://markovate.com/wp-content/uploads/2025/05/1.-Financial-Planning-Automation-and-Fraud-Detection@2x.webp",
            },
            caption: "AI optimizing retail supply chain",
          },
        },
        {
          type: "header",
          data: {
            text: "Results",
            level: 2,
          },
        },
        {
          type: "list",
          data: {
            style: "unordered",
            items: [
              "20% Cost Reduction: Optimized inventory reduced waste.",
              "Faster Deliveries: Improved forecasting led to better scheduling.",
              "Enhanced Customer Satisfaction: On-time deliveries increased customer trust.",
            ],
          },
        },
      ],
    },
  },
  {
    id: "6",
    slug: "ethical-ai-2025",
    imageSrc: "https://markovate.com/wp-content/uploads/2025/03/Diffusion-LLMs-dLLMs_-Introducing-a-New-Generation-of-LLMs-88@3x-1.webp",
    alt: "Ethical AI Blog Image",
    date: "2025-05-01",
    title: "Ethical AI in 2025: Addressing Bias and Transparency",
    description:
      "An in-depth look at the ethical challenges of AI in 2025, including bias, transparency, and regulatory concerns, with insights from Anix AI.",
    category: "AI Ethics",
    author: "Emily Davis",
    tags: ["AI Ethics", "Bias", "Transparency", "Regulation"],
    content: {
      blocks: [
        {
          type: "header",
          data: {
            text: "Introduction",
            level: 2,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "As AI becomes more pervasive in 2025, ethical concerns such as bias, transparency, and regulation are taking center stage. This blog examines these challenges and how Anix AI is addressing them.",
          },
        },
        {
          type: "header",
          data: {
            text: "Addressing Bias",
            level: 2,
          },
        },
        {
          type: "paragraph",
          data: {
            text: "AI systems can inadvertently perpetuate biases present in their training data. Anix AI is developing techniques to identify and mitigate bias in AI models.",
          },
        },
        {
          type: "image",
          data: {
            file: {
              url: "https://markovate.com/wp-content/uploads/2025/05/How-Generative-AI-Transforms-Property-Photos-into-Listings_-The-Basic-Workflow@3x.webp",
            },
            caption: "Bias mitigation in AI workflows",
          },
        },
        {
          type: "header",
          data: {
            text: "Transparency and Regulation",
            level: 2,
          },
        },
        {
          type: "list",
          data: {
            style: "unordered",
            items: [
              "Explainable AI: Ensuring AI decisions are understandable.",
              "Regulatory Compliance: Adhering to global AI regulations.",
              "User Trust: Building transparency to foster trust in AI systems.",
            ],
          },
        },
      ],
    },
  },
];