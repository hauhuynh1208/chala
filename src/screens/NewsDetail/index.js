import React from 'react';
import styles from './styles';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';

class NewsDetail extends React.Component {
  render() {
    const {news} = this.props.route.params;
    return (
      <View style={{flex: 1}}>
        <WebView source={{html: news.baiviet}} />
      </View>
    );
  }
}

export default NewsDetail;
