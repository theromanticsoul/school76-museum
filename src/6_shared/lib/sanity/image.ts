import imageUrlBuilder, { type SanityImageSource } from "@sanity/image-url"

import { sanity } from "./client"

const builder = imageUrlBuilder(sanity)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
