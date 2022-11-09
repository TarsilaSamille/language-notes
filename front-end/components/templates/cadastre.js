import { useRouter } from 'next/router';
import { useState } from 'react';
import UserApi from '../../lib/api/UserApi';
import { useAuth } from '../../lib/context/context';
import { Input, Error, InputDouble, Select, SubmitButton } from '../molecules/input';
import Form from '../organisms/form';
import Modal from '../organisms/modal';

export default function Cadastre() {
    const [showModal, setShowModal] = useState(false);
    const [errorPassword, setErrorPassword] = useState(false);

    const service = new UserApi();
    const { setUser } = useAuth();
    const router = useRouter()

    const onSubmit = (data) => {
        console.log(data)
        setErrorPassword(data.password !== data.password2)
        if (data.password === data.password2) {
            let user = service.setUser(data);
            setUser(user);
            setShowModal(true);
        }
    };
    const sucess = () => {
        setShowModal(false);
        router.push({
            pathname: '/login-page',
        })
    };
    return (
        <div>
            <Form onSubmit={onSubmit} title={'Cadastro'}>
                <InputDouble label='Nome' name='firstName' rule={{ required: true }}
                    name2={'lastName'} label2={'Sobrenome'} rule2={{ required: true }} />
                <Input label={'E-mail'} type={'email'} name={'email'} rule={{ required: true }} />
                <Input label={'Link Foto'} name={'picture'} rule={{ required: true }} />
                <Select
                    label={'Tipo de Usuario'}
                    name={'type'}
                    options={
                        [{ name: "Estudante", value: 'STUDENT' },
                        { name: "Professor", value: 'TEACHER' }]
                    } />
                <InputDouble
                    label={'Senha'} name={'password'}
                    rule={{
                        required: true,
                        minLength: { value: 6, message: 'Mínimo 6 caracteres' }
                    }}
                    rule2={{
                        required: true,
                        minLength: { value: 6, message: 'Mínimo 6 caracteres' }
                    }}
                    name2={'password2'} label2={'Confirmação de Senha'}
                    type={'password'} />
                {errorPassword && <Error message={'Senhas não batem'} />}
                <SubmitButton name={'Criar Usuario'} />
            </Form>
            <p className="text-center ml-auto text-sm text-gray-500 underline mt-8 ">
                <button onClick={() => {
                    router.push({
                        pathname: 'login-page',
                    })
                }} >  Já tenho uma conta</button>
            </p>
            <Modal
                title={'Conta criada com sucesso'}
                onClose={() => sucess()}
                show={showModal}
            />

        </div>
    );
}
