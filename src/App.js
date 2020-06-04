import React,{useState} from 'react';
import {FirebaseContext} from './firebase'
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
        return <div>
        <button onClick={firebase.signUserOut}>SignOut</button>
        </div>
      }
      }

}
</FirebaseContext.Consumer>
)
}

export default App;
