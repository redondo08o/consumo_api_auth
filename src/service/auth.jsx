import React, { useState } from 'react'
import { Apiurl } from './apirest';
import axios from 'axios';
import './css/auth.css'

const Auth = ({ chill , redirect }) => {
  const [authUser, setAuthUser] = useState(false)
  const consulta = () => {


    let token = localStorage.getItem("token");

    let headers = {
      "Content-type": "application/json; charset=UTF-8",
      "Authorization": 'Bearer ' + token
    };

    let url = Apiurl + "api/user_profile";
    axios.get(url, { headers: headers }).then(response => {
      setAuthUser(true)
      if(redirect == "/dashboard"){
        window.location = redirect;
      }
    }).catch(function (error) {
      window.location = redirect;
    })
  }

  consulta();

  if (authUser) {
    return chill
  }
  else {
    return <div className="bbody">
      <div class="dotted">
        <li className='lli'></li>
        <li className='lli'></li>
        <li className='lli'></li>
      </div>
    </div>
  }



}

export default Auth;