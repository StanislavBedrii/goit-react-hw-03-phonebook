import { v4 as uuid } from 'uuid';

export default function addContact(name, number) {
  const contactItem = {
    id: uuid().slice(30),
    name,
    number,
  };
  this.setState(prevState => {
    const contactFound = prevState.contacts.find(el => el.name === name);
    if (contactFound) {
      alert(`${name} is already in contacts`);
      return {
        filter: name,
      };
    }
    return {
      contacts: [...prevState.contacts, contactItem],
    };
  });
}
