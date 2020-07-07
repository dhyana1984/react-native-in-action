import React from 'react'
import { Text, View, } from 'react-native'
import { colors } from '../theme'
import styles from './CenterMessage.style'

export default CenterMessage = ({ message }) => (
    <View style={styles.emptyContainer}>
        <Text style={styles.message}>{message}</Text>
    </View>
)