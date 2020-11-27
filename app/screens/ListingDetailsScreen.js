import React from 'react'
import { Image, View, StyleSheet } from 'react-native'
import AppText from '../components/AppText';
import colors from './../config/colors';
import ListItem from './../components/ListItem';

export default function ListingDetailsScreen() {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/chair.jpg')}/>
            <View style={styles.detailsContainer}>
            <AppText style={styles.title}>A chair for sale</AppText>
            <AppText style={styles.price}>$150</AppText>
            <View style={styles.userContainer}>

            <ListItem 
            image={require('./../assets/andrew.jpg')}
            title="Andrew Roberts"
            subTitle="5 Listings"
            />
            </View>
            </View>
        </View>
    )
}
 
const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 300,
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10,

    },
    title: {
        fontSize: 24, 
        fontWeight: '500',
    },
    userContainer: {
        marginVertical: 40,

    }
})