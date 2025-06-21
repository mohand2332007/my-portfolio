import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Globe } from "lucide-react"

export function AchievementsSection() {
  const achievements = [
    {
      icon: <Trophy className="h-12 w-12 text-accent" />,
      title: "Fanni Mubtakir Competition",
      status: "Finalist",
    },
    {
      icon: <Globe className="h-12 w-12 text-primary" />,
      title: "IEEE competition (Tunisia)",
      status: "Qualified - Represented Egypt",
    },
    {
      icon: <Award className="h-12 w-12 text-accent" />,
      title: "ECPC",
      status: "Participated 3 times",
    },
  ]

  return (
    <section id="achievements" className="py-24 bg-pattern-dark relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Achievements</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center border-0 shadow-lg card-hover bg-white overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-6 animate-float">{achievement.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{achievement.title}</h3>
                  <Badge className="bg-primary text-white">{achievement.status}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider-reverse"></div>
    </section>
  )
}
