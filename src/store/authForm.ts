import axios from 'axios';
import {makeAutoObservable} from 'mobx';


class StoreAuthForm {

    isAuth = false;
    loginInputValue = ''; 
    passwordInputValue = '';

    constructor() {
        makeAutoObservable(this)
    }


    onLoginInputChange(newText: string){
        storeAuthForm.loginInputValue = newText;
    }

    onPasswordInputChange(newText: string){
        storeAuthForm.passwordInputValue = newText;
    }

    async onButtonSubmit(event: any) {
        event.preventDefault();

        let stateObj = {
            userName: storeAuthForm.loginInputValue,
            password: storeAuthForm.passwordInputValue,
        }
        

        await axios.get('http://localhost:3002/users')
        .then(res => 
        res.data.map((user:any)=> JSON.stringify(user) === JSON.stringify(stateObj) ? storeAuthForm.isAuth=true : null))
        storeAuthForm.loginInputValue = ''; 
        storeAuthForm.passwordInputValue = '';
    }
}

const storeAuthForm = new StoreAuthForm();

export default storeAuthForm;