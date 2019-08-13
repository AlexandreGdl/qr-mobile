import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#1d1e24',
        flex: 1,
        paddingTop: 20,
    },
    teamChoiceBlock:{
        position: 'absolute',
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 15,
        bottom:0
    },
    teamChoiceText:{
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    body:{
        paddingBottom: 30
    },
    text:{
        color: 'white'
    },
    landingButton:{
        backgroundColor: "#a10000",
        width: '55%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 30,
        borderRadius: 50
    },
    landingText:{
        color:'white',
        textAlign: 'center',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 20,
        fontWeight: 'bold',
    },
    searchSection:{
        width: '85%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 30,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
        height: 45
    },
    inputSearch:{
        backgroundColor: 'white',
        borderRadius: 50,
        flexBasis: '70%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    placeHolder:{
        fontSize: 15,
        color: '#333',
        fontWeight: 'bold',
        marginLeft: 15,
        flexBasis: '80%'
    },
    iconSearch:{
        marginRight: 10,
        
    },
    filtreBlock:{
        borderRadius: 50,
        borderColor: 'white',
        borderWidth: 1,
        flexBasis: '26%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    filtreText:{
        color: 'white',
        textAlign: 'center',
        fontSize: 18
    },
    newSection:{
        marginTop: 30
    },
    popularText:{
        fontSize: 18,
        marginLeft: 30,
        fontWeight: "bold",
        color: 'white',
        marginBottom: 3
    },
    scrollList:{
        paddingLeft: 30,
        paddingBottom: 15,
        paddingTop:10,
    },
    moviePoster:{
        marginRight: 15,
        shadowOffset: {width: 2,height: 2},
        shadowOpacity: 0.8,
        shadowColor: "black",
        shadowRadius: 10,
    },
    movieImg: {
        width: 125,
        height: 185,
        borderRadius: 20,
    },
    movieSeeMore:{
        width: 125,
        height: 185,
        borderRadius: 20,
        borderColor: 'white',
        borderWidth: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 30
    },
    textSeeMore:{
        color: 'white',
        fontSize: 26
    },
    landingThemeText:{
        fontSize: 18,
        marginLeft: 30,
        fontWeight: "bold",
        color: 'white',
        paddingBottom: 15,
        marginTop: 30
    },
    themeBlock:{
        marginLeft: 30,
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    themeItem:{
        borderRadius: 50,
        display: 'flex',
        backgroundColor: 'grey',
        shadowOffset: {width: 1,height: 1},
        shadowOpacity: 0.5,
        shadowColor: "black",
        shadowRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        marginBottom: 10,
        padding: 10
    },
    themeItemText:{
        color: 'white'
    },
    themeItemSeeMore:{
        borderRadius: 50,
        display: 'flex',
        shadowOffset: {width: 1,height: 1},
        shadowOpacity: 0.5,
        shadowColor: "black",
        shadowRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        marginBottom: 10,
        padding: 10,
        borderColor: 'white',
        borderWidth: 1
    }
})

export default styles