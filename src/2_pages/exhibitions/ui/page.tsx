import { ExhibitionCard, getExhibitions } from "@entities/exhibition"

export async function Page() {
  const exhibitions = await getExhibitions()

  return (
    <main className="container mx-auto px-4 py-8 md:px-6">
      <div className="space-y-6">
        <div>
          <h1 className="mb-2 text-4xl font-bold">Все выставки</h1>
          <p className="text-muted-foreground">
            Выберите выставку для просмотра экспонатов в AR-режиме
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {exhibitions.map((exhibition) => (
            <ExhibitionCard exhibition={exhibition} key={exhibition._id} />
          ))}
        </div>
      </div>
    </main>
  )
}
