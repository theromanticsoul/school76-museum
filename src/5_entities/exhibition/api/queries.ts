import { type Exhibition, sanity } from "@shared/lib/sanity"

// Для карточек на /exhibitions и главной
export type ExhibitionCardResult = Pick<
  Exhibition,
  "_id" | "coverImage" | "curator" | "date" | "description" | "hasAR" | "title"
> & {
  exhibitsCount: number
  slug: string
}

// Для страницы /exhibitions/[slug] — с экспонатами
export type ExhibitionDetailResult = Pick<
  Exhibition,
  "_id" | "coverImage" | "curator" | "date" | "description" | "hasAR" | "title"
> & {
  exhibits: Array<{
    _id: string
    arModelUrl?: string
    description?: string
    image: Exhibition["coverImage"]
    positionX?: number
    positionY?: number
    title: string
  }>
  slug: string
}

export async function getExhibitionBySlug(
  slug: string,
): Promise<ExhibitionDetailResult | null> {
  return sanity.fetch(
    `*[_type == "exhibition" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      description,
      coverImage,
      date,
      curator,
      hasAR,
      "exhibits": exhibits[]-> {
        _id,
        title,
        description,
        image,
        arModelUrl,
        positionX,
        positionY
      }
    }`,
    { slug },
  )
}

export async function getExhibitions(): Promise<ExhibitionCardResult[]> {
  return sanity.fetch(`
    *[_type == "exhibition"] | order(date desc) {
      _id,
      title,
      "slug": slug.current,
      coverImage,
      date,
      curator,
      hasAR,
      "exhibitsCount": count(exhibits)
    }
  `)
}

export async function getLatestExhibitions(
  limit = 3,
): Promise<ExhibitionCardResult[]> {
  return sanity.fetch(
    `*[_type == "exhibition"] | order(date desc) [0...$limit] {
      _id,
      title,
      "slug": slug.current,
      coverImage,
      description,
      date,
      hasAR,
      "exhibitsCount": count(exhibits)
    }`,
    { limit },
  )
}
