import React from 'react';
import "./App.css";     
import SignIn from './Login-Auth/SignIn';
import {useAuthState} from "react-firebase-hooks/auth"
import { auth } from './Login-Auth/firebase'
import Home from './components/Home';


const App = () => {
  const [user] = useAuthState(auth)
  console.log('user',user);
  return (
    <>
    {
      user ? <Home user={user} /> : <SignIn />
    }
    </>
  )
}

export default App