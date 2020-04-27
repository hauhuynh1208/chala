import React from 'react';
import styles from './styles';
import {View, Text, ScrollView, Image} from 'react-native';

export default (props) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>{props.title}</Text>
      <ScrollView
        style={styles.scrollContentContainer}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {props.content}
      </ScrollView>
    </View>
  );
};
