import { createStackNavigator, createAppContainer} from 'react-navigation'
import Main from '../component/main'
import Movie from '../component/movie.js'


const AppNavigation  = createStackNavigator({
    Home:{
        screen: Main
    },
    Movie:{
        screen: Movie
    }
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
})

const App = createAppContainer(AppNavigation)

export default App