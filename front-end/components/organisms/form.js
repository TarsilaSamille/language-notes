import React from "react";
import { useForm } from 'react-hook-form';
import { Error } from '../molecules/input';

const Form = ({ defaultValues, children, onSubmit, title }) => {
    const methods = useForm({ defaultValues });
    const { handleSubmit, formState: { errors } } = methods;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="font-sans antialiased bg-grey-lightest">
                <div className="w-full bg-grey-lightest">
                    <div className="container mx-auto py-8">
                        <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
                            <div className="py-4 px-8 text-black
                     text-xl border-b border-grey-lighter"> {title}</div>
                            <div className="py-4 px-8">
                                {React.Children.map(children, child => {
                                    return child?.props.name ? (
                                        <div>
                                            {React.createElement(child.type, {
                                                ...{
                                                    ...child.props,
                                                    register: methods.register,
                                                    key: child.props.name,
                                                },
                                            })}
                                            {errors[child.props.name] &&
                                                <Error label={child.props.label}
                                                    message={errors[child.props.name].message} />
                                            }
                                            {errors[child.props.name2] &&
                                                <Error label={child.props.label2}
                                                    message={errors[child.props.name2].message} />}
                                        </div>
                                    ) : child;

                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Form;