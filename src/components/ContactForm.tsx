"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CheckCircle, Loader2 } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/placeholder", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center border border-[var(--border)] p-8">
        <CheckCircle size={32} className="text-[var(--accent)]" />
        <h3 className="font-serif text-2xl font-light">Message sent</h3>
        <p className="text-sm text-[var(--muted-foreground)] max-w-xs">
          Thank you for getting in touch. I&apos;ll come back to you within 48 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 text-xs underline underline-offset-4 text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            required
            disabled={status === "sending"}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            required
            disabled={status === "sending"}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="phone">Phone <span className="text-[var(--muted-foreground)] font-normal">(optional)</span></Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="07xxx xxx xxx"
          disabled={status === "sending"}
        />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me a little about what's bringing you — or just say hello."
          required
          disabled={status === "sending"}
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-500">
          Something went wrong. Please try again or email martin@martinalderton.co.uk directly.
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={status === "sending"}
        className="w-full sm:w-auto"
      >
        {status === "sending" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Sending…
          </>
        ) : (
          "Send message"
        )}
      </Button>

      <p className="text-xs text-[var(--muted-foreground)]">
        Everything is confidential. I aim to respond within 48 hours.
      </p>
    </form>
  );
}
