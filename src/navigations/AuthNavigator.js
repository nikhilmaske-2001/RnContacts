import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import { LOGIN, REGISTER } from '../constants/routeNames';

const Login = () => {
    return (
        <View>
            <Text>Hi, I am from Contacts</Text>
        </View>
    );
}

const SignUp = () => {
    return (
        <View>
            <Text>Hi, I am from ContactDetail</Text>
        </View>
    );
}


const AuthNavigator = () => {
    const AuthStack = createStackNavigator();
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name={LOGIN} component={Login}></AuthStack.Screen>
            <AuthStack.Screen name={REGISTER} component={SignUp}></AuthStack.Screen>
        </AuthStack.Navigator >
    );
}

export default AuthNavigator;