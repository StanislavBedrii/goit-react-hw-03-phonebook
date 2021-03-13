export default function handleInput(evt) {
  const { name, value } = evt.target;
  this.setState({ [name]: value });
}
