/* eslint-disable no-unused-vars */
// App.js

import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack'; // Import stack navigator
import {Easing} from 'react-native';
import HomeScreen from './Screen/HomeScreen';
import ProfileScreen from './Screen/ProfileScreen';
import SplashScreen from './Components/SplashScreen';
import LoginScreen from './Screen/LoginScreen';
import {View} from 'react-native';
import {StyleSheet, SafeAreaView, Image} from 'react-native';
import Tab2ColorImage from './assets/Image/Favourite2.png';
import Tab2 from './assets/Image/Favourite.png';
import Tab1ColorImage from './assets/Image/Home.png';
import Tab1 from './assets/Image/Home2.png';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import DraggableBottomSheet from './Components/DraggableBottomSheet';
import ItemScreen from './Screen/ItemScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator(); // Create a stack navigator

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    resetDisplacementThreshold: 0.01,
    resetSpeedThreshold: 0.01,
  },
};

const closeConfig = {
  animation: 'timing',
  config: {
    duration: 1200,
    easing: Easing.linear,
  },
};

const PopupScreen = () => {
  return (
    <View style={styles.Splashcontainer}>
      <SplashScreen />
    </View>
  );
};

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        gestureEnabled: true,
        gestutreDirection: 'horizontal',
        transitionSpec: {
          open: config,
          close: closeConfig,
        },
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="ProfileScreen"
      screenOptions={{
        gestureEnabled: true,
        gestutreDirection: 'horizontal',
        transitionSpec: {
          open: config,
          close: closeConfig,
        },
        headerShown: false,
      }}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          zIndex: 1,
          backgroundColor: '#171717',
          borderTopWidth: wp('0%'),
          elevation: hp('0%'),
          borderTopColor: '#171717',
          shadowColor: '#ffffff',
          shadowOpacity: 0,
          shadowOffset: {
            height: 0,
          },
          shadowRadius: 0,
          tabBarColor: '#171717',
        },

        headerShown: false,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          borderTopWidth: hp('0%'),
          borderTopColor: '#171717',
          title: '',
          tabBarColor: '#171717',
          tabBarLabel: '',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <View style={styles.FeedView2}>
              <Image
                source={focused ? Tab1ColorImage : Tab1}
                style={styles.logo}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: '',
          tabBarColor: '#171717',
          tabBarLabel: '',
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({focused}) => (
            <View style={styles.FeedView2}>
              <Image
                source={focused ? Tab2ColorImage : Tab2}
                style={styles.logo}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        //zIndex: 1,
        gestureEnabled: false,
        gestutreDirection: 'horizontal',
        backgroundColor: '#171717',
        transitionSpec: {
          open: config,
          close: closeConfig,
        },
        headerShown: false,
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="ItemScreen" component={ItemScreen} />
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
      <Stack.Screen name="HomeScreen" component={HomeTabs} />
    </Stack.Navigator>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 8000); // Delayed for 8 seconds
  }, []);

  if (loading) {
    return <PopupScreen />;
  }

  return (
    <NavigationContainer independent={true}>
      <SafeAreaView style={styles.root}>
        <AppStack />
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#171717',
    //headerShown: false,
  },
  FeedView2: {
    //padding: hp('1%'),
    width: wp('20%'),
    height: hp('5%'),
    right: wp('1%'),
    bottom: hp('0.5%'),

    borderRadius: hp('1%'),
  },
  logo: {
    width: wp('5%'),
    height: hp('5%'),
    alignContent: 'center',
    left: wp('7.8%'),
    top: hp('0%'),
    resizeMode: 'contain',
  },
  // Splash screen styling

  Splashcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
