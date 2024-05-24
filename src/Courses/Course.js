import Footer from "../Shared/Footer";
import Header from "../Shared/Header";

function Course() {

    return (
        <div className="container">
            <div className="row">

                <div className="col-12">
                  <Header/>
                </div>
                <div className="col-12">
                 <h1>Your Courses</h1>
                </div>
                <div className="col-12">
                   <Footer/>
                </div>
            </div>

        </div>
    )


}
export default Course