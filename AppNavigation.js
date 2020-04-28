import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import colors from './src/style/colors';
import Home from './src/screens/Home';
import SearchResult from './src/screens/SearchResult';
import Product from './src/screens/Product';
import ProductList from './src/screens/ProductList';
import ProductDetail from './src/screens/ProductDetail';
import News from './src/screens/News';
import Cart from './src/screens/Cart';
import {Provider} from 'react-redux';
import {store} from './src/store';

const defaultHeaderStyle = {
  headerStyle: {
    backgroundColor: colors.primary,
  },
  headerTintColor: 'white',
};

const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator screenOptions={defaultHeaderStyle}>
      <HomeStack.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
      <HomeStack.Screen
        options={{
          headerTitle: 'Kết quả tỉm kiếm',
          headerBackTitleVisible: false,
        }}
        name="SearchResult"
        component={SearchResult}
      />
      <HomeStack.Screen
        options={{
          headerTitle: 'Chi tiết sản phẩm',
          headerBackTitleVisible: false,
        }}
        name="ProductDetail"
        component={ProductDetail}
      />
      <HomeStack.Screen
        options={{
          headerTitle: 'Giỏ hàng',
          headerBackTitleVisible: false,
        }}
        name="Cart"
        component={Cart}
      />
    </HomeStack.Navigator>
  );
}

const ProductStack = createStackNavigator();

function ProductStackScreen() {
  return (
    <ProductStack.Navigator screenOptions={defaultHeaderStyle}>
      <ProductStack.Screen
        options={{headerShown: false}}
        name="Product"
        component={Product}
      />
      <ProductStack.Screen
        options={{
          headerBackTitleVisible: false,
        }}
        name="ProductList"
        component={ProductList}
      />
      <ProductStack.Screen
        options={{
          headerTitle: 'Chi tiết sản phẩm',
          headerBackTitleVisible: false,
        }}
        name="ProductDetail"
        component={ProductDetail}
      />
      <ProductStack.Screen
        options={{
          headerTitle: 'Giỏ hàng',
          headerBackTitleVisible: false,
        }}
        name="Cart"
        component={Cart}
      />
    </ProductStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Product') {
                iconName = 'view-dashboard';
              } else if (route.name === 'News') {
                iconName = 'clipboard-text';
              } else {
                iconName = 'cart';
              }

              // You can return any component that you like here!
              return (
                <Icon
                  type="material-community"
                  name={iconName}
                  size={size}
                  color={focused ? 'white' : 'grey'}
                />
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: 'white',
            inactiveTintColor: 'gray',
            tabStyle: {backgroundColor: colors.primary},
          }}>
          <Tab.Screen name="Home" component={HomeStackScreen} />
          <Tab.Screen name="Product" component={ProductStackScreen} />
          <Tab.Screen name="News" component={News} />
          <Tab.Screen name="Cart" component={Cart} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
