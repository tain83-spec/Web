import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { MapPin, Monitor, ArrowRight, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sessions & Fees | Martin Alderton Counselling",
  description:
    "Individual therapy sessions in London (Harley Street), Norwich, and online. Information about fees, frequency, and what to expect.",
};

const locations = [
  {
    icon: MapPin,
    name: "Harley Street",
    address: "London, W1G",
    fee: "£120",
    per: "per 50-minute session",
    note: "In-person sessions available",
  },
  {
    icon: MapPin,
    name: "Norwich",
    address: "Norfolk, NR1",
    fee: "£90",
    per: "per 50-minute session",
    note: "In-person sessions available",
  },
  {
    icon: Monitor,
    name: "Online",
    address: "Anywhere in the UK",
    fee: "£90",
    per: "per 50-minute session",
    note: "Secure video platform",
  },
];

const faqs = [
  {
    q: "How often will we meet?",
    a: "Most people begin with weekly sessions, which provides consistency and momentum. Fortnightly sessions can work for some, and we can discuss what makes sense for you.",
  },
  {
    q: "How many sessions will I need?",
    a: "There is no set number. Some people come for a focused period of 12–20 sessions; others work with me for much longer. We&apos;ll review regularly and you&apos;re always free to stop.",
  },
  {
    q: "What happens in the first session?",
    a: "The first session is a chance for us to meet, for you to share what&apos;s bringing you and for me to get a sense of whether and how I can help. There&apos;s no pressure to commit after that.",
  },
  {
    q: "Is everything confidential?",
    a: "Yes. Everything discussed is confidential, with very limited exceptions required by law (such as risk of serious harm). I&apos;ll explain these at the start so there are no surprises.",
  },
  {
    q: "What is your cancellation policy?",
    a: "I ask for at least 48 hours&apos; notice to cancel or reschedule a session. Sessions cancelled with less notice will be charged in full.",
  },
];

export default function SessionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-[var(--accent)]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[var(--muted-foreground)]">
              Sessions
            </span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-light leading-tight max-w-3xl">
            What happens in sessions & what it costs
          </h1>
        </div>
      </section>

      {/* What to expect */}
      <section className="pb-20 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-6 text-[var(--muted-foreground)] leading-relaxed">
              <h2 className="font-serif text-3xl font-light text-[var(--foreground)]">What to expect</h2>
              <p>
                Sessions last 50 minutes and take place at the same time each week.
                This regularity matters — it creates the consistency and safety that allows
                real work to happen.
              </p>
              <p>
                There is no set agenda. We follow what feels alive and important in the moment,
                while also tracking longer patterns over time. You don&apos;t need to come
                knowing what to say — often the most important things emerge when you don&apos;t.
              </p>
              <p>
                I work relationally, which means I&apos;m not a blank screen. I&apos;m present,
                engaged, and willing to be affected. The relationship between us is itself part
                of the therapy.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 p-8 bg-[var(--muted)]">
                <Clock size={24} className="text-[var(--accent)] shrink-0" />
                <div>
                  <p className="font-medium">50-minute sessions</p>
                  <p className="text-sm text-[var(--muted-foreground)] mt-1">
                    Same time each week. Consistent, boundaried, reliable.
                  </p>
                </div>
              </div>
              <Image
                src="/ukcp-psa-logos.png"
                alt="UKCP and Professional Standards Authority accredited register logos"
                width={280}
                height={70}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fees */}
      <section className="py-20 px-6 bg-[var(--muted)]">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-3xl font-light mb-12">Locations & fees</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <div key={loc.name} className="bg-[var(--card)] border border-[var(--border)] p-8 flex flex-col gap-6">
                <div className="flex items-start gap-3">
                  <loc.icon size={18} className="mt-0.5 text-[var(--accent)]" />
                  <div>
                    <h3 className="font-serif text-xl font-medium">{loc.name}</h3>
                    <p className="text-sm text-[var(--muted-foreground)]">{loc.address}</p>
                  </div>
                </div>

                <div>
                  <p className="font-serif text-4xl font-light">{loc.fee}</p>
                  <p className="text-xs text-[var(--muted-foreground)] mt-1">{loc.per}</p>
                </div>

                <Badge variant="outline" className="w-fit">{loc.note}</Badge>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-[var(--muted-foreground)]">
            Payment is due at the time of the session. I accept bank transfer and card payments.
          </p>

          {/* Norwich practice photo */}
          <div className="mt-10">
            <div className="relative w-full aspect-[16/7] overflow-hidden">
              <Image
                src="/norwich-practice.jpg"
                alt="Norwich practice room — a calm, comfortable therapy space"
                fill
                className="object-cover object-center"
              />
            </div>
            <p className="mt-3 text-xs text-[var(--muted-foreground)]">Norwich practice room</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-light mb-8">Common questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.q} value={`faq-${i}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>
                  <span dangerouslySetInnerHTML={{ __html: faq.a }} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[var(--primary)]">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-light text-[var(--primary-foreground)] mb-4">
            Not sure if now&apos;s the right time?
          </h2>
          <p className="text-[var(--primary-foreground)]/70 mb-8">
            Get in touch for a no-obligation initial conversation and we can go from there.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="bg-[var(--accent)] hover:opacity-90 border-0">
              <a href="mailto:martin@martinalderton.co.uk">
                Email Martin <ArrowRight size={16} />
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary" className="border-[var(--primary-foreground)]/30 text-[var(--primary-foreground)] hover:bg-[var(--primary-foreground)]/10 hover:text-[var(--primary-foreground)]">
              <a href="tel:07799563910">07799 563 910</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
