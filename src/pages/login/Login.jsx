import React from 'react'
import BaseLayout from '../../components/layouts/base'
import LoginComponent from '../../components/login'
import Register from '../../components/register'
import './Login.scss'

const Login = () => {
  return (
    <BaseLayout>
        <div className="section auth login">
          <div className="container">
            <LoginComponent />
            <Register />
          </div>
        </div>
    </BaseLayout>
  )
}

export default Login

