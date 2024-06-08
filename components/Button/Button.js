import React from 'react';
import {Pressable, Text} from 'react-native';
import PropTypes from 'prop-types';
import style from './Button.style';

const Button = ({title, isDisbaled, onPress}) => {
  return (
    <Pressable
      style={[style.button, isDisbaled && style.disabled]}
      disabled={isDisbaled}
      onPress={onPress}>
      <Text style={style.title}>{title}</Text>
    </Pressable>
  );
};

Button.defaultProps = {
  title: '',
  isDisbaled: false,
  onPress: () => {},
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  isDisbaled: PropTypes.bool,
  onPress: PropTypes.func,
};

export default Button;
