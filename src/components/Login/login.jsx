import React from "react";
import { BoxContainer, ErrorText, FormContainer, Input, SubmitButton, Title, Wrapper } from "../../common/common";
import { useForm } from "react-hook-form";

const LoginForm = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
        
    return (
    <Wrapper>
        <BoxContainer>
            <FormContainer onSubmit={handleSubmit(onSubmit)}>
                <Title>Login</Title>
                <Input 
                    type="text"     
                    placeholder="Please enter your email"
                    {...register("email", { required: true })} 
                        aria-invalid={errors.email ? "true" : "false"} 
                />
                {errors.email?.type === 'required' && <ErrorText>Email is required! </ErrorText>}
                
                <Input 
                    type="text"                    
                    placeholder="Please enter your name"
                    {...register("name", { required: true })} 
                        aria-invalid={errors.name ? "true" : "false"} 
                />
                {errors.name?.type === 'required' && <ErrorText>Name is required!</ErrorText>}

                <Input
                    type="password"
                    placeholder="Please enter your password"
                    {...register("password", { required: true })} 
                        aria-invalid={errors.password ? "true" : "false"} 
                 />
                 {errors.password?.type === 'required' && <ErrorText>Password is required!</ErrorText>}

                <SubmitButton type="submit">Submit</SubmitButton>
            </FormContainer>
        </BoxContainer>
    </Wrapper>
    );
};

export default LoginForm;
