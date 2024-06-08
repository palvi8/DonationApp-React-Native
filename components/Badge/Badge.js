import React, {useRef, useState} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import style from './Badge.style';
import {horizontalScale} from '../../assets/styles/scaling';

const Badge = ({title}) => {
  const [width, setWidth] = useState(0);
  const textRef = useRef(null);
  const paddingHorizontal = 10;
  const badgeWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };
  return (
    <View style={[style.badge, badgeWidth]}>
      <Text
        onTextLayout={event => setWidth(event.nativeEvent.lines[0].width)}
        ref={textRef}
        style={style.title}>
        {title}
      </Text>
    </View>
  );
};

Badge.defaultProps = {
  title: '',
};

Badge.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Badge;
