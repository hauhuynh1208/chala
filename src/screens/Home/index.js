import React from 'react';
import styles from './styles';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {Icon, Input} from 'react-native-elements';
import SlideShow from './SlideShow';
import Section from './Section';
import {connect} from 'react-redux';
import {actions} from '../../actions/actions';
import {logo} from '../../assets';
// import {SafeAreaView} from 'react-native-safe-area-context';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slide: [],
      keyword: '',
      quatCongNghiep: [],
      lyToGiay: [],
      ttMyNghe: [],
    };
  }

  async componentDidMount() {
    await Promise.all([
      this.props.getSlide(),
      this.props.getQuatCongNghiep(),
      this.props.getLyToGiay(),
      this.props.getMyNghe(),
    ]);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let state = {};
    if (nextProps.general.slide !== prevState.slide) {
      state.slide = nextProps.general.slide;
    }
    if (nextProps.quat !== prevState.quatCongNghiep) {
      state.quatCongNghiep = nextProps.quat;
    }
    if (nextProps.giay !== prevState.lyToGiay) {
      state.lyToGiay = nextProps.giay;
    }
    if (nextProps.tt !== prevState.ttMyNghe) {
      state.ttMyNghe = nextProps.tt;
    }
    return Object.keys(state).length ? state : null;
  }

  handleSearch = () => {
    // navigate search result screen
    this.props.navigation.navigate('SearchResult', {
      keyword: this.state.keyword,
    });
  };

  handlePress = (sp) => {
    this.props.navigation.navigate('ProductDetail', {sp: sp});
  };

  renderContent = (sp = []) => {
    return sp.map((item) => (
      <TouchableOpacity
        key={item.idsp}
        style={styles.productContainer}
        onPress={() => this.handlePress(item)}>
        <Image
          source={{
            uri: item.hinhsp,
          }}
          style={styles.productImage}
        />
        <Text numberOfLines={1} style={styles.productName}>
          {item.tensp}
        </Text>
        <Text style={styles.productPrice}>Giá: Liên hệ</Text>
      </TouchableOpacity>
    ));
  };
  render() {
    const {slide} = this.state;
    return (
      <SafeAreaView style={styles.screenContainer}>
        <ScrollView>
          <View style={styles.header}>
            <Image source={logo} style={styles.logo} />
            <View style={styles.iconContainer}>
              <Icon
                type="material-community"
                name="cart"
                size={24}
                color="black"
              />
            </View>
          </View>
          <Input
            leftIcon={
              <Icon
                type="material-icon"
                name="search"
                size={24}
                color="black"
                onPress={this.handleSearch}
              />
            }
            leftIconContainerStyle={{marginLeft: 0}}
            placeholder="Bạn muốn tìm kiếm gì?"
            placeholderTextColor="grey"
            containerStyle={styles.searchContainer}
            inputContainerStyle={styles.searchInputContainer}
            inputStyle={styles.searchInput}
            onChangeText={(text) => this.setState({keyword: text})}
            value={this.state.keyword}
          />
          <SlideShow slide={slide ? slide : []} />
          <View style={styles.content}>
            <View style={styles.gifContainer}>
              <Image
                source={{
                  uri: 'https://chala.com.vn/upload/img/quang-cao/4.gif',
                }}
                style={styles.gif}
              />
            </View>
            <Section
              title="Quạt công nghiệp"
              content={this.renderContent(this.state.quatCongNghiep.data)}
            />
            <Section
              title="Ly tô giấy"
              content={this.renderContent(this.state.lyToGiay.data)}
            />
            <Section
              title="Trang trí mỹ nghệ"
              content={this.renderContent(this.state.ttMyNghe.data)}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return {
    general: state.general,
    quat: state.quat,
    giay: state.giay,
    tt: state.tt,
  };
}

export default connect(mapStateToProps, actions)(Home);
