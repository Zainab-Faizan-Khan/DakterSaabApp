import { StyleSheet } from "react-native";
const BGColor = "#6a6acc"
const rgbaColor = 'rgba(106, 106, 204, 0.2)'

const styleAuth = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        display: "flex"
    },
    imageBG: {
        position: "absolute",
        zIndex: -1,
        height: "100%",
        width: "100%",
    },
    container1: {
        padding: 20,
        height: "100%",
        display: "flex",
        justifyContent: "center",
    },
   
    // ---- Scroll----
    s2: {
        marginTop: 20,
        display: "flex",
        width: "100%",
        borderRadius: 20,
        backgroundColor: "white",
    },
    h1: {
        marginTop: 10,
        fontWeight: "600",
        fontSize: 28,
        color: "black",
        fontFamily: "serif",
        textAlign: "center"
    },
    Rform: {
        display: "flex",
        padding: 20,
    },
    label: {
        fontWeight: "200",
        fontSize: 14,
        color: "black",
        fontFamily: "serif",
        marginTop: 5,
        marginBottom: 3
    },
    input: {
        backgroundColor: rgbaColor,
        borderRadius: 10,
        padding: 10,
        width: "100%",
        color: "black",
        fontFamily: "serif",
    },
    btnStyle: {
        backgroundColor: BGColor,
        height: 50,
        width: 180,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 10,
        // elevation: 20,
        marginTop: 20,
    },
    btntext: {
        fontFamily: 'serif',
        color: 'white',
    },
    link: {
        fontSize: 12,
        color: "black",
        fontFamily: "serif",
        marginTop: 8,
    },
    h3: {
        fontWeight: "200",
        fontSize: 10,
        color: "grey",
        fontFamily: "serif",
        textAlign: "center",
        marginTop: 10,
    },
});
export default styleAuth;