import HomeScreen from './src/screens/HomeScreen'
import CounterScreen from './src/screens/CounterScreen'


/*
                   |-(props)--> HomeScreen
React Navigation --|-(props)--> ListScreen
Stack Navigator    |-(props)--> ComponentsScreen
*/

const navigator = createStackNavigator(
    {
        Home:HomeScreen,
        Counter:CounterScreen
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            title: 'App'
        }
    }
);

export default createAppContainer(navigator);