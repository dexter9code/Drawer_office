import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Pressable,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const HomeScreen = () => {
  const searchbaranimation = useRef(new Animated.Value(0)).current;
  const search_btn_animation = useRef(new Animated.Value(0)).current;
  const search_color_animation = useRef(new Animated.Value(0)).current;
  const keyboardFocus = useRef<TextInput>();

  let bg: any = '#fff';

  function onPressSearchHandler() {
    Animated.timing(searchbaranimation, {
      duration: 350,
      useNativeDriver: false,
      toValue: 250,
    }).start();

    Animated.timing(search_btn_animation, {
      duration: 100,
      useNativeDriver: false,
      toValue: 1,
      delay: 150,
    }).start();

    bg = searchbaranimation.interpolate({
      inputRange: [0, 1],
      outputRange: ['#fff', '#00adef'],
    });

    setTimeout(() => {
      keyboardFocus.current?.focus();
    }, 350);
  }

  const onPressSearchBtnHandler = () => {
    console.log(`Pressed....`);
  };

  return (
    <View style={styles.root}>
      <Animated.View
        style={[
          styles.search_box_container,
          {backgroundColor: bg, borderWidth: search_btn_animation},
        ]}>
        <Pressable style={styles.img_container} onPress={onPressSearchHandler}>
          <Image
            style={styles.img}
            source={{
              uri: `https://cdn-icons-png.flaticon.com/512/149/149309.png`,
            }}
          />
        </Pressable>
        <Animated.View
          style={[styles.text_input_container, {width: searchbaranimation}]}>
          <TextInput
            placeholder="Search"
            style={[styles.search_input]}
            placeholderTextColor={'#fff'}
            ref={keyboardFocus}
          />
        </Animated.View>
        <Animated.View
          style={[
            styles.search_btn_container,
            {opacity: search_btn_animation},
          ]}>
          <Pressable onPress={onPressSearchBtnHandler}>
            <Text>Search</Text>
          </Pressable>
        </Animated.View>
      </Animated.View>
      <Icon name="home" size={30} color="#000" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  search_box_container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '92%',
    padding: 8,
    borderRadius: 5,
  },
  img_container: {
    width: 25,
    height: 25,
    overflow: 'hidden',
  },
  img: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  search_input: {
    // backgroundColor: '#ccc',
    borderBottomWidth: 0.5,
    color: '#f7f7f7',
    padding: 2,
  },
  text_input_container: {
    // backgroundColor: 'orangered',
    marginLeft: 3,
  },
  search_btn_container: {
    backgroundColor: 'pink',
    position: 'absolute',
    right: 8,
    padding: 6,
    borderRadius: 15,
  },
});
