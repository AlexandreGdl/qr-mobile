import React , {Component} from 'react'
import {Image,TouchableOpacity,Animated} from 'react-native'
import styles from '../style/style'

class MovieCard extends Component {

    constructor(props){
        super(props)
        this.state = {
            animatedPress: new Animated.Value(1),
            img: props.img,
            navigation: props.navigation,
            routeName: props.routeName
        }
    }

    componentWillReceiveProps(props){
        this.setState({...props})
    }

    animateIn = () => {
        Animated.timing(this.state.animatedPress,{
            toValue: 0.8,
            durantion: 100
        }).start()
    }

    animateOut = () => {
        Animated.timing(this.state.animatedPress,{
            toValue: 1,
            durantion: 100
        }).start()
    }


    render(){
        const {img,routeName} = this.state
        let newStack 
        routeName === "Movie" ? newStack = true : newStack = false
        return(
            <TouchableOpacity style={{
            shadowOffset: {width: 2,height: 2},
            shadowOpacity: 0.8,
            shadowColor: "black",
            shadowRadius: 10,
            flexBasis: '45%'
        }}
            onPressIn={() => {
                this.animateIn()
            }}
            onPressOut={() => {
                this.animateOut()
            }}
            onPress={() => {
                newStack ? 
                this.props.navigation.push('Movie',{
                    id: 2,
                    type: 'movie',
                    img,
                })
                :
                this.props.navigation.navigate('Movie',{
                    id: 2,
                    type: 'movie',
                    img,
                })
            }}
            activeOpacity={1}
            >
                <Animated.View  style={{width: "100%", height: 210, borderRadius: 20,
                transform:[
                    {
                        scale:this.state.animatedPress
                    }
                ]}}>
                    <Image 
                        source={img}
                        style={{maxWidth: '100%',maxHeight: '100%',borderRadius: 15}}
                    />
                </Animated.View>
            </TouchableOpacity>
        )
    }
}

export default MovieCard