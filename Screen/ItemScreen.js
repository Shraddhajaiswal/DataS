import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Text,
} from 'react-native';
import ItemImage from '../assets/Image/ItemImg.png';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FavImg from '../assets/Image/Favourite.png';
import BackImg from '../assets/Image/headerBack.png';

const ItemScreen = ({navigation}) => {
  const [isCardExpanded, setIsCardExpanded] = useState(false);
  const fadeAnim = new Animated.Value(1); // Initial opacity: 0

  const toggleCardExpansion = () => {
    setIsCardExpanded(!isCardExpanded);

    Animated.timing(fadeAnim, {
      toValue: isCardExpanded ? 0 : 1, // Toggle between 0 (hidden) and 1 (visible)
      duration: 500, // Adjust the duration as needed
      useNativeDriver: false, // Set to true if you want to use the native driver (requires certain properties to be animatable)
    }).start();
  };
  const cardHeight = isCardExpanded ? hp('85%') : hp('33%'); // Adjust the expanded and collapsed heights as needed

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}
        style={styles.BackBtn}>
        <Image source={BackImg} style={styles.backButtonImage} />
      </TouchableOpacity>

      <Text style={styles.Textdata}>Types of Data</Text>
      <TouchableOpacity onPress={toggleCardExpansion}>
        <Animated.View
          style={[styles.DetailCard, {height: cardHeight, opacity: fadeAnim}]}>
          <Image source={ItemImage} style={styles.ItemmImage} />
          <Image source={FavImg} style={styles.FavImg} />
          <Text style={styles.TextItemName}>Sushi</Text>
          <View style={styles.ViewContainer}>
            <Text style={styles.ItemDetaiText}>
              Sushi is a beloved and iconic Japanese dish that has captured the
              hearts and palates of people worldwide. Its history is both
              fascinating and rich, reflecting the evolution of Japanese cuisine
              and the cultural exchange between Japan and other countries. The
              origins of sushi can be traced back to ancient Southeast Asia,
              where people preserved fish by fermenting it with salt and rice.
              This method was initially used to preserve fish for long journeys,
              as refrigeration did not exist at the time. Over time, this
              preservation process evolved, and the rice was eaten along with
              the fish. Sushi, as we know it today, began to take shape in Japan
              during the Edo period (17th-19th century). At this time, street
              vendors in Edo (now Tokyo) began selling a type of fast food
              called "Edo-mae zushi." It consisted of vinegared rice served with
              various toppings, including seafood like raw fish and shellfish.
              Edo-mae zushi was often enjoyed at food stalls and small
              restaurants.
            </Text>
          </View>
        </Animated.View>
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
  Textdata: {
    fontSize: hp('4%'),
    width: wp('85%'),
    bottom: hp('20%'),
    fontFamily: 'Poppins-Bold',
    color: '#FFF5E0',
    padding: wp('1%'),
    left: wp('2%'),
  },
  BackBtn: {
    backgroundColor: '#171717',
    width: wp('16%'),
    height: hp('5%'),
    borderRadius: wp('3.9%'),
    bottom: hp('23%'),
    right: wp('34%'),
  },
  backButtonImage: {
    //left: wp('4%'),
    top: hp('2%'),
    width: wp('3%'),
    height: hp('2%'),
    resizeMode: 'contain',
  },
  ViewContainer: {
    padding: hp('1%'),
    width: wp('10%'),
    height: hp('80%'),
    top: hp('28%'),
  },
  TextItemName: {
    fontSize: hp('2%'),
    width: wp('85%'),
    bottom: hp('48%'),
    fontFamily: 'Poppins-Bold',
    color: '#FFF5E0',
    padding: wp('1%'),
    left: wp('6%'),
  },
  ItemDetaiText: {
    fontSize: hp('1.5%'),
    width: wp('85%'),
    bottom: hp('48%'),
    fontFamily: 'Poppins-Medium',
    color: '#FFF5E0',
    padding: wp('1%'),
  },
  DetailCard: {
    backgroundColor: '#25221D',
    width: wp('87%'),
    borderRadius: hp('5%'),
    overflow: 'hidden',
    bottom: hp('0%'),
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
    bottom: hp('26%'),
  },
  FavImg: {
    left: wp('74%'),
    bottom: hp('41%'),
    width: wp('5%'),
    height: hp('10%'),
    resizeMode: 'contain',
  },
  ItemmImage: {
    left: wp('14%'),
    bottom: hp('3%'),
    width: wp('60%'),
    height: hp('40%'),
    resizeMode: 'contain',
    alignItems: 'center',
  },
  Time: {
    fontSize: hp('2.4%'),
    width: wp('85%'),
    bottom: hp('29%'),
    fontFamily: 'Poppins-Medium',
    color: '#FFF5E0',
    padding: wp('1%'),
    left: wp('19.5%'),
  },
  Name: {
    fontSize: hp('5%'),
    width: wp('85%'),
    bottom: hp('30%'),
    fontFamily: 'Poppins-Bold',
    color: '#EF8829',
    padding: wp('1%'),
    left: wp('7%'),
  },
});

export default ItemScreen;
