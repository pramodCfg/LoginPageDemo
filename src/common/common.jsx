import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    max-width: 500px;
    width: 100%;
    margin: auto;
`;
export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const Title = styled.h1`
    text-align: center;
    color: #892be3;
    font-weight: 400;
`;

export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    width: 70%;
    border: 1px solid #dfdfdf;
    padding: 20px;
    border-radius: 5px;
    background: #fff;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.8);
  border-radius: 5px;
  padding: 0px 10px;
  transition: all 200ms ease-in-out;
  margin-bottom: 15px;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }


  &:focus {
    outline: none;
    border-bottom: 1px solid rgba(241, 196, 15, 1);
  }
`;
export const ErrorText = styled.p`
    color: rgb(255, 0, 0);
    margin: -12px 0 10px 0;
    padding-left: 8px;
    font-size: 12px;
`;
export const SubmitButton = styled.button`
  background: white;
      padding: 5px;
      border-radius: 30px;
      width: 100%;
      height: 40px;
      text-transform: uppercase;
      font-weight: bold;
      color: #4c479d;
      box-shadow: 0px 2px 5px #5b51ce;
      border: none;
      cursor: pointer;
`;
export const LoginSuccess = styled.div`
      color: #3c763d;
      width: 100%;
      background-color: #dff0d8;
      border-color: #d6e9c6;
      padding: 15px;
      font-weight: 700;
      border-radius: 5px;
      margin-top: 15px;
`;