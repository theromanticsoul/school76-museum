import { getExhibitionBySlug, getExhibitions } from "@entities/exhibition"
import { PortableText } from "@portabletext/react"
import { urlFor } from "@shared/lib/sanity"
import { Button } from "@shared/ui/button"
import { Card, CardContent } from "@shared/ui/card"
import { ExhibitionGallery } from "@widgets/exhibition-gallery"
import { ArrowLeftIcon, BoxIcon, CalendarIcon, UserIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const exhibitions = await getExhibitions()
  return exhibitions.map((e) => ({ slug: e.slug }))
}

export async function Page({ params }: Props) {
  const { slug } = await params
  const exhibition = await getExhibitionBySlug(slug)

  if (!exhibition) notFound()

  const coverUrl = exhibition.coverImage
    ? urlFor(exhibition.coverImage).width(1200).height(400).url()
    : null

  const exhibits = exhibition.exhibits ?? []

  return (
    <main className="container mx-auto px-4 py-8 md:px-6">
      <div className="space-y-6">
        <Button asChild className="gap-2" variant="ghost">
          <Link href="/exhibitions">
            <ArrowLeftIcon className="h-4 w-4" />
            Назад к выставкам
          </Link>
        </Button>

        {/* Hero */}
        <div className="relative h-100 w-full overflow-hidden rounded-lg">
          {coverUrl && (
            <Image
              alt={exhibition.title ?? ""}
              className="object-cover"
              fill
              priority
              src={coverUrl}
            />
          )}
          <div className="from-background via-background/50 absolute inset-0 bg-linear-to-t to-transparent" />
          <div className="absolute right-0 bottom-0 left-0 p-8">
            <h1 className="mb-4 text-4xl font-bold">{exhibition.title}</h1>
            <div className="text-muted-foreground flex flex-wrap items-center gap-4 text-sm">
              {exhibition.date && (
                <span className="flex items-center gap-1">
                  <CalendarIcon className="h-4 w-4" />
                  {new Date(exhibition.date).toLocaleDateString("ru-RU", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              )}
              {exhibition.curator && (
                <span className="flex items-center gap-1">
                  <UserIcon className="h-4 w-4" />
                  {exhibition.curator}
                </span>
              )}
              <span className="flex items-center gap-1">
                <BoxIcon className="h-4 w-4" />
                {exhibits.length} экспонатов
              </span>
            </div>
          </div>
        </div>

        {/* Описание */}
        {exhibition.description && (
          <Card className="pt-0">
            <CardContent className="pt-6">
              <h3 className="mb-4 text-xl font-semibold">Описание выставки</h3>
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <PortableText value={exhibition.description} />
              </div>
            </CardContent>
          </Card>
        )}

        {/* Галерея */}
        {exhibits.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Экспонаты</h3>
            <ExhibitionGallery exhibits={exhibits} />
          </div>
        )}
      </div>
    </main>
  )
}
