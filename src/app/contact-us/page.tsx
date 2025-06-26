"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

interface ContactFormData {
  interest: string;
  aiJourneyStage: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

interface ValidationErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
}

export default function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<ContactFormData>({
    interest: "",
    aiJourneyStage: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { id, value } = e.target;
    setFormData((prev: ContactFormData) => ({
      ...prev,
      [id]: value,
    }));
    // Clear error for the field being edited
    setErrors((prev) => ({ ...prev, [id]: undefined }));
  };

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    // Validate firstName
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    } else if (!/^[A-Za-z]+$/.test(formData.firstName)) {
      newErrors.firstName = "First name should only contain letters.";
    }

    // Validate lastName
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    } else if (!/^[A-Za-z]+$/.test(formData.lastName)) {
      newErrors.lastName = "Last name should only contain letters.";
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = "Work email is required.";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Validate phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Work phone is required.";
    } else if (
      !/^\+?[1-9]\d{1,14}(?:\s*\(\d{3}\)\s*\d{3}-\d{4})?$/.test(formData.phone)
    ) {
      newErrors.phone =
        "Please enter a valid phone number (e.g., +1 (555) 123-4567 or +919876543210).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await axios.post("/api/send-email", formData);

      if (response.status === 200) {
        router.push("/success");
        setFormData({
          interest: "",
          aiJourneyStage: "",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message:
            response.data.error ||
            "Failed to send the message. Please try again.",
        });
      }
    } catch (error: any) {
      console.log(error);
      setStatus({
        type: "error",
        message:
          error.response?.data?.error ||
          "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="pt-10 sm:pt-20 pb-16 bg-background">
        <div className="container px-4 md:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Let's{" "}
              <span className="text-gradient">build something amazing</span>{" "}
              together
            </h1>
            <p className="text-muted-foreground text-lg">
              Get in touch with our experts to discuss how anixai can help
              transform your business with innovative Generative AI solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <Card className="border-border/40 bg-foreground overflow-hidden">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-black">
                    Send us a message
                  </h2>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* What are you interested in? */}
                    <div className="space-y-2">
                      <label
                        htmlFor="interest"
                        className="text-sm font-medium text-black"
                      >
                        What are you interested in?*
                      </label>
                      <select
                        id="interest"
                        className="w-full p-3 rounded-md bg-background/10 text-background border border-border/60 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-700"
                        value={formData.interest}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        <option value="consult-requirements">
                          I need to consult on my requirements
                        </option>
                        <option value="build-poc">
                          I am interested to build a POC and need more
                          information
                        </option>
                        <option value="discovery-phase">
                          I am interested to start with the discovery phase
                        </option>
                      </select>
                    </div>

                    {/* What stage are you in your AI journey? */}
                    <div className="space-y-2">
                      <label
                        htmlFor="aiJourneyStage"
                        className="text-sm font-medium text-black"
                      >
                        What stage are you in your AI journey?*
                      </label>
                      <select
                        id="aiJourneyStage"
                        className="w-full p-3 rounded-md bg-background/10 text-background border border-border/60 focus:outline-none focus:ring-2 focus:ring-blue-500 max-w-full placeholder-gray-700"
                        value={formData.aiJourneyStage}
                        onChange={handleChange}
                        required
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        <option value="early-exploratory">
                          Early exploratory phase. Need an AI partner to guide
                          us.
                        </option>
                        <option value="fair-understanding">
                          Fair understanding of goals. Need to start AI
                          discovery phase.
                        </option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="firstName"
                          className="text-sm font-medium text-black"
                        >
                          First Name*
                        </label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          className="bg-background/10 text-background border-border/60 placeholder-gray-700"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                        {errors.firstName && (
                          <p className="text-sm text-red-600">
                            {errors.firstName}
                          </p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="lastName"
                          className="text-sm font-medium text-black"
                        >
                          Last Name*
                        </label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          className="bg-background/10 text-background border-border/60 placeholder-gray-700"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                        {errors.lastName && (
                          <p className="text-sm text-red-600">
                            {errors.lastName}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-black"
                      >
                        Work Email*
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john.doe@example.com"
                        className="bg-background/10 text-background border-border/60 placeholder-gray-700"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      {errors.email && (
                        <p className="text-sm text-red-600">{errors.email}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-sm font-medium text-black"
                      >
                        Work Phone*
                      </label>
                      <Input
                        id="phone"
                        placeholder="+1 (555) 123-4567"
                        className="bg-background/10 text-background border-border/60 placeholder-gray-700"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                      {errors.phone && (
                        <p className="text-sm text-red-600">{errors.phone}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="company"
                        className="text-sm font-medium text-black"
                      >
                        Company*
                      </label>
                      <Input
                        id="company"
                        placeholder="Acme Inc."
                        className="bg-background/10 text-background border-border/60 placeholder-gray-700"
                        value={formData.company}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-black"
                      >
                        Briefly describe your project—goals, challenges, and
                        requirements, to help us assist you more effectively
                        during our initial call*
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project or inquiry..."
                        className="min-h-[120px] bg-background/10 text-background border-border/60 placeholder-gray-700"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient rounded-full text-white hover:opacity-90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>

                    {status && status.type === "error" && (
                      <div className="text-sm text-center text-red-600">
                        {status.message}
                      </div>
                    )}
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Our Offices</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Card className="border-border/40 bg-card/60">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">
                        San Francisco, USA
                      </h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        100 Pine Street, Suite 1250
                        <br />
                        San Francisco, CA 94111
                      </p>
                      <p className="text-sm text-anixai-blue">
                        +1 (415) 555-1234
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="border-border/40 bg-card/60">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-2">London, UK</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        5 Merchant Square
                        <br />
                        London, W2 1AY
                      </p>
                      <p className="text-sm text-anixai-blue">
                        +44 20 1234 5678
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
                <div className="grid grid-cols-1 gap-6">
                  <Card className="border-border/40 bg-card/60">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="p-2 rounded-full bg-anixai-blue/10 text-anixai-blue mr-3">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold">
                            Phone Support
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Monday - Friday, 9am - 6pm EST
                          </p>
                        </div>
                      </div>
                      <p className="text-anixai-blue font-medium">
                        +1 (800) 555-9876
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-border/40 bg-card/60">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="p-2 rounded-full bg-anixai-blue/10 text-anixai-blue mr-3">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                          </svg>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold">Email Us</h3>
                          <p className="text-sm text-muted-foreground">
                            We'll respond within 24 hours
                          </p>
                        </div>
                      </div>
                      <p className="text-anixai-blue font-medium">
                        info@anixai.io
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <Card className="border-border/40 bg-card/60 overflow-hidden">
                  <CardContent>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086237921143!2d-122.399149684681!3d37.792479679758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808f5d6b3b7f%3A0x4e6e6b8c8d8f8a3e!2s100%20Pine%20St%20%231250%2C%20San%20Francisco%2C%20CA%2094111%2C%20USA!5e0!3m2!1sen!2sin!4v1697654321!5m2!1sen!2sin"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Expertise */}
              <Card className="border-border/40 bg-card/60">
                <CardContent className="p-6 text-center">
                  <div className="p-3 rounded-full bg-anixai-blue/10 text-anixai-blue mx-auto w-12 h-12 flex items-center justify-center mb-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2a10 10 0 1 1-10 10A10 10 0 0 1 12 2m0 0a10 10 0 1 1 10 10A10 10 0 0 1 12 2" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Proven Expertise
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    With years of experience in AI solutions, we deliver
                    innovative and reliable results tailored to your needs.
                  </p>
                </CardContent>
              </Card>

              {/* Card 2: Customized Solutions */}
              <Card className="border-border/40 bg-card/60">
                <CardContent className="p-6 text-center">
                  <div className="p-3 rounded-full bg-anixai-blue/10 text-anixai-blue mx-auto w-12 h-12 flex items-center justify-center mb-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Customized Solutions
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We understand your unique challenges and provide bespoke AI
                    strategies to drive your business forward.
                  </p>
                </CardContent>
              </Card>

              {/* Card 3: Dedicated Support */}
              <Card className="border-border/40 bg-card/60">
                <CardContent className="p-6 text-center">
                  <div className="p-3 rounded-full bg-anixai-blue/10 text-anixai-blue mx-auto w-12 h-12 flex items-center justify-center mb-4">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Dedicated Support
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Our team is here to support you every step of the way,
                    ensuring a seamless and successful partnership.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
