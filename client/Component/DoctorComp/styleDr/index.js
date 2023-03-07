import { StyleSheet } from "react-native";
import { black, pink100, white, yellow100 } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import { horizontalScale, moderateScale, verticalScale } from "../../navigation/data/metrics";
const BGColor = "#6a6acc"
const rgbaColor = 'rgba(106, 106, 204, 0.2)'


const styleDr = StyleSheet.create({

  // ---------------- Header -------------------

  s1: {
    backgroundColor: BGColor,
    height: verticalScale(180),
    padding: moderateScale(20),
    zIndex: 20,
  },
  s: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: "space-between",
    // backgroundColor:'pink',
  },
  heading: {
    // fontWeight: "900",
  fontSize: 25,
  color: "white",
  fontFamily: "serif",
  flexWrap:"wrap",
  width:290,
  // backgroundColor:'pink',
  },
  subhead: {
    color: 'black',
    fontSize: 16,
    fontFamily: "serif",
  },
  prof: {
    alignSelf: 'center',
    width: 60,
    height: 60,
    borderRadius:30,
    // backgroundColor: 'purple',
  },
  // -----------------------  Search bar-------------

  sbar: {
    flexDirection: 'row',
    justifyContent: "space-between",
    borderRadius: 25,
    backgroundColor: "rgb(200, 200, 222)",
    marginTop: verticalScale(8),
  },
  inputsearch: {
    fontSize: 16,
    fontFamily: 'serif',
    marginLeft: 20,
    width: "100%",
    // backgroundColor:"pink"
  },

  searchimgdiv: {
    marginRight: 20
  },
  search: {
    height: verticalScale(45),
    justifyContent: 'center',
  },
  simg: {
    width: 25,
    height: 25,
  },
  // --------------  Filter ------------------
  filterdiv: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 25,
    paddingRight: 25,
    marginTop: 5,
  },
  all: {
    width: 70,
    height: 40,
    padding: 10,
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 10,
  },
  alltext: {
    fontWeight: "500",
    fontSize: 14,
    color: "black",
    fontFamily: "serif",
  },
  filter: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: BGColor,
    padding: 6,
    width: 280,
    justifyContent: 'space-between'
  },
  filtertext: {
    fontWeight: "500",
    fontSize: 14,
    color: "black",
    fontFamily: "serif",
  },
  filtercaret: {
    fontSize: 16,
    color: 'black',
  },
  filteropen: {
    borderWidth: 1,
    borderRadius: 4,
    padding: 4,
    borderColor: BGColor,
    zIndex:5
  },

  //----------------------------- Categories -------------------------------------
  h1: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
    fontFamily: "serif",
    // marginLeft: horizontalScale(14),
  },
 
  catdiv: {
    marginRight: horizontalScale(5),
    marginTop:5,
  },
  catbtn: {
    height: 70,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    // backgroundColor: 'rgba(211,211,211, 0.4)',
    backgroundColor: rgbaColor,
  },
  catimg: {
    alignSelf: 'center',
    width: 35,
    height: 35,
    marginBottom: verticalScale(4),
  },
  cattext: {
    color: 'black',
    fontSize: 13,
    fontWeight: "bold",
    fontFamily: 'serif',
    textAlign: 'center',
  },
  // ------------ Recommended doctor ------------
  container: {
    paddingLeft:15,
    paddingRight:15,
    marginTop:10,

  },
    // -------------- Category doctors ---------------------------

  docdiv: {
    marginBottom: verticalScale(10),
    borderRadius: 10,
    borderWidth:1,
    borderColor:BGColor,
    paddingLeft:15,
    paddingRight:15,
  },
  subdiv1: {
    marginTop: "3%",
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    // backgroundColor:"pink"
  },
  namediv:{
    flexDirection: 'row',
    alignItems:"center"
  },
  drimg:{
    width:40,
    height:40,
    color:BGColor,
  },
  nametext: {
    marginLeft: "7%",
    fontFamily: 'serif',
    fontSize: moderateScale(16),
    fontWeight: "700",
    color: "black",
  },
  Btn: {
    backgroundColor: '#6a6acc',
    height: verticalScale(40),
    width: horizontalScale(60),
    justifyContent: 'center',
    borderRadius: 10,
  },
  btntext: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'serif',
    fontSize: 12,
  },
  subdiv2: {
    marginTop: "3%",
    marginBottom: "2%",
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor:"yellow",
  },
  linediv: {
    justifyContent: "center",
  },
  line: {
    height: verticalScale(70),
    width: verticalScale(30),
  },
  infodiv: {
    marginLeft: "6%",
    justifyContent: 'center',
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 5,
  },
  infoimg: {
    height: verticalScale(20),
    width: verticalScale(20),
  },
  infoH: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: "black",
  },
  infoF: {
    marginLeft: "4%",
    fontSize: 14,
    fontFamily: 'serif',
    color: "black",
  },
  
 
})
export default styleDr;