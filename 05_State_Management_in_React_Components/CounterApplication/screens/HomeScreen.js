import 'React' from 'react';
import {Text,Stylesheet,View,Button} from 'react-native';

const HomeScreen= ({navigation}) =>{
    return ( 
        <View>
            <Text style={styles.text}>Hi There!</Text>
            <Button 
                title="Go to Counter Demo" 
                onPress={()=> navigation.navigate('Counter')}
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