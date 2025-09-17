"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, CircleDot, ChevronDown } from "lucide-react"

type Step = {
  id: number
  title: string
  items: string[]
  tools?: string[]
}

const steps: Step[] = [
  {
    id: 1,
    title: "SEGMENTAZIONE E RICERCA",
    items: [
      "identificare e prioritizzare prospect target",
      "ricerca sui decision maker e enrichment",
      "identificazione dei trigger event",
    ],
    tools: ["APOLLO.IO", "ZoomInfo"],
  },
]

export function BDRRoadmapSection() {
  const [open, setOpen] = useState<Record<number, boolean>>({ 1: true })

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">

        <div className="max-w-4xl mx-auto space-y-4">
          {steps.map((step, index) => {
            const isOpen = open[step.id]
            return (
              <Card
                key={step.id}
                className={`transition-all duration-700 ${isOpen ? "opacity-100 translate-y-0" : "opacity-90 translate-y-1"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <button
                    className="w-full flex items-center justify-between text-left"
                    onClick={() => setOpen((prev) => ({ ...prev, [step.id]: !prev[step.id] }))}
                  >
                    <div className="flex items-center gap-3">
                      {isOpen ? (
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      ) : (
                        <CircleDot className="w-5 h-5 text-muted-foreground" />
                      )}
                      <span className="text-lg md:text-xl font-semibold text-foreground">{step.title}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
                    />
                  </button>

                  {isOpen && (
                    <div className="mt-4 space-y-4">
                      <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                        {step.items.map((it) => (
                          <li key={it}>{it}</li>
                        ))}
                      </ul>
                      {/* Trigger events highlighted box */}
                      <div className="rounded-xl border bg-secondary/10 p-4">
                        <div className="text-sm font-semibold tracking-wide text-foreground mb-2 uppercase">Trigger events</div>
                        <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                          <li>Assunzione nuovo Sustainability/Energy Manager</li>
                          <li>Annunci pubblici target carbon neutrality</li>
                          <li>Nuove certificazioni ISO</li>
                          <li>Espansioni produttive o nuove sedi</li>
                          <li>Finanziamenti/incentivi per efficienza energetica</li>
                          <li>Scadenze audit energetici obbligatori</li>
                        </ul>
                      </div>
                      {/* Segmentazione in 2 tier */}
                      <div className="rounded-xl border bg-primary/5 p-4">
                        <div className="text-sm font-semibold tracking-wide text-foreground mb-3 uppercase">Approccio di segmentazione</div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="rounded-lg border bg-background p-4">
                            <div className="text-foreground font-semibold mb-1">Tier 1 (Alta priorità)</div>
                            <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
                              <li>Real Estate commerciale multi-edificio (50+ asset)</li>
                              <li>Gestione energetica avanzata e team dedicato</li>
                              <li>Budget ESG/efficienza già allocato</li>
                              <li>Trigger events recenti presenti</li>
                            </ul>
                          </div>
                          <div className="rounded-lg border bg-background p-4">
                            <div className="text-foreground font-semibold mb-1">Tier 2 (Media priorità)</div>
                            <ul className="list-disc pl-6 space-y-1 text-muted-foreground text-sm">
                              <li>Portfolio più ridotto (10–50 asset)</li>
                              <li>Processi energetici di base, progetti pilota limitati</li>
                              <li>Budget ESG in valutazione</li>
                              <li>Trigger events deboli o assenti</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {step.tools && step.tools.length > 0 && (
                        <div>
                          <div className="text-sm uppercase tracking-wide text-foreground mb-1">Tools utilizzati</div>
                          <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                            {step.tools.map((t) => (
                              <span key={t} className="px-2 py-1 rounded-md bg-muted">
                                {t}
                              </span>
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">
                            APOLLO.IO e ZoomInfo hanno database completi e ricchi di informazioni.
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
