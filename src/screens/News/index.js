import React from 'react';
import styles from './styles';
import {TouchableOpacity, View, Text, SafeAreaView, Image} from 'react-native';
import {connect} from 'react-redux';
import {actions} from '../../actions/actions';

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let state = {};
    if (nextProps.news !== prevState.news) {
      state.news = nextProps.news;
    }
    return Object.keys(state).length ? state : null;
  }
  componentDidMount() {
    this.props.getNews();
  }

  handlePress = (news) => {
    this.props.navigation.navigate('NewsDetail', {news: news});
  };

  render() {
    const {news} = this.state;
    return (
      <SafeAreaView>
        <View style={styles.container}>
          {news.data &&
            news.data.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.productContainer}
                onPress={() => this.handlePress(item)}>
                <Image
                  source={{
                    uri: item.hinh,
                  }}
                  style={styles.productImage}
                />
                <Text numberOfLines={1} style={styles.productName}>
                  {item.ten}
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
    news: state.news,
  };
}

export default connect(mapStateToProps, actions)(News);
