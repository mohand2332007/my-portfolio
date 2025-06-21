import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 bg-pattern overflow-hidden">
      <div className="container mx-auto px-6 relative">
        {/* Enhanced Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-pulse"></div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></div>
                Full-Stack Developer & Digital Marketer
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Creating <span className="gradient-text">Impactful</span> Digital Solutions
              </h1>

              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
                Blends development and marketing to deliver powerful, results-driven digital solutions. Based in
                Alexandria, Egypt.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Hire Me
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-secondary text-foreground hover:bg-secondary/20 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Play className="mr-2 h-5 w-5" />
                  View Projects
                </Button>
              </div>

              {/* Updated Stats Section */}
              <div className="mt-12 grid grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">2 Years</div>
                  <div className="text-sm text-muted-foreground">Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">WE Alex</div>
                  <div className="text-sm text-muted-foreground">For ATS</div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                {/* Enhanced Image frame with animated border */}
                <div className="animated-border p-1">
                  <div className="bg-white p-3 rounded-lg">
                    <img
                      src="/images/mohhand-photo-updated.png"
                      alt="Mohhand Mohamed Abdo"
                      className="w-96 h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>

                {/* Enhanced Decorative elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>

                {/* Floating badges */}
                <div className="absolute -top-4 -left-4 bg-white shadow-lg rounded-full p-3 animate-pulse">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white shadow-lg rounded-full p-3 animate-pulse">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
