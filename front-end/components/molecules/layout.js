import Footer from "./footer";
import Meta from "../components/meta";
import Header from "../components-landing-page/Header";

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
  );
}
