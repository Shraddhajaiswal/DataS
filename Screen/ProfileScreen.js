import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import UserImage from '../assets/Image/ProfileImg.png';
import {Platform} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.CardContainer1}>
        <Image source={UserImage} style={styles.userImage} />
        <Text style={styles.TextUserName}>Reeta Ambawni</Text>
        <View style={styles.Line} />

        <Text style={styles.TextHistory}>Searched History </Text>

        <Text
          style={Platform.select({
            android: styles.DataHistoryAndroid,
            ios: styles.DataHistory,
          })}>
          Data Saved
        </Text>
      </View>
      <View style={styles.CardContainer2}>
        <Text style={styles.TextGeneral}>General</Text>
        <View style={styles.Line1} />

        <Text style={styles.TextPersonal}>Personal deatil</Text>
        <Text style={styles.TextPersonalDetail}>
          You can edit your information about your email address, phone number,
          or physical address.
        </Text>
      </View>
      <View style={styles.Line2} />
      <Text style={styles.TextPass}>Change Passcode</Text>
      <Text style={styles.TextNotification}>Notifications</Text>
      <Text style={styles.TextData2}>
        Manage if you want to receive updates about Data.
      </Text>
      <View style={styles.Line3} />
      <TouchableOpacity
        onPress={() => navigation.navigate('LoginScreen')}
        style={styles.TouchLogout}>
        <Text style={styles.TextLogout}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //zIndex: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#171717',
  },
  TouchLogout: {
    width: wp('30%'),
    right: wp('17%'),
    height: hp('5%'),
    bottom: hp('13%'),
  },
  TextLogout: {
    fontSize: hp('2%'),
    width: wp('25%'),
    fontFamily: 'Poppins-Bold',
    color: '#EF8829',
    padding: wp('1%'),
  },
  CardContainer1: {
    height: hp('23%'),
    backgroundColor: '#25221D',
    width: wp('87%'),
    borderRadius: hp('5%'),
    top: hp('4%'),
  },
  CardContainer2: {
    height: hp('50%'),
    backgroundColor: '#25221D',
    width: wp('87%'),
    borderRadius: hp('5%'),
    top: hp('8%'),
  },
  Line: {
    width: wp('87%'),
    height: hp('0.2%'),
    backgroundColor: '#3F2D20',
    bottom: hp('7%'),
  },
  Line1: {
    width: wp('87%'),
    height: hp('0.2%'),
    backgroundColor: '#3F2D20',
    top: hp('16%'),
  },
  Line2: {
    width: wp('87%'),
    height: hp('0.2%'),
    backgroundColor: '#3F2D20',
    bottom: hp('18%'),
  },
  Line3: {
    width: wp('87%'),
    height: hp('0.2%'),
    backgroundColor: '#3F2D20',
    bottom: hp('19%'),
  },
  TextUserName: {
    fontSize: hp('2%'),
    width: wp('85%'),
    bottom: hp('10%'),
    fontFamily: 'Poppins-Bold',
    color: '#FFF5E0',
    padding: wp('1%'),
    left: wp('23%'),
  },
  TextPass: {
    fontSize: hp('1.5%'),
    width: wp('85%'),
    bottom: hp('22%'),
    fontFamily: 'Poppins-Medium',
    color: '#FFF5E0',
    padding: wp('1%'),
    left: wp('10%'),
  },
  TextNotification: {
    fontSize: hp('1.5%'),
    width: wp('85%'),
    bottom: hp('20%'),
    fontFamily: 'Poppins-Medium',
    color: '#FFF5E0',
    padding: wp('1%'),
    left: wp('10%'),
  },
  TextGeneral: {
    fontSize: hp('1.5%'),
    width: wp('85%'),
    top: hp('2%'),
    fontFamily: 'Poppins-Bold',
    color: '#FFF5E0',
    padding: wp('1%'),
    left: wp('10%'),
  },
  TextPersonal: {
    fontSize: hp('1.5%'),
    width: wp('85%'),
    top: hp('3%'),
    fontFamily: 'Poppins-Medium',
    color: '#FFF5E0',
    padding: wp('1%'),
    left: wp('10%'),
  },
  TextPersonalDetail: {
    fontSize: hp('1.5%'),
    width: wp('75%'),
    top: hp('4%'),
    fontFamily: 'Poppins-Medium',
    color: '#FFF5E0',
    padding: wp('1%'),
    left: wp('10%'),
  },
  TextData2: {
    fontSize: hp('1.5%'),
    width: wp('75%'),
    bottom: hp('20%'),
    fontFamily: 'Poppins-Medium',
    color: '#FFF5E0',
    padding: wp('1%'),
    left: wp('5%'),
  },
  TextHistory: {
    fontSize: hp('1.5%'),
    width: wp('85%'),
    bottom: hp('5%'),
    fontFamily: 'Poppins-Medium',
    color: '#FFF5E0',
    padding: wp('1%'),
    left: wp('10%'),
  },
  DataHistory: {
    fontSize: hp('1.5%'),
    width: wp('85%'),
    bottom: hp('8%'),
    fontFamily: 'Poppins-Medium',
    color: '#FFF5E0',
    padding: wp('1%'),
    left: wp('53%'),
  },
  DataHistoryAndroid: {
    fontSize: hp('1.5%'),
    width: wp('85%'),
    bottom: hp('8.4%'),
    fontFamily: 'Poppins-Medium',
    color: '#FFF5E0',
    padding: wp('1%'),
    left: wp('53%'),
  },
  userImage: {
    left: wp('35%'),
    bottom: hp('5%'),
    width: wp('15%'),
    height: hp('20%'),
    resizeMode: 'contain',
  },
});

export default ProfileScreen;
