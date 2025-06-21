import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Presentation } from "lucide-react"

export function PresentationBackup() {
  const slides = [
    { title: "Project Overview", description: "Introduction to Aqua Flow" },
    { title: "Problem Statement", description: "Water waste and safety issues" },
    { title: "Solution", description: "Smart faucet extension technology" },
    { title: "Features", description: "Temperature detection, flow control, mobile app" },
    { title: "Benefits", description: "Water conservation, child protection, elderly care" },
    { title: "Technical Details", description: "Components and implementation" },
    { title: "Market Analysis", description: "Target audience and competition" },
    { title: "Business Model", description: "Pricing and distribution strategy" },
    { title: "Team", description: "Project contributors and roles" },
    { title: "Future Plans", description: "Expansion and development roadmap" },
  ]

  return (
    <Card className="border-0 shadow-lg bg-white overflow-hidden mt-12">
      <div className="h-2 bg-accent"></div>
      <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
        <CardTitle className="flex items-center gap-2">
          <Presentation className="h-5 w-5 text-primary" />
          Project Presentation Overview
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-muted-foreground mb-6">
          This presentation covers the complete Aqua Flow project, from concept to implementation. The slides include
          technical details, market analysis, and future development plans.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {slides.map((slide, index) => (
            <div key={index} className="flex items-center gap-3 p-3 rounded-md bg-secondary/10">
              <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium">
                {index + 1}
              </div>
              <div>
                <h4 className="font-medium text-foreground">{slide.title}</h4>
                <p className="text-sm text-muted-foreground">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
