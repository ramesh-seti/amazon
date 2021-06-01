import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase';
import './Login.css'
import { useStateValue } from './StateProvider'


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const[user]= useStateValue()
    const signIn = e=> {
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(email, Password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }
    const register = e => {
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email,Password)
            .then((auth) => {
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }
    return (
        <div className='Login'>
            <Link to='/'>
            <img 
            className="Login_logo"
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
            />
          </Link> 
          <div className='Login_container'>
             <h1> Sign-in </h1>
              <form>
                  <h5> E-mail </h5>
                  <input type='text' value={email} onChange=
                  { e=> setEmail(e.target.value)}/>

                  <h5> Password </h5>
                  <input type='password' value={Password} onChange=
                  { e=> setPassword(e.target.value)} />
                  <button type='Submit' onClick={signIn}
                  className='Login_signInButton'> Sign In </button>
              </form>
              <p>
                  By signing in you agree to the AMAZON FAKE 
                  CLONE conditions of Use & Sale. Please
                  see our Privacy Notice, our Cookies Notice
                  and our Interest-Based Ads Notice.
              </p>
              <button onClick={register} 
              className='Login_registerButton'> Create Your Amazon Account </button>
              </div> 
        </div>
    )
}

export default Login
