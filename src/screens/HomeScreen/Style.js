import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    outerContainer: {flex: 1, backgroundColor: "white"},
    header: {
        height: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10
    },
    headerLeftChild: {
        flexDirection: "row",
        margin: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    headerRightChild: { 
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    nameText: {
        fontWeight: "bold",
        color: "grey",
        marginEnd: 5
    },
    headerLeftChildImage: { marginHorizontal: 5 },
    scrollViewParent: { flex: 1 },
    scrollView: {
        justifyContent: "center",
        alignItems: "center"
    },
    errorText: {
            fontWeight: "bold",
            fontSize: 16
    }
});