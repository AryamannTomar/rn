import 'React' from 'react';
import {Text,Stylesheet,View,Button,TouchableOpacity} from 'react-native';

// const HomeScreen= props =>{
//     return ( 
//         <View>
//             <Text style={styles.text}>Hi There!</Text>
//             <Button 
//                 onPress={()=> props.navigation.navigate('Components')}
//                 title="Go to Components Demo" 
//             />
//             <TouchableOpacity onPress={()=> props.navigation.navigate('List')}>
//                 <Text>Go to List Demo</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

const HomeScreen= ({navigation}) =>{
    return ( 
        <View>
            <Text style={styles.text}>Hi There!</Text>
            <Button 
                onPress={()=> navigation.navigate('Components')}
                title="Go to Components Demo" 
            />
            <Button 
                onPress={()=> navigation.navigate('List')}
                title="Go to List Demo" 
            />

        </View>
    );
};

const styles=Stylesheet.create({
    text:{
        fontSize: 30
    }
});

export default HomeScreen;