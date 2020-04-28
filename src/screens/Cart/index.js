import React from 'react';
import styles from './styles';
import {View, Text, ScrollView, Image, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import {actions} from '../../actions/actions';
import {TouchableOpacity} from 'react-native-gesture-handler';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
  }

  componentDidMount() {
    const cart = this.props.retrieveCart();
    if (this.state.cart !== cart) {
      this.setState({cart});
    }
  }

  render() {
    const {cart} = this.state;
    return (
      <SafeAreaView>
        <ScrollView style={{backgroundColor: 'white'}}>
          {cart &&
            cart.map((prod) => (
              <View style={styles.itemContainer} key={prod.idsp}>
                <View style={styles.productImgContainer}>
                  <Image
                    style={styles.productImg}
                    source={{uri: prod.hinhsp}}
                  />
                </View>
                <Text style={styles.productText}>{prod.tensp}</Text>
              </View>
            ))}
          <TouchableOpacity style={styles.checkoutBtn}>
            <Text style={styles.checkoutText}>ĐĂNG KÝ MUA HÀNG</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}

export default connect(mapStateToProps, actions)(Cart);
