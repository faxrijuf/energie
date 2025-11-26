import { motion } from 'framer-motion';
import {
  Activity,
  ArrowRight,
  Droplets,
  Dumbbell,
  Gauge,
  Leaf,
  Shield,
  Sparkles,
  Timer,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const featureItems: Array<{ title: string; description: string; icon: LucideIcon }> = [
  {
    title: 'Regenerative Training',
    description: 'Infrared-enhanced sessions that balance effort with recovery to keep you performing at your peak.',
    icon: Leaf,
  },
  {
    title: 'Precision Coaching',
    description: 'Elite trainers craft bespoke programs with real-time feedback and motion-led corrections.',
    icon: Gauge,
  },
  {
    title: 'Elemental Recovery',
    description: 'Contrast therapy, cold immersion, and guided breathwork curated to reset your nervous system.',
    icon: Droplets,
  },
];

const programItems: Array<{ title: string; focus: string; description: string; icon: LucideIcon }> = [
  {
    title: 'Infrared Strength',
    focus: 'Power & longevity',
    description: 'Strength circuits paired with heat therapy to unlock power without sacrificing mobility.',
    icon: Dumbbell,
  },
  {
    title: 'Metabolic Flow',
    focus: 'Energy & clarity',
    description: 'Low-impact conditioning, rhythmic breath, and light exposure to recalibrate your metabolism.',
    icon: Activity,
  },
  {
    title: 'Night Reset',
    focus: 'Sleep & recovery',
    description: 'Parasympathetic-focused work, somatic release, and guided decompression for deep recovery.',
    icon: Timer,
  },
];

const statItems = [
  { label: 'Studios', value: '3', accent: 'NYC / LA / ATX' },
  { label: 'Session cap', value: '12', accent: 'Guests per experience' },
  { label: 'Recovery tech', value: '11', accent: 'Infrared, cryo, oxygen' },
  { label: 'Coaches', value: '20+', accent: 'Performance specialists' },
];

function FeatureCard({ icon: Icon, title, description }: (typeof featureItems)[number]) {
  return (
    <motion.div
      className="card-highlight"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-brand-red">
        <Icon size={22} />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/70">{description}</p>
    </motion.div>
  );
}

function ProgramCard({ icon: Icon, title, focus, description }: (typeof programItems)[number]) {
  return (
    <div className="card-highlight flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-red/15 text-brand-red">
          <Icon size={22} />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/60">{focus}</p>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-white/70">{description}</p>
      <button className="button-secondary w-fit">
        Explore session
        <ArrowRight size={18} />
      </button>
    </div>
  );
}

function StatGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {statItems.map((stat) => (
        <div key={stat.label} className="card-highlight">
          <p className="text-xs uppercase tracking-[0.25em] text-white/50">{stat.label}</p>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-semibold text-white">{stat.value}</span>
            <span className="text-xs text-white/60">{stat.accent}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-6 py-16 shadow-2xl shadow-black/40">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/326502/pexels-photo-326502.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Low light training studio"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/70" />
      </div>
      <div className="relative grid gap-10 lg:grid-cols-2">
        <div className="max-w-xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 text-xs uppercase tracking-[0.25em] text-white/70">
            <span className="h-2 w-2 rounded-full bg-brand-red" />
            Human energy lab
          </div>
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">Énergie Studio</p>
            <h1 className="font-hero text-4xl leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Build power, restore calm, repeat.
            </h1>
            <p className="text-lg text-white/70 sm:text-xl">
              A performance studio merging intelligent training, elemental recovery, and sensory design.
              Small-group sessions capped at twelve humans, guided by specialist coaches.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a className="button-primary" href="#programs">
              Book a session
              <ArrowRight size={18} />
            </a>
            <a className="button-secondary" href="#features">
              View experience
            </a>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <Shield size={18} className="text-brand-red" />
              Certified recovery tech
            </div>
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-brand-red" />
              Sensory lighting design
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="grid-overlay absolute inset-4 rounded-3xl" />
          <div className="relative grid gap-4 sm:grid-cols-2">
            <motion.div
              className="card-highlight"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs uppercase tracking-[0.25em] text-white/60">Today</p>
              <h3 className="mt-3 text-xl font-semibold text-white">Infrared Strength</h3>
              <p className="mt-2 text-sm text-white/70">Heat-assisted strength with mobility pairing</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-white/60">
                <Droplets size={18} className="text-brand-red" />
                Hydration lounge ready
              </div>
            </motion.div>
            <motion.div
              className="card-highlight"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-xs uppercase tracking-[0.25em] text-white/60">Later</p>
              <h3 className="mt-3 text-xl font-semibold text-white">Night Reset</h3>
              <p className="mt-2 text-sm text-white/70">Guided decompression with cold exposure</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-white/60">
                <Timer size={18} className="text-brand-red" />
                45 minute immersion
              </div>
            </motion.div>
            <motion.div
              className="card-highlight sm:col-span-2"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 text-sm text-white/70">
                <Sparkles size={18} className="text-brand-red" />
                Elevated air quality, circadian lighting, curated sound.
              </div>
              <p className="mt-3 text-lg font-semibold text-white">Reset your system, not just your muscles.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="relative isolate px-4 pb-16 pt-6 sm:px-6 lg:px-10">
      <div className="pointer-events-none absolute inset-0 opacity-60" aria-hidden="true">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-brand-red/20 blur-3xl" />
        <div className="absolute bottom-20 right-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl items-center justify-between pb-10">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-brand-red">
            <Sparkles size={22} />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Énergie Studio</p>
            <p className="text-lg font-semibold text-white">Performance Club</p>
          </div>
        </div>
        <div className="hidden items-center gap-4 text-sm text-white/70 sm:flex">
          <a href="#features" className="hover:text-white">Experience</a>
          <a href="#programs" className="hover:text-white">Programs</a>
          <a href="#contact" className="hover:text-white">Studios</a>
          <a className="button-secondary" href="#contact">
            Become a member
          </a>
        </div>
      </div>

      <main className="relative space-y-16">
        <Hero />

        <section id="features" className="space-y-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">What we offer</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Engineered for modern energy</h2>
            </div>
            <a className="button-secondary" href="#contact">
              Tour the studio
              <ArrowRight size={18} />
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featureItems.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </section>

        <section id="programs" className="space-y-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Programming</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Sessions that stack</h2>
            </div>
            <div className="flex items-center gap-3 text-sm text-white/70">
              <Shield size={18} className="text-brand-red" />
              Small-group formats, capped at 12.
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {programItems.map((program) => (
              <ProgramCard key={program.title} {...program} />
            ))}
          </div>
        </section>

        <section id="stats" className="space-y-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Studios</p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">Designed to feel alive</h2>
            </div>
            <a className="button-primary" href="#contact">
              Book a visit
              <ArrowRight size={18} />
            </a>
          </div>
          <StatGrid />
        </section>

        <section id="contact" className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-white/10 via-white/5 to-white/10 p-10 shadow-2xl shadow-black/40">
          <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">Membership</p>
              <h3 className="text-3xl font-semibold text-white sm:text-4xl">Join the Energie collective</h3>
              <p className="text-lg text-white/70">
                Choose a studio, book your first experience, and unlock regenerative training matched to your schedule.
                Our concierge team will pair you with a coach and session stack.
              </p>
              <div className="flex flex-wrap gap-3">
                <a className="button-primary" href="mailto:hello@energiestudio.com">
                  Speak with concierge
                  <ArrowRight size={18} />
                </a>
                <a className="button-secondary" href="#features">
                  Preview the flow
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {["New York", "Los Angeles", "Austin", "Remote"]
                .map((city, index) => (
                  <div key={city} className="card-highlight flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-white/60">Studio</p>
                      <p className="text-lg font-semibold text-white">{city}</p>
                      <p className="text-sm text-white/60">Limited founding memberships</p>
                    </div>
                    <span className="text-xs uppercase text-brand-red">{index < 3 ? 'Open' : 'Digital'}</span>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="relative mx-auto mt-12 flex max-w-6xl flex-col gap-4 border-t border-white/10 py-8 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-white">
          <Sparkles size={18} className="text-brand-red" />
          Énergie Studio
        </div>
        <div className="flex flex-wrap gap-4">
          <a href="#features" className="hover:text-white">
            Experiences
          </a>
          <a href="#programs" className="hover:text-white">
            Programming
          </a>
          <a href="mailto:hello@energiestudio.com" className="hover:text-white">
            Contact
          </a>
          <a href="#" className="hover:text-white">
            Privacy
          </a>
        </div>
        <p>Built for humans who move with intention.</p>
      </footer>
    </div>
  );
}
