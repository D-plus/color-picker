import PropTypes from 'prop-types';

export const listOfColors = PropTypes.arrayOf(PropTypes.shape({
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}));

export const selectPopoverTypes = {
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
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })),
  value: PropTypes.string,
  chageTemporaryHexValue: PropTypes.func,
  selectBoxClassName: PropTypes.string,
  className: PropTypes.string
};

export const colorPickerTypes = {
  color: PropTypes.string.isRequired,
  colors: listOfColors,
  onChange: PropTypes.func.isRequired
};

export const colorItemTypes = {
  handleColorItemClick: PropTypes.func.isRequired,
  item: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
  }).isRequired,
  onKeyUp: PropTypes.func.isRequired,
  className: PropTypes.string
};

export const colorsListTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })),
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string
};

export const popoverTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  boundWithElement: PropTypes.object,
  margin: PropTypes.number,
  className: PropTypes.string
};

export const RGBTuneBoxTypes = {
  onChange: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  value: PropTypes.string,
  className: PropTypes.string,
  defaultRGBState: PropTypes.shape({
    r: PropTypes.number,
    g: PropTypes.number,
    b: PropTypes.number
  })
};

export const selectBoxTypes = {
  iconName: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  bindRef: PropTypes.object,
  className: PropTypes.string
};
