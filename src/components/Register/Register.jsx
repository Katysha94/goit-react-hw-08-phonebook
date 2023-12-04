import css from './Register.module.css';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/operations';

export const Register = () => {
  const dispatch = useDispatch();

  const onSubmit = evt => {
    evt.preventDefault();

    const name = evt.currentTarget.elements.userName.value;
    const email = evt.currentTarget.elements.userEmail.value;
    const password = evt.currentTarget.elements.userPassword.value;

    const formData = {
      name,
      email,
      password,
    };
    dispatch(registerThunk(formData));
  };

  return (
    <form className={css.form} onSubmit={onSubmit} autoComplete="off">
      <label className={css.label}>
        <p>Name:</p>
        <input
          className={css.input}
          type="text"
          name="userName"
          placeholder="Enter user name..."
          required
        />
      </label>
      <label className={css.label}>
        <p>Email:</p>
        <input
          className={css.input}
          type="email"
          name="userEmail"
          placeholder="Enter user email..."
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
          required
        />
      </label>

      <button className={css.formBtn} type="submit">
        Sign In
      </button>
    </form>
  );
};
