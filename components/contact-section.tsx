import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react"

export function ContactSection() {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      label: "Email",
      value: "mohandsolo38@gmail.com",
      href: "mailto:mohandsolo38@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      label: "Phone",
      value: "+20 1069863982",
      href: "tel:+201069863982",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      label: "Location",
      value: "Alexandria, Egypt (flexible to travel)",
      href: null,
    },
    {
      icon: <Linkedin className="h-6 w-6 text-primary" />,
      label: "LinkedIn",
      value: "mohand-abdo-linkedeffe233",
      href: "https://www.linkedin.com/in/mohand-abdo-linkedeffe233/",
    },
    {
      icon: <Github className="h-6 w-6 text-primary" />,
      label: "GitHub",
      value: "mohand233",
      href: "https://github.com/mohand233",
    },
  ]

  return (
    <section id="contact" className="py-24 bg-pattern-dark relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg card-hover bg-white overflow-hidden">
              <div className="h-2 bg-primary"></div>
              <CardHeader>
                <CardTitle className="text-2xl">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                      {contact.icon}
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{contact.label}</div>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                          target={contact.href.startsWith("http") ? "_blank" : undefined}
                          rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        >
                          {contact.value}
                          {contact.href.startsWith("http") && <ExternalLink className="h-3 w-3" />}
                        </a>
                      ) : (
                        <div className="text-muted-foreground">{contact.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg card-hover bg-white overflow-hidden">
              <div className="h-2 bg-accent"></div>
              <CardHeader>
                <CardTitle className="text-2xl">Certificates</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-8">
                  View my complete collection of certificates and additional portfolio materials.
                </p>
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <a
                    href="https://drive.google.com/drive/folders/1ZLAwrcuNwI3LW8K9aOfWg5errHLJ-GV8?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    View Certificates
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <footer className="mt-16 pt-8 border-t border-primary/10 text-center text-muted-foreground">
        <div className="container mx-auto px-6">
          <p>&copy; 2024 Mohhand Mohamed Abdo. All rights reserved.</p>
        </div>
      </footer>
    </section>
  )
}
