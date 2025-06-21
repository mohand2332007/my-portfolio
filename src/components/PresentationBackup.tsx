import type React from "react"

interface Slide {
  title: string
  description: string
}

interface PresentationProps {
  slides: Slide[]
}

const PresentationBackup: React.FC<PresentationProps> = ({ slides }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {slides.map((slide, index) => (
          <div key={index} className="flex items-center gap-3 p-3 rounded-md bg-secondary/10">
            <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium">
              {index + 1}
            </div>
            <div>
              <h4 className="font-medium text-foreground">{slide.title}</h4>
              <p className="text-sm text-muted-foreground">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PresentationBackup
