import Footer from "./footer"
import Meta from "./meta"
import Header from "./landing-page/Header"

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Header />
      <div className="min-h-screen">
        <main className="layout">{children}</main>
      </div>
      <Footer />
    </>
  )
}
