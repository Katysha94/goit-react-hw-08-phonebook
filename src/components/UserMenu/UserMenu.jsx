import css from './UserMenu.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectuseData } from 'redux/auth/selectors';
import { logOutThunk } from 'redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectuseData);

  const onLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <>
      <span className={css.userTitle}>Hello, {userData.name}</span>
      <button onClick={onLogOut} className={css.logOutBtn}>
        Log out
      </button>
    </>
  );
};
