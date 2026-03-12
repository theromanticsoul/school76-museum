import type { Announcement } from "@shared/lib/sanity"

import { Badge } from "@shared/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@shared/ui/card"
import { Calendar, Pin } from "lucide-react"

const CATEGORY_LABELS: Record<NonNullable<Announcement["category"]>, string> = {
  contests: "Конкурсы",
  events: "Мероприятия",
  schedule: "Расписание",
  technical: "Технические",
  updates: "Обновления",
}

const PRIORITY_LABELS: Record<NonNullable<Announcement["priority"]>, string> = {
  important: "Важно",
  medium: "Средний",
  normal: "Обычный",
}

const PRIORITY_VARIANTS: Record<
  NonNullable<Announcement["priority"]>,
  "default" | "destructive" | "secondary"
> = {
  important: "destructive",
  medium: "default",
  normal: "secondary",
}

interface AnnouncementCardProps {
  announcement: Announcement
}

export function AnnouncementCard({ announcement }: AnnouncementCardProps) {
  const isPinned = announcement.isPinned

  const formattedDate = announcement.date
    ? new Date(announcement.date).toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null

  return (
    <Card className={isPinned ? "border-primary/50 bg-primary/5" : ""}>
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="mb-2 flex items-center gap-2">
              {isPinned && (
                <Pin className="fill-primary text-primary h-4 w-4" />
              )}
              <CardTitle className="text-lg">{announcement.title}</CardTitle>
            </div>
            <CardDescription className="flex items-center gap-4">
              {formattedDate && (
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {formattedDate}
                </span>
              )}
              {announcement.category && (
                <Badge variant="outline">
                  {CATEGORY_LABELS[announcement.category]}
                </Badge>
              )}
            </CardDescription>
          </div>
          {announcement.priority && (
            <Badge variant={PRIORITY_VARIANTS[announcement.priority]}>
              {PRIORITY_LABELS[announcement.priority]}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground whitespace-pre-line">
          {announcement.content}
        </p>
      </CardContent>
    </Card>
  )
}
