import * as React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import FingerPrint from '../assets/Image/Logo.png';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      {/*  Star Image */}
      <Image source={FingerPrint} style={styles.StyleImage1} />
      <View style={styles.TextView}>
        <Text numberOfLines={1} style={styles.TextAppName}>
          Data Scout
        </Text>
        <Text numberOfLines={1} style={styles.TextAppDetail}>
          Data Collector App
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#171717',
    flex: 1,
    width: wp('100%'),
  },
  TextView: {
    right: wp('4%'),
  },
  StyleImage1: {
    width: wp('25%'),
    height: hp('50%'),
    top: hp('13%'),
    left: wp('0%'),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  TextAppName: {
    fontSize: hp('6%'),
    width: wp('85%'),
    bottom: hp('0.5%'),
    fontFamily: 'Poppins-Medium',
    color: '#FFF5E0',
    padding: wp('1%'),
    left: wp('15%'),
  },
  TextAppDetail: {
    fontSize: hp('2.3%'),
    width: wp('85%'),
    bottom: hp('1%'),
    fontFamily: 'Poppins-Bold',
    color: '#EF8829',
    padding: wp('1%'),
    left: wp('26%'),
  },
});

export default SplashScreen;
