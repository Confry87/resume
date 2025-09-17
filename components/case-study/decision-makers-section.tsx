"use client"

import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Users } from "lucide-react"

export function DecisionMakersSection() {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary font-semibold mb-3">
            <Users className="w-4 h-4" />
            <span>STEP 1</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Decision Maker Profiles</h2>
          <p className="text-muted-foreground">Ruoli, responsabilità e pain points chiave</p>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          <Card className="bg-background">
            <CardContent className="p-6 md:p-8 text-left">
              <CardTitle className="text-xl md:text-2xl mb-3">Energy Manager</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                Energy Manager prevede la gestione della strategia energetica dell'azienda, il monitoraggio dei consumi elettrici
                nonché la promozione e il coordinamento di politiche tese all'efficienza energetica e alla sostenibilità.
              </CardDescription>
              <div className="mt-5">
                <h3 className="text-lg font-semibold mb-2 text-foreground">Pain Points</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Difficoltà di integrare i dati derivanti dai contatori di POD in un'unica piattaforma</li>
                  <li>Impossibilità di individuare sprechi precisi per zona d'utilizzazione</li>
                  <li>Esigenza di operare in condizioni di crescente risparmio di bilancio e di aumento nei prezzi d'energia</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background">
            <CardContent className="p-6 md:p-8 text-left">
              <CardTitle className="text-xl md:text-2xl mb-3">Facility Manager</CardTitle>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Ruolo e Responsabilità</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Supervisione operativa di edifici complessi (15.000-50.000 mq)</li>
                    <li>Coordinamento manutenzione preventiva e predittiva</li>
                    <li>Ottimizzazione comfort occupanti e sicurezza operativa</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Pain Points Reali e Sfidanti</h3>
                  <p>
                    Manutenzione reattiva costosa: Il 70% degli interventi avviene in modalità "run-to-failure" con costi di emergenza
                    3-5 volte superiori alla manutenzione programmata. Downtime imprevisti che impattano la produttività aziendale.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background">
            <CardContent className="p-6 md:p-8 text-left">
              <CardTitle className="text-xl md:text-2xl mb-3">Sustainability Manager</CardTitle>
              <div className="space-y-4 text-muted-foreground">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Ruolo e Responsabilità</h3>
                  <p>
                    Definizione e implementazione delle strategie ESG e relativo reporting, monitoraggio delle direttive europee e
                    redazione di eventuali bilanci di sostenibilità.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Pain Points</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Difficoltà di raccolta e integrazione dati relativi ESG sotto crescente pressione regolatoria</li>
                    <li>Continua evoluzione delle policy e delle rendicontazioni</li>
                    <li>Dimostrare l'efficacia (ROI) delle iniziative di sostenibilità per giustificare investimenti e budget</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
