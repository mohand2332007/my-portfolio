import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Droplets, Shield, Smartphone, Users, Presentation, Award } from "lucide-react"
import { PresentationBackup } from "@/components/presentation-backup"

export function ProjectSection() {
  const features = [
    {
      icon: <Droplets className="h-6 w-6 text-primary" />,
      title: "Water Conservation",
      description: "Helps in water conservation",
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Child Protection",
      description: "Protecting children",
    },
    {
      icon: <Smartphone className="h-6 w-6 text-primary" />,
      title: "Mobile Control",
      description: "Controllable via mobile app",
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Elderly Care",
      description: "Assisting the elderly and supporting Alzheimer's care",
    },
  ]

  return (
    <section id="project" className="py-24 bg-pattern-dark relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Project</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">Award-winning innovation that caught investors' attention</p>
          </div>

          <Card className="overflow-hidden border-0 shadow-xl bg-white">
            <CardHeader className="bg-gradient-to-r from-primary to-accent text-white p-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <CardTitle className="text-3xl mb-2 flex items-center gap-3">
                    Aqua Flow
                    <Award className="h-8 w-8" />
                  </CardTitle>
                  <CardDescription className="text-primary-foreground/90 text-lg">
                    A smart faucet extension that controls water amount, detects temperature, sends alerts if left on,
                    and is controllable via a mobile app.
                  </CardDescription>
                </div>
                <div className="flex flex-col gap-2">
                  <Badge className="bg-white/20 text-white hover:bg-white/30 transition-colors">
                    Group Project - Fully Developed
                  </Badge>
                  <Badge className="bg-white/20 text-white hover:bg-white/30 transition-colors">Investor Pitched</Badge>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-8">
              {/* Recognition Banner */}
              <div className="mb-12">
                <Card className="bg-gradient-to-r from-accent/10 to-primary/10 border-0">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2">🏆 Project Recognition</h3>
                    <p className="text-muted-foreground">
                      Successfully pitched to investors and featured on ON TV, gaining significant industry attention
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-6">Project Benefits</h3>
                  <div className="grid grid-cols-1 gap-6">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 rounded-lg bg-secondary/10 hover:bg-secondary/20 transition-colors"
                      >
                        <div className="mt-1">{feature.icon}</div>
                        <div>
                          <h4 className="font-semibold text-foreground">{feature.title}</h4>
                          <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="relative rounded-lg overflow-hidden shadow-lg border-2 border-secondary">
                    <Image
                      src="/images/aqua-flow-3d-new.png"
                      alt="Aqua Flow 3D Model"
                      width={500}
                      height={400}
                      className="w-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-primary">3D Model</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="relative rounded-lg overflow-hidden shadow-lg border-2 border-secondary group">
                  <Image
                    src="/images/aqua-flow-prototype-new.png"
                    alt="Aqua Flow Prototype"
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 font-medium">Working Prototype</p>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-primary">Prototype</Badge>
                  </div>
                </div>

                <div className="relative rounded-lg overflow-hidden shadow-lg border-2 border-secondary group">
                  <Image
                    src="/images/aqua-flow-electronics-new.png"
                    alt="Aqua Flow Electronics"
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 font-medium">Electronic Components</p>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-primary">Electronics</Badge>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">
                  Mobile Application Interface
                </h3>
                <div className="flex justify-center mb-8">
                  <Image
                    src="/images/aqua-flow-app.png"
                    alt="Aqua Flow Mobile App Interface"
                    width={800}
                    height={500}
                    className="rounded-lg shadow-lg border-2 border-secondary max-w-full h-auto"
                  />
                </div>

                <div className="text-center flex gap-4 justify-center flex-wrap">
                  <Button
                    variant="outline"
                    className="border-2 border-primary text-primary hover:bg-primary/10"
                    asChild
                  >
                    <a
                      href="https://docs.google.com/presentation/d/e/2PACX-1vTOeujUl4T5fYb5kmVTmCgSiXq3wJwK-s-xjIG5Vp-GP1RJZLBA7i_H1SqTQex1uA/pub?start=false&loop=false&delayms=3000"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Presentation className="mr-2 h-4 w-4" />
                      View Presentation
                    </a>
                  </Button>
                </div>
              </div>

              <PresentationBackup />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider-reverse"></div>
    </section>
  )
}
