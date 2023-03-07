import { StyleSheet } from "react-native";
import { horizontalScale, moderateScale, verticalScale} from "../../navigation/data/metrics"
import { BGColor} from "../../../constants"

const styles = StyleSheet.create({
    subhead: {
        color: 'black',
        fontSize: 18,
        fontFamily: "serif",
      },
      s1: {
        backgroundColor: BGColor,
        height: verticalScale(185),
        padding: moderateScale(20),
        zIndex: 20,
      },
      // -----------------------  Search bar-------------
      
      sbar: {
        flexDirection: 'row',
        justifyContent:"space-between",
        borderRadius: 25,
        backgroundColor: "rgb(200, 200, 222)",
        marginTop: verticalScale(8),
      },
      inputsearch: {
        fontSize: 16,
        fontFamily:'serif',
        marginLeft:20,
        width:"100%",
        // backgroundColor:"pink"
      },
      
      searchimgdiv: {
        marginRight:20
      },
      search: {
        height: verticalScale(45),
        justifyContent: 'center',
      },
      simg: {
        width: 25,
        height: 25,
      },
 //-----------------------------Blood Page-----------------------------
 cdiv: {
    marginTop: verticalScale(25),
    marginLeft: horizontalScale(35),
    // backgroundColor:'pink',
  },
  cimg: {
    marginRight: 25,
    borderRadius: 15,
    height: 520,
  },
  btndiv: {
    // backgroundColor:'yellow',
    // marginTop: 20,
  },
  BBtn: {
    backgroundColor: '#6a6acc',
    height: 50,
    width: 280,
    marginHorizontal: 65,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    elevation: 90,
    shadowColor: 'red',
    marginBottom: verticalScale(28),
  },
  BText: {
    fontSize: 20,
    fontFamily: 'serif',
    color: 'white',
  },
  // ----------------------- Find Blood bank--------------------------------------

  dropdown: {
    borderRadius: 20,
    backgroundColor: "rgb(200, 200, 221)",
    marginTop: verticalScale(10),
    borderWidth: 0,
    height:38,
  },
  // ---------  sort buttons-------------
  sortbtndiv: {
    marginTop: verticalScale(10),
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  sortbtns: {
    height: 70,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sortbtntext: {
    color: 'black',
    fontSize: 13,
    fontWeight: "bold",
    fontFamily: 'serif',
    textAlign: 'center',
  },
  sortbtnimg: {
    alignSelf: 'center',
    width: 35,
    height: 35,
    // marginBottom: verticalScale(4),
  },
  // ----------------------- Featured bloodbank( Bbfeature)-----------------------
  featuredhead: {
    marginBottom: verticalScale(10),
    marginLeft: horizontalScale(15),
    fontFamily: 'serif',
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
  },
  bloodbankdiv: {
    // backgroundColor: "rgba(106, 106, 204, 0.2)",
    marginLeft: horizontalScale(10),
    marginRight: horizontalScale(10),
    marginBottom: verticalScale(20),
    borderRadius: 10,
    zIndex: -1,
    borderColor:BGColor,
    borderWidth:1,
  },

  
  subdiv: {
    marginTop: "2%",
    display: 'flex',
    flexDirection: 'row',
    // justifyContent:'',
  },
  imgdiv: {
    marginLeft: "3.5%",
    justifyContent: 'center',
    borderColor: BGColor,
    borderRadius: 10,
  },
  BBimg: {
    height: verticalScale(40),
    width: verticalScale(40),
  },
  namediv: {
    marginLeft: "4%",
    width: 220,
  },

  BBname: {
    fontFamily: 'serif',
    fontSize: moderateScale(16),
    fontWeight: "700",
    color: "black",
  },
  BBrating: {
    fontFamily: 'serif',
    fontSize: moderateScale(10),
    fontWeight: "500",
    color: "black",
  },
  // -----------infoooo------------
  linediv: {
    marginLeft: "4%",
    justifyContent: "center",
    marginBottom: "2%",
  },
  line: {
    height: verticalScale(70),
    width: verticalScale(30),
  },
  infodiv: {
    // backgroundColor: 'gr ey',
    marginLeft: "6%",
    justifyContent: 'center',
    marginBottom: "3%",
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor:'pink'
  },
  infoimg: {
    height: verticalScale(20),
    width: verticalScale(20),
    marginTop: 3,
  },
  infoT: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'serif',
    color: "black",
    
  },
  infoD: {
    marginLeft: "4%",
    fontSize: 14,
    fontFamily: 'serif',
    color: "black",
    flexWrap: 'wrap',
    width: 260,
  },
  Btndetaildiv: {
    // marginLeft: "5%",
    alignItems:"flex-end",
  },
  Btndetail: {
    marginTop: verticalScale(5),
    marginBottom: verticalScale(15),

    backgroundColor: '#6a6acc',
    height: verticalScale(35),
    width: horizontalScale(55),
    justifyContent: 'center',
    borderRadius: 10,
    

  },
  btntext: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'serif',
    fontSize: 12,
  },

  
});
export default styles;