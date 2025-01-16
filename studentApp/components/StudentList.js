import { FlatList, TouchableOpacity, View } from "react-native";
import { students } from "./StudentsDb";
import { Button, Card, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import React from 'react';
export default function StudentList({route}) {
  const navigation = useNavigation();
  const [mystudents,setStudent] = useState(students);
  const [rerender,setRerender]=useState(false);
  React.useEffect(() => {
    // Handle adding a new student
    if (route.params?.newStudent) {
      const { newStudent } = route.params;
      setStudent((prev) => [...prev, newStudent]); // Append new student to the list
    }

    // Handle deleting a student by ID
    if (route.params?.id) {
      const studentIdToDelete = route.params.id;
      setStudent((prev) => prev.filter((student) => student.id !== studentIdToDelete)); // Remove the student
    }
  }, [route.params?.newStudent, route.params?.id]);
  return (
    <View>
      <FlatList
        data={mystudents}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Profile", {
                student: item,
              })
            }
          >
            <Card>
              <Text>{item.name}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
      <Button
        
        mode="contained"
        onPress={() => navigation.navigate("AddStudent")}
      >
        ADD STUDENT
      </Button>
    </View>
  );
}
