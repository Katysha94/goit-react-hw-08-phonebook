import css from './FilterContact.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { setFilterContacts } from 'redux/contacts/filterSlice';

export const FilterContact = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = evt => {
    const { value } = evt.target;
    dispatch(setFilterContacts(value));
  };

  return (
    <div className={css.filterContainer}>
      <label className={css.filterLabel}>Find contacts by Name</label>
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        placeholder="Enter name"
        value={filter}
        onChange={handleChange}
      ></input>
    </div>
  );
};
