import type { ExhibitionDetailResult } from "@entities/exhibition"

import { ModelViewer } from "@shared/ui/model-viewer"

interface Props {
  exhibits: ExhibitionDetailResult["exhibits"]
}

export function ExhibitionGallery({ exhibits }: Props) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {exhibits.map((exhibit, i) => {
        const modelUrl = exhibit.model?.asset?.url

        return (
          <div
            className="bg-card space-y-3 overflow-hidden rounded-xl border"
            key={i}
          >
            <div className="bg-muted">
              {modelUrl ? (
                <ModelViewer alt={exhibit.title ?? ""} src={modelUrl} />
              ) : (
                <div className="text-muted-foreground flex h-[400px] items-center justify-center text-sm">
                  Модель недоступна
                </div>
              )}
            </div>
            <div className="space-y-1 px-4 pb-4">
              <p className="font-medium">{exhibit.title}</p>
              {exhibit.description && (
                <p className="text-muted-foreground line-clamp-3 text-sm">
                  {exhibit.description}
                </p>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
