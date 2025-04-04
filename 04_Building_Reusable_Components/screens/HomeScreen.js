import 'React' from 'react';
import {Text,Stylesheet,View,Button} from 'react-native';

const HomeScreen= ({navigation}) =>{
    return ( 
        <View>
            <Text style={styles.text}>Hi There!</Text>
            <Button 
                title="Go to Components Demo" 
                onPress={()=> navigation.navigate('Components')}
            />
            <Button 
                title="Go to List Demo" 
                onPress={()=> navigation.navigate('List')}
            />
            <Button 
                title="Go to Image Demo" 
                onPress={()=> navigation.navigate('Image')}
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