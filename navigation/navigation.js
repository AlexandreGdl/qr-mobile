import {createSwitchNavigator,createAppContainer, createStackNavigator} from 'react-navigation'
import MainNavigation from './stackNavigationMain'
import SearchNavigation from './stackNavigationSearch'

const AppNavigation  = createSwitchNavigator({
    Main: {
        screen: MainNavigation
    },
    Search: {
        screen: SearchNavigation
    }
})

const App = createAppContainer(AppNavigation)

export default App