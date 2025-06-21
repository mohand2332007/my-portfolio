import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  const skills = [
    "React",
    "PHP",
    "MySQL",
    "Laravel",
    "Python",
    "Node.js",
    "SEO",
    "Meta Ads",
    "Microsoft Office",
    "AutoCAD",
    "Designing",
  ]

  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <Card className="mb-12 border-0 shadow-lg card-hover bg-gradient-to-br from-white to-secondary/10">
            <CardContent className="p-8">
              <p className="text-lg text-foreground/90 leading-relaxed text-center">
                Blends development and marketing to deliver powerful, results-driven digital solutions.
              </p>
            </CardContent>
          </Card>

          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-8">Technical Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  className="text-sm py-2 px-4 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider"></div>
    </section>
  )
}
