import 'React' from 'react'
import {Text,StyleSheet} from 'react-native'

const ComponentsScreen=()=>{
    return (
        <View>
            <Text style={Styles.TextStyle}>Getting Started with React Native</Text>
            <Text>My name is Aryaman</Text>
        </View>
    );
};

const Styles=StyleSheet.create({
    TextStyle:{
        fontSize:30
    }
});

export default ComponentsScreen;