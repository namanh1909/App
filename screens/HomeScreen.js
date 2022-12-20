import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  TextInput,
  FlatList,
  ScrollView,
  ImageBackground,
} from 'react-native';

import * as firebase from 'firebase';
import {LoginButton, AccessToken} from 'react-native-fbsdk-next';
import Icon from 'react-native-ionicons';

import {useDrawerStatus} from '@react-navigation/drawer';

import {useNavigation, DrawerActions} from '@react-navigation/native';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import {data} from '../helper/firebase';
import { useState } from 'react';

const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder="Search"
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'YOUR API KEY',
        language: 'en',
      }}
      styles={{
        width: '80%',
        minWidth: '80%',
        height: 50,
        backgroundColor: '#ffff',
        paddingLeft: 30,
      }}
    />
  );
};

export default function Home({navigation}) {
  const user = firebase.auth().currentUser;
  console.log('user props', user);
  console.log(navigation);

  const isDrawer = useDrawerStatus();

  console.log(isDrawer);

  const [save, setSave] = useState(false)

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f5f5f5', padding: 10}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          marginLeft: 10,
          marginRight: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            {/* <Image
              source={{uri: user.photoURL}}
              style={{height: 44, width: 44, borderRadius: 22, marginRight: 10}}
            /> */}
            <Icon name="menu" size={30} />
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity onPress={() => firebase.auth().signOut()}>
            <Text>Log out</Text>
          </TouchableOpacity> */}
        <TouchableOpacity
          style={{
            height: 40,
            width: 40,
            backgroundColor: '#fff',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            shadowColor: '#6A62B7',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,

            elevation: 8,
          }}>
          <Icon name="notifications-outline" size={30} />
        </TouchableOpacity>
      </View>
      <ScrollView>

      <View
        style={{
          alignItems: 'center',
          flex: 0.2,
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 30,
          }}>
          <Icon name="mark" />
          <TextInput
            style={{
              minWidth: '80%',
              maxWidth: '80%',
              height: 50,
              backgroundColor: '#ffff',
              paddingLeft: 30,
            }}
            placeholder="Find your locaiton"
          />
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: '#fff',
              height: 50,
            }}>
            <Icon name="search" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 1}}>
        <Text
          style={{
            fontSize: 20,
            fontFamily: 'HelveticaNeue-Bold',
            paddingLeft: 20,
            marginTop: 20
          }}>
          Recommended
        </Text>
        <ScrollView>
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            horizontal={true}
            contentContainerStyle={{
              padding: 10,
            }}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    flex: 1,
                    padding: 10,
                    borderRadius: 20,
                  }}>
                  <ImageBackground
                    imageStyle={{borderRadius: 20}}
                    source={{uri: item.img}}
                    resizeMode="cover"
                    style={{
                      height: 300,
                      width: 300,
                    }}>
                    <View style={{
                      width: 80,
                      height: 36,
                      backgroundColor: "#5CCA8B",
                      borderRadius: 18,
                      justifyContent: 'center',
                      alignItems: "center",
                      marginTop: 10,
                      alignSelf: "flex-end",
                      marginRight: 10,
                    }}>
                      <Text style={{
                         fontFamily: 'HelveticaNeue-Bold',
                         fontSize: 14,
                         color: '#fff',
                      }}><Icon name="star" size={16} color="#fff" /> {item.rate}</Text>
                    </View>
                   
                    <View
                      style={{
                        justifyContent: 'space-between',
                        flexDirection: "row",
                        marginTop: 200,

                      }}>
                        <View>
                        <View style={{
                          flexDirection: "row",
                          justifyContent: "space-between"
                        }}>
                        <Text
                        style={{
                          marginLeft: 20,
                          fontFamily: 'HelveticaNeue-Bold',
                          fontSize: 20,
                          color: '#fff',
                          marginBottom: 8

                        }}>
                        {item.name}
                      </Text>
                    
                        </View>
                      
                      <Text
                        style={{
                          fontFamily: 'HelveticaNeue-Bold',
                          fontSize: 14,
                          color: '#fff',
                          marginLeft: 20,
                          marginBottom: 8

                        }}>
                        {item.address}
                      </Text>
                      <Text
                        style={{
                          fontFamily: 'HelveticaNeue-Bold',
                          fontSize: 14,
                          color: '#fff',
                          marginLeft: 20,
                        }}>
                        ${item.price}{' '}
                        <Text
                          style={{
                            fontFamily: 'HelveticaNeue',
                            fontSize: 14,
                            color: '#fff',
                            marginLeft: 20,
                          }}>
                          /per night
                        </Text>
                      </Text>
                      </View>
                      <TouchableOpacity style={{
                        marginRight: 20
                    }} onPress={() =>{
                      setSave(!save)
                    }} >          
                      <Icon name="bookmark" size={33} color={save ? "#42C175" : "#fff"}/>
                    </TouchableOpacity>
                    </View>
                  </ImageBackground>
                </View>
              );
            }}
          />
        </ScrollView>
      </View>
      <View style={{
        flex: 1,
      }}>
        <View style={{
          flexDirection: "row",
          justifyContent: 'space-between',
          marginHorizontal: 20,
        }}>
        <Text
            style={{
              fontSize: 20,
              fontFamily: 'HelveticaNeue-Bold',
            }}>
            Recently Booked
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontFamily: 'HelveticaNeue-Bold',
              color: "#5CCA8B"
            
            }}>
              See All
          </Text>
        </View>
       
          <FlatList
            data={data}
            keyExtractor={item => item.id}
            contentContainerStyle={{
              padding: 20
            }}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <TouchableOpacity style={{
                  height: 120,
                  backgroundColor: "#ffff",
                  flexDirection: "row",
                  marginTop: 10,
                  width: "100%",
                  padding: 10,
                  alignItems: "center",
                  justifyContent: 'center',
                  borderRadius: 20
                }}>
                  <View style={{
                    justifyContent: 'space-between',
                    flexDirection: "row",
                    alignItems: "center",
                    flex: 1
                  }}>
                  <Image source={{uri: item.img}} style={{
                    height: 90,
                    width: 90,
                    justifyContent: 'center',
                    borderRadius: 16,
                    marginLeft: 10
                    
                  }} />
                  <View style={{
                    alignItems: "flex-start",
                    textAlign: "left",
                    justifyContent: 'space-between',
                    flexDirection: "column"

                  }}> 
                    <Text style={{
                       fontFamily: 'HelveticaNeue-Bold',
                       fontSize: 18,
                       textAlign: "left",
                       marginBottom: 8


                    }}>{item.name}</Text>
                    <Text style={{
                       fontFamily: 'HelveticaNeue-Medium',
                       fontSize: 13,    
                       marginBottom: 8

                    }}>{item.address}</Text>
                    <View>  
                      <Text style={{
                        fontFamily: 'HelveticaNeue-Italic',
                        fontSize: 13,
                      }}><Icon name="star" size={20} color="yellow" />{item.rate} ({item.review.length} Review)</Text>
                    </View>
                  </View>
                  <View style={{
                    alignItems: "flex-end",
                  }}> 
                    <Text style={{
                       fontFamily: 'HelveticaNeue-Bold',
                       fontSize: 20,
                       color: "#5CCA8B",
                       marginBottom: 8


                    }}>{item.price}$</Text>
                    <Text style={{
                       fontFamily: 'HelveticaNeue',
                       fontSize: 13,
                       marginBottom: 8


                    }}>/night</Text>
                       <Icon name="bookmark" size={33} color={save ? "#42C175" : "#fff"}/>

                  </View>
                  </View>
                </TouchableOpacity>
                
              );
            }}
          />
      </View>
      </ScrollView>  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
