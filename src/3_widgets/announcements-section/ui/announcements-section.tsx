import type { Announcement } from "@shared/lib/sanity"

import { AnnouncementCard } from "@entities/announcement"
import Link from "next/link"

interface AnnouncementsSectionProps {
  announcements: Announcement[]
}

export function AnnouncementsSection({
  announcements,
}: AnnouncementsSectionProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Последние объявления</h2>
        <Link
          className="text-primary text-sm hover:underline"
          href="/announcements"
        >
          Все объявления
        </Link>
      </div>
      <div className="space-y-4">
        {announcements.map((announcement, index) => (
          <AnnouncementCard
            announcement={announcement}
            key={announcement._id}
          />
        ))}
      </div>
    </div>
  )
}
