import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.root}>
      <View style={styles.img_container}>
        <Image
          source={{
            uri: `https://cdn-icons-png.flaticon.com/512/7856/7856126.png`,
          }}
          style={styles.img}
        />
      </View>
      <Text style={styles.text}>LOGIN SCREEN</Text>
    </View>
  );
};

export default LoginScreen;

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
