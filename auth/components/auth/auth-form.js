import { useState, useRef } from 'react';
import classes from './auth-form.module.css';
import {signIn} from 'next-auth/react'
import { useRouter } from 'next/router'

const createNewUser = async (email, password) => { 
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({email, password}), 
    headers: {
      'Content-Type': 'application/json'}
  })
  const data = await response.json()
  return data;
}

function AuthForm() {
  const router = useRouter()
  const [isLogin, setIsLogin] = useState(true);
  const enteredEmail = useRef()
  const enteredPassword = useRef()

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  const onSubmitHandler = async e => {
    e.preventDefault()

    const email = enteredEmail.current.value
    const password = enteredPassword.current.value

    if (isLogin) {
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password
      })

      if(!result.error) {
        // router.push('/profile')
        router.replace('/profile')
      } else {
        // show error
      }
    } else {
      const user = await createNewUser(email, password)
    }

  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={onSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={enteredEmail}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={enteredPassword}/>
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
