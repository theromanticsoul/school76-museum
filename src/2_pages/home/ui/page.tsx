import { getLatestAnnouncements } from "@entities/announcement"
import { getLatestExhibitions } from "@entities/exhibition"
import { AnnouncementsSection } from "@widgets/announcements-section"
import { ExhibitionsSection } from "@widgets/exhibitions-section"
import { HeroBanner } from "@widgets/hero-banner"
import { StatsGrid } from "@widgets/stats-grid"

export async function Page() {
  const [exhibitions, announcements] = await Promise.all([
    getLatestExhibitions(3),
    getLatestAnnouncements(3),
  ])

  const totalExhibits = exhibitions.reduce((sum, e) => sum + e.exhibitsCount, 0)

  return (
    <main className="container mx-auto px-4 py-8 md:px-6">
      <div className="space-y-12">
        <HeroBanner />

        <div className="space-y-4 py-12 text-center">
          <h1 className="text-4xl font-bold md:text-5xl">
            Виртуальный музей МАОУ СОШ 76
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
            Исследуйте виртуальные выставки с AR-технологиями и погрузитесь в
            мир знаний
          </p>
        </div>

        <StatsGrid
          exhibitionsCount={exhibitions.length}
          exhibitsCount={totalExhibits}
        />

        <ExhibitionsSection exhibitions={exhibitions} />
        <AnnouncementsSection announcements={announcements} />
      </div>
    </main>
  )
}
