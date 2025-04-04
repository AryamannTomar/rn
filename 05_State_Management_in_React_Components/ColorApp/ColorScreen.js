import React, {useState} from 'react';
import {View,StyleSheet,Button} from 'react-native';

/*
    What piece of data is changing in our App?     --> Colors
    What type of data is It?                       --> Array of Strings 
    What is the data's starting default value?     --> []
*/

const ColorScreen = () => {
    const [colors,setColors]=useState([]);
    return (
        <View>
            <Button title="Add a Color" onPress={()=>{
                setColors([...colors,RandomRGB()])
            }}/>
            
            <FlatList
                keyExtractor={(item)=>item}
                data={colors}
                renderItem={({item})=>{
                    return (
                        <View style={{height:100, width:100,backgroundColor:item}} />
                    );
                }}
            />
        </View>
    )
}

const RandomRGB = () => {
    const red=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    return `rgb(${red},${green},${blue})`
}

const styles=StyleSheet.create({});

export default ColorScreen;