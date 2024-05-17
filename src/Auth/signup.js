import { useState } from "react"
import { emailValidation } from "../Utils/utils"


function Signup() {

   // created state variables
    var [name, setName] = useState(" ")
    var [email, setEmail] = useState(" ")
    var [mobile, setMobile] = useState(" ")
    var [password, setPword] = useState(" ")

    // created state variables for error

    var [nameError, setNameError] = useState(" ")
    var [emailError, setEmailError] = useState(" ")
    var [mobileError, setMobileError] = useState(" ")
    var [passwordError, setPwordError] = useState(" ")
   

    function HandleFormName(e) {
        setName(e.target.value)
    }

    function HandleFormEmail(e) {
        setEmail(e.target.value)
    }

    function HandleFormmobile(e) {
        setMobile(e.target.value)
    }

    function HandleFormPword(e) {
        setPword(e.target.value)
    }
    function HandleCA() {
       
        if(name.length<3){
            setNameError("name should be more than 3 characters")
        }else{
            setNameError(" ")
        }

        if(emailValidation(email)){
            setEmailError(" ")
        }else{
            setEmailError("Not a valid email")
        }
        if(mobile.length==10){
            setMobileError(" ")
        }else{
            setMobileError("Enter a valid mobile no")
        }

        if(password.length>8){
            setPwordError(" ")
        }else{
            setPwordError("more than 8 characters")
        }
      
    }

    return (

        <div className="container">
            <div className="row">
                <div className="col-4">
                </div>
                <div className="col-4 bg-light mt-5">
                    <h2 className="mt-5 text-center ">Create Account</h2>
                    <div className="mt-3 mb-3">
                        <label>Name</label>
                        <input type="text" onChange={e => HandleFormName(e)} className="form-control" placeholder="Name" />
                        <div className="text-danger">{nameError}</div>
                    </div>
                    <div className="mt-3 mb-3">
                        <label>Email</label>
                        <input type="text" onChange={e => HandleFormEmail(e)} className="form-control" placeholder="Email" />
                        <div className="text-danger">{emailError}</div>
                    </div>
                    <div className="mt-3 mb-3">
                        <label>Mobile</label>
                        <input type="text" onChange={e => HandleFormmobile(e)} className="form-control" placeholder="Mobile" />
                        <div className="text-danger">{mobileError}</div>
                    </div>
                    <div className="mt-3 mb-3">
                        <label>Password</label>
                        <input type="password" onChange={e => HandleFormPword(e)} className="form-control" placeholder="Password" />
                        <div className="text-danger">{passwordError}</div>
                    </div>
                    <div className="d-grid">
                        <button className="btn btn-primary" onClick={e => HandleCA()} >Create Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup