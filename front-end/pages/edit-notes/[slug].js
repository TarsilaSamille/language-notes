import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts, getPostById } from '../../lib/api'
import PostTitle from '../../components/post-title'
import { CMS_NAME } from '../../lib/constants'
import { useAuth } from '../../lib/context/context'
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import NotesApi from '../../lib/api/NotesApi';
import UserApi from '../../lib/api/UserApi';
import markdownToHtml from '../../lib/markdownToHtml';
import ReactMarkdown from 'react-markdown';
import { Input, SubmitButton, Textarea } from '../../components/molecules/input';
import Form from '../../components/organisms/form';
import Router from 'next/router';

export default function Post({ post, morePosts, preview }) {
  const { user } = useAuth();
  const router = useRouter()
  useEffect(() => {
    console.log(user)
  }, [user]);
  if (!router.isFallback && !post?.id) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <div>
            <Form onSubmit={onSubmit} title={'Nova Anotação'}>
              <Input label={'Titulo'}
                name={'title'}
                rule={{ required: true }} />
              <Input label={'SubTitulo'}
                name={'excerpt'}
                rule={{ required: true }} />
              <Input label={'Tags(separadas por virgula)'}
                name={'tags'}
                rule={{ required: true }} />
              <Input label={'Link Capa'}
                name={'coverImage'}
                rule={{ required: true }} />
              <Textarea label={'Conteudo'}
                name={'content'}
                rule={{ required: true }} value={content} onChange={(e) => setContent(e.target.value)} rows={8} />
              <SubmitButton name={'Enviar'} />
            </Form>
            <ReactMarkdown style={{ width: '40%', float: 'right' }}>{content}</ReactMarkdown>
          </div>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const post = await getPostById(params.slug)
  const content = await markdownToHtml(post.content || '')
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
