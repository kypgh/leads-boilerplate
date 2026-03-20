'use client'

import { useContactModal } from '@/context/contact-modal'

export default function Features() {
  const { open } = useContactModal()

  return (
    <main className="pt-32 pb-24">
      {/* Hero */}
      <section className="px-8 max-w-[1440px] mx-auto mb-32">
        <div className="max-w-4xl">
          <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter leading-none mb-8">
            PRECISION <span className="text-primary italic">KINETICISM</span> FOR YOUR BUSINESS.
          </h1>
          <p className="text-on-surface-variant text-xl md:text-2xl max-w-2xl leading-relaxed">
            Designed for elite fitness professionals. A suite of tools engineered to remove friction and accelerate performance.
          </p>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="px-8 max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Unified Dashboard */}
          <div className="md:col-span-8 bg-surface-container rounded-xl overflow-hidden group">
            <div className="p-8 md:p-12 h-full flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-6 block">dashboard</span>
                <h3 className="font-headline text-4xl font-bold tracking-tight mb-4">One unified dashboard</h3>
                <p className="text-on-surface-variant text-lg max-w-lg">Every metric that matters, centralized. Monitor client growth, revenue streams, and attendance rates with surgical precision in real-time.</p>
              </div>
              <div className="mt-12 bg-surface-container-highest rounded-lg p-6 border border-outline-variant/10">
                <div className="flex items-center justify-between mb-8">
                  <div className="h-2 w-32 bg-primary/20 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-primary" />
                  </div>
                  <span className="text-primary font-headline font-bold">+24% GROWTH</span>
                </div>
                <div className="grid grid-cols-4 gap-4">
                  <div className="h-20 bg-surface-bright rounded-md" />
                  <div className="h-28 bg-primary rounded-md" />
                  <div className="h-16 bg-surface-bright rounded-md" />
                  <div className="h-24 bg-surface-bright rounded-md" />
                </div>
              </div>
            </div>
          </div>

          {/* Self-Service Booking */}
          <div className="md:col-span-4 bg-surface-container-low rounded-xl p-8 border border-outline-variant/5">
            <span className="material-symbols-outlined text-secondary text-4xl mb-6 block">calendar_today</span>
            <h3 className="font-headline text-2xl font-bold tracking-tight mb-4">Self-service booking</h3>
            <p className="text-on-surface-variant leading-relaxed">Eliminate the back-and-forth. Clients book, reschedule, and manage their own training slots via a high-performance interface that syncs instantly.</p>
            <div className="mt-12 space-y-3">
              <div className="flex items-center justify-between p-3 bg-surface-container-highest rounded-md">
                <span className="text-sm">08:00 AM — HIIT Elite</span>
                <span className="text-xs text-primary font-bold">BOOKED</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-surface-container-highest/50 rounded-md">
                <span className="text-sm">09:30 AM — Mobility</span>
                <span className="text-xs text-secondary font-bold">AVAILABLE</span>
              </div>
            </div>
          </div>

          {/* Class Packs */}
          <div className="md:col-span-4 bg-surface-container-low rounded-xl p-8 border border-outline-variant/5">
            <span className="material-symbols-outlined text-tertiary text-4xl mb-6 block">card_membership</span>
            <h3 className="font-headline text-2xl font-bold tracking-tight mb-4">Class packs & memberships</h3>
            <p className="text-on-surface-variant leading-relaxed">Scale your revenue with flexible recurring memberships and prepaid class packs. Automated renewal ensures no session goes unpaid.</p>
          </div>

          {/* Direct Payouts */}
          <div className="md:col-span-4 bg-surface-container-high rounded-xl p-8 relative overflow-hidden">
            <div className="relative z-10">
              <span className="material-symbols-outlined text-primary text-4xl mb-6 block">payments</span>
              <h3 className="font-headline text-2xl font-bold tracking-tight mb-4">Direct payouts</h3>
              <p className="text-on-surface-variant leading-relaxed">Financial transparency at its core. Secure, direct-to-bank payouts with automated tax ledgering for every transaction.</p>
            </div>
            <div className="absolute -right-8 -bottom-8 opacity-10">
              <span className="material-symbols-outlined text-[160px]">account_balance</span>
            </div>
          </div>

          {/* Cancellation Policies */}
          <div className="md:col-span-4 bg-surface-container-low rounded-xl p-8 border border-outline-variant/5">
            <span className="material-symbols-outlined text-error text-4xl mb-6 block">gavel</span>
            <h3 className="font-headline text-2xl font-bold tracking-tight mb-4">Cancellation policies</h3>
            <p className="text-on-surface-variant leading-relaxed">Protect your time with custom late-cancel and no-show fee structures. Automated enforcement keeps your business boundaries intact.</p>
          </div>
        </div>
      </section>

      {/* Secondary Details */}
      <section className="mt-32 px-8 max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-headline text-5xl font-bold tracking-tighter mb-8 leading-tight">
              SYSTEMIZED FOR <br /><span className="text-secondary">GROWTH.</span>
            </h2>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-surface-container-highest rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">bolt</span>
                </div>
                <div>
                  <h4 className="font-headline text-xl font-bold mb-2">Automated Notifications</h4>
                  <p className="text-on-surface-variant">Instant SMS and email reminders for every booking, reducing no-shows by 40% on average.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-surface-container-highest rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary">monitoring</span>
                </div>
                <div>
                  <h4 className="font-headline text-xl font-bold mb-2">Client Analytics</h4>
                  <p className="text-on-surface-variant">Track performance trends for every client to deliver hyper-personalized coaching adjustments.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-surface-container rounded-2xl overflow-hidden relative">
              <img
                alt="Professional gym setting"
                className="w-full h-full object-cover grayscale opacity-60"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNjV7DHOmf-387Vij8TttQ9BkmxUqeqLMYzjlZSQQQu96yzfIszXAR2BhslMlrt5VBFVrRFdBKeQbqEuHATUxHwo4QsQa67V5TUsWiSFAnitCZKkTIXN-Ci_1OBsiU0A8wXM_zUCMqnYvHBF6OftkeGRW3V6wtRqTzh7JwlXkd7sfGNBWJFzdAl5cgpNQ7ekRQClZQ5g80ZLRpRwI-EM1gj4VKBslB-6QrOvVdS3NjbYiZFwXFuhjIXkGVURHjOWvp6N_SmrzAfpq2"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 p-6 glass-panel rounded-xl border border-white/5">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  </div>
                  <span className="font-headline font-bold">Trusted by 500+ Studios</span>
                </div>
                <p className="text-sm italic opacity-80">&ldquo;ScheduFit didn&apos;t just organize my classes, it professionalized my entire brand presence.&rdquo;</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-40 px-8 max-w-[1440px] mx-auto text-center">
        <div className="bg-primary-container rounded-2xl py-20 px-8">
          <h2 className="font-headline text-5xl md:text-7xl font-black text-on-primary-container tracking-tighter mb-8">READY TO ELEVATE?</h2>
          <button
            onClick={open}
            className="bg-on-primary-container text-primary-container px-12 py-5 rounded-md font-headline text-xl font-bold tracking-tight hover:bg-black transition-all duration-300"
          >
            Get in touch
          </button>
        </div>
      </section>
    </main>
  )
}
