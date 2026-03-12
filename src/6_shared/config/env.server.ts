import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  experimental__runtimeEnv: process.env,
  server: {
    SANITY_REVALIDATE_SECRET: z.string().min(1),
  },
})
