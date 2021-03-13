import PropTypes from 'prop-types';
import s from './Filter.module.css';

export default function Filter({ searchFilter, handler }) {
  return (
    <div className={s.filter}>
      <label>
        Filter{' '}
        <input
          type="text"
          name="filter"
          className={s.input}
          value={searchFilter}
          onChange={handler}
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  searchFilter: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};
