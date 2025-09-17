"use client"

import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Mail, BarChart3, Linkedin } from "lucide-react"

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
              <CardTitle className="text-xl md:text-2xl mb-4">CAMPAGNA MULTI-TOUCHPOINT</CardTitle>
              <CardDescription className="text-base leading-relaxed mb-4">
                Sequenza in 4 Touchpoints (12 giorni)
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-2 border-primary/20">
            <CardContent className="p-6 md:p-8 text-left">
              <CardTitle className="text-xl md:text-2xl mb-6 text-center text-foreground">EKORE Outreach Toolbox</CardTitle>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    Apollo
                  </h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Sequenze Multicanale</h4>
                      <p>Email, LinkedIn, </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Engagement e Tracking</h4>
                      <p>Monitora aperture, reply, click e classifica i lead "caldi", pronti per passare a contatto diretto</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    HubSpot
                  </h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">CRM Unificato</h4>
                      <p>Tutte le interazioni centralizzate (email, chiamate, note, appuntamenti, video loom)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Automazione nurture</h4>
                      <p>Invio materiale, reminder follow-up, assegnazione task al sales</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Pipeline analytics</h4>
                      <p>Monitoraggio avanzamento deal</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Integrazione Apollo-HubSpot</h4>
                      <p>Sync anagrafiche, storico outbound e workflow tra piattaforme</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    Loom
                  </h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Video Personalizzati</h4>
                      <p>Crea brevi video custom (demo, follow-up case study)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Tracciamento visualizzazioni</h4>
                      <p>Chi ha guardato, per quanto tempo, notifica in HubSpot</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Valore strategico</h4>
                      <p>Ottimo per rompere il ghiaccio o spiegare rapidamente il valore EKORE, anche asincrono</p>
                    </div>
                  </div>
                </div>
              </div>
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
                    <p className="mt-2">Complimenti per la recente nomina e per il lavoro che stai svolgendo in IGD - ho letto con interesse dell'approccio alla sostenibilità del gruppo.</p>
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
                  <p className="mt-2">Senti, è un buon momento per rubarti 30 secondi? Ho visto il lavoro interessante che fate in IGD su gestione centro commerciale e onestamente mi ha incuriosito.</p>
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

          {/* LinkedIn Actions - Parallel to Email Campaign */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* LinkedIn Connection Request */}
            <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200">
              <CardContent className="p-6 md:p-8 text-left">
                <div className="flex items-center gap-2 mb-4">
                  <Linkedin className="w-5 h-5 text-blue-600" />
                  <CardTitle className="text-lg md:text-xl text-blue-800">RICHIESTA COLLEGAMENTO LINKEDIN</CardTitle>
                </div>
                <div className="space-y-4">
                  <p className="text-blue-700">Richiesta collegamento LinkedIn senza messaggio per evitare ridondanze.</p>
                  <div className="bg-blue-200/50 p-3 rounded-lg">
                    <p className="text-blue-800 text-sm font-medium">⚡ Azione parallela alla campagna email</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Follow-up after 4 days */}
            <Card className="bg-gradient-to-r from-indigo-50 to-indigo-100 border-2 border-indigo-200">
              <CardContent className="p-6 md:p-8 text-left">
                <div className="flex items-center gap-2 mb-4">
                  <Linkedin className="w-5 h-5 text-indigo-600" />
                  <CardTitle className="text-lg md:text-xl text-indigo-800">FOLLOW-UP DOPO 4 GIORNI</CardTitle>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-indigo-800 mb-2">Contenuto:</h4>
                    <div className="bg-indigo-200/50 p-4 rounded-lg text-sm leading-relaxed">
                      <p>Grazie del collegamento, Luca!</p>
                      <p className="mt-2">Ti ho inviato poco fa un'email con un breve video (oggetto: "Scopri cosa il tuo edificio non ti dice"): penso possa incuriosirti perché riguarda proprio casi reali di efficienza "invisibile".</p>
                      <p className="mt-2">Se hai feedback o vuoi scambiare insight anche solo in chat, mi fa davvero piacere: nessuna pressione commerciale.</p>
                    </div>
                  </div>
                  <div className="bg-indigo-200/50 p-3 rounded-lg">
                    <p className="text-indigo-800 text-sm font-medium">🔄 Continuazione del rapporto LinkedIn</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  )
}

// KPI Section as separate component
export function KPISection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary font-semibold mb-3">
            <BarChart3 className="w-4 h-4" />
            <span>STEP 4</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">KPI</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Engagement Depth Score */}
            <Card className="bg-background">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3 text-center">Engagement Depth Score</h3>
                <div className="space-y-3 text-sm">
                  <p className="text-muted-foreground mb-3">
                    Indice che somma e pondera:
                  </p>
                  <ul className="list-disc pl-4 space-y-2 text-muted-foreground">
                    <li>Visualizzazioni complete di video Loom (&gt;80% del video guardato)</li>
                    <li>Click su link interni all'email (case study)</li>
                    <li>Risposte testuali che esprimono curiosità/coinvolgimento</li>
                  </ul>
                  <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                    <p className="text-foreground font-medium text-xs">
                      Non misura solo "se" il prospect risponde, ma quanto si coinvolge davvero nei contenuti e processi proposti. Premia l'efficacia dei messaggi multiformato EKORE e permette di capire quali touchpoint generano vero dialogo, non solo "reply formali".
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Time-to-Qualified Response */}
            <Card className="bg-background">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3 text-center">Time-to-Qualified Response</h3>
                <div className="space-y-3 text-sm">
                  <p className="text-muted-foreground mb-3">
                    Tempo medio che intercorre tra il primo touchpoint e la ricezione di una risposta realmente qualificante (es. richiesta specifica, domande tecniche, invito ad approfondire).
                  </p>
                  <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                    <p className="text-foreground font-medium text-xs">
                      Misura l'efficacia e la velocità con cui la campagna riesce ad attivare l'interesse reale del target. Più il dato è basso, più servirà personalizzazione e targeting, riducendo tempi morti e accelerando la pipeline.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Multi-Channel Engagement Rate */}
            <Card className="bg-background">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3 text-center">Multi-Channel Engagement Rate</h3>
                <div className="space-y-3 text-sm">
                  <p className="text-muted-foreground mb-3">
                    Percentuale di lead che interagisce su almeno due canali diversi (es. apre email E visualizza Loom, oppure risponde su LinkedIn DOPO aver ricevuto email).
                  </p>
                  <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                    <p className="text-foreground font-medium text-xs">
                      Misura il vero effetto di una campagna omnicanale, più canali ingaggiano il prospect, più sarà vicino alla conversione.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  )
}
