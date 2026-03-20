'use client'

import { useState } from 'react'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: Props) {
  const [form, setForm] = useState({ name: '', email: '', business: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  if (!isOpen) return null

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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative glass-panel rounded-xl p-8 md:p-12 border border-outline-variant/15 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {status === 'success' ? (
          <div className="text-center py-12">
            <span className="material-symbols-outlined text-primary text-6xl">check_circle</span>
            <h3 className="font-headline text-3xl font-bold mt-4 mb-2">Message sent.</h3>
            <p className="text-on-surface-variant">We&apos;ll be in touch within 24 hours.</p>
            <button onClick={onClose} className="mt-8 text-on-surface-variant hover:text-on-surface text-sm underline">
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <h2 className="font-headline text-3xl font-bold tracking-tighter mb-2">Get in touch</h2>
              <p className="text-on-surface-variant text-sm">Our team will set you up within 24 hours.</p>
            </div>
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
              <a href="#" className="text-primary hover:underline">Privacy Policy</a>.
            </p>
          </form>
        )}
      </div>
    </div>
  )
}
