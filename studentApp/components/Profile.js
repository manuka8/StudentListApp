import { View } from "react-native";
import { Text } from "react-native-paper";

export default function Profile({ route }) {
    const {student} = route.params;
  return (
    <View>
      <Text>Name: {student.name}</Text>
      <Text>Age: {student.age}</Text>
      <Text>Address: {student.address}</Text>
      <Text>Email: {student.email}</Text>
    </View>
  );
}
