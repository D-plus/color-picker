import PropTypes from 'prop-types';

export const listOfColors = PropTypes.arrayOf(
  PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })
);
