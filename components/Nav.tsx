'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useContactModal } from '@/context/contact-modal'

const links = [
  { href: '/', label: 'Platform' },
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
]

export function Nav() {
  const pathname = usePathname()
  const { open } = useContactModal()

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0e0e0e]/90 backdrop-blur-xl bg-gradient-to-b from-[#1a1a1a] to-transparent">
      <div className="flex justify-between items-center px-8 py-6 max-w-[1440px] mx-auto">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tighter text-primary uppercase italic font-headline"
        >
          ScheduFit
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={
                pathname === href
                  ? 'text-primary font-bold border-b-2 border-primary pb-1 font-headline tracking-tighter'
                  : 'text-on-surface-variant font-medium hover:text-primary transition-colors font-headline tracking-tighter'
              }
            >
              {label}
            </Link>
          ))}
        </div>
        <button
          onClick={open}
          className="bg-primary text-on-primary px-6 py-2.5 rounded-md font-bold hover:scale-95 active:scale-90 transition-transform duration-300 font-headline"
        >
          Get in touch
        </button>
      </div>
    </nav>
  )
}
