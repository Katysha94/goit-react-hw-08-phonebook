import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import Notiflix from 'notiflix';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = evt => {
    evt.preventDefault();

    const newContact = {
      id: nanoid(),
      name: evt.target.elements.name.value,
      number: evt.target.elements.number.value,
    };

    const existingContact = contacts.find(
      contact => contact.name === newContact.name
    );
    if (existingContact) {
      Notiflix.Notify.failure(`Contact ${newContact.name} already exists!`);
    } else {
      dispatch(addContact(newContact));
    }

    const form = evt.currentTarget;
    form.reset();
  };

  return (
    <div>
      <form className={css.contactForm} onSubmit={handleSubmit}>
        <label className={css.contactFormLabel} htmlFor="name">
          Name
        </label>
        <input
          className={css.contactFormInput}
          type="text"
          name="name"
          id="name"
          pattern={
            "^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          }
          required
        />
        <label className={css.contactFormLabel} htmlFor="number">
          Number
        </label>
        <input
          type="tel"
          name="number"
          className={css.contactFormInput}
          id="number"
          pattern={
            '\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}'
          }
          required
        />
        <button type="submit" className={css.contactFormBtn}>
          Add contact
        </button>
      </form>
    </div>
  );
};
