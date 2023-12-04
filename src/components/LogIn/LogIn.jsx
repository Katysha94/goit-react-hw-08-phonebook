import css from './LogIn.module.css';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/operations';

export const LogIn = () => {
  const dispatch = useDispatch();

  const onSubmit = evt => {
    evt.preventDefault();
    const email = evt.currentTarget.elements.userEmail.value;
    const password = evt.currentTarget.elements.userPassword.value;

    const formData = {
      email,
      password,
    };

    dispatch(loginThunk(formData));
  };

  return (
    <form className={css.form} onSubmit={onSubmit}>
      <label className={css.label}>
        <p>Email:</p>
        <input
          className={css.input}
          type="email"
          name="userEmail"
          placeholder="Enter user email..."
          autoComplete="username"
          required
        />
      </label>
      <label className={css.label}>
        <p>Password:</p>
        <input
          className={css.input}
          type="password"
          name="userPassword"
          placeholder="Enter user password..."
          minLength={7}
          autoComplete="current-password"
          required
        />
      </label>

      <button className={css.formBtn} type="submit">
        Sign In
      </button>
    </form>
  );
};
