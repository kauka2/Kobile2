import { StyleSheet } from "react-native";

export const colors = {
    primary: '#343434',
    secondary: 'rgba(165, 210, 225, 0.7)'
}

export const globalStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 1,
        backgroundColor: colors.secondary,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

