import { useState } from "react"

function Form() {

    var[Courses,setCourses] = useState(" ")
    var[gender,setGender] = useState(" ")

    var[Avatar2,setA2]=useState(false)
    var[Terminator,setTerminator]=useState(false)
    var[Titanic,setTitanic]=useState(false)

    function Handlecourse(e){
       setCourses(e.target.value)
    }
    function HandleGender(e){
        setGender(e.target.value)
    }
    function HandleAvatar2(e){
        setA2(true)
    }
    function HandleTerminator(e){
        setTerminator(true)
    }
    function Handletitanic(e){
        setTitanic(true)
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-6 bg-light">
                    <div>
                        <label>Courses</label>
                        <select className="form-select" onChange={e=>Handlecourse(e)}>
                            <option>ReactJs</option>
                            <option>Java</option>
                            <option>SpringBoot</option>
                            <option>Angular</option>
                        </select>
                    </div>
                    <div className=" mt-3">
                        <label>Gender</label>
                    </div>
                    <div className="form-check">
                        <input type="radio" className="form-check-input" name="gender" onChange={e=>HandleGender(e)}/>Male
                    </div>
                    <div>
                        <input type="radio" className="form-check-input" name="gender" onChange={e=>HandleGender(e)} />FeMale
                    </div>
                    <div className=" mt-3">
                        <label>Fav movies</label>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" value="Avatar 2" onChange={e=>HandleAvatar2(e)} />Avatar 2
                    </div>
                    <div>
                        <input type="checkbox" className="form-check-input" value="Terminator"  onChange={e=>HandleTerminator(e)} /> Terminator
                    </div>
                    <div>
                        <input type="checkbox" className="form-check-input" value="Titanic"  onChange={e=>Handletitanic(e)} /> Titanic
                    </div>
                      <div>
                        {
                            Courses
                        }
                        <br/>
                        {
                            gender
                        }
                        <br/>
                        {
                            Avatar2.toString()
                        }
                        <br/>
                        {
                            Terminator.toString()
                        }
                        <br/>
                        {
                            Titanic.toString()
                        }
                      </div>



                     

                </div>

            </div>

        </div>
    )
}

export default Form