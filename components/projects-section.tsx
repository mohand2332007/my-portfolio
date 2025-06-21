import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Droplets, Smartphone, Shield, Users, ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function ProjectsSection() {
  const features = [
    {
      icon: <Droplets className="h-6 w-6" />,
      title: "Smart Water Control",
      description: "Intelligent water amount monitoring and control system",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Integration",
      description: "Complete control via dedicated mobile application",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Safety Features",
      description: "Temperature detection and automatic safety alerts",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Accessibility Focus",
      description: "Designed for elderly care and Alzheimer's support",
    },
  ]

  const technologies = [
    "IoT Development",
    "Mobile App",
    "Temperature Sensors",
    "Water Flow Control",
    "Alert System",
    "User Interface",
    "Hardware Integration",
    "Real-time Monitoring",
  ]

  return (
    <section id="projects" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Featured Project</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Innovative solutions that make a real-world impact
            </p>
          </div>

          {/* Main Project Card */}
          <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-white to-gray-50">
            {/* Project Header */}
            <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                <div>
                  <CardTitle className="text-4xl font-bold mb-4">Aqua Flow</CardTitle>
                  <CardDescription className="text-xl text-blue-100 mb-4">
                    Smart Faucet Extension for Water Conservation & Safety
                  </CardDescription>
                  <div className="flex flex-wrap gap-3">
                    <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">IoT Project</Badge>
                    <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">Fully Developed</Badge>
                    <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">Award Winner</Badge>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                    <Github className="mr-2 h-5 w-5" />
                    Source Code
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent className="p-12">
              {/* Project Overview */}
              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Project Overview</h3>
                  <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                    <p>
                      Aqua Flow represents a breakthrough in smart home technology, combining IoT innovation with
                      practical water conservation solutions. This intelligent faucet extension revolutionizes how we
                      interact with water in our daily lives.
                    </p>
                    <p>
                      The system features advanced sensors for temperature detection, flow control mechanisms, and a
                      comprehensive mobile application that provides real-time monitoring and control capabilities.
                    </p>
                    <p>
                      Designed with accessibility in mind, Aqua Flow serves as an assistive technology for elderly users
                      and provides crucial support for Alzheimer's care, making it both innovative and socially
                      impactful.
                    </p>
                  </div>

                  <div className="mt-8">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Impact Areas:</h4>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                        Water conservation through intelligent monitoring
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 bg-blue-500 rounded-full mr-4"></div>
                        Enhanced safety for children and elderly users
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 bg-purple-500 rounded-full mr-4"></div>
                        Assistive technology for special needs care
                      </li>
                      <li className="flex items-center">
                        <div className="w-3 h-3 bg-orange-500 rounded-full mr-4"></div>
                        Smart home integration capabilities
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="relative group">
                    <Image
                      src="/images/aqua-flow-3d.png"
                      alt="Aqua Flow 3D Model"
                      width={500}
                      height={400}
                      className="rounded-2xl shadow-xl w-full group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>

              {/* Features Grid */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Core Features</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {features.map((feature, index) => (
                    <Card
                      key={index}
                      className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50"
                    >
                      <CardContent className="p-8 text-center">
                        <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                          {feature.icon}
                        </div>
                        <h4 className="font-bold text-lg text-gray-900 mb-3">{feature.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Technology Stack */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technologies Used</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-sm py-3 px-6 bg-gradient-to-r from-blue-50 to-purple-50 text-gray-700 hover:from-blue-100 hover:to-purple-100 transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Project Images */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative group">
                  <Image
                    src="/images/aqua-flow-prototype.png"
                    alt="Aqua Flow Prototype"
                    width={500}
                    height={400}
                    className="rounded-2xl shadow-xl w-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-6 font-semibold">Working Prototype</p>
                  </div>
                </div>
                <div className="relative group">
                  <Image
                    src="/images/aqua-flow-electronics.png"
                    alt="Aqua Flow Electronics"
                    width={500}
                    height={400}
                    className="rounded-2xl shadow-xl w-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-6 font-semibold">Electronic Components</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
