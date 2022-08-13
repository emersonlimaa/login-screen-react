import { useState } from 'react'
import loginImage from './assets/EL.svg'
import './global.css'

export function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
 return (
  <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">

            <span className="login-form-title">
              Bem-Vindo!
            </span>

            <span className="login-form-title">
              <img src={loginImage} alt="" />
            </span>

            <div className="login-input">
              <input 
              className={email !=="" ? 'has-val input' : 'input'}
              onChange={e => setEmail(e.target.value)}
              type="email"
              value={email}
              />
              <span 
                className="focus-input" 
                data-placeholder="Email"
                >
              </span>
            </div>

            <div className="login-input">
              <input 
              className={password !=="" ? 'has-val input' : 'input'}
              onChange={e => setPassword(e.target.value)}
              type="password"
              value={password}
              />
              <span 
              className="focus-input" 
              data-placeholder="Password"></span>
            </div>

            <div className="login-form-button">
              <button 
              className="login-form-button-btn">
                Login
              </button>
            </div>
            <div className="text-new-account">
              <span>Não possui conta? </span>
              <a className="ancor-new-account" href="#">Criar conta.</a>
            </div>
          </form>
        </div>
      </div>
    </div>
 )
}