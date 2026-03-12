import { urlFor } from "@shared/lib/sanity"
import { Badge } from "@shared/ui/badge"
import { Button } from "@shared/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@shared/ui/card"
import { Box, Calendar, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import type { ExhibitionCardResult } from "../api/queries"

interface ExhibitionCardProps {
  exhibition: ExhibitionCardResult
}

export function ExhibitionCard({ exhibition }: ExhibitionCardProps) {
  const imageUrl = exhibition.coverImage
    ? urlFor(exhibition.coverImage).width(600).height(340).url()
    : null

  const formattedDate = exhibition.date
    ? new Date(exhibition.date).toLocaleDateString("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null

  return (
    <Card className="overflow-hidden pt-0 transition-all hover:shadow-lg">
      <div className="bg-muted aspect-video w-full overflow-hidden">
        {imageUrl && (
          <Image
            alt={exhibition.title ?? ""}
            className="h-full w-full object-cover transition-transform hover:scale-105"
            height={340}
            src={imageUrl}
            width={600}
          />
        )}
      </div>
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="line-clamp-2 leading-none">
            {exhibition.title}
          </CardTitle>
          {exhibition.hasAR && (
            <Badge className="shrink-0" variant="secondary">
              <Box className="mr-1 h-3 w-3" />
              AR
            </Badge>
          )}
        </div>
        <CardDescription>{exhibition.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="text-muted-foreground flex items-center gap-4 text-sm">
            {formattedDate && (
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {formattedDate}
              </span>
            )}
            <span className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              {exhibition.exhibitsCount} экспонатов
            </span>
          </div>
          <Button asChild size="sm">
            <Link href={`/exhibitions/${exhibition.slug}`}>Открыть</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
