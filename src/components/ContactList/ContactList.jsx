import s from '../ContactsForms/ContactsForm.module.scss';
import ContactListItem from '../ContactListItem/ContactListItem';

// список добавленных контактов и удаление
const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <ul className={s.contact__list}>
      {contacts.map((contact) => (
        <ContactListItem {...contact} onRemoveContact={onRemoveContact} />
      ))}
    </ul>
  );
};

export default ContactList;
