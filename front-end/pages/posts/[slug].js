import { useRouter } from "next/router"
import ErrorPage from "next/error"
import Container from "../../components/molecules/container"
import PostBody from "../../components/molecules/post/post-body"
import Header from "../../components/molecules/header"
import PostHeader from "../../components/molecules/post/post-header"
import Layout from "../../components/molecules/layout"
import { getPostBySlug, getAllPosts, getPostById } from "../../lib/api"
import PostTitle from "../../components/molecules/post/post-title"
import Head from "next/head"
import { CMS_NAME } from "../../lib/constants"
import markdownToHtml from "../../lib/markdownToHtml"
import { useAuth } from "../../lib/context/context"
import { useEffect } from "react"

export default function Post({ post, morePosts, preview }) {
  const { user } = useAuth()
  const router = useRouter()
  useEffect(() => {
    console.log(user)
  }, [user])
  if (!router.isFallback && !post?.id) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <PostHeader
                title={post.title}
                tag={post.tags}
                coverImage={post.coverImage}
                date={post.createdAt}
                author={user}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const post = await getPostById(params.slug)
  const content = await markdownToHtml(post.content || "")
  console.log(post, "aaaa")
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const postsIds = await getAllPosts()
  console.log(postsIds, "a")
  return {
    paths: postsIds.map((ids) => {
      return {
        params: {
          slug: ids,
        },
      }
    }),
    fallback: false,
  }
}
