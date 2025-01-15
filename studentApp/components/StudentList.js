import { FlatList, View } from "react-native";
import { students } from "./StudentsDb";
import { Text } from "react-native-paper";

export default function StudentList(){
    return(
    <View >
        <FlatList
        data={students}
        keyExtractor={item=>item.id}
        renderItem={({item})=><Text>{item.name}</Text>} 
        />
    </View>
    )
}