import React from 'react';
import styles from './styles';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Icon, Input} from 'react-native-elements';
import Section from './Section';
import {connect} from 'react-redux';
import {actions} from '../../actions/actions';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quatCongNghiep: [],
      lyToGiay: [],
      ttMyNghe: [],
    };
  }

  async componentDidMount() {
    await Promise.all([
      this.props.getQuatCongNghiep(),
      this.props.getLyToGiay(),
      this.props.getMyNghe(),
    ]);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let state = {};
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

  renderContent = (sp = []) => {
    return sp.map((item) => (
      <TouchableOpacity key={item.idsp} style={styles.productContainer}>
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
    return (
      <SafeAreaView style={{flex: 0}}>
        <ScrollView>
          <View style={styles.header}>
            <Text>this is home</Text>
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
              />
            }
            leftIconContainerStyle={{marginLeft: 0}}
            placeholder="Bạn muốn tìm kiếm gì?"
            placeholderTextColor="grey"
            containerStyle={styles.searchContainer}
            inputContainerStyle={styles.searchInputContainer}
            inputStyle={styles.searchInput}
          />
          <View style={styles.slideContainer}>
            <Image
              source={{uri: 'https://loremflickr.com/g/320/240/paris,girl/all'}}
              style={styles.slide}
            />
          </View>
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
    quat: state.quat,
    giay: state.giay,
    tt: state.tt,
  };
}

export default connect(mapStateToProps, actions)(Home);
