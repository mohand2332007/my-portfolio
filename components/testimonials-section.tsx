import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ahmed Hassan",
      role: "CEO, ElSif Real Estate",
      content:
        "Mohhand transformed our digital presence completely. His strategic approach to digital marketing increased our leads by 150% within just 6 months. His technical expertise combined with marketing insight is truly exceptional.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Dr. Sarah Mohamed",
      role: "Innovation Judge, Fanni Mubtakir",
      content:
        "The Aqua Flow project showcased remarkable innovation and practical application. Mohhand's ability to identify real-world problems and create technical solutions is impressive. A true problem-solver.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Omar Khaled",
      role: "Team Member, IEEE Competition",
      content:
        "Working with Mohhand on international competitions was inspiring. His leadership skills and technical knowledge helped our team represent Egypt with pride. He's a natural leader and innovator.",
      rating: 5,
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">What People Say</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Testimonials from clients, colleagues, and industry professionals
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-0 bg-white/80 backdrop-blur-sm relative overflow-hidden"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-blue-200 group-hover:text-blue-300 transition-colors">
                  <Quote className="h-8 w-8" />
                </div>

                <CardContent className="p-8">
                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 leading-relaxed mb-8 text-lg italic">"{testimonial.content}"</p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-600 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
