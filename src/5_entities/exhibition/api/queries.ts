import { type Exhibition, sanity } from "@shared/lib/sanity"

export type ExhibitionCardResult = Pick<
  Exhibition,
  | "_id"
  | "coverImage"
  | "curator"
  | "date"
  | "hasAR"
  | "shortDescription"
  | "title"
> & {
  exhibitsCount: number
  slug: string
}

export type ExhibitionDetailResult = Pick<
  Exhibition,
  "_id" | "coverImage" | "curator" | "date" | "description" | "hasAR" | "title"
> & {
  exhibits: Array<{
    _id: string
    description?: string
    model?: {
      asset?: {
        url?: string
      }
    }
    title?: string
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
        model {
          asset-> {
            url
          }
        }
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
      shortDescription,
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
      shortDescription,
      coverImage,
      date,
      hasAR,
      "exhibitsCount": count(exhibits)
    }`,
    { limit },
  )
}
