"use client"

import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"

export function TargetingSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 max-w-4xl mx-auto">
          <div className="inline-block rounded-full bg-primary/10 px-4 py-2 text-primary font-semibold mb-3">STEP 2</div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">TARGETING</h2>
        </div>

        {/* TOOLBOX - Posizionato direttamente sotto TARGETING */}
        <div className="max-w-6xl mx-auto mb-10">
          <Card className="bg-gradient-to-r from-muted/50 to-muted/30 border-2 border-primary/20">
            <CardContent className="p-6 md:p-8 text-left">
              <CardTitle className="text-xl md:text-2xl mb-4 text-center">TOOLBOX - Strumenti e Approcci Utilizzati</CardTitle>
              <div className="space-y-6 text-muted-foreground">
                <div>
                  <h3 className="text-foreground font-semibold mb-2">1. Trovare Aziende Target</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Web+Comet AI: Query mirate su "facility manager + sustainability", "real estate ESG Italy", "sustainability officer"
                    </li>
                    <li>
                      Filtri applicati su APOLLO.IO: dimensione aziendale (mid-to-large), settore (real estate/facility management), geografia (Nord Italia), complessità operativa
                    </li>
                    <li>
                      Cross-reference: verifica coerenza tra multiple fonti per validare informazioni aziendali; analisi dei siti web istituzionali tramite Comet/Perplexity
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-foreground font-semibold mb-2">2. Verificare Contatti e Ruoli Decisori</h3>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>LinkedIn Research: conferma ruoli attuali e responsabilità</li>
                    <li>Corporate Website: pagine "Leadership" / "Chi Siamo" (Comet AI)</li>
                    <li>Press Release: comunicati stampa recenti per nomine e cambi organizzativi (Comet AI)</li>
                    <li>Trigger Events: nuove nomine, progetti annunciati, cambi organizzativi</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-6xl mx-auto">
          <Card className="bg-background">
            <CardContent className="p-6 md:p-8 text-left">
              <CardTitle className="text-xl md:text-2xl mb-3">1. COIMA SGR/REM - Real Estate Investment & Development</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                <span className="font-semibold text-foreground">Perché è il fit ideale:</span>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Portfolio complesso: gestisce oltre €10 miliardi in investimenti immobiliari con 170+ proprietà.</li>
                  <li>Leadership in sostenibilità: prima società italiana con Sustainability Officer (2017), forte focus su Digital Twin e innovazione tecnologica.</li>
                  <li>Match perfetto con ICP: gestione integrata di asset complessi, necessità di monitoraggio energetico granulare e reporting ESG avanzato.</li>
                  <li>Progetti flagship: Porta Nuova Milano, CityLife — progetti che richiedono sistemi di monitoraggio energetico sofisticati.</li>
                </ul>
              </CardDescription>
              <div className="mt-5">
                <h3 className="text-lg font-semibold mb-2 text-foreground">Referente</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>
                    <span className="text-foreground font-medium">Stefano Corbella</span> — Sustainability Officer COIMA
                    <ul className="list-disc pl-6 mt-1 space-y-1">
                      <li>Formazione: Chartered Engineer (CEng MCIBSE), London School of Economics.</li>
                      <li>Ruolo: responsabile integrazione ESG a livello Corporate e Fondi di investimento.</li>
                      <li>Expertise: 20+ anni esperienza Real Estate, ex Arup e Hilson Moran, sviluppo piani di decarbonizzazione.</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background">
            <CardContent className="p-6 md:p-8 text-left">
              <CardTitle className="text-xl md:text-2xl mb-3">2. Generali Real Estate - Asset Management</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                <span className="font-semibold text-foreground">Perché è il fit ideale:</span>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Scale enterprise: €39.1 miliardi di asset in gestione, 360+ professionisti.</li>
                  <li>ESG leadership: portfolio leader in sostenibilità, 90%+ energia rinnovabile target, implementazione budget per decarbonizzazione.</li>
                  <li>Complessità operativa: gestione di edifici storici e moderni, necessità di monitoraggio granulare consumi e performance.</li>
                </ul>
              </CardDescription>
              <div className="mt-5">
                <h3 className="text-lg font-semibold mb-2 text-foreground">Referenti verificabili</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>
                    <span className="text-foreground font-medium">Andrea Mosca</span> — ESG Manager / Sustainable Investing
                    <ul className="list-disc pl-6 mt-1 space-y-1">
                      <li>Ruolo: responsabile investimenti sostenibili presso Generali Real Estate.</li>
                      <li>Expertise: integrazione criteri ESG nell'analisi degli investimenti immobiliari.</li>
                      <li>Responsabilità: implementazione framework di sostenibilità, monitoring performance ambientali.</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-background">
            <CardContent className="p-6 md:p-8 text-left">
              <CardTitle className="text-xl md:text-2xl mb-3">3. IGD SIIQ - Retail Real Estate REIT</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                <span className="font-semibold text-foreground">Perché è il fit ideale:</span>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Portfolio retail complesso: 25 shopping mall + 8 ipermercati in Italia, gestione diretta facility management.</li>
                  <li>Innovation focus: integrazione "Planning, Control, Investor Relations and Sustainability" sotto nuovo Group CFO.</li>
                  <li>Operational intensity: gestione 24/7 dei centri commerciali con alti consumi energetici e necessità di monitoraggio continuo.</li>
                </ul>
              </CardDescription>
              <div className="mt-5">
                <h3 className="text-lg font-semibold mb-2 text-foreground">Referenti verificabili</h3>
                <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                  <li>
                    <span className="text-foreground font-medium">Luca Lucaroni</span> — Group CFO e Manager con responsabilità strategiche
                    <ul className="list-disc pl-6 mt-1 space-y-1">
                      <li>Ruolo: appena nominato (aprile 2025) Group CFO con responsabilità unificate su "Finance and Treasury" + "Planning, Control, Investor Relations and Sustainability".</li>
                      <li>Expertise: anni di esperienza internazionale nel settore retail real estate quotato.</li>
                      <li>Timing perfetto: nuova nomina = finestra ideale per introdurre nuove soluzioni tecnologiche.</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
