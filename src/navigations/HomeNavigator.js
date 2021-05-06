import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';
import { CONTACT_DETAILS, CONTACT_LIST, CREATE_CONTACT, SETTINGS } from '../constants/routeNames';

const Contacts = () => {
    return (
        <View>
            <Text>Hi, I am from Contacts</Text>
        </View >
    );
}

const ContactDetail = () => {
    return (
        <View>
            <Text>Hi, I am from ContactDetail</Text>
        </View >
    );
}

const CreateContact = () => {
    return (
        <View>
            <Text>Hi, I am from CreateContact</Text>
        </View >
    );
}

const Settings = () => {
    return (
        <View>
            <Text>Hi, I am from Settings</Text>
        </View >
    );
}

const HomeNavigator = () => {
    const HomeStack = createStackNavigator();
    return (
        <HomeStack.Navigator initialRouteName={CONTACT_LIST}>
            <HomeStack.Screen name={CONTACT_LIST} component={Contacts}></HomeStack.Screen>
            <HomeStack.Screen name={CONTACT_DETAILS} component={ContactDetail}></HomeStack.Screen>
            <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact}></HomeStack.Screen>
            <HomeStack.Screen name={SETTINGS} component={Settings}></HomeStack.Screen>
        </HomeStack.Navigator >
    );
}

export default HomeNavigator;