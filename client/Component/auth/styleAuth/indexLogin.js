import { StyleSheet } from "react-native";
const BGColor = "#6a6acc"
const rgbaColor = 'rgba(106, 106, 204, 0.2)'

const styleAuth = StyleSheet.create({

    // -----welcome----
    btndiv: {
        marginTop: "100%"
    },

    welbtn: {
        backgroundColor: 'white',
        height: 50,
        width: 180,
        marginHorizontal: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        elevation: 20,
        marginTop: 20,
    },
    weltext: {
        color: BGColor,
        fontFamily: 'serif'
    },

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
    // ---login page--------
    container1: {
        padding:20,
        height: "100%",
        display: "flex",
        justifyContent: "center",
    },
    s1: {
        display: "flex",
        padding:10,
    },
    head: {
        fontWeight: "900",
        fontSize: 35,
        color: "white",
        fontFamily: "serif",
        textAlign: "center",
    },
    // --- Scroll-----
    s2: {
        marginTop: 20,
        display: "flex",
        width:"100%",
        backgroundColor: "white",
        borderRadius: 20,
    },
    h1: {
        marginTop: 10,
        fontWeight: "600",
        fontSize: 32,
        color: "black",
        fontFamily: "serif",
        textAlign: "center"
    },
    h2:{
        marginTop: 10,
        fontWeight: "600",
        fontSize: 18,
        color: "black",
        fontFamily: "serif",
        textAlign: "center"

    },
    Lform: {
        display: "flex",
        padding: 20,
    },
    label: {
        fontWeight: "200",
        fontSize: 16,
        color: "black",
        fontFamily: "serif",
        marginTop: 5,
        marginBottom: 5
    },
    input: {
        backgroundColor: rgbaColor,
        borderRadius: 10,
        padding: 10,
        width: "100%",
        color: "black",
        fontFamily: "serif",
   },
    fp: {
        alignItems: 'flex-end'
    },
    btnStyle: {
        backgroundColor: BGColor,
        height: 50,
        width: 180,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
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
        marginTop: 5,
    },
    h3: {
        fontWeight: "200",
        fontSize: 10,
        color: "grey",
        fontFamily: "serif",
        textAlign: "center",
        marginTop: 10,
    },
    
    log:{
        marginTop:13
    },

    // ------verfiy
    container2:{
        marginTop:140,
        padding:20,
        // height: "100%",
        display: "flex",
        justifyContent: "center",
    }
    
});
export default styleAuth;