export default function onDeleteContactItem(contactId) {
  this.setState(prevState => {
    return {
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    };
  });
}
