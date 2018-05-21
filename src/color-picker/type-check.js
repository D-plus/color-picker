import PropTypes from 'prop-types';

export const listOfColors = PropTypes.arrayOf(
  PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })
);

export const selectPopoverTypes = {
  popoverClassName: PropTypes.string.isRequired,
  selectBoxIconName: PropTypes.string.isRequired,
  selectBoxIconColor: PropTypes.string.isRequired,
  toggleComponent: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  popoverContentRenderer: PropTypes.shape({
    contentContainer: PropTypes.func,
    extraProps: PropTypes.object
  }),
  popoverClassName: PropTypes.string,
  popoverMargin: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    })
  ),
  value: PropTypes.string,
  chageTemporaryHexValue: PropTypes.func
};

export const colorPickerTypes = {
  color: PropTypes.string.isRequired,
  colors: listOfColors,
  onChange: PropTypes.func.isRequired
};
