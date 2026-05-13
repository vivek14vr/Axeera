"use client";

import { type FormEvent, useState } from "react";

import { contactFormContent, contactServiceOptions } from "@/lib/constants/contact";
import { siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils/cn";

const fieldClassName =
  "glass-surface w-full rounded-2xl border border-surface-border px-4 py-3 text-sm text-foreground placeholder:text-muted/70 transition duration-300 focus:border-accent/35 focus:outline-none";

type ContactFormProps = {
  className?: string;
};

export function ContactForm({ className }: ContactFormProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  function toggleService(service: string) {
    setSelectedServices((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service],
    );
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const company = String(formData.get("company") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const message = String(formData.get("message") ?? "");
    const services =
      selectedServices.length > 0 ? selectedServices.join(", ") : "Not specified";

    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        company ? `Company: ${company}` : null,
        phone ? `Phone: ${phone}` : null,
        `Services: ${services}`,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-7", className)}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-foreground">
            Full name <span className="text-accent">*</span>
          </span>
          <input
            required
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Enter your full name"
            className={fieldClassName}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-foreground">
            Email address <span className="text-accent">*</span>
          </span>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Enter your email address"
            className={fieldClassName}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-foreground">Company name</span>
          <input
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Enter your company name"
            className={fieldClassName}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-foreground">Phone number</span>
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Enter your phone number"
            className={fieldClassName}
          />
        </label>
      </div>

      <div className="space-y-4">
        <p className="text-sm font-medium text-foreground">Service of interest</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {contactServiceOptions.map((service, index) => {
            const isSelected = selectedServices.includes(service);
            const isLastOddItem =
              contactServiceOptions.length % 2 !== 0 &&
              index === contactServiceOptions.length - 1;

            return (
              <label
                key={service}
                className={cn(
                  "glass-surface flex min-h-[3.5rem] cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 text-sm leading-6 text-foreground transition duration-300",
                  isLastOddItem && "sm:col-span-2",
                  isSelected
                    ? "border-accent/35 bg-accent/8"
                    : "border-surface-border hover:border-accent/20",
                )}
              >
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => toggleService(service)}
                  className="h-4 w-4 shrink-0 rounded border-surface-border text-accent focus:ring-accent/30"
                />
                <span className="min-w-0 flex-1">{service}</span>
              </label>
            );
          })}
        </div>
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium text-foreground">
          Message <span className="text-accent">*</span>
        </span>
        <textarea
          required
          name="message"
          rows={6}
          placeholder="Tell us about your project and goals..."
          className={cn(fieldClassName, "resize-y")}
        />
      </label>

      <button
        type="submit"
        className="interactive-button liquid-glass-accent w-full rounded-full px-5 py-3 text-sm font-semibold shadow-accent sm:w-auto"
      >
        {contactFormContent.submitLabel}
      </button>
    </form>
  );
}
