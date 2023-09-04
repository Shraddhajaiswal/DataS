import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import dummyUser from '../Components/DummyData'; // Import the dummyUser object
import UserImage from '../assets/Image/Imageaccount.png';
import DraggableBottomSheet from '../Components/DraggableBottomSheet';
import {useState} from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const HomeScreen = ({navigation}) => {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  let greeting;

  if (hours >= 4 && hours < 12) {
    greeting = 'Good morning';
  } else if (hours >= 12 && hours < 16) {
    greeting = 'Good afternoon';
  } else if (hours >= 16 && hours < 21) {
    greeting = 'Good evening';
  } else {
    greeting = 'Good night';
  }
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  const closeBottomSheet = () => {
    setBottomSheetVisible(false);
  };
  const openBottomSheet = () => {
    setBottomSheetVisible(true);
  };

  return (
    <View style={styles.container}>
      <Image source={UserImage} style={styles.userImage} />
      <Text style={styles.Time}>{greeting}</Text>
      <Text style={styles.Name}>{dummyUser.fullName}</Text>

      <TouchableOpacity onPress={openBottomSheet} style={styles.DataButton}>
        <Text numberOfLines={1} style={styles.DataText}>
          Data
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('ItemScreen')}
        style={styles.ItemScreenButton}>
        <Text numberOfLines={1} style={styles.DataText}>
          Item
        </Text>
      </TouchableOpacity>
      <DraggableBottomSheet
        isVisible={bottomSheetVisible}
        onClose={closeBottomSheet}
      />
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
  DataText: {
    fontSize: hp('1.8%'),
    width: wp('85%'),
    top: hp('0.7%'),
    fontFamily: 'Poppins-Medium',
    color: '#FFFFFF',
    padding: wp('1%'),
    left: wp('6%'),
  },
  DataButton: {
    backgroundColor: '#84BD93',
    width: wp('25%'),
    height: hp('5%'),
    borderRadius: wp('3.9%'),
    bottom: hp('20%'),
  },
  ItemScreenButton: {
    backgroundColor: '#84BD93',
    width: wp('25%'),
    height: hp('5%'),
    borderRadius: wp('3.9%'),
    bottom: hp('16%'),
  },
  userImage: {
    left: wp('0%'),
    bottom: hp('20%'),
    width: wp('35%'),
    height: hp('30%'),
    resizeMode: 'contain',
  },
  Time: {
    fontSize: hp('2.4%'),
    width: wp('85%'),
    bottom: hp('23%'),
    fontFamily: 'Poppins-Medium',
    color: '#FFF5E0',
    padding: wp('1%'),
    left: wp('28%'),
  },
  Name: {
    fontSize: hp('5%'),
    width: wp('85%'),
    bottom: hp('24%'),
    fontFamily: 'Poppins-Bold',
    color: '#EF8829',
    padding: wp('1%'),
    left: wp('7%'),
  },
});

export default HomeScreen;
