import React from 'react';
import styles from './styles';
import {TouchableOpacity, View, Text, SafeAreaView, Image} from 'react-native';

class News extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          {new Array(5).fill(1).map((item, index) => (
            <TouchableOpacity key={index} style={styles.productContainer}>
              <Image
                source={{
                  uri: 'https://loremflickr.com/g/320/240/paris,girl/all',
                }}
                style={styles.productImage}
              />
              <Text numberOfLines={1} style={styles.productName}>
                MÁY LẠNH DI ĐỘNG SAC-6500
              </Text>
              <Text style={styles.productPrice}>Giá: Liên hệ</Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    );
  }
}

export default News;
