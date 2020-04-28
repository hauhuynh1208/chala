import {StyleSheet} from 'react-native';
import {verticalScale, scale, width, moderateScale} from '../../style/scaling';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
  },
  productContainer: {
    backgroundColor: 'white',
    width: width / 2 - verticalScale(10),
    height: verticalScale(150),
    margin: verticalScale(5),
    alignItems: 'center',
    borderColor: '#eeeeee',
    borderWidth: 0.8,
    shadowColor: '#000',
    shadowOpacity: 0.16,
    shadowOffset: {height: verticalScale(3)},
    shadowRadius: 6,
    elevation: 1,
  },
  productImage: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
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
