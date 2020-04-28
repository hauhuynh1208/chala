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
import {connect} from 'react-redux';
import {actions} from '../../actions/actions';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spList: [],
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let state = {};
    if (nextProps.sp.spList !== prevState.spList) {
      state.spList = nextProps.sp.spList;
    }
    return Object.keys(state).length ? state : null;
  }

  componentDidMount() {
    const {productCat} = this.props.route.params;
    this.props.getProductList(productCat.idsp);
  }

  handlePress = (sp) => {
    this.props.navigation.navigate('ProductDetail', {sp: sp});
  };

  render() {
    const {spList} = this.state;
    this.props.navigation.setOptions({
      title: this.props.route.params.productCat.tensp,
    });
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            {spList &&
              spList.map((item) => (
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
        </ScrollView>
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return {
    sp: state.sp,
  };
}

export default connect(mapStateToProps, actions)(ProductList);
