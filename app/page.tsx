'use client'

import { useContactModal } from '@/context/contact-modal'

export default function Home() {
  const { open } = useContactModal()

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px]" />
        </div>
        <div className="max-w-[1440px] mx-auto px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <h1 className="font-headline font-extrabold text-[4.5rem] md:text-[6.5rem] leading-[0.85] tracking-tighter mb-8 max-w-4xl">
              Clients book. <br />
              Clients pay. <br />
              <span className="text-primary italic">You just train.</span>
            </h1>
            <p className="text-on-surface-variant text-xl md:text-2xl max-w-2xl mb-12 leading-relaxed">
              Stop drowning in WhatsApp threads and late-night billing. We handle the admin so you can reclaim your focus and your evenings.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button
                onClick={open}
                className="kinetic-gradient text-on-primary px-10 py-5 rounded-md font-bold text-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/10"
              >
                Get in touch <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button className="border border-outline/30 text-on-surface px-10 py-5 rounded-md font-bold text-lg hover:bg-surface-container transition-all">
                View Platform
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 hidden lg:block">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000" />
              <div className="relative bg-surface-container-high rounded-2xl p-4 overflow-hidden aspect-[4/5] flex items-end border border-white/5 shadow-2xl">
                <img
                  alt="Professional fitness trainer working in modern gym"
                  className="absolute inset-0 w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDm8a0evBZM6tfemVoxOcxppuGJzl9-Gb-xkXFmdPdzG9qZBS6BzK14lGDOMkWpKcQmQLBO_-kjQEt8rqyDNbBtUAuq_ISdvmChBZz4aBYLrz-ZyYiX9qOxvtt18vFqIRAZqkQLtRtYUnQ9K8CHAAvpFu7UAsSFrN-eKxF7W_I1c4Azq2JuS7hmjAsj6Vi8JNBYXx5Pip_7tq8yBTn6WEJk3KjtqL8A_NtB-6gxjJkVEWRScfvCq4AgVE6V-DKYMAhwDfuKlWX4uJZe"
                />
                <div className="relative z-10 glass-panel p-6 w-full rounded-xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs uppercase tracking-[0.2em] text-primary font-bold">Live Session</span>
                    <span className="w-2 h-2 bg-error rounded-full animate-pulse shadow-[0_0_10px_#ff7351]" />
                  </div>
                  <div className="text-2xl font-headline font-bold">Elite Performance</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-surface-container-low py-32">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="mb-20">
            <span className="text-primary font-headline font-bold tracking-[0.2em] uppercase text-sm">The Friction</span>
            <h2 className="text-5xl md:text-6xl font-headline font-bold mt-4 tracking-tighter">
              Admin is a silent <br className="hidden md:block" />performance killer.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'schedule', title: 'Scheduling eats your week', body: 'The back-and-forth dance of finding a slot is wasted energy. Put that time back into your programming.' },
              { icon: 'trending_down', title: 'Cancellations kill revenue', body: "No-shows aren't just annoying; they're expensive. Our automated policy enforcement keeps your income secure." },
              { icon: 'payments', title: 'Chasing payments is exhausting', body: 'Stop asking "Did you send it?". Integrated billing means you get paid before you even hit the floor.' },
            ].map(({ icon, title, body }) => (
              <div key={title} className="p-10 bg-surface-container rounded-2xl border-l-4 border-error/50 hover:border-error transition-all duration-300 group">
                <div className="text-error mb-8">
                  <span className="material-symbols-outlined text-5xl group-hover:scale-110 transition-transform inline-block">{icon}</span>
                </div>
                <h3 className="text-2xl font-headline font-bold mb-4">{title}</h3>
                <p className="text-on-surface-variant leading-relaxed text-lg">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 bg-surface overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative">
              <div className="absolute -top-32 -left-32 text-[25rem] font-black text-surface-container-highest/10 pointer-events-none select-none leading-none">01</div>
              <div className="relative z-10 space-y-24">
                {[
                  { step: '01', title: 'We set you up', body: 'Our performance team migrates your current roster and configures your availability and pricing logic in 24 hours.' },
                  { step: '02', title: 'Clients book & pay', body: 'A seamless booking link for your bio. Clients select, pay, and sign waivers in a single frictionless flow.', indent: 'md:ml-12' },
                  { step: '03', title: 'You focus on training', body: 'Walk into the gym with a locked-in schedule. No surprises. No uncollected fees. Just coaching.', indent: 'md:ml-24' },
                ].map(({ step, title, body, indent }) => (
                  <div key={step} className={`group ${indent ?? ''}`}>
                    <span className="inline-block bg-primary text-on-primary px-4 py-1.5 rounded-full text-xs font-bold mb-6 tracking-widest">STEP {step}</span>
                    <h3 className="text-4xl md:text-5xl font-headline font-bold mb-4 group-hover:translate-x-2 transition-transform">{title}</h3>
                    <p className="text-on-surface-variant text-lg max-w-md">{body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-surface-container rounded-[2rem] p-8 md:p-12 border border-outline-variant/15 relative shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between mb-12">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-error/20" />
                  <div className="w-3 h-3 rounded-full bg-tertiary/20" />
                  <div className="w-3 h-3 rounded-full bg-primary/20" />
                </div>
                <div className="text-xs text-on-surface-variant font-mono tracking-widest">SYSTEM_STATUS: OPTIMIZED</div>
              </div>
              <div className="space-y-6">
                <div className="bg-surface-container-high p-5 rounded-2xl flex items-center gap-4 border border-white/5">
                  <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-secondary text-3xl">person</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-base font-bold">New Booking: Alex Rivera</div>
                    <div className="text-sm text-on-surface-variant">1:1 Performance Strength • 08:00 AM</div>
                  </div>
                  <div className="text-primary font-bold text-lg">+$125</div>
                </div>
                <div className="bg-surface-container-high p-5 rounded-2xl flex items-center gap-4 border border-white/5 opacity-60">
                  <div className="w-14 h-14 rounded-full bg-surface-variant flex items-center justify-center">
                    <span className="material-symbols-outlined text-on-surface-variant text-3xl">check_circle</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-base font-bold">Payment Confirmed</div>
                    <div className="text-sm text-on-surface-variant">Stripe • Recurring Membership</div>
                  </div>
                </div>
                <div className="bg-surface-container-high p-5 rounded-2xl flex items-center gap-4 border border-white/5">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-3xl">bolt</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-base font-bold">Automated Reminder Sent</div>
                    <div className="text-sm text-on-surface-variant">24h Notification to Marcus J.</div>
                  </div>
                </div>
              </div>
              <div className="mt-12 p-8 glass-panel rounded-3xl relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-end justify-between mb-6">
                    <div>
                      <div className="text-xs uppercase tracking-widest text-on-surface-variant mb-2 font-bold">Weekly Revenue</div>
                      <div className="text-4xl font-headline font-bold">$4,820</div>
                    </div>
                    <div className="text-primary text-sm font-bold bg-primary/10 px-3 py-1 rounded-full">+12% vs LW</div>
                  </div>
                  <div className="h-3 w-full bg-surface-variant rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[85%] rounded-full shadow-[0_0_15px_rgba(204,255,0,0.5)]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Bento Grid */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-[1440px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 bg-surface-container-high p-12 rounded-[2.5rem] flex flex-col justify-between min-h-[450px] border border-white/5 group overflow-hidden">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-outlined text-primary text-4xl">monitoring</span>
                </div>
                <h3 className="text-4xl font-headline font-bold mb-4">Advanced Analytics</h3>
                <p className="text-on-surface-variant text-xl max-w-lg leading-relaxed">Track client retention, peak booking hours, and revenue forecasts with surgical precision.</p>
              </div>
              <div className="flex gap-4 mt-12 relative z-10">
                <div className="h-24 w-40 bg-primary/10 rounded-xl border border-primary/20 flex items-end p-4">
                  <div className="w-full bg-primary/30 h-1/2 rounded-t-lg" />
                </div>
                <div className="h-24 w-40 bg-primary/15 rounded-xl border border-primary/25 flex items-end p-4">
                  <div className="w-full bg-primary/50 h-[80%] rounded-t-lg" />
                </div>
                <div className="h-24 w-40 bg-primary/20 rounded-xl border border-primary/30 flex items-end p-4">
                  <div className="w-full bg-primary h-full rounded-t-lg shadow-lg shadow-primary/20" />
                </div>
              </div>
            </div>
            <div className="md:col-span-4 bg-primary p-12 rounded-[2.5rem] flex flex-col justify-between min-h-[450px] text-on-primary group shadow-2xl shadow-primary/5">
              <div className="relative z-10">
                <h3 className="text-4xl font-headline font-bold mb-6">Automated Waivers</h3>
                <p className="text-on-primary/80 text-xl leading-relaxed font-medium">Legally binding digital signatures collected before the first session begins. Peace of mind, automated.</p>
              </div>
              <div className="flex justify-end group-hover:-translate-y-2 transition-transform duration-500">
                <span className="material-symbols-outlined text-8xl md:text-9xl opacity-20">draw</span>
              </div>
            </div>
            <div className="md:col-span-4 bg-surface-container p-12 rounded-[2.5rem] border border-white/5 hover:bg-surface-container-high transition-colors duration-300 group">
              <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                <span className="material-symbols-outlined text-secondary text-4xl">group</span>
              </div>
              <h3 className="text-3xl font-headline font-bold mb-4">Group Class Logic</h3>
              <p className="text-on-surface-variant text-lg leading-relaxed">Manage waitlists and capacity for high-energy small group sessions effortlessly. Never overbooked, never underutilized.</p>
            </div>
            <div className="md:col-span-8 bg-surface-container p-12 rounded-[2.5rem] relative overflow-hidden border border-white/5 group">
              <div className="relative z-10">
                <h3 className="text-4xl font-headline font-bold mb-4">White-Label Experience</h3>
                <p className="text-on-surface-variant text-xl max-w-lg leading-relaxed">Your brand. Your logo. Your colors. To your clients, this is your custom-built proprietary app. Build authority with every interaction.</p>
              </div>
              <div className="absolute right-[-5%] bottom-[-5%] w-1/2 h-full opacity-5 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none">
                <span className="material-symbols-outlined text-[20rem]">brush</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-48 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary/20 rounded-full blur-[150px]" />
        </div>
        <div className="max-w-[1440px] mx-auto px-8 text-center relative z-10">
          <h2 className="text-6xl md:text-[8rem] font-headline font-extrabold mb-10 tracking-tighter leading-[0.9]">Ready for precision?</h2>
          <p className="text-on-surface-variant text-2xl md:text-3xl max-w-3xl mx-auto mb-16 leading-relaxed">
            Join the 500+ elite trainers who have reclaimed 10+ hours a week from the administrative grind.
          </p>
          <button
            onClick={open}
            className="kinetic-gradient text-on-primary px-16 py-8 rounded-md font-bold text-2xl hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/20"
          >
            Get in touch today
          </button>
        </div>
      </section>
    </main>
  )
}
