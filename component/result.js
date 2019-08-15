import React , {Component} from 'react'
import {View,Text,ScrollView,TouchableOpacity} from 'react-native'
import styles from '../style/styleResult.js'
import MovieCardResult from './movieCardResult'

class Result extends Component {

    constructor(props){
        super(props)
        this.state = {
            data: props.navigation.getParam('data')
        }
    }

    render(){
        const {data} = this.state
        return(
            <ScrollView style={{backgroundColor: '#1d1e24',flex: 1,paddingTop: 20, }}>
                <TouchableOpacity style={styles.button} onPress={() => {
                        this.props.navigation.navigate('Main') 
                    }}>
                    <Text style={{color: "white",}} >
                        Retour
                    </Text>
                </TouchableOpacity>

                <Text style={{width: '70%',color:'white',textAlign:'center',fontWeight:'bold',fontSize:18,marginTop:20,marginBottom:20}}>Nous avons trouvé 36 résultats pour vous :</Text>
                

                <View style={{display:'flex',flexDirection:'row',flexWrap:'nowrap',wdith:'95%',borderRadius:15,backgroundColor:"#3C3C3C",justifyContent:'space-around'}}>
                    <MovieCardResult img={require('../img/movie_1.jpg')} navigation={this.props.navigation} />
                    <View style={{flexBasis:'45%',backgroundColor:'red'}}>

                    </View>
                </View>

            </ScrollView>
        )
    }
}



export default Result