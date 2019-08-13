import { createStackNavigator, createAppContainer} from 'react-navigation'
import Search from '../component/search'
import Movie from '../component/movie.js'


const AppNavigation  = createStackNavigator({
    Search:{
        screen: Search
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