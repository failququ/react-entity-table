import { observer } from 'mobx-react-lite';
import React from 'react';
import {SubmitButton, FormBlock, Form, AuthInput} from './style';
import storeAuthForm from '../store/authForm';



const AuthForm = observer(() => {
    return (
        <FormBlock>
            <Form onSubmit={storeAuthForm.onButtonSubmit}>
                <div>
                    <div><b>Login</b></div>
                    <AuthInput 
                    onChange={(e) => {storeAuthForm.onLoginInputChange(e.target.value)}} 
                    value={storeAuthForm.loginInputValue} 
                    name='login' type="text" placeholder='Enter your login...' />
                </div>
                <div>
                    <div><b>Password</b></div>
                    <AuthInput 
                    onChange={(e) => {storeAuthForm.onPasswordInputChange(e.target.value)}} 
                    value={storeAuthForm.passwordInputValue} 
                    name='password' type="password" placeholder='Enter your password...' />
                </div>
                
                <SubmitButton >Войти</SubmitButton>
            </Form>
        </FormBlock>

    );
});

export default AuthForm;