import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

export function GallerySection() {
  const galleryImages = [
    {
      src: "/images/farouk-meeting.png",
      alt: "Meeting with Mohamed Farouk and Business Leaders",
      caption: "Meeting with Mohamed Farouk and prominent business leaders",
    },
    {
      src: "/images/ceo-seta.png",
      alt: "Meeting with CEO of Seta Inc",
      caption: "Pitched to investors and featured on ON TV",
    },
    {
      src: "/images/aqua-flow-exhibition.png",
      alt: "Aqua Flow Exhibition with Industry Leaders",
      caption: "Aqua Flow project showcase with industry professionals",
    },
    {
      src: "/images/gallery-tech-booth.png",
      alt: "Technology Showcase Booth",
      caption: "Technology showcase and innovation booth",
    },
  ]

  return (
    <section id="gallery" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Gallery - Public & Media Appearances</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">
              Meetings with industry leaders, investors, and media coverage
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {galleryImages.map((image, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg group card-hover">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white p-4 font-medium">{image.caption}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Creative Section */}
          <div className="mt-16">
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">Media Recognition</h3>
                <p className="text-muted-foreground mb-6">
                  Aqua Flow project has gained significant attention from investors, industry leaders, and media outlets
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Badge className="bg-primary text-white">Investor Pitch</Badge>
                  <Badge className="bg-accent text-white">ON TV Feature</Badge>
                  <Badge className="bg-primary/80 text-white">Industry Recognition</Badge>
                  <Badge className="bg-accent/80 text-white">Business Networking</Badge>
                </div>
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
