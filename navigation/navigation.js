import {createSwitchNavigator,createAppContainer, createStackNavigator} from 'react-navigation'
import MainNavigation from './stackNavigationMain'
import SearchNavigation from './stackNavigationSearch'
import ResultNavigation from './stackNavigationResult'

const AppNavigation  = createSwitchNavigator({
    Main: {
        screen: MainNavigation
    },
    Search: {
        screen: SearchNavigation
    },
    Result:{
        screen: ResultNavigation
    }
})

const App = createAppContainer(AppNavigation)

export default App