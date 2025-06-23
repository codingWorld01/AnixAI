export interface Industry {
  slug: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  detailedDescription: string;
  imageSrc: string;
  imageAlt: string;
  features: { title: string; description: string }[];
  useCases: { title: string; description: string }[];
  benefits: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export const industries: Industry[] = [
  {
    slug: "healthcare",
    title: "Healthcare",
    description:
      "Transform healthcare with AI solutions for patient care, diagnostics, and operational efficiency, tailored by Anix AI.",
    metaTitle: "AI Solutions for Healthcare | Anix AI",
    metaDescription:
      "Anix AI provides AI solutions for healthcare, enhancing patient care and diagnostics.",
    detailedDescription:
      "Our healthcare AI solutions ensure HIPAA compliance with secure data transmission and robust protection. From predictive analytics for early disease detection to personalized treatment recommendations, we leverage AI to optimize care delivery and improve patient outcomes.",
    imageSrc:
      "https://markovate.com/wp-content/uploads/2024/03/healthcare-industrynew.webp",
    imageAlt: "Healthcare professionals",
    features: [
      {
        title: "HIPAA-compliant data security",
        description:
          "Ensures patient data is protected with encrypted transmission and storage.",
      },
      {
        title: "Predictive analytics for diagnostics",
        description:
          "Uses AI to analyze medical data and predict potential health issues early.",
      },
      {
        title: "Personalized treatment recommendations",
        description:
          "Tailors treatment plans based on individual patient profiles and AI insights.",
      },
      {
        title: "Automated patient scheduling",
        description:
          "Streamlines appointment bookings with AI-driven scheduling tools.",
      },
    ],
    useCases: [
      {
        title: "Early disease detection",
        description:
          "Identifies health risks early using AI-powered diagnostic tools for timely intervention.",
      },
      {
        title: "Patient record management",
        description:
          "Organizes and secures patient records with efficient access for clinicians.",
      },
      {
        title: "Telemedicine enhancement",
        description:
          "Improves virtual consultations with AI-driven insights and support tools.",
      },
      {
        title: "Clinical trial optimization",
        description:
          "Enhances trial efficiency by matching patients to trials using AI analytics.",
      },
    ],
    benefits: [
      {
        title: "Improved patient outcomes",
        description:
          "Better care delivery through precise diagnostics and tailored treatments.",
      },
      {
        title: "Reduced operational costs",
        description:
          "Lowers expenses by automating administrative and clinical processes.",
      },
      {
        title: "Improved data security",
        description:
          "Safguards sensitive health information with robust compliance measures.",
      },
      {
        title: "Streamlined workflows",
        description:
          "Simplifies processes for healthcare providers with AI-driven automation.",
      },
    ],
    faqs: [
      {
        question: "How does Anix AI ensure HIPAA compliance?",
        answer:
          "Our solutions use end-to-end encryption and adhere to HIPAA regulations to protect patient data.",
      },
      {
        question: "Can AI improve diagnostic accuracy?",
        answer:
          "Yes, predictive analytics analyze vast datasets to identify patterns, enhancing diagnostic precision.",
      },
      {
        question: "Is telemedicine supported?",
        answer:
          "Our AI tools integrate with telemedicine platforms, improving virtual care delivery.",
      },
    ],
  },
  {
    slug: "retail",
    title: "Retail",
    description:
      "Enhance retail operations with AI for inventory management, customer experience, and personalized marketing.",
    metaTitle: "AI Solutions for Retail | Anix AI",
    metaDescription:
      "Anix AI offers AI solutions for retail to improve inventory and customer experience.",
    detailedDescription:
      "We harness advanced data analytics to customize customers' buying cycles, ensuring a personalized purchasing journey. Our AI-driven recommendation engines analyze customer behavior, purchase history, and preferences to drive sales and loyalty.",
    imageSrc:
      "https://markovate.com/wp-content/uploads/2024/03/retail-industrynew.webp",
    imageAlt: "Retail customer",
    features: [
      {
        title: "AI-driven recommendation engines",
        description:
          "Suggests products based on customer preferences and behavior analysis.",
      },
      {
        title: "Inventory optimization",
        description:
          "Predicts stock needs to minimize overstock and shortages.",
      },
      {
        title: "Customer behavior analytics",
        description:
          "Tracks and analyzes shopping patterns to inform marketing strategies.",
      },
      {
        title: "Dynamic pricing models",
        description:
          "Adjusts prices in real-time based on demand and competition.",
      },
    ],
    useCases: [
      {
        title: "Personalized marketing campaigns",
        description:
          "Creates targeted promotions using AI-driven customer insights.",
      },
      {
        title: "Stock level forecasting",
        description:
          "Predicts inventory requirements to optimize supply chain operations.",
      },
      {
        title: "Customer loyalty programs",
        description:
          "Enhances retention with tailored rewards based on purchase history.",
      },
      {
        title: "E-commerce optimization",
        description:
          "Improves online shopping experiences with AI-driven features.",
      },
    ],
    benefits: [
      {
        title: "Increased sales conversions",
        description:
          "Boosts revenue through personalized product recommendations.",
      },
      {
        title: "Reduced overstock costs",
        description:
          "Minimizes excess inventory with accurate demand forecasting.",
      },
      {
        title: "Enhanced customer satisfaction",
        description:
          "Improves shopping experiences with tailored interactions.",
      },
      {
        title: "Improved supply chain efficiency",
        description:
          "Streamlines logistics with AI-driven inventory management.",
      },
    ],
    faqs: [
      {
        question: "How do recommendation engines work?",
        answer:
          "They analyze customer data like purchase history and preferences to suggest relevant products.",
      },
      {
        question: "Can AI reduce inventory waste?",
        answer:
          "Yes, our inventory optimization tools predict demand to prevent overstocking.",
      },
      {
        question: "Is this scalable for small retailers?",
        answer:
          "Our solutions are designed to scale across businesses of all sizes.",
      },
    ],
  },
  {
    slug: "fintech",
    title: "Fintech",
    description:
      "Leverage AI for fraud detection, financial analytics, and risk management in the fintech industry with Anix AI.",
    metaTitle: "AI Solutions for Fintech | Anix AI",
    metaDescription:
      "Anix AI provides AI solutions for fintech, including fraud detection and analytics.",
    detailedDescription:
      "Our fintech solutions adhere to rigorous regulatory standards for top-tier data protection. We harness AI for advanced fraud detection, real-time risk assessment, and personalized financial advisory services to enhance security and trust.",
    imageSrc:
      "https://markovate.com/wp-content/uploads/2024/03/fintech-industrynew.webp",
    imageAlt: "Fintech professional",
    features: [
      {
        title: "Real-time fraud detection",
        description:
          "Identifies suspicious transactions instantly using AI algorithms.",
      },
      {
        title: "Regulatory compliance tools",
        description:
          "Ensures adherence to financial regulations with automated checks.",
      },
      {
        title: "AI-powered risk assessment",
        description:
          "Evaluates risks in real-time for lending and investment decisions.",
      },
      {
        title: "Personalized financial advisory",
        description:
          "Offers tailored financial advice based on user data and goals.",
      },
    ],
    useCases: [
      {
        title: "Credit scoring automation",
        description:
          "Automates credit evaluations with AI for faster loan approvals.",
      },
      {
        title: "Anti-money laundering monitoring",
        description:
          "Detects illicit transactions with AI to ensure regulatory compliance.",
      },
      {
        title: "Investment portfolio management",
        description:
          "Optimizes portfolios with AI-driven investment strategies.",
      },
      {
        title: "Customer onboarding",
        description:
          "Simplifies KYC processes with AI-driven identity verification.",
      },
    ],
    benefits: [
      {
        title: "Enhanced security",
        description:
          "Protects against fraud with advanced AI detection systems.",
      },
      {
        title: "Reduced compliance costs",
        description:
          "Automates regulatory processes to lower operational expenses.",
      },
      {
        title: "Improved decision-making",
        description:
          "Provides data-driven insights for better financial strategies.",
      },
      {
        title: "Increased customer trust",
        description:
          "Builds confidence with secure and transparent services.",
      },
    ],
    faqs: [
      {
        question: "How does AI improve fraud detection?",
        answer:
          "AI analyzes transaction patterns to flag anomalies in real-time.",
      },
      {
        question: "Are your solutions compliant with regulations?",
        answer:
          "Yes, we ensure adherence to standards like GDPR and PCI DSS.",
      },
      {
        question: "Can AI assist with KYC?",
        answer:
          "Our AI streamlines KYC by automating identity verification processes.",
      },
    ],
  },
  {
    slug: "saas",
    title: "SaaS",
    description:
      "Optimize your SaaS platform with AI-driven features, user insights, and automation from Anix AI.",
    metaTitle: "AI Solutions for SaaS | Anix AI",
    metaDescription:
      "Anix AI offers AI solutions to enhance SaaS platforms with automation and insights.",
    detailedDescription:
      "We build SaaS solutions that optimize operations and drive user engagement using intelligent automation. Leveraging ML and NLP, we empower businesses to extract actionable insights and automate repetitive tasks for scalability.",
    imageSrc:
      "https://markovate.com/wp-content/uploads/2024/03/saas-industrynew.webp",
    imageAlt: "SaaS professional",
    features: [
      {
        title: "Intelligent automation workflows",
        description:
          "Automates repetitive tasks to improve operational efficiency.",
      },
      {
        title: "User behavior analytics",
        description:
          "Tracks user interactions to optimize product features.",
      },
      {
        title: "Churn prediction models",
        description:
          "Identifies at-risk users to reduce customer churn rates.",
      },
      {
        title: "NLP-powered chatbots",
        description:
          "Enhances support with AI-driven conversational interfaces.",
      },
    ],
    useCases: [
      {
        title: "Customer support automation",
        description:
          "Reduces support tickets with AI-powered chatbots and tools.",
      },
      {
        title: "User onboarding optimization",
        description:
          "Guides new users with personalized onboarding experiences.",
      },
      {
        title: "Feature usage tracking",
        description:
          "Analyzes how users engage with product features for improvements.",
      },
      {
        title: "Subscription management",
        description:
          "Automates billing and subscription lifecycle processes.",
      },
    ],
    benefits: [
      {
        title: "Improved user retention",
        description:
          "Reduces churn with personalized engagement strategies.",
      },
      {
        title: "Reduced operational costs",
        description:
          "Lowers expenses through automation of routine tasks.",
      },
      {
        title: "Enhanced product insights",
        description:
          "Provides data-driven insights for product development.",
      },
      {
        title: "Scalable operations",
        description:
          "Supports growth with flexible AI-driven solutions.",
      },
    ],
    faqs: [
      {
        question: "How do churn prediction models work?",
        answer:
          "They analyze user behavior to identify patterns indicating potential churn.",
      },
      {
        question: "Can AI improve customer support?",
        answer:
          "Yes, our NLP chatbots handle queries efficiently, reducing support load.",
      },
      {
        question: "Is integration with existing SaaS platforms easy?",
        answer:
          "Our solutions are designed for seamless integration with most platforms.",
      },
    ],
  },
  {
    slug: "travel",
    title: "Travel",
    description:
      "Improve the travel industry with AI solutions for personalized recommendations, booking optimization, and customer support.",
    metaTitle: "AI Solutions for Travel | Anix AI",
    metaDescription:
      "Anix AI provides AI solutions for the travel industry to enhance bookings and support.",
    detailedDescription:
      "Our digital solutions redefine the travel industry by streamlining booking processes and enhancing itinerary management. We monitor market demand and track competitor pricing in real-time to optimize travel business operations.",
    imageSrc:
      "https://markovate.com/wp-content/uploads/2024/03/travel-industrynew.webp",
    imageAlt: "Travel individual",
    features: [
      {
        title: "Personalized itinerary planning",
        description:
          "Creates tailored travel plans based on user preferences.",
      },
      {
        title: "Real-time pricing optimization",
        description:
          "Adjusts prices dynamically to stay competitive.",
      },
      {
        title: "AI-powered customer support",
        description:
          "Provides instant assistance with chatbots and AI tools.",
      },
      {
        title: "Demand forecasting models",
        description:
          "Predicts travel trends to optimize resource allocation.",
      },
    ],
    useCases: [
      {
        title: "Dynamic package recommendations",
        description:
          "Suggests travel packages based on user preferences and trends.",
      },
      {
        title: "Booking process automation",
        description:
          "Simplifies reservations with AI-driven booking systems.",
      },
      {
        title: "Customer feedback analysis",
        description:
          "Analyzes reviews to improve services and customer satisfaction.",
      },
      {
        title: "Competitor price tracking",
        description:
          "Monitors competitor pricing for strategic adjustments.",
      },
    ],
    benefits: [
      {
        title: "Increased booking conversions",
        description:
          "Drives sales with personalized and optimized booking processes.",
      },
      {
        title: "Enhanced customer experience",
        description:
          "Improves satisfaction with tailored travel recommendations.",
      },
      {
        title: "Optimized pricing strategies",
        description:
          "Maximizes revenue with dynamic pricing models.",
      },
      {
        title: "Improved operational efficiency",
        description:
          "Streamlines operations with AI-driven automation.",
      },
    ],
    faqs: [
      {
        question: "How does AI personalize travel itineraries?",
        answer:
          "It analyzes user preferences and travel history to create tailored plans.",
      },
      {
        question: "Can AI handle customer inquiries?",
        answer:
          "Our AI chatbots provide instant support for common travel queries.",
      },
      {
        question: "Does it integrate with booking platforms?",
        answer:
          "Yes, our solutions work with major travel booking systems.",
      },
    ],
  },
  {
    slug: "fitness",
    title: "Fitness",
    description:
      "Power the fitness industry with AI for personalized workout plans, health tracking, and user engagement.",
    metaTitle: "AI Solutions for Fitness | Anix AI",
    metaDescription:
      "Anix AI offers AI solutions for the fitness industry to personalize health plans.",
    detailedDescription:
      "Our digital solutions include gym management software, AI-driven virtual coaching platforms, and wearable fitness technology integration to enhance member engagement and health outcomes.",
    imageSrc:
      "https://markovate.com/wp-content/uploads/2024/03/fitness-industrynew.webp",
    imageAlt: "Fitness individual",
    features: [
      {
        title: "AI-driven workout plans",
        description:
          "Generates personalized exercise routines based on user goals.",
      },
      {
        title: "Wearable device integration",
        description:
          "Syncs with fitness trackers to monitor health metrics.",
      },
      {
        title: "Health metrics tracking",
        description:
          "Analyzes data like heart rate and calories for progress tracking.",
      },
      {
        title: "Engagement analytics",
        description:
          "Measures user interaction to boost retention and motivation.",
      },
    ],
    useCases: [
      {
        title: "Virtual coaching platforms",
        description:
          "Offers AI-driven coaching for remote fitness training.",
      },
      {
        title: "Gym management software",
        description:
          "Automates scheduling, billing, and member management.",
      },
      {
        title: "Member retention programs",
        description:
          "Uses AI to create engagement strategies for loyalty.",
      },
      {
        title: "Personalized nutrition plans",
        description:
          "Provides diet recommendations based on health data.",
      },
    ],
    benefits: [
      {
        title: "Improved user engagement",
        description:
          "Boosts participation with personalized fitness plans.",
      },
      {
        title: "Enhanced health outcomes",
        description:
          "Promotes better results with tailored workouts and tracking.",
      },
      {
        title: "Streamlined operations",
        description:
          "Simplifies gym management with automated tools.",
      },
      {
        title: "Increased member loyalty",
        description:
          "Encourages retention with engaging experiences.",
      },
    ],
    faqs: [
      {
        question: "How do AI workout plans work?",
        answer:
          "They analyze user goals and fitness levels to create custom routines.",
      },
      {
        question: "Can it integrate with wearables?",
        answer:
          "Yes, our solutions sync with devices like Fitbit and Apple Watch.",
      },
      {
        question: "Does it support gym management?",
        answer:
          "Our software automates scheduling, billing, and more.",
      },
    ],
  },
  {
    slug: "insurance",
    title: "Insurance",
    description:
      "Streamline insurance processes with AI for claims processing, risk assessment, and customer service automation.",
    metaTitle: "AI Solutions for Insurance | Anix AI",
    metaDescription:
      "Anix AI provides AI solutions for insurance to automate claims and risk assessment.",
    detailedDescription:
      "We help insurers harness AI to streamline claims, enhance customer experiences, and boost fraud detection. Our customized solutions address underwriting, risk management, and claims automation challenges.",
    imageSrc:
      "https://markovate.com/wp-content/uploads/2024/11/insurance-industrynew.webp",
    imageAlt: "Insurance meeting",
    features: [
      {
        title: "Automated claims processing",
        description:
          "Speeds up claims handling with AI-driven automation.",
      },
      {
        title: "Fraud detection algorithms",
        description:
          "Identifies fraudulent claims using advanced analytics.",
      },
      {
        title: "Risk assessment models",
        description:
          "Evaluates policyholder risks for accurate underwriting.",
      },
      {
        title: "Customer service chatbots",
        description:
          "Provides instant support for policyholder inquiries.",
      },
    ],
    useCases: [
      {
        title: "Underwriting automation",
        description:
          "Streamlines policy issuance with AI-driven risk analysis.",
      },
      {
        title: "Claims fraud detection",
        description:
          "Flags suspicious claims for investigation using AI.",
      },
      {
        title: "Policy personalization",
        description:
          "Tailors insurance plans based on customer data.",
      },
      {
        title: "Customer query resolution",
        description:
          "Handles common inquiries with AI-powered chatbots.",
      },
    ],
    benefits: [
      {
        title: "Faster claims processing",
        description:
          "Reduces claim settlement time with automation.",
      },
      {
        title: "Reduced fraud losses",
        description:
          "Minimizes losses by detecting fraudulent claims early.",
      },
      {
        title: "Improved customer satisfaction",
        description:
          "Enhances experiences with quick and accurate services.",
      },
      {
        title: "Lower operational costs",
        description:
          "Cuts expenses through automated processes.",
      },
    ],
    faqs: [
      {
        question: "How does AI detect insurance fraud?",
        answer:
          "It analyzes claim patterns to identify anomalies indicating fraud.",
      },
      {
        question: "Can AI improve claims processing speed?",
        answer:
          "Yes, automation reduces manual work, speeding up settlements.",
      },
      {
        question: "Are chatbots effective for customer service?",
        answer:
          "Our AI chatbots handle routine queries efficiently, freeing up staff.",
      },
    ],
  },
  {
    slug: "construction",
    title: "Construction",
    description:
      "Enhance construction projects with AI for project management, safety monitoring, and resource optimization.",
    metaTitle: "AI Solutions for Construction | Anix AI",
    metaDescription:
      "Anix AI offers AI solutions for construction to improve project management.",
    detailedDescription:
      "Our construction AI solutions address industry needs like real-time monitoring, environmental compliance, and material management, setting the foundation for measurable improvements across every project phase.",
    imageSrc:
      "https://markovate.com/wp-content/uploads/2024/11/construction-ai-development-image.webp",
    imageAlt: "Construction workers",
    features: [
      {
        title: "Real-time project monitoring",
        description:
          "Tracks project progress with live data and AI analytics.",
      },
      {
        title: "Resource optimization tools",
        description:
          "Allocates materials and labor efficiently to reduce waste.",
      },
      {
        title: "Safety compliance analytics",
        description:
          "Monitors site safety to ensure regulatory compliance.",
      },
      {
        title: "Material management systems",
        description:
          "Manages inventory to prevent delays and overstocking.",
      },
    ],
    useCases: [
      {
        title: "Construction site management",
        description:
          "Oversees site operations with AI-driven insights.",
      },
      {
        title: "Budget forecasting",
        description:
          "Predicts project costs to stay within budget.",
      },
      {
        title: "Worker safety monitoring",
        description:
          "Ensures safety compliance with real-time alerts.",
      },
      {
        title: "Supply chain coordination",
        description:
          "Streamlines material delivery with AI logistics.",
      },
    ],
    benefits: [
      {
        title: "Reduced project delays",
        description:
          "Improves timelines with real-time monitoring and planning.",
      },
      {
        title: "Improved safety compliance",
        description:
          "Enhances worker safety with proactive analytics.",
      },
      {
        title: "Optimized resource usage",
        description:
          "Minimizes waste with efficient material and labor allocation.",
      },
      {
        title: "Enhanced project profitability",
        description:
          "Boosts margins with cost-effective operations.",
      },
    ],
    faqs: [
      {
        question: "How does AI improve construction safety?",
        answer:
          "It monitors sites in real-time to detect safety violations and risks.",
      },
      {
        question: "Can AI reduce project costs?",
        answer:
          "Yes, resource optimization and forecasting minimize waste and delays.",
      },
      {
        question: "Does it support large-scale projects?",
        answer:
          "Our solutions scale to handle projects of any size.",
      },
    ],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    description:
      "Optimize manufacturing with AI for predictive maintenance, quality control, and supply chain efficiency.",
    metaTitle: "AI Solutions for Manufacturing | Anix AI",
    metaDescription:
      "Anix AI provides AI solutions for manufacturing to enhance quality and efficiency.",
    detailedDescription:
      "We collaborate with manufacturers to implement AI solutions for predictive maintenance, quality assurance, automated price forecasting, and supply chain optimization to boost efficiency and reduce costs.",
    imageSrc:
      "https://markovate.com/wp-content/uploads/2024/11/manufacturing-ai-development-image.webp",
    imageAlt: "Manufacturing workers",
    features: [
      {
        title: "Predictive maintenance systems",
        description:
          "Predicts equipment failures to prevent downtime.",
      },
      {
        title: "Quality control automation",
        description:
          "Ensures product quality with AI-driven inspections.",
      },
      {
        title: "Supply chain optimization",
        description:
          "Streamlines logistics with demand-driven planning.",
      },
      {
        title: "Production forecasting",
        description:
          "Predicts output needs to optimize production schedules.",
      },
    ],
    useCases: [
      {
        title: "Equipment downtime reduction",
        description:
          "Minimizes disruptions with predictive maintenance.",
      },
      {
        title: "Defect detection",
        description:
          "Identifies product flaws early with AI inspections.",
      },
      {
        title: "Inventory management",
        description:
          "Optimizes stock levels to avoid shortages or excess.",
      },
      {
        title: "Production scheduling",
        description:
          "Plans production efficiently with AI forecasts.",
      },
    ],
    benefits: [
      {
        title: "Increased production efficiency",
        description:
          "Boosts output with optimized processes.",
      },
      {
        title: "Reduced maintenance costs",
        description:
          "Lowers expenses with proactive equipment care.",
      },
      {
        title: "Improved product quality",
        description:
          "Ensures consistency with automated quality checks.",
      },
      {
        title: "Streamlined supply chain",
        description:
          "Enhances logistics with AI-driven planning.",
      },
    ],
    faqs: [
      {
        question: "How does predictive maintenance work?",
        answer:
          "It uses AI to analyze equipment data and predict failures before they occur.",
      },
      {
        question: "Can AI improve product quality?",
        answer:
          "Yes, automated inspections detect defects with high accuracy.",
      },
      {
        question: "Is it compatible with existing systems?",
        answer:
          "Our solutions integrate with most manufacturing systems.",
      },
    ],
  },
  {
    slug: "food",
    title: "Food",
    description:
      "Enhance food production and customer experience with AI solutions for demand forecasting and quality control.",
    metaTitle: "AI Solutions for Food | Anix AI",
    metaDescription:
      "Anix AI provides AI solutions for the food industry to optimize operations and customer experience.",
    detailedDescription:
      "We enhance food production with AI-driven solutions for demand forecasting, inventory management, personalized recommendations, and quality control, optimizing operations and reducing waste.",
    imageSrc:
      "https://markovate.com/wp-content/uploads/2024/11/food-industry-page-img.webp",
    imageAlt: "Food industry worker",
    features: [
      {
        title: "Demand forecasting models",
        description:
          "Predicts customer demand to optimize production.",
      },
      {
        title: "Quality control automation",
        description:
          "Ensures food safety with AI-driven inspections.",
      },
      {
        title: "Personalized menu recommendations",
        description:
          "Suggests dishes based on customer preferences.",
      },
      {
        title: "Inventory optimization",
        description:
          "Manages stock to reduce waste and shortages.",
      },
    ],
    useCases: [
      {
        title: "Supply chain management",
        description:
          "Streamlines logistics with AI-driven planning.",
      },
      {
        title: "Food safety monitoring",
        description:
          "Ensures compliance with safety standards using AI.",
      },
      {
        title: "Customer preference analysis",
        description:
          "Analyzes data to tailor menus and promotions.",
      },
      {
        title: "Waste reduction",
        description:
          "Minimizes food waste with precise inventory control.",
      },
    ],
    benefits: [
      {
        title: "Reduced food waste",
        description:
          "Lowers losses with accurate demand and inventory planning.",
      },
      {
        title: "Improved customer satisfaction",
        description:
          "Enhances dining experiences with personalized offerings.",
      },
      {
        title: "Enhanced operational efficiency",
        description:
          "Streamlines production and logistics with AI.",
      },
      {
        title: "Better inventory control",
        description:
          "Optimizes stock to prevent shortages and excess.",
      },
    ],
    faqs: [
      {
        question: "How does AI reduce food waste?",
        answer:
          "It predicts demand and optimizes inventory to minimize excess stock.",
      },
      {
        question: "Can AI ensure food safety?",
        answer:
          "Yes, automated inspections detect contamination and ensure compliance.",
      },
      {
        question: "Does it support personalized menus?",
        answer:
          "Our AI analyzes customer data to offer tailored menu suggestions.",
      },
    ],
  },
];