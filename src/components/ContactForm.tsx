"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import type { FormData as ContactFormLabels } from "@/types/translations";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

const inputClass =
  "w-full px-4 py-2 rounded-md bg-surface-card text-text-primary border border-brand-soft focus:outline-none focus:ring-1 focus:ring-brand-from";

type Props = {
  labels: ContactFormLabels;
};

export default function ContactForm({ labels }: Props) {
  const [formData, setFormData] = useState<FormState>(initialState);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { firstName, lastName, email, phone, message } = formData;

    if (!firstName || !lastName || !email || !phone || !message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    const phoneRegex = /^[0-9+\-()\s]{6,20}$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Please enter a valid phone number.");
      return;
    }

    toast.success("Message sent successfully!");
    setFormData(initialState);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-text-primary mb-1"
          >
            {labels.firstName}*
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-text-primary mb-1"
          >
            {labels.lastName}*
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-text-primary mb-1"
          >
            {labels.email}*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-text-primary mb-1"
          >
            {labels.phone}*
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>

        <div className="md:col-span-2">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-text-primary mb-1"
          >
            {labels.message}*
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className={inputClass}
          />
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full py-2 rounded-md bg-brand-gradient-soft text-text-primary font-semibold hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            {labels.sendButton}
          </button>
        </div>
      </form>

      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
