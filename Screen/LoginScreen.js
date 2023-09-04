// LoginScreen.js

import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import FingerPrint from '../assets/Image/Logo.png';
import Google1 from '../assets/Image/Google.png';
import FaceBook1 from '../assets/Image/Facebook.png';
import Twitter1 from '../assets/Image/Twitter.png';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.LogoTextView}>
        <Image source={FingerPrint} style={styles.StyleImage1} />

        <Text numberOfLines={1} style={styles.TextAppName}>
          Data Scout
        </Text>
      </View>

      <Text numberOfLines={1} style={styles.TextSingin}>
        Sign in
      </Text>
      <View style={styles.ButtonView}>
        <TouchableOpacity style={styles.GoogleButton}>
          <Image source={Google1} style={styles.GoogleButtonImage} />

          <Text numberOfLines={1} style={styles.TextGoogle}>
            With Google
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.FaceBookButton}>
          <Image source={FaceBook1} style={styles.FaceBookButtonImage} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.TwitterButton}>
          <Image source={Twitter1} style={styles.TwitterButtonImage} />
        </TouchableOpacity>
      </View>
      <Text numberOfLines={1} style={styles.TextWithEmail}>
        or with Email
      </Text>

      <TextInput
        style={styles.inputEmail}
        placeholderTextColor="#FFF5E0"
        fontFamily="Poppins-Regular"
        fontSize={hp('1.7%')}
        placeholder="Your Email"
        //onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.inputPassword}
        placeholderTextColor="#FFF5E0"
        fontFamily="Poppins-Regular"
        fontSize={hp('1.7%')}
        placeholder="Password"
        secureTextEntry
        //onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}
        style={styles.SignInButton}>
        <Text numberOfLines={1} style={styles.TextSignin2}>
          Log In
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#171717',
  },

  TextWithEmail: {
    fontSize: hp('1.8%'),
    width: wp('85%'),
    bottom: hp('3%'),
    fontFamily: 'Poppins-Medium',
    color: '#73665C',
    padding: wp('1%'),
    left: wp('30%'),
  },
  TextSignin2: {
    fontSize: hp('1.8%'),
    width: wp('85%'),
    top: hp('1.3%'),
    fontFamily: 'Poppins-Medium',
    color: '#FFFFFF',
    padding: wp('1%'),
    left: wp('30%'),
  },
  SignInButton: {
    backgroundColor: '#84BD93',
    width: wp('75%'),
    height: hp('6.5%'),
    borderRadius: wp('3.9%'),
    top: hp('8%'),
  },
  ButtonView: {
    width: wp('80%'),

    height: hp('7%'),
    bottom: hp('6%'),
  },

  GoogleButton: {
    backgroundColor: '#EF8829',
    width: wp('42%'),
    height: hp('6%'),
    borderRadius: wp('3.9%'),
    bottom: hp('0%'),
    left: wp('2%'),
  },

  GoogleButtonImage: {
    left: wp('5.7%'),
    top: hp('2%'),
    width: wp('4%'),
    height: hp('2.5%'),
    resizeMode: 'contain',
  },

  FaceBookButton: {
    backgroundColor: '#171717',
    width: wp('12%'),
    height: hp('6%'),
    borderRadius: wp('3.9%'),
    bottom: hp('6%'),
    left: wp('48%'),
    borderColor: '#3F2D20',
    borderWidth: hp('0.15%'),
  },
  FaceBookButtonImage: {
    left: wp('4%'),
    top: hp('2%'),
    width: wp('4%'),
    height: hp('2.5%'),
    resizeMode: 'contain',
  },

  TwitterButton: {
    backgroundColor: '#171717',
    width: wp('12%'),
    height: hp('6%'),
    borderRadius: wp('3.9%'),
    bottom: hp('12%'),
    left: wp('64.3%'),
    borderColor: '#3F2D20',
    borderWidth: hp('0.15%'),
  },
  TwitterButtonImage: {
    left: wp('4%'),
    top: hp('2%'),
    width: wp('4%'),
    height: hp('2.5%'),
    resizeMode: 'contain',
  },
  LogoTextView: {
    bottom: wp('20%'),
  },
  StyleImage1: {
    width: wp('25%'),
    height: hp('18%'),
    top: hp('0%'),
    left: wp('0%'),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  TextGoogle: {
    fontSize: hp('1.8%'),
    width: wp('85%'),
    bottom: hp('1.1%'),
    fontFamily: 'Poppins-Medium',
    color: '#FFFFFF',
    padding: wp('1%'),
    left: wp('13%'),
  },
  TextAppName: {
    fontSize: hp('4.5%'),
    width: wp('85%'),
    bottom: hp('0%'),
    fontFamily: 'Poppins-Medium',
    color: '#FFF5E0',
    padding: wp('1%'),
    left: wp('16%'),
  },
  TextSingin: {
    fontSize: hp('3.6%'),
    width: wp('85%'),
    bottom: hp('10%'),
    fontFamily: 'Poppins-Bold',
    color: '#FFF5E0',
    padding: wp('1%'),
    left: wp('30%'),
  },

  inputEmail: {
    color: '#FFF5E0',
    width: wp('75%'),
    height: hp('6.5%'),
    borderColor: '#3F2D20',
    borderWidth: hp('0.15%'),
    borderRadius: wp('3.9%'),
    padding: hp('2%'),
    top: hp('0%'),
  },
  inputPassword: {
    color: '#FFF5E0',
    width: wp('75%'),
    height: hp('6.5%'),
    borderColor: '#3F2D20',
    borderWidth: hp('0.15%'),
    borderRadius: wp('3.9%'),
    padding: hp('2%'),
    top: hp('2%'),
  },
});

export default LoginScreen;
