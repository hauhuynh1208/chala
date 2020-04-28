import {StyleSheet} from 'react-native';
import {verticalScale, scale, width, moderateScale} from '../../style/scaling';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  productContainer: {
    width: width / 2 - verticalScale(10),
    height: verticalScale(120),
    margin: verticalScale(5),
    alignItems: 'center',
  },
  productImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },
  productName: {
    color: 'grey',
    fontSize: moderateScale(16),
    marginTop: verticalScale(2.5),
  },
  productPrice: {
    color: '#e91e63',
    fontSize: moderateScale(14),
  },
});
