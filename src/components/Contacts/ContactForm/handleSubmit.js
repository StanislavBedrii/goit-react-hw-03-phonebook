export default function handleSubmit(evt) {
  evt.preventDefault();
  this.props.onAddedContact(this.state.name, this.state.number);
  this.setState({
    name: '',
    number: '',
  });
}
