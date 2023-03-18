import Contacts from '../components/Contacts';
import Filter from '../components/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDeleteContacts } from 'redux/contacts/contacts-operations';
import { setFilter } from '../redux/filter/filter-slice';
import { getFilteredContacts } from '../redux/contacts/contacts-selectors';
import { getFilter } from '../redux/filter/filter-selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();

  const onDelete = id => {
    dispatch(fetchDeleteContacts(id));
  };
  const filteredContacts = useSelector(getFilteredContacts);

  const filter = useSelector(getFilter);

  const onChangeFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  const isContacts = Boolean(filteredContacts.length);
  return (
    <>
      <Filter onChangeFilter={onChangeFilter} value={filter} />
      {isContacts && (
        <Contacts contacts={filteredContacts} onDelete={onDelete} />
      )}
      {!isContacts && <p>There are no contacts in your Phone Book...</p>}
    </>
  );
};

export default ContactsPage;
