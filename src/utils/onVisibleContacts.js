export default function onVisibleContacts() {
  return this.state.contacts.filter(el =>
    el.name.toLowerCase().includes(this.state.filter.toLowerCase()),
  );
}
