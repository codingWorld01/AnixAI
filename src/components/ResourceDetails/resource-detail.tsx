"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Resource } from "@/data/resources";

interface ResourceDetailProps {
  resource: Resource;
}

export default function ResourceDetail({ resource }: ResourceDetailProps) {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subscribeNewsletter: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, subscribeNewsletter: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to an API endpoint
    // For now, we'll simulate a download by redirecting to the downloadUrl
    window.location.href = resource.downloadUrl;
  };

  return (
    <section className="pt-5 sm:pt-20 pb-16 bg-background min-h-screen">
      <div className="container px-4 md:px-8">
        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Side: Heading and Description */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {resource.title}
            </h1>
            <p className="text-lg text-foreground leading-relaxed">
              {resource.description}
            </p>
          </div>
          {/* Right Side: Image */}
          <div className="relative w-full h-64 md:h-96">
            <Image
              src={resource.imageSrc}
              alt={resource.alt}
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Topics Covered and Download Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-5 sm:mb-20">
          {/* Left Side: Topics Covered */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Topics Covered
            </h2>
            <ul className="space-y-4">
              {resource.topicsCovered.map((topic, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black mr-4 flex-shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-lg text-foreground">{topic}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Download Form */}
          <div className="p-8 border border-border bg-foreground rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-background mb-1">
              Download the Guide
            </h2>
            <p className="text-sm text-background mb-6">
              Please fill the form below to download this resource.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <Label htmlFor="name" className="text-background">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 border-border  text-background"
                  placeholder="Enter your name"
                />
              </div>

              {/* Work Email Field */}
              <div>
                <Label htmlFor="email" className="text-background">
                  Work Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="mt-1 border-border  text-background"
                  placeholder="Enter your work email"
                />
              </div>

              {/* Company Field */}
              <div>
                <Label htmlFor="company" className="text-background">
                  Company
                </Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="mt-1 border-border  text-background"
                  placeholder="Enter your company name"
                />
              </div>

              {/* Privacy Policy Agreement */}
              <div>
                <p className="text-xs text-background">
                  By submitting this form, I agree that my data will be
                  processed in accordance with{" "}
                  <Link href="/privacy-policy" className="font-bold underline">
                    AnixAI's privacy policy
                  </Link>
                  .
                </p>
                <div className="flex items-center mt-1">
                  {/* Subscribe Newsletter Checkbox */}
                  <Checkbox
                    id="subscribeNewsletter"
                    checked={formData.subscribeNewsletter}
                    onCheckedChange={handleCheckboxChange}
                    className="border-border"
                  />
                  <Label
                    htmlFor="subscribeNewsletter"
                    className="ml-2 text-sm text-background"
                  >
                    Subscribe to Newsletter
                  </Label>
                </div>
              </div>

              {/* Download Button */}
              <Button
                type="submit"
                className="w-full bg-gradient rounded-full text-white hover:opacity-90"
              >
                Download Now
              </Button>
            </form>
          </div>
        </div>

        {/* Back to Resources Page Button */}
        <div className="text-center">
          <Button
            asChild
            className="bg-gradient rounded-full text-white hover:opacity-90"
          >
            <Link href="/resources">Back to All Resources</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
