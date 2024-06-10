import React from 'react'
import Landing from './features/landing/Landing'
import Register from './features/uauth/Register'
import Login from './features/uauth/Login'
import ForgetPass from './features/uauth/ForgetPass'
import OTPVerif from './features/uauth/OTPVerif'
import Dashboard from './features/dashboard/Dashboard.jsx'
import Layout from './shared/components/Layout'
import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element = {<Landing/>}/>
      <Route path='/register' element = {<Register/>}/>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/forgetpass' element = {<ForgetPass/>}/>
      <Route path='/otpverif' element = {<OTPVerif/>}/>
      <Route 
        path='/dashboard' 
        element = {
          <Layout>
            <Dashboard/>
          </Layout>
        }
      />
    </Routes>
  );
}

export default App