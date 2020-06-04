import configs from './configs.js'
import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
class Firebase{
constructor(){
app.initializeApp(configs)
this.auth= app.auth()
this.posts=[]
this.firestore=app.firestore()
this.user=null
}
//auths
createUser=(mail,password)=>{
try{this.user= this.auth.createUserWithEmailAndPassword(mail,password)
    return this.user}catch(e){
alert(e.message)
return null
}
}
loginUser=(mail,password)=> {
   this.user= this.auth.signInWithEmailAndPassword(mail,password)
   return this.user
}
signUserOut=()=>{this.auth.signOut()
this.user=null
}
passwordReset=(mail)=>{this.auth.sendPasswordResetEmail(mail)
}

}
export default Firebase