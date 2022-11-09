import React, { useState } from "react";
import { useAuth } from '../../lib/context/context';
import { useForm } from 'react-hook-form';
import NotesApi from '../../lib/api/NotesApi';
import UserApi from '../../lib/api/UserApi';
import markdownToHtml from '../../lib/markdownToHtml';
import ReactMarkdown from "react-markdown";
import { Input, SubmitButton, Textarea } from '../molecules/input';
import Form from '../organisms/form';
import Router from 'next/router';

export async function getStaticProps(context) {
  const res = await fetch(`https://localhost:8080/note/`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default function AddNote({ slug }) {
  const [content, setContent] = useState();
  const { user, setUser } = useAuth();

  const serviceU = new UserApi();
  const onSubmit = async (data) => {
    data = { ...user, notes: [...user.notes, data] }
    serviceU.setUserUpdate(data);
    setUser(data);
    Router.push('/notes');
  };

  return (
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
  );
}