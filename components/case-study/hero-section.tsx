"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { ArrowDown, Building2, Brain, FlaskConical, Sparkles } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  // Skills sempre visibili
  const [showVision2030, setShowVision2030] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted/30 to-primary/5">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center transition-all duration-1000 max-w-4xl mx-auto ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          {/* Logo/Brand */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="p-3 bg-primary/10 rounded-2xl animate-pulse-glow">
              <Building2 className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              EKORE
            </h1>
          </div>

          {/* Main title removed as requested */}

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-3xl mx-auto text-pretty">
            Profilo del SALES ACCOUNT EXECUTIVE del futuro.
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-4 max-w-3xl mx-auto text-pretty leading-relaxed">
            Per cambiare le regole del gioco non è sufficiente eseguire script. Serve una figura ibrida, fluida e sperimentale: serve raccogliere intelligence di mercato e validare ipotesi go-to-market.
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty leading-relaxed">
            Mentre un SDR tradizionale segue playbook ("50 call al giorno, email template, LinkedIn connect"), un SDR in una realtà sperimentale come EKORE deve inventare il playbook mentre lo esegue
          </p>

          {/* CTA Buttons removed as requested */}

          {/* Pulsanti: rimosso toggle skills; il pulsante 2030 verrà mostrato sotto le card */}

          {/* Skills cards - sempre visibili */}
          <div className={"grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"}>
            {[
              {
                title: "A. INTELLIGENZA ADATTIVA E PATTERN RECOGNITION",
                body:
                  '"imparare velocemente" non basta, ma serve riconoscere schemi nascosti e adattarsi in tempo reale. Perché fa la differenza: In EKORE, un SDR con questa intelligenza potrebbe notare che i sustainability manager preferiscono essere contattati tramite community specializzate (es. LinkedIn groups su ESG) piuttosto che cold email. E trasformare questa insight in una strategia completamente nuova.',
                Icon: Brain,
              },
              {
                title: 'B. MENTALITÀ DA "GROWTH HACKER" APPLICATA AL SALES',
                body:
                  'Adottare un approccio scientifico e sperimentale e non a sensazione. Applicazione in EKORE: Un SDR potrebbe sperimentare diventando "Digital Twin Educator" - creando micro-contenuti educativi personalizzati per ogni vertical (automotive, real estate, manufacturing) e usando questi come "conversation starters" invece dei tradizionali pitch di vendita.',
                Icon: FlaskConical,
              },
              {
                title: 'C. INTELLIGENZA RELAZIONALE AMPLIFICATA DALLA TECNOLOGIA',
                body:
                  'Visione per EKORE: Un SDR potrebbe usare AI tools per analizzare annual reports ESG delle aziende target, identificare gap specifici nella loro strategia sustainability, e creare outreach iper-personalizzati che dimostrano profonda comprensione del loro business. Un altro approccio potrebbe essere sfruttare la AI per generare delle \'\'carbon footprint simulationa\'\' da affiancare alle previsioni roi come leve di vendita.',
                Icon: Sparkles,
              },
            ].map((skill, index) => (
              <Card key={skill.title} className={"opacity-100 translate-y-0 transition-all duration-700"} style={{ transitionDelay: `${index * 120}ms` }}>
                <CardContent>
                  {skill.Icon && (
                    <div className="mb-3">
                      <div className="inline-flex p-3 rounded-full bg-muted">
                        <skill.Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  )}
                  <CardTitle className="text-lg md:text-xl mb-2">{skill.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {skill.body}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Vision 2030 trigger posizionato sotto le card */}
          <div className="flex justify-center mt-8">
            <Button
              size="lg"
              className="px-10 py-4 text-xl font-semibold"
              onClick={() => setShowVision2030((prev) => !prev)}
            >
              EKORE NEL 2030
            </Button>
          </div>

          {/* Vision 2030 content */}
          {showVision2030 && (
            <div className={`max-w-5xl mx-auto mt-8 transition-all duration-700 ${showVision2030 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
              <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
                <CardContent className="p-8 md:p-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">EKORE DOMANI VUOLE:</h3>
                  <div className="space-y-6 text-muted-foreground">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">ELEVARE IL CONVERSATION LEVEL</h4>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Creare valore genuino prima ancora di vendere.</li>
                        <li>Sustainability-driven decisions: ESG compliance diventa decision criteria primario</li>
                        <li>L'SDR del futuro deve essere consulente strategico, non product pusher.</li>
                        <li>Non vende Digital Twin e data analisys AI come prodotto - diventa "Digital Transformation Partners" che co-creano il futuro energetico delle aziende italiane proponendo una  business transformation roadmap invece che semplici features.</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">Esempio</h4>
                      <p>
                        Prima di contattare Pirelli Real Estate, l'SDR studia il loro piano sustainability 2025, identifica gap specifici nei loro 150 asset immobiliari, prepara una "Carbon Footprint Reduction Simulation" personalizzata e si presenta come "Digital Twin Strategist", non venditore.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">CATEGORY EXPANSION: CREAZIONE DI NUOVI MERCATI</h4>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>
                          <span className="font-semibold">A. Insurance & Risk Management</span>
                          <div>"I vostri premi assicurativi su 200 edifici potrebbero ridursi del 15% con certificazione Digital Twin + predictive maintenance"</div>
                        </li>
                        <li>
                          <span className="font-semibold">B. Investment & Private Equity</span>
                          <div>"Il Digital Twin aumenta il valore degli asset del 8-12% in fase di exit - dovrebbe essere standard nelle diligence"</div>
                        </li>
                        <li>
                          <span className="font-semibold">C. Supply Chain Optimization</span>
                          <div>"Prevedere disruption energetiche significa supply chain resilience.''</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Scroll indicator removed as requested */}
        </div>
      </div>

      {/* Decorative grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(5,150,105,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(5,150,105,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
    </section>
  )
}
