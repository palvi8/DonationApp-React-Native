import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  button: {
    backgroundColor: '#2979F2',
    height: verticalScale(55),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },
  title: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    fontWeight: '600',
    color: '#ffffff',
    textAlign: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
});

export default style;
