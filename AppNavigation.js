import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import colors from './src/style/colors';
import Home from './src/screens/Home';
import Product from './src/screens/Product';
import News from './src/screens/News';
import Cart from './src/screens/Cart';
import {Provider} from 'react-redux';
import {store} from './src/store';

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
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Product" component={Product} />
          <Tab.Screen name="News" component={News} />
          <Tab.Screen name="Cart" component={Cart} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
