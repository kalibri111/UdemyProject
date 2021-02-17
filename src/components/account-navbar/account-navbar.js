import React from "react";
import './account-navbar.css'

const AccountNavbar = ( {is_authenticated} ) => {
    if (is_authenticated) {
        return (
            <div className="account-navbar card card-body">
                <div className="nav-item row">
                    <a className="btn btn-link" href="#">Моя страница</a>
                </div>
                <div className="nav-item row">
                    <a className="btn btn-link" href="#">Мои сообщения</a>
                </div>
                <div className="nav-item row">
                    <a className="btn btn-link" href="#">Мои друзья</a>
                </div>
                <div className="nav-item row">
                    <a className="btn btn-link" href="#">Мои уведомления</a>
                </div>
                <div className="nav-item row">
                    <a className="btn btn-link" href="#">Настройки</a>
                </div>
            </div>
        );
    } else {
        return (
            <form>
                <div className="form-group">
                    <label>Логин</label>
                    <input type="email" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Пароль</label>
                    <input type="password" className="form-control"/>
                </div>
                <div className="btn-group">
                    <button type="button" className="btn btn-primary">Войти</button>
                    <button type="button" className="btn btn-primary">Зарегестрироваться</button>
                </div>
            </form>
        );
    }
};

export default AccountNavbar;
