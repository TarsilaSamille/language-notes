import Layout from "../components/molecules/layout"
import Hero from "../components/molecules/landing-page/Hero"
import Team from "../components/molecules/landing-page/Team"
import Steps from "../components/molecules/landing-page/Steps"
import History from "../components/molecules/landing-page/History"

export default function Index({ allPosts }) {
  return (
    <>
      <Layout pageTitle="Pagina Inicial">
        <Hero />
        <History />
        <Steps />
        <Team />
      </Layout>
    </>
  )
}
