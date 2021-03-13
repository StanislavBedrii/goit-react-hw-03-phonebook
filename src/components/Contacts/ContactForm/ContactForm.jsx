import { Component } from 'react';
import PropTypes from 'prop-types';

import s from './ContactForm.module.css';

import handleInput from '../../../utils/handleInput';
import handleSubmit from './handleSubmit.js';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInput = handleInput.bind(this);
  handleSubmit = handleSubmit.bind(this);

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <div className={s.overlay}>
          <label>
            Name{' '}
            <input
              type="text"
              name="name"
              className={s.input}
              value={this.state.name}
              onChange={this.handleInput}
            />
          </label>

          <label>
            Number{' '}
            <input
              type="number"
              name="number"
              className={s.input}
              value={this.state.number}
              onChange={this.handleInput}
            />
          </label>
        </div>

        <button type="submit" className={s.button} disabled={!this.state.name}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onAddedContact: PropTypes.func.isRequired,
};

export default ContactForm;
