import React from "react";
import './question-navbar.css'

const QuestionNavbar = () => {
    const navbar = (
        <div className="question-navbar card">
            <div className="card-body">
                <div className="nav-item row">
                    <div className="dropright">
                        <button type="button" className="btn btn-link dropdown-toggle" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false" id="dropdownMenuButton"> Предмет </button>
                        <div className="dropdown-menu" >
                            <a className="dropdown-item" href="#">Математика</a>
                            <a className="dropdown-item" href="#">Общая физика</a>
                            <a className="dropdown-item" href="#">Биология</a>
                            <a className="dropdown-item" href="#">Медицина</a>
                            <a className="dropdown-item" href="#">ТОЭ</a>
                        </div>
                    </div>
                </div>
                <div className="nav-item row">
                    <button type="button" className="btn btn-link">Популярные</button>
                </div>
                <div className="nav-item row">
                    <button type="button" className="btn btn-link">Новые</button>
                </div>
                <div className="nav-item row">
                    <button type="button" className="btn btn-link">С ответами</button>
                </div>
            </div>
        </div>
    );
    return navbar;
}

export default QuestionNavbar;
