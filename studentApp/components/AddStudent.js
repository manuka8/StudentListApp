import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function AddStudent() {
    const navigation = useNavigation();
  const [name, setName] = useState();
  const newStudent = {
    id: 19, 
    name: name,
    age: 21,
    address: "123 Maple Street, Springfield", 
    email: "default.email@example.com",
    
  } 
  return (
    <View>
      <TextInput
        label="Name"
        value={name}
        onChangeText={setName}
        mode="outlined"
      />

      <Button
        onPress={() => {
          navigation.popTo("StudentList", { newStudent});
        }}
      >ADD</Button>
    </View>
  );
}
