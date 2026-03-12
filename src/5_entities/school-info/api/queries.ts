import { sanity, type SchoolInfo } from "@shared/lib/sanity"

export type SchoolInfoResult = Pick<SchoolInfo, "_id" | "content">

export async function getSchoolInfo(): Promise<null | SchoolInfoResult> {
  return sanity.fetch(`
    *[_type == "schoolInfo"][0] {
      _id,
      content
    }
  `)
}
