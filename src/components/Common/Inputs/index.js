import React from 'react'
import { View, TextInput, Text } from 'react-native';
import { color } from '../../../assets/themes/colors';
import styles from './styles';

const Input = ({ onChangeText, iconPosition, icon, style, value, label, error }) => {
    const getflexDirection = () => {
        if (icon && iconPosition) {
            if (iconPosition === "left") {
                return "row";
            } else if (iconPosition === "right") {
                return "row-reverse";
            }
        }
    }
    const getBorderColor = () => {
        if (error) {
            return color.danger;
        } else {
            return color.grey;
        }
    }
    return (
        <View style={styles.inputContainer}>
            {label && <Text>{label}</Text>}

            <View
                style={[
                    styles.wrapper,
                    {
                        borderColor: getBorderColor(),
                        flexDirection: getflexDirection()
                    }]}>
                <View>{icon && icon}</View>

                <TextInput
                    style={[styles.textInput, style]}
                    onChangeText={onChangeText}
                    value={value}
                />
            </View>
            {error && <Text>{error}</Text>}
        </View >
    );
};

export default Input;
