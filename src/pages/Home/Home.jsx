import css from './Home.module.css';
import { Section } from 'components/Section/Section';
import { FcContacts } from 'react-icons/fc';

export const Home = () => {
  return (
    <div className={css.titleContainer}>
      <Section title="Phone Book welcome page" />
      <span className={css.phoneIcon}>
        <FcContacts />
      </span>
    </div>
  );
};

export default Home;
