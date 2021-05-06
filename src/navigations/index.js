import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';

const AppNavContainer = () => {
    const isLoggedin = true;
    return (
        <NavigationContainer>
            {isLoggedin ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer >
    );
}

export default AppNavContainer;