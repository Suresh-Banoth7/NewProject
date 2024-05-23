import Form from "./Form";


function Home(){

    var userId = localStorage.getItem('LoginID')

    function logout(){
      
      localStorage.clear()
      window.location.reload()


    }
    
    return(
       <div className="container">
        <div className="row">
           <div className="col-4">
              <h1>Home Page</h1>
           </div>
           {/* <div className="col-4">
               <Form/>
           </div> */}
           <div className="col-4">
              {
                  userId==null && <div> <a href="/login">login</a><a href="/create-account">SignUp</a></div>
              }
              {
                  userId!=null && <div><button className="btn" onClick={e=>logout()}>logout</button></div>
              }
           </div>
        </div>
         
       </div>
    )
}
export default Home;