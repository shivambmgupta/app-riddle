import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    outerContainer: {
        marginVertical: 5,
        width: '95%',
        borderRadius: 10,
        padding: 10
    },
    authorRow: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 5
    },
    authorText: {
        paddingHorizontal: 10,
        color: "grey",
        fontWeight: "bold",
        fontStyle: "italic"
    },
    titleText: {
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 5
    },
    bottomMargin5: { marginVertical: 5 },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15
    },
    image: {
        height: 150,
        width: '100%',
        borderRadius: 10
    },
    bottomRowWrapper: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    bottomRowInnerContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    textColor: {
        color: 'grey'
    }
});