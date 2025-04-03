import HomeScreen from './src/screens/HomeScreen'
import ComponentsScreen from './src/screens/ComponentsScreen'
import ListScreen from './src/screens/ListScreen'

/*

Notes_101
                   |-(props)--> HomeScreen
React Navigation --|-(props)--> ListScreen
Stack Navigator    |-(props)--> ComponentsScreen

*/

const navigator = createStackNavigator(
    {
        Home:HomeScreen,
        List:ListScreen,
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