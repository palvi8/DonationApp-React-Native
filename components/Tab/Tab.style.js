import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  tab: {
    backgroundColor: '#2979F2',
    height: verticalScale(50),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },
  title: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(17),
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
  inactiveTab: {
    backgroundColor: '#f3f5f9',
  },
  inactiveTitle: {
    color: '#79869F',
  },
});

export default style;
