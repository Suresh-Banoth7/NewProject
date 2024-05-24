import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import TalkToUS from "./TalktoUS";

function Home(){

    var ParentTochildMessage = "Talk To Us"

    return(

        <div className="container">
            <div className="row">
               <div className="col-12">
                  <Header/>
               </div>
               <div className="col-6">
                  <h3>Dream Software job</h3>
               </div>
               <div className="col-6">
                  <TalkToUS message={ParentTochildMessage}/>
               </div>
               <div className="col-12">
                 <Footer/>
               </div>
            </div>

        </div>
    )

    
    
}
export default Home