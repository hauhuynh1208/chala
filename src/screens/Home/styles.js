import {StyleSheet} from 'react-native';
import {verticalScale, scale, width, moderateScale} from '../../style/scaling';

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: verticalScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: verticalScale(2.5),
    marginVertical: verticalScale(2.5),
  },
  iconContainer: {
    position: 'absolute',
    height: '100%',
    right: 20,
    justifyContent: 'center',
  },
  searchContainer: {
    backgroundColor: '#bdbdbd',
    borderRadius: verticalScale(20),
    marginVertical: verticalScale(2.5),
  },
  searchInputContainer: {
    borderBottomWidth: 0,
  },
  searchInput: {
    marginLeft: scale(5),
    color: 'black',
  },
  slideContainer: {
    marginVertical: verticalScale(2.5),
    height: verticalScale(150),
  },
  slide: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },
  content: {
    paddingHorizontal: scale(5),
  },
  gifContainer: {
    marginVertical: verticalScale(2.5),
    height: verticalScale(150),
  },
  gif: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },
  sectionContainer: {
    marginVertical: verticalScale(2.5),
  },
  sectionTitle: {
    width: '100%',
    backgroundColor: '#e91e63',
    color: 'white',
    marginBottom: verticalScale(10),
    fontSize: moderateScale(20),
  },
  scrollContentContainer: {
    width: width + scale(5),
    // height: verticalScale(120),
  },
  productContainer: {
    width: verticalScale(120),
    height: verticalScale(120),
    marginRight: scale(5),
    alignItems: 'center',
  },
  productImage: {
    flex: 4,
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
