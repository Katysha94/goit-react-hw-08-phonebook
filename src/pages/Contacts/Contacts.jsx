import { useSelector } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { FilterContact } from 'components/FilterContact/FilterContact';
import { ContactList } from 'components/ContactList/ContactList';
import { Loader } from 'components/Loader/Loader';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <div>
      <ContactForm />
      <FilterContact />
      {isLoading && !error && <Loader />}
      <ContactList />
    </div>
  );
};

export default Contacts;
