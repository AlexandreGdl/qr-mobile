import React , {Component} from 'react'
import {View,Text,StyleSheet, Button,TouchableOpacity,Image,ScrollView,Alert,TextInput,ActivityIndicator} from 'react-native'
import styles from '../style/styleSearch'
import MovieCard from './movieCard'
import icons from '../img/icons'
import {Icon} from 'react-native-elements'
import API_KEY from '../API/API_KEY'
import creatingUrl from '../functions/creatingUrl'

class Search extends Component {

    constructor(props){
        super(props)
        this.state = {
            index: 1,
            type: "",
            genres:[],
            hMin: undefined,
            minMin: undefined,
            hMax: undefined,
            minMax: undefined,
            noTime: false,
            noPeople: false,
            peopleSearch: [],
            people: [],
            showPeopleSearch: 'block',
            loadingKeywords: true,
            keywords: false,
            shufflingKeywords: true,
            selectedKeywords: [],
            limite: 9,
            noKeywords: false,
            isLoading: false
        }
        this.typeView = this.typeView.bind(this)
        this.genreView = this.genreView.bind(this)
    }


    

     getPeopleFromAPI = (text) => {
        let url = `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&query=${text}&language=fr`

        return fetch(url).then((response) => response.json()).then((responseJSON) => this.setState({peopleSearch: responseJSON}))

    }

    getRealFromAPI = (text) => {
        let url = `https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&query=${text}&language=fr`

        return fetch(url).then((response) => response.json()).then((responseJSON) => this.setState({realSearch: responseJSON}))
    }



    // COMPONENT FOR THE TYPE VIEW

    typeView = (type) => {
        return(
            <View style={{paddingBottom: 50}}>
                <Text style={styles.landingText}>Que voulez-vous regarder ?</Text>

                <TouchableOpacity style={{position:'relative'}} onPress={() =>{
                    this.setState({type: 'movie'})
                }}>
                    <Image source={require('../img/movie_bg.jpg')} style={styles.typeImg}/>
                    <Text style={styles.textType}>FILM</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{position:'relative'}} onPress={() =>{
                    this.setState({type: 'tv'})
                }}>
                    <Image source={require('../img/tv_show_illustration.jpg')} style={styles.typeImg}/>
                    <Text style={styles.textType}>SERIE</Text>
                </TouchableOpacity>

                {type === 'movie' || type === 'tv' ?
                    <TouchableOpacity style={styles.buttonNext} onPress={() => {
                        this.setState({index: this.state.index + 1})
                    }}>
                        <Text style={{color:'white',fontWeight: 'bold'}}>SUIVANT</Text>
                    </TouchableOpacity> :
                     false}
            </View>
        )
    }

     // COMPONENT FOR THE GENRE VIEW

    genreView = (genres,type) => {
        return(
            <View style={{width: '100%'}}>
                <Text  style={styles.landingText}>De quelle humeur êtes-vous ?</Text>
                <View style={styles.genresContainer}>
                    {icons.map((items) => {
                        if (items.type[type] && type !== "") {
                            // ajouter ctrl pour savoir si film / série ou both
                        let exist = false
                        let index
                        for(let i = 0; i < genres.length; i++){
                            if ( genres[i].id === items.id){
                                exist = true
                                index = i
                            }
                        }
                        return(
                            <TouchableOpacity key={items.id} style={{flexBasis: '30%',marginLeft:5,marginRight:5,aspectRatio: 1/1,marginBottom:15,}} onPress={() => {
                                if (exist){
                                    genres.splice(index,1)
                                    this.setState({genres: genres})
                                } else {
                                    if (genres.length === 3){
                                        Alert.alert(
                                            'Attention',
                                            'Attention ! Vous ne pouvez pas choisir plus de 3 genres, de plus au dessus de 2 genres il sera plus difficile pour nous de vous trouver des films correspondant à vos critères ( il faut que les 3 genres existe dans le/la même film/série)'
                                        )
                                    } else {
                                        this.state.genres.push({id: items.id,name:items.name})
                                        this.setState({genres: this.state.genres})
                                    }
                                }
                            }}>
                                {
                                    exist ? 
                                        <View style={{width: "100%",aspectRatio: 1/1,display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:"#backgroundColor",borderRadius:10}}>
                                            <Icon name={'done'} type="material" color={"#3C3C3C"} containerStyle={{borderRadius: 50,backgroundColor:'green',display:'flex',justifyContent:'center',alignItems:'center',padding:5}}  size ={20}/>
                                            <Text style={{color: 'white',fontWeight:'bold',fontSize: 22,textAlign:'center',marginTop:10}}>{items.name}</Text>
                                            <Text style={{color: 'white',textAlign:'center',marginTop:8,fontSize:12}}>Sélectionné</Text>
                                        </View>
                                    : <Image source={items.img} style={{maxWidth: "100%",maxHeight:"100%",borderRadius:10}}/>
                                }
                                
                            </TouchableOpacity>
                        )
                        } else {
                            false 
                        }
                    })}
                </View>
                <Text style={{color:'white',fontSize:16,textAlign:'center',marginBottom: 15,marginTop: 20}}>Genres sélectionnés :</Text>
                <View style={{display: 'flex',width: '100%',alignItems:'center',justifyContent:'center',flexDirection:'row', marginBottom: 30}}>
                    
                    {genres.length !== 0 ?
                    genres.map((genre) => {
                        return(
                        <View key={genre.id} style={{padding: 8, backgroundColor:"#3C3C3C",borderRadius: 50,marginRight: 5, marginLeft:5,display:"flex",alignItems:'center',justifyContent:'center'}}>
                            <Text key={genre.id} style={{color: 'white', textAlign:'center',}}>{genre.name}</Text>
                        </View>
                        )  
                    })
                    :
                    <Text style={{color:'white',fontSize: 18}}>Aucun genre sélectionné</Text>}
                    
                </View>

                <TouchableOpacity style={styles.buttonNext} onPress={() => {
                        this.setState({index: this.state.index + 1})
                    }}>
                        <Text style={{color:'white',fontWeight: 'bold'}}>SUIVANT</Text>
                    </TouchableOpacity> 
            </View>
        )
    }


    

    // COMPONENT FOR THE TIME VIEW

    timeView = (type,hMin,hMax,minMin,minMax) => {
        return(
            <View>
                <Text style={styles.landingText}>Vous avez le temps ?</Text>

                <Text style={{color:'white',textAlign:'center',marginTop: 20,fontSize: 16}} >Durée du film :</Text>

                <View style={styles.timeHolder}>
                    <Text style={{color:'white',fontSize: 16}}>Durée min : </Text>    
                       {/* hour */}
                        <TextInput textAlign={'center'} style={styles.inputText}
                        keyboardType={'numeric'}
                        onChangeText={(text) => {
                            this.setState({hMin: parseInt(text,10)})
                        }}/>
                    <Text style={{color:'white',fontSize: 16}}> h </Text> 
                        {/* min */}
                        <TextInput textAlign={'center'} style={styles.inputText} 
                        keyboardType={'numeric'}
                        onChangeText={(text) => {
                            this.setState({minMin: parseInt(text,10)})
                        }}/>
                    <Text style={{color:'white',fontSize: 16}}> min </Text> 
                </View>

                <View style={styles.timeHolder}>
                    <Text style={{color:'white',fontSize: 14}}>Durée max : </Text>  
                    {/* hour */}
                    <TextInput textAlign={'center'} style={styles.inputText} 
                    keyboardType={'numeric'}
                    onChangeText={(text) => {
                            this.setState({hMax: parseInt(text,10)})
                    }}/>
                    <Text style={{color:'white',fontSize: 16}}> h </Text> 
                        {/* min */}
                        <TextInput textAlign={'center'} style={styles.inputText} 
                        keyboardType={'numeric'}
                        onChangeText={(text) => {
                            this.setState({minMax: parseInt(text,10)})
                        }}/>
                    <Text style={{color:'white',fontSize: 16}}> min </Text>   
                </View>

                <TouchableOpacity style={styles.buttonSkip}
                onPress={() => {
                    this.setState({index: this.state.index + 1,noTime: true})
                }}
                >
                    <Text style={{color:'white',fontSize: 16,}}>Passer cette étape ( conseiller )</Text>
                </TouchableOpacity>

                {hMin && minMin ?
                <TouchableOpacity style={styles.buttonNext} onPress={() => {
                    this.setState({index: this.state.index + 1,noTime: false})
                }}>
                    <Text style={{color:'white',fontWeight: 'bold'}}>SUIVANT</Text>
                </TouchableOpacity>
                : hMax && minMax ? <TouchableOpacity style={styles.buttonNext} onPress={() => {
                    this.setState({index: this.state.index + 1,noTime: false})
                }}>
                    <Text style={{color:'white',fontWeight: 'bold'}}>SUIVANT</Text>
                </TouchableOpacity> : false } 
            </View>
        )
    }

    peopleSearch = (type,peopleSearch,people,showPeopleSearch) => {
        // if type === tv bloquer l'acces
        let peopleSearchTab = []
        if (peopleSearch.results){
            for (i = 0; i < 3; i++){
                if (peopleSearch.results[i]){
                    peopleSearchTab.push({name: peopleSearch.results[i].name,id: peopleSearch.results[i].id})
                }
            }
        }
        
        return(
            <View>
                <Text style={styles.landingText}>Vous êtes fan d'un(e) acteur/trice ?</Text>

                <View style={{backgroundColor:'#3C3C3C',borderRadius:15,width: '95%',marginLeft:'auto',marginRight:'auto',alignItems:'center',marginBottom: 20,zIndex:3}}>
                    <Text style={{fontSize:18,color:'white',marginTop: 10,marginBottom:10}}>Acteurs : </Text>

                    <View style={styles.inputSearch}>
                            <TextInput  placeholder="Rechercher un acteur à ajouter" placeholderTextColor="#636363" style={styles.placeHolder} 
                            onChangeText={(text) => {
                                this.getPeopleFromAPI(text)
                                this.setState({showPeopleSearch: 'block'})
                            }}
                            />
                            <Icon name={'search'} type="material" containerStyle={styles.iconSearch} size ={20}/>
                            
                            <View style={{position:'absolute',top: '130%',height:'auto',backgroundColor:'white',zIndex:5,display: showPeopleSearch,width: '100%'}}>
                                {peopleSearchTab.map((peopleItem) => {
                                    return(
                                        <TouchableOpacity key={peopleItem.id} style={styles.searchPeopleItem} onPress={() => {
                                            
                                                this.state.people[0] = {name: peopleItem.name,id: peopleItem.id}
                                                this.setState({people: this.state.people,showPeopleSearch: 'none'})
                                            }}>
                                            <Text style={{fontSize: 16,color:'#515151'}}>{peopleItem.name}</Text>
                                        </TouchableOpacity>
                                    )
                                })}
                            </View>
                    </View>

                    {people.map((item) => {
                        return(
                            <View style={styles.chosenPeople} key={item.id}>
                                <Text style={{color:'white',fontSize:16,marginLeft:5}}>{item.name}</Text>
                                <TouchableOpacity onPress={() => {
                                    this.setState({people: []})
                                }}>
                                    <Icon  name={'delete'} color='white' type="material" size={20}/>
                                </TouchableOpacity>
                            </View>
                        )
                    })}
                </View>

                
                <TouchableOpacity style={styles.buttonSkip}
                onPress={() => {
                    this.setState({index: this.state.index + 1,noPeople: true})
                }}>
                    <Text style={{color:'white',fontSize: 16,}}>Passer cette étape ( conseiller )</Text>
                </TouchableOpacity>

                {people[0] ? 
                <TouchableOpacity style={styles.buttonNext} onPress={() => {
                    this.setState({index: this.state.index + 1,noPeople: false})
                }}>
                    <Text style={{color:'white',fontWeight: 'bold'}}>SUIVANT</Text>
                </TouchableOpacity> 
                :false}

            </View>
        )
    }

    keywordView = (loadingKeywords,keywords,selectedKeywords,shufflingKeywords,limite) => {
        let alreadyUsed = []
        if (shufflingKeywords && keywords !== false ){
            for (let i = keywords.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [keywords[i], keywords[j]] = [keywords[j], keywords[i]];
            }
        }

        if(loadingKeywords){
            
            return(
                <View style={{flex: 1,alignItems: 'center',justifyContent:'center',marginTop:150}}> 
                    <ActivityIndicator size={'large'} color={'#D11C1C'} />
                    <Text style={{marginTop: 30,color:'white',fontSize: 18,textAlign:'center',width:'80%'}}>Nous sommes en train de chercher les mots clées correspondant le plus à votre recherche .</Text>
                </View>
            )
        } else if (keywords.length === 0) {
            return(
                <View>
                    <Text>Pas de truc qui correspond</Text>
                </View>
            )
        } else if (keywords.length > 0)  {
            let r = 0
            return(
                <View>
                    <Text style={styles.landingText}>Un peu d'inspiration :</Text>
                    <Text style={{textAlign:'center',marginBottom: 30,color:'white',fontSize: 18,width: '80%'}}>Choisissez les mots-clés qui vous intéressent</Text>

                    <View style={{display:'flex',flexDirection:'row',flexWrap:'wrap',width: '92%',justifyContent:'space-around',marginLeft:'auto',marginRight:'auto',marginBottom: 20}}>
                        {keywords.map((keyword) => {
                            let check = false
                            let selected = false
                            let index 
                            let counter = 0
                            alreadyUsed.map((used) => {
                                if (used === keyword.id) {
                                    check = true
                                }
                            })
                            selectedKeywords.map((data) => {
                                if (data === keyword.id){
                                    selected = true
                                    index = counter
                                } 
                                counter++
                            })
                            alreadyUsed.push(keyword.id)
                            if (!check){
                                r++
                                if (r > limite) {
                                } else {
                                    return(
                                        <TouchableOpacity key={keyword.id} style={ selected ? styles.keywordsSelected : styles.keywords}
                                        onPress={() => {
                                            if (selected === true){
                                                this.state.selectedKeywords.splice(index,1)
                                                this.setState({selectedKeywords: this.state.selectedKeywords})
                                            } else {
                                                if (selectedKeywords.length < 3){
                                                    this.state.selectedKeywords.push(keyword.id)
                                                    this.setState({selectedKeywords: this.state.selectedKeywords,shufflingKeywords: false})
                                                } 
                                            }
                                        }}>
                                            <Text style={{color:'white',fontSize:16}}>{keyword.name}</Text>
                                        </TouchableOpacity>
                                    )
                                }
                            }
                        })}
                    </View>

                    <TouchableOpacity style={{marginTop: 5,marginBottom: 10,alignItems:'center',justifyContent:'center',borderRadius:50,borderWidth:1,borderColor:'white',padding:15,marginLeft:'auto',marginRight:'auto'}}
                    onPress={() => {
                        this.setState({limite: limite + 6,shufflingKeywords: false})
                    }}>
                        <Text style={{color:'white',fontSize:14}}>Plus de mots clés</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonSkip}
                    onPress={() => {
                        this.props.navigation.navigate('Result',{data: this.state,noKeywords: true})
                    }}>
                    <   Text style={{color:'white',fontSize: 16,}}>Passer cette étape ( conseiller )</Text>
                    </TouchableOpacity>
                    
                    { selectedKeywords.length > 0 ? 
                    <TouchableOpacity style={styles.buttonNext} onPress={() => {
                        this.props.navigation.navigate('Result',{data: this.state,noKeywords: false})
                    }}>
                        <Text style={{color:'white',fontWeight: 'bold'}}>SUIVANT</Text>
                    </TouchableOpacity> 
                    : false
                    }
                </View>
            )
        }
        
    }

    // creating the keywordsList

    getKeywordMovieList = async  (url) => {
        let list 
        let keywords = []
        let name
        this.state.type === 'movie' ? name = 'keywords' : name = 'results'
        if (url) {
            await fetch(url).then((response) => response.json()).then((responseJSON) => {
                if (responseJSON.total_results === 0) {
                    url.replace(',','|')
                    fetch(url).then((secondResponse) => secondResponse.json()).then((secondResponseJSON) => {
                        console.log("==========scnd===========")
                        list =  secondResponseJSON
                    }).catch((error) => {
                        console.log(error)
                    })
                } else {
                    console.log("==========1st===========")
                    list =  responseJSON
                }
                
            })
        }
        for (let i = 0; i < 12; i++){
            let url = `https://api.themoviedb.org/3/${this.state.type}/${list.results[i].id}/keywords?api_key=${API_KEY}`
            console.log(url)
            await fetch(url).then((response) => response.json()).then((response) => {
                let limite
                if (response[name].length > 3 ) {
                    limite = 3 
                } else {
                    limite = response[name].length
                }
                for(let i = 0; i < limite; i++){
                    keywords.push(response[name][i])
                    console.log(response)
               }
            })
        }
        this.setState({loadingKeywords: false,keywords: keywords})
    }

    render(){

        const {index,type,genres,peopleSearch,people,showPeopleSearch,loadingKeywords,keywords,hMin,hMax,minMin,minMax,selectedKeywords,shufflingKeywords,limite,isLoading} = this.state
        const state = this.state
        let indexComponent = []
        for(let j = 1; j < index + 1; j++ ){
            if (j === index ){
                indexComponent[j] = {key: j,current: true}
            } else {
                indexComponent[j] = {key: j,current: false}
            }
        }

        if (loadingKeywords && !keywords && index === 5 ){
            this.getKeywordMovieList(creatingUrl(this.state))
            
        }

        if (isLoading){
            return(
                <View style={{flex: 1,alignItems: 'center',justifyContent:'center',marginTop:150}}> 
                    <ActivityIndicator size={'large'} color={'#D11C1C'} />
                    <Text style={{marginTop: 30,color:'white',fontSize: 18,textAlign:'center',width:'80%'}}>Nous sommes en train de chercher les mots clées correspondant le plus à votre recherche .</Text>
                </View>
            )
        } else {
            return(
                <ScrollView style={{backgroundColor: '#1d1e24',flex: 1,paddingTop: 20, }}>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        index === 1 ? this.props.navigation.navigate('Main') : this.setState({index: index - 1})
                    }}>
                        <Text style={{color: "white",}} >
                            Retour
                        </Text>
                    </TouchableOpacity>
    
                    <View style={styles.indexContainer}>
                        {indexComponent.map((item) => {
                            if(item.current === true) {
                                return(
                                    <View key={item.key} style={styles.currentIndex}>
                                            <Text style={{fontSize: 18,color: "white",fontWeight:'bold'}}> {index} / 5 </Text>
                                    </View>
                                )
                            } else if (item.current === false) {
                                return(
                                    <TouchableOpacity key={item.key} style={styles.index} onPress={() => {
                                        this.setState({index: item.key})
                                    }}></TouchableOpacity>
                                )
                            }
                        })}
                    </View>
    
                    
    
                    {/* Appel de la fonction lié a l'étape */}
                    {
                        index === 1 ?
                        this.typeView(type)
                        :
                        index === 2 ?
                        this.genreView(genres,type)
                        : 
                        index === 3 ?
                        this.timeView(type,hMin,hMax,minMin,minMax)
                        :
                        index === 4 ?
                        this.peopleSearch(type,peopleSearch,people,showPeopleSearch)
                        :
                        index === 5 ?
                        this.keywordView(loadingKeywords,keywords,selectedKeywords,shufflingKeywords,limite)
                        :
                        false
                    }
    
    
                </ScrollView>
            )
        }
        
    }
}

  

export default Search