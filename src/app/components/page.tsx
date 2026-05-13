import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { TestimonialCard } from "@/components/TestimonialCard";
import { StatBlock } from "@/components/StatBlock";
import { FeatureCard } from "@/components/FeatureCard";
import { QuoteBlock } from "@/components/QuoteBlock";
import { ContactForm } from "@/components/ContactForm";
import { Heart, Shield, Zap, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Component Library | Martin Alderton",
  description: "UI component showcase — all reusable components used across the site.",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="py-12 border-b border-[var(--border)] last:border-0">
      <div className="mb-8">
        <h2 className="font-serif text-2xl font-medium">{title}</h2>
        <div className="mt-1 h-px w-12 bg-[var(--accent)]" />
      </div>
      {children}
    </section>
  );
}

function Demo({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted-foreground)]">{label}</p>
      <div className="p-6 border border-dashed border-[var(--border)]">
        {children}
      </div>
    </div>
  );
}

export default function ComponentsPage() {
  return (
    <>
      {/* Header */}
      <div className="pt-32 pb-12 px-6 bg-[var(--primary)]">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-[var(--accent)]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--primary-foreground)]/50">
              Developer
            </span>
          </div>
          <h1 className="font-serif text-5xl font-light text-[var(--primary-foreground)] mb-3">
            Component Library
          </h1>
          <p className="text-[var(--primary-foreground)]/60 max-w-xl">
            All reusable UI components built for this site. Copy, compose, extend.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Buttons", "Badges", "Cards", "Forms", "Accordion", "Testimonials", "Stats", "Feature Cards", "Quote Blocks", "CTA"].map(
              (t) => (
                <Badge key={t} variant="outline" className="border-[var(--primary-foreground)]/20 text-[var(--primary-foreground)]/60">
                  {t}
                </Badge>
              )
            )}
          </div>
        </div>
      </div>

      {/* Components */}
      <div className="mx-auto max-w-6xl px-6 pb-24">

        {/* Buttons */}
        <Section title="Button">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Demo label="Variants">
              <div className="flex flex-wrap gap-3">
                <Button variant="default">Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="dark">Dark</Button>
                <Button variant="link">Link</Button>
              </div>
            </Demo>
            <Demo label="Sizes">
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
              </div>
            </Demo>
            <Demo label="Disabled state">
              <div className="flex flex-wrap gap-3">
                <Button disabled>Disabled</Button>
                <Button variant="secondary" disabled>Disabled</Button>
              </div>
            </Demo>
          </div>
        </Section>

        {/* Badges */}
        <Section title="Badge">
          <Demo label="Variants">
            <div className="flex flex-wrap gap-3">
              <Badge variant="default">Default</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="accent">Accent</Badge>
            </div>
          </Demo>
        </Section>

        {/* Cards */}
        <Section title="Card">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Demo label="Default">
              <Card>
                <CardHeader>
                  <CardTitle>Card title</CardTitle>
                  <CardDescription>A short description of the card content.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[var(--muted-foreground)]">Body content goes here.</p>
                </CardContent>
                <CardFooter>
                  <Button size="sm">Action</Button>
                </CardFooter>
              </Card>
            </Demo>
            <Demo label="Muted">
              <Card variant="muted">
                <CardHeader>
                  <CardTitle>Muted card</CardTitle>
                  <CardDescription>Subtle background for softer sections.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[var(--muted-foreground)]">Body content here.</p>
                </CardContent>
              </Card>
            </Demo>
            <Demo label="Ghost">
              <Card variant="ghost">
                <CardHeader>
                  <CardTitle>Ghost card</CardTitle>
                  <CardDescription>Dashed border, no background fill.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-[var(--muted-foreground)]">Use for secondary content.</p>
                </CardContent>
              </Card>
            </Demo>
          </div>
        </Section>

        {/* Forms */}
        <Section title="Form Inputs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Demo label="Input">
              <div className="flex flex-col gap-2">
                <Label htmlFor="demo-input">Label</Label>
                <Input id="demo-input" placeholder="Placeholder text…" />
              </div>
            </Demo>
            <Demo label="Input — error state">
              <div className="flex flex-col gap-2">
                <Label htmlFor="demo-err">Email</Label>
                <Input id="demo-err" type="email" defaultValue="bad-email" error="Please enter a valid email." />
                <p className="text-xs text-red-500">Please enter a valid email.</p>
              </div>
            </Demo>
            <Demo label="Textarea">
              <div className="flex flex-col gap-2">
                <Label htmlFor="demo-ta">Message</Label>
                <Textarea id="demo-ta" placeholder="Type something…" />
              </div>
            </Demo>
          </div>
        </Section>

        {/* Separator */}
        <Section title="Separator">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Demo label="Horizontal">
              <div className="flex flex-col gap-3">
                <p className="text-sm">Above</p>
                <Separator />
                <p className="text-sm">Below</p>
              </div>
            </Demo>
            <Demo label="Vertical">
              <div className="flex items-center gap-4 h-8">
                <p className="text-sm">Left</p>
                <Separator orientation="vertical" />
                <p className="text-sm">Right</p>
              </div>
            </Demo>
          </div>
        </Section>

        {/* Accordion */}
        <Section title="Accordion">
          <Demo label="FAQ style">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="q1">
                <AccordionTrigger>How often will we meet?</AccordionTrigger>
                <AccordionContent>
                  Most people begin with weekly sessions, which provides consistency and momentum.
                  Fortnightly sessions can work for some, and we can discuss what makes sense for you.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q2">
                <AccordionTrigger>How many sessions will I need?</AccordionTrigger>
                <AccordionContent>
                  There is no set number. Some people come for a focused period of 12–20 sessions;
                  others work with me for much longer. We&apos;ll review regularly.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="q3">
                <AccordionTrigger>Is everything confidential?</AccordionTrigger>
                <AccordionContent>
                  Yes. Everything discussed is confidential, with very limited exceptions required by law.
                  I&apos;ll explain these at the start so there are no surprises.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </Demo>
        </Section>

        {/* Testimonials */}
        <Section title="Testimonial Card">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Demo label="Default">
              <TestimonialCard
                quote="Working with Martin helped me understand why I kept ending up in the same situation."
                attribution="Client, London"
              />
            </Demo>
            <Demo label="Dark">
              <TestimonialCard
                quote="I came not knowing what I needed. I left knowing myself much better."
                attribution="Client, Norwich"
                variant="dark"
              />
            </Demo>
            <Demo label="Accent (muted)">
              <TestimonialCard
                quote="The relationship in the room itself was where the change happened."
                attribution="Client, Online"
                variant="accent"
              />
            </Demo>
          </div>
        </Section>

        {/* Stats */}
        <Section title="Stat Block">
          <Demo label="Three stats">
            <StatBlock
              stats={[
                { value: "20+", label: "Years experience", note: "Residential mental health & addiction" },
                { value: "3", label: "Locations", note: "London, Norwich & online" },
                { value: "50min", label: "Sessions", note: "Same time each week" },
              ]}
            />
          </Demo>
        </Section>

        {/* Feature Cards */}
        <Section title="Feature Card">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Demo label="With icon + link">
              <FeatureCard
                title="Anxiety"
                description="Overwhelm, worry, panic. Learning to regulate and find solid ground."
                href="/anxiety"
                icon={Zap}
                tag="Specialism"
              />
            </Demo>
            <Demo label="With icon, no link">
              <FeatureCard
                title="Confidential"
                description="Everything discussed stays between us, with limited legal exceptions."
                icon={Shield}
              />
            </Demo>
            <Demo label="No icon">
              <FeatureCard
                title="Relationships"
                description="Patterns that keep repeating. Understanding what you bring — and why."
                href="/relationships"
              />
            </Demo>
          </div>
        </Section>

        {/* Quote Block */}
        <Section title="Quote Block">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Demo label="Small">
              <QuoteBlock
                quote="The most important things emerge when you don't know what to say."
                size="sm"
              />
            </Demo>
            <Demo label="Medium (default)">
              <QuoteBlock
                quote="A person is a social, embodied, meaning-making system."
                attribution="Martin Alderton"
                size="md"
              />
            </Demo>
            <Demo label="Large">
              <QuoteBlock
                quote="Genuine change through relationship."
                size="lg"
              />
            </Demo>
          </div>
        </Section>

        {/* Contact Form */}
        <Section title="Contact Form">
          <Demo label="Full form">
            <ContactForm />
          </Demo>
        </Section>

        {/* Location Card pattern */}
        <Section title="Location Card">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { name: "Harley Street", address: "London, W1G", fee: "£120", note: "In-person" },
              { name: "Norwich", address: "Norfolk, NR1", fee: "£90", note: "In-person" },
              { name: "Online", address: "Anywhere in the UK", fee: "£90", note: "Video" },
            ].map((loc) => (
              <Demo key={loc.name} label={loc.name}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-[var(--accent)]" />
                      <CardTitle className="text-lg">{loc.name}</CardTitle>
                    </div>
                    <CardDescription>{loc.address}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="font-serif text-3xl font-light">{loc.fee}</p>
                    <p className="text-xs text-[var(--muted-foreground)] mt-1">per 50-min session</p>
                  </CardContent>
                  <CardFooter>
                    <Badge variant="outline">{loc.note}</Badge>
                  </CardFooter>
                </Card>
              </Demo>
            ))}
          </div>
        </Section>

      </div>
    </>
  );
}
