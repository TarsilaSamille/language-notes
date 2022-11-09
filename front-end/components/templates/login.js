import React, { useState, useContext } from 'react';
import LoginApi from '../../lib/api/LoginApi';
import { useAuth } from '../../lib/context/context';
import Router from 'next/router'
import Form from '../organisms/form';
import { Input, SubmitButton } from '../molecules/input';

const Login = () => {
    const [errorPassword, setErrorPassword] = useState(false);

    const { user, setUser } = useAuth();

    const service = new LoginApi();

    const onSubmit = async (data) => {
        let userb = await service.setLogin(data);
        setUser(userb);
        Router.push('/notes');
    };
    return (
        <div className="justify-center px-80  pt-6 ">
            <Form onSubmit={onSubmit} title={'Login'}>
                <Input label={'E-mail'} type={'email'}
                    name={'email'}
                    rule={{ required: true }}
                    placeholder="Digite seu e-mail" />
                <Input label={'Senha'}
                    type={'password'}
                    name={'password'}
                    rule={{ required: true }}
                    placeholder="*******" />
                {errorPassword && <Error message={'Senha errada'} />}
                <SubmitButton name={'Entrar'} name2={'Cadastro'} onClick2={() => Router.push('/registration')} />
            </Form>
        </div>
    );
};

export default Login;