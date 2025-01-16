import { FlatList, TouchableOpacity, View } from "react-native";
import { students } from "./StudentsDb";
import { Card, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export default function StudentList(){
    const navigation = useNavigation();
    return(
    <View >
        <FlatList
        data={students}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=><TouchableOpacity onPress={()=>navigation.navigate('Profile', {
            student:item
          })}><Card><Text>{item.name}</Text></Card></TouchableOpacity>} 
        />
    </View>
    )
}