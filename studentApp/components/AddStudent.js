import { View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useState } from "react";

export default function AddStudent() {
  const [name, setName] = useState("");
  const newStudent = {
    id: 21,
    name: name,
    age: 21,
    address: "123 Maple Street, Springfield",
    email: "alice.johnson@example.com",
    
  } 
  return (
    <View>
      <TextInput
        label="Email"
        value={name}
        onChangeText={setName}
        mode="outlined"
      />

      <Button
        onPress={() => {
          navigation.popTo("StudentList", { newstudent: text });
        }}
      ></Button>
    </View>
  );
}
