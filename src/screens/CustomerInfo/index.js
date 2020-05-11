import React from 'react';
import styles from './styles';
import {View, Text, SafeAreaView} from 'react-native';
import {Input, Button} from 'react-native-elements';
import colors from '../../style/colors';

export default class CustomerInfo extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>Thông tin khách hàng</Text>
          </View>
          <Input placeholder="Họ và tên" />
          <Input placeholder="Số điện thoại" />
          <Input placeholder="Email" />
          <View style={styles.btnWrapper}>
            <Button
              onPress={() => this.props.navigation.goBack()}
              title="Xác nhận"
              containerStyle={styles.btnContainer}
              buttonStyle={[styles.btnPrimary]}
              titleStyle={styles.btnTitle}
            />
            <Button
              onPress={() => this.props.navigation.goBack()}
              title="Huỷ bỏ"
              containerStyle={styles.btnContainer}
              buttonStyle={[styles.btnSecondary]}
              titleStyle={styles.btnTitle}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
