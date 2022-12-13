import React, { Suspense } from "react"

const Spline = React.lazy(() => import("@splinetool/react-spline"))

export default function HomePage () {
  return (
    <>
      <Suspense fallback={<div style={{ height: "100vh", width: "100vw", marginLeft: "auto", marginRight: "auto", textAlign: "center", alignItems: "center", position: "relative", verticalAlign: "middle" }}>Loading...</div>}>
        <div style={{ height: "100vh", width: "100vw" }}>
          <Spline scene="https://prod.spline.design/K3pY2-TnYaMODnDT/scene.splinecode" />
        </div>
      </Suspense>
    </>
  )
}
