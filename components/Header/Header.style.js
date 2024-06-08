import {StyleSheet} from 'react-native';
import {scaleFontSize} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  titleStyle1: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(24),
    lineHeight: scaleFontSize(29),
    fontWeight: 600,
  },
  titleStyle2: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(18),
    lineHeight: scaleFontSize(22),
    fontWeight: 600,
  },
  titleStyle3: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    fontWeight: 600,
  },
});

export default style;
