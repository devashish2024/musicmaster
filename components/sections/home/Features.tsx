import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function Features() {
  const features = [
    {
      title: "Customised Learning",
      description: "Learn to play your favourite songs, be it classical or film, the choice is yours.",
      image: "/img/features/customized.png"
    },
    {
      title: "100% Verified Tutors",
      description: "Learn from tutors who love teaching and are thoroughly vetted.",
      image: "/img/features/verified.png"
    },
    {
      title: "Convenience",
      description: "No travel, go at your own pace. All at the comfort of your home.",
      image: "/img/features/anywhere.png"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12">
        Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="flex flex-col items-center text-center">
            <CardHeader>
              <div className="w-40 h-40 relative mb-4">
                <Image
                  src={feature.image}
                  alt={feature.title}
                />
              </div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
