import {useState} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {NavigationState} from '@react-navigation/native';
import {Text, View, StyleSheet, Image, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialIcons';

const CustomDrawer = (props: any) => {
  const [isDark, setIsDark] = useState(false);
  return (
    <View style={styles.root}>
      <DrawerContentScrollView {...props}>
        <View style={styles.info_outer_container}>
          <View style={styles.image_container}>
            <Image
              style={styles.image}
              source={{
                uri: `https://fastly.picsum.photos/id/64/4326/2884.jpg?hmac=9_SzX666YRpR_fOyYStXpfSiJ_edO3ghlSRnH2w09Kg`,
              }}
            />
          </View>
          <View style={styles.text_container}>
            <Text style={[styles.text, {fontWeight: 'bold', fontSize: 18}]}>
              Jasmine Jackson{' '}
            </Text>
            <Text style={[styles.text, styles.secondary_text, {marginLeft: 2}]}>
              @JJ_secrets
            </Text>
            <View style={styles.followers_container}>
              <Text style={[styles.text, {marginRight: 8}]}>
                1 <Text style={styles.secondary_text}>Following</Text>{' '}
              </Text>
              <Text style={styles.text}>
                100k <Text style={styles.secondary_text}>Followers</Text>{' '}
              </Text>
            </View>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.last_container}>
        <Pressable
          style={styles.dark_btn_container}
          onPress={() => setIsDark(!isDark)}>
          {isDark ? (
            <Icon name="moon" size={24} color={'white'} />
          ) : (
            <Icon name="moon-outline" size={24} color={'white'} />
          )}
        </Pressable>
        <MIcon
          name="logout"
          size={24}
          style={{marginRight: 10}}
          color={'white'}
        />
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#14202b',
    // padding: 10,
  },
  info_outer_container: {
    // backgroundColor: 'orangered',
    flex: 0.3,
    padding: 10,
  },
  image_container: {
    width: 60,
    height: 60,
    borderRadius: 30,
    overflow: 'hidden',
    marginVertical: 6,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  text_container: {
    // backgroundColor: '#00abcd',
    justifyContent: 'center',
    padding: 6,
  },
  text: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    paddingVertical: 2,
  },
  followers_container: {
    flexDirection: 'row',
    // backgroundColor: '#ccc',
    alignItems: 'center',
    marginTop: 10,
  },
  secondary_text: {
    color: '#8a97a4',
  },
  last_container: {
    flexDirection: 'row',
    // backgroundColor: '#00abde',
    position: 'absolute',
    bottom: 80,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dark_btn_container: {
    paddingHorizontal: 8,
    // backgroundColor: 'orangered',
    marginLeft: 8,
  },
});
