import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Code, Wrench, BookOpen } from "lucide-react"

export function EducationSection() {
  const skills = [
    "Programming",
    "Engineering Fundamentals",
    "Applied Technology",
    "Software Development",
    "Problem Solving",
    "Technical Design",
    "System Analysis",
    "Project Management",
  ]

  return (
    <section id="education" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Education</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white to-primary/5">
            <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
            <CardHeader className="pb-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <GraduationCap className="h-12 w-12 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-3xl text-foreground">WE School (ATS)</CardTitle>
                  <p className="text-xl text-accent font-medium">Applied Technology School</p>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-8 pt-0">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                    <BookOpen className="h-6 w-6 text-primary" />
                    Academic Focus
                  </h3>
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-secondary/10 border-l-4 border-primary">
                      <h4 className="font-semibold text-foreground mb-2">Engineering Subjects</h4>
                      <p className="text-muted-foreground">
                        Comprehensive study of engineering fundamentals, technical principles, and applied sciences
                      </p>
                    </div>
                    <div className="p-4 rounded-lg bg-accent/10 border-l-4 border-accent">
                      <h4 className="font-semibold text-foreground mb-2">Programming Specialization</h4>
                      <p className="text-muted-foreground">
                        Academic specialization in programming with focus on software development and technical
                        implementation
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                    <Code className="h-6 w-6 text-primary" />
                    Skills Developed
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {skills.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-sm py-2 px-3 bg-gradient-to-r from-primary/10 to-accent/10 text-foreground hover:from-primary/20 hover:to-accent/20 transition-all duration-300 justify-center"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-8 p-6 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20">
                    <div className="flex items-center gap-3 mb-3">
                      <Wrench className="h-6 w-6 text-primary" />
                      <h4 className="font-semibold text-foreground">Applied Technology Focus</h4>
                    </div>
                    <p className="text-muted-foreground">
                      The Applied Technology School (ATS) program combines theoretical knowledge with practical
                      application, preparing students for real-world engineering and programming challenges.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider"></div>
    </section>
  )
}
