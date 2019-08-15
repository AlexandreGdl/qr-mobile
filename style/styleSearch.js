import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    button: { 
        marginTop: 20,
        fontWeight:"bold",
        width: 100,
        fontSize: 18,
        backgroundColor: 'red',
        padding: 10,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
        fontWeight:'bold'
    },
    index:{
        backgroundColor: '#515151',
        width: 15,
        height: 15,
        borderRadius: 50,
        marginLeft: 10,
        marginRight: 10
    },
    indexContainer:{
        width: "100%",
        height: 75,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 30
    },
    currentIndex:{
        display: 'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection: 'row',
        backgroundColor: '#515151',
        borderRadius: 50,
        paddingTop: 16,
        paddingBottom: 18,
        paddingLeft: 5,
        paddingRight: 5
    },
    typeImg:{
        width: "90%",
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20,
        marginTop: 5,
        height: 200,
        borderRadius: 15,
        shadowOffset: {width: 2,height: 2},
        shadowOpacity: 0.8,
        shadowColor: "black",
        shadowRadius: 10,
    },
    textType:{
        position:'absolute',
        color:'white',
        backgroundColor: 'rgba(0,0,0,0.8)',
        padding: 10,
        left: "38%",
        width: 'auto',
        top: "42%",
        textAlign:'center',
        width:100
    },
    buttonNext:{
        backgroundColor: 'red',
        borderRadius: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        flexDirection: 'row',
        width: "45%",
        height:50,
        marginLeft:'auto',
        marginRight: 'auto',
        marginBottom: 80
    },
    landingText:{
        color: 'white',
        fontSize:20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30
    },
    genresContainer:{
        display: 'flex',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        width: '95%',
        marginLeft:'auto',
        marginRight:'auto',
        flexWrap:'wrap'
    },
    timeHolder:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:"100%",
        marginTop: 50
    },
    inputText:{
        backgroundColor: "white",
        height: 25,
        width: 40,
        borderRadius: 50,
        marginLeft: 10,
        marginRight: 10,
        color: '#333', 
    },
    inputSearch:{
        backgroundColor:'white',
        borderRadius:50,
        display:'flex',
        flexDirection:'row',
        justifyContent: 'space-between',
        width: '90%',
        padding: 10,
        marginBottom: 20,
        position:'relative',
        overflow: 'visible',
        zIndex:8
    },
    placeHolder:{
        fontSize: 15,
        color: '#333',
        marginLeft: 15,
        flexBasis: '80%'
    },
    iconSearch:{
        marginRight: 10,
    },
    chosenPeople:{
        flexDirection:'row',
        width: '90%',
        marginLeft:'auto',
        marginRight:'auto',
        justifyContent:'space-between',
        alignItems:'center',
        padding: 10,
        backgroundColor:'#1C1C1C',
        marginBottom: 20,
        zIndex:1
    },
    searchPeopleItem:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        padding:10,
        borderBottomColor: '#333',
        borderBottomWidth:1
    },
    age:{
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        backgroundColor: '#3C3C3C',
        flexBasis: '47%'
    },
    allPublic:{
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        backgroundColor: '#3C3C3C',
        width: '80%',
        marginLeft:'auto',
        marginRight:'auto'
    },
    keywords:{
        marginBottom: 16,
        width:'auto',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"#3C3C3C",
        padding:10,
        borderRadius:50,
        marginLeft:4,
        marginRight: 4
    },
    keywordsSelected:{
        marginBottom: 16,
        width:'auto',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:"gray",
        padding:10,
        borderRadius:50,
        marginLeft:4,
        marginRight: 4
    },
    buttonSkip:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#3C3C3C",
        padding: 10,
        borderRadius: 50,
        marginLeft:'auto',
        marginRight:'auto',
        marginTop: 30,
        marginBottom: 30
    }
})


export default styles