"use client"

import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Mail } from "lucide-react"

export function ColdCampaignSection() {
  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary font-semibold mb-3">
            <Mail className="w-4 h-4" />
            <span>STEP 3</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">COLD CAMPAIGN</h2>
        </div>

        <div className="max-w-6xl mx-auto space-y-6">
          <Card className="bg-background">
            <CardContent className="p-6 md:p-8 text-left">
              <CardTitle className="text-xl md:text-2xl mb-4">CAMPAGNA EMAIL MULTI-TOUCHPOINT</CardTitle>
              <CardDescription className="text-base leading-relaxed mb-4">
                Sequenza in 4 Touchpoints (12 giorni)
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-background">
            <CardContent className="p-6 md:p-8 text-left">
              <CardTitle className="text-lg md:text-xl mb-4 text-primary">TOUCHPOINT 1 - EMAIL "VALUE FIRST" (Giorno 1)</CardTitle>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Oggetto:</h4>
                  <p className="text-muted-foreground">Insight energetici per "SHOPPING MALL"</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Contenuto:</h4>
                  <div className="bg-muted/30 p-4 rounded-lg text-sm leading-relaxed">
                    <p>Ciao Luca,</p>
                    <p className="mt-2">Complimenti per la recente nomina e per il lavoro che stai svolgendo in IGD - ho letto con interesse dell'approccio sostenibile del gruppo.</p>
                    <p className="mt-2">Mi occupo di ottimizzazione energetica per edifici complessi e volevo condividere un insight che potrebbe interessarti:</p>
                    <p className="mt-2">Nei nostri progetti, scopriamo spesso che anche edifici ben gestiti come il vostro hanno potenziali di efficienza del 15-20% ancora inesplorati, principalmente per via della granularità limitata dei dati disponibili.</p>
                    <p className="mt-2">Se fosse utile approfondire come altri Energy Manager stanno affrontando questa sfida, sono disponibile per uno scambio di esperienze.</p>
                    <p className="mt-4">Cordiali saluti,<br />Daniele<br />EKORE - Digital Twin & Building Intelligence</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background">
            <CardContent className="p-6 md:p-8 text-left">
              <CardTitle className="text-lg md:text-xl mb-4 text-primary">TOUCHPOINT 2 - VIDEO PERSONALIZZATO (Giorno 4)</CardTitle>
              <div className="space-y-4">
                <p className="text-muted-foreground">Video Loom 90 secondi</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Menzione edificio specifico del prospect</li>
                  <li>Screen-share: demo EKORE su edificio simile</li>
                  <li>Call-to-action</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background">
            <CardContent className="p-6 md:p-8 text-left">
              <CardTitle className="text-lg md:text-xl mb-4 text-primary">TOUCHPOINT 3 - CASE STUDY EMAIL (Giorno 5)</CardTitle>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Oggetto:</h4>
                  <p className="text-muted-foreground">Case Study: Torre EY Milano e l'approccio Digital Twin</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Contenuto:</h4>
                  <div className="bg-muted/30 p-4 rounded-lg text-sm leading-relaxed">
                    <p>Luca,</p>
                    <p className="mt-2">Come promesso, ti condivido un caso che potrebbe essere rilevante per le tue attività.</p>
                    <p className="mt-2">Abbiamo recentemente collaborato con il team facility di Torre EY Milano per implementare un sistema di monitoraggio granulare basato su Digital Twin.</p>
                    <p className="mt-2">Risultati in 6 mesi:</p>
                    <ul className="list-disc pl-6 mt-2 space-y-1">
                      <li>Visibilità energetica per singola zona/dispositivo</li>
                      <li>Riduzione sprechi del 23% attraverso ottimizzazioni mirate</li>
                      <li>ROI raggiunto in 4,5 mesi</li>
                    </ul>
                    <p className="mt-2">L'aspetto più interessante è stato come il Digital Twin abbia permesso di identificare inefficienze che sfuggivano completamente ai sistemi tradizionali.</p>
                    <p className="mt-2">Mi farebbe piacere conoscere la tua prospettiva in merito a questo tema. Hai 15 minuti la prossima settimana per uno scambio di idee?</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background">
            <CardContent className="p-6 md:p-8 text-left">
              <CardTitle className="text-lg md:text-xl mb-4 text-primary">TOUCHPOINT 4 - SCRIPT CALL (Giorno 12)</CardTitle>
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground mb-2">OPENING:</h4>
                <div className="bg-muted/30 p-4 rounded-lg text-sm leading-relaxed">
                  <p>"Ciao Luca, sono Daniele di EKORE. Ti ho mandato alcune email nelle scorse settimane sul tema energy management e Digital Twin - magari sono finite nello spam!</p>
                  <p className="mt-2">Senti, non ti chiamo per venderti nulla, ma ho visto il lavoro interessante che fate in IGD su [progetto/certificazione specifica] e onestamente mi ha incuriosito.</p>
                  <p className="mt-2">La mia curiosità è: nella tua esperienza, quando gestisci il monitoring energetico di SHOPPING MALL, qual è la cosa che ti fa più impazzire? Quello che vorresti vedere ma non riesci a monitorare?"</p>
                  <p className="mt-2 text-primary font-medium">[PAUSA - ASCOLTO ATTIVO]</p>
                  <p className="mt-2">"Ah interessante... sai, è esattamente quello che sento spesso. Qualche mese fa il Facility Manager di EY Milano - Torre Isozaki - mi chiama e mi dice: 'Daniele, i nostri consumi sono alti ma non riesco a capire dove stiamo sprecando. Abbiamo un BMS, monitoriamo tutto, eppure...'</p>
                  <p className="mt-2">Allora gli installiamo il nostro Digital Twin. Risultato? In due settimane abbiamo scoperto che stavano sprecando €3.200 al mese solo per HVAC che lavorava su zone vuote nei weekend. Più altri €1.800 per illuminazione in sale riunioni mai usate.</p>
                  <p className="mt-2">Totale: €60.000 l'anno letteralmente buttati. E loro erano convinti di avere tutto sotto controllo!</p>
                  <p className="mt-2 text-muted-foreground">ETC...</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
