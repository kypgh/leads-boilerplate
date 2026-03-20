export default function Home() {
  const colors = [
    { label: "primary", bg: "bg-primary", fg: "text-primary-foreground", token: "--brand-primary" },
    { label: "secondary", bg: "bg-secondary", fg: "text-secondary-foreground", token: "--brand-secondary" },
    { label: "accent", bg: "bg-accent", fg: "text-accent-foreground", token: "--brand-accent" },
    { label: "background", bg: "bg-background", fg: "text-foreground", token: "--background", border: true },
    { label: "muted", bg: "bg-muted", fg: "text-muted-foreground", token: "--muted" },
    { label: "destructive", bg: "bg-destructive", fg: "text-white", token: "--destructive" },
    { label: "card", bg: "bg-card", fg: "text-card-foreground", token: "--card", border: true },
  ]

  return (
    <main className="min-h-screen bg-background p-12">
      <h1 className="text-3xl font-bold text-foreground mb-2">Theme Preview</h1>
      <p className="text-muted-foreground mb-10 text-sm">
        Edit <code className="bg-muted px-1.5 py-0.5 rounded text-xs">app/globals.css</code> → brand colors section to update.
      </p>

      {/* Color swatches */}
      <section className="mb-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Colors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {colors.map(({ label, bg, fg, token, border }) => (
            <div key={label} className={`rounded-lg overflow-hidden ${border ? "border border-border" : ""}`}>
              <div className={`${bg} h-20 w-full`} />
              <div className="bg-card border border-border border-t-0 rounded-b-lg px-3 py-2">
                <p className="font-medium text-card-foreground text-sm capitalize">{label}</p>
                <p className="text-muted-foreground text-xs font-mono">{token}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Typography */}
      <section className="mb-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Typography</h2>
        <div className="space-y-2">
          <p className="text-4xl font-bold text-foreground">Heading / Bold</p>
          <p className="text-xl text-foreground">Body text — foreground</p>
          <p className="text-base text-muted-foreground">Subtle text — muted foreground</p>
          <a className="text-primary underline underline-offset-4 text-base">Link / primary color</a>
        </div>
      </section>

      {/* Buttons */}
      <section className="mb-12">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Buttons</h2>
        <div className="flex flex-wrap gap-3">
          <button className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-medium">Primary</button>
          <button className="bg-secondary text-secondary-foreground px-5 py-2 rounded-lg text-sm font-medium">Secondary</button>
          <button className="bg-accent text-accent-foreground px-5 py-2 rounded-lg text-sm font-medium">Accent</button>
          <button className="bg-destructive text-white px-5 py-2 rounded-lg text-sm font-medium">Destructive</button>
          <button className="border border-border text-foreground px-5 py-2 rounded-lg text-sm font-medium">Outline</button>
          <button className="text-muted-foreground px-5 py-2 rounded-lg text-sm font-medium">Ghost</button>
        </div>
      </section>

      {/* Radius */}
      <section>
        <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Border Radius</h2>
        <div className="flex flex-wrap gap-4 items-end">
          {(["sm", "md", "lg", "xl", "2xl", "3xl"] as const).map((r) => (
            <div key={r} className={`bg-primary w-16 h-16 rounded-${r} flex items-center justify-center`}>
              <span className="text-primary-foreground text-xs font-mono">{r}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
