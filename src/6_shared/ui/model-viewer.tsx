"use client"

import React, { useEffect } from "react"

interface Props {
  alt?: string
  className?: string
  src: string
}

export function ModelViewer({ alt = "", className, src }: Props) {
  useEffect(() => {
    import("@google/model-viewer")
  }, [])

  return React.createElement("model-viewer", {
    alt,
    "auto-rotate": true,
    "camera-controls": true,
    className,
    "shadow-intensity": "1",
    src,
    style: { height: "400px", width: "100%" },
  })
}
