import { AnnouncementCard, getAnnouncements } from "@entities/announcement"

export async function Page() {
  const announcements = await getAnnouncements()

  return (
    <main className="container mx-auto px-4 py-8 md:px-6">
      <div className="space-y-6">
        <div>
          <h1 className="mb-2 text-4xl font-bold">Доска объявлений</h1>
          <p className="text-muted-foreground">
            Актуальная информация о мероприятиях и новостях музея
          </p>
        </div>
        <div className="space-y-4">
          {announcements.map((announcement) => (
            <AnnouncementCard
              announcement={announcement}
              key={announcement._id}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
