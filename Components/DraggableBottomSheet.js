/* eslint-disable react-native/no-inline-styles */
// DraggableBottomSheet.js
import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import Modal from 'react-native-modal';
import Bar from '../assets/Image/buttontab.png';
import Close from '../assets/Image/iconclose.png';
import axios from 'axios';
import {useEffect} from 'react';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const DraggableBottomSheet = ({isVisible, onClose}) => {
  const [selectedOption, setSelectedOption] = useState('todos');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const options = ['Todos', 'Posts'];

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${selectedOption.toLowerCase()}`,
      );
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  }, [selectedOption]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const renderItem = item => (
    <View style={styles.ListComponents} key={item.id}>
      <View style={styles.TextView}>
        <Text numberOfLines={3} style={styles.textStyle1}>
          {item.title || item.name}
        </Text>
      </View>
    </View>
  );

  const handleRadioButtonPress = value => {
    setSelectedOption(value);
    fetchData();
  };

  // eslint-disable-next-line no-unused-vars
  const [dragging, setDragging] = useState(false);

  const handleDragStart = () => {
    setDragging(true);
  };

  const handleDragEnd = () => {
    setDragging(false);
  };

  return (
    <Modal
      propagateSwipe={true}
      backdropOpacity={0}
      isVisible={isVisible}
      swipeDirection={['down']}
      onSwipeComplete={onClose}
      onSwipeStart={handleDragStart}
      onSwipeEnd={handleDragEnd}
      style={{
        justifyContent: 'flex-end',
        margin: 0,
      }}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.TabTouch}>
          <Image source={Bar} style={styles.BarStyle} />
        </TouchableOpacity>
        <Text style={styles.textStyle}>Rendered List's</Text>
        <TouchableOpacity onPress={onClose} style={styles.CloseTouch}>
          <Image source={Close} style={styles.CloseStyle} />
        </TouchableOpacity>

        <View style={styles.ListView}>
          {options.map(option => (
            <TouchableOpacity
              key={option}
              onPress={() => handleRadioButtonPress(option)}
              style={
                selectedOption === option
                  ? styles.selectedOptionButton
                  : styles.optionButton
              }>
              <Text
                style={
                  selectedOption === option
                    ? styles.selectedOptionText
                    : styles.optionText
                }>
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.ScrollContainer}>
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <TouchableOpacity>
              {isLoading ? (
                <ActivityIndicator size="large" />
              ) : (
                data.map(item => renderItem(item))
              )}
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  ListBg: {
    padding: hp('0%'),
    bottom: hp('5%'),
  },
  ScrollContainer: {
    top: hp('5%'),
    height: hp('70%'),
  },
  container: {
    borderTopLeftRadius: hp('5%'),
    borderTopRightRadius: hp('5%'),
    padding: hp('1%'),
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#201D19',
    height: hp('90%'),
  },
  ListComponents: {
    width: wp('90%'),
    padding: hp('1%'),
    //backgroundColor: '#171717',
  },
  TextView: {
    padding: hp('1%'),
    width: wp('85%'),
    height: hp('10%'),
    borderRadius: hp('3%'),
    backgroundColor: '#171717',
  },
  textStyle1: {
    fontSize: hp('1.5%'),
    fontFamily: 'Poppins-Medium',
    color: '#FFF5E0',
    padding: wp('4%'),
    height: hp('10%'),

    //bottom: hp('3%'),
  },
  textStyle: {
    fontSize: hp('2.4%'),
    width: wp('85%'),
    top: hp('3%'),
    fontFamily: 'Poppins-Medium',
    color: '#FFF5E0',
    padding: wp('1%'),
    left: wp('25%'),
  },
  optionButton: {
    marginVertical: wp('1%'),
    padding: hp('2%'),
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  selectedOptionButton: {
    marginVertical: wp('2%'),
    padding: wp('2%'),
    borderRadius: hp('2%'),
    backgroundColor: '#EF8829',
    alignItems: 'center',
  },
  optionText: {
    fontSize: hp('2.4%'),
    color: 'white',
  },
  selectedOptionText: {
    fontSize: hp('2.4%'),
    color: 'white',
  },
  BarStyle: {
    width: wp('20%'),
    height: hp('0.3%'),
    resizeMode: 'contain',
  },
  CloseStyle: {
    width: wp('2.5%'),
    height: hp('2.5%'),
    resizeMode: 'contain',
  },
  CloseTouch: {
    width: wp('5%'),
    height: hp('3%'),
    bottom: hp('0.3%'),
    left: wp('36%'),
  },
  TabTouch: {
    width: wp('20%'),
    height: hp('1%'),
    top: hp('2%'),
  },
  listContainer: {
    //backgroundColor: '#FFFFFF', // Adjust the background color if needed
    width: wp('90%'),
    flexGrow: 1,
  },
  scrollContent: {
    paddingVertical: hp('2%'), // Add padding to content if needed
  },
  ListView: {
    top: hp('1%'),
    height: hp('10%'),
    //backgroundColor: 'green',
  },
});

export default DraggableBottomSheet;
