import React from 'react';
import styles from './styles';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {connect} from 'react-redux';
import {actions} from '../../actions/actions';

class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sp: [],
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let state = {};
    if (nextProps.general.productList !== prevState.sp) {
      state.sp = nextProps.general.productList;
    }
    return Object.keys(state).length ? state : null;
  }

  componentDidMount() {
    const {keyword} = this.props.route.params;
    this.props.queryProduct(keyword);
  }
  render() {
    const {sp} = this.state;
    return (
      <View style={styles.container}>
        {sp.length ? (
          sp.map((item) => (
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
              <Text style={styles.productPrice}>Giá: {item.giasp}</Text>
            </TouchableOpacity>
          ))
        ) : (
          <Text>{this.props.route.params.keyword}</Text>
        )}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    general: state.general,
  };
}

export default connect(mapStateToProps, actions)(SearchResult);
