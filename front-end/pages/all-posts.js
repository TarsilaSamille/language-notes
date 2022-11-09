import Container from '../components/container'
import React, { useEffect, useState } from 'react';
import Layout from '../components/layout'
import Head from 'next/head';
import { useAuth } from '../lib/context/context';
import Router from 'next/router'
import PostItem from '../components/hero-post'
import MoreStories from '../components/more-stories';
import Form from '../components/organisms/form';
import { Button } from '../components/molecules/input';



export default function Index() {
  const { user } = useAuth();
  const [post, setPost] = useState({});
  const [morePosts, setMorePosts] = useState([]);

  useEffect(() => {
    if (user?.notes && user?.notes.length > 0) {
      setPost(user?.notes[0])
      setMorePosts(user?.notes?.slice(1))
    }
    console.log(post)
  }, [user]);
  return (
    <>
      <Layout>
        <Head>
          <title>Language Notes - anotações de estudo</title>
        </Head>
        <Container>
          <p className="ml-auto text-sm text-gray-500 underline mt-8 text-right">
            <Button onClick={() => {
              Router.push('/add-note')
            }} name={"Adicionar Notas"} bgColor="#ccc" charColor="#000"></Button>
          </p>

          {post && post.map((p, i) => {
            <PostItem
              title={p?.title}
              coverImage={p?.coverImage}
              date={p?.createdAt}
              author={user}
              slug={p?.id}
              excerpt={p?.excerpt}
            />
          }

          )}

          {morePosts?.length > 0 && <MoreStories author={user} posts={morePosts} />}

        </Container>
      </Layout>
    </>
  )
}

export async function getInitialProps() {
  const allPosts = getNotes();
  const { req, res, query } = props;


  const propsq = await fetch(endpoint);
  return {
    props: { allPosts: propsq },
  }
}
