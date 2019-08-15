import { createStackNavigator, createAppContainer} from 'react-navigation'
import Result from '../component/result'
import Movie from '../component/movie.js'


const AppNavigation  = createStackNavigator({
    Result:{
        screen: Result
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