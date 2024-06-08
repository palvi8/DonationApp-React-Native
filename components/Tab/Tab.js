import React,{useRef, useState} from 'react';
import {Pressable, Text} from 'react-native';
import PropTypes from 'prop-types';
import style from './Tab.style';
import {horizontalScale} from '../../assets/styles/scaling';

const Tab = ({title, inActive, onPress}) => {
  const [width, setWidth] = useState(0);
  const textRef = useRef();
  const paddingHorizontal = 33;
  const tabWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };
  return (
    <Pressable
      style={[style.tab, inActive && style.inactiveTab, tabWidth]}
      disabled={inActive}
      onPress={onPress}>
      <Text
        onTextLayout={event => setWidth(event.nativeEvent.lines[0].width)}
        style={[style.title, inActive && style.inactiveTitle]}>
        {title}
      </Text>
    </Pressable>
  );
};

Tab.defaultProps = {
  title: '',
  inActive: false,
  onPress: () => {},
};

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  inActive: PropTypes.bool,
  onPress: PropTypes.func,
};

export default Tab;
