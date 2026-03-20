'use client'

import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', business: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', business: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="pt-32 pb-20 px-8 max-w-[1440px] mx-auto min-h-screen">
      <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
        {/* Left: Info */}
        <div className="space-y-8">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary-container/10 border border-secondary/20 text-secondary text-xs font-bold tracking-widest uppercase">
            Direct Channel
          </div>
          <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter leading-[0.9]">
            Reach out and we&apos;ll get your business set up.
          </h1>
          <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed">
            Transition your studio to a performance-first ecosystem. Our engineers are ready to architect your bespoke scheduling flow.
          </p>
          <div className="pt-12 space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">bolt</span>
              </div>
              <div>
                <h4 className="font-headline font-bold text-lg">Rapid Deployment</h4>
                <p className="text-on-surface-variant text-sm">Onboard your entire client list in under 24 hours.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined">precision_manufacturing</span>
              </div>
              <div>
                <h4 className="font-headline font-bold text-lg">Precision Logic</h4>
                <p className="text-on-surface-variant text-sm">Custom conflict resolution and automated billing structures.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="relative">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-secondary/10 blur-[80px] rounded-full" />
          <div className="relative glass-panel rounded-xl p-8 md:p-12 border border-outline-variant/15">
            {status === 'success' ? (
              <div className="text-center py-12">
                <span className="material-symbols-outlined text-primary text-6xl">check_circle</span>
                <h3 className="font-headline text-3xl font-bold mt-4 mb-2">Message sent.</h3>
                <p className="text-on-surface-variant">We&apos;ll be in touch within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Name</label>
                    <input
                      required
                      type="text"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      className="w-full bg-surface-container-lowest border-none focus:ring-1 focus:ring-primary rounded-lg p-4 text-on-surface placeholder:text-outline/50 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Email</label>
                    <input
                      required
                      type="email"
                      placeholder="john@studio.com"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      className="w-full bg-surface-container-lowest border-none focus:ring-1 focus:ring-primary rounded-lg p-4 text-on-surface placeholder:text-outline/50 transition-all outline-none"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Business Name</label>
                  <input
                    type="text"
                    placeholder="Apex Athletics"
                    value={form.business}
                    onChange={e => setForm(f => ({ ...f, business: e.target.value }))}
                    className="w-full bg-surface-container-lowest border-none focus:ring-1 focus:ring-primary rounded-lg p-4 text-on-surface placeholder:text-outline/50 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your current infrastructure..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full bg-surface-container-lowest border-none focus:ring-1 focus:ring-primary rounded-lg p-4 text-on-surface placeholder:text-outline/50 transition-all resize-none outline-none"
                  />
                </div>
                {status === 'error' && (
                  <p className="text-error text-sm">Something went wrong. Please try again.</p>
                )}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full kinetic-gradient text-on-primary font-headline font-bold text-lg py-5 rounded-lg flex items-center justify-center gap-2 group transition-all active:scale-[0.98] disabled:opacity-70"
                >
                  {status === 'loading' ? 'Sending...' : (
                    <>
                      Initiate Partnership
                      <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </>
                  )}
                </button>
                <p className="text-center text-xs text-on-surface-variant">
                  By submitting, you agree to our{' '}
                  <a href="#" className="text-primary hover:underline">Privacy Policy</a>{' '}
                  and{' '}
                  <a href="#" className="text-primary hover:underline">Data Protocols</a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
