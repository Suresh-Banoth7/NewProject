import { useState } from "react";
import { emailValidation } from "../Utils/utils";

function Login() {




    //create variables
    var [email, setEmail] = useState(" ")
    var [password, setPs] = useState(" ")



    // create error variables
    var[emailError,setEmailError] = useState(" ")
    var[passwordError,setPwordError]=useState(" ")


    function HandleEmail(e) {

        setEmail(e.target.value)
    }

    function HandlePassword(e) {
        setPs(e.target.value)
    }


    function HandleLogin() {
        
        if(emailValidation(email)){
            setEmailError(" ")
        }else{
            setEmailError(" email is not valid")
        }
        if(password.length>8){
            setPwordError(" ")
        }else{
            setPwordError("password is incorrect")
        }
    }
    return (

        <div className="container">

            <div className="row">
                <div className="col-4">

                </div>
                <div className="col-4 mt-5 p-5 bg-light">
                    <h1 className="mt-3 mb-3 text-center">Login</h1>
                    <div className="mt-3 mb-3">
                        <label>Email</label>
                        <input type="text" onChange={e =>HandleEmail(e)} className="form-control" placeholder="Email" />
                        <div className="text-danger">{emailError}</div>
                    </div>
                    <div className="mt-3 mb-3">
                        <label>Password</label>
                        <input type="password" onChange={e => HandlePassword(e)} className="form-control" placeholder="password" />
                        <div className="text-danger"> {passwordError}</div>
                    </div>

                    <div className="d-grid">
                        <button className="btn btn-primary" onClick={e => HandleLogin()}>Login</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login;