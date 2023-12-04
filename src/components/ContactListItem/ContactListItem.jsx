import css from './ContactListIte.module.css';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { IoMdContact } from 'react-icons/io';

export const ContactListItem = ({ id, name, number, handleDelete }) => {
  return (
    <li className={css.contactListItem} id={id}>
      <IoMdContact className={css.contactIcon} />
      {name}: {number}
      <button
        className={css.contactListBtn}
        type="button"
        onClick={handleDelete}
      >
        <MdOutlineDeleteForever />
      </button>
    </li>
  );
};
