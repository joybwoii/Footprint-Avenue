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
         <form>
         <input type="text" placeholder='Email'/><br /><br /><br />
         <input type="password" placeholder='Password' /><br /><br /><br />
         <button>Login</button><br /><br />
         </form>
         <p>Dont have an Account?</p>
         <a href="">Register</a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login
