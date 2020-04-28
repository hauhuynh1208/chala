import {StyleSheet} from 'react-native';
import {
  verticalScale,
  scale,
  width,
  moderateScale,
  height,
} from '../../style/scaling';
import colors from '../../style/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: height,
  },
  imgGallery: {
    flexDirection: 'row',
    marginTop: verticalScale(5),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imgContainer: {
    width: '80%',
    height: verticalScale(250),
  },
  img: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },
  productName: {
    color: 'grey',
    fontSize: moderateScale(16),
    marginTop: verticalScale(10),
    alignSelf: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    height: verticalScale(50),
  },
  tab: {
    flex: 1,
    height: '100%',
    backgroundColor: '#bdbdbd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: colors.secondary,
  },
  tabText: {
    color: 'white',
    fontWeight: '500',
  },
  content: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    display: 'flex',
    flexDirection: 'row',
    height: verticalScale(50),
    width: '100%',
  },
  bottomIconContainer: {
    backgroundColor: colors.primary,
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomTextContainer: {
    backgroundColor: colors.secondary,
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  muaNgayText: {
    color: 'white',
    fontSize: moderateScale(16),
    fontWeight: '500',
  },
});
