import {StyleSheet} from 'react-native'

const styles = {
    container:{
        flex:1,
        backgroundColor: '#1d1e24'
    },
    backgroundHeader:{
        maxWidth: '100%',
        maxHeight: '10%'
    },
    poster:{
        width: 165,
        height: 225,
        borderRadius: 15,
        position: 'absolute',
        bottom: '-30%',
        left: '28%',
        shadowOffset: {width: 2,height: 2},
        shadowOpacity: 0.8,
        shadowColor: "black",
        shadowRadius: 10,
    },
    actionBlock:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        width: '30%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 80
    },
    iconSearch:{
        borderRadius: 50,
        backgroundColor: '#2B2B2B',
        padding: 10,
    },
    genreBlock:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 15
    },
    genreItem:{
        borderRadius: 50,
        width: 'auto',
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center',
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        marginLeft: 10,
        marginRight: 10
    },
    genreItem2:{
        borderRadius: 50,
        width: 'auto',
        backgroundColor:'yellow',
        justifyContent:'center',
        alignItems:'center',
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        marginLeft: 10,
        marginRight: 10
    },
    genreItem3:{
        borderRadius: 50,
        width: 'auto',
        backgroundColor:'purple',
        justifyContent:'center',
        alignItems:'center',
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        marginLeft: 10,
        marginRight: 10
    },
    blockInfo:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 15
    },
    infoItem:{
        borderRadius: 50,
        width: 'auto',
        justifyContent:'center',
        alignItems:'center',
        flexDirection: 'row',
        padding: 10,
        marginLeft: 5,
        marginRight: 5,
        backgroundColor: '#2B2B2B',
    },
    keywordBlock:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20
    },
    keywordItem: {
        padding: 10,
        borderRadius: 50,
        borderWidth:1,
        borderColor: 'white',
        marginleft: 10,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    summaryText:{
        textAlign: 'center',
        color: 'white',
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        lineHeight: 25,
        fontSize: 16
    },
    scrollList:{
        paddingLeft: 30,
        paddingBottom: 15,
        paddingTop:10,
    },
    movieMedia:{
        maxHeight:"100%",
        marginRight: 20,
        shadowOffset: {width: 2,height: 2},
        shadowOpacity: 0.8,
        shadowColor: "black",
        shadowRadius: 10,
        maxHeight:'100%',
        paddingTop: 20,paddingBottom: 20
    }
}

export default styles