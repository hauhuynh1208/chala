import React from 'react';
import styles from './styles';
import {TouchableOpacity, View, Text, SafeAreaView, Image} from 'react-native';
import {connect} from 'react-redux';
import {actions} from '../../actions/actions';

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spCat: [],
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let state = {};
    if (nextProps.sp.spCat !== prevState.spCat) {
      state.spCat = nextProps.sp.spCat;
    }
    return Object.keys(state).length ? state : null;
  }
  componentDidMount() {
    this.props.fetchProductCat();
  }

  handlePress = (cate) => {
    this.props.navigation.navigate('ProductList', {productCat: cate});
  };

  render() {
    const {spCat} = this.state;
    return (
      <SafeAreaView>
        <View style={styles.container}>
          {spCat &&
            spCat.map((item) => (
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
              </TouchableOpacity>
            ))}
        </View>
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return {
    sp: state.sp,
  };
}

export default connect(mapStateToProps, actions)(Product);
