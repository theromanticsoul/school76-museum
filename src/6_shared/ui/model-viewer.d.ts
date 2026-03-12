interface IntrinsicElements {
  "model-viewer": ModelViewerElement
}

interface ModelViewerElement extends React.HTMLAttributes<HTMLElement> {
  alt?: string
  "auto-rotate"?: boolean
  "camera-controls"?: boolean
  exposure?: string
  "shadow-intensity"?: string
  src?: string
}
