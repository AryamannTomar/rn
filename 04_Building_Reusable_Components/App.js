import HomeScreen from './src/screens/HomeScreen'
import ComponentsScreen from './src/screens/ComponentsScreen'
import ListScreen from './src/screens/ListScreen'
import ImageScreen from './src/screens/ImageScreen'


/*
                   |-(props)--> HomeScreen
React Navigation --|-(props)--> ListScreen
Stack Navigator    |-(props)--> ComponentsScreen
*/

const navigator = createStackNavigator(
    {
        Home:HomeScreen,
        List:ListScreen,
        Image:ImageScreen,
        Components:ComponentsScreen,
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            title: 'App'
        }
    }
);

export default createAppContainer(navigator);