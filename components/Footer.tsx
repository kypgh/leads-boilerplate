import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-[#0e0e0e] border-t border-outline-variant/15">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12 px-8 py-20 max-w-[1440px] mx-auto">
        <div className="col-span-2 md:col-span-1">
          <div className="text-xl font-bold text-primary font-headline mb-6">ScheduFit</div>
          <p className="text-on-surface-variant font-body text-sm leading-relaxed">
            Engineering high-performance scheduling systems for the next generation of fitness professionals.
          </p>
          <p className="text-on-surface-variant text-xs mt-4">© 2024 ScheduFit. Precision Kineticism.</p>
        </div>
        <div>
          <h5 className="text-on-surface font-bold mb-6 font-headline">Product</h5>
          <ul className="space-y-4">
            <li><Link href="/features" className="text-on-surface-variant hover:text-secondary transition-colors text-sm">Features</Link></li>
            <li><Link href="/pricing" className="text-on-surface-variant hover:text-secondary transition-colors text-sm">Pricing</Link></li>
            <li><Link href="/" className="text-on-surface-variant hover:text-secondary transition-colors text-sm">Solutions</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-on-surface font-bold mb-6 font-headline">Support</h5>
          <ul className="space-y-4">
            <li><Link href="/contact" className="text-on-surface-variant hover:text-secondary transition-colors text-sm">Contact</Link></li>
            <li><Link href="#" className="text-on-surface-variant hover:text-secondary transition-colors text-sm">Privacy</Link></li>
            <li><Link href="#" className="text-on-surface-variant hover:text-secondary transition-colors text-sm">Terms</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-on-surface font-bold mb-6 font-headline">Connect</h5>
          <div className="flex gap-4">
            <Link href="#" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-surface-container-highest transition-colors">
              <span className="material-symbols-outlined text-sm">share</span>
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-surface-container-highest transition-colors">
              <span className="material-symbols-outlined text-sm">public</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
