import React from "react";
import { useState, useEffect } from "react";
import { BoxContainer, ErrorText, FormContainer, Input, LoginSuccess, SubmitButton, Title, Wrapper } from "../../common/common";
import { validate } from "../../common/validation";

const LoginForm = () => {
    const initialValues = {
        username: "",
        email: "",
        password: ""
    };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors, formValues, isSubmit]);
    
    return (
    <Wrapper>
        <BoxContainer>
            <FormContainer onSubmit={handleSubmit}>
                <Title>Login</Title>
                <Input 
                    type="text"                    
                    name="email"
                    placeholder="Please enter your email"
                    value={formValues.email}
                    onChange={handleChange}
                />
                <ErrorText>{formErrors.email}</ErrorText>

                <Input 
                    type="text"
                    name="username"
                    placeholder="Please enter your name"
                    value={formValues.username}
                    onChange={handleChange}
                />
                <ErrorText>{formErrors.username}</ErrorText>

                <Input
                    type="password"
                    name="password"
                    placeholder="Please enter your password"
                    value={formValues.password}
                    onChange={handleChange}
                 />
                <ErrorText>{formErrors.password}</ErrorText>

                <SubmitButton type="submit">Submit</SubmitButton>
            </FormContainer>
            
            {Object.keys(formErrors).length === 0 && isSubmit ? (
                <LoginSuccess>
                    Signed in successfully
                </LoginSuccess>
            ) : (
                console.log("Entered Details", formValues)
            )}
        </BoxContainer>
    </Wrapper>
    );
};

export default LoginForm;
