import { ExhibitionCard, type ExhibitionCardResult } from "@entities/exhibition"
import Link from "next/link"

interface ExhibitionsSectionProps {
  exhibitions: ExhibitionCardResult[]
}

export function ExhibitionsSection({ exhibitions }: ExhibitionsSectionProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Актуальные выставки</h2>
        <Link
          className="text-primary text-sm hover:underline"
          href="/exhibitions"
        >
          Смотреть все
        </Link>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {exhibitions.map((exhibition) => (
          <ExhibitionCard exhibition={exhibition} key={exhibition._id} />
        ))}
      </div>
    </div>
  )
}
