

import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Button,
  Image,
  TouchableOpacity
} from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';

  import * as firebase from 'firebase';
import Ionicons from 'react-native-vector-icons/Ionicons';




function CustomDrawerContent(props) {
    const width = useWindowDimensions().width * 0.3;
    const user = firebase.auth().currentUser;

  
    return (
      <DrawerContentScrollView {...props}>
        <View style={styles.menuContainer}>
            <View style={{
                flexDirection: "row",
                alignItems: "center"
            }}>
                <Image source={{uri: user.photoURL}} style={{height: 80, width: 80, borderRadius: 40, marginRight: 10}} />
                <View>
                    <Text style={{
                        fontFamily: "HelveticaNeue-Bold"
                    }}>{user.displayName}</Text>
                    <Text numberOfLines={1} style={{
                        maxWidth: 130,
                        fontFamily: "HelveticaNeue-Bold"
                        
                    }}>{user.providerData[0].email}</Text>
                    <Text style={{
                        fontFamily: "HelveticaNeue-Bold"
                    }}>Customer</Text>
                </View>
                
            </View>
        <View>
            <TouchableOpacity onPress={() => firebase.auth().signOut()} style={{
                flexDirection: "row"
            }}>
                <Ionicons name="log-out-outline" size={22} style={{
                    marginRight: 10
                }} />
                <Text>Log out</Text>
            </TouchableOpacity>
        </View>
        </View>
      </DrawerContentScrollView>
    );
  }
  

export default CustomDrawerContent

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    menuContainer: {
      flex: 1,
      padding: 20
      
    },
    menuItemsCard: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    circleContainer: {
      width: 50,
      height: 50,
      borderRadius: 25,
      padding: 10,
    },
  });