import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from './../config/colors';
import {} from '@expo/vector-icons';

export default function ListItemDeleteAction() {
    return (
        <View style={styles.container}></View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width: 70,
    }
})