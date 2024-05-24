
function TalkToUS({message}) {

    return (

        <div>
            <div><h3 className="text-warning text-center">{message}</h3></div>
            <div>
                <label>Name</label>
                <input type="text" className="form-control" />
            </div>
            <div>
                <label>Email</label>
                <input type="text" className="form-control" />
            </div>
            <div>
                <label>Password</label>
                <input type="password" className="form-control" />
            </div>
            <div>
                <button className="btn btn-warning">
                  Submit Data
                </button>
            </div>
        </div>


    )
}
export default TalkToUS