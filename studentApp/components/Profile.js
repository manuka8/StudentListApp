import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function Profile({ route }) {
  const navigation = useNavigation();
    const {student} = route.params;
  return (
    <View>
      <Text>Name: {student.name}</Text>
      <Text>Age: {student.age}</Text>
      <Text>Address: {student.address}</Text>
      <Text>Email: {student.email}</Text>
      <Button
        onPress={() => {
          navigation.popTo("StudentList",{id:student.id});
        }}
      >DELETE STUDENT</Button>
    </View>
  );
}
