import React from 'react';
import FormInput from '../form-input/form-input.component.jsx'
import './sign-in.styles.scss'
import CustomButton from '../custom-button/custom-button.component.jsx';
import {signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:''
        }
    }
    render(){
        return(
            <div >
                
                <h2>I already have an account</h2>
                <span>sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                
                <FormInput
                 type='email' name='email' handleChange={this.handleChange} label='email' value={this.state.email} required/>
                                
                <FormInput  
                type='password' name='password' handleChange={this.handleChange} label='password' value={this.state.password} required/>
                                
                <CustomButton type='submit' >Sign In</CustomButton>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign In With Google</CustomButton>
                </form>
            </div>
        )
    }
}
export default SignIn