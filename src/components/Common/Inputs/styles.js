import { StyleSheet } from "react-native";
import colors from "../../../assets/themes/colors";

export default StyleSheet.create({
    wrapper: {
        height: 42,
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 5,
        alignItems: 'center',
        marginTop: 5,
    },
    textInput: {
        flex: 1,
    },
    inputContainer: {
        paddingVertical: 12,
    }
});