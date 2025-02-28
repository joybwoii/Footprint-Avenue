import  'react'
import './Login.css'
function Login() {
  return (
    <div>
    <div className='main'> 
      <div className='loginimg'>
        <img src="/assets/loginimg.jpg" alt="" />
      </div>
      <div className='form'>
        <div className='logo'>
            <img src="/assets/site-logo.svg" alt="" />
        </div>
        <div className='logincontainer'>
            <h1>Login</h1>
         <input type="text" />
         <input type="password" />
         <button>Login</button>
         <p>Dont have an Account?</p>
         <a href="">Register</a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login
