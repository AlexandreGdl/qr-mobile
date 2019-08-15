import React , {Component} from 'react'
import {View,Text,StyleSheet, Button, ScrollView,Image,TouchableOpacity,TextInput,Animated} from 'react-native'
import {Icon} from 'react-native-elements'
import MovieCard from './movieCard'
import styles from '../style/style'

class Main extends Component {
 

    constructor(props){
        super(props)
        this.state ={
        }
    }

    render(){
        return(
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

                    <View style={{width: '100%', height: 150,}}>
                        <Image
                            source={require('../img/header-bg.jpg')}
                            style={{maxWidth: '100%', maxHeight:'100%'}}
                            resizeMode={'center'}
                        />
                        <View style={styles.teamChoiceBlock}>
                            <Text style={styles.teamChoiceText}>Discover : </Text>
                            <Text style={styles.teamChoiceText}>Spider-Man: New Generation</Text>
                        </View>
                        
                    </View>
                <View style={styles.body}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Search')}
                        style={styles.landingButton}>
                            <Text style={styles.landingText}>Trouver un film</Text>
                    </TouchableOpacity>

                    <View style={styles.searchSection}>
                        <View style={styles.inputSearch}>
                            <TextInput  placeholder="Rechercher" placeholderTextColor="#636363" style={styles.placeHolder} />
                            <Icon name={'search'} type="material" containerStyle={styles.iconSearch} size ={20}/>
                        </View>
                            <TouchableOpacity 
                                activeOpacity={1}
                                style={styles.filtreBlock}
                            >
                                <Text style={styles.filtreText}>Filtres</Text>
                            </TouchableOpacity>
                    </View>


                    {/* POPULAR SECTION */}
                    <View style={styles.newSection}>
                        <Text style={styles.popularText}>Populaires en ce moment</Text>
                        <ScrollView horizontal={true} style={styles.scrollList} showsHorizontalScrollIndicator={false}>
                            
                            {
                                [
                                    require("../img/movie_1.jpg"),
                                    require("../img/movie_2.jpg"),
                                    require("../img/movie_3.jpg"),
                                ].map((element, index) => {
                                    return(
                                        <MovieCard img={element} key={index}  navigation={this.props.navigation}/>
                                    )
                                })
                            }

                            <TouchableOpacity style={styles.movieSeeMore} >
                                <Text style={styles.textSeeMore}>Voir plus</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>

                    {/* FOR YOU SECTION */}
                    <View style={styles.newSection}>
                        <Text style={styles.popularText}>Noter sélection, rien que pour vous</Text>
                        <ScrollView horizontal={true} style={styles.scrollList} showsHorizontalScrollIndicator={false}>
                        {
                                [
                                    require("../img/movie_4.jpg"),
                                    require("../img/movie_5.jpg"),
                                    require("../img/movie_6.jpg"),
                                ].map((element, index) => {
                                    return(
                                        <MovieCard img={element} key={index} navigation={this.props.navigation}/>
                                    )
                                })
                            }

                            <TouchableOpacity style={styles.movieSeeMore} >
                                <Text style={styles.textSeeMore}>Voir plus</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>

                    {/* SEARCHING BY THEME */}

                    <View>
                        <Text style={styles.landingThemeText}>Des thèmes qui peuvent vous intéresser</Text>
                        
                        <View style={styles.themeBlock}>
                            <TouchableOpacity activeOpacity={1} style={styles.themeItem}>
                                <Text style={styles.themeItemText}>Action</Text>
                            </TouchableOpacity>
                                
                            <TouchableOpacity activeOpacity={1} style={styles.themeItem}>
                                <Text style={styles.themeItemText}>Aventures</Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={1} style={styles.themeItem}>
                                <Text style={styles.themeItemText}>Horror</Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={1} style={styles.themeItem}>
                                <Text style={styles.themeItemText}>Kid</Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={1} style={styles.themeItem}>
                                <Text style={styles.themeItemText}>Animation</Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={1} style={styles.themeItem}>
                                <Text style={styles.themeItemText}>Mystere</Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={1} style={styles.themeItem}>
                                <Text style={styles.themeItemText}>Science-Fiction</Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={1} style={styles.themeItem}>
                                <Text style={styles.themeItemText}>Guerre</Text>
                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={1} style={styles.themeItemSeeMore}>
                                <Text style={styles.themeItemText}>Plus de thèmes</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </ScrollView>
        )
    }
}


  

export default Main