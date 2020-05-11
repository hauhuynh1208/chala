import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Icon} from 'react-native-elements';
import colors from './src/style/colors';
import Home from './src/screens/Home';
import SearchResult from './src/screens/SearchResult';
import Product from './src/screens/Product';
import ProductList from './src/screens/ProductList';
import ProductDetail from './src/screens/ProductDetail';
import News from './src/screens/News';
import NewsDetail from './src/screens/NewsDetail';
import Cart from './src/screens/Cart';
import CustomerInfo from './src/screens/CustomerInfo';
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
      <HomeStack.Screen
        options={{
          headerShown: false,
        }}
        name="CustomerInfo"
        component={CustomerInfo}
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
      <ProductStack.Screen
        options={{
          headerShown: false,
        }}
        name="CustomerInfo"
        component={CustomerInfo}
      />
    </ProductStack.Navigator>
  );
}

const NewsStack = createStackNavigator();

function NewsStackScreen() {
  return (
    <NewsStack.Navigator screenOptions={defaultHeaderStyle}>
      <NewsStack.Screen
        options={{headerShown: false}}
        name="News"
        component={News}
      />
      <NewsStack.Screen
        options={{
          headerTitle: 'Bài viết tin tức',
          headerBackTitleVisible: false,
        }}
        name="NewsDetail"
        component={NewsDetail}
      />
    </NewsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({route}) => ({
              tabBarVisible: getTabBarVisible(route),
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
              style: {backgroundColor: colors.primary},
            }}>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Product" component={ProductStackScreen} />
            <Tab.Screen name="News" component={NewsStackScreen} />
            <Tab.Screen name="Cart" component={Cart} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}

function getTabBarVisible(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen || 'Home';

  if (routeName === 'CustomerInfo') {
    return false;
  }
  return true;
}
