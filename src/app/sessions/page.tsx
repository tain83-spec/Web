import Image from "next/image";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { MapPin, Monitor, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
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
  },
  {
    icon: MapPin,
    name: "Norwich",
    address: "Norfolk, NR1",
    fee: "£90",
    per: "per 50-minute session",
  },
  {
    icon: Monitor,
    name: "Online",
    address: "Anywhere in the UK",
    fee: "£90",
    per: "per 50-minute session",
  },
];

const faqs = [
  {
    q: "How often will we meet?",
    a: "Most people begin with weekly sessions, which provides consistency and momentum. Fortnightly sessions can work for some, and we can discuss what makes sense for you.",
  },
  {
    q: "How many sessions will I need?",
    a: "There is no set number. Some people come for a focused period of 12–20 sessions; others work with me for much longer. We'll review regularly and you're always free to stop.",
  },
  {
    q: "What happens in the first session?",
    a: "The first session is a chance for us to meet, for you to share what's bringing you and for me to get a sense of whether and how I can help. There's no pressure to commit after that.",
  },
  {
    q: "Is everything confidential?",
    a: "Yes. Everything discussed is confidential, with very limited exceptions required by law (such as risk of serious harm). I'll explain these at the start so there are no surprises.",
  },
  {
    q: "What is your cancellation policy?",
    a: "I ask for at least 48 hours' notice to cancel or reschedule a session. Sessions cancelled with less notice will be charged in full.",
  },
];

export default function SessionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 px-[clamp(1.5rem,5vw,5rem)]">
        <div className="mx-auto max-w-[1200px]">
          <p className="label mb-4">Sessions</p>
          <h1 className="font-display text-[var(--ink)] max-w-[700px]">
            What happens in sessions &amp; what it costs
          </h1>
        </div>
      </section>

      {/* What to expect */}
      <section className="pb-24 px-[clamp(1.5rem,5vw,5rem)]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-5 font-body text-[var(--mid)] leading-relaxed">
              <h2 className="font-display text-2xl font-bold text-[var(--ink)]">What to expect</h2>
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
              <div className="flex items-center gap-4 p-8 bg-[var(--surface)]">
                <Clock size={22} className="text-[var(--accent)] shrink-0" />
                <div>
                  <p className="font-body font-medium text-[var(--ink)]">50-minute sessions</p>
                  <p className="font-body text-sm text-[var(--mid)] mt-1">
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
      <section className="py-24 px-[clamp(1.5rem,5vw,5rem)] bg-[var(--surface)]">
        <div className="mx-auto max-w-[1200px]">
          <p className="label mb-4">Fees</p>
          <h2 className="font-display text-[var(--ink)] mb-12">Locations &amp; fees</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <div key={loc.name} className="bg-[var(--bg)] border border-[var(--rule)] p-8 flex flex-col gap-5">
                <div className="flex items-start gap-3">
                  <loc.icon size={17} className="mt-0.5 text-[var(--accent)] shrink-0" />
                  <div>
                    <h3 className="font-display text-xl font-bold text-[var(--ink)]">{loc.name}</h3>
                    <p className="font-body text-sm text-[var(--mid)]">{loc.address}</p>
                  </div>
                </div>
                <div>
                  <p className="font-display text-4xl font-bold text-[var(--ink)]">{loc.fee}</p>
                  <p className="font-body text-xs text-[var(--mid)] mt-1">{loc.per}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="font-body mt-6 text-sm text-[var(--mid)]">
            Payment is due at the time of the session. I accept bank transfer and card payments.
          </p>

          <div className="mt-12">
            <div className="relative w-full aspect-[16/7] overflow-hidden">
              <Image
                src="/norwich-practice.jpg"
                alt="Norwich practice room — a calm, comfortable therapy space"
                fill
                className="object-cover object-center"
              />
            </div>
            <p className="font-body mt-3 text-xs text-[var(--mid)]">Norwich practice room</p>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-32 px-[clamp(1.5rem,5vw,5rem)]">
        <div className="mx-auto max-w-[760px]">
          <p className="label mb-4">Common questions</p>
          <h2 className="font-display text-[var(--ink)] mb-10">Frequently asked</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.q} value={`faq-${i}`}>
                <AccordionTrigger>{faq.q}</AccordionTrigger>
                <AccordionContent>{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-[clamp(1.5rem,5vw,5rem)] bg-[var(--bg-dark)]">
        <div className="mx-auto max-w-[700px] text-center">
          <h2 className="font-display text-white mb-4">
            Not sure if now&apos;s the right time?
          </h2>
          <p className="font-body text-white/50 mb-10">
            Get in touch for a no-obligation initial conversation and we can go from there.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:martin@martinalderton.co.uk"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--accent)] text-white font-body text-[0.875rem] uppercase tracking-[0.06em] hover:brightness-90 transition-all duration-200 rounded-[4px]"
            >
              Email Martin <ArrowRight size={15} />
            </a>
            <a
              href="tel:07799563910"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white/70 font-body text-[0.875rem] uppercase tracking-[0.06em] hover:border-white hover:text-white transition-all duration-200 rounded-[4px]"
            >
              07799 563 910
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
