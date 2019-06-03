import React, { Component } from 'react'
import { View, TextInput, Text, Button, TouchableOpacity } from 'react-native'

export default class RegisterScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.registerform}>
                    <TextInput style={styles.input}
                        placeholder="Enter your name"
                        returnKeyType="next"
                        onSubmitEditing={() => this.passwordInput.focus()}
                    />
                    <TextInput style={styles.input}
                        placeholder="Enter your email"
                        returnKeyType="next"
                        onSubmitEditing={() => this.passwordInput.focus()}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        ref={(input) => this.email = input}
                    />
                    <TextInput style={styles.input}
                        placeholder="username"
                        returnKeyType="next"
                        onSubmitEditing={() => this.passwordInput.focus()}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <TouchableOpacity style={styles.buttoncontainer} onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={styles.buttontext}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = {
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: '#ecf0f1',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    registerform: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    input: {
        paddingLeft: 20,
        borderRadius: 50,
        height: 50,
        fontSize: 25,
        backgroundColor: 'white',
        borderColor: '#1abc9c',
        borderWidth: 1,
        marginBottom: 20,
        color: '#34495e'
    },
    buttoncontainer: {
        height: 50,
        borderRadius: 50,
        backgroundColor: '1abc9c',
        paddingVertical: 10,
        justifyContent: 'center'
    },
    buttontext: {
        textAlign: 'center',
        color: '#ecf0f1',
        fontSize: 20
    }
}