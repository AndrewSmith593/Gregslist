import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        source={require('../assets/background.jpg')} 
        style={styles.background}>
            <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../assets/logo-red.png')} />
            <Text>Sell the stuff you don't want!</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
   background: {
       flex: 1,
       justifyContent: 'flex-end',
       alignItems: 'center',
   } ,
   loginButton: {
       width: '100%',
       height: 70,
       backgroundColor: '#fc5c65',
   },
   registerButton: {
       width: '100%',
       height: 70,
       backgroundColor: '#4ecdc4',
   },
   logo: {
       height: 100,
       width: 100,
       marginBottom: 10,
    },
    logoContainer: {        
        position: 'absolute',
        top: 70,
        alignItems: 'center',
   }
})

export default WelcomeScreen;