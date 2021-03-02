import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    outerContainer: {
        flex: 1,
        padding: 20
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20
    },
    headerTitleText: {
        marginHorizontal: 10,
        fontSize: 16
    },
    scrollViewParentContainer: { 
        flex: 1, 
        padding: 10
    },
    commentWrapper: {
        flexDirection: "row",
        marginHorizontal: 10,
        marginVertical: 10,
        alignItems: "center"
    },
    seperator: {
        borderBottomColor: "grey",
        borderBottomWidth: 0.6,
        marginBottom: 10
    },
    bottomContainer: { 
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center", 
    },
    textInputContainer: {
        justifyContent: "flex-start",
        flexGrow: 1,
        marginHorizontal: 5
    }
});