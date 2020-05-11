import {StyleSheet} from 'react-native';
import {verticalScale, scale, width, moderateScale} from '../../style/scaling';
import colors from '../../style/colors';

export default StyleSheet.create({
  headerTitleContainer: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: colors.secondary,
    fontSize: moderateScale(20),
  },
  btnWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    marginHorizontal: scale(5),
    marginVertical: verticalScale(10),
  },
  btnPrimary: {
    backgroundColor: colors.primary,
  },
  btnSecondary: {
    backgroundColor: colors.secondary,
  },
  btnTitle: {
    fontSize: moderateScale(16),
  },
});
