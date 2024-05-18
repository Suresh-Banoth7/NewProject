import Form from "./Form";


function Home(){


    return(
       <div className="container">
        <div className="row">
           <div className="col-4">
              <h1>Home Page</h1>
           </div>
           <div className="col-4">
               <Form/>
           </div>
        </div>
         
       </div>
    )
}
export default Home;