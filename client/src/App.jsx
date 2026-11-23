export default function App() {
  return (
    <div className="min-h-dvh bg-canvas text-ink dark:bg-darkCanvas dark:text-darkInk transition-colors">
      <main className="mx-auto max-w-xl px-4 py-8 space-y-4">
        <header className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight">PulsePlan</h1>
          <p className="text-sm text-muted dark:text-darkMuted">
            Planer dnia dopasowany do Twojej energii i wolnych okienek.
          </p>
        </header>

        <section className="rounded-2xl bg-surface dark:bg-darkSurface p-5 space-y-3">
          <h2 className="text-base font-medium">Style Guide aktywny</h2>
          <p className="text-sm text-muted dark:text-darkMuted">
            Ciepły papier w trybie jasnym, ciepły węgiel w dark mode, zero ciężkich ramek.
          </p>
          <div className="flex flex-wrap gap-2 pt-1 text-xs font-medium">
            <span className="rounded-full bg-energyLow/15 text-energyLow px-3 py-1">
              Niska energia
            </span>
            <span className="rounded-full bg-energyMed/15 text-energyMed px-3 py-1">
              Średnia energia
            </span>
            <span className="rounded-full bg-energyHigh/15 text-energyHigh px-3 py-1">
              Wysoka energia
            </span>
          </div>
        </section>
      </main>
    </div>
  )
}
