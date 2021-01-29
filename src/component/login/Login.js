import React, { useState } from 'react';
import './Login.css'
import {db,auth,provider,providerFace} from '../../module/firebase'
import { useHistory } from 'react-router-dom';
import {useStateValue} from '../../stateProvider/StateProvider'
function Login(){
    const [{basket,user},dispatch] = useStateValue();
    const history = useHistory()
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const signIn = (e) =>{
        
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then(auth=>{
            console.log("User---> ",auth);
            dispatch({
                type: 'SET_USER',
                user: auth.user,
            })
            history.push('/')
        })
    }
    const signInWithGoogle = () =>{
        auth.signInWithPopup(provider)
        .then(auth=>{
            dispatch({
                type: 'SET_USER',
                user: auth.user
            })
            history.push('/')
        }).catch(err => alert(err.message))
    }
    const signInWithFacebook = () => {
        auth.signInWithPopup(providerFace)
        .then(auth => {
            
            history.push('/')
            dispatch({
                type: 'SET_USER',
                user: auth.user
            })
        }).catch(err => alert(err.message))
    }
    return(
        <div className='login'>
            <div className="login__container">
                <form action="">
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e=> setEmail(e.target.value)} id=""/>

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e=> setPassword(e.target.value)} id=""/>
                    <button type="submit" onClick={signIn} className='login__signInButton'>Sign in</button>
               
                </form>
                <div className="login_signInWithGF">
                    <div className="login__withGoogle" onClick={signInWithGoogle} >
                         <img src="https://firebasestorage.googleapis.com/v0/b/shoppp-44e6f.appspot.com/o/google.png?alt=media&token=5541b2e5-1c33-47cc-b456-69b39567888a" alt=""/>
                        <button   className='login__google'>Google</button>
                    </div>
                    <div className="login__withFace"  onClick={signInWithFacebook}>
                         <img src="https://firebasestorage.googleapis.com/v0/b/shoppp-44e6f.appspot.com/o/facebook.png?alt=media&token=14d736e1-ba88-4cfa-8389-9d04bd2cd29c" alt=""/>
                        <button  className='login__facebook'>Facebook</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;