'use client'

import { useContactModal } from '@/context/contact-modal'

export default function About() {
  const { open } = useContactModal()

  return (
    <main className="pt-32">
      {/* Hero */}
      <section className="px-8 mb-32 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row items-end gap-8 border-l border-outline-variant/15 pl-8 md:pl-16">
          <h1 className="font-headline text-6xl md:text-9xl font-bold tracking-tighter leading-none uppercase">
            PRECISION<br /><span className="text-primary italic">KINETICISM.</span>
          </h1>
          <div className="max-w-md pb-4">
            <p className="font-body text-xl text-on-surface-variant leading-relaxed">
              We built ScheduFit because high-performance training shouldn&apos;t be held back by low-performance administration.
            </p>
          </div>
        </div>
      </section>

      {/* Admin Burden */}
      <section className="mb-40 px-8 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 aspect-video bg-surface-container relative overflow-hidden rounded-xl">
            <div className="absolute inset-0 kinetic-gradient opacity-10" />
            <img
              className="w-full h-full object-cover mix-blend-luminosity opacity-40"
              alt="Modern high-end performance training facility interior"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOau9rNHSBNkgMqoTbrkvoIuBVv2F3UNuCvCFaWakQLsVmBBbmN_cvnVFtWb9iUcZC7xyJ2UaUAe4FZgeKbjCEgEydxPFmpsRKMhkXus81STE0qa0w1yMWjjObuAn7F3y1uU7sKuejKd1tuPIDwqwSfnai-UWwBRfC2DZjy7axwVn54lv_ybG6LGcM9k00l_dZrl5-axAeSb-05dAxDwdT-dFKQ4IxtScS65cojee16M_OyN6ayu4qOKaGKdo2PQR8-vJ4bLGCWq5b"
            />
            <div className="absolute bottom-12 left-12">
              <div className="text-8xl font-headline font-bold text-primary tracking-tighter">40%</div>
              <div className="text-sm font-body uppercase tracking-widest text-on-surface-variant">Admin Reduction Rate</div>
            </div>
          </div>
          <div className="md:col-span-5 space-y-6">
            <h2 className="font-headline text-4xl font-bold tracking-tight">The Admin Burden is Over</h2>
            <div className="h-1 w-24 bg-primary" />
            <p className="font-body text-lg text-on-surface-variant leading-relaxed">
              We spent years watching elite trainers spend 40% of their day stuck in spreadsheets, chasing invoices, and manually managing client follow-ups. That&apos;s energy diverted from the gym floor.
            </p>
            <p className="font-body text-lg text-on-surface-variant leading-relaxed">
              ScheduFit reclaims that time. Our platform is engineered to automate the friction, so you can focus on the movement.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are / Metrics */}
      <section className="bg-surface-container-low py-24 mb-40">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="space-y-4">
              <span className="text-primary font-body text-sm tracking-[0.2em] uppercase">The Foundation</span>
              <h2 className="font-headline text-4xl font-bold">Who We Are</h2>
              <p className="font-body text-on-surface-variant leading-relaxed">
                A collective of performance engineers and veteran coaches obsessed with the intersection of human movement and digital precision.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center border-l border-outline-variant/15 p-8">
              <div className="text-7xl font-headline font-bold">12k+</div>
              <div className="font-body text-primary uppercase text-sm tracking-widest mt-2">Sessions tracked</div>
            </div>
            <div className="flex flex-col justify-center items-center border-l border-outline-variant/15 p-8">
              <div className="text-7xl font-headline font-bold">98%</div>
              <div className="font-body text-primary uppercase text-sm tracking-widest mt-2">Retention rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="px-8 mb-40 max-w-[1440px] mx-auto">
        <h2 className="font-headline text-4xl font-bold mb-16 text-center">Built For Every Tier of Performance</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface-container p-10 rounded-xl border-t-4 border-primary/20 hover:border-primary transition-colors group">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-primary">person</span>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-6">Independent Coaches</h3>
            <ul className="space-y-4 font-body text-on-surface-variant">
              {['Automated Invoicing', 'Client Progress Vault', 'Seamless Booking'].map(item => (
                <li key={item} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-xs text-primary">check_circle</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-surface-container p-10 rounded-xl border-t-4 border-secondary/20 hover:border-secondary transition-colors group">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-secondary/20 transition-colors">
              <span className="material-symbols-outlined text-secondary">domain</span>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-6">Boutique Studios</h3>
            <ul className="space-y-4 font-body text-on-surface-variant">
              {['Multi-Trainer Sync', 'Resource Management', 'Studio Analytics'].map(item => (
                <li key={item} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-xs text-secondary">check_circle</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-surface-container p-10 rounded-xl border-t-4 border-on-surface-variant/20 hover:border-white transition-colors group">
            <div className="w-12 h-12 bg-on-surface-variant/10 rounded-full flex items-center justify-center mb-8 group-hover:bg-white/10 transition-colors">
              <span className="material-symbols-outlined text-on-surface">corporate_fare</span>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-6">Commercial Gyms</h3>
            <ul className="space-y-4 font-body text-on-surface-variant">
              {['Payroll Integration', 'Member Portals', 'High-Load Resilience'].map(item => (
                <li key={item} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-xs text-on-surface">check_circle</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mb-40 px-8">
        <div className="max-w-[1440px] mx-auto bg-surface-container-high rounded-3xl p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] -ml-48 -mb-48" />
          <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-8 relative z-10">
            Ready to elevate your <br /> business <span className="italic text-primary">kinetics?</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-6 relative z-10">
            <button
              onClick={open}
              className="bg-primary text-on-primary px-12 py-4 rounded-md font-bold text-lg active:scale-90 transition-transform"
            >
              Get in touch
            </button>
            <button className="bg-transparent border border-outline/30 text-on-surface px-12 py-4 rounded-md font-bold text-lg hover:bg-white/5 transition-colors">
              View Platform
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
