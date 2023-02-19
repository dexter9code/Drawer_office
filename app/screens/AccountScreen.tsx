import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet, Image, Button} from 'react-native';

const AccountScreen = () => {
  const navigation = useNavigation();

  const onPressHandler = () => {
    navigation.navigate('login');
  };

  return (
    <View style={styles.root}>
      <View style={styles.img_container}>
        <Image
          source={{
            uri: `https://cdn-icons-png.flaticon.com/512/1144/1144709.png`,
          }}
          style={styles.img}
        />
      </View>
      <Text style={styles.text}>Account</Text>
      <Button title="LOGIN" onPress={onPressHandler} />
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  img_container: {
    width: 150,
    height: 150,
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
});
