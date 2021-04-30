import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../../images/logo.svg';
import cross from '../../images/cross.svg';
import menu from '../../images/menu.svg';
import ApplicationLink from '../../components/ApplicationLink/ApplicationLink';
import './Header.css';
function Header(props) {
  const [navOpened, setNavOpened] = React.useState(false);

  function OpenedNav() {
    setNavOpened(true);
  }
  function closeNav() {
    setNavOpened(false);
  }

  return (
    <header
      className={`header ${props.location.pathname === '/' && 'header__blue'}`}
    >
      <div className="header__container">
        <ApplicationLink to="/">
          <img className="header__logo" src={logo} alt="Логотип." />
        </ApplicationLink>
        <Switch>
          <Route exact path="/">
            <div className="header__login">
              <ApplicationLink
                to="/signup"
                className="header__link header__link-registration"
              >
                Регистрация
              </ApplicationLink>
              <ApplicationLink
                to="/signin"
                className="header__link header__link-login"
              >
                Войти
              </ApplicationLink>
            </div>
          </Route>
          <Route path={['/movies', '/saved-movies']}>
            <img
              className="header__menu-icon"
              onClick={OpenedNav}
              alt="Открыть меню."
              src={menu}
            />
            <div
              className={`header__nav-container
          ${navOpened && 'header__nav-container_is-opened'} `}
            >
              <nav className="header__nav">
                <NavLink
                  className="header__link header__link-movie"
                  activeClassName="header__link_active"
                  to="/movies"
                >
                  Фильмы
                </NavLink>
                <NavLink
                  className="header__link header__link-movie"
                  activeClassName="header__link_active"
                  to="/saved-movies"
                >
                  Сохранённые фильмы
                </NavLink>
                <div className="header__container-account">
                  <NavLink
                    className="header__link header__link-account"
                    activeClassName="header__link_active"
                    to="/profile"
                  >
                    Аккаунт
                  </NavLink>
                  <NavLink
                    className="header__account-icon"
                    to="/profile"
                  ></NavLink>
                </div>

                <img
                  className="header__cross-icon"
                  onClick={closeNav}
                  alt="Закрыть меню."
                  src={cross}
                />
              </nav>
            </div>
          </Route>
        </Switch>
      </div>
    </header>
  );
}

Header.propTypes = {
  location: PropTypes.object,
};

export default Header;
