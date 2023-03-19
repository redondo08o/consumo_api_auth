import React, { useState } from "react";
import './login.css';
import { Apiurl } from "../service/apirest";
import axios from "axios";
import Swal from "sweetalert2";

const Login = () => {

   

    const [logEmail, setLogEmail] = useState("");
    const [logPassword, setlogPassword] = useState("");


    const log = (e) => {
        e.preventDefault();
        let auth_data = {
            "email": logEmail,
            "password": logPassword
        };
        let url = Apiurl + "api/login";
        axios.post(url, auth_data).then(response => {
            console.log(response.data.token);
            localStorage.setItem("token", response.data.token);
            window.location = '/dashboard';


        }).catch(function (error) {
            if (error.response) {
                // La respuesta fue hecha y el servidor respondió con un código de estado
                // que esta fuera del rango de 2xx
                Swal.fire(
                    'Error',
                    error.response.data.message,
                    'error'
                )
                console.log(error.response.data);
            } else if (error.request) {
                // La petición fue hecha pero no se recibió respuesta
                // `error.request` es una instancia de XMLHttpRequest en el navegador y una instancia de
                // http.ClientRequest en node.js
                console.log(error.request);
            } else {
                // Algo paso al preparar la petición que lanzo un Error
                console.log('Error', error.message);
            }
        })
    }



    return (
        <>
            <a href="https://front.codes/" className="logo" target="_blank">
                <img src="https://assets.codepen.io/1462889/fcy.png" alt="" />
            </a>

            <div className="section">
                <div className="container">
                    <div className="row full-height justify-content-center">
                        <div className="col-12 text-center align-self-center py-5">
                            <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                                <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                                <label for="reg-log"></label>
                                <div className="card-3d-wrap mx-auto">
                                    <div className="card-3d-wrapper">
                                        <form action="" method="post" onSubmit={(e) => log(e)}>
                                            <div className="card-front">
                                                <div className="center-wrap">
                                                    <div className="section text-center">
                                                        <h4 className="mb-4 pb-3">Log In</h4>
                                                        <div className="form-group">
                                                            <input type="email" name="logemail" className="form-style" onChange={(e) => setLogEmail(e.target.value)} placeholder="Your Email" id="logemail" autocomplete="off" />
                                                            <i className="input-icon uil uil-at"></i>
                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <input type="password" name="logpass" className="form-style" onChange={(e) => setlogPassword(e.target.value)} placeholder="Your Password" id="logpass" autocomplete="off" />
                                                            <i className="input-icon uil uil-lock-alt"></i>
                                                        </div>
                                                        <input type="submit" className="btn mt-4" value="Iniciar sesion" />
                                                        <p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        <div className="card-back">
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <h4 className="mb-4 pb-3">Sign Up</h4>
                                                    <div className="form-group">
                                                        <input type="text" name="logname" className="form-style" placeholder="Your Full Name" id="logname" autocomplete="off" />
                                                        <i className="input-icon uil uil-user"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autocomplete="off" />
                                                        <i className="input-icon uil uil-at"></i>
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autocomplete="off" />
                                                        <i className="input-icon uil uil-lock-alt"></i>
                                                    </div>
                                                    <a href="#" className="btn mt-4">submit</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;