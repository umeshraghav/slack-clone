import { Button } from '@material-ui/core'
import React from 'react'
import { useGlobalContext } from './context'
import {auth, provider} from './firebase'
import {actionTypes} from './reducer'
export default function Login() {

    const [state, dispatch] = useGlobalContext()
    const signIn =()=>{
        auth.signInWithPopup(provider).then(result=>{
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            })
  
        }).catch((err=>{
            alert(err.message)
        }))
    }
 

    return (
        <div className="login">
            <div className="login_container">
                <img src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg" alt="Logo"/>            
            <h3>Sing In </h3>
            <p>It will not store your password</p>
            <Button onClick={signIn}>Sing in with Google</Button>
            </div>
        </div>
    )
}
