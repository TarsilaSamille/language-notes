import Container from '../components/container'
import MoreStories from '../components/more-stories'
import postc from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getNotes } from '../lib/api/NotesApi'
import Head from 'next/head';

export default function Index({ allPosts }) {
  const post = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>Language Notes - anotações de estudo</title>
        </Head>
        <Container>
          {post && (
            <postc
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
              slug={post.slug}
              excerpt={post.excerpt}
            />
          )}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getNotes();

  return {
    props: { allPosts },
  }
}
