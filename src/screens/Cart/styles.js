import {StyleSheet} from 'react-native';
import {verticalScale, scale, moderateScale} from '../../style/scaling';
import colors from '../../style/colors';

export default StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: verticalScale(100),
    marginHorizontal: scale(5),
    marginVertical: verticalScale(5),
    borderColor: '#eeeeee',
    borderWidth: 0.8,
    shadowColor: '#000',
    shadowOpacity: 0.16,
    shadowOffset: {height: verticalScale(3)},
    shadowRadius: 6,
    elevation: 1,
  },
  productImgContainer: {
    flex: 3,
  },
  productImg: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },
  productText: {
    flex: 7,
    color: 'grey',
    fontSize: moderateScale(16),
    marginLeft: verticalScale(10),
  },
  checkoutBtn: {
    backgroundColor: colors.secondary,
    width: '100%',
    height: verticalScale(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkoutText: {
    color: 'white',
    fontWeight: '600',
  },
});
