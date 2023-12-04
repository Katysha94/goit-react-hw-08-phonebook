import css from './Layout.module.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { selectIsLoggedIn } from 'redux/auth/selectors';

export const Layout = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.container}>
      <header className={css.header}>
        <NavLink className={css.headerLink} to="/">
          Home
        </NavLink>
        {isLoggedIn ? (
          <>
            <NavLink className={css.headerLink} to="/contacts">
              Contacts
            </NavLink>
            <div className={css.userMenu}>
              <UserMenu />
            </div>
          </>
        ) : (
          <>
            <NavLink className={css.headerLink} to="/login">
              LogIn
            </NavLink>
            <NavLink className={css.headerLink} to="/register">
              Register
            </NavLink>
          </>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
};
