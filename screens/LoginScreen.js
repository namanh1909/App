// import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

import {LoginButton, AccessToken, LoginManager} from 'react-native-fbsdk-next';

import * as firebase from 'firebase';
import Icon from 'react-native-ionicons';
// import * as Facebook from 'expo-facebook';



export default function Login({navigation}) {
  const handleAuth = async () => {
    try {
      await Facebook.initializeAsync({
        appId: '1809415679395379',
      });
      const result = await Facebook.logInWithReadPermissionsAsync({
        permissions: ['public_profile', 'email'],
      });
      if (result.type === 'success') {
        const credential = firebase.auth.FacebookAuthProvider.credential(
          result.token,
        );

        const response = await fetch(
          `https://graph.facebook.com/me?access_token=${result.token}&fields=first_name,last_name,picture`,
        );
        const userData = await response.json();

        await firebase.auth().signInWithCredential(credential);

        await Facebook.logOutAsync();
      }
    } catch ({message}) {
      alert(`Facebook Login Error: ${message}`);
    }
  };

  return (
    <View style={styles.container}>
      
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image source={require('../assets/location.png')} style={{
        marginBottom: 20
      }}  />
      <Text style={{
        margin: 20,
        fontSize: 24
      }}>Let’s discover the world with us</Text>
      <TouchableOpacity style={{
        height: 50,
        width: "30%",
        borderRadius: 25,
        backgroundColor: "#6A62B7",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginLeft: 38

      }} onPress={ () => {
        LoginManager.logInWithPermissions(['public_profile', 'email', 'user_friends']).then(
          function (result) {
            if (result.isCancelled) {
              console.log('Login cancelled')
            } else {
              AccessToken.getCurrentAccessToken().then(async data => {
                console.log(data.accessToken.toString());
                const credential =
                  firebase.auth.FacebookAuthProvider.credential(
                    data.accessToken.toString(),
                  );
                await firebase.auth().signInWithCredential(credential);
              });
            }
          },
          function (error) {
            console.log('Login fail with error: ' + error)
          }
        )
      
      }}>
        <Text style={{
          color: "#fff",
        }}>Facebook</Text>
        <Icon name="facebook-outline" />
      </TouchableOpacity>
      </View>
   



      {/* <LoginButton
      style={{
        flex: 1,
        height: 50,
        width: 180,
        backgroundColor: "#6A62B7"
      }}
          onLoginFinished={(error, result) => {
            if (error) {
              console.log('login has error: ' + result.error);
            } else if (result.isCancelled) {
              console.log('login is cancelled.');
            } else {
              AccessToken.getCurrentAccessToken().then(async data => {
                console.log(data.accessToken.toString());
                const credential =
                  firebase.auth.FacebookAuthProvider.credential(
                    data.accessToken.toString(),
                  );
                await firebase.auth().signInWithCredential(credential);
              });
            }
          }}
          onLogoutFinished={() => console.log('logout.')}
        /> */}
      {/* <Text>Login Screen</Text>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => handleAuth()}>
          <Text>Facebook Login</Text>
        </TouchableOpacity>
        <LoginButton
          onLoginFinished={(error, result) => {
            if (error) {
              console.log('login has error: ' + result.error);
            } else if (result.isCancelled) {
              console.log('login is cancelled.');
            } else {
              AccessToken.getCurrentAccessToken().then(async data => {
                console.log(data.accessToken.toString());
                const credential =
                  firebase.auth.FacebookAuthProvider.credential(
                    data.accessToken.toString(),
                  );
                await firebase.auth().signInWithCredential(credential);
              });
            }
          }}
          onLogoutFinished={() => console.log('logout.')}
        />
      </View> */}
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6E3DB',
  },
});
