import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        source={require('../assets/background.jpg')} 
        style={styles.background}>
            <View style={styles.loginButton}></View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
   background: {
       flex: 1
   } ,
   loginButton: {
       width: '100%',
       height: 70,
       backgroundColor: '#fc5c65'
   }
})

export default WelcomeScreen;