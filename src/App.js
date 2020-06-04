import React,{useState} from 'react';
import {FirebaseContext} from './firebase'
import AfterLogin from './screens/AfterLogin'
import './App.css';
import SignUpLogin from './screens/SignUpLogiIn'
function App() {
  const [user, setuser] = useState(null)
  return (
    <FirebaseContext.Consumer>
    {firebase=>{
      firebase.auth.onAuthStateChanged(setuser);
      console.log(user)
      if(user==null){
      return <SignUpLogin></SignUpLogin>
      }else{
        return<AfterLogin></AfterLogin>
      }
      }

}
</FirebaseContext.Consumer>
)
}

export default App;
