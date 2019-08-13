import React , { Component } from 'react'
import {View,Text,Image,ScrollView,Animated} from 'react-native'
import { NavigationActions } from 'react-navigation';
import styles from '../style/styleMovie'
import {Icon} from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
import MovieCard from './movieCard'

class Movie extends Component {

    constructor(props){
        super(props)
        this.state = {
            id: props.navigation.getParam('id'),
            type: props.navigation.getParam('type'),
            img: props.navigation.getParam('img'),
        }
    }


    render(){
        console.log(this.props.navigation.state.routeName)
        const backAction = NavigationActions.back();
        const { id, type,img} = this.state
        return(
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false} >

                <View>
                    <Image source={require('../img/movie_bg.jpg')} style={{width: '100%',height:200}} blurRadius={10}/>

                        <View style={styles.poster}>
                            <Image source={img}  style={{borderRadius:15,width: '100%',maxHeight: '100%'}} />
                        </View>
                    
                </View>
                <View style={styles.actionBlock}>
                    <Icon name={'share'} type="material" color={"white"} containerStyle={styles.iconSearch} size ={20} />
                    <Icon name={'playlist-add'} type="material" color={"white"} containerStyle={styles.iconSearch} size ={20} />
                </View>

                <Text style={{textAlign: 'center',color:'white',fontSize: 25,marginTop: 30,fontWeight: 'bold'}}>Avengers Endgame</Text>

                <View style={styles.genreBlock}>

                    <View style={styles.genreItem} >
                        <Text style={{color: 'white',fontSize:16}}>
                            Action
                        </Text>
                    </View>
                    <View style={styles.genreItem2}>
                        <Text style={{color: 'white',fontSize:16}}>
                            Aventure
                        </Text>
                    </View>
                    <View style={styles.genreItem3}>
                        <Text style={{color: 'white',fontSize:16}}>
                            Sci-Fi
                        </Text>
                    </View>

                </View>

                <View style={styles.blockInfo}>
                    <View style={styles.infoItem}>
                        <Icon name={'access-time'} type="material" color={"white"}  size ={20} />
                        <Text style={{color: 'white',marginLeft: 10  }}>3 h 02 min</Text>
                    </View>

                    <View style={styles.infoItem}>
                        <Text style={{color: '#53A774' }}>96% Excellent</Text>
                    </View>

                    <View style={styles.infoItem}>
                        <Icon name={'date-range'} type="material" color={"white"} size ={20} />
                        <Text style={{color: 'white',marginLeft: 10 }}>2014</Text>
                    </View>

                </View>

                <View style={styles.keywordBlock}>
                    <View style={styles.keywordItem}>
                        <Text style={{color: 'white',fontSize: 10}}>Univers</Text>
                    </View>
                    <View style={styles.keywordItem}>
                        <Text style={{color: 'white',fontSize: 10}}>Marvel</Text>
                    </View>
                    <View style={styles.keywordItem}>
                        <Text style={{color: 'white',fontSize: 10}}>Thanos</Text>
                    </View>
                </View>

                <Text style={styles.summaryText}>Avengers: Endgame ou Avengers : Phase finale au Québec
                est un film américain réalisé par Anthony et Joe Russo, sorti en 2019.
                Il met en scène l'équipe de super-héros des comics Marvel, les Avengers.
                Il s'agit du 22ᵉ film de l'Univers cinématographique Marvel, débuté en 2008
                et du 10ᵉ et avant-dernier de la phase III.
                </Text>

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{height: 250,paddingTop: 20,paddingBottom: 20}}>
                    {   [
                            require("../img/illustration_1.jpg"),
                            require("../img/illustration_2.jpg"),
                            require("../img/illustration_3.jpg"),
                        ].map((item,index) => {
                            return(
                                <TouchableOpacity style={styles.movieMedia} key={index}  >
                                    <Image source={item} style={{width: '100%',maxHeight:"100%",aspectRatio: 135 / 76,}} />
                                </TouchableOpacity>
                            )
                        })
                    }
                </ScrollView>

                <Text style={{textAlign: 'center', color: 'white',fontSize: 20,fontWeight:'bold',marginTop: 30,marginBottom: 10}}>Vous aimerez aussi</Text>

                <ScrollView horizontal={true} style={styles.scrollList} showsHorizontalScrollIndicator={false}>
                            
                    {
                        [
                            require("../img/movie_1.jpg"),
                            require("../img/movie_2.jpg"),
                            require("../img/movie_3.jpg"),
                        ].map((element, index) => {
                            return(
                                <MovieCard img={element} key={index}  navigation={this.props.navigation} routeName={this.props.navigation.state.routeName}/>
                            )
                        })
                    }

                </ScrollView>
                
            </ScrollView>
        )
    }
}

export default Movie