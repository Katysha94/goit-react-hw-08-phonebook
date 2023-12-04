import css from './ContactList.module.css';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectVisibleContact } from 'redux/contacts/selectors';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import { useEffect } from 'react';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filterContacts = useSelector(selectVisibleContact);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getFilteredContacts = () => {
    if (filterContacts) {
      return filterContacts;
    } else {
      return contacts;
    }
  };

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <ul className={css.contactList}>
        {getFilteredContacts().map(({ id, name, number }) => (
          <ContactListItem
            key={id}
            id={id}
            name={name}
            number={number}
            handleDelete={() => handleDelete(id)}
          />
        ))}
      </ul>
    </>
  );
};
