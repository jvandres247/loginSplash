import React, { Component } from 'react'
import {
    StyleSheet, Text, View, Image,
    TouchableWithoutFeedback, StatusBar,
    TextInput, SafeAreaView, Keyboard, TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native'

export default class Login extends Component {
    render() {
        return (
                <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                        <View style={styles.logoContainer}>
                            <Image style={styles.logo}
                                source={require('../images/logo.png')}>
                            </Image>
                            <Text style={styles.title}>Sistema Multiple Administrativo</Text>
                        </View>
                        <View style={styles.infoContainer}>
                            <TextInput style={styles.input}
                                placeholder="Ingrese su correo"
                                placeholderTextColor='rgba(255,255,255,0.8)'
                                keyboardType= 'email-address'
                                returnKeyType='next'
                                autoCorrect={false}
                                />
                            <TextInput style={styles.input}
                                placeholder="Ingrese su contraseña"
                                placeholderTextColor='rgba(255,255,255,0.8)'
                                secureTextEntry
                                returnKeyType='go'
                                autoCorrect={false}
                                />
                                <TouchableOpacity style={styles.buttonContainer}>
                                    <Text style={styles.buttonText}>Iniciar Sesión</Text>
                                </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(32, 53, 70)',
        flexDirection: 'column',
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
    },
    infoContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 30,
        height: 200,
        padding: 0,
        paddingHorizontal: 50,
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#FFF',
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    buttonContainer: {
        backgroundColor: '#f7c744',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: 'rgb(32,53,70)',
        fontWeight: 'bold',
        fontSize: 18
    }
})