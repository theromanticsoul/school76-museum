// entities/announcement/model/queries.ts
import { type Announcement, sanity } from "@shared/lib/sanity"

export async function getAnnouncements(): Promise<Announcement[]> {
  return sanity.fetch(`
    *[_type == "announcement"] | order(isPinned desc, date desc) {
      _id,
      title,
      content,
      date,
      category,
      priority,
      isPinned
    }
  `)
}

export async function getLatestAnnouncements(
  limit = 3,
): Promise<Announcement[]> {
  return sanity.fetch(
    `*[_type == "announcement"] | order(isPinned desc, date desc) [0...$limit] {
      _id,
      title,
      content,
      date,
      category,
      priority,
      isPinned
    }`,
    { limit },
  )
}
