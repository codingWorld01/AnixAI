
// import { NextRequest, NextResponse } from "next/server";
// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { fetchWebsiteContent } from "@/lib/fetchWebsiteContent";

// // Initialize Gemini API
// const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// // Rate limiting (in-memory for simplicity)
// const rateLimitMap = new Map();

// export async function POST(request: NextRequest) {
//   try {
//     // Rate limiting: 2 requests per minute per IP (to match Gemini free tier)
//     // Try to get the IP address from the x-forwarded-for header or fallback to "unknown"
//         const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
//     const now = Date.now();
//     const limit = 2;
//     const windowMs = 60 * 1000;

//     const userLimit = rateLimitMap.get(ip) || { count: 0, lastRequest: now };
//     if (now - userLimit.lastRequest > windowMs) {
//       userLimit.count = 0;
//       userLimit.lastRequest = now;
//     }

//     if (userLimit.count >= limit) {
//       return NextResponse.json({ error: "Rate limit exceeded. Please try again later." }, { status: 429 });
//     }

//     userLimit.count += 1;
//     rateLimitMap.set(ip, userLimit);

//     // Process the request
//     const body = await request.json();
//     const { message } = body;

//     if (!message || typeof message !== "string") {
//       return NextResponse.json({ error: "Message is required" }, { status: 400 });
//     }

//     console.log(message)

//     // Fetch website content from cache
//     const websiteContent = await fetchWebsiteContent();
//     console.log(websiteContent)

//     // Filter relevant pages
//     const keywords = message.toLowerCase().split(/\s+/);
//     const relevantPages = websiteContent
//       .map((page: { path: string; title: string; content: string }) => {
//         const pageText = `${page.title.toLowerCase()} ${page.content.toLowerCase()}`;
//         let score = 0;
//         for (const keyword of keywords) {
//           if (pageText.includes(keyword)) {
//             score += 1;
//           }
//         }
//         return { ...page, score };
//       })
//       .filter((page: { score: number }) => page.score > 0)
//       .sort((a: { score: number }, b: { score: number }) => b.score - a.score)
//       .slice(0, 3);

//     const context = relevantPages
//       .map((page: { path: string; title: string; content: string }) => `Page: ${page.path}\nTitle: ${page.title}\nContent: ${page.content}`)
//       .join("\n\n") || "No relevant content found.";

//     // Construct prompt for Gemini
//     const prompt = `You are a chatbot for the AnixAI website. Use the following website content to answer the user's query. If the query is unrelated to the website, respond with a helpful general answer or say you don't have that information.

// Website Content:
// ${context}

// User Query: ${message}

// Answer the query concisely and naturally, as if you're a customer support agent for AnixAI.`;

//     // Call Gemini API
//     const result = await model.generateContent(prompt);
//     const reply = result.response.text();

//     return NextResponse.json({ reply }, { status: 200 });
//   } catch (error) {
//     console.error("Error in chat:", error);
//     return NextResponse.json({ error: "Internal server error" }, { status: 500 });
//   }
// }
















import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function POST(request: NextRequest) {
  try {
   
    const body = await request.json();
    const { message } = body;

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }


    const baseUrl = "http://localhost:3000"; 
    

    const prompt = `
        You are a professional chatbot for the Anix AI website, serving as a 24/7 salesperson. Your role is to showcase our brand, explain our offerings, build trust, and capture leads. Use the following comprehensive information about Anix AI to answer user queries accurately and persuasively. If a query is unrelated to Anix AI or the website, provide a helpful general response or politely state that you don’t have that information.

**Chatbot Guidelines:**
- Respond concisely and naturally, as a customer support agent for Anix AI.
- Align with our brand messaging: "Anix AI = Practical AI Partner for BFSI, Telecom, Education, Logistics, and Beyond."
- When mentioning a website page (e.g., Services, Industries, Contact), include a clickable Markdown link using the provided path. Example: [Explore our Services](/services).
- Highlight key value propositions (Proven Expertise, Customized Solutions, Dedicated Support) or mention ready-to-demo solutions (e.g., Intelligent Risk Profiler, Client Query Summarizer, Financial Document Analyzer) when relevant to showcase capabilities.
- For collaboration, partnership, or project inquiries, include a brief elevator pitch ("At Anix AI, we build practical, secure, and scalable AI and GenAI solutions for BFSI, telecom, and education sectors. We've launched three MVPs, signed our first paid pilot, and are seeing strong early traction. We’re now scaling and open to strategic collaborations.") and direct users to the [Contact page](/contact-us).
- If a user asks to be contacted or provides an inquiry, suggest they visit the [Contact page](/contact-us) to submit their details.
- Keep responses short, professional, and focused on driving interest in Anix AI’s solutions.

**Anix AI Website Content:**

**Home Page:**
- **Tagline**: We help data-driven companies build measurable Generative AI solutions.
- **Mission**: Empower clients with Generative AI models and agents that drive impactful growth and enhance ROI. Assist in enhancing operational efficiency, reducing costs, and creating new revenue streams.
- **Services Overview**: AI experts develop solutions from pilot to production in weeks, merging clear strategies, deep industry knowledge, and technical expertise.
- **Transformative Solutions**: 
  - Plan Your AI Adoption: Analyze business requirements and data capabilities for a strategic roadmap [Learn more](#).
  - Enhance Decision-Making: Custom AI solutions reveal insights from data [Learn more](#).
  - Scale Gradually with Confidence: Start with proof-of-concepts and scale with a structured approach [Learn more](#).
- **Why Us**: Expertise in AI, Proven Results, Scalable Solutions.
- **Company Stats**: Helping startups to large organizations since 2020 with 200+ innovative solutions, 50+ certified AI engineers, 15+ years of proven industry experience.
- **Process**: Executive Briefing (2 hours), Technology Assessment (2-3 days), Proof of Concept (8-12 weeks), AI Application Deployment (3-4 months).
- **Point of View**: Thought leadership with blogs on Generative AI, AI Agents, Real-World AI Applications, etc. [View All Articles](/blog).

**Services Page:**
- **Overview**: Empower businesses with cutting-edge services leveraging expertise to transform operations.
- **Capabilities**:
  - AI Strategy Consulting: Define AI vision, GenAI adoption, regulatory compliance [path: /services].
  - GenAI and Multi-Agent Development: Custom intelligent assistants, agent orchestration [path: /services].
  - Industry-Specific AI Solutions: Tailored for BFSI, Wealth, Telecom, etc. [path: /services].
  - AI Integration Services: Integrate GenAI with CRM, ERP, etc. [path: /services].
  - AI Product Development: Full-cycle design and deployment [path: /services].
- **Additional Technologies**: Blockchain, Mobile, Cloud, Software, Web Design [Explore Solutions](# for each).

**Industries Page:**
- **Overview**: Transform industries with innovative digital solutions for efficiency and cost reduction.
- **Industries Served**:
  - Healthcare: HIPAA-compliant solutions, predictive analytics [Learn more](/industries/healthcare).
  - Retail: AI-driven recommendations, inventory optimization [Learn more](/industries/retail).
  - Fintech: Fraud detection, regulatory compliance [Learn more](/industries/fintech).
  - SaaS: Intelligent automation, churn prediction [Learn more](/industries/saas).
  - Travel: Booking optimization, pricing tracking [Learn more](/industries/travel).
  - Fitness: Workout plans, wearable integration [Learn more](/industries/fitness).
  - Insurance: Claims automation, fraud detection [Learn more](/industries/insurance).
  - Construction: Real-time monitoring, safety compliance [Learn more](/industries/construction).
  - Manufacturing: Predictive maintenance, supply chain optimization [Learn more](/industries/manufacturing).
  - Food: Demand forecasting, quality control [Learn more](/industries/food).

**Industry Subpages (Examples):**
- **Healthcare Industry Solutions**: AI for patient care, diagnostics, HIPAA compliance [path: /industries/healthcare].
  - Features: Secure data, predictive analytics, automated scheduling.
  - Benefits: Improved outcomes, reduced costs, streamlined workflows.
- **Retail Industry Solutions**: Inventory management, personalized marketing [path: /industries/retail].
  - Features: Recommendation engines, dynamic pricing.
  - Benefits: Increased sales, reduced overstock.
- **Fintech Industry Solutions**: Fraud detection, risk assessment [path: /industries/fintech].
  - Features: Real-time detection, compliance tools.
  - Benefits: Enhanced security, reduced costs.

**Work Page:**
- Showcases past projects and case studies [path: /work].

**Company Page:**
- **About Us**: Overview, Team, Customers, Careers, Contact [path: /company].
- **Mission**: Make AI practical, secure, and scalable for real-world impact.
- **Vision**: Be the world’s most trusted AI solutions partner.
- **Tech Stack**: AI, ML, Generative AI, Blockchain, Web3, Mobile, Cloud.
- **Founder**: Dr. Aniket Mhala, AI Thought Leader with 28+ years of IT leadership [path: /company].

**Blog Page:**
- Topics: Generative AI, AI Agents, Real-World Applications, AI in ERP, etc. [View All Articles](/blog).
- Recent Posts: "Demystifying Generative AI" (June 23, 2025), "Building Trust in AI" (June 28, 2025).

**Resources Page:**
- Guides and whitepapers on AI [path: /resources].

**Contact Page:**
- **Tagline**: Let’s build something amazing together.
- **Form Fields**: Interest, AI Journey Stage, First Name, Last Name, Work Email, Work Phone, Company, Project Description.
- **Why Choose Us**: Proven Expertise, Customized Solutions, Dedicated Support [path: /contact-us].

**Elevator Pitch**:  
At Anix AI, we build practical, secure, and scalable AI and GenAI solutions for BFSI, telecom, and education sectors. We deliver intelligent risk profilers, client query summarizers, and financial document analyzers—built specifically for BFSI and advisory firms. We've launched three MVPs, signed our first paid pilot, and are seeing strong early traction. We’re now scaling and open to strategic collaborations.

**User Query:**  
${message}

Provide a response based on the above content, adhering to the guidelines. Keep it concise, professional, and aligned with Anix AI’s brand.  
    `;

    const result = await model.generateContent(prompt);
    const reply = result.response.text();

    return NextResponse.json({ reply }, { status: 200 });
  } catch (error) {
    console.error("Error in chat:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
