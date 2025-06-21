import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Smartphone, Search, TrendingUp, Palette, Database } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: <Code className="h-12 w-12" />,
      title: "Full-Stack Development",
      description: "Complete web applications using React, Laravel, Node.js, and modern technologies",
      features: ["Custom Web Applications", "API Development", "Database Design", "Performance Optimization"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Smartphone className="h-12 w-12" />,
      title: "Mobile Development",
      description: "Cross-platform mobile applications with native performance and user experience",
      features: ["React Native Apps", "Progressive Web Apps", "Mobile UI/UX", "App Store Deployment"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Search className="h-12 w-12" />,
      title: "SEO & Digital Marketing",
      description: "Strategic digital marketing campaigns that drive traffic and conversions",
      features: ["Search Engine Optimization", "Content Marketing", "Social Media Strategy", "Analytics & Reporting"],
      gradient: "from-green-500 to-teal-500",
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: "Meta Ads Management",
      description: "Professional Facebook and Instagram advertising campaigns for maximum ROI",
      features: ["Campaign Strategy", "Ad Creative Design", "Audience Targeting", "Performance Tracking"],
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: <Palette className="h-12 w-12" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that enhance user experience and engagement",
      features: ["User Interface Design", "User Experience Research", "Prototyping", "Design Systems"],
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: <Database className="h-12 w-12" />,
      title: "Technical Consulting",
      description: "Expert guidance on technology decisions and digital transformation strategies",
      features: ["Architecture Planning", "Technology Stack Selection", "Code Review", "Team Training"],
      gradient: "from-gray-600 to-gray-800",
    },
  ]

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 bg-white/80 backdrop-blur-sm overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 text-white">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
                <p className="text-xl mb-8 text-blue-100">Let's discuss how I can help bring your vision to life</p>
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Get Started Today
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
