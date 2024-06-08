import React from 'react';
import {View, Text} from 'react-native';
import PropTyepes from 'prop-types';
import style from './Header.style';

const Header = ({title, type, color}) => {
  const styleToApply = () => {
    switch (type) {
      case 1:
        return style.titleStyle1;
      case 2:
        return style.titleStyle2;
      case 3:
        return style.titleStyle3;
      default:
        return style.titleStyle1;
    }
  };
  return (
    <View>
      <Text style={[styleToApply(), color && {color: color}]}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: 'default title',
  type: 1,
  color: '#000000',
};

Header.propTypes = {
  title: PropTyepes.string,
  type: PropTyepes.number,
  color: PropTyepes.string,
};

export default Header;
