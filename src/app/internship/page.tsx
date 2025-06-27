"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function InternshipPage() {
  const [formData, setFormData] = useState<{
    name: string;
    durationValue: string;
    durationUnit: string;
    role: string;
    email: string;
    startDate: Date | null;
    confirmationDeadline: Date | null;
  }>({
    name: "",
    durationValue: "",
    durationUnit: "months",
    role: "",
    email: "",
    startDate: null,
    confirmationDeadline: null,
  });
  const [status, setStatus] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [activeTab, setActiveTab] = useState<"offer" | "certificate">("offer"); // Default to offer tab

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const handleDateChange = (id: string, date: Date | null) => {
    setFormData((prev) => ({ ...prev, [id]: date }));
    setErrors((prev) => ({ ...prev, [id]: "" }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.durationValue.trim())
      newErrors.durationValue = "Duration value is required";
    if (!formData.role.trim()) newErrors.role = "Role is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (activeTab === "offer") {
      if (!formData.startDate) newErrors.startDate = "Start date is required";
      if (!formData.confirmationDeadline)
        newErrors.confirmationDeadline = "Confirmation deadline is required";
    }
    return newErrors;
  };

  const handleSubmit = async (
    e: React.FormEvent,
    type: "offer" | "certificate"
  ) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setStatus("Please fix the errors above.");
      return;
    }

    setStatus("Generating and sending...");
    setErrors({});

    const formattedData = {
      ...formData,
      type,
      duration: `${formData.durationValue} ${formData.durationUnit}`,
      startDate: formData.startDate
        ? formData.startDate
            .toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })
            .split("/")
            .join("-")
        : null,
      confirmationDeadline: formData.confirmationDeadline
        ? formData.confirmationDeadline
            .toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })
            .split("/")
            .join("-")
        : null,
    };

    try {
      const response = await axios.post("/api/internship", formattedData);
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

          {/* Tabs */}
          <div className="flex justify-center mb-6">
            <button
              className={`px-4 py-2 font-semibold ${
                activeTab === "offer"
                  ? "bg-gray-200 text-black"
                  : "bg-secondary text-secondary-foreground"
              } rounded-l-md`}
              onClick={() => setActiveTab("offer")}
            >
              Offer Letter
            </button>
            <button
              className={`px-4 py-2 font-semibold ${
                activeTab === "certificate"
                  ? "bg-gray-200 text-black"
                  : "bg-secondary text-secondary-foreground"
              } rounded-r-md`}
              onClick={() => setActiveTab("certificate")}
            >
              Certificate
            </button>
          </div>

          <div className="space-y-6">
            <div>
              <Input
                id="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div className="flex gap-2">
              <Input
                id="durationValue"
                type="number"
                placeholder="Duration (e.g., 3)"
                value={formData.durationValue}
                onChange={handleChange}
                required
                min="1"
              />
              <select
                id="durationUnit"
                value={formData.durationUnit}
                onChange={handleChange}
                className="w-full bg-background text-foreground p-2 border rounded-md"
                required
              >
                <option value="days">Days</option>
                <option value="months">Months</option>
                <option value="years">Years</option>
              </select>
              {errors.durationValue && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.durationValue}
                </p>
              )}
            </div>
            <div>
              <Input
                id="role"
                placeholder="Role (e.g., Software Intern)"
                value={formData.role}
                onChange={handleChange}
                required
              />
              {errors.role && (
                <p className="text-red-500 text-sm mt-1">{errors.role}</p>
              )}
            </div>
            <div>
              <Input
                id="email"
                type="email"
                placeholder="Recipient Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            {activeTab === "offer" && (
              <div className="flex">
                <div className="mr-2 sm:mr-8">
                  <DatePicker
                    id="startDate"
                    selected={formData.startDate}
                    onChange={(date) => handleDateChange("startDate", date)}
                    placeholderText="Start Date"
                    dateFormat="dd MMMM yyyy"
                    className="bg-background text-foreground w-full p-2 border rounded-md"
                    required
                    autoComplete="off"
                  />
                  {errors.startDate && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.startDate}
                    </p>
                  )}
                </div>
                <div>
                  <DatePicker
                    id="confirmationDeadline"
                    selected={formData.confirmationDeadline}
                    onChange={(date) =>
                      handleDateChange("confirmationDeadline", date)
                    }
                    placeholderText="Confirmation Deadline"
                    dateFormat="dd MMMM yyyy"
                    className=" bg-background text-foreground w-full p-2 border rounded-md"
                    required
                    autoComplete="off"
                  />
                  {errors.confirmationDeadline && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.confirmationDeadline}
                    </p>
                  )}
                </div>
              </div>
            )}

            <div className="inline-block md:flex gap-4">
              <Button
                onClick={(e) => handleSubmit(e, "offer")}
                className="flex-1 w-full max-sm:my-2"
                disabled={activeTab === "certificate"}
              >
                Generate Offer Letter
              </Button>
              <Button
                onClick={(e) => handleSubmit(e, "certificate")}
                className="flex-1 w-full"
                disabled={activeTab === "offer"}
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
