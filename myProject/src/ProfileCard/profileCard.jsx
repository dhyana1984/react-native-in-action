import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import styles from './profileCard.style'
import PropTypes from 'prop-types'
import update from 'immutability-helper'

const userImage = require('./user.jpeg')
const data = [{
    image: userImage,
    name: 'Chris Xiong',
    occupation: 'Full Stack Developer',
    description: 'Chris is a really great JavaScript developer.'
        + ' He loves using JS to biuld React Native applications'
        + ' for iOS and Android',
    showThumbnail: true
}]

const ProfileCard = (props) => {
    const { image, name, occupation, description, onPress, showThumbnail } = props
    let containerStyles = [styles.cardContainer]
    if (showThumbnail) {
        containerStyles.push(styles.cardThumbnail)
    }
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={containerStyles}>
                <View style={styles.cardImageContainer}>
                    <Image
                        style={styles.cardImage}
                        source={image}
                    />
                </View>
                <View>
                    <Text style={styles.cardName}>
                        {name}
                    </Text>
                </View>
                <View style={styles.cardOccupationContainer}>
                    <Text style={styles.cardOccupation}>
                        {occupation}
                    </Text>
                </View>
                <View>
                    <Text style={styles.cardDescription}>
                        {description}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
ProfileCard.propTypes = {
    image: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    occupation: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    showThumbnail: PropTypes.bool.isRequired,
    onPress: PropTypes.func.isRequired,
}
export default class DarkLightMode extends React.Component {

    constructor(props, context) {
        super(props, context)
        this.state = {
            data
        }
    }

    handleProfileCardPress = (index) => {
        const showThumbnail = !this.state.data[index].showThumbnail
        this.setState({
            //通过immutability-helper的update方法修改data
            //update方法返回一个新对象，但是不会改变原来的data对象
            //第一个参数是原来的data，第二个参数是对原对象的解构，并且在要修改的地方调用$开头的命令来修改数据
            data: update(this.state.data,
                {
                    [index]: {
                        showThumbnail: { $set: showThumbnail }
                    }
                })
        })
    }

    render() {
        const list = this.state.data.map((item, index) => {
            const { image, name, occupation, description, showThumbnail } = item
            return <ProfileCard
                key={'card-' + index}
                image={image}
                name={name}
                occupation={occupation}
                description={description}
                onPress={() => this.handleProfileCardPress(index)}
                showThumbnail={showThumbnail}
            />
        })
        return (
            <View style={styles.container}>
                {list}
            </View>
        )

    }
}