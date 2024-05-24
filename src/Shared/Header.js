import { useState } from "react";

function Header() {


    var [navShowList, setNavShowList] = useState("collapse navbar-collapse")
    var isShowingNav = false

    function handleNav() {

        if (isShowingNav == false) {
            isShowingNav = true
            setNavShowList("navbar-collapse")
        } else {
            isShowingNav = true
            setNavShowList("collapse navbar-collapse")
        }
    }

    return (

        <nav className="navbar shadow mt-3 navbar-expand-lg navbar bg-primary p-2">

            <a href="/" className="navbar-brand">
                <img src="https://d2b98ifobtd07j.cloudfront.net/l12.png" width="200px" />
            </a>
            <button className="navbar-toggler" onClick={e => handleNav()}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={navShowList}>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="/" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/course" className="nav-link">Courses</a>
                    </li>
                    <li className="nav-item">
                        <a href="/create-account" className="nav-link">SignUp</a>
                    </li>
                    <li className="nav-item">
                        <a href="/login" className="nav-link">Login</a>
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default Header;