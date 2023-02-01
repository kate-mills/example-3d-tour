import * as React from "react"

export default function ZillowIframe({title, src}) {
  return(
    <iframe
      title={title || ''}
      src={src || "https://www.zillow.com/view-3d-home/59b7664d-6371-43ab-995e-f0491f0559d7?setAttribution=mls&wl=true&utm_source=dashboard"}
      height="720"
      frameBorder="0"
      allowFullScreen
    />
  )
}
