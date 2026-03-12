import { getSchoolInfo } from "@entities/school-info"
import { PortableText } from "@portabletext/react"
import { Card, CardContent } from "@shared/ui/card"

export async function Page() {
  const schoolInfo = await getSchoolInfo()

  return (
    <main className="container mx-auto px-4 py-8 md:px-6">
      <div className="space-y-6">
        <div>
          <h1 className="mb-2 text-4xl font-bold">О школе</h1>
          <p className="text-muted-foreground">
            МАОУ СОШ 76 — Виртуальный музей
          </p>
        </div>
        <Card>
          <CardContent className="pt-6">
            {schoolInfo?.content ? (
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <PortableText value={schoolInfo.content} />
              </div>
            ) : (
              <p className="text-muted-foreground">
                Информация пока не добавлена.
              </p>
            )}
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
