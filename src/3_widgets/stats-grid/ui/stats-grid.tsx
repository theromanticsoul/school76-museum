import { Card, CardContent } from "@shared/ui/card"
import { Award, BookOpen, Sparkles, Users } from "lucide-react"

interface StatsGridProps {
  exhibitionsCount: number
  exhibitsCount: number
}

export function StatsGrid({ exhibitionsCount, exhibitsCount }: StatsGridProps) {
  const stats = [
    { icon: BookOpen, label: "Выставки", value: exhibitionsCount },
    { icon: Sparkles, label: "Экспонатов", value: exhibitsCount },
    { icon: Users, label: "Посетителей", value: "850+" },
    { icon: Award, label: "AR-выставки", value: exhibitionsCount },
  ]

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.label}>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                <stat.icon className="text-primary h-6 w-6" />
              </div>
              <div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-muted-foreground text-sm">
                  {stat.label}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
