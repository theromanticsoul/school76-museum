// entities/school-info/model/queries.ts
import { sanity, type SchoolInfo } from "@shared/lib/sanity"

export async function getSchoolInfo(): Promise<null | SchoolInfo> {
  return sanity.fetch(`
    *[_type == "schoolInfo"][0] {
      _id,
      description,
      goals,
      contacts
    }
  `)
}
