import React from 'react';
import styles from './styles';
import {
  TouchableOpacity,
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {WebView} from 'react-native-webview';
import {connect} from 'react-redux';
import {actions} from '../../actions/actions';

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      activeTab: 0,
    };
  }
  componentDidMount() {}
  pressPrevious = () => {
    let {currentIndex} = this.state;
    if (currentIndex === 0) {
      currentIndex = 3;
    } else {
      currentIndex -= 1;
    }
    this.setState({currentIndex});
  };

  pressNext = () => {
    let {currentIndex} = this.state;
    if (currentIndex === 3) {
      currentIndex = 0;
    } else {
      currentIndex += 1;
    }
    this.setState({currentIndex});
  };

  addToCard = (sp) => {
    this.props.addToCart(sp);
    this.props.navigation.navigate('Cart');
  };

  render() {
    const {sp} = this.props.route.params;
    const {activeTab, currentIndex} = this.state;
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.imgGallery}>
              <Icon
                type="antdesign"
                name="stepbackward"
                color="black"
                onPress={this.pressPrevious}
              />
              <View style={styles.imgContainer}>
                <Image
                  source={{
                    uri: [sp.hinhsp, sp.hinhbsp, sp.hinhcsp][currentIndex],
                  }}
                  style={styles.img}
                />
              </View>
              <Icon
                type="antdesign"
                name="stepforward"
                color="black"
                onPress={this.pressNext}
              />
            </View>
            <View>
              <Text style={styles.productName}>{sp.tensp}</Text>
            </View>
            <View style={styles.tabContainer}>
              <TouchableOpacity
                style={[styles.tab, activeTab === 0 && styles.activeTab]}
                onPress={() => this.setState({activeTab: 0})}>
                <Text style={styles.tabText}>Thông số kỹ thuật</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.tab, activeTab === 1 && styles.activeTab]}
                onPress={() => this.setState({activeTab: 1})}>
                <Text style={styles.tabText}>Mô tả sản phẩm</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.content}>
              <WebView
                source={{html: activeTab === 0 ? sp.thongtinsp : sp.motasp}}
              />
            </View>
          </View>
        </ScrollView>
        <View style={styles.bottomBar}>
          <View style={styles.bottomIconContainer}>
            <Icon
              type="material-community"
              name="cart"
              size={30}
              color="white"
            />
          </View>
          <TouchableOpacity
            style={styles.bottomTextContainer}
            onPress={() => this.addToCard(sp)}>
            <Text style={styles.muaNgayText}>MUA NGAY</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}

export default connect(mapStateToProps, actions)(ProductDetail);
