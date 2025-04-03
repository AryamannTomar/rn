import 'React' from 'react';
import {Text,StyleSheet,FlatList} from 'react-native'

const ListScreen=()=>{
    const friends=[
        {name:'Friend #1',age:15},
        {name:'Friend #2',age:37},
        {name:'Friend #3',age:14},
        {name:'Friend #4',age:22},
        {name:'Friend #5',age:53},
        {name:'Friend #6',age:46},
        {name:'Friend #7',age:35}
    ]
    return <FlatList 
    horizontal
    showsHorizontalScoreIndicator={false}
    keyExtractor={(f)=>f.name}
    data={friends}
    returnItem={({item})=>{
        return <Text>{item.name}</Text>
    }}
    />
};
const Styles=StyleSheet.create({
    textStyle:{
        marginVertical: 30
    }
})
export default ListScreen;