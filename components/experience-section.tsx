import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Database, Users } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      icon: <Building className="h-10 w-10 text-primary" />,
      title: "Marketer",
      company: "ElSif Company for Real Estate",
      description: "Digital marketing strategies for real estate sector",
    },
    {
      icon: <Database className="h-10 w-10 text-primary" />,
      title: "Data Entry",
      company: "ElAmeed Company",
      description: "Data management and processing operations",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Team Leader",
      company: "Freelance Digital Marketing Team",
      description: "Leading a team of digital marketing professionals",
    },
  ]

  return (
    <section id="experience" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg card-hover bg-gradient-to-br from-white to-secondary/10 overflow-hidden"
              >
                <div className="h-2 bg-primary"></div>
                <CardHeader className="pt-8">
                  <div className="mb-4">{exp.icon}</div>
                  <CardTitle className="text-xl">{exp.title}</CardTitle>
                  <div className="text-lg text-accent font-medium">{exp.company}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider"></div>
    </section>
  )
}
