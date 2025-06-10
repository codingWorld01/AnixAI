
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
    
    
    const staticContext = `
      Anix AI is a next-generation AI solutions company founded to deliver practical, scalable, and secure AI products and platforms to industries worldwide. We specialize in GenAI, Agentic AI Architectures, and Custom Multi-Agent Systems for enterprises seeking real business transformation.

      **Our Mission**:  
      - Bring practical, secure, and scalable AI to every organization.  
      - Solve real-world problems with AI, not just hype.  
      - Empower advisors, analysts, and enterprises with the future of work.  
      - Make AI practical, ethical, and transformative across industries.

      **Our Vision**:  
      To be the world's most trusted AI solutions partner for enterprises building the future.

      **Our Founder**:  
      Dr. Aniket Mhala, an AI Thought Leader with 28+ years of IT leadership experience, leads Anix AI with a commitment to customer success, security, and innovation.

      **Key Value Propositions**:  
      - Practical AI for Immediate Impact: Solutions built to solve real-world business challenges.  
      - Industry-Specific Expertise: Tailored AI for BFSI, Telecom, Supply Chain, Universities, Consulting, and more.  
      - Trusted Innovation: Secure, ethical, and scalable AI and GenAI development services.

      **Services & Solutions**:  
      - AI Strategy Consulting: Defining AI vision, GenAI adoption, regulatory compliance, and transformation roadmaps (path: /services/ai-strategy-consulting).  
      - GenAI and Multi-Agent Development: Custom intelligent assistants, agent orchestration, and generative AI solution building (path: /services/genai-multi-agent-development).  
      - Industry-Specific AI Solutions: Tailored solutions for BFSI, Wealth, Telecom, Supply Chain, Universities, and Government (path: /services/industry-specific-ai-solutions).  
      - AI Integration Services: Integrating GenAI with CRM, ERP, Client Portals, Data Pipelines, and Support Systems (path: /services/ai-integration-services).  
      - AI Product Development: Full-cycle design, development, deployment, and optimization of custom AI platforms (path: /services/ai-product-development).

      **Industries Served**:  
      - BFSI: AI solutions for financial analytics, fraud detection, and risk profiling (path: /industries/bfsi).  
      - Wealth Management: Intelligent risk profilers, client query summarizers, and financial document analyzers (path: /industries/wealth-management).  
      - Telecom: AI for customer experience and operational efficiency (path: /industries/telecom).  
      - Supply Chain: AI for logistics and inventory management (path: /industries/supply-chain).  
      - Universities: AI solutions for education and administration (path: /industries/universities).  
      - Government: Tailored AI for public sector applications (path: /industries/government).

      **Other Pages on the Website**:  
      - Work: Showcasing past projects and case studies (path: /work).  
      - Company: Information about Anix AI's mission, vision, and team (path: /company).  
      - Blog: Articles on AI trends and insights (path: /blog).  
      - Resources: Guides and whitepapers on AI (path: /resources).  
      - Contact: Form to capture leads and inquiries (path: /contact-us).  
      - Login/Signup: For user account management (path: /login, /signup).


      **Elevator Pitch**:  
      At Anix AI, we build practical, secure, and scalable AI and GenAI solutions for wealth management, banking, and education sectors. We deliver intelligent risk profilers, client query summarizers, and financial document analyzers—built specifically for BFSI and advisory firms. We've launched three MVPs, signed our first paid pilot, and are seeing strong early traction. We’re now scaling and open to strategic collaborations.
    `;

    const prompt = `
      You are a professional chatbot for the Anix AI website, acting as a 24/7 salesperson to showcase our brand, explain our offerings, build trust, and capture leads. Use the following information about Anix AI to answer the user's query. If the query is unrelated to the website, respond with a helpful general answer or say you don't have that information.

      When mentioning a page on the website (like Work, Blog, or Services), include a clickable link in Markdown format using the path provided. For example, for the Work page, use [Visit our Work page](/work). Do not include the full URL, just the path starting with "/".

      When appropriate, highlight our key value propositions (Practical AI, Industry-Specific Expertise, Trusted Innovation) or mention our ready-to-demo MVPs (Intelligent Risk Profiler, Client Query Summarizer, Financial Document Analyzer) to showcase our capabilities. If the user asks about collaboration or partnerships, include a brief version of our elevator pitch and direct them to the [Contact page](/contact) for inquiries.

      Anix AI Information:  
      ${staticContext}

      User Query: ${message}

      Answer the query concisely and naturally, try to answer in short, as if you're a customer support agent for Anix AI. Focus on being professional, convincing, and helpful, aligning with our brand messaging: "Anix AI = Practical AI Partner for BFSI, Telecom, Education, Logistics, and Beyond."
    `;

    const result = await model.generateContent(prompt);
    const reply = result.response.text();

    return NextResponse.json({ reply }, { status: 200 });
  } catch (error) {
    console.error("Error in chat:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
