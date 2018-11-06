import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
export default class Splash extends Component {
    constructor(props){
        super(props);
        this.state = { timer: 0 };
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo}
                        source={require('../images/logo.png')}>
                    </Image>
                    <Text style={styles.title}>Sistema Multiple Administrativo</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(32, 53, 70)',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 28,
        color: 'white'
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginBottom: 100,
    },
    logo:{
        width: 128,
        height: 56,
    },
    title: {
        color: '#f7c744',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 5,
        opacity: 0.9,
    }
})