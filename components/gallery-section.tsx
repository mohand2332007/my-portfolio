import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { Camera, Star, Award, Tv, Building, Users } from "lucide-react"

export function GallerySection() {
  const galleryImages = [
    {
      src: "/images/farouk-meeting.png",
      alt: "Meeting with Mohamed Farouk and Business Leaders",
      caption: "Meeting with Mohamed Farouk and prominent business leaders",
      icon: <Users className="h-5 w-5" />,
      category: "Business Meeting",
      color: "from-blue-500 to-purple-600",
      featured: true,
    },
    {
      src: "/images/ceo-seta.png",
      alt: "Meeting with CEO of Seta Inc",
      caption: "Pitched to investors and featured on ON TV",
      icon: <Building className="h-5 w-5" />,
      category: "Investor Pitch",
      color: "from-green-500 to-teal-600",
      featured: false,
    },
    {
      src: "/images/on-tv-presentation.png",
      alt: "ON TV Presentation - Aqua Flow Project",
      caption: "Pitched to investors and featured on ON TV",
      icon: <Tv className="h-5 w-5" />,
      category: "Media Coverage",
      color: "from-red-500 to-pink-600",
      featured: true,
    },
    {
      src: "/images/tv-studio-appearance.jpg",
      alt: "TV Studio Appearance - WE Schools Tech Show",
      caption: "Showcased innovative tech solutions at EdU Tech through a dedicated booth",
      icon: <Tv className="h-5 w-5" />,
      category: "TV Appearance",
      color: "from-purple-500 to-indigo-600",
      featured: false,
    },
    {
      src: "/images/aqua-flow-exhibition.png",
      alt: "Aqua Flow Exhibition with Industry Leaders",
      caption: "Aqua Flow project showcase with industry professionals",
      icon: <Award className="h-5 w-5" />,
      category: "Project Showcase",
      color: "from-orange-500 to-yellow-600",
      featured: false,
    },
    {
      src: "/images/we-tech-showcase.png",
      alt: "WE Technology Showcase at EdU Tech",
      caption: "Showcased innovative tech solutions at EdU Tech through a dedicated booth",
      icon: <Star className="h-5 w-5" />,
      category: "Tech Exhibition",
      color: "from-indigo-500 to-blue-600",
      featured: false,
    },
  ]

  return (
    <section
      id="gallery"
      className="py-16 sm:py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/5 to-blue-600/5 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 text-primary rounded-full text-sm font-medium mb-8 shadow-lg">
              <Camera className="h-5 w-5" />
              <span className="font-semibold">Gallery Showcase</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              Media & Professional
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl">Appearances</span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Showcasing innovation through industry meetings, investor presentations, and media coverage
            </p>
          </div>

          {/* Creative Masonry-Style Layout */}
          <div className="space-y-8">
            {/* First Row - Featured Images */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Large Featured Image */}
              <div className="lg:col-span-2">
                <Card className="group relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-3 bg-white">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                    {/* Enhanced Badge */}
                    <div className="absolute top-6 left-6 z-20">
                      <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 shadow-xl px-4 py-2 text-sm font-semibold">
                        <Users className="h-4 w-4 mr-2" />
                        Featured
                      </Badge>
                    </div>

                    <div className="relative overflow-hidden">
                      <Image
                        src={galleryImages[0].src || "/placeholder.svg"}
                        alt={galleryImages[0].alt}
                        width={800}
                        height={500}
                        className="w-full h-64 sm:h-80 lg:h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>

                    {/* Enhanced Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end z-20">
                      <div className="p-8 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="font-bold text-2xl mb-3">{galleryImages[0].caption}</h3>
                        <div className="flex items-center gap-2 text-sm opacity-90">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          Professional Achievement
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Side Images Stack */}
              <div className="space-y-6">
                {galleryImages.slice(1, 3).map((image, index) => (
                  <Card
                    key={index + 1}
                    className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white"
                  >
                    <div className="relative">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${image.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10`}
                      ></div>

                      <div className="absolute top-4 left-4 z-20">
                        <Badge
                          className={`bg-gradient-to-r ${image.color} text-white border-0 shadow-lg px-3 py-1 text-xs`}
                        >
                          <span className="mr-1">{image.icon}</span>
                          {image.category}
                        </Badge>
                      </div>

                      <div className="relative overflow-hidden">
                        <Image
                          src={image.src || "/placeholder.svg"}
                          alt={image.alt}
                          width={400}
                          height={300}
                          className="w-full h-40 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end z-20">
                        <div className="p-4 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                          <p className="font-semibold text-sm mb-1">{image.caption}</p>
                          <div className="flex items-center gap-1 text-xs opacity-90">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            Professional Achievement
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Second Row - Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.slice(3).map((image, index) => (
                <Card
                  key={index + 3}
                  className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white"
                >
                  <div className="relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${image.color} opacity-0 group-hover:opacity-25 transition-opacity duration-500 z-10`}
                    ></div>

                    {/* Floating Badge */}
                    <div className="absolute top-4 left-4 z-20">
                      <Badge
                        className={`bg-gradient-to-r ${image.color} text-white border-0 shadow-lg px-3 py-2 text-sm font-medium`}
                      >
                        <span className="mr-2">{image.icon}</span>
                        {image.category}
                      </Badge>
                    </div>

                    <div className="relative overflow-hidden">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        width={500}
                        height={400}
                        className="w-full h-56 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>

                    {/* Enhanced Hover Content */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end z-20">
                      <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 w-full">
                        <h4 className="font-bold text-lg mb-2">{image.caption}</h4>
                        <div className="flex items-center gap-2 text-sm opacity-90">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                          Professional Achievement
                        </div>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div
                      className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${image.color} opacity-10 group-hover:opacity-30 transition-opacity duration-500`}
                    ></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Enhanced Stats Section */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-white via-blue-50 to-purple-50 border-0 shadow-xl overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Media Recognition</h3>
                    <p className="text-gray-600">Industry Impact</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Aqua Flow project has gained significant attention from investors, industry leaders, and media
                  outlets, showcasing innovation in smart technology solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-white via-purple-50 to-pink-50 border-0 shadow-xl overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600"></div>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl shadow-lg">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Professional Network</h3>
                    <p className="text-gray-600">Industry Connections</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Building strong connections with business leaders, investors, and industry professionals through
                  innovative project presentations and technology showcases.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider"></div>
    </section>
  )
}
