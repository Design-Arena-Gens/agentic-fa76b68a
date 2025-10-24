"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import services from "@/data/services";
import stylists from "@/data/stylists";
import testimonials from "@/data/testimonials";
import treatments from "@/data/treatments";
import { ChevronRight, Phone, Sparkles, Clock, MapPin } from "./svgs";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" }
  })
};

const galleryPhotos = [
  {
    src: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=600&q=80",
    alt: "Textured bob hairstyle with copper tones"
  },
  {
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80",
    alt: "Brunette hair with subtle balayage waves"
  },
  {
    src: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    alt: "Stylist applying hair treatment in salon"
  },
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80",
    alt: "Long blonde curls styled with volume"
  }
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-24 pb-24">
      <header className="relative flex h-[90vh] min-h-[640px] items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=2000&q=80"
            alt="Luxurious hair salon interior"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="section relative flex flex-col gap-10 text-white">
          <motion.div
            className="flex flex-col gap-6 md:max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <span className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.4em] text-brand-light">
              <Sparkles className="h-4 w-4" /> Luminous Locks Salon
            </span>
            <h1 className="font-display text-4xl leading-tight text-white md:text-6xl">
              Redefine your signature look with captivating color, precision
              cuts, and restorative care.
            </h1>
            <p className="text-lg text-stone-200 md:text-xl">
              We craft bespoke styles that celebrate your individuality, using
              premium botanical treatments and contemporary techniques to leave
              your hair luminous, healthy, and full of life.
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col items-start gap-4 sm:flex-row"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
          >
            <Link href="#booking" className="btn-primary">
              Reserve Your Experience
            </Link>
            <Link href="#services" className="btn-outline">
              Explore Services
            </Link>
          </motion.div>
          <motion.div
            className="glass-card mt-12 flex w-full max-w-3xl flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between"
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
          >
            <div className="flex items-center gap-4">
              <Clock className="h-10 w-10 text-brand-light" />
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-stone-200">
                  Salon Hours
                </p>
                <p className="text-lg font-semibold text-white">
                  Tue - Sat · 9:30 AM – 7:30 PM
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="h-10 w-10 text-brand-light" />
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-stone-200">
                  Concierge
                </p>
                <a
                  href="tel:+13105551234"
                  className="text-lg font-semibold text-white"
                >
                  (310) 555-1234
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="h-10 w-10 text-brand-light" />
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-stone-200">
                  Location
                </p>
                <p className="text-lg font-semibold text-white">
                  845 Ocean Ave, Santa Monica
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      <section id="services" className="section flex flex-col gap-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-3 md:max-w-xl">
            <h2 className="section-title">Signature Salon Experiences</h2>
            <p className="section-subtitle">
              Curated services designed to rejuvenate, protect, and celebrate
              every strand. Each experience begins with a personalized
              consultation and ends with a meticulous finish.
            </p>
          </div>
          <Link
            href="#booking"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.35em] text-brand hover:text-brand-dark"
          >
            View All Services <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.article
              key={service.slug}
              className="glass-card flex flex-col gap-4 p-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index * 0.3}
              variants={fadeUp}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl text-stone-900">
                  {service.title}
                </h3>
                <span className="rounded-full bg-brand-light px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-brand">
                  {service.category}
                </span>
              </div>
              <p className="text-stone-600">{service.description}</p>
              <ul className="flex flex-col gap-2 text-sm text-stone-500">
                {service.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-brand" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex items-center justify-between pt-4 text-sm text-stone-700">
                <span className="font-semibold">${service.price}</span>
                <span>{service.duration} mins</span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section flex flex-col gap-16 md:flex-row md:items-center">
        <motion.div
          className="relative h-[420px] w-full overflow-hidden rounded-3xl shadow-2xl md:w-1/2"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1400&q=80"
            alt="Color lounge at the salon"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
        <motion.div
          className="glass-card flex flex-col gap-6 p-8 md:w-1/2"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-sm uppercase tracking-[0.4em] text-brand-dark">
            Experience
          </span>
          <h2 className="font-display text-3xl text-stone-900">
            The Luminous Ritual
          </h2>
          <p className="text-stone-600">
            From atmospheric lighting to aromatherapy-infused treatments, every
            detail is curated to restore your hair&apos;s natural brilliance.
            Our color chemists, texture specialists, and finish stylists work in
            harmony to create results that transcend trends.
          </p>
          <ul className="grid gap-4 text-sm text-stone-500 md:grid-cols-2">
            {treatments.map((treatment) => (
              <li key={treatment.title} className="rounded-2xl bg-white/70 p-4">
                <p className="font-semibold text-stone-800">{treatment.title}</p>
                <p>{treatment.description}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      <section id="stylists" className="section flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <h2 className="section-title">Artists Behind The Chair</h2>
          <p className="section-subtitle">
            A collective of award-winning stylists, colorists, and extension
            experts with mastery in global trends and timeless design.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {stylists.map((stylist, idx) => (
            <motion.article
              key={stylist.name}
              className="glass-card overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <div className="relative h-72">
                <Image
                  src={stylist.photo}
                  alt={stylist.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-col gap-3 p-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-brand-dark">
                    {stylist.title}
                  </p>
                  <h3 className="font-display text-2xl text-stone-900">
                    {stylist.name}
                  </h3>
                </div>
                <p className="text-sm text-stone-600">{stylist.bio}</p>
                <ul className="text-xs uppercase tracking-[0.4em] text-brand">
                  {stylist.specialties.map((specialty) => (
                    <li key={specialty}>{specialty}</li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section grid gap-10 md:grid-cols-[1.5fr_1fr]">
        <motion.div
          className="glass-card flex flex-col gap-8 p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <h2 className="section-title">Luminous Voices</h2>
            <p className="section-subtitle">
              Real stories from guests who entrusted us with their transformations.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-3xl border border-white/50 bg-white/80 p-6 shadow-lg"
              >
                <p className="text-sm italic text-stone-600">
                  “{testimonial.quote}”
                </p>
                <div className="mt-4">
                  <p className="font-semibold text-stone-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
                    {testimonial.service}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.aside
          className="glass-card flex flex-col gap-6 p-6"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="font-display text-2xl text-stone-900">
            Insider Membership
          </h3>
          <p className="text-sm text-stone-600">
            Join the Luminous Collective to receive seasonal lookbooks, private
            event invitations, and member-only treatment upgrades.
          </p>
          <form className="flex flex-col gap-3">
            <input
              type="text"
              name="name"
              placeholder="Full name"
              className="rounded-full border border-stone-200 bg-white px-5 py-3 text-sm focus:border-brand focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="rounded-full border border-stone-200 bg-white px-5 py-3 text-sm focus:border-brand focus:outline-none"
              required
            />
            <button type="submit" className="btn-primary">
              Join the Collective
            </button>
          </form>
          <p className="text-xs text-stone-500">
            We honor your inbox. Expect only quarterly updates and bespoke
            invitations tailored to your preferences.
          </p>
        </motion.aside>
      </section>

      <section
        id="booking"
        className="section grid gap-10 md:grid-cols-[1.25fr_1fr]"
      >
        <motion.div
          className="glass-card flex flex-col gap-6 p-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-sm uppercase tracking-[0.4em] text-brand-dark">
            Reservations
          </span>
          <h2 className="section-title">Reserve Your Signature Session</h2>
          <p className="text-stone-600">
            Submit your preferences and our concierge team will confirm your
            appointment, match you with a specialist, and craft your pre-visit
            ritual guide within 24 hours.
          </p>
          <form className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="rounded-2xl border border-stone-200 bg-white px-5 py-3 text-sm focus:border-brand focus:outline-none"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="rounded-2xl border border-stone-200 bg-white px-5 py-3 text-sm focus:border-brand focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="rounded-2xl border border-stone-200 bg-white px-5 py-3 text-sm focus:border-brand focus:outline-none md:col-span-2"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="rounded-2xl border border-stone-200 bg-white px-5 py-3 text-sm focus:border-brand focus:outline-none"
              required
            />
            <select
              name="service"
              className="rounded-2xl border border-stone-200 bg-white px-5 py-3 text-sm text-stone-600 focus:border-brand focus:outline-none"
              required
            >
              <option value="">Preferred Service</option>
              {services.map((service) => (
                <option key={service.slug} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
            <input
              type="date"
              name="date"
              className="rounded-2xl border border-stone-200 bg-white px-5 py-3 text-sm text-stone-600 focus:border-brand focus:outline-none"
              required
            />
            <textarea
              name="notes"
              placeholder="Tell us about your hair goals..."
              className="md:col-span-2 rounded-2xl border border-stone-200 bg-white px-5 py-3 text-sm focus:border-brand focus:outline-none"
              rows={4}
            />
            <button type="submit" className="btn-primary md:col-span-2">
              Submit Reservation Request
            </button>
          </form>
          <p className="text-xs text-stone-500">
            By booking, you agree to our 24-hour cancellation courtesy policy.
          </p>
        </motion.div>

        <motion.div
          className="glass-card flex flex-col gap-4 p-8"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="font-display text-2xl text-stone-900">
            Visit the Atelier
          </h3>
          <p className="text-sm text-stone-600">
            Nestled in Santa Monica&apos;s ocean promenade, our atelier offers
            expansive city views, curated playlists, and a meticulously crafted
            service journey from arrival to styling reveal.
          </p>
          <iframe
            title="Salon location map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.1866050580738!2d-118.49828022362738!3d34.010729222146044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4d2f3f6e5fb%3A0x7a2d8590b47e8101!2sSanta%20Monica%20Pier!5e0!3m2!1sen!2sus!4v1714156812455!5m2!1sen!2sus"
            className="h-64 w-full rounded-2xl border-0"
            loading="lazy"
            allowFullScreen
          />
          <div className="grid gap-2 text-sm text-stone-600">
            <span className="font-semibold text-stone-800">Complimentary</span>
            <span>Valet parking for all guests</span>
            <span>Artisan espresso bar &amp; botanical refreshments</span>
            <span>Quiet treatment suites &amp; private styling rooms</span>
          </div>
        </motion.div>
      </section>

      <section className="section flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h2 className="section-title">Captured Moments</h2>
          <p className="section-subtitle">
            Follow @luminouslocks.salon on Instagram for daily transformations,
            seasonal palettes, and insider atelier stories.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {galleryPhotos.map((photo) => (
              <motion.div
                key={photo.alt}
                className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </motion.div>
            )
          )}
        </div>
      </section>

      <footer className="section glass-card flex flex-col gap-8 rounded-[48px] p-10 text-stone-700">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-brand-dark">
              Luminous Locks Salon
            </p>
            <h3 className="font-display text-3xl text-stone-900">
              Crafting brilliance since 2011
            </h3>
          </div>
          <Link href="#booking" className="btn-primary">
            Book Your Visit
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
              Atelier
            </p>
            <p>845 Ocean Ave Floor 6</p>
            <p>Santa Monica, CA 90401</p>
            <a href="mailto:concierge@luminouslocks.com" className="underline">
              concierge@luminouslocks.com
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
              Hours
            </p>
            <p>Tuesday – Saturday</p>
            <p>9:30 AM – 7:30 PM</p>
            <p>Sunday private bookings</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
              Follow
            </p>
            <a href="https://www.instagram.com" target="_blank">
              Instagram
            </a>
            <a href="https://www.tiktok.com" target="_blank">
              TikTok
            </a>
            <a href="https://www.pinterest.com" target="_blank">
              Pinterest
            </a>
          </div>
          <div className="flex flex-col gap-2 text-sm text-stone-500">
            <p>
              24-hour cancellation courtesy required. Pricing subject to change
              pending consultation.
            </p>
            <p>© {new Date().getFullYear()} Luminous Locks Salon. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
