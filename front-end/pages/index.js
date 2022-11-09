// import Layout from '../components/layout'
import Layout from "../components/layout";
import Hero from "../components-landing-page/Hero";
import Team from "../components-landing-page/Team";
import Steps from "../components-landing-page/Steps";
import History from "../components-landing-page/History";

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
  );
}
