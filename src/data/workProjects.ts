export interface Feature {
  headline: string;
  description: string;
}

export interface Result {
  headline: string;
  description: string;
}

export interface Testimonial {
  personName: string;
  personTitle: string;
  personImage: string;
  personImageAlt: string;
  quote: string;
}

export interface Solution {
  headline: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export interface WorkProject {
  id: string;
  slug: string;
  headline: string;
  description: string;
  tags: string[];
  imageSrc: string;
  imageAlt: string;
  keyFeatures: Feature[];
  results: Result[];
  testimonial: Testimonial;
  similarSolutions: Solution[];
}

export const workProjects: WorkProject[] = [
  {
    id: "1",
    slug: "generative-ai-marketing",
    headline: "Transforming Marketing with Generative AI",
    description:
      "Anix AI partnered with a leading marketing agency to implement a generative AI solution that revolutionized their content creation process, enabling them to produce over 1,000 pieces of content monthly while boosting engagement by 30%.",
    tags: ["Generative AI", "Marketing", "Content Creation"],
    imageSrc: "https://markovate.com/wp-content/uploads/2025/05/ERP-Automation-2.0_-Generative-AI-Makes-ERP-Accessible-for-All@3x.webp",
    imageAlt: "Generative AI Marketing Project Image",
    keyFeatures: [
      {
        headline: "Automated Content Generation",
        description:
          "Our generative AI system enabled the agency to produce over 1,000 pieces of high-quality ad copy, social media posts, and blog articles every month, significantly reducing the workload on their creative team and allowing them to focus on strategy and client relationships.",
      },
      {
        headline: "Brand Voice Consistency",
        description:
          "We trained the AI model on the agency’s existing content to ensure that all generated materials adhered to their unique brand voice, maintaining consistency across all campaigns while allowing for rapid scaling of content production.",
      },
      {
        headline: "Time Efficiency",
        description:
          "By automating repetitive content creation tasks, the solution cut down content production time by 50%, enabling the agency to roll out marketing campaigns faster and respond to market trends in real-time, giving them a competitive edge.",
      },
    ],
    results: [
      {
        headline: "30% Increase in Engagement",
        description:
          "The AI-generated content was tailored to audience preferences, resulting in a 30% increase in social media engagement rates, including likes, shares, and comments, across multiple campaigns within the first three months of implementation.",
      },
      {
        headline: "50% Time Savings",
        description:
          "The agency reduced their content creation timeline by 50%, allowing their team to allocate more time to strategic planning and client engagement, which improved overall operational efficiency and client satisfaction.",
      },
      {
        headline: "Improved Scalability",
        description:
          "With the AI solution handling content generation, the agency was able to take on more clients without hiring additional staff, effectively doubling their client portfolio while maintaining high-quality output and meeting tight deadlines.",
      },
    ],
    testimonial: {
      personName: "Jane Doe",
      personTitle: "CEO of Marketing Agency",
      personImage: "https://media.istockphoto.com/id/1371934584/photo/portrait-of-a-confident-mature-businesswoman-working-in-a-modern-office.jpg?s=612x612&w=0&k=20&c=NF_IO6IEXY3HifRIhRqP0KDFJFdlFwaMwo3zfOOvKnQ=",
      personImageAlt: "Jane Doe, CEO of Marketing Agency",
      quote:
        "Working with Anix AI has been a game-changer for our agency. Their generative AI solution not only saved us time but also significantly improved our campaign performance. We’re now able to scale our operations and deliver personalized content at an unprecedented pace.",
    },
    similarSolutions: [
      {
        headline: "AI-Powered Content Strategy",
        description:
          "Leverage advanced AI algorithms to analyze market trends, customer behavior, and competitor strategies, enabling us to craft a tailored content strategy that drives engagement, builds brand loyalty, and increases conversions for your business.",
        imageSrc: "https://markovate.com/wp-content/uploads/2024/12/CodmanAI-case-study-home.webp",
        imageAlt: "AI-Powered Content Strategy Image",
      },
      {
        headline: "Automated Social Media Campaigns",
        description:
          "Streamline your social media marketing efforts with AI-driven automation that schedules posts, generates engaging content, and analyzes performance metrics in real-time, helping you maintain a consistent online presence and connect with your audience effectively.",
        imageSrc: "https://markovate.com/wp-content/uploads/2024/08/shopspot-thumbnail-v3.webp",
        imageAlt: "Automated Social Media Campaigns Image",
      },
      {
        headline: "Personalized Customer Interactions",
        description:
          "Utilize AI to analyze customer data and deliver highly personalized experiences, such as tailored product recommendations, targeted email campaigns, and dynamic website content, to enhance customer satisfaction and boost retention rates.",
        imageSrc: "https://markovate.com/wp-content/uploads/2024/01/croft-logo-thumbnail.webp",
        imageAlt: "Personalized Customer Interactions Image",
      },
    ],
  },
  {
    id: "2",
    slug: "ai-in-healthcare",
    headline: "Revolutionizing Healthcare with Predictive Analytics",
    description:
      "Anix AI collaborated with a healthcare provider to implement predictive analytics, improving patient outcomes and operational efficiency through data-driven insights.",
    tags: ["Healthcare", "Predictive Analytics", "AI"],
    imageSrc: "https://markovate.com/wp-content/uploads/2025/03/Diffusion-LLMs-dLLMs_-Introducing-a-New-Generation-of-LLMs-88@3x-1.webp",
    imageAlt: "AI in Healthcare Project Image",
    keyFeatures: [
      {
        headline: "Predictive Analytics",
        description:
          "Our AI system analyzed vast amounts of historical patient data, including medical histories and treatment outcomes, to accurately predict potential health risks, enabling proactive interventions that improved patient care and reduced complications.",
      },
      {
        headline: "Personalized Care",
        description:
          "The solution provided doctors with AI-generated insights to create tailored treatment plans for each patient, taking into account individual health profiles, preferences, and risk factors, which led to more effective and patient-centered care.",
      },
      {
        headline: "Operational Efficiency",
        description:
          "By leveraging AI to optimize hospital workflows, such as staff scheduling, patient admissions, and resource allocation, the system streamlined operations, reduced wait times, and ensured that critical resources were available when needed most.",
      },
    ],
    results: [
      {
        headline: "Improved Patient Outcomes",
        description:
          "Predictive analytics enabled early identification of at-risk patients, leading to a 20% reduction in hospital readmission rates within the first six months, as doctors could intervene earlier and provide more targeted care.",
      },
      {
        headline: "Cost Savings",
        description:
          "The AI-driven resource allocation and workflow optimization reduced operational costs by 15%, saving the healthcare provider millions annually while maintaining high standards of care and improving overall efficiency.",
      },
      {
        headline: "Enhanced Care Quality",
        description:
          "Doctors were equipped with data-driven recommendations that improved decision-making, resulting in more accurate diagnoses, better treatment plans, and a higher standard of care that increased patient satisfaction and trust.",
      },
    ],
    testimonial: {
      personName: "Dr. John Smith",
      personTitle: "Chief Medical Officer",
      personImage: "https://t3.ftcdn.net/jpg/01/80/80/28/360_F_180802852_C3Zm4g9avBz5osPEA769dF0KKp5cQZYT.jpg",
      personImageAlt: "Dr. John Smith, Chief Medical Officer",
      quote:
        "Anix AI’s predictive analytics solution has transformed how we deliver care. We’re now able to anticipate patient needs and allocate resources more effectively, leading to better outcomes and a more efficient operation.",
    },
    similarSolutions: [
      {
        headline: "AI-Driven Patient Monitoring",
        description:
          "Implement AI-powered tools to monitor patient health in real-time, providing continuous updates on vital signs, detecting anomalies early, and alerting healthcare providers to potential issues, ensuring timely interventions and improved patient safety.",
        imageSrc: "https://markovate.com/wp-content/uploads/2023/03/Eventio-app-_thumbnail_Desktop.webp",
        imageAlt: "AI-Driven Patient Monitoring Image",
      },
      {
        headline: "Predictive Maintenance for Equipment",
        description:
          "Use AI to predict and prevent equipment failures in healthcare facilities by analyzing usage patterns and maintenance data, reducing downtime, ensuring equipment reliability, and maintaining uninterrupted patient care services.",
        imageSrc: "https://markovate.com/wp-content/uploads/2023/12/MPT-thumbnail_website@2x.webp",
        imageAlt: "Predictive Maintenance for Equipment Image",
      },
      {
        headline: "Data-Driven Resource Allocation",
        description:
          "Optimize hospital resources with AI insights that analyze patient inflow, staff availability, and equipment usage, ensuring efficient allocation of resources, reducing operational bottlenecks, and enhancing overall hospital performance.",
        imageSrc: "https://markovate.com/wp-content/uploads/2024/01/croft-logo-thumbnail.webp",
        imageAlt: "Data-Driven Resource Allocation Image",
      },
    ],
  },
];