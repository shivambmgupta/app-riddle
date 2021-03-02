import { StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
    wrapper: { 
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        top: 0,
        left: 0,
        flex: 1,
        height: height,
        width: width,
        zIndex: 10,
    }, 
});