import Container from "../components/molecules/container"
import React, { useEffect, useState } from "react"
import Layout from "../components/molecules/layout"
import Head from "next/head"
import { useAuth } from "../lib/context/context"
import Router from "next/router"
import PostItem from "../components/molecules/post/hero-post"
import MoreStories from "../components/molecules/more-stories"
import { Button } from "../components/molecules/input"

export default function Index() {
  const { user } = useAuth()
  const [post, setPost] = useState({})
  const [morePosts, setMorePosts] = useState([])

  useEffect(() => {
    if (user?.notes && user?.notes.length > 0) {
      console.log(user)
      setPost(user?.notes[0])
      setMorePosts(user?.notes?.slice(1))
    }
  }, [user])
  return (
    <>
      <Layout>
        <Head>
          <title>Language Notes - anotações de estudo</title>
        </Head>
        <Container>
          <p className="ml-auto text-sm text-gray-500 underline mt-8 text-right">
            <Button
              onClick={() => {
                Router.push("/add-note")
              }}
              name={"Adicionar Notas"}
              bgColor="#ccc"
              charColor="#000"
            ></Button>
          </p>

          {post && (
            <PostItem
              title={post?.title}
              coverImage={post?.coverImage}
              date={post?.createdAt}
              author={user}
              slug={post?.id}
              excerpt={post?.excerpt}
            />
          )}

          {morePosts?.length > 0 && (
            <MoreStories author={user} posts={morePosts} />
          )}
        </Container>
      </Layout>
    </>
  )
}
