"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";

export default function InternshipPage() {
  const [formData, setFormData] = useState({
    name: "",
    duration: "",
    role: "",
    email: "",
    startDate: "",
    confirmationDeadline: "",
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (
    e: React.FormEvent,
    type: "offer" | "certificate"
  ) => {
    e.preventDefault();
    setStatus("Generating and sending...");

    try {
      const response = await axios.post("/api/internship", {
        ...formData,
        type,
      });
      setStatus(response.data.message);
    } catch (error) {
      setStatus("Error occurred. Please try again.");
    }
  };

  return (
    <section className="pt-5 sm:pt-20 pb-16 bg-background min-h-screen">
      <div className="container px-4 md:px-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-center">
            Internship Documents
          </h1>
          <p className="text-muted-foreground text-lg text-center mb-8">
            Generate and send offer letters or completion certificates.
          </p>
          <div className="space-y-6">
            <Input
              id="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              id="duration"
              placeholder="Duration (e.g., 3 months)"
              value={formData.duration}
              onChange={handleChange}
              required
            />
            <Input
              id="role"
              placeholder="Role (e.g., Software Intern)"
              value={formData.role}
              onChange={handleChange}
              required
            />
            <Input
              id="email"
              type="email"
              placeholder="Recipient Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              id="startDate"
              placeholder="Start Date (e.g., 1 July 2025)"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
            <Input
              id="confirmationDeadline"
              placeholder="Confirmation Deadline (e.g., 30 June 2025)"
              value={formData.confirmationDeadline}
              onChange={handleChange}
              required
            />

            <div className="inline-block md:flex gap-4 ">
              <Button
                onClick={(e) => handleSubmit(e, "offer")}
                className="flex-1 w-full max-sm:my-2"
              >
                Generate Offer Letter
              </Button>
              <Button
                onClick={(e) => handleSubmit(e, "certificate")}
                className="flex-1 w-full"
              >
                Generate Completion Certificate
              </Button>
            </div>
            {status && <p className="text-center">{status}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}
