import React from "react";
import QuestionNavbar from "../question-navbar";
import QuestionList from "../questions-list";
import SearchPanel from "../search-panel";
import AccountNavbar from "../account-navbar";


const App = () => {
    return (
        <div children="container-fluid" id="home-pg-parent">
            <nav className="navbar navbar-light bg-light">
                <SearchPanel/>
            </nav>
            <div className="row" id="main-pg-fd">
                <div className="col-1" id="left-em-fd"></div>
                <div className="col-2" id="left-info-fd">
                    <QuestionNavbar/>
                </div>
                <div className="col-4" id="center-info-fd">
                    <QuestionList />
                </div>
                <div className="col-2" id="right-info-fd">
                    <AccountNavbar is_authenticated={true}/>
                </div>
                <div className="col-1" id="right-em-fd"></div>
            </div>
        </div>
    );
};

export default App;
