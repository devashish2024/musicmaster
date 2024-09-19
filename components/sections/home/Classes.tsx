import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

const classes = [
  { name: 'Guitar', icon: '/img/classes/guitar.png' },
  { name: 'Carnatic', icon: '/img/classes/carnatic.png' },
  { name: 'Hindustani', icon: '/img/classes/hindustani.png' },
  { name: 'Western', icon: '/img/classes/western.png' },
  { name: 'Piano', icon: '/img/classes/piano.png' },
  { name: 'Flute', icon: '/img/classes/flute.png' },
  { name: 'Violin', icon: '/img/classes/violin.png' },
  { name: 'Ukulele', icon: '/img/classes/ukulele.png' },
  { name: 'Drums', icon: '/img/classes/drums.png' },
  { name: 'Trinity', icon: '/img/classes/trinity.png' },
  { name: 'ABRSM', icon: '/img/classes/abrsm.png' },
  { name: 'Rockschool', icon: '/img/classes/rockschool.png' },
]

export default function Classes() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 text-center mb-12">
          Explore Classes & Grade Exams
        </h2>
        <Card className="bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/50">
          <CardContent className="p-6">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
              {classes.slice(0, 6).map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-primary/10 rounded-full p-4 mb-3 w-20 h-20 flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-foreground text-center">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mt-6">
              {classes.slice(6).map((item, index) => (
                <div key={index + 6} className="flex flex-col items-center">
                  <div className="bg-primary/10 rounded-full p-4 mb-3 w-20 h-20 flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-foreground text-center">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
